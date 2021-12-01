const express = require("express");
const Router = express.Router();
const userController = require("../controllers/userController");

Router.get("/", userController.getAllUsers);
Router.get("/name/:name", userController.getUsersWithName);
Router.get("/:id", userController.getUserWithId);

Router.post("/", userController.newUser);

module.exports = Router;