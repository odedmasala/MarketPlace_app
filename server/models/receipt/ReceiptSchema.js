const mongoose =require("mongoose")

const ReceiptSchema =new mongoose.Schema({

})

const model = mongoose.model("receipts",ReceiptSchema)
module.exports = model