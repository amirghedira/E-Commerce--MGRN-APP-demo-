
import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// pages
import Footer from 'components/Footers/Footer'
import NavBar from 'components/Navbars/IndexNavbar'
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import SignUp from "pages/Signup/Signup";
import Product from "pages/Product/Product";
import Profile from "pages/Profile/Profile";
import Orders from "pages/Orders/Orders";
import Order from "pages/Order/Order";
import IndexHeader from "components/Headers/IndexHeader";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import AppContext from "Context/AppContext";
// others

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
})

const App = () => {
    return (

        <ApolloProvider client={client}>
            <AppContext>
                <BrowserRouter>
                    <NavBar />
                    <IndexHeader />
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/product/:id" component={Product} />
                        <Route path="/profile/:id" component={Profile} />
                        <Route path="/orders" component={Orders} />
                        <Route path="/order/:id" component={Order} />
                        <Redirect to="/home" />
                    </Switch>
                </BrowserRouter>
                <Footer />
            </AppContext>
        </ApolloProvider>
    )
}

export default App;