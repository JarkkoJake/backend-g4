const knex = require("./Knex");

// max amount of blogs shows on one request
const blogLimit = 25;

// what info is being requested for the browsing view
const browseInfo = {
    title: "title",
    id: "id",
    tags: "tags",
    topic: "topic",
    thumbnail: "thumbnail"
};

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
    return knex("Blogs").select(browseInfo).limit(blogLimit);
};

/* Get all topics with specific topic (string) 
TODO: orderby? */
exports.getBlogsByTopic = function (topic) {
    return knex("Blogs").select(browseInfo).where({"topic": topic}).limit(blogLimit);
};

/*Get all data from a blog with id (int)*/
exports.getBlogById = function (id) {
    return knex("Blogs").select("*").where({"id": id});
};