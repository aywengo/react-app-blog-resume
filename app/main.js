/** @jsx React.DOM */
var React = require('react');
var routes = require('./routes.js');
var Router = require('react-router');
var Config = require('./config.js');
var Ga = require('react-ga');

Ga.initialize(Config.gaid);
Router.run(routes, Router.HashLocation, function (Handler, state) {
    Ga.pageview(state.pathname);
    React.render(<Handler/>, document.body);
});