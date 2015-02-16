var React = require('react');
var Router = require('react-router');
var routes = require('./routes/router');

require('../css/style.css');
require("style!css!less!bootstrap/less/bootstrap.less");
// require("style!css!bootstrap/dist/css/bootstrap.css");

global._ = require('lodash');


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

