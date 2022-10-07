const mongoose = require("mongoose");
const uri = "mongodb+srv://hamza:t9dbVXbUY2EH6hp8@cluster0.rwvbdxm.mongodb.net/?retryWrites=true&w=majority"
//This function will be called to connect to our database
const connectToMongo = () => {
  mongoose.connect("mongodb+srv://hamza:t9dbVXbUY2EH6hp8@cluster0.rwvbdxm.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("connected to mongoose sucessfully");
  });
};

module.exports = connectToMongo;
