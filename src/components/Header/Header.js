import React from 'react';
import headerLogo from '../../images/logo.svg';
import {Link, Route, Switch} from "react-router-dom";

import Navigation from '../Navigation/Navigation.js';

function Header(props) {
    return (
        <header className="header">
            <div className="header__container page__content">
                <div>
                    <img className="logo" src={headerLogo} alt="логотип"/>
                </div>
                <div className="header__navigation">
                    <Switch>
                        <Route path="/signup">

                        </Route>

                        <Route path="/signin">

                        </Route>

                        <Route exact path="/" >
                            <Navigation />


                        </Route>

                        <Route path="/movies">

                        </Route>

                        <Route path="/saved-movies">

                        </Route>

                        <Route path="/profile">

                        </Route>
                    </Switch>
                </div>
            </div>
        </header>
    );
}

export default Header;