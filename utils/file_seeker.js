const fsPromises  = require('fs/promises');
const path = require('path');
const EventEmitter = require('events');

const { writeLogs } = require('./events_logger');

const emitter = new EventEmitter();

let _verbose = false;

const setVerbose = (value) => {
    _verbose = !!value;
}

const seek = async(file, dir) => {
    try {
        await fsPromises.access(dir);
        const files = await fsPromises.readdir(dir);

        if (files.includes(file)) {
            const data = path.join(dir, file);

            _verbose && writeLogs('success', data);
            emitter.emit('success', data)
        } else {
            const err = new Error('File not found');

            _verbose && writeLogs('fail', err);
            emitter.emit('fail', err)
        }
    } catch(err) {
        emitter.emit('fail', err);
        _verbose && writeLogs('fail', err);
    }
}

module.exports = {
    seek,
    emitter,
    setVerbose
}