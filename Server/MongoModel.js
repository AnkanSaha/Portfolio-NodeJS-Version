const mongoose = require('mongoose')
const Request_Scema = {
  name: { type: String, required: true },
  Email: { type: String, required: true },
  Message: { type: String, required: true },
  FinalMessage: { type: String, required: true },
  RequestDate: String
}

const BlogPostScheema = {
  BlogName: { type: String, required: true },
  AuthorName: { type: String, required: true },
  BlogCatagory: { type: String, required: true },
  PublishDate: { type: String, required: true },
  Content: { type: String, required: true },
  SlugLink: { type: String, required: true }
}
// Converting Object to sceema
const Request_Final_Sceema = mongoose.Schema(Request_Scema)
const Blog_Final_Scheema = mongoose.Schema(BlogPostScheema)
// Converting Sceema to Model
module.exports.Request = mongoose.model('Request', Request_Final_Sceema)
module.exports.Blogs = mongoose.model('Blog', Blog_Final_Scheema)
