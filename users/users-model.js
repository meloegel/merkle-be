const db = require('../data/db-config');

module.exports = {
    getAllUsers,
    addUser,
    deleteUser
}

function getAllUsers() {
    return db('users')
}

function addUser(user) {
    return db('users').insert(user, 'id')
}

function deleteUser(id) {
    return db('users')
        .where({ id })
        .del()
}