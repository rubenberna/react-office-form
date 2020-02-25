import axios from 'axios'

const url = process.env.REACT_APP_WEB_TO_LEAD_URL
const sandbox = process.env.REACT_APP_SANDBOX
const proxy = process.env.REACT_APP_PROXY

/*
  4 things are necessary to insert a lead:
  company, regioID, kantoor Ingave (=1) and kantoor__c (=name of the office)
*/
const postLead = (lead) => {
  console.log('webtolead: ', lead);
  return axios.post(`
    ${proxy}${url}&first_name=${lead.first_name}&last_name=${lead.last_name}&email=${lead.email}&mobile=${lead.mobile}&phone=${lead.mobile}&street=${lead.street}&00N0Y00000R6Rsq=${lead.Box__c}&zip=${lead.zip}&city=${lead.city}&00N0Y000007xqGf=${lead.Gewenst_aantal_uren_per_week__c}&00N0Y000009dQFo=${lead.Wensen__c}&00N0Y00000R6Rt2=${lead.Frequentie__c}&00N0Y00000R6RtA=${lead.Maandagpicklist__c}&00N0Y00000R6Rsv=${lead.Dinsdagpicklist__c}&00N0Y00000R6RtN=${lead.Woensdagpicklist__c}&00N0Y00000R6Rsw=${lead.Donderdagpicklist__c}&00N0Y00000R6RtL=${lead.Vrijdagpicklist__c}&00N0Y00000R6RtO=${lead.Zaterdagpicklist__c}&lead_source=${lead.lead_source}&00N0Y00000RzeEo=${lead.NaamActie__c}&00N0Y00000RzeEt=${lead.DetailActie__c}&00N1v00000SjZYU=${lead.language_lead__c}&00N0Y00000SKsXD=1&00N0Y000007xqXS=${lead.kantoorName}&00N0Y00000R6RtI=${lead.regio}&00N0Y00000R6Rt7=1`)
    .then(res => {
      console.log(res.status)
      return res.status
    })
    .catch(err => {
      console.log(err)
      return err
    })
}

const postSolicitant = solicitant => {
  console.log(solicitant);
  return axios.post(`
    ${proxy}${url}&first_name=${solicitant.first_name}&last_name=${solicitant.last_name}&email=${solicitant.email}&mobile=${solicitant.mobile}&phone=${solicitant.mobile}&street=${solicitant.street}&00N0Y00000R6Rsq=${solicitant.Box__c}&zip=${solicitant.zip}&city=${solicitant.city}&00N0Y00000RzeEo=${solicitant.NaamActie__c}&00N0Y00000RzeEt=${solicitant.DetailActie__c}&00N0Y00000R8AfP=1&00N0Y000007xqXS=${solicitant.kantoorName}&00N0Y00000R6RtI=${solicitant.regio}&00N0Y00000R6Rt7=1`)
    .then(res => {
      console.log(res.status)
      return res.status
    })
    .catch(err => {
      console.log(err)
      return err
    })
}

const postStrijk = strijk => {
  console.log(strijk);
  return axios.post(`
    ${proxy}${url}&first_name=${strijk.first_name}&last_name=${strijk.last_name}&email=${strijk.email}&mobile=${strijk.mobile}&phone=${strijk.mobile}&street=${strijk.street}&00N0Y00000R6Rsq=${strijk.Box__c}&zip=${strijk.zip}&city=${strijk.city}&00N0Y00000RvK5Q=1`)
    .then(res => {
      console.log(res.status)
      return res.status
    })
    .catch(err => {
      console.log(err)
      return err
    })
}
export default {
  postLead,
  postSolicitant,
  postStrijk
}
