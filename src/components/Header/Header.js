import React from 'react';
import {Link, Route, Switch} from "react-router-dom";

import headerLogo from '../../images/logo.svg';

import Navigation from '../Navigation/Navigation.js';

function Header(props) {
    return (
        <header className="header">
            <Switch>

                <Route path={["/saved-movies", "/movies", "/profile"]}>
                    <div className="header__container header__container_type_not-main">
                        <div className="header__content header__content_type_movies page__content page__content_type_header">
                            <div>
                                <Link to="/" className="logo__link logo_type_movies page__link">
                                    <img className="logo" src={headerLogo} alt="логотип"/>
                                </Link>
                            </div>
                            <Navigation movies="фильмы"
                                        onMenu={props.onMenu}
                                        isOpen={props.isOpen}
                                        onClose={props.onClose}/>
                        </div>
                    </div>
                </Route>

                <Route path="/" >
                    <div className="header__container">
                        <div className="header__content page__content">
                            <div>
                                <Link to="/" className="logo__link page__link"><img className="logo" src={headerLogo} alt="логотип"/></Link>
                            </div>
                            <Navigation/>
                        </div>
                    </div>
                </Route>
            </Switch>
        </header>
    );
}

export default Header;