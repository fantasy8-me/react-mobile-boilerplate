/** @jsx React.DOM */
var React = require('react');

var Footer = React.createClass({
  render() {
    return (
      <nav className="bar bar-tab">
        <a className="tab-item" href="#">
          <span className="icon icon-person"></span>
          <span className="tab-label">Profile</span>
        </a>
        <a className="tab-item" href="#">
          <span className="icon icon-star-filled"></span>
          <span className="tab-label">Pinpoint+</span>
        </a>
        <a className="tab-item" href="#">
          <span className="icon icon-search"></span>
          <span className="tab-label">Search</span>
        </a>
        <a className="tab-item" href="#">
          <span className="icon icon-gear"></span>
          <span className="tab-label">Settings</span>
        </a>
      </nav>
    )
  }
});

module.exports = Footer;
