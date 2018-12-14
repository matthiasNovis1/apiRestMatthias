var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
/* GET users listing. */
router.get('/', function(req, res, next) {
    userController.liste(req,res);
});

router.post('/', function(req, res, next) {
    userController.ajout(req,res)
});


module.exports = router;
