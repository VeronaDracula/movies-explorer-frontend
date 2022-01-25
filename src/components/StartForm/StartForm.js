import React from 'react';
import './StartForm.css';

function StartForm(props) {

    return (
        <div className="form-start__section">
            <label htmlFor={props.name} className="form-start__label">{props.placeholder}</label>
            <input type={props.type} className="form-start__input" id={props.name}
                   name={props.name}
                   placeholder={props.placeholder}
                   minLength={props.minLength} maxLength={props.maxLength}
                   value={props.value}
                   onChange={props.onChange}
                   pattern={props.pattern}
            />
            <span className={!props.isValid ? "form-start__input-error form-start__input-error_active" : "form-start__input-error"}
                  id={`${props.name}-error`}>{props.error}</span>
        </div>
    );
}

export default StartForm;

//{props.isValid ? "form-start__input-error form-start__input-error_active" : "form-start__input-error"}