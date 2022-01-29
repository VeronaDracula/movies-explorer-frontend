class MoviesApi {

    constructor(config) {
        this.url = config.url;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getCards () {
        return fetch(this.url, {
            headers : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
        }).then(response => {
            return this._getResponseData(response)
        })

    }
}

const url = {
    url: 'https://api.nomoreparties.co/beatfilm-movies'
}

export const apiMovies = new MoviesApi(url);