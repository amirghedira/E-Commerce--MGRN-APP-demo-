const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,

} = require('graphql')


const mutationResolvers = require('../resolvers/mutationResolvers')

//types
const UserType = require('../types/type/UserType')
const ProductType = require('../types/type/ProductType')
const OrderType = require('../types/type/OrderType')

//input types

const CreateUserInput = require('../types/input/CreateUserInput')
const UpdateUserInput = require('../types/input/UpdateUserInput')
const CreateProductInput = require('../types/input/CreateProductInput')


const rootMutation = new GraphQLObjectType({
    name: 'mutation',
    fields: () => ({
        createUser: {
            type: UserType,
            args: {
                createUserInput: CreateUserInput
            },
            resolve: mutationResolvers.createUser
        },
        updateUser: {
            type: GraphQLString,
            args: {
                updateUserInput: UpdateUserInput
            },
            resolve: mutationResolvers.updateUser
        },
        updateUserPassword: {
            type: GraphQLString,
            resolve: mutationResolvers.updateUserPassword
        },
        orderProduct: {
            type: OrderType,
            args: {
                productId: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: mutationResolvers.orderProduct
        },
        createProduct: {
            type: ProductType,
            args: {
                createProductInput: CreateProductInput
            },
            resolve: mutationResolvers.createProduct
        }
    })
})


module.exports = rootMutation