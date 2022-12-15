var MongoModel = require("../Server/MongoModel");
const MongoURL = require("../Server/DB_Config.js");
const mongoose = require("mongoose");

// save Blog Post
async function SaveBlog(
  BlogName,
  BlogCatagory,
  PublishDate,
  Content,
  SlugLink,
  response
) {
  try {
    await mongoose.connect(MongoURL);
    console.log("DB Connected");
    let SaveDataStructure = {
      BlogName: BlogName,
      BlogCatagory: BlogCatagory,
      PublishDate: PublishDate,
      Content: Content,
      SlugLink: SlugLink,
    };
    var readyData = new MongoModel.Blogs(SaveDataStructure);
    try {
      var tempcheck = await MongoModel.Blogs.find({ SlugLink: SlugLink });
      if (tempcheck.length == 0) {
        await readyData.save();
        response
          .status(200)
          .json({ status: "Your Blog Published Successfully" });
      } else if (tempcheck.length > 0) {
        response.status(200).json({ status: "This Blog Name Already Exist" });
      }
    } catch {
      response.status(402).json({ status: "Internal Server Error" });
    }
  } catch {
    response.status(402).json({ status: "Internal Server Error" });
  }
}

// getting all blog titles
async function getBlogDetails(response) {
  try {
    await mongoose.connect(MongoURL);
    console.log("DB Connected");
    var Dataresponses = await MongoModel.Blogs.find();
    console.log(Dataresponses);
    let Dataresponse = [];
    Dataresponses.forEach((selected) => {
      Dataresponse.push({
        BlogName: selected.BlogName,
        BlogCatagory: selected.BlogCatagory,
        PublishDate: selected.PublishDate,
        SlugLink: selected.SlugLink,
      });
    });
    response.status(200).json({ status: "Success", data: Dataresponse });
  } catch {
    response.status(404).json({ status: "Internal Server Error" });
  }
}

// send specific blog with pug
async function getBlog(slug, response) {
  try {
    await mongoose.connect(MongoURL);
    console.log("DB Connected");
    var Dataresponse = await MongoModel.Blogs.find({ SlugLink: slug});
    console.log(Dataresponse);
    var title = Dataresponse[0].BlogName;
    var content = Dataresponse[0].Content;
    var PublishDate = Dataresponse[0].PublishDate;
    response
      .status(200)
      .render("FullPost", {
        title: title,
        content: content,
        PublishDate: PublishDate,
      });
  } catch {
    response.status(404).render("404", {title: "404 : Content Not Found", exit: "Go To Blogs", routes:'/blogs'})
  }
}
// exporting all methods
module.exports = {
  BlogSave: SaveBlog,
  GetBlogs: getBlogDetails,
  GetBlog: getBlog,
};