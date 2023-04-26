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
    const requestUrl = this.baseUrl + endpoint;

    return fetch(requestUrl, options)
      .then((res) => res.json())
  }

  get(endpoint) {
    return this._sendRequest({endpoint, method: 'GET'})
  }

  post(endpoint, body) {

  }

  put(endpoint, body) {

  }
  patch(endpoint) {

  }
  delete(endpoint) {

  }
}



