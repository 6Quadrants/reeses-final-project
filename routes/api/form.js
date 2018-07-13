const router = require("express").Router();
const formController = require("../../controllers/formController");

// Matches with "/api/books"
router.route("/")
  .get(formController.findAll)
  .post(formController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(formController.findById)
  .put(formController.update)
  .delete(formController.remove);

module.exports = router;






// const express = require('express');
// const Form = require("../../models/formmodel");
// const formRouter = express.Router();



// formRouter.route('/')
//     .get((req,res) => {
//         Form.find({}, (err, form) => {
//             res.json(form)
//         })
//     }),
  

   
// module.exports = formRouter;