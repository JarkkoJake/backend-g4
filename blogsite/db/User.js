const knex = require("./Knex");

// max amount of users sent on one request
const userLimit = 25;

// what info is sent when browsing for users
const userInfo = {
    username: "username",
    id: "id",
    profilePicture: "profilePicture"
};

/* Creates a user to the database, takes a user object
{
    username: string,
    password: string,
    email: string,
    profilePicture: string
}*/
exports.createUser = function (user) {
    console.log(user);
    return knex("Users").insert(user);
};

/* Gets all users from the database*/
exports.getUsers = function () {
    return knex("Users").select(userInfo).limit(userLimit);
};

/*Get all users with name search
TODO: like*/
exports.getUsersByName = function (name) {
    return knex("Users").select(userInfo).where({"Username": name}).limit(userLimit);
};

/* Get a user with id*/
exports.getUserById = function (id) {
    return knex("Users").select(userInfo).where({"id": id});
};

/* Get all user data, only allowed if
the user is logged in as requested user */
exports.getAllUserInfo = function (id) {
    return knex("Users").select("*").where({"id": id});
};