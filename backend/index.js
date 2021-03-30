const express = require('express')


const app = express() // declare app as express for node

app.use(express.urlencoded({ extended: true })) // use urlencoded & json-modules for express
app.use(express.json())

module.exports = app // exporting app, to intigrate with other scripts
