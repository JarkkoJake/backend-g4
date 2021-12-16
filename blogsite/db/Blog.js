const knex = require("./Knex");

const Blog = require("../models/Blog");

/*Creates a new blog to the database, takes a blog object
{
    title: string,
    content: string,
    thumbnail: string?,
    user: int, // user id
    tags: tag1,tag2,tag3... string
    topic: string (Music, Nature, Technology, Transport or Other)
}*/
exports.createBlog = function (blog) {
    return knex("Blogs").insert(blog);
};

/* Get all blogs from the database, TODO: orderby? */
exports.getBlogs = function () {
    return knex("Blogs").select(Blog.browsingInfo).limit(Blog.blogLimit).orderBy("id", "desc");
};

/* Get all topics with specific topic (string) 
TODO: orderby? */
exports.getBlogsByTopic = function (topic) {
    return knex("Blogs").select(Blog.browsingInfo).where({"topic": topic}).limit(Blog.blogLimit).orderBy("id", "desc");
};

/*Get all data from a blog with id (int)*/
exports.getBlogById = function (id) {
    return knex("Blogs").select("*").where({"id": id});
};

/* Get blogs based on tag matches*/
exports.getBlogsBySearch = function (search) {
    return knex("Blogs").select(Blog.browsingInfo).where("tags", "like", "%" + search + "%")
    .orWhere("title", "like", "%" + search + "%");
};