var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var UserSchema = new Schema({
    email : {
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    firstname: String,
    lastname: String,
    created: Date,
    modified: Date,
    permission:{
    }
});

UserSchema.pre('save', function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = this.encryptPassword(this.password);
    next();
});

UserSchema.methods = {
    authenticate : function  (plainTextPword) {
        console.log("this password is " + this.password);
        return bcrypt.compareSync(plainTextPword, this.password);
    },
    encryptPassword : function (plainTextPword) {
        if(!plainTextPword){
            return '';
        }
        else {
            var salt = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(plainTextPword, salt);
        }
    },
    toJson : function () {
        var obj = this.toObject();
        delete obj.password;
        return obj;
    }
}
module.exports = mongoose.model('users', UserSchema);