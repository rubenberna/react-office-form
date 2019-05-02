import axios from 'axios'

export const postLead = async (obj) => {  
  return axios.post('/lead', {
       obj
     })
     .then(res => res)
     .catch(err => err)
}