const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const userDb = require("./db/User");
const passport = require("passport");

async function initialize(passport) {
    const authenticateUser = async (email, password, done) => {
        const user = (await userDb.getUserByEmail(email))[0];
        if (user == null) {
            return done(null, false, {message: "Invalid login credentials"});
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user, {message: "Logged in successfully!"});
            } else {
                return done(null, false, {message: "Invalid login credentials"});
            }
        } catch (err) {
            return done(err);
        }
    };

    passport.use(new localStrategy({usernameField: "email"},
    authenticateUser));
    passport.serializeUser((user, done) => { done(null, user.id)});
    passport.deserializeUser(async (id, done) => {
        try {
            let user = await userDb.getUserById(id);
            return done(null, user);
        } catch (err) {
            return done(err, null);
        }
    });
}
initialize(passport);

module.exports = passport;