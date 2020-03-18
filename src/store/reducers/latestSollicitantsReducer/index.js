export default (state = [], action) => {
  switch (action.type) {
    case "SAVE_FORM_SOLLICITANT":
      return [...state, action.payload]
    default:
      return state
  }
}