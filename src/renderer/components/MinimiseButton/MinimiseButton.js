import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'

import "./MinimiseButton.css"

export default ({ handleMinimise }) => <FontAwesomeIcon onClick={handleMinimise} class="MinimiseButton--main" icon={faWindowMinimize} />

