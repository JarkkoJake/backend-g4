const blogDb = require("../db/Blog");
const Blog = require("../models/Blog");

// get newest blogs with no filtering to be shown on homepage
exports.getBlogs = async function (req, res) {
    try {
        var results = await blogDb.getBlogs();

        // split the tags into an array
        for (let i = 0; i < results.length; i++) {
            results[i].tags = results[i].tags.split(",");
        }
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

        // split the tags into an array
        for (let i = 0; i < results.length; i++) {
            results[i].tags = results[i].tags.split(",");
        }
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.getNatureBlogs = async function (req, res) {
    try {
        var results = await blogDb.getBlogsByTopic("Nature");

        // split the tags into an array
        for (let i = 0; i < results.length; i++) {
            results[i].tags = results[i].tags.split(",");
        }
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
exports.getTechnologyBlogs = async function (req, res) {
    try {
        var results = await blogDb.getBlogsByTopic("Technology");

        // split the tags into an array
        for (let i = 0; i < results.length; i++) {
            results[i].tags = results[i].tags.split(",");
        }
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
exports.getTransportBlogs = async function (req, res) {
    try {
        var results = await blogDb.getBlogsByTopic("Transport");

        // split the tags into an array
        for (let i = 0; i < results.length; i++) {
            results[i].tags = results[i].tags.split(",");
        }
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
exports.getOtherBlogs = async function (req, res) {
    try {
        var results = await blogDb.getBlogsByTopic("Other");

        // split the tags into an array
        for (let i = 0; i < results.length; i++) {
            results[i].tags = results[i].tags.split(",");
        }
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

// search blogs with search bar, searches tag or title matches
exports.searchBlogs = async function (req, res) {
    try {
        var results = await blogDb.getBlogsBySearch(req.params.search);
        res.status(200).send(results);
    } catch (err) {
        res.status(400).send(err.message);
    }
};