const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const User = require("../Models/user")

router.get("/", function(req, res, next) {
    return res.send("registration page!");
});

router.post("/", function(req, res, next) {
    return res.send("form entry!");
});


router.post('/registration', function(req, res, next) {
    if (req.body.email &&
      req.body.name &&
      req.body.password &&
      req.body.confirmPassword) {

        if (req.body.password !== req.body.confirmPassword) {
            var err = new Error('Passwords do not match.');
            err.status = 400;
            return next(err);
          }
    
    else {
        const err = new Error("error!");
     }


     var userData = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
      };

      // use schema's `create` method to insert document into Mongo
      User.create(userData, function (error, user) {
        if (error) {
          return next(error);
        } else {
          req.session.userId = user._id;
          return res.redirect('/Registration');
          console.log("created");
        }
      });

    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
})
        

// router.get("/Match", function(req, res, next) {
//     return res.send("match!");
// });



// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
