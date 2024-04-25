const BASE_API_URL = 'https://api.github.com/'; 
const SECURITY_HEADERS = {
  headers: {
    authorization: ""
  }
};

const rootElement = document.getElementById('root');
const loadingElement = document.getElementById('loading-overlay');

function callApi(endpoint, method = 'GET') {
  const url = BASE_API_URL + endpoint;
  const options = { method, ...SECURITY_HEADERS };

  return fetch(url, options)
    .then(response =>
      response.ok
        ? response.json()
        : Promise.reject(Error('Failed to load'))
    )
    .then(file => JSON.parse(atob(file.content)))
    .catch(error => { throw error });
}

class FighterService {
  #endpoint = 'repos/TarasMarkov6/training/contents/fighters.json'
 
  async getFighters() {
    try {
      const apiResult = await callApi(this.#endpoint, 'GET');
      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }
 }
 const fighterService = new FighterService();

 Object.setPrototypeOf