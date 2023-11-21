//Part 1

const numberFact = () => {
    axios.get('http://numbersapi.com/17/trivia?json')
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}

const promises = [];

for (let i = 1; i < 5; i++) {
    promises.push(
        axios.get(`http://numbersapi.com/${i}/trivia?json`)
    );
};

const facts = document.getElementById('facts');

Promise.all(promises)
    .then(promiseArray => (
        promiseArray.forEach(promise => {
            const fact = document.createElement('p');
            fact.innerText = promise.data.text;
            facts.appendChild(fact);
        })
    ))
    .catch(error => console.log(error));

const favoritePromises = [];

for (let i = 1; i < 5; i++) {
    favoritePromises.push(
        axios.get(`http://numbersapi.com/17/trivia?json`)
    );
};

Promise.all(favoritePromises)
    .then(favoritePromisesArray => (
        favoritePromisesArray.forEach(promise => {
            const fact = document.createElement('p');
            console.log(fact);
            fact.innerText = promise.data.text;
            facts.appendChild(fact);
        })
    ))
    .catch(error => console.log(error));