/** @jsx React.DOM */
var React = require('react');
var Model = require('./model.js');
var SocialNetworks = require('./SocialNetworkBar.jsx');
var WidgetTwitter = require('./WidgetTwitter.jsx');
var AddressBlock = require('./AddressBlock.jsx');
var InfoBlock = require('./InfoBlock.jsx');
var SubnavContainer = require('./SubnavContainer.jsx');
var Head = require('./Head.jsx');
var Desc = require('./Desc.jsx');
var Footer = require('./Footer.jsx');
var NavBar = require('./NavBar.jsx');
var SiteHeader = require('./Header.jsx');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    mixins: [Router.State],
    componentDidMount: function () {
        document.title = Model.title;
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
                            <Head logo={Model.logo}
                                  position={Model.position}
                                  name={Model.name}
                                  surname={Model.surname}/>
                            <br className="clear"/>
                            {infoBlock}
                        </div>
                        <div className={(this.isActive('/profile') || this.isActive('/')) ? "sidebar hidden" : "topAddress hidden"}>
                            <AddressBlock address={Model.address}
                                          mail={Model.mail}
                                          telnumber={Model.tel}/>
                            <SocialNetworks networks={Model.social}
                                            mail={Model.mail}/>
                            {twitterBar}
                        </div>
                        <br className="clear"/>
                        {mainPart}
                    </div>
                    <Footer author={Model.author}/>
                </div>
            </div>
        );
    }
});

module.exports = App;