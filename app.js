const yargs = require('yargs');

const { success, error } = require('./utils/logger');
const { seek, emitter } = require('./utils/file_seeker');

const { file, dir } = yargs(process.argv).argv;

if (!file || !dir) {
    error('File and directory are required');
    process.exit(1);
}

seek(file, dir);

emitter
    .on('success', success)
    .on('fail', error);