import React from 'react';
import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import './PopupEditProfile.css';

import StartForm from '../StartForm/StartForm.js';
import StartFormBtn from "../StartFormBtn/StartFormBtn";

function PopupEditProfile(props) {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);
    const [errorName, setErrorName] = React.useState('');
    const [errorEMail, setErrorEMail] = React.useState('');
    const [isValid, setIsValid] = React.useState(false);

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser, props.isOpen]);

    function handleChangeEmail(e) {
        if (e.target.value === currentUser.email) {
            setEmail(e.target.value);
            setErrorEMail('Email соответствует текущему');
            setIsValid(false)
        }
        else {
            setEmail(e.target.value);
            setErrorEMail(e.target.validationMessage);
            setIsValid(e.target.closest(".form-profile").checkValidity());
        }
    }

    function handleChangeName(e) {
        if (e.target.value === currentUser.name) {
            setName(e.target.value);
            setErrorName('Имя соответствует текущему');
            setIsValid(false)
        }
        else {
            setName(e.target.value);
            setErrorName(e.target.validationMessage);
            setIsValid(e.target.closest(".form-profile").checkValidity());
        }
    }

    function removeErrors() {
        setErrorEMail('');
        setErrorName('');
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
            name,
            email: email,
        });
    }

    return (
        <section className={props.isOpen ? "popup popup_type_edit-profile popup_is-opened" : "popup popup_type_edit-profile"}>
            <div className="popup__container popup__container_type_edit-profile">
                <button className="popup__close-btn page__button" type="button" onClick={function(){props.onClose(); removeErrors()}}></button>
                <form className="form-profile" name="form-profile" onSubmit={handleSubmit}>
                    <StartForm type="text" name="name" placeholder="Имя" minLength="2" maxLength="30"
                               value={name || ''} onChange={handleChangeName}
                               error={errorName} isValid={isValid} pattern="^[a-zA-ZА-Яа-яЁё\s\-]+$"
                    />
                    <StartForm type="email" name="email" placeholder="E-mail" value={email || ''} onChange={handleChangeEmail}
                               error={errorEMail} isValid={isValid} pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})\.([A-z]{2,8})"
                    />

                    <p className="form-profile__info">{props.infoTooltipText}</p>

                    <StartFormBtn buttonText="Сохранить" typePage="form-start__btn_type_profile" isValid={isValid}/>
                </form>
            </div>
        </section>
    );
}

export default PopupEditProfile;