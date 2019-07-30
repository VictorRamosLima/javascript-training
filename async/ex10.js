let base = require('./base3');

async function fetchProjects() {
  let usersRequestResponse = await base.makeRequest({ url: '/users', duration: 1000 });
  let users = usersRequestResponse.data;
  console.log('User list finished!')

  var a = await base.makeRequest({ url: `/user/${users[0].id}`, duration: 300 });
  console.log('User detail finished!')

  var b = await base.makeRequest({ url: `/projects/...`, duration: 500 });
  console.log('Projects finished!')
}

fetchProjects();
