var React = require('react');
var Request = require('request');
var Config = require('./config.js');
var Spinner = require('react-spinner');

// Takes an ISO time and returns a string representing how
// long ago the date represents.
// Copyright (c) 2011 John Resig (ejohn.org)
function prettyDate (time) {
    var date = time instanceof Date ? time : new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
        diff = (((new Date()).getTime() - date.getTime()) / 1000),
        day_diff = Math.floor(diff / 86400);

    if (diff < 60) {
        return "just now"
    }
    else if (diff < 120) {
        return "1 minute ago";
    }
    else if (diff < 3600) {
        return Math.floor( diff / 60 ) + " minutes ago";
    } else if (diff < 7200) {
        return "1 hour ago";
    } else if (diff < 86400) {
        return Math.floor( diff / 3600 ) + " hours ago";
    } else if (day_diff == 1) {
        return "Yesterday";
    } else if (day_diff < 7) {
        return day_diff + " days ago";
    } else if (day_diff < 31) {
        return Math.ceil( day_diff / 7 ) + " weeks ago";
    } else {
        var months = [ "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December" ];
        return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    }
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