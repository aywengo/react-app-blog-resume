var React = require('react');

var SocialNetworkBar = React.createClass({
    getInitialState: function () {
        return {
            social: this.props.networks,
            mail: this.props.mail
        }
    },
    render: function () {

        var links = this.state.social.map(
            function(t) {
                var image = "./social_icons/" + t.name + ".png";
                return <a href={t.link} target="_blank"><img src={image} alt={t.name} /></a>
            }
        );
        var mailto = "mailto:" + this.state.mail;

        return <div className="social">
            <a href={mailto} target="_blank"><img src="./social_icons/email.png" alt={this.state.mail} /></a>
            {links}
        </div>;
    }
});

module.exports = SocialNetworkBar;