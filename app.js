const express = require('express')
const app = express()
const path = require('path')
const expressGraphql = require('express-graphql');
const querySchema = require('./schema/querySchema')
const mutationSchema = require('./schema/muationSchema')
const { GraphQLSchema } = require('graphql');
const checkAuth = require('./middlewares/checkAuth');
const cors = require('cors')
const mongoose = require('mongoose')


mongoose.connect(process.ENV.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).catch(err => {
    console.log(err)
})

app.use(cors())
app.use(checkAuth)
app.use('/graphql', expressGraphql.graphqlHTTP({
    graphiql: true,
    schema: new GraphQLSchema({
        query: querySchema,
        mutation: mutationSchema
    })
}))



module.exports = app;