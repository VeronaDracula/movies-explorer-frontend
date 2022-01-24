import React from 'react';
import {Route, Switch} from "react-router-dom";
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard.js';
import MoreBtn from "../MoreBtn/MoreBtn";

function MoviesCardList(props) {

    const [moreButton, setMoreButton] = React.useState(props.cards);

    const [newCards, setNewCards] = React.useState([]);


    // React.useEffect(() => {
    //
    //     // setNewCards(JSON.parse(localStorage.getItem('cards')))
    //     // console.log(props.isClick)
    //     // console.log('sdfgh')
    //     // console.log(newCards)
    //     setNewCards(props.cards())
    //
    //
    // }, [props.isClick]);

    // function fgh () {
    //     if (props.isClick) {
    //         setNewCards(loadCards(getCardsAmount()))
    //         console.log(newCards)
    //     }
    // }




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
            <Switch>
                <Route exact path="/movies">
                    <ul className="cards">
                        {props.cards.map((card) => (<MoviesCard card={card}
                                                                nameRU={card.nameRU}
                                                                duration={card.duration}
                                                                image={`https://api.nomoreparties.co/${card.image.url}`}
                                                                trailer={card.trailerLink}
                                                                key={card.id}
                                                                onAddCard={props.onAddCard}
                                                                typePageBtn="card__btn_type_add"
                                                                ourCards={props.ourCards}

                                                                country={card.country}
                                                                director={card.director}
                                                                year={card.year}
                                                                description={card.description}
                                                                thumbnail={card.image.formats.thumbnail.url}
                                                                movieId={card.id}
                                                                nameEN={card.nameEN}

                        />))}
                    </ul>

                    <MoreBtn onLoad={loadMoreCards} isActive={moreButton}/>
                </Route>

                <Route path="/saved-movies">
                    <ul className="cards">
                        {props.ourCards.map((ourCard) => (<MoviesCard card={ourCard}
                                                                      nameRU={ourCard.nameRU}
                                                                      duration={ourCard.duration}
                                                                      image={ourCard.image}
                                                                      trailer={ourCard.trailer}
                                                                      key={ourCard._id}
                                                                      onDeleteCard={props.onDeleteCard}
                                                                      typePageBtn="card__btn_type_close"
                            ourCards={props.ourCards}
                        />))}
                    </ul>
                </Route>
            </Switch>
        </div>
    );
}

export default MoviesCardList;