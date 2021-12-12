/* User models for blogsite, contains constructor to 
 create a user and models, in which it is defined
 what data is sent upon different requests */

 class User {
     constructor (data) {

        // required fields validation
         if (!(data.username && data.password && data.email)) {
             throw Error("Username, password and email must be given");
         }

         // build the user object
         this.username = data.username
         this.password = data.password
         this.email = data.email
         this.profilePicture = data.profilePicture
     }
 }

 module.exports = User;