import fs from 'fs';
import path from 'path';
import express from 'express';
import Socket from './socket';

import React from 'react';
import App from '../src/App';
import ReactDOMServer from 'react-dom/server';

const app = express();
const http = require('http');
const server = http.createServer(app);

Socket(server);
require('dotenv').config();
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('some errors here..')
        }
        return res.send(data.replace(`<div id="root"></div>`,
            `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
        ));
    });
});

server.listen(process.env.RUN, () => console.log(`App lunched on port: ${process.env.RUN}`));