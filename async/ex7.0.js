let base = require('./base3');

let requestPromise = base.makeRequest({ url: '/users' });

let test = requestPromise.then((response) => {
  console.log(`Then 1: ${response.data[1].name}`);
});

// What is this? 
console.log(test);
