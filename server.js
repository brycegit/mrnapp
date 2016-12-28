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
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
// import fs from 'fs';

import express from 'express';

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

// server.get('/', (req, res) => {
//   res.send('Hello Express\n');
// });

import serverRender from './serverRender';

server.get('/', (req, res) => {
  serverRender()
  .then(({initialMarkup, initialData}) => {
    res.render('index',
      {
        initialMarkup,
        initialData
      });
  })
  .catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));

// Can use above instead -- this requires fs import & moving HTML file to public
// server.get('/about', (req, res) => {
//   fs.readFile('./about.html', (err,data) => {
//     res.send(data.toString());
//   });
// });

server.listen(config.port, config.host, () => {
  console.info('Express listening on port ', config.port);
});
