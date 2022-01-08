import React from 'react';
import {Link, Route, Switch} from "react-router-dom";

import PopupMenu from '../PopupMenu/PopupMenu.js';
import Account from '../Account/Account.js';

function Navigation(props) {

    const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);

    function handlePopupMenuClick() {
        setIsPopupMenuOpen(true);
    }

    function closePopup() {
        setIsPopupMenuOpen(false);
    }

    return (
        <div className={props.movies ? "navigation navigation_type_movies" : "navigation"}>
            <Switch>
                <Route path="/signup">

                </Route>

                <Route path="/signin">

                </Route>

                <Route exact path="/" >
                    <div className="navigation__main">
                        <Link to="/signup" className="navigation__link navigation__link_type_main page__link">Регистрация</Link>
                        <button className="navigation__button page__button">Войти</button>
                    </div>
                </Route>

                <Route path={["/saved-movies", "/movies"]}>
                    <button className="open-popup-menu page__button" type="button" onClick={handlePopupMenuClick}></button>
                    <div className="navigation__movies">
                        <ul className="navigation__list">
                            <li className="navigation__list-item">
                                <Link to="/movies" className="navigation__link navigation__link_type_movies navigation__link_active
                                page__link">Фильмы</Link>
                            </li>
                            <li>
                                <Link to="/saved-movies" className="navigation__link navigation__link_type_movies
                                page__link">Сохранённые фильмы</Link>
                            </li>
                        </ul>
                        <Account/>
                    </div>

                    <PopupMenu isOpen={isPopupMenuOpen} onClose={closePopup}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Navigation;