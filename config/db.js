const mongoose = require("mongoose");

//This function will be called to connect to our database
const connectToMongo = () => {
  mongoose.connect('mongodb+srv://hamza:KRF9AGtc9J3Usp8E@cluster0.2c4zxgu.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log("connected to mongoose sucessfully");
  });
};

module.exports = connectToMongo;
