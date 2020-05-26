import React from 'react'
import fs from 'fs'
import { useDispatch, useSelector } from 'react-redux'

import PoButton from "../../components/PoButton"
import OpenButton from "../../components/OpenButton"

import { openFile } from '../../services/file/actions'

import "./Main.css"

export default () => {
  const dispatch = useDispatch()
  const error = useSelector(a => a.file.error)

	return (
		<div class="Main--container">
			<div class="Main--top-row">
				<OpenButton handleOpen={() => dispatch(openFile())} />
        <div class="Main--error">{error}</div>
 			</div>
			<div class="Main--row"> <PoButton /> <PoButton /> <PoButton /> <PoButton /> </div>
			<div class="Main--row"> <PoButton /> <PoButton /> <PoButton /> <PoButton /> </div>
			<div class="Main--row"> <PoButton /> <PoButton /> <PoButton /> <PoButton /> </div>
			<div class="Main--row"> <PoButton /> <PoButton /> <PoButton /> <PoButton /> </div>
		</div>
	)
}
