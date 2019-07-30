let base = require('./base3');

let requestPromise = base.makeRequest({ url: '/users', simulateError: true });

// Then acceps 2 callbacks (success/error)
requestPromise.then((response) => {
  console.log(`Then: ${response.data[1].name}`);
}, (response) => {
  console.log(`Error: ${response}`);
});
