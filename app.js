const { info, warn, error } = require('./utils/logger');

const ARG = 'arg';
const ARRAY_ARGS = Array.from({ length: 5 }, (_, i) => `${i} ${ARG} |`)

info(ARG);
info(...ARRAY_ARGS);

warn(ARG);
warn(...ARRAY_ARGS);

error(ARG);
error(...ARRAY_ARGS);