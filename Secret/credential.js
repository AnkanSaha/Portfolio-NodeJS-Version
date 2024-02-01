require('dotenv').config(); // this is important!

const PORT=process.env.PORT ?? 5000
const MOngoDB_URI= process.env.MONGODB_URI ?? 'mongodb://localhost:27017/'
const Database_Name=process.env.DB_NAME ?? 'Portfolio' // this is important!
module.exports = {
    PORT,
    MOngoDB_URI : `${MOngoDB_URI}${Database_Name}`
}
