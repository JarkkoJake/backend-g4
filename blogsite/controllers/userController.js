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
exports.getUsersWithName = function (req, res) {
    res.send("searching for users with name: " + req.params.name);
};
// get specific user with id
exports.getUserWithId = async function (req, res) {
    try {
        var results = await userDb.getUserById(req.params.id);
        res.status(200).send(results);
    } catch (err){
        res.status(400).send(err.message);
    }
};

// post a new user
exports.newUser = async function (req, res) {
    try {
        var newUser = new User(req.body);
        var results = await userDb.createUser(newUser);
        res.status(201).send(results);
    } catch (err){
        res.status(400).send(err.message);
    }
};