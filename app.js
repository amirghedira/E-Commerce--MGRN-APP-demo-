const express = require('express')
const app = express()
const expressGraphql = require('express-graphql');
const querySchema = require('./schema/querySchema')
const mutationSchema = require('./schema/muationSchema')
const { GraphQLSchema } = require('graphql');
const checkAuth = require('./middlewares/checkAuth');
const cors = require('cors')
const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://amirghedirq:RVaeoXZ1Lrk1U9s2@cluster0-bjmuu.mongodb.net/Commerce_demo?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).catch(err => {
    console.log(err)
})

app.use(cors())
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.use(checkAuth)
app.use('/graphql', expressGraphql.graphqlHTTP({
    graphiql: true,
    schema: new GraphQLSchema({
        query: querySchema,
        mutation: mutationSchema
    })
}))



module.exports = app;