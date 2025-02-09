const {Schema, default:mongoose}= require("mongoose");

const UserSchema = Schema({
    email:{type:String, unique:true},
    password:String,
    firstName:String,
    lastName:String,
});

const adminSchema = Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String,
});

const courseSchema = Schema({

});

const purchaseSchema = Schema({

});

const userModel = mongoose.Model("user", UserSchema);
const adminModel = mongoose.Model("admin", UserSchema);
const courseModel = mongoose.model("course",UserSchema);
const purchaseModel = mongoose.Model("purchase",UserSchema);