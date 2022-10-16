const fs  = require('fs');

const writeLogs = (event, ...payload) => {
    const file = fs.createWriteStream('./events.log', { flags: 'a+' });

    file.write(`[${new Date().toISOString()}][${event}]: ${payload}\n`);
    file.end();
}

module.exports = {
    writeLogs
}