import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import "./CloseButton.css"

export default ({ handleClose }) => <FontAwesomeIcon onClick={handleClose} class="CloseButton--main" icon={faTimes} />
