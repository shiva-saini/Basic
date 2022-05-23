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


