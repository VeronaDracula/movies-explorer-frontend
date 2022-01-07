import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm() {

    return (
        <div className="search__container page__content">
            <form className="form" name="search-form" noValidate>
                <input className="form__input" type="text"  id="search" name="search" placeholder="Фильм" required/>
                <button className="form__btn-search page__button" type="submit">Найти</button>
            </form>

            <FilterCheckbox/>
        </div>
    );
}

export default SearchForm;