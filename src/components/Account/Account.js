import React from 'react';

import accountIcon from "../../images/account.svg";
import './Account.css';

function Account() {

    return (
        <div className="account">
            <p className="account__text">Аккаунт</p>
            <div className="account__img-box">
                <img className="account__img" src={accountIcon} alt="иконка аккаунта"/>
            </div>
        </div>
    );
}

export default Account;