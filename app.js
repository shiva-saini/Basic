const express = require('express');
const path = require('path');
// const route = require('./routes')
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./routes/admin.js');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin',adminRouter);
app.use(shopRouter);
app.use(express.static(path.join(__dirname,'public')));





app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'./','views','pagerr.html'));
    // res.status(404).send('<h1>page not found</h1>');
})
app.listen(3000)

