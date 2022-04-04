const express = require('express')
const app = express();
require('dotenv').config()

app.get('/', (req, res) => {
    res.send("Smash or Pass")
})

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log(`Server is listening on port ${PORT}...`)
})