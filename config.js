const passport = require( 'passport' );
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;



passport.serializeUser(function(user, done) {
    /*
    From the user take just the id (to minimize the cookie size) and just pass the id of the user
    to the done callback
    PS: You dont have to do it like this its just usually done like this
    */
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    /*
    Instead of user this function usually recives the id 
    then you use the id to select the user from the db and pass the user obj to the done callback
    PS: You can later access this data in any routes in: req.user
    */
    done(null, user);
});


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });

passport.use(new GoogleStrategy({
    clientID:     "571981908200-itbbtjfc1oic92csqe33bscssl8p7c57.apps.googleusercontent.com",
    clientSecret: "6UOH3Gg0x6NpjlzDTM9ral_R",
    callbackURL: "http://localhost:4000/login/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    /*
     use the profile info (mainly profile id) to check if the user is registerd in ur db
     If yes select the user and pass him to the done callback
     If not create the user and then select him and pass to callback
    */
    return done(null, profile);

    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  }
));


