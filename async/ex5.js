let base = require('./base2');

// What happens when we get an error?
base.makeRequest({ url: 'haha', simulateError: true, callback: function(response, err) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
}});
