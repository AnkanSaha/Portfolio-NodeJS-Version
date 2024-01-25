const express = require('express')
const app = express.Router()
const { Auth_Code } = require('../../../Other Services/saveData')
const mongoose = require('mongoose')
const Request = require('../../../Server/MongoModel.js')
const credential = require('../../../Secret/credential.js')

// Endpoints

// Admin Login verification
app.post('/CodeVerify', (request, response) => {
  const UserAdminCode = request.body.AdminCode
  console.log(UserAdminCode)
  const ResStatus = Auth_Code.includes(UserAdminCode)
  if (ResStatus == true) {
    response.status(200).json({ status: 'success' })
  } else if (ResStatus == false) {
    response.status(200).json({ status: 'failed' })
  }
})

// Extra User Login verification
const { ExtraUserVerify } = require('../../../Other Services/saveData.js')
app.post('/admin/post/ExtraUserVerify', (request, response) => {
  const Extra = request.body.Extra
  const ExtraPass = request.body.ExtraPass
  ExtraUserVerify(Extra, ExtraPass, response) // Calling the function from Other Services/saveData.js
})

// Add Extra User
const {
  ReadExtraUserJSONWhileAddUser
} = require('../../../Other Services/saveData.js')
app.post('/admin/post/adduser', (request, response) => {
  const usercodes = request.body.username
  const pass = request.body.password
  const email = request.body.email
  ReadExtraUserJSONWhileAddUser(usercodes, pass, email, response) // Calling the function from
})

// sending all extra user
const { SendAllUserData } = require('../../../Other Services/saveData')
app.post('/admin/post/getusers', (request, response) => {
  SendAllUserData(request, response) // Calling the function from Other Services/saveData.js
})

// delete user
const { DeleteExtraUser } = require('../../../Other Services/saveData.js')
app.post('/admin/post/deleteuser', (request, response) => {
  const user = request.body.username
  const pass = request.body.password
  const email = request.body.email
  DeleteExtraUser(user, pass, email, response) // Calling the function from Other Services/saveData.js
})

// delete message
app.post('/admin/message/delete', (request, response) => {
  mongoose.connect(credential.MOngoDB_URI).then(() => {
    Request.Request.deleteOne({ _id: request.body.Id }, (err, data) => {
      if (err) {
        response.status(200).json({ status: 'failed' })
        mongoose.connection.close()
      } else if (data) {
        response.status(200).json({ status: 'success' })
        mongoose.connection.close()
      }
    })
  })
})

// read message
app.post('/admin/message/read', (request, response) => {
  const Id = request.body.Id
  mongoose.connect(credential.MOngoDB_URI).then(() => {
    Request.Request.find({ _id: Id }, (err, data) => {
      if (err) {
        response.status(200).json({ status: 'failed' })
      } else if (data) {
        response.status(200).json({ status: 'success', data: data[0] })
      }
    })
  })
})

module.exports = { app, Auth_Code }
