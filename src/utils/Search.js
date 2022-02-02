
export function searchCards (cards, searchString) {
    return cards.filter(card => card.nameRU.toLowerCase().includes(searchString.toLowerCase()))
}

export function searchCardsDuration (cards) {
    return cards.filter(card => card.duration <= 40)
}