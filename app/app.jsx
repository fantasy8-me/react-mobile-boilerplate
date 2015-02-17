var Router = require('react-router');
var React = require('react');
// var Router = require('react-router');
var routes = require('./routes/router');

var BaseLayout = require('./components/performer/performerList');


// require("style!css!less!bootstrap/less/bootstrap.less");
// require("style!css!bootstrap/dist/css/bootstrap.css");

require('style!css!ratchet/dist/css/ratchet.css');
require('style!css!ratchet/dist/css/ratchet-theme-ios.css');
// require('style!css!ratchet/dist/css/ratchet-theme-android.css');
require('../css/style.css');

global._ = require('lodash');



Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

// React.render(<BaseLayout service={performerService}/>, document.body);

