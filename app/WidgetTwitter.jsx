var React = require('react');
var Request = require('request');
var Model = require('./model.js');

var WidgetTwitter = React.createClass({
    getInitialState: function () {
        return {data: []};
    },
    componentDidMount: function () {
        Request.get(Model.service + "/getTweets", function (error, response, body) {
            if (!error && response.statusCode == 200 && !body.isEmpty) {
                var data = JSON.parse(body);
                if (!data.isNullOrUndefined) {
                    this.setState({data: data});
                }
            }
        }.bind(this))
    },
    render: function () {
        return <div className="widget twitter-updates">
            <h6 className="widget-title">Latest tweets</h6>
            <ul>
                <span>{this.state.data.map(function (t, i) {
                    if (t.isNullOrUndefined)
                        return ' ';
                    return <li key={i}><i>{t.text}</i></li>
                })}
                    </span>
            </ul>
        </div>;
    }
});

module.exports = WidgetTwitter;
