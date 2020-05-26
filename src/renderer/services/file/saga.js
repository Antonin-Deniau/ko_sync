import { WaveFile } from 'wavefile'
import { remote } from 'electron'

import { call, put, takeEvery } from 'redux-saga/effects'
import { OPEN_FILE_REQUEST, SET_ERROR, SET_FILE } from './actionTypes'

const fs = window.require('fs')

function* openFile() {
    try {
      let { filepath } = yield remote.dialog.showOpenDialog({ properties: ['openFile'] })
      if (!filepath || filepath[0] == 'undefined') throw new Error("Please enter a valid file.")
      let data = fs.readFileSync(filepath[0])
      let wav = new WaveFile(data)

      if (wav.fmt.numChannels === 2) {
        yield put({ type: SET_FILE, file: wav })
      }  else {
        throw new Error("Wrong number of channel")
      }
    } catch (e) {
      console.log("error")
      console.log(e)
      yield put({ type: SET_ERROR, error: e.message })
    }
}

export default function* () {
  yield takeEvery(OPEN_FILE_REQUEST, openFile)
}
