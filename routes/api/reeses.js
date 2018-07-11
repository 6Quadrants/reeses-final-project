const router = require("express").Router();
const reesesController = require("../../controllers/reesesController");

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






// var express = require('express');
// const router = require("express").Router();
// var mongoose = require('mongoose');

// // var Reeses = require('../../models/reeses-cups');

// const reesesController = require("../../controllers/reesesController");

// // /* GET home page. */
// // router.get('/', function(req, res, next) {
// //     res.send('Express REST API');
// //   });
  
  
//   // Matches with "/api/reeses"
//   router.route("/")
//     .get(reesesController.findAll)
//     .post(reesesController.create);
  
//   // Matches with "/api/books/:id"
//   router
//     .route("/:id")
//     .get(reesesController.findById)
//     .put(reesesController.update)
//     .delete(reesesController.remove);
  
//   module.exports = router;
  

// var passport = require('passport');
// require('../../config/passport')(passport);

// router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
//   var token = getToken(req.headers);
//   if (token) {
//     Reeses.create(req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   } else {
//     return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   }
// });

// router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
//   var token = getToken(req.headers);
//   if (token) {
//     Reeses.find(function (err, reeses) {
//       if (err) return next(err);
//       res.json(reeses);
//     });
//   } else {
//     return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   }
// });

// getToken = function (headers) {
//   if (headers && headers.authorization) {
//     var parted = headers.authorization.split(' ');
//     if (parted.length === 2) {
//       return parted[1];
//     } else {
//       return null;
//     }
//   } else {
//     return null;
//   }
// };

// /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   res.send('Express REST API');
// // });


// // // Matches with "/api/reeses"
// // router.route("/")
// //   .get(reesesController.findAll)
// //   .post(reesesController.create);

// // // Matches with "/api/books/:id"
// // router
// //   .route("/:id")
// //   .get(reesesController.findById)
// //   .put(reesesController.update)
// //   .delete(reesesController.remove);

// module.exports = router;
