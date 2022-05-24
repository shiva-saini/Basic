const path = require('path');
const fs = require('fs');
const p = path.join(__dirname,'../','data','products.json');
const getProductFromFile = (cb)=>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }   
    })
}


module.exports = class Product {
  constructor(t){
      this.title = t;
  }

  save(){
     
    getProductFromFile(products => {
        products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err)=>{
              console.log(err);
        })
    })

  }

//   Cannot read properties of undefined (reading 'length') because readfile is a ///////async function and json.parse is also so to avoid this error we will pass call back f
  static fetchAll(cb){
    getProductFromFile(cb)
  }
  
}