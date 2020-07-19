const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLBoolean
} = require('graphql')



module.exports = new GraphQLInputObjectType({
    name: 'createProductInput',
    fields: () => ({
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        imageUrl: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLFloat) },
        available: { type: GraphQLNonNull(GraphQLBoolean) }
    })
})