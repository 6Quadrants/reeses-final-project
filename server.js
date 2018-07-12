const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const passport = require("./config/passport");


const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static("public"));
// app.use(sessionStorage({ secret: "keyboard cat", resave: true, saveUninitialized: true}));
// app.use(passport.initialize());
// app.use(passport.session());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reesesinitial");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "))


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
