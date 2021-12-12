/* Model for blogs, containts constructor for new blogs and 
 static values used in handling blogs */

 class Blog {
     constructor(data) {
         this.title = data.title
         this.content = data.content
         this.thumbnail = data.thumbnail
         this.user = data.user
         this.tags = data.tags
         this.topic = data.topic
     }

     // max amount of blogs sent on one request
     static blogLimit = 25;

     // blog information showed for browsing
     static browsingInfo = {
        title: "title",
        id: "id",
        tags: "tags",
        topic: "topic",
        thumbnail: "thumbnail"
    };
 }

 module.exports = Blog;