const jsforce = require('jsforce');
const session = require('express-session');
const axios = require('axios');

// Organisation in Salesforce
const org = new jsforce.Connection()
const url = process.env.WEB_TO_LEAD_URL

module.exports = {
  // Connect to Salesforce
  login: () => {
    org.login(process.env.SF_USERNAME, process.env.SF_PASSWORD + process.env.SF_SECURITY_TOKEN, function (err, userInfo) {
      try {
        session.org = org;
        session.token = org.accessToken;
        return console.log('Access Token: ' + org.accessToken);
      } catch (e) {
        console.log(e);
      }
    })
  },

  createLead: (obj) => {
    const url = process.env.WEB_TO_LEAD_URL    
      return axios.post(`${url}&first_name=${obj[0].first_name}&last_name=${obj[0].last_name}&00N1v00000SjZYU=${obj[0].language_lead__c}&email=${obj[0].email}&mobile=${obj[0].mobile}&street=${obj[0].street}&00N0Y00000R6Rsq=${obj[0].Box__c}&zip=${obj[0].zip}&city=${obj[0].city}&00N0Y000007xqGf=${obj[0].Gewenst_aantal_uren_per_week__c}&00N0Y000009dQFo=${obj[0].Wensen__c}&00N0Y00000R6Rt2=${obj[0].Frequentie__c}&00N0Y00000R6RtA=${obj[0].Maandagpicklist__c}&00N0Y00000R6Rsv=${obj[0].Dinsdagpicklist__c}&00N0Y00000R6RtN=${obj[0].Woensdagpicklist__c}&00N0Y00000R6Rsw=${obj[0].Donderdagpicklist__c}&00N0Y00000R6RtL=${obj[0].Vrijdagpicklist__c}&00N0Y00000R6RtO=${obj[0].Zaterdagpicklist__c}&lead_source=${obj[0].lead_source}&00N0Y00000R6RtI=${obj[0].RegioId__c}&00N0Y00000R6Rt5=${obj[0].KantoorId__c}`)
      .then(res => res.status)
      .catch(err => err)
  },

  createSolicitant: (obj) => {   
    const url = process.env.WEB_TO_LEAD_URL
      return axios.post(`${url}&first_name=${obj[0].first_name}&last_name=${obj[0].last_name}&00N1v00000SjZYU=${obj[0].language_lead__c}&email=${obj[0].email}&mobile=${obj[0].mobile}&street=${obj[0].street}&00N0Y00000R6Rsq=${obj[0].Box__c}&zip=${obj[0].zip}&city=${obj[0].city}&lead_source=${obj[0].lead_source}&00N0Y00000R6RtI=${obj[0].RegioId__c}&00N0Y00000R6Rt5=${obj[0].KantoorId__c}&00N0Y00000R8AfP=1`)
        .then(res => res.status)
        .catch(err => err)
  }
}

// return axios.post(url, {
//   first_name: obj[0].first_name,
//   last_name: obj[0].last_name,
//   '00N1v00000SjZYU': obj[0].language_lead__c,
//   email: obj[0].email,
//   mobile: obj[0].mobile,
//   street: obj[0].street,
//   '00N0Y00000R6Rsq': obj[0].Box__c,
//   zip: obj[0].zip,
//   city: obj[0].city,
//   '00N0Y000007xqGf': obj[0].Gewenst_aantal_uren_per_week__c,
//   '00N0Y000009dQFo': obj[0].Wensen__c,
//   '00N0Y00000R6Rt2': obj[0].Frequentie__c,
//   '00N0Y00000R6RtA': obj[0].Maandagpicklist__c,
//   '00N0Y00000R6Rsv': obj[0].Dinsdagpicklist__c,
//   '00N0Y00000R6RtN': obj[0].Woensdagpicklist__c,
//   '00N0Y00000R6Rsw': obj[0].Donderdagpicklist__c,
//   '00N0Y00000R6RtL': obj[0].Vrijdagpicklist__c,
//   '00N0Y00000R6RtO': obj[0].Zaterdagpicklist__c,
//   'lead_source': obj[0].lead_source,
//   '00N0Y00000R6RtI': obj[0].RegioId__c,
//   '00N0Y00000R6Rt5': obj[0].KantoorId__c
// })