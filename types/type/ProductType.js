const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLBoolean

} = require('graphql')



module.exports = new GraphQLObjectType({
    name: 'productType',
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
        },
        imageUrl: {
            type: GraphQLNonNull(GraphQLString)
        }
    })
})