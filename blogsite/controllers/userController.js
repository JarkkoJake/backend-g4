const userDb = require("../db/User");
const User = require("../models/User");
const bcrypt = require("bcrypt");

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
        req.flash("succes", "test");
        res.locals.user = results[0];
        next();
    } catch (err){
        res.status(400).send(err.message);
    }
};

// post a new user
exports.newUser = async function (req, res, next) {
    try {
        var newUser = new User(req.body);
        newUser.password = await bcrypt.hash(newUser.password, 10);
        var results = await userDb.createUser(newUser);
        req.flash("success", "User created!");
        res.locals.redirect = "/";
        next();
    } catch (err){
        req.flash("error", "Failed to create user");
        next();
    }
};

exports.login = async function (req, res, next) {
    let user = (await userDb.getUserByEmail(req.body.email))[0];
    if (user) {
        if (bcrypt.compare(req.body.password, user.password)) {
            res.locals.redirect = "/user/" + user.id;
            req.flash("success", user.username + " logged in");
            res.locals.loggedIn = true;
            res.locals.currentUser = user;
        } else {
            res.redirect = "/user/login";
            req.flash("error", "Invalid credentials");
        }
    }
    next();
    
};

/* -----View Rendering-------*/

// renders a profile page view
exports.profilePage = function (req, res) {
    res.render("users/profilepage");
};

// renders a form to create new user
exports.newUserForm = function (req, res) {
    res.render("users/register");
};

// render a login page
exports.loginPage = function (req, res) {
    res.render("users/login");
};