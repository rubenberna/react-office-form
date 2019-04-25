const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  console.log('got here');
  console.log(req.body);


})

module.exports = router;