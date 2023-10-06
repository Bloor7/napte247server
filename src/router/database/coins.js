const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/napte247', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const coins = new Schema({
    id: String,
    password: String,
  },{
      collection:'coins'
  });