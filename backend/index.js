const express = require('express')
const app = express()
const users = require('./api')
const cors = require('cors')

app.use(cors())

app.get("/users", (req, res) => {
    res.send(users)
})

app.listen(3001, () => {
    console.log('conectado na porta 3001')
})