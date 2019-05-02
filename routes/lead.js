const express = require('express');
const router = express.Router();
const salesforce = require('../config/salesforce')

router.post('/', async (req, res) => {
  const obj = Object.values(req.body)
  await salesforce.createLead(obj)
    .then(data => res.sendStatus(200))
    .catch(err => res.sendStatus(400))
})

module.exports = router;