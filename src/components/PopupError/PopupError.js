import React from 'react';
import './PopupError.css';


function PopupError(props) {

    return (
        <section className={props.isOpen ? "popup popup_type_error popup_is-opened" : "popup popup_type_error"}>
            <div className="popup__container popup__container_type_error">
                <button className="popup__close-btn page__button" type="button" onClick={props.onClose}></button>
                <p className="error-text">{props.errorText}</p>
            </div>
        </section>
    );
}

export default PopupError;