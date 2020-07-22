const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLInt

} = require('graphql')
const UserType = require('./UserType')
const ProductType = require('./ProductType')

module.exports = new GraphQLObjectType({
    name: 'orderType',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLString)
        },
        user: {
            type: GraphQLNonNull(UserType)
        },
        product: {
            type: GraphQLNonNull(ProductType)
        },
        totalPrice: {
            type: GraphQLNonNull(GraphQLFloat)
        },
        quantity: {
            type: GraphQLNonNull(GraphQLInt)
        },
        date: {
            type: GraphQLNonNull(GraphQLString)
        },
        status: {
            type: GraphQLNonNull(GraphQLString)
        }
    })
})