
exports.up = function(knex, Promise) {
  return knex.schema.createTable("coffee", function(table) {
      table.increments("id").primary()
      table.text("name")
      table.text("roaster")
      table.float("aroma")
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists(coffee)
};