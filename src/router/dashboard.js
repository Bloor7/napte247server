const express = require('express')
const admin= express.Router()
var bodyParser = require('body-parser')
const path = require('path')


admin.use(bodyParser.urlencoded({ extended: false }))
admin.use(bodyParser.json())

admin.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../dashboard/dashboard.html'))
})

module.exports = admin