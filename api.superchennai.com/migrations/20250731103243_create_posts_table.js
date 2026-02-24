/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// exports.up = function (knex) {
//   return knex.schema.createTable("posts", function (table) {
//     table.increments("id").primary();
//     table.string("name").notNullable();
//     table.string("email").notNullable();
//     table.string("mobile").notNullable();
//     table.string("video");
//     table.text("description");
//   table.boolean("newsletter").defaultTo(false);
//     table.timestamps(true, true);
//   });
// };
exports.up = function (knex) {
  return knex.schema.createTable("posts", function (table) {
    table.increments("id").primary();
    table.string("name");             
    table.string("email");          
    table.string("mobile");        
    table.string("video");        
    table.text("description");        
    table.boolean("newsletter").defaultTo(false); 
    table.timestamps(true, true);    
  });
};


exports.down = function (knex) {
  return knex.schema.dropTable("posts");
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
