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
