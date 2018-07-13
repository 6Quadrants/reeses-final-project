// const path = require("path");
// const router = require("express").Router();
// const apiRoutes = require("./api");

// // API Routes
// router.use("/api", apiRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// module.exports = router;


const path = require("path");
const router = require("express").Router();
// const datatestRoutes = require("./api/datatest");
const apiRoutes = require("./api");
const Form = require("../models/formmodel");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const passport = require("passport");

const validateLoginInput = require('../validation/login');

// API Routes
router.use("/api", apiRoutes);


router.post("/registration", function(req, res){
  User.create(req.body)
    .then(function(dbUser) {
      res.json(dbUser)
    })
    .catch(function(err) {
      res.json(err)
    })
})

router.post('/login', (req, res) => {

  const {
    errors,
    isValid
  } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;

  // Find user by username
  User.findOne({
    username
  }).then(user => {
    // Check for user
    if (!user) {
        errors.username = 'User not found';
        return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
            // User Matched
            const payload = {
                id: user.id,
                username: user.username
            }; // Create JWT Payload

            // Sign Token
            jwt.sign(
                payload,
                keys.secretOrKey, {
                    expiresIn: 3600
                },
                (err, token) => {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    });
                }
            );
        } else {
            errors.password = 'Password incorrect';
            return res.status(400).json(errors);
        }
    });
  });
});

router.get('/current',
  passport.authenticate('jwt', {
      session: false
  }),
  (req, res) => {
      res.json({
          id: req.user.id,
          name: req.user.username
      });
  }
);




// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
