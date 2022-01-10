import React from 'react';
import {Link} from "react-router-dom";

import PopupEditProfile from '../PopupEditProfile/PopupEditProfile.js';

import './Profile.css';
import PopupMenu from "../PopupMenu/PopupMenu";

function Profile(props) {

    return (
        <main className="content">
            <section className="profile page__content">
                <h2 className="profile__title">Привет, Виталий!</h2>
                <div className="profile__data">
                    <div className="profile__data-item">
                        <p className="profile__data-text profile__data-text_type_title">Имя</p>
                        <p className="profile__data-text">Виталий</p>
                    </div>
                    <div className="profile__data-item">
                        <p className="profile__data-text profile__data-text_type_title">E-mail</p>
                        <p className="profile__data-text">pochta@yandex.ru</p>
                    </div>
                </div>
                <div className="profile__actions">
                    <button className="profile__btn page__button" onClick={props.onEditProfile}>Редактировать</button>
                    <Link to="/" className="profile__link page__link">Выйти из аккаунта</Link>
                </div>
            </section>

            <PopupEditProfile isOpen={props.isOpen} onClose={props.onClose}/>
        </main>
    );
}

export default Profile;