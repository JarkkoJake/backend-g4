const knex = require("./Knex");

const Comment = require("../models/Comment");

exports.createComment = function (comment) {
    return knex("Comments").insert(comment);
}; 