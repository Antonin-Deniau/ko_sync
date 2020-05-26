import React, { useState } from 'react'
import { WaveFile } from 'wavefile'
import { remote } from 'electron'
import fs from 'fs'
import PoButton from "../../components/PoButton"
import OpenButton from "../../components/OpenButton"

import "./Main.css"

export default () => {
	let [samples, setSamples] = useState([])
	let [startIndex, setStartIndex] = useState(0)
	let [maxAmplitude, setMaxAmplitude] = useState(0)
	let [sampleRate, setSampleRate] = useState(0)
	let [offset, setOffset] = useState(0)

	const handleOpen = async () => {
		let { filePaths } = await remote.dialog.showOpenDialog({ properties: ['openFile'] })
		let data = fs.readFileSync(filePaths[0])

		let wav = new WaveFile(data)
		console.log(wav)
		if (wav.fmt.numChannels != 2) return

		setSampleRate(wav.fmt.sampleRate)
		let dta = wav.getSamples()
		setSamples(wav.getSamples())

		let ddd = ""
		for (let i = 0; i < dta[0].length; i++) {
			let left = dta[0][i]
			let right = dta[1][i]

			ddd += `${i},${left},${right}\n`
		}

			/*
		let maxL = dta[0].reduce((a, b) => Math.max(a, b))
		let maxR = dta[1].reduce((a, b) => Math.max(a, b))

		//console.log(Math.pow(2, wav.fmt.bitsPerSample) / 2)
		setMaxAmplitude(Math.max(maxL, maxR))

		for (let i = 0; i < 20000; i++) { // 94000 echantillon pour la 1ere phase
			let left = Math.abs(dta[0][i])
			let right = Math.abs(dta[1][i])

			if (left > (maxAmplitude * 0.9) || right > (maxAmplitude * 0.9) ) break
			setStartIndex(i)
		}
		console.log(`Start at: ${startIndex}`)
*/

		await fs.writeFileSync("./output.csv", ddd)
	}

	const tryRate = () => {
		let oscilatorFreq = 7800
		let oscilatorLenght = 1 / oscilatorFreq
		let sampleLenght = 1 / sampleRate

		let samplePerPattern = oscilatorLenght / sampleLenght

		let amount = 0
		for (let i = startIndex; i < 2000; i += samplePerPattern) {
			let left = samples[0][Math.round(i) + offset]
			let right = samples[1][Math.round(i) + offset]

			let condition = Math.abs(left) > (maxAmplitude * 0.2) && Math.abs(right) > (maxAmplitude * 0.2)
			if (condition) amount ++
			console.log(`${Math.round(i)}: ${condition ? "VVVVVVVVVVVV" : "" }`)
		}
		console.log(amount)
	}

	/*<input type="range" onChange={e => setOffset(e.target.value)} min="0" max="12" value={offset} />
	{offset}
	<button onClick={tryRate}>Test</button>*/

	return (
		<div class="Main--container">
			<div class="Main--top-row">
				<OpenButton handleOpen={handleOpen} />
				<div class="Main--space"/>
 			</div>
			<div class="Main--row"> <PoButton /> <PoButton /> <PoButton /> <PoButton /> </div>
			<div class="Main--row"> <PoButton /> <PoButton /> <PoButton /> <PoButton /> </div>
			<div class="Main--row"> <PoButton /> <PoButton /> <PoButton /> <PoButton /> </div>
			<div class="Main--row"> <PoButton /> <PoButton /> <PoButton /> <PoButton /> </div>
		</div>
	)
}