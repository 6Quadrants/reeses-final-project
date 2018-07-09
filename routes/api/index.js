const router = require("express").Router();
const reesesRoutes = require("./reeses");

// Book routes
router.use("/reeses", reesesRoutes);

module.exports = router;
