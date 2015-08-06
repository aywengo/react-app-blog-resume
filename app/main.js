/** @jsx React.DOM */
var React = require('react');
var App = require('./App.js');
var InfoBlock = require('./InfoBlock.jsx');
var Footer = require('./Footer.jsx');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
    <Route handler={App}>
        <DefaultRoute handler={InfoBlock}/>
        <Route name="info" handler={InfoBlock}/>
        <Route name="education" handler={Footer}/>
        <Route name="resume" handler={InfoBlock}/>
        <Route name="contact" handler={InfoBlock}/>
        <Route name="blog" handler={InfoBlock}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
