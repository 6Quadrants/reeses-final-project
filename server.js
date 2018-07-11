const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");


const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// import datatestRouter from "./routes/api/datatest";
// app.use('/api/datatest', datatestRouter);

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reesesinitial");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "))


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
