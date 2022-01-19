import React from 'react';
import {Route, Switch} from "react-router-dom";
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard.js';
import MoreBtn from "../MoreBtn/MoreBtn";

function MoviesCardList(props) {

    const [moreButton, setMoreButton] = React.useState(props.cards);




    // const [newCards, setNewCards] = React.useState([]);


    React.useEffect(() => {

        // setNewCards(JSON.parse(localStorage.getItem('cards')))
        // console.log(props.isClick)
        // console.log('sdfgh')
        // console.log(newCards)

    }, [props.isClick]);


    function getCardsAmount() {
        const windowWidth = document.documentElement.clientWidth
        if ( windowWidth >=1280) {
            return 12
        }
        else if ( windowWidth >= 480 && windowWidth <= 768) {
            return 8
        }
        else if ( windowWidth <= 480) {
            return 5
        }
    }


    function loadCards(amount) {
        if (props.cards !== undefined) {

            const to = Math.min(Math.max(0, amount), props.cards.length);
            return props.cards.slice(0, to)

        }

        return [];
    }







    function loadMoreCards() {
        // // let newCards = cards.slice(0, 2)
        // //
        // let newCards = props.cards.slice(0, 3)
        //
        // props.onAddCards(newCards)

        // setNewCards(loadCards(getCardsAmount()))

        // console.log(loadCards(getCardsAmount()))

        // console.log(newCards)


    }

    return (
        <div className="page__content">
            <ul className="cards">
                <Switch>
                    <Route path="/movies">
                        {props.cards.map((card) => (<MoviesCard card={card}
                                                                nameRU={card.nameRU}
                                                                duration={card.duration}
                                                                image={card.image.url}
                                                                trailer={card.trailerLink}
                                                                key={card.id}
                                                                typePageBtn="card__btn_type_add"
                        />))}
                    </Route>

                    <Route path="/saved-movies">
                        {/*{props.cards.map((card) => (<MoviesCard card={card}*/}
                        {/*                                        nameRU={card.nameRU}*/}
                        {/*                                        duration={card.duration}*/}
                        {/*                                        image={card.image.url}*/}
                        {/*                                        trailer={card.trailerLink}*/}
                        {/*                                        key={card._id}*/}
                        {/*                                        typePageBtn="card__btn_type_close"*/}
                        {/*/>))}*/}
                    </Route>
                </Switch>
            </ul>
            <MoreBtn onLoad={loadMoreCards} isActive={moreButton}/>
        </div>
    );
}

export default MoviesCardList;