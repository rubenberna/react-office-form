const express = require('express');
const router = express.Router();
const salesforce = require('../config/salesforce')

router.post('/', async (req, res) => {
  const obj = Object.values(req.body)
  await salesforce.createLead(obj)
    .then(res => res.status(200).send(res))
    .catch(err => res.status(404).send(err))
})

module.exports = router;