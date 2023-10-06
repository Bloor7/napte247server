const express = require('express')
const app = express()
const register = require('./router/register')
const login = require('./router/login')
const thanhtoan = require('./router/thanhtoan')
const dashboard = require('./router/dashboard')
var bodyParser = require('body-parser')
const path = require('path')
const port = 3001

app.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
});


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public',express.static(path.join(__dirname, '../public')))

app.get('/',(req,res)=>{
  const home = path.join(__dirname, 'index.html')
  res.sendFile(home);
})

app.use('/register/',register)
app.use('/login/',login)
app.use('/dashboard',dashboard)
app.use('/thanhtoan',thanhtoan)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})