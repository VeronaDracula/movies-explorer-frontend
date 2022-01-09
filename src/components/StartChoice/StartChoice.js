import React from 'react';
import {Link} from "react-router-dom";

import './StartChoice.css';

function StartChoice(props) {

    return (
        <div className="start-page__actives">
            <p className="start-page__actives-text">{props.text}</p>
            <Link to={props.url} className="start-page__actives-link page__link">{props.linkText}</Link>
        </div>
    );
}

export default StartChoice;