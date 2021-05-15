const express = require('express')
const cors = require('cors')

const server = express()


const UserRouter = require('./users/users-router');

server.use(cors())
server.use(express.json())

server.use('/api/users', UserRouter)

server.get('/', (req, res) => {
    const message = process.env.MESSAGE
    res.status(200).json({ message })
})

module.exports = server;