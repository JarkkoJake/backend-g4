/* Model for blogs, containts constructor for new blogs and 
 static values used in handling blogs */
 const moment = require("moment");

 class Blog {
     constructor(data) {
         this.title = data.title
         this.content = data.content
         this.thumbnail = data.thumbnail
         this.user = data.user
         this.tags = data.tags
         this.topic = data.topic
         this.date = moment().format("Do of MMMM YYYY, h:mm:ss a");
     }

     // max amount of blogs sent on one request
     static blogLimit = 25;

     // blog information showed for browsing
     static browsingInfo = {
        title: "title",
        id: "id",
        tags: "tags",
        topic: "topic",
        thumbnail: "thumbnail",
        date: "date"
    };
 }

 module.exports = Blog;