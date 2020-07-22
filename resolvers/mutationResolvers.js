const User = require('../models/User')
const Product = require('../models/Product')
const Order = require('../models/Order')
const bcrypt = require('bcrypt')

exports.createUser = async (parent, args) => {

    try {
        const user = await User.findOne({ username: args.createUserInput.username });
        if (!user) {
            const hashedpw = await bcrypt.hash(args.createUserInput.password, 11)
            const newUser = new User({
                username: args.createUserInput.username,
                password: hashedpw,
                email: args.createUserInput.email,
                address: args.createUserInput.address,
                phone: args.createUserInput.username
            })
            const creactedUser = await newUser.save()
            return { status: 201, user: creactedUser }
        }
        return { status: 409, user: null }

    } catch (error) {
        console.log(error)
        return { status: 500, user: null }

    }

}

exports.createProduct = async (parent, args) => {

    const newProduct = new Product({
        title: args.createProductInput.title,
        description: args.createProductInput.description,
        imageUrl: args.createProductInput.imageUrl,
        price: args.createProductInput.price,
        available: args.createProductInput.available
    })
    const createdProduct = await newProduct.save()
    return { status: 201, product: createdProduct }


}

exports.updateUser = async (parent, args, req) => {

    try {

        if (req.isAuth) {
            const user = await User.findById(req.user._id).exec()
            if (user.username != args.updateUserInput.username) {
                const otherUser = await User.findOne({ username: args.updateUserInput.username }).exec()
                if (otherUser)
                    return { status: 409, user: null }
            }
            const updatedUser = await User.findByIdAndUpdate(req.user._id, { $set: { ...args.updateUserInput } }).exec()
            return { status: 200, user: updatedUser }

        }
        return { status: 401, user: null }
    } catch (error) {
        console.log(error)
    }


}

exports.orderProduct = async (parent, args, req) => {


    if (req.isAuth) {

        const product = await Product.findById(args.productId).exec()
        if (product) {
            const newOrder = new Order({
                user: req.user._id,
                product: product._id,
                totalPrice: args.quantity * product.price,
                quantity: args.quantity,
                date: new Date().toISOString(),
            })
            const createdOrder = await newOrder.save()
            createdOrder.product = product;
            return { status: 201, order: createdOrder }
        }
        return { status: 404, order: null }
    }
    return { status: 401 }

}

exports.updateOrder = async (parent, args, req) => {

    if (req.isAuth) {
        const order = await Order.findOne({ _id: args.orderId, user: req.user._id }).populate('product').exec()
        if (order) {
            order.quantity = args.quantity;
            order.totalPrice = +args.quantity * +order.product.price
            order.status = args.status;
            const updatedOrder = await order.save()
            return { status: 200, order: updatedOrder }
        }
        return { status: 404 }
    }
    return { status: 401 }
}

exports.updateUserPassword = async (parent, args, req) => {

    if (req.isAuth) {
        const user = await User.findById(req.user._id).exec()
        if (user) {
            const resultAccess = await bcrypt.compare(args.oldPassword, user.password)
            if (resultAccess) {
                user.password = await bcrypt.hash(args.newPassword, 11)
                const updatedUser = await user.save()

                return { status: 200, user: updatedUser }
            }
            return { status: 401, user: null }
        }
        return { status: 404, user: null }
    }
    return { status: 401, user: null }
}