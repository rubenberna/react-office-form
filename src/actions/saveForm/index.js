
import {
  SAVE_FORM_CLIENT,
  SAVE_FORM_SOLLICITANT,
  SAVE_FORM_STRIJKEN

} from '../types'


export const saveFormClient = (data) => {
  return {
    type: SAVE_FORM_CLIENT,
    payload: data
  }
}
export const saveFormSollicitant = (data) => {
  return {
    type: SAVE_FORM_SOLLICITANT,
    payload: data
  }
}
export const saveFormStrijken = (data) => {
  return {
    type: SAVE_FORM_STRIJKEN,
    payload: data
  }
}