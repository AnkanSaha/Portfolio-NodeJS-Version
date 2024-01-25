const express = require('express') // express
const os = require('os') // os
const cluster = require('cluster') // cluster
const app = express() // initialize express
const CORS = require('cors') // CORS
const { Router } = require('./router') // General Routing
const PostRequests = require('./Controller/Post Request/Post')
const GetRequests = require('./Controller/Get Request/Get')
const credential = require('./Secret/credential.js') // credential
const port = credential.PORT || 5678 // Port

// Cors Configuration
const CorsConfig = {
  origin: '*',
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Accept',
    'Origin',
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Methods',
    'Access-Control-Allow-Credentials'
  ],
  credentials: true,
  exposedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Accept',
    'Origin',
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Methods',
    'Access-Control-Allow-Credentials'
  ],
  maxAge: 86400,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200,
  preflightContinue: false
}

// Cluster Configuration
let cpuCount = os.cpus().length

if (cluster.isMaster) {
  while (cpuCount > 0) {
    cluster.fork()
    cpuCount--
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)
    cluster.fork()
  })
} else {
  app.use(CORS(CorsConfig)) // setting up CORS
  app.listen(port, () => {
    console.log(`app listening at port No ${port}`)
  }) // listening port

  app.use(express.urlencoded({ extended: true })) // form data encoding
  app.use(express.json()) // Json Data Encoding
  app.use(express.static('static')) // serving static files
  app.use(Router) // linking File Routing
  app.use(PostRequests) // Linking All Post Requests Routing
  app.use(GetRequests) // Linking All Get Requests Routing

  // pug engine configuration
  app.set('view engine', 'pug')
  app.set('views', './static/blogs')
}

// 404 Page
app.get('*', (request, response) => {
  response.status(404).render('404', {
    title: '404 : Page Not Found',
    routes: '/',
    exit: 'Go To Home'
  })
})
