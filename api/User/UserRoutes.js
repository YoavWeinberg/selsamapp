var router = require('express').Router();
var controller = require('./UserController');
router.post('/add', controller.add);
router.post('/get', controller.getAll);

module.exports = router;