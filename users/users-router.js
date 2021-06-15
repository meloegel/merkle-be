const express = require('express');
const router = express.Router();
const Users = require('./users-model');


// Registers User //
router.post('/register', validateNewUser, (req, res) => {
    let user = req.body
    Users.addUser(user)
        .then(user => {
            res.status(201).json({ data: `User Created, User Id: ${user}` })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Error registering user' })
        })
})

// Gets All Users //
// router.get('/', (req, res) => {
//     Users.getAllUsers()
//         .then(users => {
//             res.status(200).json(users)
//         })
//         .catch(error => {
//             console.log(error)
//             res.status(500).json({ Error: 'Error getting all users' })
//         })
// })

router.get('/', async function (req, res) {
    try {
        users = await Users.getAllUsers()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ Error: 'Error getting all users' })
    }

})

router.get('/:id', (req, res) => {
    const { id } = req.params
    Users.getUser(id)
        .then(user => {
            if (user) {
                res.status(200).json(user)
            }
            res.status(200).json('User not found')
        })
        .catch(error => {
            console.log(error)
        })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body
    Users.getUser(id)
        .then(user => {
            if (user) {
                Users.updateUser(changes, id)
                    .then(updatedUser => {
                        res.status(200).json('Updated user')
                    })
            } else {
                res.status(200).json('User not found')
            }
        })
        .catch(error => {
            console.log(error)
        })
})


// Deletes User //
router.delete('/:id', (req, res) => {
    const { id } = req.params
    Users.deleteUser(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ Message: `User with id: ${id} has been deleted` })
            } else {
                res.status(404).json({ Error: `Could not find User with id: ${id}` })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ Error: 'Error deleting User' })
        })
})


function validateNewUser(req, res, next) {
    if (!req.body.firstName || !req.body.lastName || !req.body.addressOne || !req.body.city || !req.body.state || !req.body.zip || !req.body.country) {
        res.status(400).json({ message: 'Please fill in all required fields' })
    } else {
        next()
    }
}

module.exports = router;