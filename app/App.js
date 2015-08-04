/** @jsx React.DOM */
var React = require('react');
var SiteHeader = require('./Header.jsx');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <SiteHeader />
            </div>
        );
    }

});

module.exports = App;
