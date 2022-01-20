import React from 'react';
import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import './PopupEditProfile.css';

import StartForm from '../StartForm/StartForm.js';
import StartFormBtn from "../StartFormBtn/StartFormBtn";

function PopupEditProfile(props) {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser, props.isOpen]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
            name,
            email: email,
        });
    }

    return (
        <section className={props.isOpen ? "popup popup_type_edit-profile popup_is-opened" : "popup popup_type_edit-profile"}>
            <div className="popup__container popup__container_type_edit-profile">
                <button className="popup__close-btn page__button" type="button" onClick={props.onClose}></button>
                <form className="form-profile" name="form-profile" onSubmit={handleSubmit}>
                    <StartForm type="text" name="name" placeholder="Имя" minLength="2" maxLength="30" value={name || ''} onChange={handleChangeName}/>
                    <StartForm type="email" name="email" placeholder="E-mail" value={email || ''} onChange={handleChangeEmail}/>

                    <StartFormBtn buttonText="Сохранить" typePage="form-start__btn_type_profile"/>
                </form>
            </div>
        </section>
    );
}

export default PopupEditProfile;