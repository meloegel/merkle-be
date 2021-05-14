
exports.seed = function (knex) {
  return knex('users').insert([
    { id: 1, firstName: 'John', lastName: 'Smith', addressOne: '1234 West Street', addressTwo: 'Apt. 2', city: 'Detroit', state: 'MI', zip: '48217', country: 'USA' },
    { id: 2, firstName: 'Bill', lastName: 'Johnson', addressOne: '824 Main Street', addressTwo: null, city: 'Denver', state: 'CO', zip: '12456 - 4568', country: 'USA' },
    { id: 3, firstName: 'Joe', lastName: 'Jackson', addressOne: '698 Elm Street', addressTwo: null, city: 'Miami', state: 'FL', zip: '45698', country: 'USA' },
    { id: 4, firstName: 'Steve', lastName: 'Baily', addressOne: '789 East Ave', addressTwo: 'Apt. 4', city: 'Dallas', state: 'TX', zip: '65489 - 6541', country: 'USA' },
    { id: 5, firstName: 'Bob', lastName: 'Bobson', addressOne: '6544 3rd Street', addressTwo: null, city: 'Kalamzoo', state: 'MI', zip: '49009', country: 'USA' },
  ]);
};
