const mongoose = require("mongoose");
const uri = 'mongodb://mongo:bksBdxjsThIRHLkH7UqK@containers-us-west-44.railway.app:5986'
//This function will be called to connect to our database
const connectToMongo = () => {
  mongoose.connect(uri, () => {
    console.log("connected to mongoose sucessfully");
  });
};

module.exports = connectToMongo;
