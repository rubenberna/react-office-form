import {
  SAVE_FORM_SOLLICITANT
} from '../../actions/types'

const initialUserState = {
  arr:[]
}
export default (state = initialUserState, action) => {
  switch (action.type) {
    case SAVE_FORM_SOLLICITANT:
      return { ...state,
        arr: [...state.arr, action.payload]
         }
    default:
      return state
  }
}