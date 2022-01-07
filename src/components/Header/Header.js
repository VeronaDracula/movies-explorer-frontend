import React from 'react';
import headerLogo from '../../images/logo.svg';
import {Link, Route, Switch} from "react-router-dom";

import Navigation from '../Navigation/Navigation.js';

function Header() {
    return (
        <header className="header">
            <Switch>
                <Route exact path="/" >
                    <div className="header__container">
                        <div className="header__content page__content">
                            <div>
                                <Link to="/" className="logo__link page__link"><img className="logo" src={headerLogo} alt="логотип"/></Link>
                            </div>
                            <Navigation/>
                        </div>
                    </div>
                </Route>

                <Route path="/signup">

                </Route>

                <Route path="/signin">

                </Route>

                <Route path="/movies">
                    <div className="header__container header__container_type_not-main">
                        <div className="header__content header__content_type_movies page__content">
                            <div>
                                <Link to="/" className="logo__link logo_type_movies page__link">
                                    <img className="logo" src={headerLogo} alt="логотип"/>
                                </Link>
                            </div>
                            <Navigation movies="фильмы"/>
                        </div>
                    </div>
                </Route>

                <Route path="/saved-movies">

                </Route>

                <Route path="/profile">

                </Route>
            </Switch>
        </header>
    );
}

export default Header;