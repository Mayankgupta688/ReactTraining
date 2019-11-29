import React from 'react';
import {Route, Link, BrowserRouter, Switch, NavLink} from "react-router-dom"

import HeaderComponent from "../component/HeaderComponent";
import FooterComponent from "../component/FooterComponent";
import HomeComponent from "../component/HomeComponent";
import HelpComponent from '../component/HelpComponent';
import AboutComponent from '../component/AboutComponent';
import ComponentNotFound from '../component/ComponentNotFound';
import UserComponent from '../component/UserComponent';

export default class ApplicationContainer extends React.Component {
    

    render() {
        return (
            <BrowserRouter>
                <HeaderComponent></HeaderComponent>
                <nav>

                    <NavLink activeClassName="selectedLink" style={{"marginRight": "10px"}} to="/home">Home</NavLink>
                    <NavLink activeClassName="selectedLink" style={{"marginRight": "10px"}} to="/about">About</NavLink>
                    <NavLink activeClassName="selectedLink" style={{"marginRight": "10px"}} to="/help">Help</NavLink>
                    <NavLink activeClassName="selectedLink" style={{"marginRight": "10px"}} to="/user/10/Mayank">User 10</NavLink>
                    <NavLink activeClassName="selectedLink" style={{"marginRight": "10px"}} to="/user/20/Anshul">User 20</NavLink>
                </nav>
                <Switch>
                    <Route exact path="/help" component={HelpComponent} />
                    <Route exact path="/about" component={AboutComponent} />
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/user/:id/name/:name" component={UserComponent} />
                    <Route component={ComponentNotFound} />
                </Switch>

                <FooterComponent></FooterComponent>
            </BrowserRouter>
        )
    }
}