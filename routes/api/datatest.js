var express = require('express');
const router = require("express").Router();
var mongoose = require('mongoose');

var Reeses = require('../../models/reeses-cups');

const reesesController = require("../../controllers/reesesController");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Express REST API');
  });
  
  
  // Matches with "/api/reeses"
  router.route("/")
    .get(reesesController.findAll)
    .post(reesesController.create);
  
  // Matches with "/api/books/:id"
  router
    .route("/:id")
    .get(reesesController.findById)
    .put(reesesController.update)
    .delete(reesesController.remove);
  
  module.exports = router;
  