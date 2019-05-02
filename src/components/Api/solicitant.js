import axios from 'axios'

export const postSolicitant = async (obj) => {  
  return axios.post('/solicitant', {
       obj
     })
     .then(res => res)
     .catch(err => err)
}