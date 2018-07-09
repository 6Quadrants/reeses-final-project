const router = require("express").Router();
const booksController = require("../../controllers/reesesController");

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
