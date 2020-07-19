const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull

} = require('graphql')

const UserType = require('./UserType')
const ProductType = require('./ProductType')
const OrderType = require('./OrderType')

const SingleUserResponse = new GraphQLObjectType({
    name: 'SingleUserResponse',
    fields: () => ({
        status: { type: GraphQLNonNull(GraphQLInt) },
        user: { type: UserType }
    })
})

const SingleProductResponse = new GraphQLObjectType({
    name: 'SingleProductResponse',
    fields: () => ({
        status: { type: GraphQLNonNull(GraphQLInt) },
        product: { type: ProductType }
    })
})

const SingleOrderResponse = new GraphQLObjectType({

    name: 'SingleOrderReponse',
    fields: () => ({
        status: { type: GraphQLNonNull(GraphQLInt) },
        order: { type: OrderType }
    })
})

const MultiUserResponse = new GraphQLObjectType({
    name: 'MultiUserResponse',
    fields: () => ({
        status: { type: GraphQLNonNull(GraphQLInt) },
        users: { type: GraphQLList(UserType) }
    })
})

const MultiProductResponse = new GraphQLObjectType({
    name: 'MultiProductResponse',
    fields: () => ({
        status: { type: GraphQLNonNull(GraphQLInt) },
        products: { type: GraphQLList(ProductType) }
    })
})

const MultiOrderResponse = new GraphQLObjectType({

    name: 'MultiOrderReponse',
    fields: () => ({
        status: { type: GraphQLNonNull(GraphQLInt) },
        orders: { type: GraphQLList(OrderType) }
    })
})

const UserLoginResponse = new GraphQLObjectType({

    name: 'UserLoginResponseType',
    fields: () => ({
        status: { type: GraphQLNonNull(GraphQLInt) },
        token: { type: GraphQLString },
        user: { type: UserType }

    })
})

module.exports = {
    SingleOrderResponse,
    SingleProductResponse,
    SingleUserResponse,
    MultiOrderResponse,
    MultiProductResponse,
    MultiUserResponse,
    UserLoginResponse
}