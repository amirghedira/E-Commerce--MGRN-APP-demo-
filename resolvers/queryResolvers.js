const User = require('../models/User')
const Product = require('../models/Product')
const Order = require('../models/Order')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getUsers = async () => {

    try {
        const users = await User.find().exec();
        console.log(users)
        return { status: 200, users: users }

    } catch (error) {
        return { status: 500, users: null }
    }
}

exports.getUserOrders = async (parent, args, req) => {

    if (req.isAuth) {

        const orders = await Order.find({ user: req.user._id }).populate('user').populate('product').exec()
        return { status: 200, orders: orders }
    }
    return { status: 401, orders: null }

}

exports.getProducts = async () => {


    try {

        const products = await Product.find().find()
        return { status: 200, products: products }
    } catch (error) {
        return { status: 500, products: null }

    }

}


exports.getUser = async (parent, args) => {

    try {
        const user = await User.findOne({ _id: args.userId }).exec()
        if (user)
            return { status: 200, user: user }
        return { status: 404, user: null }
    } catch (error) {

        return { status: 500, user: null }
    }


}

exports.getConnectedUser = async (parent, args, req) => {

    if (req.isAuth) {

        try {
            const connectedUser = await User.findOne({ _id: req.user._id }).exec()
            return { status: 200, user: connectedUser }

        } catch (error) {
            return { status: 500, user: null }

        }
    }
    return { status: 401, user: null }
}


exports.getProduct = async (parent, args, req) => {

    try {

        const product = await Product.findById(args.productId).exec()
        return { status: 200, product: product }

    } catch (error) {
        return { status: 500, product: null }
    }
}

exports.getOrder = async (parent, args, req) => {

    if (req.isAuth) {

        try {
            const order = await Order.findById(args.orderId).exec()
            return { status: 200, order: order }
        } catch (error) {

            return { status: 500, order: null }

        }
    }
    return { status: 401, order: null }
}

exports.userLogin = async (parent, args) => {

    try {
        const user = await User.findOne({ username: args.username }).exec()
        if (user) {
            let result = await bcrypt.compare(args.password, user.password)
            if (result) {
                const token = jwt.sign({ _id: user._id, username: user.username }, process.env.JWT_SECRET_KEY)
                return { status: 200, user: user, token: token }
            }
            return { status: 401, user: null, token: null }
        }
        return { status: 401, user: null, token: null }

    } catch (error) {
        return { status: 500, user: null, token: null }

    }

}