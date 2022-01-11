import React from 'react';
import './MainTitle.css';

function MainTitle(props) {

    return (
        <div className={props.typePage ? `section-title ${props.typePage}` : "section-title"}>
            <h2 className="section-title__title">{props.buttonText}</h2>
        </div>
    );
}

export default MainTitle;