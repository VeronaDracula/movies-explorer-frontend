import React from 'react';
import './MoreBtn.css';

function MoreBtn(props) {

    return (
        <button className={props.isActive ? "more-btn page__button" : "more-btn page__button more-btn_inactive"}
                onClick={props.onLoad}>Ещё</button>
    );
}

export default MoreBtn;
