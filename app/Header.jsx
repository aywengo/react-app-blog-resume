var React = require('react');
var blog = require('./blog.js');
var SocialNetworks = require('./SocialNetworkBar.jsx');

var SiteHeader = React.createClass({
    getInitialState: function () {
        return {
            title: blog.title,
            logo: blog.logo,
            mail: blog.mail,
            social: blog.social
        }
    },
    render: function () {
        return <div className="header-title">
            <img src={this.state.logo}
                 width="80"
                 alt="{this.state.title} logo"
                 className="panel-cover__logo"/>
            <h2 className="header-title--maintitle">
                <a href="/">{this.state.title}</a></h2>
            <SocialNetworks networks={this.state.social} mail= {this.state.mail}/>
        </div>;
    }
});

module.exports = SiteHeader;