import React from 'react';
import {Link} from "react-router-dom";
import './Account.css';

import accountIcon from "../../images/account.svg";

function Account(props) {

    return (
        <div className="account">
            <Link to="/profile" className="account__text page__link" onClick={props.onClose}>Аккаунт</Link>
            <div className="account__img-box">
                <img className="account__img" src={accountIcon} alt="иконка аккаунта"/>
            </div>
        </div>
    );
}

export default Account;