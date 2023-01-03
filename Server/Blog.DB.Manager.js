let MongoModel = require("./MongoModel");
const mongoose = require("mongoose");

// save Blog Post
async function SaveBlog(
  BlogName,
  AuthorName,
  BlogCatagory,
  PublishDate,
  Content,
  SlugLink,
  response
) {
  try {
    await mongoose.connect(process.env.MOngoDB_URI);
    let SaveDataStructure = {
      BlogName: BlogName,
      AuthorName: AuthorName,
      BlogCatagory: BlogCatagory,
      PublishDate: PublishDate,
      Content: Content,
      SlugLink: SlugLink,
    };
    let readyData = new MongoModel.Blogs(SaveDataStructure);
    try {
      let tempcheck = await MongoModel.Blogs.find({ SlugLink: SlugLink });
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
    await mongoose.connect(process.env.MOngoDB_URI);
    let Dataresponses = await MongoModel.Blogs.find();
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
    await mongoose.connect(process.env.MOngoDB_URI);
    let Dataresponse = await MongoModel.Blogs.find({ SlugLink: slug});
    let title = Dataresponse[0].BlogName;
    let content = Dataresponse[0].Content;
    let PublishDate = Dataresponse[0].PublishDate;
    let author = Dataresponse[0].AuthorName;
    if(author == undefined || author == null || author ==''){
      author = 'Admin'
    }
    response
      .status(200)
      .render("FullPost", {
        title: title,
        content: content,
        PublishDate: PublishDate,
        author: author
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