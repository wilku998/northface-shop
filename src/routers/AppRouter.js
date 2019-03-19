import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import React from 'react';
import Header from '../components/Header'
import Nav from '../components/Nav'
import Discounts from "../components/Discounts";
import News from "../components/News";
import Footer from "../components/Footer";
import Search from "../components/Search";

const AppRouter = () => (
    <Router>
        <div>
            <Route path='/' component={Nav} />
            <Route path='/' component={Header} exact={true}/>
            <Route path='/' component={Discounts} exact={true} />
            <Route path='/' component={News} exact={true} />
            <Route path='/search/:type' component={Search} />
            <Route path='/search' component={Search} exact/>
            <Route path='/' component={Footer} />
        </div>
    </Router>
)

export default AppRouter