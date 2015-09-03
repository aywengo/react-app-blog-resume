/** @jsx React.DOM */
var React = require('react');
var routes = require('./routes.js');
var Router = require('react-router');
var DbModel = require('./model.js');
var Ga = require('react-ga');

Ga.initialize(DbModel.gaid);
Router.run(routes, Router.HistoryLocation, function (Handler, state) {
    Ga.pageview(state.pathname);
    React.render(<Handler/>, document.body);
});