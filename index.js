require('dotenv').config()

const server = require('./server.js')

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log(`\n ** Server up and running on http://localhost:${PORT} **\n`)
})