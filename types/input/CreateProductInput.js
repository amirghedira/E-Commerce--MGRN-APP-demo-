const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLBoolean
} = require('graphql')



module.exports = new GraphQLInputObjectType({
    name: 'create product input',
    fields: () => ({
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLFloat) },
        available: { type: GraphQLNonNull(GraphQLBoolean) }
    })
})