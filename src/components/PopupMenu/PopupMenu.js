import React from 'react';
import {Link} from "react-router-dom";

import './PopupMenu.css';
import Account from '../Account/Account.js';

function PopupMenu(props) {

    return (
       <section className={props.isOpen ? "popup popup_type_menu popup_is-opened" : "popup popup_type_menu"}>
           <div className="popup__container">
               <button className="popup__close-btn page__button" type="button" onClick={props.onClose}></button>
               <ul className="popup__menu">
                   <li className="popup__menu-item">
                       <Link to="/" className="popup__menu-item-link page__link">Главная</Link>
                   </li>
                   <li className="popup__menu-item">
                       <Link to="/movies" className="popup__menu-item-link page__link popup__menu-item-link_active">Фильмы</Link>
                   </li>
                   <li className="popup__menu-item">
                       <Link to="/saved-movies" className="popup__menu-item-link page__link">Сохранённые фильмы</Link>
                   </li>
               </ul>

               <Account/>
           </div>
       </section>
    );
}

export default PopupMenu;