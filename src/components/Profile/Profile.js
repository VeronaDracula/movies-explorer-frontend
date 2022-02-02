import React from 'react';
import {Link} from "react-router-dom";
import './Profile.css';

import {CurrentUserContext} from "../../context/CurrentUserContext";

import PopupEditProfile from '../PopupEditProfile/PopupEditProfile.js';
import Header from "../Header/Header";


function Profile(props) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <>
            <Header onMenu={props.onMenu} isOpen={props.isOpenMenu} onClose={props.onClose}/>

            <main className="content">
                <section className="profile page__content">
                    <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                    <div className="profile__data">
                        <div className="profile__data-item">
                            <p className="profile__data-text profile__data-text_type_title">Имя</p>
                            <p className="profile__data-text">{currentUser.name}</p>
                        </div>
                        <div className="profile__data-item">
                            <p className="profile__data-text profile__data-text_type_title">E-mail</p>
                            <p className="profile__data-text">{currentUser.email}</p>
                        </div>
                    </div>
                    <div className="profile__actions">
                        <button className="profile__btn page__button" onClick={props.onEditProfile}>Редактировать</button>
                        <Link to="/" onClick={props.onSignOut} className="profile__link page__link">Выйти из аккаунта</Link>
                    </div>
                </section>

                <PopupEditProfile isOpen={props.isOpen} onClose={props.onClose} onUpdateUser={props.onUpdateUser} infoTooltipText={props.infoTooltipText}/>
            </main>
        </>
    );
}

export default Profile;