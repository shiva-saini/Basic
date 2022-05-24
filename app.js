const express = require('express'); // importing express for creating app 
const path = require('path'); //path for using path.join or other
// const route = require('./routes')
// const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser'); // this is for parsing the user reequest of //the console by this be can parse the user request data on the console and can see //////what the user wrote in his request
const app = express(); // creating express app
const adminRouter = require('./routes/admin.js'); // importin router for routing the   admin file's stuff
const shopRouter = require('./routes/shop.js'); //importing router for routing the ///////shop file 
const errorPage = require('./controllers/error')
// const routController = require('./controllers/products')
// app.engine('hbs',expressHbs({layoutDir:'views/layouts/',defaultLayout:'main-layout',extname:'hbs'}));
app.set('view engine','ejs')
//app.set('view engine','hbs') // name shoul be hbs in both the lines same as file name
//app.set('view engine','pug'); //it will tell that we are going to use pug template //////engine and all the html will we written using pug template
app.set('views','views'); // this will tell that all the pug templates are in views /////folder note you can write any name of your folder and second argument is tell that ////we are going to view that folder
app.use(bodyParser.urlencoded({extended : false})); // this is middle ware to allow to //read user requests this will parse the body of request that user has made

app.use('/admin',adminRouter); // this is middle ware that will tell that we /////are going to use this router in the admin file  that means we are going to use ////////adming.js file  by this we will route this file
app.use(shopRouter); // same for shop file
app.use(express.static(path.join(__dirname,'public'))); // this is for serving css fiels in our html files express will tell that all the css files inside the public folder we are going to use those file according to requirement





app.use(errorPage.get404)
app.listen(3000) // this will tell that server is running at port 3000

