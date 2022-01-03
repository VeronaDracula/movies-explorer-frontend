import React from 'react';
import {Link, Route, Switch} from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <Switch>
                <Route path="/signup">

                </Route>

                <Route path="/signin">

                </Route>

                <Route path="/" >
                    <div className="navigation__main">
                        <Link to="/signup" className="navigation__link navigation__link_type_main">Регистрация</Link>
                        <button className="navigation__button page__button">Войти</button>
                    </div>
                </Route>
            </Switch>
        </div>
    );
}

export default Navigation;