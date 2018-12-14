var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({

    name: { type:String,
        required: true
    },
    password: { type:String,
        required:true,
    },
    mail: { type:String,
        required:true,
        unique:true

    },
    admin : { type:Boolean,
        default: true
    }




});
var Content = mongoose.model('User', UserSchema);

module.exports = Content;
