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
const https = require('https');
const server = http.createServer(app);

const sslserver = https.createServer({
	key: fs.readFileSync(`${process.sslPath}/privkey.pem`, 'utf8'),
	cert: fs.readFileSync(`${process.sslPath}/cert.pem`, 'utf8'),
	ca: fs.readFileSync(`${process.sslPath}/chain.pem`, 'utf8')
}, app);

Socket(sslserver);
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

app.use('/.well-known/acme-challenge/ACDx-Q5EFub_1GD0UOeoAIUlUZJ2Gg3Cj9cqXJAUJR8', (req, res) => {
    res.sendFile(path.resolve('.well-known/acme-challenge/ACDx-Q5EFub_1GD0UOeoAIUlUZJ2Gg3Cj9cqXJAUJR8'));
});

server.listen(process.run, () => console.log(`App lunched on port: ${process.run}`));
sslserver.listen(process.runSSL, () => console.log(`App(ssl) lunched on port: ${process.runSSL}`));