const mongoose = require("mongoose");

//This function will be called to connect to our database
const connectToMongo = () => {
  mongoose.connect('mongodb://mongo:bksBdxjsThIRHLkH7UqK@containers-us-west-44.railway.app:5986', () => {
    console.log("connected to mongoose sucessfully");
  });
};

module.exports = connectToMongo;
