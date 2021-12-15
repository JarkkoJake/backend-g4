const express = require("express"),
app = express(),
router = express.Router(),
layouts = require("express-ejs-layouts"),
userRouter = require("./routes/userRouter"),
blogRouter = require("./routes/blogRouter"),
blog = require("./models/Blog"),
user = require("./models/User"),
blogController = require("./controllers/blogController"),
userController = require("./controllers/userController"),
homeController = require("./controllers/homeController"),
bodyParser = require("body-parser");

/* 
cookieParser = require("cookie-parser"),
connectFlash = require("connect-flash"),
expressValidator = require("express-validator"),
passport = require("passport"),
*/



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(layouts);
app.use(express.static("public"));
app.use("/user", userRouter);
app.use("/", blogRouter);

app.set("view engine", "ejs");


router.use(homeController.logRequestPaths);
router.get("/", homeController.index);
router.get("/music", homeController.music);
router.get("/technology", homeController.technology);
router.get("/nature", homeController.nature);
router.get("/transport", homeController.transport);
router.get("/other", homeController.other);
router.use(express.static("public"));
router.use(layouts);
router.use(
    express.urlencoded({
        extended: false
    })
);

app.use("/blog", router);

app.listen(3000, () => {console.log("server running on port 3000")});