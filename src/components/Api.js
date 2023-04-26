export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _sendRequest({ endpoint, method, body }) {
    const options = {
      method: method,
      headers: this.headers
    };
    if (body) {
      options.body = body;
    }
    const requestUrl = `${this.baseUrl}${endpoint}`;

    return fetch(requestUrl, options)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject('Error')
      })
  }

  get(endpoint) {
    return this._sendRequest({endpoint, method: 'GET'})
  }

  post(endpoint, body) {

  }

  put(endpoint, body) {

  }
  patch(endpoint, body) {
    return this._sendRequest({
      endpoint,
      method: 'PATCH',
      body: JSON.stringify(body)
    })
  }
  delete(endpoint) {

  }
}



