import React from 'react';
import './StartFormBtn.css';

function StartFormBtn(props) {

    return (
        <button className={!props.isValid ? `form-start__btn ${props.typePage} form-start__btn_inactive` :
            `form-start__btn ${props.typePage} page__button`}
                type="submit" disabled={!props.isValid}>
            {props.buttonText}
        </button>
    );
}
export default StartFormBtn;
