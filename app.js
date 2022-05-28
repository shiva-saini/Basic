const express = require('express'); 

const path = require('path'); 

const bodyParser = require('body-parser'); 

const app = express(); 
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');

app.set('view engine','ejs')
app.set('views','views'); 
const adminRouter = require('./routes/admin.js'); 

const shopRouter = require('./routes/shop.js'); 
const errorPage = require('./controllers/error')

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));
app.use((req, res, next) => {
  User.findByPk(2)
  .then(user =>{
      req.user = user;
      next();

  })
  .catch(err => console.log(err));
});

app.use('/admin',adminRouter);

app.use(shopRouter);

app.use(errorPage.get404)

//middle ware for the get user request

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    return User.findByPk(1);
    // console.log(result);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Max', email: 'test@test.com' });
    }
    return user;
  })
  .then(user => {
    // console.log(user);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });


