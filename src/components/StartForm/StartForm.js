import React from 'react';
import './StartForm.css';

function StartForm(props) {

    return (
        <div className="form-start__section">
            <label htmlFor={props.name} className="form-start__label">{props.placeholder}</label>
            <input type={props.type} className="form-start__input" id={props.name} name={props.name} placeholder={props.placeholder}
                   required minLength={props.minLength} maxLength={props.maxLength}/>
            <span className="form-start__input-error" id={`${props.name}-error`}>sdfg</span>
        </div>
    );
}

export default StartForm;