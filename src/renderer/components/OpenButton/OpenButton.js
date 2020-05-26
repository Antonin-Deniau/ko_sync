import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAudio } from '@fortawesome/free-solid-svg-icons'

import "./OpenButton.css"

export default ({ handleOpen }) => <FontAwesomeIcon onClick={handleOpen} class="OpenButton--main" icon={faFileAudio} />
