import React from 'react';

export function searchCards (cards, searchString) {
    // cards.filter(card => card.nameRU.includes(searchString));
    // localStorage.setItem('cards', JSON.stringify(cards));
    // console.log(cards.filter(card => card.nameRU.includes(searchString)))
    // console.log(searchString)
    return cards.filter(card => card.nameRU.includes(searchString))
}


//(state) => state.filter(cardData => cardDataDelete._id !== cardData._id)
// let str = "Я люблю JavaScript";
//
// // эти два теста делают одно и же
// alert( /люблю/i.test(str) ); // true
// alert( str.search(/люблю/i) != -1 ); // true
//cards.filter(card => `${searchString}/i`.test(card.nameRU))