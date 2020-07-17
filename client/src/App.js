
import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// pages
import Footer from 'components/Footers/Footer'
import IndexHeader from 'components/Headers/IndexHeader'
import NavBar from 'components/Navbars/IndexNavbar'
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import SignUp from "pages/Signup/Signup";
import Product from "pages/Product/Product";
import Profile from "pages/Profile/Profile";

// others

const App = () => {
    return (

        <React.Fragment>
            <NavBar />
            <IndexHeader />
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/product/:id" component={Product} />
                    <Route path="profile/:id" component={Profile} />
                    <Redirect to="/home" />
                </Switch>
            </BrowserRouter>
            <Footer />
        </React.Fragment>
    )
}

export default App;