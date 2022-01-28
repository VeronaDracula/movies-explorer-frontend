import React from 'react';
import './Main.css';

import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Header from "../Header/Header";
import Footer from '../Footer/Footer.js';

function Main() {

    return (
        <>
            <Header/>
            <main className="content">
                <section className="promo">
                    <Promo />
                </section>

                <section className="project">
                    <AboutProject />
                </section>

                <section className="technologies">
                    <Techs />
                </section>

                <section className="about">
                    <AboutMe />
                </section>
            </main>

            <Footer/>
        </>

    );
}

export default Main;