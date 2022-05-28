const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  //this will not create product inside databse because it dont know which user is //////////associcated with this product for that we will use userId here
  // note here user is not a js object it is a database object
  console.log(req.user);
  req.user
    .createProduct({
      title: title,
      price: price,
      imageUrl: imageUrl,
      description: description
    })
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
    });
  
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId; //this is comming from url
  //we can also use getproducts provided by sequelize
  req.user.getProducts({where:{id:prodId}}) //gives a list of products
  // Product.findByPk(prodId)
  .then(products => {
    const product = products[0];
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  })
  .catch(err => console.log(err));

  

};


exports.postEditProduct = (req,res,next)=>{
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedDesc = req.body.description;
  const updatedImageUrl = req.body.imageUrl;
  Product.findByPk(prodId)
  .then(product =>{
    product.title = updatedTitle;
    product.price = updatedPrice;
    product.imageUrl = updatedImageUrl;
    product.description = updatedDesc;
    //note this will only update the product localy not in data base 
    // to update this product in our database as well we need to save this
    return product.save()
  })
  .then(result => res.redirect('/admin/products'))
  .catch(err => console.log(err));
}

exports.getProducts = (req, res, next) => {
  //here also we can use something like following
  // Product.findAll()
  req.user.getProducts()
  .then(products =>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => console.log(err))

  
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
  .then(product =>{
    return product.destroy()
  })
  .then(result =>{
    console.log('product deleted successfully')
    res.redirect('/admin/products');
  }
 )
  .catch(err => console.log(err));
  
};
