const express = require("express");
const Router = express.Router();
const blogController = require("../controllers/blogController");
const homeController = require("../controllers/homeController");

Router.get("/", blogController.getBlogs, homeController.index);
Router.get("/music", blogController.getMusicBlogs, homeController.music);
Router.get("/nature", blogController.getNatureBlogs, homeController.nature);
Router.get("/technology", blogController.getTechnologyBlogs, homeController.technology);
Router.get("/transport", blogController.getTransportBlogs, homeController.transport);
Router.get("/other", blogController.getOtherBlogs, homeController.other);
Router.get("/:id", blogController.getBlogWithId/*, homeController.fullBlog*/);

Router.get("/search/:search", blogController.searchBlogs);

Router.post("/", blogController.newBlog);

module.exports = Router;