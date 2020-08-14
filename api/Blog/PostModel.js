var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var PostSchema = new Schema({
    title: String,
    author:String,
    description:String,
    created:Date
});

module.exports = mongoose.model('posts', PostSchema);