const mongoose = require("mongoose");

//This function will be called to connect to our database
const connectToMongo = () => {
  mongoose.connect(process.env.DB_URI, () => {
    console.log("connected to mongoose sucessfully");
  });
};

module.exports = connectToMongo;
