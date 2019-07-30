module.exports = {
  makeRequest({ url, duration = 50, simulateError = false }) {
    const entityName = url.replace(/s\/.+/, '').replace(/s$/, '').replace('/', '')
    let promise = new Promise(function(resolve, reject){
      setTimeout(() => {
        let response = { data: [
          { id: 1, name: `${entityName} 1`},
          { id: 2, name: `${entityName} 2`},
          { id: 3, name: `${entityName} 3`}
        ]};

        if (simulateError) {
          reject("error message");
        } else {
          resolve(response);
        }
      }, duration);
    });

    return promise;
  }
}
