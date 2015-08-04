var React = require('react');

var SocialNetworkBar = React.createClass({
    getInitialState: function () {
        return {
            social: this.props.networks
        }
    },
    render: function () {
        return <div className="social">
            <a href="#" target="_blank"><img src="./social_icons/dribbble.png" alt=" " /></a>
            <a href="#" target="_blank"><img src="./social_icons/flickr.png" alt="" /></a>
            <a href="https://www.facebook.com/aywengo" target="_blank"><img src="./social_icons/facebook.png" alt="" /></a>
            <a href="https://twitter.com/aywengo" target="_blank"><img src="./social_icons/twitter.png" alt="" /></a>
        </div>;
    }
});

module.exports = SocialNetworkBar;