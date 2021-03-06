const knex = require("./Knex");

const User = require("../models/User");

/* Creates a user to the database, takes a user object
{
    username: string,
    password: string,
    email: string,
    profilePicture: string
}*/
exports.createUser = function (user) {
    return knex("Users").insert(user);
};

/* Gets all users from the database*/
exports.getUsers = function () {
    return knex("Users").select(User.publicUserInfo).limit(User.userLimit);
};

/*Get all users with name search*/
exports.getUsersByName = function (name) {
    return knex("Users").select(User.publicUserInfo)
    .where("username", "like", "%" + name + "%")
    .limit(User.userLimit);
};

// get user by email
exports.getUserByEmail = function (email) {
    return knex("Users").select("*").where({"email": email});
};

/* Get a user with id*/
exports.getUserById = function (id) {
    return knex("Users").select(User.publicUserInfo).where({"id": id});
};

/* Get all user data, only allowed if
the user is logged in as requested user */
exports.getAllUserInfo = function (id) {
    return knex("Users").select("*").where({"id": id});
};