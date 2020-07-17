const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,

} = require('graphql')


const queryResolvers = require('../resolvers/queryResolvers')
const UserType = require('../types/type/UserType')
const ProductType = require('../types/type/ProductType')
const OrderType = require('../types/type/OrderType')



const rootQuery = new GraphQLObjectType({
    name: 'query',
    fields: () => ({
        getUsers: {
            type: GraphQLList(UserType),
            resolve: queryResolvers.getUsers
        },
        getProducts: {
            type: GraphQLList(ProductType),
            resolve: queryResolvers.getProducts
        },
        getUserOrders: {
            type: GraphQLList(OrderType),
            resolve: queryResolvers.getUserOrders
        },
        getUser: {
            type: UserType,
            args: {
                userId: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: queryResolvers.getUser
        },
        getProduct: {
            type: ProductType,
            args: {
                productId: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: queryResolvers.getProduct
        },
        getOrder: {
            type: OrderType,
            args: {
                orderId: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: queryResolvers.getOrder
        },
        userLogin: {
            type: GraphQLString,
            args: {
                username: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: queryResolvers.userLogin
        }
    })
})


module.exports = rootQuery;