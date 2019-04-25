const express = require('express');
const router = express.Router();
const salesforce = require('../config/salesforce')

router.post('/', async (req, res) => {
  const obj = req.body
  await salesforce.createLead(obj)
    .then(lead => res.status(200).send(lead))
    .catch(err => res.status(404).send(err))
})

module.exports = router;