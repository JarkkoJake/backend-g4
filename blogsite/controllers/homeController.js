module.exports = {
    index: (req, res) => {
        res.render("index");
    },
    music: (req, res) => {
        res.render("blogs/music");
    },
    logRequestPaths: (req, res, next) => {
        console.log(`request made to: ${req.url}`);
        next();
    }
};