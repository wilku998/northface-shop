import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import React from 'react';
import Header from '../components/Header'
import Nav from '../components/Nav'
import Discounts from "../components/Discounts";
import News from "../components/News";
import Footer from "../components/Footer";

const AppRouter = () => (
    <Router>
        <div>
            <Route path='/' component={Header} />
            <Route path='/' component={Nav} />
            <Route path='/' component={Discounts} />
            <Route path='/' component={News} />
            <Route path='/' component={Footer} />
        </div>
    </Router>
)

export default AppRouter