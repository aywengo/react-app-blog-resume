/** @jsx React.DOM */
var React = require('react');
var Config = require('./config.js');
var SocialNetworks = require('./SocialNetworkBar.jsx');
var WidgetTwitter = require('./WidgetTwitter.jsx');
var AddressBlock = require('./AddressBlock.jsx');
var InfoBlock = require('./InfoBlock.jsx');
var SubnavContainer = require('./SubnavContainer.jsx');
var Head = require('./Head.jsx');
var Footer = require('./Footer.jsx');
var NavBar = require('./NavBar.jsx');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    mixins: [Router.State],
    componentDidMount: function () {
        document.title = Config.title;
    },
    render: function () {
        var twitterBar,infoBlock,mainPart;
        if(this.isActive('/profile') || this.isActive('/'))
        {
            twitterBar = <WidgetTwitter count={5} />;
            infoBlock = <InfoBlock />;
        }
        else
        {
            mainPart = <RouteHandler />;
        }
        return (
            <div className={this.getPathname().trim().substring(1) || "profile"}>
                <div className="wrapper">
                    <NavBar />

                    <div className="content">
                        <div className="info">
                            <Head logo={Config.logo}
                                  position={Config.position}
                                  name={Config.name}
                                  surname={Config.surname}/>
                            <br className="clear"/>
                            {infoBlock}
                        </div>
                        <div className={(this.isActive('/profile') || this.isActive('/')) ? "sidebar hidden" : "topAddress hidden"}>
                            <AddressBlock address={Config.address}
                                          mail={Config.mail}
                                          telnumber={Config.tel}/>
                            <SocialNetworks resource="social"
                                            mail={Config.mail}/>
                            {twitterBar}
                        </div>
                        <br className="clear"/>
                        {mainPart}
                    </div>
                    <Footer author={Config.author}/>
                </div>
            </div>
        );
    }
});

module.exports = App;