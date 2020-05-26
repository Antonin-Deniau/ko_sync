import React from 'react'
import { remote } from 'electron';

import CloseButton from '../../components/CloseButton'
import MinimiseButton from '../../components/MinimiseButton'

import "./App.css"

const handleClose = () => {
	const window = remote.getCurrentWindow()
	window.close()
}

const handleMinimise = () => {
  const window = remote.getCurrentWindow()
  window.minimize()
}

export default ({children}) => <div class="App--main">
		<div class="App--bar">
      <div class="App--title">PO-33 KO! Sync</div>
      <MinimiseButton handleMinimise={handleMinimise} />
      <CloseButton handleClose={handleClose} />
    </div>
		<div class="App--container">{children}</div>
	</div>
