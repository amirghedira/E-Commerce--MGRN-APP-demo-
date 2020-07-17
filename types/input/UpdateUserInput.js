const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
} = require('graphql')



module.exports = new GraphQLInputObjectType({
    name: 'create product input',
    fields: () => ({
        username: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) }
    })
})