import React from 'react';
import './Login.css';

import StartTop from '../StartTop/StartTop.js';
import StartForm from '../StartForm/StartForm.js';
import StartFormBtn from '../StartFormBtn/StartFormBtn.js';
import StartChoice from '../StartChoice/StartChoice.js';

function Login(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [errorEMail, setErrorEMail] = React.useState('');
    const [errorPassword, setErrorPassword] = React.useState('');
    const [isValid, setIsValid] = React.useState(false);

    function handleChangeLinkPassword(e) {
        setPassword(e.target.value);
        setErrorPassword(e.target.validationMessage);
        setIsValid(e.target.closest(".form-start").checkValidity());
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
        setErrorEMail(e.target.validationMessage);
        setIsValid(e.target.closest(".form-start").checkValidity());
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onLogin({email, password});

        setEmail('');
        setPassword('');
    }

    return (
        <main className="content content_type_start-page">
            <section className="start-page page__content page__content_type_start-page">
                <StartTop title="Рады видеть!"/>

                <form className="form-start" name="form-start" onSubmit={handleSubmit}>
                    <StartForm type="email" name="email" placeholder="E-mail" value={email || ''} onChange={handleChangeEmail}
                               error={errorEMail} isValid={isValid} pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})\.([A-z]{2,8})"
                    />

                    <StartForm type="password" name="password" placeholder="Пароль" value={password || ''}
                               onChange={handleChangeLinkPassword} error={errorPassword} isValid={isValid}/>

                    <StartFormBtn buttonText="Войти" typePage="form-start__btn_type_login" isValid={isValid}/>
                </form>

                <StartChoice text="Ещё не зарегистрированы?" linkText="Регистрация" url="/signup"/>
            </section>
        </main>
    );
}

export default Login;