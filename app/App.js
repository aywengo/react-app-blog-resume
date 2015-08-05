/** @jsx React.DOM */
var React = require('react');
var SiteHeader = require('./Header.jsx');
var blog = require('./blog.js');

var App = React.createClass({
    componentDidMount: function() {
        document.title = blog.title
    },
    render: function () {
        return (
            <div id="header-element">
                <SiteHeader />
            </div>
        );
    }

});

module.exports = App;
