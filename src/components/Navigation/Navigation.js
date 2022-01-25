import React from 'react';
import {NavLink, Link, Route, Switch} from "react-router-dom";
import './Navigation.css';

import PopupMenu from '../PopupMenu/PopupMenu.js';
import Account from '../Account/Account.js';

function Navigation(props) {

    return (
        <div className={props.movies ? "navigation navigation_type_movies" : "navigation"}>
            <Switch>

                <Route path={["/saved-movies", "/movies", "/profile"]}>
                    <button className="open-popup-menu page__button" type="button" onClick={props.onMenu}></button>
                    <div className="navigation__movies">
                        <ul className="navigation__list">
                            <li className="navigation__list-item">
                                <NavLink to="/movies" className="navigation__link navigation__link_type_movies
                                page__link" activeClassName="navigation__link_active">Фильмы</NavLink>
                            </li>
                            <li>
                                <NavLink to="/saved-movies" className="navigation__link navigation__link_type_movies
                                page__link" activeClassName="navigation__link_active">Сохранённые фильмы</NavLink>
                            </li>
                        </ul>
                        <Account/>
                    </div>

                    <PopupMenu isOpen={props.isOpen} onClose={props.onClose} typePage="popup__container_type_menu"/>
                </Route>

                <Route path="/" >
                    <div className="navigation__main">
                        <Link to="/signup" className="navigation__link navigation__link_type_main page__link">Регистрация</Link>
                        <Link to="/signin" className="navigation__link-color page__link">Войти</Link>
                    </div>
                </Route>
            </Switch>
        </div>
    );
}

export default Navigation;