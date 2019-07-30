let base = require('./base2');

// CALLBACK HEEEEEEEEELL
base.makeRequest({ url: '/users', callback: function(response) {
    let users = response.data;
    base.makeRequest({ url: `/users/${users[0].id}`, callback: function(response) {
        let user = { projectIds: [1,2,3] }

        base.makeRequest({ url: `/projects/${user.projectIds[1]}`, callback: function(response) {
            console.log(response);
        }});
    }});
}});
