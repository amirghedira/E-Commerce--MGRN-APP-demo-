const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLBoolean

} = require('graphql')



module.exports = new GraphQLInputObjectType({
    name: 'product type',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLString)
        },
        title: {
            type: GraphQLNonNull(GraphQLString)
        },
        description: {
            type: GraphQLNonNull(GraphQLString)
        },
        price: {
            type: GraphQLNonNull(GraphQLFloat)
        },
        available: {
            type: GraphQLNonNull(GraphQLBoolean)
        }
    })
})