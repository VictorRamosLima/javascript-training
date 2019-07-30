let base = require('./base3');

let requestPromise = base.makeRequest({ url: '/users' });

requestPromise.then((response) => {
  console.log(`Then 1: ${response.data[1].name}`);
  return response;
}).then((response) => {
  console.log(`Then 2: ${response.data[1].name}`);
  return 'yo';
}).then((response) => {
  console.log(`Then 3: ${response}`);
});
