function SaveToServer (Name, email, message, finalMessage, response) {
  const credential = require('../Secret/credential.js')
  console.log(Name, email, message, finalMessage)
  const status = {
    success: 'Your Request Successfully Saved To Our Database',
    fail: 'Currently Server not acceping request, Try again later ...'
  }
  const mongoose = require('mongoose')
  const url = credential.MOngoDB_URI
  const MongoModel = require('./MongoModel')
  mongoose
    .connect(url)
    .then(() => {
      // Insert Data to Final
      const FinalScheema = {
        name: Name,
        Email: email,
        Message: message,
        FinalMessage: finalMessage,
        RequestDate: new Date()
      }
      const FinalData = new MongoModel.Request(FinalScheema)
      FinalData.save()
        .then(() => {
          response.json({ status: status.success })
          mongoose.connection.close()
        })
        .catch((error) => {
          response.json({ status: status.fail })
        })
    })
    .catch((error) => {
      response.json({ status: status.fail })
    })
}
module.exports.SaveToServer = SaveToServer
