const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb',{useNewUrlParser: true,useUnifiedTopology: true})
     .then(()=>{console.log('DB Conneced suceesfully')})
     .catch((error)=>{console.log("Error occured while db connection",error)});

module.exports = mongoose;
