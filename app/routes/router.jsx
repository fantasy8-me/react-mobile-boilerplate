/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler } = Router;

var BaseLayout = require('../components/layouts/base-layout/baseLayout');
var DetailsLayout = require('../components/layouts/details-layout/detailsLayout');

var appServices = require('../utils/appServices');
var PerformerListContent = require('../components/performer/performerList');
var Performer = require('../components/performer/performer');

var PerformerListContentHandler = React.createClass({
  render() {
    return <PerformerListContent service={appServices} />;
  }
});

var PerformerHandler = React.createClass({
  mixins: [ Router.State ],
  render() {
    return <Performer service={appServices} {...this.getParams()}/>;
  }
});

var routes = (
  <Route handler={RouteHandler}>
    <Route handler={BaseLayout}>
      <Route handler={PerformerListContentHandler}/>
    </Route>
    <Route path="/performers" handler={DetailsLayout}>
      <Route path=":performerId" handler={PerformerHandler}/>
    </Route>
  </Route>
);

module.exports = routes;