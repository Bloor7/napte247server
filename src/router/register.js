const express = require('express')
const register= express.Router()
var bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const AccountModel = require('./database/accounts')
const path = require('path')


register.use(bodyParser.urlencoded({ extended: false }))
register.use(bodyParser.json())

register.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
});



register.post('/',(req,res)=>{
  var username = req.body.username
  var gmail = req.body.gmail
  var hoTen = req.body.hoTen
  var phone = req.body.phone
  var password = req.body.password
  var coins = 0

  AccountModel.findOne({
    username : username,
  })
  .then(data=>{
    if(data){
      return res.json({
        status: false,
        title:'Tài khoan da toan tai'
      })
    }else{
      return AccountModel.create({
        username : username,
        gmail: gmail,
        hoTen: hoTen,
        phone: phone,
        password : password,
        coins: coins
      })
    }
  })
  .then(data => {
    var token = jwt.sign({_id:data._id,},'abc')
    res.json({
      status: true,
      token:token
    })
  })
  .catch(err=>{
    res.status(400).json({
      status:false,
      err: err
    })
  })
  
})

register.get('/',(req,res) => {
  const register = path.join(__dirname, '../register.html')
  res.sendFile(register)
})










module.exports = register;
