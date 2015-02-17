/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('../../header/header');
var Footer = require('../../footer/footer');

var BaseLayout = React.createClass({
  render() {
    return (
      <div>
       <Header text="Performers"/>
       <RouteHandler/>
     {/*<Footer/>*/}
      </div>
    )
  }
});
module.exports = BaseLayout;
