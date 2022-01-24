import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {

    return (
        <div className="filter">
            <label className="filter__button">
                <input className="filter__input" type="checkbox" onClick={props.onGetSearchCardsListDuration}/>
                    <span className="filter__slider"></span>
            </label>

            <p className="filter__text">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;