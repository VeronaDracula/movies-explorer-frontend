import React from 'react';
import './MoviesNotFound.css';

function MoviesNotFound(props) {

    return (
        <div className={props.isActiveFound ? "movies-not-found page__content" : "movies-not-found page__content movies-not-found_inactive"}>
           <p className="movies-not-found-text">Ничего не найдено</p>
        </div>
    );
}

export default MoviesNotFound;