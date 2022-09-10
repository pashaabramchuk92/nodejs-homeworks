const fs  = require('fs');
const { error } = require('./logger');

const writeLogs = (event, ...payload) => {
    fs.writeFile('./events.log', `[${new Date().toISOString()}][${event}]: ${payload}\n`, { flag: 'a+' }, error);
}

module.exports = {
    writeLogs
}