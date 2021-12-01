// gets all users
exports.getAllUsers = function (req, res) {
    res.send("gets all users");
};
// searches for a user based on name
exports.getUsersWithName = function (req, res) {
    res.send("searching for users with name: " + req.params.name);
};
// get specific user with id
exports.getUserWithId = function (req, res) {
    res.send("get user with id: " + req.params.id);
};

// post a new user
exports.newUser = function (req, res) {
    res.send("new user");
};