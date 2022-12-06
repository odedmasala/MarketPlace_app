const mongoose =require("mongoose")

const UserSchema =new mongoose.Schema({
    image:String,
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    loginCode:String,
    phone2:String,
    password:String,
    storeId:String,
    address:String,
    paymentBillInfo:String,
    authToken:String
})

const model = mongoose.model("users",UserSchema)
module.exports = model