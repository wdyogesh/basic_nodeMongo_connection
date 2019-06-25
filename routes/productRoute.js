const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');

router.get('/test', productController.test);

router.get('/user', productController.user);

router.post('/create', productController.create);

router.get('/get-product', productController.get_product);

module.exports = router;