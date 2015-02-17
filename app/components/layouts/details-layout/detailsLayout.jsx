/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('../../header/header');
var Footer = require('../../footer/footer');
var Router = require('react-router');

var DetailsLayout = React.createClass({
  mixins: [ Router.State ],
  render() {
    return (
      <div>
        <Header text="Performer" back="true"/>
        <RouteHandler {...this.props}/>
        <Footer/>
      </div>
    )
  }
});
module.exports = DetailsLayout;

