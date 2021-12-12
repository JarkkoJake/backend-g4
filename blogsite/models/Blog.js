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
 }

 module.exports = Blog;