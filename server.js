const http = require('http');
const fs = require('fs');

const { writeLogs } = require('./utils/events_logger');

const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
    writeLogs('request', req.url);

    if (req.url === '/' || req.url.includes('/index.html')) {
        fs.createReadStream('index.html').pipe(res);
    } else if (req.url.includes('/favicon.ico')) {
        fs.createReadStream('./assets/favicon.ico').pipe(res);
    } else {
        res.end();
    }
}); 

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});