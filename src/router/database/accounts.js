const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/napte247', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const account = new Schema({
  author: ObjectId,
  username: String,
  hoTen: String,
  gmail: String,
  phone: String,
  password: String,
  coins: Number,
},{
    collection:'account'
});



const AccountModel = mongoose.model('account', account);

// AccountModel.findOne({

// })
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//   console.log(err);
// })

module.exports = AccountModel
