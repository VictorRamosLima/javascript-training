let base = require('./base3');

let requestPromise = base.makeRequest({ url: '/users', duration: 1000 });

requestPromise.then((response) => {
  return base.makeRequest({ url: `/users/${response.data[0].id}`, duration: 1000 });
}).then((response) => {
  return base.makeRequest({ url: `/projects/...`, duration: 1000 });
}).then((response) => {
  console.log(`Then 3: ${response}`);
});
