const Comment = require("../models/Comment");
const commentDb = require("../db/Comment");

exports.newComment = async function (req, res, next) {
    try {
        let newComment = new Comment(req.body);
        newComment.user = res.locals.currentUser.id;
        newComment.blod = req.params.id;
        await commentDb.createComment(newComment);
        res.locals.redirect = "/" + req.params.id;
        next();
    } catch (err) {
        console.log(err.message);
        next();
    }
};