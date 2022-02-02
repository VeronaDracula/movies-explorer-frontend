import React from 'react';
import {HashLink} from "react-router-hash-link";
import './NavTab.css';

function NavTab() {

    return (
        <HashLink className="nav-tab__button page__button" smooth  to = "/#AboutProject" >Узнать больше</HashLink>
    );
}

export default NavTab;