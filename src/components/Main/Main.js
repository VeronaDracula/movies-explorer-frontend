import React from 'react';

import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';

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

            </section>


        </main>
    );
}

export default Main;