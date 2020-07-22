const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({

    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    product: { type: mongoose.Types.ObjectId, ref: 'Product' },
    totalPrice: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
    date: { type: String, required: true, default: new Date().toISOString() },
    status: { type: String, required: true, default: 'pended', enum: ['pended', 'passed', 'canceled'] }

})

module.exports = mongoose.model('Order', orderSchema)