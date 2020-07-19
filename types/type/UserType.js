const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,

} = require('graphql')


module.exports = new GraphQLObjectType({
    name: 'userType',
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLString)
        },
        username: {
            type: GraphQLNonNull(GraphQLString)
        },
        password: {
            type: GraphQLNonNull(GraphQLString)
        },
        email: {
            type: GraphQLNonNull(GraphQLString)
        },
        address: {
            type: GraphQLNonNull(GraphQLString)
        },
        phone: {
            type: GraphQLNonNull(GraphQLString)
        }
    })
})