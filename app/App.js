/** @jsx React.DOM */
var React = require('react');
var blog = require('./blog.js');
var SocialNetworks = require('./SocialNetworkBar.jsx');
var WidgetTwitter = require('./WidgetTwitter.jsx');
var AddressBlock = require('./AddressBlock.jsx');
var InfoBlock = require('./InfoBlock.jsx');
var Footer = require('./Footer.jsx');
var NavBar = require('./NavBar.jsx');
var SiteHeader = require('./Header.jsx');

var App = React.createClass({
    componentDidMount: function () {
        document.title = blog.title;
    },
    render: function () {
        return (
            <div className="profile">
                <div className="wrapper">
                    <NavBar />
                    <div className="content">
                        <InfoBlock logo={blog.logo}
                                   position={blog.position}
                                   name={blog.name}
                                   surname={blog.surname}
                                   text={blog.text} />
                        <div className="sidebar hidden">
                            <AddressBlock address={blog.address}
                                          mail={blog.mail}
                                          telnumber={blog.tel}/>
                            <SocialNetworks networks={blog.social}
                                            mail={blog.mail}/>
                            <WidgetTwitter />
                        </div>
                    </div>
                    <Footer author={blog.author} />
                </div>
            </div>
        );
    }
});

module.exports = App;
