var React = require('react');

var Desc = React.createClass({
    render: function () {
        return <div className="desc">
            <h4>{this.props.header}</h4>
            <p>{this.props.text}</p>
        </div>
    }
});

exports.module = Desc;