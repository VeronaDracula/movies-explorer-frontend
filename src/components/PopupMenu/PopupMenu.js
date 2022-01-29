import React from 'react';
import {NavLink} from "react-router-dom";
import './PopupMenu.css';

import Account from '../Account/Account.js';

function PopupMenu(props) {

    return (
       <section className={props.isOpen ? "popup popup_type_menu popup_is-opened" : "popup popup_type_menu"}>
           <div className={`popup__container ${props.typePage}`}>
               <button className="popup__close-btn page__button" type="button" onClick={props.onClose}></button>
               <ul className="popup__menu">
                   <li className="popup__menu-item">
                       <NavLink exact to="/" className="popup__menu-item-link page__link"
                                activeClassName="popup__menu-item-link_active"
                                onClick={props.onClose}>Главная</NavLink>
                   </li>
                   <li className="popup__menu-item">
                       <NavLink to="/movies" className="popup__menu-item-link page__link"
                                activeClassName="popup__menu-item-link_active"
                                onClick={props.onClose}>Фильмы</NavLink>
                   </li>
                   <li className="popup__menu-item">
                       <NavLink to="/saved-movies" className="popup__menu-item-link page__link"
                                activeClassName="popup__menu-item-link_active"
                                onClick={props.onClose}>Сохранённые фильмы</NavLink>
                   </li>
               </ul>

               <Account onClose={props.onClose}/>
           </div>
       </section>
    );
}

export default PopupMenu;