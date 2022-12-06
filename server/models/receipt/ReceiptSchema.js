const mongoose =require("mongoose")

const ReceiptSchema =new mongoose.Schema({
    _id: mongoose.Types.ObjectId(),

})

const model = mongoose.model("receipts",ReceiptSchema)
module.exports = model