class Api {

  getPokemonCards(url) {
    return fetch (url)
      .then ((res) => {
        return this._checkResponse(res)
      })
  }

  getPokemonInfo(url) {
    return fetch (url)
      .then ((res) => {
        return this._checkResponse(res)
      })
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new Api();

export default api;
