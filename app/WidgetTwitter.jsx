var React = require('react');
var Request = require('request');
var Config = require('./config.js');
var Spinner = require('react-spinner');

// Takes an ISO time and returns a string representing how
// long ago the date represents.
// Copyright (c) 2011 John Resig (ejohn.org)
function prettyDate(time) {
    var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
        diff = (((new Date()).getTime() - date.getTime()) / 1000),
        day_diff = Math.floor(diff / 86400);

    if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
        return;

    return day_diff == 0 && (
        diff < 60 && "just now" ||
        diff < 120 && "1 minute ago" ||
        diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
        diff < 7200 && "1 hour ago" ||
        diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
        day_diff == 1 && "Yesterday" ||
        day_diff < 7 && day_diff + " days ago" ||
        day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
}

var tweetsBody;
var WidgetTwitter = React.createClass({
    getInitialState: function () {
        return {data: []};
    },
    componentWillMount: function() {
        tweetsBody = <Spinner />
    },
    componentDidMount: function () {
        var count = this.props.count == undefined ? 3 : this.props.count;
        Request.get(Config.service + "/getTweets/" + count,
            function (error, response, body) {
                if (!error && response.statusCode == 200 && !body.isEmpty) {
                    var data = JSON.parse(body);
                    if (!data.isNullOrUndefined) {
                        tweetsBody = <div />;
                        this.setState({data: data});
                    }
                }
            }.bind(this))
    },
    render: function () {
        return <div className="widget twitter-updates">
            <a href="http://stackexchange.com/users/470057">
                <img src="http://stackexchange.com/users/flair/470057.png" width="208" height="58" alt="profile for Roman Melnyk on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for Roman Melnyk on Stack Exchange, a network of free, community-driven Q&amp;A sites"/>
            </a>
            <h6 className="widget-title">Latest tweets</h6>
            <ul>
                <span>
                    {tweetsBody}
                    {this.state.data.map(function (t, i) {
                        if (t.isNullOrUndefined)
                            return ' ';
                        return <li key={i}><u>{prettyDate(t.created_at)}</u>{t.text}</li>
                    })}
                </span>
            </ul>
        </div>;
    }
});

module.exports = WidgetTwitter;