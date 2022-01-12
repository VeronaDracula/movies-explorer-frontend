import React from 'react';
import './Register.css';

import StartTop from '../StartTop/StartTop.js';
import StartForm from '../StartForm/StartForm.js';
import StartFormBtn from '../StartFormBtn/StartFormBtn.js';
import StartChoice from '../StartChoice/StartChoice.js';

function Register() {

    return (
        <main className="content content_type_start-page">
            <section className="start-page page__content page__content_type_start-page">
               <StartTop title="Добро пожаловать!"/>

                <form className="form-start" name="form-start">
                    <StartForm type="text" name="name" placeholder="Имя" minLength="2" maxLength="30"/>
                    <StartForm type="email" name="email" placeholder="E-mail"/>
                    <StartForm type="password" name="password" placeholder="Пароль"/>

                    <StartFormBtn buttonText="Зарегистрироваться"/>
                </form>

                <StartChoice text="Уже зарегистрированы?" linkText="Войти" url="/signin"/>
            </section>
        </main>
    );
}

export default Register;