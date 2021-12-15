const express = require("express");
const Router = express.Router();
const userController = require("../controllers/userController");
const expressSession = require("express-session"),
cookieParser = require("cookie-parser"),
connectFlash = require("connect-flash");

Router.use(cookieParser("secret"));
Router.use(expressSession({
    secret: "secret",
    cookie: {
        maxAge: 4000000
    },
    resave: false,
    saveUninitialized: false
}));
Router.use(connectFlash());
Router.use((req, res, next) => {
    res.locals.flashMessage = req.flash();
    next();
});
Router.use((req, res, next) => {
    let redirectPath = res.locals.redirect;
    if (redirectPath) {
        res.redirect(redirectPath);
    } else {
        next();
    }
});

Router.get("/", userController.getAllUsers);
Router.get("/username/:username", userController.getUsersWithName);
Router.get("/:id", userController.getUserWithId, userController.profilePage);

Router.post("/", userController.newUser);

module.exports = Router;