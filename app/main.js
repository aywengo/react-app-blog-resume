/** @jsx React.DOM */
var React = require('react');
var App = require('./App.js');
var InfoBlock = require('./InfoBlock.jsx');
var Education = require('./Education.jsx');
var Resume = require('./Resume.jsx');
var Contact = require('./Contact.jsx');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
    <Route handler={App}>
        <DefaultRoute handler={InfoBlock}/>
        <Route name="profile" handler={InfoBlock}/>
        <Route name="education" handler={Education}/>
        <Route name="resume" handler={Resume}/>
        <Route name="contact" handler={Contact}/>
        <Route name="blog" handler={InfoBlock}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
