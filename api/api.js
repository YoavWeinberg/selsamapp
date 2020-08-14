var router = require('express').Router();
router.use('/product', require('./Product/ProductsRoutes'));
router.use('/post', require('./Blog/PostRoutes'));

module.exports = router;
