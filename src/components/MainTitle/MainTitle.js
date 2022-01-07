import React from 'react';

function MainTitle(props) {

    return (
        <div className={props.technologies ? "section-title section-title_type_technologies" : "section-title"}>
            <h2 className="section-title__title">{props.buttonText}</h2>
        </div>
    );
}

export default MainTitle;