const mongoose =require("mongoose")

const ReceiptSchema =new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String, required: true, noSearch: true },
    updateAt: { type: Date, default: Date.now },
})

const model = mongoose.model("receipts",ReceiptSchema)
module.exports = model