import React from 'react';
import './Promo.css';

import promoMainImg from '../../images/promo-img.svg';

import NavTab from '../NavTab/NavTab';

function Promo() {

    return (
        <div className="promo__container page__content page__content_type_promo">
            <div className="promo__content">
                <div className="promo__info">
                    <div className="promo__text">
                        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    </div>
                    <img className="promo__img" src={promoMainImg} alt="Земной шар в web паутине"/>
                </div>
                <div className="promo__action">
                    <NavTab />
                </div>
            </div>
        </div>
    );
}

export default Promo;