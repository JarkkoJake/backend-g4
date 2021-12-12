const blogDb = require("../db/Blog");
const Blog = require("../models/Blog");

// get newest blogs with no filtering to be shown on homepage
exports.getBlogs = async function (req, res) {
    try {
        var results = await blogDb.getBlogs();
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// get blogs based on categorization
// TODO: very copypaste, maybe refactor at some point?
exports.getMusicBlogs = async function (req, res) {
    try {
        var results = await blogDb.getBlogsByTopic("Music");
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
exports.getNatureBlogs = async function (req, res) {
    try {
        var results = await blogDb.getBlogsByTopic("Nature");
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
exports.getTechnologyBlogs = async function (req, res) {
    try {
        var results = await blogDb.getBlogsByTopic("Technology");
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
exports.getTransportBlogs = async function (req, res) {
    try {
        var results = await blogDb.getBlogsByTopic("Transport");
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
exports.getOtherBlogs = async function (req, res) {
    try {
        var results = await blogDb.getBlogsByTopic("Other");
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
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