const http = require('http');
const  fs = require('fs');
const tidt = require('./time.js')
//  const data = require('./user.json')

const server = http.createServer((req, res) => {
if (req.url === '/') {
    res.write('Bienvenue c est bien vide ici...');
    res.end();
}

if (req.url === '/api') {
    res.write('je fais n importe quoi ... ');
    res.end();
}

if (req.url === '/api/time') {
    res.write('le temps et la date sont:' +tidt.myDateTime());
    res.end();
}

if (req.url === '/api/courses') {
    res.write(JSON.stringify([10, 11, 12, 13, 14, 15]));
    res.end();
}

if (req.url === '/api/blue') {
    fs.readFile('texte.txt', function(err, data) {
        if (err) throw err; 
          res.writeHead(200, {'Content-Type': 'texte.txt'});
          res.end(data); 
      });
}

if (req.url === '/api/json') {
    fs.readFile('user.json', function(err, data) { 
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'file.json'});
    res.write('salut  ')
    res.end(data)  
    
});
}

if (req.url === '/api/jpg') fs.readFile('image.jpg', function(err, data) {
    if (err) throw err; 
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data);
  });
  
});

server.listen(1993);

console.log('connecter serveur 1993...')
