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
module.exports.someText = 'this is hard code'