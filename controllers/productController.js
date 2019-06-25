const Product = require('../models/productModel');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.user = function (req, res) {
    res.send('Welcome Yogesh');
}

exports.create = function (req, res) {
   let product = new Product({
      name  : req.body.name,
      price : req.body.price  
   });
    product.save((err) => {
        if (err) throw err;
        res.send('Prodcut Created Successfully !!');
   });
}

exports.get_product = function (req, res) {
    Product.find({}, (err, result)=>{
        res.send(result);
    })
}
