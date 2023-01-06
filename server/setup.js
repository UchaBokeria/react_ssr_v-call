require('path');
require('dotenv').config({path:path.resolve(__dirname+'/.env')});
require('ignore-styles');
require('@babel/register')({
    ignore: [/(node_module)/], presets: ['@babel/preset-env', '@babel/preset-react']
});
require('./server');