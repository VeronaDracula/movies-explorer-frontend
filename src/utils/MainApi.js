class MainApi {

    constructor(config) {
        this.url = config.url;
        this.headers = {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        }
    }


    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getCards () {
        return fetch(this.url + 'cards', {
            headers : {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
        }).then(response => {
            return this._getResponseData(response)
        })

    }

    createCardApi (data) {
        return fetch(this.url + 'cards', {
            headers : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => {
            return this._getResponseData(response)
        })

    }

    deleteCardApi (_id) {
        return fetch(this.url + 'cards' + '/' + _id, {
            headers : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            method: 'DELETE',
        }).then(response => {
            return this._getResponseData(response)
        })
    }

    getUserInfoApi () {
        return fetch(this.url + 'users/me', {
            headers : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
        }).then(response => {
            return this._getResponseData(response)
        })
    }

    createNewUserInfoApi (data) {
        return fetch(this.url + 'users/me', {
            headers : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        }).then(response => {
            return this._getResponseData(response)
        })
    }

    createNewUserAvatarApi (data) {
        return fetch(this.url + 'users/me/avatar', {
            headers : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        }).then(response => {
            return this._getResponseData(response)
        })
    }

    likeApi (_id) {
        return fetch(this.url + 'cards/' + _id + '/likes', {
            headers : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            method: 'PUT'
        }).then(response => {
            return this._getResponseData(response)
        })
    }

    deleteLikedApi (_id) {
        return fetch(this.url + 'cards/' + _id + '/likes', {
            headers : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            method: 'DELETE',
        }).then(response => {
            return this._getResponseData(response)
        })
    }
}


const url = {
    url: 'http://localhost:3000/'
}

export const api = new Api(url);