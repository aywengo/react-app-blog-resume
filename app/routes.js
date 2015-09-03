var App = require('./App.js');
var React = require('react');
var InfoBlock = require('./InfoBlock.jsx');
var Education = require('./Education.jsx');
var Resume = require('./Resume.jsx');
var Contact = require('./Contact.jsx');
var NotFound = require('./NotFound.jsx');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route handler={App} path="/">
        <DefaultRoute handler={InfoBlock}/>
        <NotFoundRoute handler={NotFound} />
        <Route name="profile" handler={InfoBlock}/>
        <Route name="education" handler={Education}/>
        <Route name="resume" handler={Resume}/>
        <Route name="contact" handler={Contact}/>
        <Route name="blog" handler={NotFound}/>
    </Route>
);

module.exports = routes;