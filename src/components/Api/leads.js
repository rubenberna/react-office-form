import axios from 'axios'

export const postLead = async obj => {  
  const data = await axios.post('/lead', { obj })
  return data
}