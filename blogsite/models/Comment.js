
 const moment = require("moment");

 class Comment {
     constructor (data) {

         // build the comment
         this.comment = data.comment;
         this.date = moment().format("Do of MMMM YYYY, h:mm:ss a");
     }

     // amount of comments sent on a single request
     static commentLimit = 25;
 }

 module.exports = Comment;