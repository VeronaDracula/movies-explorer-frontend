import React from 'react';
import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import {Route, Switch} from "react-router-dom";

function SearchForm(props) {

    function handleChangeKeyword(e) {
        props.onSearchMoviesFilter(e.target.value);
        localStorage.setItem('inputSearchValue', e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="search__container page__content">
            <form className="form-search" name="form-search" onSubmit={handleSubmit}>

                <Switch>
                    <Route path="/movies">
                        <input className="form-search__input" type="text"  id="search" name="search" placeholder="Фильм"
                               value={localStorage.getItem('inputSearchValue')}
                               onChange={handleChangeKeyword}/>

                        <span className={!props.errorText ? "form-search__input-error" : "form-search__input-error form-search__input-error_active"}
                              id="search-error">Нужно ввести ключевое слово</span>
                        <button className="form-search__btn-search page__button" type="submit"
                                onClick={props.onSearchMovies}>
                            Найти
                        </button>

                    </Route>

                    <Route path="/saved-movies">
                        <input className="form-search__input" type="text"  id="search" name="search" placeholder="Фильм"
                               onChange={handleChangeKeyword}/>

                        <span className={!props.errorText ? "form-search__input-error" : "form-search__input-error form-search__input-error_active"}
                              id="search-error">Нужно ввести ключевое слово</span>
                        <button className="form-search__btn-search page__button" type="submit" onClick={props.onSearchCardsList}>
                            Найти
                        </button>
                    </Route>
                </Switch>
            </form>

            <FilterCheckbox onGetSearchCardsListDuration={props.onGetSearchCardsListDuration} isActiveCheckbox={props.isActiveCheckbox}/>
        </div>
    );
}

export default SearchForm;

//{!props.errorText ? "form-search__input-error" : "form-search__input-error form-search__input-error_active"}