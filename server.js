//./node_modules/.bin/babel-node server.js

// without express:
// import http from 'http';
//
// const server = http.createServer((req, res) => {
//   res.write('Hello Http!\n');
//   setTimeout(() => {
//     res.write('I can stream!\n');
//     res.end();
//   }, 3000);
// });
//
// server.listen(8080);

// with express:
import config from './config';
import apiRouter from './api';
// import fs from 'fs';

import express from 'express';

const server = express();

server.set('view engine', 'ejs');

// server.get('/', (req, res) => {
//   res.send('Hello Express\n');
// });

server.get('/', (req, res) => {
  res.render('index', {content: '<em>stuff</em>'});
});

server.use('/api', apiRouter);
server.use(express.static('public'));

// Can use above instead -- this requires fs import & moving HTML file to public
// server.get('/about', (req, res) => {
//   fs.readFile('./about.html', (err,data) => {
//     res.send(data.toString());
//   });
// });

server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
