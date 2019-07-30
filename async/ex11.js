let base = require('./base3');

async function fetchProjects() {
  let responses = await Promise.all(
    [base.makeRequest({ url: '/users', duration: 2000 }),
    base.makeRequest({ url: '/projects', duration: 300 }),
    base.makeRequest({ url: '/clients', duration: 400 })]
  );

  console.log(responses);
}

fetchProjects();
