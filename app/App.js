/** @jsx React.DOM */
var React = require('react');
var blog = require('./blog.js');
var SocialNetworks = require('./SocialNetworkBar.jsx');
var WidgetTwitter = require('./WidgetTwitter.jsx');
var AddressBlock = require('./AddressBlock.jsx');
var InfoBlock = require('./InfoBlock.jsx');
var Head = require('./Head.jsx');
var Footer = require('./Footer.jsx');
var NavBar = require('./NavBar.jsx');
var SiteHeader = require('./Header.jsx');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    componentDidMount: function () {
        document.title = blog.title;
    },
    getInitialState: function() {
        return {
            //currentpath: Router.State.getPath()
        }
    },
    render: function () {
        return (
            <div className="profile">
                <div className="wrapper">

                    <NavBar />
                    <div className="content">
                        <div className="info">
                            <Head logo={blog.logo}
                                  position={blog.position}
                                  name={blog.name}
                                  surname={blog.surname}/>
                            <br className="clear"/>
                            {this.state.currentpath}
                            <RouteHandler />
                        </div>
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
