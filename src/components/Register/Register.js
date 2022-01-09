import React from 'react';

import StartTop from '../StartTop/StartTop.js';
import StartForm from '../StartForm/StartForm.js';
import StartFormBtn from '../StartFormBtn/StartFormBtn.js';
import StartChoice from '../StartChoice/StartChoice.js';

import './Register.css';

function Register() {

    return (
        <main className="content content_type_start-page">
            <section className="start-page page__content page__content_type_start-page">
               <StartTop title="Добро пожаловать!"/>

                <form className="form-start" name="form-start" noValidate>
                    <StartForm type="text" name="name" placeholder="Имя" minLength="2" maxLength="30"/>
                    <StartForm type="email" name="email" placeholder="E-mail"/>
                    <StartForm type="password" name="password" placeholder="Пароль"/>

                    <StartFormBtn buttonText="Зарегистрироваться"/>
                </form>

                <StartChoice text="Уже зарегистрированы?" linkText="Войти"/>
            </section>
        </main>
    );
}

export default Register;