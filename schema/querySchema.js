const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,

} = require('graphql')


const queryResolvers = require('../resolvers/queryResolvers')

const { SingleOrderResponse, SingleUserResponse, SingleProductResponse, MultiProductResponse, MultiUserResponse, MultiOrderResponse, UserLoginResponse } = require('../types/type/Response')

const rootQuery = new GraphQLObjectType({
    name: 'query',
    fields: () => ({
        getUsers: {
            type: MultiUserResponse,
            resolve: queryResolvers.getUsers
        },
        getProducts: {
            type: MultiProductResponse,
            resolve: queryResolvers.getProducts
        },
        getUserOrders: {
            type: MultiOrderResponse,
            resolve: queryResolvers.getUserOrders
        },
        getUser: {
            type: SingleUserResponse,
            args: {
                userId: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: queryResolvers.getUser
        },
        getConnectedUser: {
            type: SingleUserResponse,
            resolve: queryResolvers.getConnectedUser
        },
        getProduct: {
            type: SingleProductResponse,
            args: {
                productId: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: queryResolvers.getProduct
        },
        getOrder: {
            type: SingleOrderResponse,
            args: {
                orderId: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: queryResolvers.getOrder
        },
        userLogin: {
            type: UserLoginResponse,
            args: {
                username: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: queryResolvers.userLogin
        }
    })
})


module.exports = rootQuery;