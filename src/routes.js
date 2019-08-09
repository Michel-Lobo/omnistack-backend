const express = require('express');
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController');
const routes = express.Router();


routes.post('/dev', DevController.store);
routes.post('dev/:devId/likes', LikeController.store);
module.exports = routes;