import React from 'react';

import './StartFormBtn.css';

function StartFormBtn(props) {

    return (
        <button type="submit" className="form-start__btn page__button">{props.buttonText}</button>
    );
}

export default StartFormBtn;