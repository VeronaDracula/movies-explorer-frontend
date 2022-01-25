import React from 'react';
import './Register.css';

import StartTop from '../StartTop/StartTop.js';
import StartForm from '../StartForm/StartForm.js';
import StartFormBtn from '../StartFormBtn/StartFormBtn.js';
import StartChoice from '../StartChoice/StartChoice.js';

function Register(props) {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [errorName, setErrorName] = React.useState('');
    const [errorEMail, setErrorEMail] = React.useState('');
    const [errorPassword, setErrorPassword] = React.useState('');
    const [isValid, setIsValid] = React.useState(false);

    function handleChangeName(e) {
        setName(e.target.value);
        setErrorName(e.target.validationMessage);
        setIsValid(e.target.closest(".form-start").checkValidity());
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
        setErrorEMail(e.target.validationMessage);
        setIsValid(e.target.closest(".form-start").checkValidity());
    }

    function handleChangeLinkPassword(e) {
        setPassword(e.target.value);
        setErrorPassword(e.target.validationMessage);
        setIsValid(e.target.closest(".form-start").checkValidity());
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onRegister({name, email, password});

        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <main className="content content_type_start-page">
            <section className="start-page page__content page__content_type_start-page">
               <StartTop title="Добро пожаловать!"/>

                <form className="form-start" name="form-start" onSubmit={handleSubmit} noValidate>
                    <StartForm type="text" name="name" placeholder="Имя" minLength="2" maxLength="30" value={name || ''} onChange={handleChangeName}
                               error={errorName} isValid={isValid} pattern="^[a-zA-ZА-Яа-яЁё\s\-]+$"
                    />
                    <StartForm type="email" name="email" placeholder="E-mail" value={email || ''} onChange={handleChangeEmail}
                               error={errorEMail} isValid={isValid} pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
                    />
                    <StartForm type="password" name="password" placeholder="Пароль" minLength="5"
                               value={password || ''}
                               onChange={handleChangeLinkPassword}
                               error={errorPassword} isValid={isValid}
                    />

                    <StartFormBtn buttonText="Зарегистрироваться" isValid={isValid}/>
                </form>

                <StartChoice text="Уже зарегистрированы?" linkText="Войти" url="/signin"/>
            </section>
        </main>
    );
}

export default Register;