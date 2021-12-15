module.exports = {
    index: (req, res) => {
        res.render("index");
    },
    music: (req, res) => {
        res.render("music");
    },
    technology: (req, res) => {
        res.render("technology");
    },
    nature: (req, res) => {
        res.render("nature");
    },
    transport: (req, res) => {
        res.render("transport");
    },
    other: (req, res) => {
        res.render("other");
    },
    fullBlog: (req, res) => {
        res.render("fullBlog");
    },
    logRequestPaths: (req, res, next) => {
        console.log(`request made to: ${req.url}`);
        next();
    }
};