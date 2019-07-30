let base = require('./base3');

let requestPromise = base.makeRequest({ url: '/users', duration: 1000 });

// BE CAREFUL
// Binding on the first promise != Binding on the promise returned by 'then'
requestPromise.then((response) => {
  return base.makeRequest({ url: `/users/${response.data[0].id}`, duration: 1000 });
})

requestPromise.then((response) => {
  return base.makeRequest({ url: `/projects/...`, duration: 1000 });
})

requestPromise.then((response) => {
  console.log(`Then 3: ${response}`);
});
