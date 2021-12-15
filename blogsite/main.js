const express = require("express"),
app = express(),
layouts = require("express-ejs-layouts"),
userRouter = require("./routes/userRouter"),
blogRouter = require("./routes/blogRouter"),
homeRouter = require("./routes/homeRouter"),
bodyParser = require("body-parser"),
expressSession = require("express-session"),
cookieParser = require("cookie-parser"),
connectFlash = require("connect-flash");

const passport = require("./passport-config");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(layouts);
app.use(express.static("public"));
app.use(cookieParser("secret"));
app.use(expressSession({
    secret: "secret",
    cookie: {
        maxAge: 4000000
    },
    resave: false,
    saveUninitialized: false
}));
app.use(connectFlash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    res.locals.flashMessage = req.flash();
    next();
});
app.use((req, res, next) => {
    res.locals.loggedIn = req.isAuthenticated();
    console.log(res.locals.loggedIn);
    if (res.locals.loggedIn) {
        console.log(req.user);
        res.locals.currentUser = req.user[0];
    }
    next();
});

app.use("/user", userRouter);
app.use("/", homeRouter);
app.use("/blog", blogRouter);

app.use((req, res, next) => {
    redirectPath = res.locals.redirect;
    if (redirectPath) res.redirect(redirectPath);
    next();
});

app.set("view engine", "ejs");  // Pitäis saada layout toimimaan myös subfoldereille (users)
app.set("views");

app.listen(3000, () => {console.log("server running on port 3000")});