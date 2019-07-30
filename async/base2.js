module.exports = {
  makeRequest({ url, duration = 50, callback, simulateError = false }) {
    if (callback == null) {
      throw 'Please. Gimme a callback.';
    }

    setTimeout(() => {
      let response = { data: [{ id: 1 }] };
      
      if (simulateError) {
        callback(response, { error: "something" });
      } else {
        callback(response);
      }
    }, duration);
  }
}
