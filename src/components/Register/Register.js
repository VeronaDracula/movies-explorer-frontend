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

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangeLinkPassword(e) {
        setPassword(e.target.value);
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

                <form className="form-start" name="form-start" onSubmit={handleSubmit} >
                    <StartForm type="text" name="name" placeholder="Имя" minLength="2" maxLength="30" value={name || ''} onChange={handleChangeName}/>
                    <StartForm type="email" name="email" placeholder="E-mail" value={email || ''} onChange={handleChangeEmail}/>
                    <StartForm type="password" name="password" placeholder="Пароль" value={password || ''} onChange={handleChangeLinkPassword}/>

                    <StartFormBtn buttonText="Зарегистрироваться"/>
                </form>

                <StartChoice text="Уже зарегистрированы?" linkText="Войти" url="/signin"/>
            </section>
        </main>
    );
}

export default Register;