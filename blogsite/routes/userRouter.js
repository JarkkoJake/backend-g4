const express = require("express");
const Router = express.Router();
const userController = require("../controllers/userController");

Router.get("/", userController.getAllUsers);
Router.get("/username/:username", userController.getUsersWithName);
Router.get("/new", userController.newUserForm);
Router.get("/:id", userController.getUserWithId, userController.profilePage);


Router.post("/", userController.newUser);
Router.post("/login", userController.login);

module.exports = Router;