/*This file forms a connection to the database, needs to be imported
to each file that deals with db*/

const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "blogsite.sqlite3"
    }
});

module.exports = connectedKnex;