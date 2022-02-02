class AuthApi {

    constructor(config) {
        this.url = config;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(res.status);
        }
        return res.json();
    }

    register ({name, email, password}) {
        return fetch(this.url +'/signup', {
            method: 'POST',
            headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        }).then(response => {
            return this._getResponseData(response)
        })
    };

    authorization ({email, password}) {
        return fetch(this.url +'/signin', {
            method: 'POST',
            headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }).then(response => {
            return this._getResponseData(response)
        })
    };

    getContent (token) {
        return fetch(this.url + '/users/me', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }).then(response => {
            return this._getResponseData(response)
        })
    }
}

const baseUrl = 'https://api.graduationproject.nomoredomains.rocks';

export const apiAuth = new AuthApi(baseUrl);
