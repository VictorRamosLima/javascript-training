let base = require('./base3');

let requestPromise = base.makeRequest({ url: '/users' });

let test1 = requestPromise.then((response) => {
  console.log(`Then 1: ${response.data[1].name}`);
  return response;
});

let test2 = test1.then((response) => {
  console.log(`Then 2: ${response.data[1].name}`);
  return 'yo';
});


let test3 = test2.then((response) => {
  console.log(`Then 3: ${response}`);
});
