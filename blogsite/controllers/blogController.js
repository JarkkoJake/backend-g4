
// get newest blogs with no filtering to be shown on homepage
exports.getBlogs = function (req, res) {
    res.send("newly posted blogs for homepage");
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
exports.getBlogWithId = function (req, res) {
    res.send("blog with id: " + req.params.id);
};

// post a new blog
exports.newBlog = function (req, res) {
    res.send("new blog");
};