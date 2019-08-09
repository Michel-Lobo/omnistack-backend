const express = require('express');
const mongoose = require('mongoose');
const server = express();
server.use(express.json());

const routes = require('./routes');
mongoose.connect('mongodb+srv://devuser:teodolito32@movimentomaker-cxmc4.mongodb.net/omnistack8?retryWrites=true&w=majority', {useNewUrlParser:true});
server.use(routes);
server.listen(3333);