import React from 'react';
import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm(props) {

    return (
        <div className="search__container page__content">
            <form className="form-search" name="form-search">
                <input className="form-search__input" type="text"  id="search" name="search" placeholder="Фильм" required/>
                <button className="form-search__btn-search page__button" type="submit"
                        onClick={props.onSearchMovies}>
                    Найти
                </button>
            </form>

            <FilterCheckbox/>
        </div>
    );
}

export default SearchForm;


// onClick={function (){props.onSearchMovies(); props.onClick()}}