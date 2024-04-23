const API_URL = 'https://api.github.com/repos/TarasMarkov6/training/contents/fighters.json';

const promise = fetch(API_URL, SECURITY_HEADERS);
console.log(promise);
promise.then(response => {
    const a = response.json();
    console.log(a);
    return a;
})
.then(json=>{
    console.log(JSON.parse(atob(json.content)))
})