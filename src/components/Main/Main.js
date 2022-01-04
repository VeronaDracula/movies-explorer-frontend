import React from 'react';

import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';

function Main(props) {

    return (
        <main className="content">
            <section className="promo">
                <div className="promo__container page__content">
                    <Promo />
                </div>
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
    );
}

export default Main;