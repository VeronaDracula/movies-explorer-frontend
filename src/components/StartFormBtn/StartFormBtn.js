import React from 'react';
import './StartFormBtn.css';

function StartFormBtn(props) {

    return (
        <button type="submit" className={props.typePage ? `form-start__btn ${props.typePage} page__button` : "form-start__btn page__button"}>
            {props.buttonText}</button>
    );
}

export default StartFormBtn;