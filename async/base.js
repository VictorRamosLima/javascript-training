module.exports = {
  // There is no async things here. It's impossible in JS
  makeRequestNotInRealWorld({ url }) {
    let response = { data: (Math.random()*1000) };
    return response;
  },

  makeRequestInRealWorld({ url, duration = 50 }) {
    setTimeout(() => {
      let response = { data: (Math.random()*1000) };
      return response;
    }, duration);
  }
}
