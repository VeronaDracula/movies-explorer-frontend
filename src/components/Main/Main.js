import React from 'react';

import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';

function Main() {

    return (
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
    );
}

export default Main;