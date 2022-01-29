import React from 'react';
import {Route, Switch} from "react-router-dom";
import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard.js';
import MoreBtn from "../MoreBtn/MoreBtn";

function MoviesCardList(props) {

    const [moreButton, setMoreButton] = React.useState(false);
    const [cards, setCards] = React.useState([]);



    React.useEffect(() => {
        // setCards(loadCards(getCardsAmount()));
        setCards(loadCards(getCardsAmount(), JSON.parse(localStorage.getItem('moviesCards'))));

        if (JSON.parse(localStorage.getItem('moviesCards')).length > getNewCardsAmount()) {
            setMoreButton(true)
        }
        else {
            setMoreButton(false)
        }

        setCurrentAmount(getCardsAmount());
        setNewAmount(getCardsAmount() + getNewCardsAmount());

        function handleResize() {
            setCards(loadCards(getCardsAmount(), JSON.parse(localStorage.getItem('moviesCards'))));
            getNewCardsAmount();
            setCurrentAmount(getCardsAmount());
            setNewAmount(getCardsAmount() + getNewCardsAmount());
            if (JSON.parse(localStorage.getItem('moviesCards')).length > getNewCardsAmount()) {
                setMoreButton(true)
            }
            else {
                setMoreButton(false)
            }

        }
        let timeOutFunctionId;
        window.addEventListener('resize', () => {
            clearTimeout(timeOutFunctionId);
            timeOutFunctionId = setTimeout(handleResize, 500);
        })
        return () => {
            window.removeEventListener('resize', handleResize);
        }


    }, [props.onClickSearch, props.onClickDuration]);


    //количество карточек при первом выводе в зависимости от размера экрана
    function getCardsAmount() {
        const windowWidth = document.documentElement.clientWidth
        if ( windowWidth >=1280) {
            return 12
        }
        else if ( windowWidth >= 480 && windowWidth <= 1280) {
            return 8
        }
        else if ( windowWidth <= 480) {
            return 5
        }
    }

    //количество дополнительных карточек при первом выводе в зависимости от размера экрана
    function getNewCardsAmount() {
        const windowWidth = document.documentElement.clientWidth
        if ( windowWidth >=1280) {
            return 3
        }
        else if ( windowWidth >= 480 && windowWidth <= 1280) {
            return 2
        }
        else if ( windowWidth <= 480) {
            return 1
        }
    }

    //обрезка первой группы карточек
    function loadCards(amount, cards) {
        if (cards !== undefined) {
            const to = Math.min(Math.max(0, amount), cards.length);
            return cards.slice(0, to)
        }
        return [];
    }

    //выгрузка дополнительных карточек
    function handleAddCards(newCards) {
        let cardsNew = Object.assign([], cards);
        newCards.forEach((newCard) =>
            cardsNew.push(newCard)
        )
        setCards(cardsNew);
    }


    const [currentAmount, setCurrentAmount] = React.useState(getCardsAmount());
    const [newAmount, setNewAmount] = React.useState(getCardsAmount() + getNewCardsAmount());


    // добавление дополнительных карточек на страницу по кнопке
    function loadMoreCards() {

        let newCards = JSON.parse(localStorage.getItem('moviesCards')).slice(currentAmount, newAmount)
        handleAddCards(newCards);

        // обновлять состояние
        setCurrentAmount(currentAmount + getNewCardsAmount());
        setNewAmount(newAmount + getNewCardsAmount());

        if ((JSON.parse(localStorage.moviesCards).length - cards.length) <= getNewCardsAmount()) {

            setMoreButton(false)

        }
        else {
            setMoreButton(true)
        }
    }

    return (
        <div className="page__content">
            <Switch>
                <Route exact path="/movies">
                    <ul className="cards">
                        {cards.map((card) => (<MoviesCard card={card}
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