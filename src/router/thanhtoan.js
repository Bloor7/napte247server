const express = require('express')
const thanhtoan= express.Router()
var bodyParser = require('body-parser')

const path = require('path')

thanhtoan.use(bodyParser.urlencoded({ extended: false }))
thanhtoan.use(bodyParser.json())



module.exports = thanhtoan