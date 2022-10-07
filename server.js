const app = require("./index");
const connectToMongo = require("./config/db"); //function that upon calling will connect to our DB.
const dotenv = require("dotenv"); // for setting up enviroment variables
//setting the path to the env file
dotenv.config({ path: "config/config.env" });
const port = 5000

//calling function to connect to database
connectToMongo();

//creating a server
app.listen(port, () => {
  console.log("server is running at port ", port);
});
