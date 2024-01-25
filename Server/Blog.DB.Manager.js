const MongoModel = require('./MongoModel')
const mongoose = require('mongoose')
const credential = require('../Secret/credential.js')

// save Blog Post
async function SaveBlog (
  BlogName,
  AuthorName,
  BlogCatagory,
  PublishDate,
  Content,
  SlugLink,
  response
) {
  try {
    await mongoose.connect(credential.MOngoDB_URI)
    const SaveDataStructure = {
      BlogName,
      AuthorName,
      BlogCatagory,
      PublishDate,
      Content,
      SlugLink
    }
    const readyData = new MongoModel.Blogs(SaveDataStructure)
    try {
      const tempcheck = await MongoModel.Blogs.find({ SlugLink })
      if (tempcheck.length == 0) {
        await readyData.save()
        response
          .status(200)
          .json({ status: 'Your Blog Published Successfully' })
      } else if (tempcheck.length > 0) {
        response.status(200).json({ status: 'This Blog Name Already Exist' })
      }
    } catch {
      response.status(402).json({ status: 'Internal Server Error' })
    }
  } catch {
    response.status(402).json({ status: 'Internal Server Error' })
  }
}

// getting all blog titles
async function getBlogDetails (response) {
  try {
    await mongoose.connect(credential.MOngoDB_URI)
    const Dataresponses = await MongoModel.Blogs.find()
    const Dataresponse = []
    Dataresponses.forEach((selected) => {
      Dataresponse.push({
        BlogName: selected.BlogName,
        BlogCatagory: selected.BlogCatagory,
        PublishDate: selected.PublishDate,
        SlugLink: selected.SlugLink
      })
    })
    response.status(200).json({ status: 'Success', data: Dataresponse })
  } catch {
    response.status(404).json({ status: 'Internal Server Error' })
  }
}

// send specific blog with pug
async function getBlog (slug, response) {
  try {
    await mongoose.connect(credential.MOngoDB_URI)
    const Dataresponse = await MongoModel.Blogs.find({ SlugLink: slug })
    const title = Dataresponse[0].BlogName
    const content = Dataresponse[0].Content
    const PublishDate = Dataresponse[0].PublishDate
    let author = Dataresponse[0].AuthorName
    if (author == undefined || author == null || author == '') {
      author = 'Admin'
    }
    response.status(200).render('FullPost', {
      title,
      content,
      PublishDate,
      author
    })
  } catch {
    response.status(404).render('404', {
      title: '404 : Content Not Found',
      exit: 'Go To Blogs',
      routes: '/blogs'
    })
  }
}
// exporting all methods
module.exports = {
  BlogSave: SaveBlog,
  GetBlogs: getBlogDetails,
  GetBlog: getBlog
}
