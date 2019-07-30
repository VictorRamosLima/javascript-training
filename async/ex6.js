let base = require('./base3');

// I Promise to be better
let requestPromise = base.makeRequest({ url: '/users' });

requestPromise.then((response) => {
  console.log(`Then 1: ${response.data[1].name}`);
});


requestPromise.then((response) => {
  console.log(`Then 2: ${response.data[1].name}`);
});


requestPromise.then((response) => {
  console.log(`Then 3: ${response.data[1].name}`);
});
