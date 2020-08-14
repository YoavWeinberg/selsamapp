var router = require('express').Router();
router.use('/product', require('./Product/ProductsRoutes'));
router.use('/post', require('./Blog/PostRoutes'));
router.use('/user', require('./User/UserRoutes'));

router.use('/auth', require('../auth/routes'));
module.exports = router;
