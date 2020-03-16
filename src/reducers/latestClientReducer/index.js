import {
  SAVE_FORM_CLIENT
} from '../../actions/types'


const initialUserState =[]
export default (state = initialUserState, action) => {
  switch (action.type) {
    case SAVE_FORM_CLIENT:
      return  [...state, action.payload]
         
    default:
      return state
  }
}