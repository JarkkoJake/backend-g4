const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const blogController = require("../controllers/blogController");
const userController = require("../controllers/userController");

router.use(homeController.logRequestPaths);
router.get("/", blogController.getBlogs, homeController.index);
router.get("/music", blogController.getMusicBlogs, homeController.music);
router.get("/technology", blogController.getTechnologyBlogs, homeController.technology);
router.get("/nature", blogController.getNatureBlogs, homeController.nature);
router.get("/transport", blogController.getTransportBlogs, homeController.transport);
router.get("/other", blogController.getOtherBlogs, homeController.other);
router.get("/users/login", userController.loginPage, homeController.login); // Varmaan väärässä paikkaa

module.exports = router;