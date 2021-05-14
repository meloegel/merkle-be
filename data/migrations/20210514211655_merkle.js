
exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments('id')
            tbl.string('firstName').notNullable()
            tbl.string('lastName').notNullable()
            tbl.string('addressOne').notNullable()
            tbl.string('addressTwo')
            tbl.string('city').notNullable()
            tbl.string('state').notNullable()
            tbl.string('zip').notNullable()
            tbl.string('country').notNullable()
            tbl.timestamp('date').defaultTo(knex.fn.now());
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
};
