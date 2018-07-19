const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const form_routes = require("./routes/api/form");


// const passport = require("./config/passport");


const app = express();
const PORT = process.env.PORT || 3002;


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


app.get( '/api/saveName', (req, res) => {
  console.log('made it here');
  res.send('we are here');
});

app.post( '/api/saveName', (req, res) => {
  console.log(req.body);
  console.log('made it here');
  let nameData = req.body; 
  console.log('Submitted name: ', req.body.lastName);
  res.json(true)
});

app.get( 'api/formDrop', (req, res) => {
  console.log('made it here to form drop');
  res.send('here is form drop');
});

app.post( '/api/formDrop', (req, res) => {
  console.log(req.body);
  console.log('form drop here');
  let formData = req.body;
  console.log('submitted number: ' , req.body.value);
  res.json(true);
});

app.get( 'api/formSalty', (req, res) => {
  console.log('made it here to salty drop');
  res.send('here is salty drop');
});

app.post( '/api/formSalty', (req, res) => {
  console.log(req.body);
  console.log('salty drop here');
  let saltyData = req.body;
  console.log('submitted number: ' , req.body.value);
  res.json(true);
});

app.get( 'api/formSweet', (req, res) => {
  console.log('made it here to sweet drop');
  res.send('here is sweet drop');
});

app.post( '/api/formSweet', (req, res) => {
  console.log(req.body);
  console.log('sweet drop here');
  let sweetData = req.body;
  console.log('submitted number: ' , req.body.value);
  res.json(true);
});

app.get( 'api/formSmooth', (req, res) => {
  console.log('made it here to sweet drop');
  res.send('here is smooth drop');
});

app.post( '/api/formSmooth', (req, res) => {
  console.log(req.body);
  console.log('smooth drop here');
  let smoothData = req.body;
  console.log('submitted number: ' , req.body.value);
  res.json(true);
});

app.get( 'api/formChewy', (req, res) => {
  console.log('made it here to chewy drop');
  res.send('here is chewy drop');
});

app.post( '/api/formChewy', (req, res) => {
  console.log(req.body);
  console.log('chewy drop here');
  let chewyData = req.body;
  console.log('submitted number: ' , req.body.value);
  res.json(true);
});

app.get( 'api/formMelty', (req, res) => {
  console.log('made it here to melty drop');
  res.send('here is melty drop');
});

app.post( '/api/formMelty', (req, res) => {
  console.log(req.body);
  console.log('melty drop here');
  let meltyData = req.body;
  console.log('submitted number: ' , req.body.value);
  res.json(true);
});


// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reesesinitial");
// const db = mongoose.connection;

mongoose.connect(process.env.MONGODB_URI || `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}`);
const db = mongoose.connection;

app.set('port', (process.env.PORT || 1337));


db.on("error", console.error.bind(console, "connection error: "))


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
