let base = require('./base3');

let allPromises = Promise.all(
  [base.makeRequest({ url: '/users', duration: 2000 }),
  base.makeRequest({ url: '/projects', duration: 300 }),
  base.makeRequest({ url: '/clients', duration: 400 })]
);

// Will wait for the slowest promise
allPromises.then((responses) => {
  console.log(responses[0]);
  console.log(responses[1]);
  console.log(responses[2]);
})
