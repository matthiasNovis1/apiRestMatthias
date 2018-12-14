var mongoose = require('mongoose');
var  Membre = require('../models/membre');
var bodyParser = require('body-parser');


var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })



exports.getAllMembres = function(req, res ) {
    console.log("get all membres");

    Membre.find({}, function(err, ens) {
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

exports.createMembre = function(req, res) {
    console.log(req.body);
    console.log("new membre:"+newMembre);



    if (req.body.nom && req.body.prenom){
        var newMembre = new Membre(req.body);
        newMembre.save(function(err){
            if(err){
                console.log(err);
                return;
            }

            res.json({ status:true ,  message: "membre ajouté"});
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
    console.log("id"+ req.params.id);

    Membre.remove({
        _id: req.params.id
    }, function(err, task) {
        if (err){
            res.status(500);
            res.json({ message: 'Erreur' });

            res.send(err);}
        else{
            res.json({ message: 'Supression Reussie' });
        }
    });



};