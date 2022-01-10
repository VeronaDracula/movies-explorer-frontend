import React from 'react';
import {Link} from "react-router-dom";

import accountIcon from "../../images/account.svg";
import './Account.css';


function Account() {

    return (
        <div className="account">
            <Link to="/profile" className="account__text page__link">Аккаунт</Link>
            <div className="account__img-box">
                <img className="account__img" src={accountIcon} alt="иконка аккаунта"/>
            </div>
        </div>
    );
}

export default Account;