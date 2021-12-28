const http = require('http');

const server = http.createServer((req, res) => {
if (req.url === '/') {
    res.write('Bienvenue c est bien vide ici...');
    res.end();
}

if (req.url === '/api') {
    res.write('je fais n importe quoi ... ');
    res.end();
}

if (req.url === '/api/courses') {
    res.write(JSON.stringify([10, 11, 12, 13, 14, 15]));
    res.end();
}
});

server.listen(1993);

console.log('ecoute port 1993...')
