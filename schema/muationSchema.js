const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,

} = require('graphql')


const mutationResolvers = require('../resolvers/mutationResolvers')


//input types

const CreateUserInput = require('../types/input/CreateUserInput')
const UpdateUserInput = require('../types/input/UpdateUserInput')
const CreateProductInput = require('../types/input/CreateProductInput')
const { SingleOrderResponse, SingleUserResponse, SingleProductResponse } = require('../types/type/Response')

const rootMutation = new GraphQLObjectType({
    name: 'mutation',
    fields: () => ({
        createUser: {
            type: SingleUserResponse,
            args: {
                createUserInput: { type: CreateUserInput }
            },
            resolve: mutationResolvers.createUser
        },
        updateUser: {
            type: SingleUserResponse,
            args: {
                updateUserInput: { type: UpdateUserInput }
            },
            resolve: mutationResolvers.updateUser
        },
        updateUserPassword: {
            type: SingleUserResponse,
            args: {
                oldPassword: { type: GraphQLNonNull(GraphQLString) },
                newPassword: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: mutationResolvers.updateUserPassword
        },
        orderProduct: {
            type: SingleOrderResponse,
            args: {
                productId: { type: GraphQLNonNull(GraphQLString) },
                quantity: { type: GraphQLNonNull(GraphQLInt) }
            },
            resolve: mutationResolvers.orderProduct
        },
        updateOrder: {
            type: SingleOrderResponse,
            args: {
                orderId: { type: GraphQLNonNull(GraphQLString) },
                quantity: { type: GraphQLNonNull(GraphQLInt) },
                status: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: mutationResolvers.updateOrder
        },
        createProduct: {
            type: SingleProductResponse,
            args: {
                createProductInput: { type: CreateProductInput }
            },
            resolve: mutationResolvers.createProduct
        }
    })
})


module.exports = rootMutation