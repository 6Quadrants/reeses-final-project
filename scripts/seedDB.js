const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reesesinitial",
  {
    useMongoClient: true
  }
);

const reesesSeed = [
  {
    product: "Mini",
    chocolate: 1,
    peanutbutter: 1,
    meltiness: 4,
    chewiness: 5,
    softness: 5,
    crunchiness: 1,
   
    date: new Date(Date.now())
  },
  {
    product: "Miniature",
    chocolate: 1,
    peanutbutter: 2,
    meltiness: 4,
    chewiness: 4,
    softness: 4,
    crunchiness: 2,
   
    date: new Date(Date.now())
  },
  {
    product: "Classic",
    chocolate: 2,
    peanutbutter: 3,
    meltiness: 4,
    chewiness: 5,
    softness: 2,
    crunchiness: 2,
  
   
    date: new Date(Date.now())
  },
  {
    product: "Big Cup",
    chocolate: 2,
    peanutbutter: 4,
    meltiness: 2,
    chewiness: 5,
    softness: 1,
    crunchiness: 3,

    date: new Date(Date.now())
  },
  
];

db.Reeses
  .remove({})
  .then(() => db.Reeses.collection.insertMany(reesesSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })

  .catch(err => {
    console.error(err);
    process.exit(1);
  });
