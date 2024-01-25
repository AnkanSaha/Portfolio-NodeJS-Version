const express = require('express')
const app = express.Router()
const mongoose = require('mongoose')
const Request = require('../../../Server/MongoModel.js')
const credential = require('../../../Secret/credential.js')

// Endpoint
// sending all messages
app.get('/admin/message', (request, response) => {
  // variable for storing all messages
  mongoose.connect(credential.MOngoDB_URI).then(async () => {
    const data = await Request.Request.find() // getting all messages
    if (data.length === 0) {
      response.status(200).json({ status: 'failed' })
    } else if (data.length > 0) {
      response.status(200).json({ status: 'success', data })
    }
  })
})

module.exports = app
