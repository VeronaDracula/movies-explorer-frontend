import React from 'react';

import StartTop from '../StartTop/StartTop.js';
import StartForm from '../StartForm/StartForm.js';
import StartFormBtn from '../StartFormBtn/StartFormBtn.js';
import StartChoice from '../StartChoice/StartChoice.js';

import './Login.css';

function Login() {

    return (
        <main className="content content_type_start-page">
            <section className="start-page page__content page__content_type_start-page">
                <StartTop title="Рады видеть!"/>

                <form className="form-start" name="form-start">
                    <StartForm type="email" name="email" placeholder="E-mail"/>
                    <StartForm type="password" name="password" placeholder="Пароль"/>

                    <StartFormBtn buttonText="Войти" typePage="form-start__btn_type_login"/>
                </form>

                <StartChoice text="Ещё не зарегистрированы?" linkText="Регистрация" url="/signup"/>
            </section>
        </main>
    );
}

export default Login;