import React from 'react';
import {Link} from "react-router-dom";

import headerLogo from '../../images/logo.svg';

import './StartTop.css';

function StartTop(props) {

    return (
        <section className="start-page__top">
            <Link to="/" className="logo__link start-page__logo page__link"><img className="logo" src={headerLogo} alt="логотип"/></Link>
            <h2 className="start-page__title">{props.title}</h2>
        </section>
    );
}

export default StartTop;