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


router.route('/api/saveName')
  .post( (req, res) => {
    console.log('made it here');
    req.body = nameData; 
    console.log('Submitted name: ', nameData);
    res.json(true)
  });

  router.route('/api/formDrop')
  .post( (req, res) => {
    console.log('made it here form');
    req.body = formData; 
    console.log('Submitted number: ', formDrop);
    res.json(true)
  });

  router.route('/api/formSalty')
  .post( (req, res) => {
    console.log('made it here form');
    req.body = saltyData; 
    console.log('Submitted number: ', formSalty);
    res.json(true)
  });

  router.route('/api/formSweet')
  .post( (req, res) => {
    console.log('made it here form');
    req.body = sweetData; 
    console.log('Submitted number: ', formSweet);
    res.json(true)
  });

  router.route('/api/formSmooth')
  .post( (req, res) => {
    console.log('made it here form');
    req.body = smoothData; 
    console.log('Submitted number: ', formSmooth );
    res.json(true)
  });

  router.route('/api/formChewy')
  .post( (req, res) => {
    console.log('made it here form');
    req.body = chewyData; 
    console.log('Submitted number: ', formChewy);
    res.json(true)
  });

  router.route('/api/formMelty')
  .post( (req, res) => {
    console.log('made it here form');
    req.body = meltyData; 
    console.log('Submitted number: ', formMelty);
    res.json(true)
  });

module.exports = router;
