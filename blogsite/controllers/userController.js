const userDb = require("../db/User");
const User = require("../models/User");

// gets all users
exports.getAllUsers = async function (req, res) {
    try {
        var results = await userDb.getUsers();
        res.status(200).send(results);
    } catch (err){
        res.status(400).send(err.message);
    }
};
// searches for a user based on name TODO: priority low
exports.getUsersWithName = async function (req, res) {
    try {
        var results = await userDb.getUsersByName(req.params.username);
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
// get specific user with id
exports.getUserWithId = async function (req, res, next) {
    try {
        var results = await userDb.getUserById(req.params.id);
        //res.status(200).send(results);
        req.flash("succes", "test");
        res.locals.user = results[0];
        console.log(results);
        next();
    } catch (err){
        res.status(400).send(err.message);
    }
};

// post a new user
exports.newUser = async function (req, res, next) {
    try {
        var newUser = new User(req.body);
        var results = await userDb.createUser(newUser);
        req.flash("success", "User created!");
        newUser.id = results[0];
        res.locals.user = newUser;
        console.log(newUser);
        res.locals.redirect = "/user/" + results[0];
        next();
    } catch (err){
        req.flash("error", "Failed to create user");
        next();
    }
};
// renders a profile page view
exports.profilePage = function (req, res) {
    res.render("users/profilepage");
};

// renders a form to create new user
exports.newUserForm = function (req, res) {
    res.render("users/new");
};