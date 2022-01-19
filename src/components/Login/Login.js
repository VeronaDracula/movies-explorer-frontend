import React from 'react';
import './Login.css';

import StartTop from '../StartTop/StartTop.js';
import StartForm from '../StartForm/StartForm.js';
import StartFormBtn from '../StartFormBtn/StartFormBtn.js';
import StartChoice from '../StartChoice/StartChoice.js';

function Login(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangeLinkPassword(e) {
        setPassword(e.target.value);
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
                    <StartForm type="email" name="email" placeholder="E-mail" value={email || ''} onChange={handleChangeEmail}/>
                    <StartForm type="password" name="password" placeholder="Пароль" value={password || ''} onChange={handleChangeLinkPassword}/>

                    <StartFormBtn buttonText="Войти" typePage="form-start__btn_type_login"/>
                </form>

                <StartChoice text="Ещё не зарегистрированы?" linkText="Регистрация" url="/signup"/>
            </section>
        </main>
    );
}

export default Login;