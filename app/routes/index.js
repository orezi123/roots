var express = require('express');
var router = express.Router();
var cors = require('cors');
var config = require('../../config/cors.config');
var UserCtrl = require('../controllers/user.controller');

module.exports = function(app) {

  router.route('/users')
    .post(UserCtrl.userSignup);
    
  app.use(cors(config.corsOptions));
  app.use('', router);
};
