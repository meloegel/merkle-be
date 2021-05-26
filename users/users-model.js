const db = require('../data/db-config');

module.exports = {
    getAllUsers,
    addUser,
    deleteUser,
    getUser,
    updateUser
}

function getAllUsers() {
    return db('users')
}

function addUser(user) {
    return db('users').insert(user, 'id')
}

function getUser(id) {
    return db('users')
        .where({ id })
        .first()
}

function updateUser(changes, id) {
    return db('users')
        .where({ id })
        .update(changes)
}

function deleteUser(id) {
    return db('users')
        .where({ id })
        .del()
}