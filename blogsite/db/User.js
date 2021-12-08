const knex = require("Knex");

/* Creates a user to the database, takes a user object
{
    Username: string,
    Password: string,
    Email: string,
    Profilepicture: string
}*/
exports.createUser = function (user) {
    return knex("Users").insert(user);
};

/* Gets all users from the database
TODO: selection, limit*/
exports.getUsers = function () {
    return knex("Users").select("*");
};

/*Get all users with name search
TODO: selection, limit, like*/
exports.getUsersByName = function (name) {
    return knex("Users").select("*").where({"Username": name});
};

/* Get a user with id*/
exports.getUserById = function (id) {
    return knex("Users").select("*").where({"id": id});
};