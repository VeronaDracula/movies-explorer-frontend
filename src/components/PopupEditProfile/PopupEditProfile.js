import React from 'react';

import './PopupEditProfile.css';

import StartForm from '../StartForm/StartForm.js';
import StartFormBtn from "../StartFormBtn/StartFormBtn";

function PopupEditProfile(props) {

    return (
        <section className={props.isOpen ? "popup popup_type_edit-profile popup_is-opened" : "popup popup_type_edit-profile"}>
            <div className="popup__container popup__container_type_edit-profile">
                <button className="popup__close-btn page__button" type="button" onClick={props.onClose}></button>
                <form className="form-profile" name="form-profile">
                    <StartForm type="text" name="name" placeholder="Имя" minLength="2" maxLength="30"/>
                    <StartForm type="email" name="email" placeholder="E-mail"/>

                    <StartFormBtn buttonText="Сохранить" typePage="form-start__btn_type_profile"/>
                </form>
            </div>
        </section>
    );
}

export default PopupEditProfile;