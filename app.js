const { info, warn, error } = require('./utils/logger');

info('info arg');
info(...Array.from({ length: 5 }, (_, i) => `${i} info arg`));

warn('warn arg');
warn(...Array.from({ length: 5 }, (_, i) => `${i} warn arg`));

error('error arg');
error(...Array.from({ length: 5 }, (_, i) => `${i} error arg`));