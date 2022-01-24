import React from 'react';
import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import {Route, Switch} from "react-router-dom";

function SearchForm(props) {

    function handleChangeKeyword(e) {
        props.onSearchMoviesFilter(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="search__container page__content">
            <form className="form-search" name="form-search" onSubmit={handleSubmit}>
                <input className="form-search__input" type="text"  id="search" name="search" placeholder="Фильм" required
                       onChange={handleChangeKeyword}/>

                <Switch>
                    <Route path="/movies">
                        <button className="form-search__btn-search page__button" type="submit"
                                onClick={function (){props.onSearchMovies()}}>
                            Найти
                        </button>

                    </Route>

                    <Route path="/saved-movies">
                        <button className="form-search__btn-search page__button" type="submit"
                                onClick={function (){props.onSearchCardsList()}}>
                            Найти
                        </button>
                    </Route>
                </Switch>
            </form>

            <FilterCheckbox onGetSearchCardsListDuration={props.onGetSearchCardsListDuration}/>
        </div>
    );
}

export default SearchForm;
