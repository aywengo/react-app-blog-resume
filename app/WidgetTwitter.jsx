var React = require('react');

var WidgetTwitter = React.createClass({
    render: function () {
        return <div className="widget twitter-updates">
            <h6 className="widget-title">Latest tweets</h6>
        </div>;
    }
});

module.exports = WidgetTwitter;
