let base = require('./base2');

// Example of using callback
base.makeRequest({ url: '/users', duration: 1000, callback: function(response) {
  console.log(response);
}});
