import fs from 'fs';
import path from 'path';
import express from 'express';
import Socket from './socket';

import React from 'react';
import App from '../src/App';
import ReactDOMServer from 'react-dom/server';

const process = require('dotenv').config({path:path.resolve(__dirname+'/.env')}).parsed;

const app = express();
const http = require('http');
const server = http.createServer(app);

Socket(server);
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

app.use('.well-known/acme-challenge/ACDx-Q5EFub_1GD0UOeoAIUlUZJ2Gg3Cj9cqXJAUJR8', (req, res) => {
    res.send('hi');
    // res.sendFile(path.resolve('./acme-challenge/ACDx-Q5EFub_1GD0UOeoAIUlUZJ2Gg3Cj9cqXJAUJR8'));
});

server.listen(process.run, () => console.log(`App lunched on port: ${process.run}`));