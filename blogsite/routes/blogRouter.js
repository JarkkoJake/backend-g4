const express = require("express");
const Router = express.Router();
const blogController = require("../controllers/blogController");

Router.get("/", blogController.getBlogs);
Router.get("/music", blogController.getMusicBlogs);
Router.get("/nature", blogController.getNatureBlogs);
Router.get("/technology", blogController.getTechnologyBlogs);
Router.get("/transport", blogController.getTransportBlogs);
Router.get("/other", blogController.getOtherBlogs);
Router.get("/:id", blogController.getBlogWithId);

Router.get("/search/:search", blogController.searchBlogs);

Router.post("/", blogController.newBlog);

module.exports = Router;