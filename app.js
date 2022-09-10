const yargs = require('yargs');

const { success, error } = require('./utils/logger');
const { seek, emitter, setVerbose } = require('./utils/file_seeker');

const { file, dir, verbose } = yargs(process.argv).argv;

if (!file || !dir) {
    error('File and directory are required');
    process.exit(1);
}

setVerbose(verbose);

seek(file, dir);

emitter
    .on('success', success)
    .on('fail', error);