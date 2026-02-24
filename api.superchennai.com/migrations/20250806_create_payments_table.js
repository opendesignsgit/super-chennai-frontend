
exports.up = function(knex) {
  return knex.schema.createTable('payments', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('phone').notNullable();
    table.string('email').notNullable();
    // table.string('location');
    table.text('address');
    // table.string('pincode');
    table.string('payment_image');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.string('receipt_id').unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('payments');
};
