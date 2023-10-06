const express = require('express')
const login= express.Router()
var bodyParser = require('body-parser')
const path = require('path')
const jwt = require('jsonwebtoken')
const AccountModel = require('./database/accounts')
const { log } = require('console')

login.use(bodyParser.urlencoded({ extended: false }))
login.use(bodyParser.json())

login.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
});

login.get('/',(req,res) => {
  const login = path.join(__dirname, '../login.html')
  res.sendFile(login)
})


login.post('/',(req,res)=>{
  AccountModel.findOne({
    username : req.body.username,
    password : req.body.password
  })
  .then(data=>{
    console.log(data);
    if (data){
      var token = jwt.sign({_id:data._id,},'abc')
      return res.json({title:'dang nhap thanh cong',token:token})
    }else{
      return res.status(400).json({title:'dang nhap That bai',data:data})
    }
    
    
  })
  .catch(err=>{
    res.status(400).json({err:'dang nhap loi',err:err})
  })
})

module.exports=login