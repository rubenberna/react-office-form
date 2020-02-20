import axios from 'axios'

const url = process.env.REACT_APP_WEB_TO_LEAD_URL
const sandbox = process.env.REACT_APP_SANDBOX
const proxy = process.env.REACT_APP_PROXY

const postLead = (lead) => {
  console.log(lead);
        // return axios.post(`
        //   ${proxy}${url}&first_name=${lead.voornaam}&last_name=${lead.achternaam}&00N1v00000SjZYU=${lead.language}&email=${lead.email}&mobile=${lead.gsm}&street=${lead.straat}&00N0Y00000R6Rsq=${lead.postbus}&zip=${lead.postcode}&city=${lead.gemeente}&00N0Y000007xqGf=${lead.uren}&00N0Y000009dQFo=${lead.info}&00N0Y00000R6Rt2=${lead.frequentie}&00N0Y00000R6RtA=${lead.maandag}&00N0Y00000R6Rsv=${lead.dinsdag}&00N0Y00000R6RtN=${lead.woensdag}&00N0Y00000R6Rsw=${lead.donderdag}&00N0Y00000R6RtL=${lead.vrijdag}&00N0Y00000R6RtO=${lead.zaterdag}&lead_source=leadpartner&00N1v00000T003f=${lead.refCode}&00N0Y00000SKsXD=1`)
        //   .then(res => console.log(res.status))
        //   .catch(err => console.log(err))
}

const postSolicitant = solicitant => {
  console.log(solicitant);
}

const postStrijk = strijk => {
  console.log(strijk);
}
export default {
  postLead,
  postSolicitant,
  postStrijk
}
