const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRouter = require("./routes/userRouter"),
blogRouter = require("./routes/blogRouter");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/blog", blogRouter);

app.listen(3000, () => {console.log("server running on port 3000")});