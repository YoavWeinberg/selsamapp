var router = require('express').Router();
var controller = require('./ProductController');
router.post('/insert', controller.insert);
router.get('/getall', controller.getall);
router.post('/update', controller.update);
router.post('/delete', controller.delete);
router.get('/text', controller.text);
router.get('/text2', controller.text2);
router.get('/gush', controller.gush);

module.exports = router;