const knex = require("./Knex");

const Comment = require("../models/Comment");

exports.createComment = function (comment) {
    return knex("Comments").insert(comment);
};

exports.getComments = function (blogId) {
    return knex("Comments").select("*").where({"blog": blogId}).limit(Comment.commentLimit);
};