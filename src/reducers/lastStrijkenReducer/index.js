import {
  SAVE_FORM_STRIJKEN
} from '../../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_FORM_STRIJKEN:
      return { ...state, ...action.payload }
    default:
      return state
  }
}