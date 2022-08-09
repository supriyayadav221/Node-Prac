const mongoose = require("mongoose");

const PetSchema = mongoose.Schema(
 {
    name: {type:String},
    type:{type:String},
    breed:{type:String},
    age:{type:Number}
 }
);

module.exports = mongoose.model('PetModel',PetSchema)