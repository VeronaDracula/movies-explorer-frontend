import React from 'react';
import {Link} from "react-router-dom";

import StartTop from '../StartTop/StartTop.js';
import StartForm from '../StartForm/StartForm.js';
import StartFormBtn from '../StartFormBtn/StartFormBtn.js';

import './Register.css';

function Register() {

    return (
        <main className="content content_type_start-page">
            <section className="start-page">
               <StartTop title="Добро пожаловать!"/>

                <form className="form-start" name="form-start" noValidate>
                    <StartForm type="text" name="name" placeholder="Имя" minLength="2" maxLength="30"/>
                    <StartForm type="email" name="email" placeholder="E-mail"/>
                    <StartForm type="password" name="password" placeholder="Пароль"/>

                    <StartFormBtn buttonText="Зарегистрироваться"/>
                </form>

                <div className="start-page__actives">
                    <p className="start-page__actives-text">Уже зарегистрированы?</p>
                    <Link to="/" className="start-page__actives-link page__link">Войти</Link>
                </div>
            </section>
        </main>
    );
}

export default Register;