const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({

    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    product: { type: mongoose.Types.ObjectId, ref: 'Product' },
    totalPrice: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
    date: { type: Date, required: true, default: new Date().toISOString() },
    complited: { type: Boolean, required: true, default: false }

})

module.exports = mongoose.model('Order', orderSchema)