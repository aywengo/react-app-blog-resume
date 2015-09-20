var React = require('react');
var Config = require('./config.js');
var Request = require('request');
var Spinner = require('react-spinner');

var elementBody;
var SocialNetworkBar = React.createClass({
    getInitialState: function () {
        return {
            social: [],
            mail: this.props.mail
        }
    },
    componentWillMount: function() {
        elementBody = <Spinner />
    },
    componentDidMount: function () {
        Request.get(Config.resource + this.props.resource,
            function (error, response, body) {
                if (!error && response.statusCode == 200 && !body.isEmpty) {
                    var data = JSON.parse(body);
                    if (!data.isNullOrUndefined) {
                        elementBody = <div />;
                        this.setState({social: data});
                    }
                }
            }.bind(this))
    },
    render: function () {

        var links = this.state.social.map(
            function(t, i) {
                var image = "./social_icons/" + t.name + ".png";
                return <a href={t.link} key={i} target="_blank"><img src={image} alt={t.name} /></a>
            }
        );
        var mailto = "mailto:" + this.state.mail;

        return <div className="social">
            <a href={mailto} target="_blank"><img src="./social_icons/email.png" alt={this.state.mail} /></a>
            {links}
            {elementBody}
        </div>;
    }
});

module.exports = SocialNetworkBar;