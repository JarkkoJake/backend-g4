const blogDb = require("../db/Blog");
const Blog = require("../models/Blog");

// get newest blogs with no filtering to be shown on homepage
exports.getBlogs = async function (req, res) {
    try {
        var results = await blogDb.getBlogs();
        console.log(results);
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// get blogs based on categorization
exports.getMusicBlogs = function (req, res) {
    res.send("music blogs");
};
exports.getNatureBlogs = function (req, res) {
    res.send("nature blogs");
};
exports.getTechnologyBlogs = function (req, res) {
    res.send("technology blogs");
};
exports.getTransportBlogs = function (req, res) {
    res.send("transport blogs");
};
exports.getOtherBlogs = function (req, res) {
    res.send("other blogs");
};

// get specific blog for proper reading view
exports.getBlogWithId = async function (req, res) {
    try {
        var results = await blogDb.getBlogById(req.params.id);
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// post a new blog
exports.newBlog = async function (req, res) {
    try {
        var newBlog = new Blog(req.body);
        var results = await blogDb.createBlog(newBlog);
        res.status(201).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
};