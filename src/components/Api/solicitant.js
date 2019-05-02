import axios from 'axios'

export const postSolicitant = async (obj) => {  
  const data = await axios.post('/solicitant', { obj })
  return data
}