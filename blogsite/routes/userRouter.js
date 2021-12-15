const express = require("express");
const Router = express.Router();
const userController = require("../controllers/userController");
const passport = require("../passport-config");

Router.use(express.static("public"));

Router.get("/", userController.getAllUsers);
Router.get("/username/:username", userController.getUsersWithName);
Router.get("/new", userController.newUserForm);
Router.get("/:id", userController.getUserWithId, userController.profilePage);


Router.post("/", userController.newUser);
Router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/user/login",
    failureFlash: true
}));

module.exports = Router;