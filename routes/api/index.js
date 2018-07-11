// const router = require("express").Router();
// const reesesRoutes = require("./reeses");
// const authRoutes = require("./auth");

// // Book routes
// router.use("/reeses", reesesRoutes);
// router.use('/auth', authRoutes);

// module.exports = router;



const router = require("express").Router();
const reesesRoutes = require("./reeses");

// Book routes
router.use("/reeses", reesesRoutes);

module.exports = router;