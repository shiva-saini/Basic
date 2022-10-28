<!-- //process.exit();//to exit out of event loop after all event listners -->

  <!--
  i past we basically give response in this form but knowadays it can we done very easily and simply using some usefull tools that we will see later 
   res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title> my first title is nodejs</title></head>');
    res.write('<body><h1> hello from the nodejs</h1> </body>');
    res.write('</html>');
    res.end() // to end sending resposes -->


<!-- if(url === '/message' && method === 'POST'){
        let body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
          body.push(chunk);
        })

        req.on('end',()=>{
            let parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            let message = parsedBody.split('=')[1];
            // let nfw = message.split('+').concat();
            // console.log(nfw);
            fs.writeFileSync('message.txt',message);
        })
        res.statusCode=302;
        res.setHeader('LOCATION','/');
        return res.end(method);
        
    }
    console.log(req.url,req.method,req.headers);
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title> my first title is nodejs</title></head>');
    res.write('<body><h1> hello from the nodejs</h1> </body>');
    res.write('</html>');

    if we write the code in the above way this will given error because function inside on method is callback function so it will run later in the future 
    so if we do write code as following 
     req.on('end',()=>{
            let parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            let message = parsedBody.split('=')[1];
            // let nfw = message.split('+').concat();
            // console.log(nfw);
            fs.writeFileSync('message.txt',message);
        })
        res.statusCode=302;
        res.setHeader('LOCATION','/');
        return res.end(method);
      }) 
      this is will give error because this is a callback function and control will go to next line of code and come back after some time but till then header will be returned by the bellow code
      console.log(req.url,req.method,req.headers);
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title> my first title is nodejs</title></head>');
    res.write('<body><h1> hello from the nodejs</h1> </body>');
    res.write('</html>');

    so to avoid this error we will return on method 
    retunr on(-----);
    res.end() -->


<!-- module.exports = routeHandler;
or 
module.exports = {
  rotehandler:routeHandler,
  someText:'this is hard code'
}

or 
module.expots.routehandler = routeHandler;
module.exports.someText = 'this is hard code' -->

<!--  instead of app.use we can use  app.get() for get requset and app.post() for post 
requests -->


<!-- 
code for manual routes in nodejs without using express js

const fs = require('fs');
const routHandler = (req,res) => {
    let url = req.url;
    let method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title> my first title is nodejs</title></head>');
        res.write('<body><form action="/message" method ="POST"><input type="text" name ="message"><button>send</button></form></body>')
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        let body = [];
        req.on('data',(chunk)=>{
          console.log(chunk);
          body.push(chunk);
        })

        return req.on('end',()=>{
            let parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            let message = parsedBody.split('=')[1];
            // let nfw = message.split('+').concat();
            // console.log(nfw);
            fs.writeFile('message.txt',message,()=>{
                res.statusCode=302;
                res.setHeader('LOCATION','/');
                res.end(method);
                res.end();
            });
            
        })
       
        
    }
    console.log(req.url,req.method,req.headers);
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title> my first title is nodejs</title></head>');
    res.write('<body><h1> hello from the nodejs</h1> </body>');
    res.write('</html>');
    res.end() // to end sending resposes

}


// module.exports = {
//     routehandler:routHandler,
//     someText:'This is hard coded'
// }
module.exports.routehandler = routHandler;
module.exports.someText = 'this is hard code' -->


<!-- we can use common part of a directory in the middleware itself in the app.js
  
in app.js
app.use('/admin',addminRouter);

now we will have to write method as /admin/add-product in app.js file in the form



int admin.js
router.post('/product', (req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
})
 -->

 
 <!-- 
here first argument can be any name that depends on the name of your directory in which your html files do exist
end the second argument is deefault argument in the documnet of express js
app.set('views','views');

now we will not use  following for pug template
 console.log(adminData.products)
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
express provides a spacial render method for this for rendring the pug templates 
so we will use that is shop.js
 res.render('shop'); note we dont need to write the full path here 
 like res.render('shop.pug') express handles it auto amtecally because 
 we are writting app.set('view engine','pug');
 and app.set('views','views')

 This is one way to export data
 exports.routes = router;
exports.products = products; -->




<!-- doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(http-equiv="X-UA-Compatible", content="IE=edge")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title #{docTitle}
        link(rel="stylesheet", href="/css/main.css")
        link(rel="stylesheet", href="/css/shop.css")
    body 
        header.main_header
            nav.main_header_nav
                ul.main_header_item_list
                    li.main_header_list_item
                        a(href="/") Shop
                    li.main_header_list_item
                        a(href="/admin/add-product") Add Product
        main 
            if prods.length > 0
                .grid 
                    each product in prods 
                        article.card_product_item 
                            header.card_header 
                                h1.product_title Greate Book 
                            .card_image 
                                img(src="", alt="", srcset="")
                            .card_content 
                                h2.product_price $27.834
                                p.product_description Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            .card_action 
                                button.btn AddTo Cart 
            else 
                h1 No product Yet
 -->


<!-- exports.getAddProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    //note path:admin/add-product can be any name path:'/dadf/afjadj
    res.render('admin/edit-product',{pageTitle:'Add Product',path:'/admin/add-product'}); // to render html file this is the name of html file
} -->

<!-- sequelize 

Product.findAll({where:{
    id:prodId
  }}).then(products =>{
    res.render("shop/product-detail", {
      product: products[0],
      pageTitle: products[0].title,
      path: "/products",
    });
  }).catch(err => console.log(err)); -->



<!-- product.js
exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
}; 



save() {
    getProductsFromFile(products => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          prod => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log( "this is the error" +err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log("thi is hte error"+err);
        });
      }
    });
  }


static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }


  static deleteById(id) {
    getProductsFromFile(products => {
      const product = products.find(prod => prod.id === id);
      const updatedProducts = products.filter(prod => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }


}; -->


<!-- 
command for comparing two files simultanuously
code --diff file1.js file2.js -->

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







// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoDBStore = require('connect-mongodb-session')(session);
// const csrf = require('csurf');
// const flash = require('connect-flash');
// const multer = require('multer');

// const errorController = require('./controllers/error');
// const User = require('./models/user');

// const MONGODB_URI =
//   'mongodb+srv://shivasaini:adiAXQ073WWOwV7Z@shiva-oauth-test.gdqyj.mongodb.net/shop?retryWrites=true&w=majority';
// const app = express();
// const store = new MongoDBStore({
//   uri: MONGODB_URI,
//   collection: 'sessions'
// });
// const csrfProtection = csrf();

// const fileStorage = multer.diskStorage({
//   destination: (req,file,cb) =>{
//            cb(null,'images')
//   },
//   filename: (req,file,cb) =>{
//     cb(null, new Date().toISOString() + '-' + file.originalname);
//   }
// })

// const fileFilter = (req,file,cb) =>{
//  if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
//   cb(null,true);
//  }else{
//   cb(null,false);
//  }
// }
// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// const authRoutes = require('./routes/auth');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ storage : fileStorage,fileFilter:fileFilter }).single('image'));

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(
//   session({
//     secret: 'my secret',
//     resave: false,
//     saveUninitialized: false,
//     store: store
//   })
// );
// app.use(csrfProtection);
// app.use(flash());

// app.use((req, res, next) => {
//   res.locals.isAuthenticated = req.session.isLoggedIn;
//   res.locals.csrfToken = req.csrfToken();
//   next();
// });
// app.use((req, res, next) => {
  
//   if (!req.session.user) {
//     return next();
//   }
//   User.findById(req.session.user._id)
//     .then(user => {
//       // throw new Error('dummy');
//       if(!user) {
//         return next();
//       }
//       req.user = user;
//       next();
//     })
//     .catch(err => {
//     next(new Error(err))
//     });
// });



// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use(authRoutes);
// app.get('/500',errorController.get500);
// app.use(errorController.get404);


// app.use((error,req,res,next) =>{
//   //res.status(error.httpStatusCode).render(...)
//   res.status(500).render('500', {
//     pageTitle: 'Error!',
//     path: '/500',
//     isAuthenticated: req.session.isLoggedIn
//   });
// });


// mongoose
//   .connect(MONGODB_URI)
//   .then(result => {
//     app.listen(3000);
//   })
//   .catch(err => {
//     console.log(err);
//   });




<!-- <%- include('../includes/head.ejs') %>
    <link rel="stylesheet" href="/css/forms.css">
    <link rel="stylesheet" href="/css/auth.css">
</head>

<body>
   <%- include('../includes/navigation.ejs') %>

    <main>
        <% if (errorMessage.length > 0) { %>
            <div class="user-message user-message--error"><%= errorMessage %></div>
        <% } %>
        <form class="login-form" action="/signup" method="POST" novalidate>
            <div class="form-control">
                <label for="email">E-Mail</label>
                <input 
                class="<%= validationErrors.find(e => e.param === 'email') ? 'invalid' : '' %>"
                type="email" 
                name="email" 
                id="email" 
                value="<%= oldInput.email %>">
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input 
                    class="<%= validationErrors.find(e => e.param === 'password') ? 'invalid' : '' %>"
                    type="password" 
                    name="password" 
                    id="password" 
                    value="<%= oldInput.password %>">
            </div>
            <div class="form-control">
                <label for="confirmPassword">Confirm Password</label>
                <input 
                    class="<%= validationErrors.find(e => e.param === 'confirmPassword') ? 'invalid' : '' %>"
                    type="password" 
                    name="confirmPassword" 
                    id="confirmPassword" 
                    value="<%= oldInput.confirmPassword %>">
            </div>
            <input type="hidden" name="_csrf" value="<%= csrfToken %>">
            <button class="btn" type="submit">Signup</button>
        </form>
    </main>
<%- include('../includes/end.ejs') %> -->



<!-- app.js



// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoDBStore = require('connect-mongodb-session')(session);
// const csrf = require('csurf');
// const flash = require('connect-flash');
// const multer = require('multer');

// const errorController = require('./controllers/error');
// const User = require('./models/user');

// const MONGODB_URI =
//   'mongodb+srv://shivasaini:adiAXQ073WWOwV7Z@shiva-oauth-test.gdqyj.mongodb.net/shop';

// const app = express();
// const store = new MongoDBStore({
//   uri: MONGODB_URI,
//   collection: 'sessions'
// });
// const csrfProtection = csrf();

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'images');
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toISOString() + '-' + file.originalname);
//   }
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === 'image/png' ||
//     file.mimetype === 'image/jpg' ||
//     file.mimetype === 'image/jpeg'
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// const authRoutes = require('./routes/auth');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(
//   multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
// );
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/images', express.static(path.join(__dirname, 'images')));
// app.use(
//   session({
//     secret: 'my secret',
//     resave: false,
//     saveUninitialized: false,
//     store: store
//   })
// );

// app.use(csrfProtection);
// app.use(flash());

// app.use((req, res, next) => {
//   res.locals.isAuthenticated = req.session.isLoggedIn;
//   res.locals.csrfToken = req.csrfToken();
//   next();
// });

// app.use((req, res, next) => {
//   // throw new Error('Sync Dummy');
//   if (!req.session.user) {
//     return next();
//   }
//   User.findById(req.session.user._id)
//     .then(user => {
//       if (!user) {
//         return next();
//       }
//       req.user = user;
//       next();
//     })
//     .catch(err => {
//       next(new Error(err));
//     });
// });

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use(authRoutes);

// app.get('/500', errorController.get500);

// app.use(errorController.get404);

// app.use((error, req, res, next) => {
//   // res.status(error.httpStatusCode).render(...);
//   // res.redirect('/500');
//   res.status(500).render('500', {
//     pageTitle: 'Error!',
//     path: '/500',
//     isAuthenticated: req.session.isLoggedIn
//   });
// });

// mongoose
//   .connect(MONGODB_URI)
//   .then(result => {
//     app.listen(3000);
//   })
//   .catch(err => {
//     console.log(err);
//   });
 -->


 <!-- routes auth.js
 
// const express = require('express');
// const { check, body } = require('express-validator');

// const authController = require('../controllers/auth');
// const User = require('../models/user');

// const router = express.Router();

// router.get('/login', authController.getLogin);

// router.get('/signup', authController.getSignup);

// router.post(
//   '/login',
//   [
//     body('email')
//       .isEmail()
//       .withMessage('Please enter a valid email address.')
//       .normalizeEmail(),
//     body('password', 'Password has to be valid.')
//       .isLength({ min: 5 })
//       .isAlphanumeric()
//       .trim()
//   ],
//   authController.postLogin
// );

// router.post(
//   '/signup',
//   [
//     check('email')
//       .isEmail()
//       .withMessage('Please enter a valid email.')
//       .custom((value, { req }) => {
//         // if (value === 'test@test.com') {
//         //   throw new Error('This email address if forbidden.');
//         // }
//         // return true;
//         return User.findOne({ email: value }).then(userDoc => {
//           if (userDoc) {
//             return Promise.reject(
//               'E-Mail exists already, please pick a different one.'
//             );
//           }
//         });
//       })
//       .normalizeEmail(),
//     body(
//       'password',
//       'Please enter a password with only numbers and text and at least 5 characters.'
//     )
//       .isLength({ min: 5 })
//       .isAlphanumeric()
//       .trim(),
//     body('confirmPassword')
//       .trim()
//       .custom((value, { req }) => {
//         if (value !== req.body.password) {
//           throw new Error('Passwords have to match!');
//         }
//         return true;
//       })
//   ],
//   authController.postSignup
// );

// router.post('/logout', authController.postLogout);

// router.get('/reset', authController.getReset);

// router.post('/reset', authController.postReset);

// router.get('/reset/:token', authController.getNewPassword);

// router.post('/new-password', authController.postNewPassword);

// module.exports = router;


<!-- user.js
// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//  password:{
//   type:String,
//   required:true
//  },
//   email: {
//     type: String,
//     required: true
//   },
//   resetToken:String,
//   resetTokenExpiration:Date,
//   cart: {
//     items: [
//       {
//         productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
//         quantity: { type: Number, required: true }
//       }
//     ]
//   }
// });

// userSchema.methods.addToCart = function(product){
//   const cartProductIndex = this.cart.items.findIndex(cp => {
//     return cp.productId.toString() === product._id.toString();
//   });
//   let newQuantity = 1;
//   const updatedCartItems = [...this.cart.items];

//   if (cartProductIndex >= 0) {
//     newQuantity = this.cart.items[cartProductIndex].quantity + 1;
//     updatedCartItems[cartProductIndex].quantity = newQuantity;
//   } else {
//     updatedCartItems.push({
//       productId: product._id, //we dont need to write likenew ObjectId(product._id) this
//       quantity: newQuantity
//     });
//   }
//   const updatedCart = {
//     items: updatedCartItems
//   };
  
//   this.cart = updatedCart;
//   return this.save();
  
// }

// userSchema.methods.removeFromCart = function(productId){
//   const updatedCartItems = this.cart.items.filter(item=>{
//     return item.productId.toString() !== productId.toString();
//   });

//   this.cart = updatedCartItems;
//   return this.save();
// }

// userSchema.methods.clearCart = function(){
//       this.cart = { items : []};
//       return  this.save();
// }

// // addOrder() {
// //   const db = getDb();
// //   return this.getCart()
// //     .then(products => {
// //       const order = {
// //         items: products,
// //         user: {
// //           _id: new ObjectId(this._id),
// //           name: this.name
// //         }
// //       };
// //       return db.collection('orders').insertOne(order);
// //     })
// //     .then(result => {
// //       this.cart = { items: [] };
// //       return db
// //         .collection('users')
// //         .updateOne(
// //           { _id: new ObjectId(this._id) },
// //           { $set: { cart: { items: [] } } }
// //         );
// //     });
// // }



 -->
 
  -->