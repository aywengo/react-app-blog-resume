/** @jsx React.DOM */
var React = require('react');
var routes = require('./routes.js');
var Router = require('react-router');

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
