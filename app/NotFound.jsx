var React = require('react');
var SubnavContainer = require('./SubnavContainer.jsx');
var Router = require('react-router');

var NotFound = React.createClass({
    mixins: [Router.State],
    render: function() {
        return <div className="innerContainer">
                <div className="desc">
                    <h4>The requested resource <u>{this.getPath()}</u> wasn't found</h4>
                </div>
                <div className="education-items">
                    <SubnavContainer />
                </div>
            </div>
    }
});

module.exports = NotFound;