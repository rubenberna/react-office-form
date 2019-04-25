const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const salesforce = require('./config/salesforce');
const dotenv = require('dotenv');
dotenv.config();

const app = express()

// Load routes
const lead = require('./routes/lead')
const solicitant = require('./routes/solicitant')

  //Middleware
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})) // allow images
app.use(cors())

  // Set up session
app.use(session({
  secret: 's3cret', // it can be anything we want
  resave: true, // changed to true
  saveUninitialized: true,
  org: {}, // salesforce
  token: null // salesforce
}));

// Use Routes
app.use('/lead', lead)
app.use('/solicitant', solicitant)

app.get('/api', (req, res) => {
  const customers = [
    { id: 0, firstname: 'John', lastname: 'Doe'},
    { id: 1, firstname: 'Mary', lastname: 'Smith'},
    { id: 2, firstname: 'Luke', lastname: 'Dave'}
  ]

  res.json(customers)
})

const port = 5000

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  salesforce.login();
})