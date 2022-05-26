const express = require('express'); 

const path = require('path'); 

const bodyParser = require('body-parser'); 

const app = express(); 



const adminRouter = require('./routes/admin.js'); 

const shopRouter = require('./routes/shop.js'); 

const errorPage = require('./controllers/error')

app.set('view engine','ejs')


app.set('views','views'); 

app.use(bodyParser.urlencoded({extended : false}));


app.use('/admin',adminRouter);

app.use(express.static(path.join(__dirname,'public')));

app.use(shopRouter);

app.use(errorPage.get404)

app.listen(3000) // this will tell that server is running at port 3000

