var mongoose = require('mongoose');
var  User = require('../models/UserModel');
var bodyParser = require('body-parser');


var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })



exports.liste = function(req, res ) {
    console.log("get all users");

    User.find({}, function(err, ens) {
        console.log("find");

        if (err){
            console.log("erreur"+err);
            res.send(err);
        }else{
            console.log("envoi ok"+err);

            res.json(ens);
        }
    });

};

exports.ajout = function(req, res) {
    console.log(req.body);



    if (req.body.name && req.body.password && req.body.admin ){
        var newUser = new User(req.body);
        newUser.save(function(err){
            if(err){
                console.log(err);
                return;
            }

            res.json({ status:true ,  message: "user ajouté"});
        });

    }else{
        res.json({ "status": false, "message": "membre validation failed"})

    }



};

exports.updateMembre = function(req, res) {
    console.log("id"+ req.params.id);
    Membre.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, menbre) {
        if (err) {
            res.status(500);
            // res.send(err);
            res.send({ "status": false, "message": "membre inexistant" })


        } else {
            res.json( {"status:":true , "membre":menbre} );
        }

    });
};


exports.deleteMembre = function(req, res) {
    console.log("id" + req.params.id);

    Membre.remove({
        _id: req.params.id
    }, function (err, task) {
        if (err) {
            res.status(500);
            res.json({message: 'Erreur'});

            res.send(err);
        }
        else {
            res.json({message: 'Supression Reussie'});
        }
    });


};

exports.demandejeton =  function(req, res) {
    console.log("name"+ req.params.name);
    console.log("password"+ req.params.password);


    if(!req.params.membreId){
        res.status(500);
        res.send({ "status": false, "message": "membre id inexistant" })
    }

    if (req.params.name && req.params.password ) {


        User.findOne({'name': req.params.name, 'password': req.params.password}, function (err, user) {
            if (err) {


                return res.json({"status": false  , message: "name et/ou password incorrects"});

            }


            var expiration_time = parseInt(10000);



            return res.json({"status": true , token: jwt.sign({ name: req.params.name , _id: user._id}, 'apiRest')});


        });


    } else {

    res.json({ status: false, message: "name et/ou password absents"});
}


};


    exports.verifJWT =  function(req, res) {


        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (token) {

            jwt.verify(token, app.get('apiRest'), function(err, decoded) {       if (err) {
                return res.json({ success: false, message: 'token invalide.' });       } else {
                req.decoded = decoded;         next();
            }
            });

        } else {

            return res.status(403).send({
                success: false,
                message: 'Pas de token'
            });

        }

    }