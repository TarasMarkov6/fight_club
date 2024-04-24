const API_URL = 'https://api.github.com/repos/TarasMarkov6/training/contents/fighters.json';
const token = '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';

const SECURITY_HEADERS = {
  headers: {
    Authorization: `token ${token}`
  }
};

const rootElement = document.getElementById('root');
rootElement.innerText = 'Loading...';

fetch(API_URL, SECURITY_HEADERS)
  .then(response => {
    if (!response.ok) {
      //throw new Error ('Failed to load data');
      return Promise.reject(new Error ('Failed to load data'));
    }

    return response.json();
  })

  .then(file => {
    const fighters = JSON.parse(atob(file.content));
    const names = fighters.map(item=>item.name);
    const namesStr = names.join('\n');
    rootElement.innerText = namesStr;
    console.log(namesStr);
  })
    .catch(error => {
    console.warn(error);
    rootElement.innerText = 'Failed to load data';
  });