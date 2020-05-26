import { SET_ERROR, SET_FILE } from './actionTypes'

const initialState = {
  file: [],
  error: "",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILE:
      return Object.assign({}, state, { file: action.file, error: "" })
    case SET_ERROR:
      return Object.assign({}, state, { error: action.error })
    default:
      return state
  }
}
