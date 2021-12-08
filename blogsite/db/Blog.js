const knex = require("Knex");

/*Creates a new blog to the database, takes a blog object
{
    Title: string,
    Content: string,
    Thumbnail: string?,
    User: int, // user id
    Tags: tag1,tag2,tag3...
}*/
exports.createBlog = function (blog) {
    return knex("Blogs").insert(blog);
};

/* Get all blogs from the database, TODO: limit, orderby, selection*/
exports.getBlogs = function () {
    return knex("Blogs").select("*");
};

/* Get all topics with specific topic (string) 
TODO: limit, orderby, selection */
exports.getBlogsByTopic = function (topic) {
    return knex("Blogs").select("*").where({"topic": topic});
};

/*Get all data from a blog with id (int)*/
exports.getBlogById = function (id) {
    return knex("Blogs").select("*").where({"id": id});
};