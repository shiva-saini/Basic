// const path = require("path");

// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const session = require("express-session");
// const MongoDBStore = require("connect-mongodb-session")(session);
// const errorController = require("./controllers/error");

// const User = require("./models/user");
// const csrf = require('csurf');
// const MONGODB_URI =
//   "mongodb+srv://shivasaini:adiAXQ073WWOwV7Z@shiva-oauth-test.gdqyj.mongodb.net/shop?retryWrites=true&w=majority";


// const app = express();

// const store = new MongoDBStore({
//   uri: MONGODB_URI,
//   collection: "session",
// }); //this is a constructor

// const csrfProtection = csrf();
// app.set("view engine", "ejs");
// app.set("views", "views");

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");
// const authRoutes = require("./routes/auth");


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

// //note session route should come before all other routes
// app.use(
//   session({ secret: "my secret", resave: false, saveUninitialized: false,store:store })
// );

// app.use(csrfProtection);



// app.use((req,res,next)=>{
//   if(!req.session.user){
//     return next();
//   }
//   User.findById(req.session.user._id)
//        .then(user => {
//         req.user = user;
//         next();
//        })
//        .catch(err=>{console.log(err)});
// });

// app.use((req,res,next) =>{
//   req.locals.isAuthenticated = req.session.isLoggedIn;
//   req.locals.csrfToken = req.csrfToken();
//   next();
// })
// app.use("/admin", adminRoutes);
// app.use(shopRoutes);
// app.use(authRoutes);
// app.use(errorController.get404);
// mongoose
//   .connect(MONGODB_URI)
//   .then(() => {
//     app.listen(3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });




const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');

const errorController = require('./controllers/error');
const User = require('./models/user');
const flash = require('connect-flash');
const MONGODB_URI =
  'mongodb+srv://shivasaini:adiAXQ073WWOwV7Z@shiva-oauth-test.gdqyj.mongodb.net/shop?retryWrites=true&w=majority';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(csrfProtection);
app.use(flash());
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use((req, res, next) => {
  
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      throw new Error('dummy');
      if(!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch(err => {
    next(new Error(err))
    });
});



app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);
app.get('/500',errorController.get500);
app.use(errorController.get404);

app.use((error,req,res,next) =>{
  //res.status(error.httpStatusCode).render(...)
  res.status(500).render('500', {
    pageTitle: 'Error!',
    path: '/500'
  });
})


mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });

