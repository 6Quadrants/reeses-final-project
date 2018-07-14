
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// load up the user model
var User = require('../models/user');
var settings = require('./controllers/settings'); // get settings file

module.exports = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = settings.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
};

// var bCrypt = require('bcrypt-nodejs');
// var db = require('../models');


// module.exports = function (passport, signin) {

    // var Signin = signin;
    // var LocalStrategy = require('passport-local').Strategy;

    // passport.serializeUser(function (signin, done) {
    //     done(null, signin.id);
    // });

    // passport.deserializeUser(function (id, done) {
    //     db.Member.findById(id).then(function (user) {
    //         if (user) {
    //             done(null, user.get());
    //         } else {
    //             done(user.errors, null);
    //         }
    //     });
    // });

    // passport.use('local-signup', new LocalStrategy({
    //     usernameField: 'email',
    //     passwordField: 'password',
    //     passReqToCallback: true 
    // },

    //     function (req, email, password, done) {
    //         var generateHash = function (password) {
    //             return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
    //         };

    //         db.Member.findOne({
    //             where: {
    //                 email: email
    //             }
    //         }).then(function (accountFound) {
    //             if (accountFound) {
    //                 return done(null, false, {
    //                     message: 'email address already in use. please try again'
    //                 });
    //             } else {
    //                 var hashPassword = generateHash(password);
    //                 var data = {
    //                     email: email,
    //                     password: hashPassword,
    //                 };

    //                 db.Member.create(data).then(function (newUser, created) {
    //                     if (!newUser) {
    //                         return done(null, false, {
    //                             message: 'an error occured. please try again.'
    //                         });
    //                     }
    //                     if (newUser) {
    //                         return done(null, newUser, {
    //                             message: 'success! account created.'
    //                         });
    //                     }
    //                 });
    //             }
    //         }).catch(function (err) {
    //             console.log("Error:", err);
    //             return done(null, false, {
    //                 message: 'an error occured. please try again.'
    //             });
    //         });
    //     }
    // ));

    //LOCAL SIGNIN
//     passport.use('local-signin', new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true 
//     },
//         function (req, email, password, done) {

//             var isValidPassword = function (userpass, password) {
//                 return bCrypt.compareSync(password, userpass);
//             };

//             db.Member.findOne({
//                 where: {
//                     email: email
//                 }
//             }).then(function (signin) {
//                 if (!signin) {
//                     return done(null, null, {
//                         message: 'email/password combination incorrect. please try again.'
//                     });
//                 }
//                 if (!isValidPassword(signin.password, password)) {
//                     return done(null, null, {
//                         message: 'email/password combination incorrect. please try again.'
//                     });
//                 }

//                 return done(null, signin);
//             }).catch(function (err) {
//                 console.log("Error:", err);
//                 return done(null, false, {
//                     message: 'an error occured. please try again.'
//                 });
//             });
//         }
//     ));
// };