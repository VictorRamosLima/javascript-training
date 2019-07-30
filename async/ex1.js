let base = require('./base');


// SYNC REQUEST - IMPOSSIBLE
console.log(base.makeRequestNotInRealWorld({ url: '/users' }))

// ASYNC. But how to get the response?
// console.log(base.makeRequestInRealWorld({ url: '/users' }))
