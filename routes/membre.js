var express = require('express');
var router = express.Router();
var membresController = require('../controllers/membreController')
/* GET users listing. */
router.get('/', function(req, res, next) {
    membresController.getAllMembres(req,res);
});

router.post('/', function(req, res, next) {
    membresController.createMembre(req,res);
});

router.put('/:id', function(req, res, next) {
    console.log("put")
    membresController.updateMembre(req,res);
});

router.delete('/:id', function(req, res, next) {
    console.log("delete")
    membresController.deleteMembre(req,res);
});
module.exports = router;
