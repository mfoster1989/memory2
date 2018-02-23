// Update with your config settings.
// require("dotenv").load()
module.exports = {

  development: {
    client: "pg",
    connection: "postgresql:///memory2"
  },


  production: {
    client: "pg",
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
};