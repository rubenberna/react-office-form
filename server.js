// Include the cluster module
const cluster = require('cluster');

// Code to run if we're in the master process
if (cluster.isMaster) {

  // Count the machine's CPUs
  const cpuCount = require('os').cpus().length;

  // Create a worker for each CPU
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

  // Listen for terminating workers
  cluster.on('exit', function (worker) {

    // Replace the terminated workers
    console.log('Worker ' + worker.id + ' died :(');
    cluster.fork();

  });

  // Code to run if we're in a worker process
} else {
    const express = require('express');
    const cors = require('cors');
    const session = require('express-session');
    const bodyParser = require('body-parser');
    const dotenv = require('dotenv');
    const path = require('path');
    const favicon = require('express-favicon');
    const port = process.env.PORT || 5000;
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
    }));

    // Use Routes
    app.use('/lead', lead)
    app.use('/solicitant', solicitant)

  // Handle production
    if(process.env.NODE_ENV === 'production') {
      app.use(favicon(__dirname + '/build/favicon.ico'));
      // Static folder
      app.use(express.static(__dirname));
      // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))    
      // Handle SPA
      app.use(express.static(path.join(__dirname, 'build')));
  
      app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
      });

      // reads: any route at all, send the file index.html located in the public folder
      // Use .env variables
      require('dotenv').load();
    }
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    })
  }
