var mongoose = require('mongoose');
var MembreSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required:true
    },
    annee: { type:Number,
        required: true
    },
    nom: { type:String,
        required:true,
        uppercased:true
    },
    prenom: { type:String,
        required:true,
        uppercased:true
    },
    categorie : { type:String,
        ennum:["junior","senior"]
    },
    sexe:{ type:String,
        ennum:["Hommes","Femmes"]
    },
    cnu:String,
    discipline:String,
    corps:String,
    academie: { code_academie: {type:Number ,required:true}, nom: {type:String, required:true } } ,
    region: { code_region:{type:Number} , nom:String} ,
    etablissement:String



});
var Content = mongoose.model('Membre', MembreSchema);

module.exports = Content;
