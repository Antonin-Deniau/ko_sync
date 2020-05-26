import { spawn } from "redux-saga/effects"
import file from './file/saga'

export default function*() {
  yield spawn(file)
}
