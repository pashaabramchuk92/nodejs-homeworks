const fsPromises  = require('fs/promises');
const path = require('path');
const EventEmitter = require('events');

const emitter = new EventEmitter();

const seek = async(file, dir) => {
    try {
        await fsPromises.access(dir);
        const files = await fsPromises.readdir(dir);

        files.includes(file)
            ? emitter.emit('success', path.join(dir, file))
            : emitter.emit('fail', new Error('File not found'));

    } catch(err) {
        emitter.emit('fail', err);
    }
}

module.exports = {
    seek,
    emitter
}