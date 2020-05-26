import React, { useState } from 'react'
import { WaveFile } from 'wavefile'
import { remote } from 'electron'
import fs from 'fs'
import PoButton from "../../components/PoButton"
import OpenButton from "../../components/OpenButton"

import "./Main.css"

export default () => {

	const handleOpen = async () => {
		let { filePaths } = await remote.dialog.showOpenDialog({ properties: ['openFile'] })
		let data = fs.readFileSync(filePaths[0])

		let wav = new WaveFile(data)
		console.log(wav)
		if (wav.fmt.numChannels != 2) return

	}

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