(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/romeo/Repository/react-app-blog-resume/app/AddressBlock.jsx":[function(require,module,exports){
var React = require('react');

var AddressBlock = React.createClass({displayName: "AddressBlock",
    getInitialState: function() {
        return {
            mail : this.props.mail,
            address : this.props.address,
            telno : this.props.telnumber
        }
    },
    render: function () {
        var mailto = "mailto:" + this.state.mail;
        var tel = "#" + this.state.telno;
        return React.createElement("address", null, 
            this.state.address, React.createElement("br", null), 
            React.createElement("a", {href: mailto}, this.state.mail), React.createElement("br", null), 
            React.createElement("a", {href: tel}, this.state.telno), React.createElement("br", null)
        );
    }
});

module.exports = AddressBlock;
},{"react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/App.js":[function(require,module,exports){
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

var App = React.createClass({displayName: "App",
    mixins: [Router.State],
    componentDidMount: function () {
        document.title = Model.title;
    },
    render: function () {
        var twitterBar,infoBlock,mainPart;
        if(this.isActive('/profile') || this.isActive('/'))
        {
            twitterBar = React.createElement(WidgetTwitter, null);
            infoBlock = React.createElement(InfoBlock, null);
        }
        else
        {
            mainPart = React.createElement(RouteHandler, null);
        }
        return (
            React.createElement("div", {className: this.getPathname().trim().substring(1) || "profile"}, 
                React.createElement("div", {className: "wrapper"}, 
                    React.createElement(NavBar, null), 

                    React.createElement("div", {className: "content"}, 
                        React.createElement("div", {className: "info"}, 
                            React.createElement(Head, {logo: Model.logo, 
                                  position: Model.position, 
                                  name: Model.name, 
                                  surname: Model.surname}), 
                            React.createElement("br", {className: "clear"}), 
                            infoBlock
                        ), 
                        React.createElement("div", {className: (this.isActive('/profile') || this.isActive('/')) ? "sidebar hidden" : "topAddress hidden"}, 
                            React.createElement(AddressBlock, {address: Model.address, 
                                          mail: Model.mail, 
                                          telnumber: Model.tel}), 
                            React.createElement(SocialNetworks, {networks: Model.social, 
                                            mail: Model.mail}), 
                            twitterBar
                        ), 
                        React.createElement("br", {className: "clear"}), 
                        mainPart
                    ), 
                    React.createElement(Footer, {author: Model.author})
                )
            )
        );
    }
});

module.exports = App;
},{"./AddressBlock.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/AddressBlock.jsx","./Desc.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Desc.jsx","./Footer.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Footer.jsx","./Head.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Head.jsx","./Header.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Header.jsx","./InfoBlock.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/InfoBlock.jsx","./NavBar.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/NavBar.jsx","./SocialNetworkBar.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/SocialNetworkBar.jsx","./SubnavContainer.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/SubnavContainer.jsx","./WidgetTwitter.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/WidgetTwitter.jsx","./model.js":"/Users/romeo/Repository/react-app-blog-resume/app/model.js","react":"react","react-router":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/index.js"}],"/Users/romeo/Repository/react-app-blog-resume/app/Contact.jsx":[function(require,module,exports){
var React = require('react');
var Desc = require('./Desc.jsx');
var Model = require('./model.js');

var Contact = React.createClass({displayName: "Contact",
    render: function() {
        return React.createElement("div", {className: "innerContainer"}, 
                    React.createElement("div", {className: "desc"}, 
                        React.createElement("iframe", {frameBorder: "0", scrolling: "no", marginHeight: "0", marginWidth: "0", 
                                src: Model.map})
                    ), 
                    React.createElement("div", {className: "contact-items"}, 
                        Model.text
                    )
            )
    }
});

module.exports = Contact;
},{"./Desc.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Desc.jsx","./model.js":"/Users/romeo/Repository/react-app-blog-resume/app/model.js","react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/Desc.jsx":[function(require,module,exports){
var React = require('react');

var Desc = React.createClass({displayName: "Desc",
    render: function () {
        return React.createElement("div", {className: "desc"}, 
            React.createElement("h4", null, this.props.header), 
            React.createElement("p", null, this.props.text)
        )
    }
});

exports.module = Desc;
},{"react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/Education.jsx":[function(require,module,exports){
var React = require('react');
var Desc = require('./Desc.jsx');
var EducationItems = require('./EducationItems.jsx');
var Model = require('./model.js');

var Education = React.createClass({displayName: "Education",
    render: function () {
        return React.createElement("div", {className: "innerContainer"}, 
            React.createElement(EducationItems, {header: "Education", items: Model.education}), 
            React.createElement("p", null, " "), 
            React.createElement(EducationItems, {header: "Certification", items: Model.certification})
        )
    }
});

module.exports = Education;
},{"./Desc.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Desc.jsx","./EducationItems.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/EducationItems.jsx","./model.js":"/Users/romeo/Repository/react-app-blog-resume/app/model.js","react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/EducationItems.jsx":[function(require,module,exports){
var React = require('react');

var EducationItems = React.createClass({displayName: "EducationItems",
    getInitialState: function(){
        return {
            header : this.props.header,
            items : this.props.items
        }
    },
    render: function () {
        return React.createElement("div", null, 
            React.createElement("div", {className: "desc"}, 
                React.createElement("h2", null, this.state.header)
            ), 
            React.createElement("div", {className: "education-items"}, 
                React.createElement("ul", {className: "personalDev"}, 
                    this.state.items.map(function(data, i) {
                        var head = (data.link === 'undefined') ? data.title : React.createElement("a", {href: data.link, target: "_blank"}, " ", data.title, " ");
                        return (React.createElement("li", {key: i}, 
                                React.createElement("span", {className: "title"}, head), 
                                React.createElement("span", {className: "time"}, data.time), React.createElement("br", null), 
                                React.createElement("span", null, data.authority)
                            ))
                    })
                )
            )
        )
    }
});

module.exports = EducationItems;
},{"react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/Footer.jsx":[function(require,module,exports){
var React = require('react');

var Footer = React.createClass({displayName: "Footer",
    getInitialState: function() {
        return {
            author : this.props.author
        }
    },
    render: function () {
        return React.createElement("footer", null, 
            React.createElement("span", null, "Copyright ©2015 ", this.state.author, "."), 
            React.createElement("span", null, "Powered by ", React.createElement("a", {href: "http://http://facebook.github.io/react/"}, "React.js"))
        );
    }
});

module.exports = Footer;
},{"react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/Head.jsx":[function(require,module,exports){
var React = require('react');

var Head = React.createClass({displayName: "Head",
    getInitialState: function () {
        return {
            logo: this.props.logo,
            name: this.props.name,
            surname: this.props.surname,
            position: this.props.position
        }
    },
    render: function () {
        return React.createElement("div", {className: "head"}, 
            React.createElement("img", {src: this.state.logo, alt: this.state.name}), 

            React.createElement("div", {className: "name"}, 
                React.createElement("p", {className: "first"}, this.state.name), 

                React.createElement("p", {className: "last"}, this.state.surname), 

                React.createElement("p", {className: "title"}, this.state.position)
            )
        )
    }
});

module.exports = Head;
},{"react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/Header.jsx":[function(require,module,exports){
var React = require('react');
var Model = require('./model.js');
var SocialNetworks = require('./SocialNetworkBar.jsx');

var SiteHeader = React.createClass({displayName: "SiteHeader",
    getInitialState: function () {
        return {
            title: Model.title,
            logo: Model.logo,
            mail: Model.mail,
            social: Model.social
        }
    },
    render: function () {
        return React.createElement("div", {className: "header-title"}, 
            React.createElement("img", {src: this.state.logo, 
                 width: "80", 
                 alt: "{this.state.title} logo", 
                 className: "panel-cover__logo"}), 
            React.createElement("h2", {className: "header-title--maintitle"}, 
                React.createElement("a", {href: "/"}, this.state.title)), 
            React.createElement(SocialNetworks, {networks: this.state.social, mail: this.state.mail})
        );
    }
});

module.exports = SiteHeader;
},{"./SocialNetworkBar.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/SocialNetworkBar.jsx","./model.js":"/Users/romeo/Repository/react-app-blog-resume/app/model.js","react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/InfoBlock.jsx":[function(require,module,exports){
var React = require('react');
var Head = require('./Head.jsx');
var Desc = require('./Desc.jsx');
var SubnavContainer = require('./SubnavContainer.jsx');
var Model = require('./model.js');

var InfoBlock = React.createClass({displayName: "InfoBlock",
    render: function () {
        return  React.createElement("div", null, 
                    React.createElement("div", {className: "desc"}, 
                        React.createElement("p", null, Model.text)
                    ), 
            React.createElement(SubnavContainer, null)
        );
    }
});

module.exports = InfoBlock;
},{"./Desc.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Desc.jsx","./Head.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Head.jsx","./SubnavContainer.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/SubnavContainer.jsx","./model.js":"/Users/romeo/Repository/react-app-blog-resume/app/model.js","react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/NavBar.jsx":[function(require,module,exports){
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NavBar = React.createClass({displayName: "NavBar",
    mixins: [ Router.State ],
    render: function () {
        var activate = " current-menu-item";
        var name = this.getPathname();
        return React.createElement("nav", null, 
            React.createElement("ul", null, 
                React.createElement("li", {className: name === '/profile'?'profile' + activate:'profile'}, React.createElement(Link, {to: "profile"}, React.createElement("span", null, React.createElement("span", null, "Profile")))), 
                React.createElement("li", {className: name === '/resume'?'resume' + activate:'resume'}, React.createElement(Link, {to: "resume"}, React.createElement("span", null, React.createElement("span", null, "Resume")))), 
                React.createElement("li", {className: name === '/education'?'education' + activate:'education'}, React.createElement(Link, {to: "education"}, React.createElement("span", null, React.createElement("span", null, "Education")))), 
                React.createElement("li", {className: name === '/blog'?'blog' + activate:'blog'}, React.createElement(Link, {to: "blog"}, React.createElement("span", null, React.createElement("span", null, "Blog")))), 
                React.createElement("li", {className: name === '/contact'?'contact' + activate:'contact'}, React.createElement(Link, {to: "contact"}, React.createElement("span", null, React.createElement("span", null, "Contact"))))
            )
        );
    }
});

module.exports = NavBar;
},{"react":"react","react-router":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/index.js"}],"/Users/romeo/Repository/react-app-blog-resume/app/NotFound.jsx":[function(require,module,exports){
var React = require('react');
var SubnavContainer = require('./SubnavContainer.jsx');
var Router = require('react-router');

var NotFound = React.createClass({displayName: "NotFound",
    mixins: [Router.State],
    render: function() {
        return React.createElement("div", {className: "innerContainer"}, 
                React.createElement("div", {className: "desc"}, 
                    React.createElement("h4", null, "The requested resource ", React.createElement("u", null, this.getPath()), " wasn't found")
                ), 
                React.createElement("div", {className: "education-items"}, 
                    React.createElement(SubnavContainer, null)
                )
            )
    }
});

module.exports = NotFound;
},{"./SubnavContainer.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/SubnavContainer.jsx","react":"react","react-router":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/index.js"}],"/Users/romeo/Repository/react-app-blog-resume/app/Resume.jsx":[function(require,module,exports){
var React = require('react');
var Desc = require('./Desc.jsx');
var Model = require('./model.js');

var Resume = React.createClass({displayName: "Resume",
    render: function() {
        return React.createElement("div", {className: "innerContainer"}, 
                    React.createElement("div", {className: "desc"}, 
                        React.createElement("h2", null, "Resume")
                    ), 
                    React.createElement("div", {className: "resume-items"}, 
                        Model.text
                    )
            )
    }
});

module.exports = Resume;
},{"./Desc.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Desc.jsx","./model.js":"/Users/romeo/Repository/react-app-blog-resume/app/model.js","react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/SocialNetworkBar.jsx":[function(require,module,exports){
var React = require('react');

var SocialNetworkBar = React.createClass({displayName: "SocialNetworkBar",
    getInitialState: function () {
        return {
            social: this.props.networks,
            mail: this.props.mail
        }
    },
    render: function () {

        var links = this.state.social.map(
            function(t, i) {
                var image = "./social_icons/" + t.name + ".png";
                return React.createElement("a", {href: t.link, key: i, target: "_blank"}, React.createElement("img", {src: image, alt: t.name}))
            }
        );
        var mailto = "mailto:" + this.state.mail;

        return React.createElement("div", {className: "social"}, 
            React.createElement("a", {href: mailto, target: "_blank"}, React.createElement("img", {src: "./social_icons/email.png", alt: this.state.mail})), 
            links
        );
    }
});

module.exports = SocialNetworkBar;
},{"react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/SubnavContainer.jsx":[function(require,module,exports){
var React = require('react');
var Link = require('react-router').Link;

var SubnavContainer = React.createClass({displayName: "SubnavContainer",
    render: function(){
        return React.createElement("div", {className: "subnavContainer"}, 
            React.createElement("div", {className: "subnavLeft"}, 
                React.createElement("div", {className: "subnavResume"}, 
                    React.createElement(Link, {to: "resume", className: "invert"}), React.createElement("br", null), 
                    React.createElement(Link, {to: "resume"}, "Resume")
                ), 
                React.createElement("div", {className: "subnaveducation"}, 
                    React.createElement(Link, {to: "education", className: "invert"}), React.createElement("br", null), 
                    React.createElement(Link, {to: "education"}, "Education")
                )
            ), 
            React.createElement("div", {className: "subnavRight"}, 
                React.createElement("div", {className: "subnavBlog"}, 
                    React.createElement(Link, {to: "blog", className: "invert"}), React.createElement("br", null), 
                    React.createElement(Link, {to: "blog"}, "Blog")
                ), 
                React.createElement("div", {className: "subnavContact"}, 
                    React.createElement(Link, {to: "contact", className: "invert"}), React.createElement("br", null), 
                    React.createElement(Link, {to: "contact"}, "Contact")
                )
            )
        )
    }}
);

module.exports = SubnavContainer;
},{"react":"react","react-router":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/index.js"}],"/Users/romeo/Repository/react-app-blog-resume/app/WidgetTwitter.jsx":[function(require,module,exports){
var React = require('react');
var Request = require('request');

var WidgetTwitter = React.createClass({displayName: "WidgetTwitter",
    getInitialState: function () {
        return {data: []};
    },
    componentDidMount: function () {
        Request.get("http://localhost:8088/api/getTweets", function (error, response, body) {
            if (!error && response.statusCode == 200 && !body.isEmpty) {
                var data = JSON.parse(body);
                if (!data.isNullOrUndefined) {
                    this.setState({data: data});
                }
            }
        }.bind(this))
    },
    render: function () {
        return React.createElement("div", {className: "widget twitter-updates"}, 
            React.createElement("h6", {className: "widget-title"}, "Latest tweets"), 
            React.createElement("ul", null, 
                React.createElement("span", null, this.state.data.map(function (t, i) {
                    if (t.isNullOrUndefined)
                        return ' ';
                    return React.createElement("li", {key: i}, React.createElement("i", null, t.text))
                })
                    )
            )
        );
    }
});

module.exports = WidgetTwitter;

},{"react":"react","request":"request"}],"/Users/romeo/Repository/react-app-blog-resume/app/model.js":[function(require,module,exports){
var DbModel = {
    "title": "Roman Melnyk personal blog",
    "author": "Roman Melnyk",
    "name": "Roman",
    "surname": "Melnyk",
    "position": "Software developer",
    "logo": "https://media.licdn.com/media/p/3/005/031/265/0a61343.jpg",
    "social": [
        {name: "facebook", link: ""},
        {name: "twitter", link: ""},
        {name: "github", link: ""},
        {name: "linkedin", link: ""}],
    "education" : [
        {title: "CCNA course", time: "Aug 2008 - Dec 2008", authority: "Cisco Network Academia, Ukraine, Vinnytsia"},
        {title: "Expert diploma", time: "Sep 2006 - Apr 2008", authority: "Vinnytsia National Technical University, Ukraine, Vinnytsia"},
        {title: "Master degree", time: "Sep 2006 - June 2007", authority: "Vinnytsia National Technical University, Ukraine, Vinnytsia"},
        {title: "Bachelors degree", time: "Oct 2001 - June 2006", authority: "Vinnytsia National Technical University, Ukraine, Vinnytsia"}],
    "certification" : [
        {title: "Principles of Reactive Programming", time: "May 2015", authority: "Coursera Verified Certificates. License: UVFCKVQNVQ",
            link: "https://www.coursera.org/account/accomplishments/verify/UVFCKVQNVQ"},
        {title: "Programming Mobile Applications for Android Handheld Systems", time: "Nov 2014", authority: "Coursera Verified Certificates. License: 899VF7MYYR",
            link: "https://www.coursera.org/account/accomplishments/verify/899VF7MYYR"},
        {title: "MongoDB for Node.js Developers", time: "May 2015", authority: "Mongo University inc.",
            link: "http://education.mongodb.com/downloads/certificates/581659ac011c411aa6ed7e135feb87b3/Certificate.pdf"},
        {title: "Brainbench: .NET Framework 4.5 Master", time: "Oct 2014 - Oct 2017", authority: "Brainbench. Transcript ID#: 9645519",
            link: "http://www.brainbench.com/ordercert/downloadCertificate.do?pin=P_1yn4fFXNE*"},
        {title: "Brainbench: С# 5.0 Master", time: "Sep 2014 - Sep 2017", authority: "Brainbench. Transcript ID#: 9645519",
            link: "https://www.brainbench.com/ordercert/downloadCertificate.do?pin=MgaBQPlEphA*"},
        {title: "Brainbench: Programming Concepts Master", time: "Jan 2013 - Jan 2016", authority: "Brainbench. Transcript ID#: 9645519",
            link: "http://www.brainbench.com/ordercert/downloadCertificate.do?pin=ptQYmEtDCqg*"},
        {title: "Brainbench: С# 4.0 Master", time: "Nov 2012 - Nov 2015", authority: "Brainbench. Transcript ID#: 9645519",
            link: "http://www.brainbench.com/ordercert/downloadCertificate.do?pin=ngVH3VTp3C0*"}
    ],
    "mail": "aywengo@gmail.com",
    "tel": "+48 123 456 789",
    "address": 'Miel\u017cy\u0144skiego 14, 61-725 Pozna\u0144',
    "map" : 'https://maps.google.com/maps?q=Poznan&hl=en&sll=52.4075257,16.9333802&sspn=3.902347,7.13562&t=h&hnear=Poznan,+Poland&z=14&output=embed',
    "text": "As far as I remember myself I was fond of math, programming and foreign languages. My first program I wrote on assembler when was eight years old and my first program as a freelancer in 19.\r\n" +
    "I\'ve got honor Master degree in electrotechnical engineering and expert Diploma of Computer Systems and Networks.  During last 12 years of my life, I\'ve professionally been coding on Pascal, Delphi, PHP, C++, C#. Now I am trying my skills with Scala and JavaScript. Hope I\'ll switch shortly to this new fast growing stream."
};

module.exports = DbModel;
},{}],"/Users/romeo/Repository/react-app-blog-resume/app/routes.js":[function(require,module,exports){
var App = require('./App.js');
var React = require('react');
var InfoBlock = require('./InfoBlock.jsx');
var Education = require('./Education.jsx');
var Resume = require('./Resume.jsx');
var Contact = require('./Contact.jsx');
var NotFound = require('./NotFound.jsx');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    React.createElement(Route, {handler: App}, 
        React.createElement(DefaultRoute, {handler: InfoBlock}), 
        React.createElement(NotFoundRoute, {handler: NotFound}), 
        React.createElement(Route, {name: "profile", handler: InfoBlock}), 
        React.createElement(Route, {name: "education", handler: Education}), 
        React.createElement(Route, {name: "resume", handler: Resume}), 
        React.createElement(Route, {name: "contact", handler: Contact}), 
        React.createElement(Route, {name: "blog", handler: NotFound})
    )
);

module.exports = routes;
},{"./App.js":"/Users/romeo/Repository/react-app-blog-resume/app/App.js","./Contact.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Contact.jsx","./Education.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Education.jsx","./InfoBlock.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/InfoBlock.jsx","./NotFound.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/NotFound.jsx","./Resume.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Resume.jsx","react":"react","react-router":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/index.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/browserify/lib/_empty.js":[function(require,module,exports){

},{}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/global/window.js":[function(require,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Cancellation.js":[function(require,module,exports){
/**
 * Represents a cancellation caused by navigating away
 * before the previous transition has fully resolved.
 */
"use strict";

function Cancellation() {}

module.exports = Cancellation;
},{}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/History.js":[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;

var History = {

  /**
   * The current number of entries in the history.
   *
   * Note: This property is read-only.
   */
  length: 1,

  /**
   * Sends the browser back one entry in the history.
   */
  back: function back() {
    invariant(canUseDOM, 'Cannot use History.back without a DOM');

    // Do this first so that History.length will
    // be accurate in location change listeners.
    History.length -= 1;

    window.history.back();
  }

};

module.exports = History;
},{"react/lib/ExecutionEnvironment":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/ExecutionEnvironment.js","react/lib/invariant":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/invariant.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Match.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

/* jshint -W084 */
var PathUtils = require('./PathUtils');

function deepSearch(route, pathname, query) {
  // Check the subtree first to find the most deeply-nested match.
  var childRoutes = route.childRoutes;
  if (childRoutes) {
    var match, childRoute;
    for (var i = 0, len = childRoutes.length; i < len; ++i) {
      childRoute = childRoutes[i];

      if (childRoute.isDefault || childRoute.isNotFound) continue; // Check these in order later.

      if (match = deepSearch(childRoute, pathname, query)) {
        // A route in the subtree matched! Add this route and we're done.
        match.routes.unshift(route);
        return match;
      }
    }
  }

  // No child routes matched; try the default route.
  var defaultRoute = route.defaultRoute;
  if (defaultRoute && (params = PathUtils.extractParams(defaultRoute.path, pathname))) {
    return new Match(pathname, params, query, [route, defaultRoute]);
  } // Does the "not found" route match?
  var notFoundRoute = route.notFoundRoute;
  if (notFoundRoute && (params = PathUtils.extractParams(notFoundRoute.path, pathname))) {
    return new Match(pathname, params, query, [route, notFoundRoute]);
  } // Last attempt: check this route.
  var params = PathUtils.extractParams(route.path, pathname);
  if (params) {
    return new Match(pathname, params, query, [route]);
  }return null;
}

var Match = (function () {
  function Match(pathname, params, query, routes) {
    _classCallCheck(this, Match);

    this.pathname = pathname;
    this.params = params;
    this.query = query;
    this.routes = routes;
  }

  _createClass(Match, null, [{
    key: 'findMatch',

    /**
     * Attempts to match depth-first a route in the given route's
     * subtree against the given path and returns the match if it
     * succeeds, null if no match can be made.
     */
    value: function findMatch(routes, path) {
      var pathname = PathUtils.withoutQuery(path);
      var query = PathUtils.extractQuery(path);
      var match = null;

      for (var i = 0, len = routes.length; match == null && i < len; ++i) match = deepSearch(routes[i], pathname, query);

      return match;
    }
  }]);

  return Match;
})();

module.exports = Match;
},{"./PathUtils":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/PathUtils.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Navigation.js":[function(require,module,exports){
'use strict';

var PropTypes = require('./PropTypes');

/**
 * A mixin for components that modify the URL.
 *
 * Example:
 *
 *   var MyLink = React.createClass({
 *     mixins: [ Router.Navigation ],
 *     handleClick(event) {
 *       event.preventDefault();
 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
 *     },
 *     render() {
 *       return (
 *         <a onClick={this.handleClick}>Click me!</a>
 *       );
 *     }
 *   });
 */
var Navigation = {

  contextTypes: {
    router: PropTypes.router.isRequired
  },

  /**
   * Returns an absolute URL path created from the given route
   * name, URL parameters, and query values.
   */
  makePath: function makePath(to, params, query) {
    return this.context.router.makePath(to, params, query);
  },

  /**
   * Returns a string that may safely be used as the href of a
   * link to the route with the given name.
   */
  makeHref: function makeHref(to, params, query) {
    return this.context.router.makeHref(to, params, query);
  },

  /**
   * Transitions to the URL specified in the arguments by pushing
   * a new URL onto the history stack.
   */
  transitionTo: function transitionTo(to, params, query) {
    this.context.router.transitionTo(to, params, query);
  },

  /**
   * Transitions to the URL specified in the arguments by replacing
   * the current URL in the history stack.
   */
  replaceWith: function replaceWith(to, params, query) {
    this.context.router.replaceWith(to, params, query);
  },

  /**
   * Transitions to the previous URL.
   */
  goBack: function goBack() {
    return this.context.router.goBack();
  }

};

module.exports = Navigation;
},{"./PropTypes":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/PropTypes.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/PathUtils.js":[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var assign = require('object-assign');
var qs = require('qs');

var paramCompileMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
var paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
var paramInjectTrailingSlashMatcher = /\/\/\?|\/\?\/|\/\?/g;
var queryMatcher = /\?(.*)$/;

var _compiledPatterns = {};

function compilePattern(pattern) {
  if (!(pattern in _compiledPatterns)) {
    var paramNames = [];
    var source = pattern.replace(paramCompileMatcher, function (match, paramName) {
      if (paramName) {
        paramNames.push(paramName);
        return '([^/?#]+)';
      } else if (match === '*') {
        paramNames.push('splat');
        return '(.*?)';
      } else {
        return '\\' + match;
      }
    });

    _compiledPatterns[pattern] = {
      matcher: new RegExp('^' + source + '$', 'i'),
      paramNames: paramNames
    };
  }

  return _compiledPatterns[pattern];
}

var PathUtils = {

  /**
   * Returns true if the given path is absolute.
   */
  isAbsolute: function isAbsolute(path) {
    return path.charAt(0) === '/';
  },

  /**
   * Joins two URL paths together.
   */
  join: function join(a, b) {
    return a.replace(/\/*$/, '/') + b;
  },

  /**
   * Returns an array of the names of all parameters in the given pattern.
   */
  extractParamNames: function extractParamNames(pattern) {
    return compilePattern(pattern).paramNames;
  },

  /**
   * Extracts the portions of the given URL path that match the given pattern
   * and returns an object of param name => value pairs. Returns null if the
   * pattern does not match the given path.
   */
  extractParams: function extractParams(pattern, path) {
    var _compilePattern = compilePattern(pattern);

    var matcher = _compilePattern.matcher;
    var paramNames = _compilePattern.paramNames;

    var match = path.match(matcher);

    if (!match) {
      return null;
    }var params = {};

    paramNames.forEach(function (paramName, index) {
      params[paramName] = match[index + 1];
    });

    return params;
  },

  /**
   * Returns a version of the given route path with params interpolated. Throws
   * if there is a dynamic segment of the route path for which there is no param.
   */
  injectParams: function injectParams(pattern, params) {
    params = params || {};

    var splatIndex = 0;

    return pattern.replace(paramInjectMatcher, function (match, paramName) {
      paramName = paramName || 'splat';

      // If param is optional don't check for existence
      if (paramName.slice(-1) === '?') {
        paramName = paramName.slice(0, -1);

        if (params[paramName] == null) return '';
      } else {
        invariant(params[paramName] != null, 'Missing "%s" parameter for path "%s"', paramName, pattern);
      }

      var segment;
      if (paramName === 'splat' && Array.isArray(params[paramName])) {
        segment = params[paramName][splatIndex++];

        invariant(segment != null, 'Missing splat # %s for path "%s"', splatIndex, pattern);
      } else {
        segment = params[paramName];
      }

      return segment;
    }).replace(paramInjectTrailingSlashMatcher, '/');
  },

  /**
   * Returns an object that is the result of parsing any query string contained
   * in the given path, null if the path contains no query string.
   */
  extractQuery: function extractQuery(path) {
    var match = path.match(queryMatcher);
    return match && qs.parse(match[1]);
  },

  /**
   * Returns a version of the given path without the query string.
   */
  withoutQuery: function withoutQuery(path) {
    return path.replace(queryMatcher, '');
  },

  /**
   * Returns a version of the given path with the parameters in the given
   * query merged into the query string.
   */
  withQuery: function withQuery(path, query) {
    var existingQuery = PathUtils.extractQuery(path);

    if (existingQuery) query = query ? assign(existingQuery, query) : existingQuery;

    var queryString = qs.stringify(query, { arrayFormat: 'brackets' });

    if (queryString) {
      return PathUtils.withoutQuery(path) + '?' + queryString;
    }return PathUtils.withoutQuery(path);
  }

};

module.exports = PathUtils;
},{"object-assign":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/node_modules/object-assign/index.js","qs":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/node_modules/qs/index.js","react/lib/invariant":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/invariant.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/PropTypes.js":[function(require,module,exports){
'use strict';

var assign = require('react/lib/Object.assign');
var ReactPropTypes = require('react').PropTypes;
var Route = require('./Route');

var PropTypes = assign({}, ReactPropTypes, {

  /**
   * Indicates that a prop should be falsy.
   */
  falsy: function falsy(props, propName, componentName) {
    if (props[propName]) {
      return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
    }
  },

  /**
   * Indicates that a prop should be a Route object.
   */
  route: ReactPropTypes.instanceOf(Route),

  /**
   * Indicates that a prop should be a Router object.
   */
  //router: ReactPropTypes.instanceOf(Router) // TODO
  router: ReactPropTypes.func

});

module.exports = PropTypes;
},{"./Route":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Route.js","react":"react","react/lib/Object.assign":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/Object.assign.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Redirect.js":[function(require,module,exports){
/**
 * Encapsulates a redirect to the given route.
 */
"use strict";

function Redirect(to, params, query) {
  this.to = to;
  this.params = params;
  this.query = query;
}

module.exports = Redirect;
},{}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Route.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var assign = require('react/lib/Object.assign');
var invariant = require('react/lib/invariant');
var warning = require('react/lib/warning');
var PathUtils = require('./PathUtils');

var _currentRoute;

var Route = (function () {
  function Route(name, path, ignoreScrollBehavior, isDefault, isNotFound, onEnter, onLeave, handler) {
    _classCallCheck(this, Route);

    this.name = name;
    this.path = path;
    this.paramNames = PathUtils.extractParamNames(this.path);
    this.ignoreScrollBehavior = !!ignoreScrollBehavior;
    this.isDefault = !!isDefault;
    this.isNotFound = !!isNotFound;
    this.onEnter = onEnter;
    this.onLeave = onLeave;
    this.handler = handler;
  }

  _createClass(Route, [{
    key: 'appendChild',

    /**
     * Appends the given route to this route's child routes.
     */
    value: function appendChild(route) {
      invariant(route instanceof Route, 'route.appendChild must use a valid Route');

      if (!this.childRoutes) this.childRoutes = [];

      this.childRoutes.push(route);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var string = '<Route';

      if (this.name) string += ' name="' + this.name + '"';

      string += ' path="' + this.path + '">';

      return string;
    }
  }], [{
    key: 'createRoute',

    /**
     * Creates and returns a new route. Options may be a URL pathname string
     * with placeholders for named params or an object with any of the following
     * properties:
     *
     * - name                     The name of the route. This is used to lookup a
     *                            route relative to its parent route and should be
     *                            unique among all child routes of the same parent
     * - path                     A URL pathname string with optional placeholders
     *                            that specify the names of params to extract from
     *                            the URL when the path matches. Defaults to `/${name}`
     *                            when there is a name given, or the path of the parent
     *                            route, or /
     * - ignoreScrollBehavior     True to make this route (and all descendants) ignore
     *                            the scroll behavior of the router
     * - isDefault                True to make this route the default route among all
     *                            its siblings
     * - isNotFound               True to make this route the "not found" route among
     *                            all its siblings
     * - onEnter                  A transition hook that will be called when the
     *                            router is going to enter this route
     * - onLeave                  A transition hook that will be called when the
     *                            router is going to leave this route
     * - handler                  A React component that will be rendered when
     *                            this route is active
     * - parentRoute              The parent route to use for this route. This option
     *                            is automatically supplied when creating routes inside
     *                            the callback to another invocation of createRoute. You
     *                            only ever need to use this when declaring routes
     *                            independently of one another to manually piece together
     *                            the route hierarchy
     *
     * The callback may be used to structure your route hierarchy. Any call to
     * createRoute, createDefaultRoute, createNotFoundRoute, or createRedirect
     * inside the callback automatically uses this route as its parent.
     */
    value: function createRoute(options, callback) {
      options = options || {};

      if (typeof options === 'string') options = { path: options };

      var parentRoute = _currentRoute;

      if (parentRoute) {
        warning(options.parentRoute == null || options.parentRoute === parentRoute, 'You should not use parentRoute with createRoute inside another route\'s child callback; it is ignored');
      } else {
        parentRoute = options.parentRoute;
      }

      var name = options.name;
      var path = options.path || name;

      if (path && !(options.isDefault || options.isNotFound)) {
        if (PathUtils.isAbsolute(path)) {
          if (parentRoute) {
            invariant(path === parentRoute.path || parentRoute.paramNames.length === 0, 'You cannot nest path "%s" inside "%s"; the parent requires URL parameters', path, parentRoute.path);
          }
        } else if (parentRoute) {
          // Relative paths extend their parent.
          path = PathUtils.join(parentRoute.path, path);
        } else {
          path = '/' + path;
        }
      } else {
        path = parentRoute ? parentRoute.path : '/';
      }

      if (options.isNotFound && !/\*$/.test(path)) path += '*'; // Auto-append * to the path of not found routes.

      var route = new Route(name, path, options.ignoreScrollBehavior, options.isDefault, options.isNotFound, options.onEnter, options.onLeave, options.handler);

      if (parentRoute) {
        if (route.isDefault) {
          invariant(parentRoute.defaultRoute == null, '%s may not have more than one default route', parentRoute);

          parentRoute.defaultRoute = route;
        } else if (route.isNotFound) {
          invariant(parentRoute.notFoundRoute == null, '%s may not have more than one not found route', parentRoute);

          parentRoute.notFoundRoute = route;
        }

        parentRoute.appendChild(route);
      }

      // Any routes created in the callback
      // use this route as their parent.
      if (typeof callback === 'function') {
        var currentRoute = _currentRoute;
        _currentRoute = route;
        callback.call(route, route);
        _currentRoute = currentRoute;
      }

      return route;
    }
  }, {
    key: 'createDefaultRoute',

    /**
     * Creates and returns a route that is rendered when its parent matches
     * the current URL.
     */
    value: function createDefaultRoute(options) {
      return Route.createRoute(assign({}, options, { isDefault: true }));
    }
  }, {
    key: 'createNotFoundRoute',

    /**
     * Creates and returns a route that is rendered when its parent matches
     * the current URL but none of its siblings do.
     */
    value: function createNotFoundRoute(options) {
      return Route.createRoute(assign({}, options, { isNotFound: true }));
    }
  }, {
    key: 'createRedirect',

    /**
     * Creates and returns a route that automatically redirects the transition
     * to another route. In addition to the normal options to createRoute, this
     * function accepts the following options:
     *
     * - from         An alias for the `path` option. Defaults to *
     * - to           The path/route/route name to redirect to
     * - params       The params to use in the redirect URL. Defaults
     *                to using the current params
     * - query        The query to use in the redirect URL. Defaults
     *                to using the current query
     */
    value: function createRedirect(options) {
      return Route.createRoute(assign({}, options, {
        path: options.path || options.from || '*',
        onEnter: function onEnter(transition, params, query) {
          transition.redirect(options.to, options.params || params, options.query || query);
        }
      }));
    }
  }]);

  return Route;
})();

module.exports = Route;
},{"./PathUtils":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/PathUtils.js","react/lib/Object.assign":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/Object.assign.js","react/lib/invariant":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/invariant.js","react/lib/warning":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/warning.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/ScrollHistory.js":[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;
var getWindowScrollPosition = require('./getWindowScrollPosition');

function shouldUpdateScroll(state, prevState) {
  if (!prevState) {
    return true;
  } // Don't update scroll position when only the query has changed.
  if (state.pathname === prevState.pathname) {
    return false;
  }var routes = state.routes;
  var prevRoutes = prevState.routes;

  var sharedAncestorRoutes = routes.filter(function (route) {
    return prevRoutes.indexOf(route) !== -1;
  });

  return !sharedAncestorRoutes.some(function (route) {
    return route.ignoreScrollBehavior;
  });
}

/**
 * Provides the router with the ability to manage window scroll position
 * according to its scroll behavior.
 */
var ScrollHistory = {

  statics: {

    /**
     * Records curent scroll position as the last known position for the given URL path.
     */
    recordScrollPosition: function recordScrollPosition(path) {
      if (!this.scrollHistory) this.scrollHistory = {};

      this.scrollHistory[path] = getWindowScrollPosition();
    },

    /**
     * Returns the last known scroll position for the given URL path.
     */
    getScrollPosition: function getScrollPosition(path) {
      if (!this.scrollHistory) this.scrollHistory = {};

      return this.scrollHistory[path] || null;
    }

  },

  componentWillMount: function componentWillMount() {
    invariant(this.constructor.getScrollBehavior() == null || canUseDOM, 'Cannot use scroll behavior without a DOM');
  },

  componentDidMount: function componentDidMount() {
    this._updateScroll();
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    this._updateScroll(prevState);
  },

  _updateScroll: function _updateScroll(prevState) {
    if (!shouldUpdateScroll(this.state, prevState)) {
      return;
    }var scrollBehavior = this.constructor.getScrollBehavior();

    if (scrollBehavior) scrollBehavior.updateScrollPosition(this.constructor.getScrollPosition(this.state.path), this.state.action);
  }

};

module.exports = ScrollHistory;
},{"./getWindowScrollPosition":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/getWindowScrollPosition.js","react/lib/ExecutionEnvironment":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/ExecutionEnvironment.js","react/lib/invariant":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/invariant.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/State.js":[function(require,module,exports){
'use strict';

var PropTypes = require('./PropTypes');

/**
 * A mixin for components that need to know the path, routes, URL
 * params and query that are currently active.
 *
 * Example:
 *
 *   var AboutLink = React.createClass({
 *     mixins: [ Router.State ],
 *     render() {
 *       var className = this.props.className;
 *
 *       if (this.isActive('about'))
 *         className += ' is-active';
 *
 *       return React.DOM.a({ className: className }, this.props.children);
 *     }
 *   });
 */
var State = {

  contextTypes: {
    router: PropTypes.router.isRequired
  },

  /**
   * Returns the current URL path.
   */
  getPath: function getPath() {
    return this.context.router.getCurrentPath();
  },

  /**
   * Returns the current URL path without the query string.
   */
  getPathname: function getPathname() {
    return this.context.router.getCurrentPathname();
  },

  /**
   * Returns an object of the URL params that are currently active.
   */
  getParams: function getParams() {
    return this.context.router.getCurrentParams();
  },

  /**
   * Returns an object of the query params that are currently active.
   */
  getQuery: function getQuery() {
    return this.context.router.getCurrentQuery();
  },

  /**
   * Returns an array of the routes that are currently active.
   */
  getRoutes: function getRoutes() {
    return this.context.router.getCurrentRoutes();
  },

  /**
   * A helper method to determine if a given route, params, and query
   * are active.
   */
  isActive: function isActive(to, params, query) {
    return this.context.router.isActive(to, params, query);
  }

};

module.exports = State;
},{"./PropTypes":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/PropTypes.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Transition.js":[function(require,module,exports){
/* jshint -W058 */

'use strict';

var Cancellation = require('./Cancellation');
var Redirect = require('./Redirect');

/**
 * Encapsulates a transition to a given path.
 *
 * The willTransitionTo and willTransitionFrom handlers receive
 * an instance of this class as their first argument.
 */
function Transition(path, retry) {
  this.path = path;
  this.abortReason = null;
  // TODO: Change this to router.retryTransition(transition)
  this.retry = retry.bind(this);
}

Transition.prototype.abort = function (reason) {
  if (this.abortReason == null) this.abortReason = reason || 'ABORT';
};

Transition.prototype.redirect = function (to, params, query) {
  this.abort(new Redirect(to, params, query));
};

Transition.prototype.cancel = function () {
  this.abort(new Cancellation());
};

Transition.from = function (transition, routes, components, callback) {
  routes.reduce(function (callback, route, index) {
    return function (error) {
      if (error || transition.abortReason) {
        callback(error);
      } else if (route.onLeave) {
        try {
          route.onLeave(transition, components[index], callback);

          // If there is no callback in the argument list, call it automatically.
          if (route.onLeave.length < 3) callback();
        } catch (e) {
          callback(e);
        }
      } else {
        callback();
      }
    };
  }, callback)();
};

Transition.to = function (transition, routes, params, query, callback) {
  routes.reduceRight(function (callback, route) {
    return function (error) {
      if (error || transition.abortReason) {
        callback(error);
      } else if (route.onEnter) {
        try {
          route.onEnter(transition, params, query, callback);

          // If there is no callback in the argument list, call it automatically.
          if (route.onEnter.length < 4) callback();
        } catch (e) {
          callback(e);
        }
      } else {
        callback();
      }
    };
  }, callback)();
};

module.exports = Transition;
},{"./Cancellation":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Cancellation.js","./Redirect":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Redirect.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/actions/LocationActions.js":[function(require,module,exports){
/**
 * Actions that modify the URL.
 */
'use strict';

var LocationActions = {

  /**
   * Indicates a new location is being pushed to the history stack.
   */
  PUSH: 'push',

  /**
   * Indicates the current location should be replaced.
   */
  REPLACE: 'replace',

  /**
   * Indicates the most recent entry should be removed from the history stack.
   */
  POP: 'pop'

};

module.exports = LocationActions;
},{}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/behaviors/ImitateBrowserBehavior.js":[function(require,module,exports){
'use strict';

var LocationActions = require('../actions/LocationActions');

/**
 * A scroll behavior that attempts to imitate the default behavior
 * of modern browsers.
 */
var ImitateBrowserBehavior = {

  updateScrollPosition: function updateScrollPosition(position, actionType) {
    switch (actionType) {
      case LocationActions.PUSH:
      case LocationActions.REPLACE:
        window.scrollTo(0, 0);
        break;
      case LocationActions.POP:
        if (position) {
          window.scrollTo(position.x, position.y);
        } else {
          window.scrollTo(0, 0);
        }
        break;
    }
  }

};

module.exports = ImitateBrowserBehavior;
},{"../actions/LocationActions":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/actions/LocationActions.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/behaviors/ScrollToTopBehavior.js":[function(require,module,exports){
/**
 * A scroll behavior that always scrolls to the top of the page
 * after a transition.
 */
"use strict";

var ScrollToTopBehavior = {

  updateScrollPosition: function updateScrollPosition() {
    window.scrollTo(0, 0);
  }

};

module.exports = ScrollToTopBehavior;
},{}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/ContextWrapper.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

/**
 * This component is necessary to get around a context warning
 * present in React 0.13.0. It sovles this by providing a separation
 * between the "owner" and "parent" contexts.
 */

var React = require('react');

var ContextWrapper = (function (_React$Component) {
  function ContextWrapper() {
    _classCallCheck(this, ContextWrapper);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ContextWrapper, _React$Component);

  _createClass(ContextWrapper, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return ContextWrapper;
})(React.Component);

module.exports = ContextWrapper;
},{"react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/DefaultRoute.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');
var Route = require('./Route');

/**
 * A <DefaultRoute> component is a special kind of <Route> that
 * renders when its parent matches but none of its siblings do.
 * Only one such route may be used at any given level in the
 * route hierarchy.
 */

var DefaultRoute = (function (_Route) {
  function DefaultRoute() {
    _classCallCheck(this, DefaultRoute);

    if (_Route != null) {
      _Route.apply(this, arguments);
    }
  }

  _inherits(DefaultRoute, _Route);

  return DefaultRoute;
})(Route);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

DefaultRoute.propTypes = {
  name: PropTypes.string,
  path: PropTypes.falsy,
  children: PropTypes.falsy,
  handler: PropTypes.func.isRequired
};

DefaultRoute.defaultProps = {
  handler: RouteHandler
};

module.exports = DefaultRoute;
},{"../PropTypes":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/PropTypes.js","./Route":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/Route.js","./RouteHandler":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/RouteHandler.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/Link.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var React = require('react');
var assign = require('react/lib/Object.assign');
var PropTypes = require('../PropTypes');

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * <Link> components are used to create an <a> element that links to a route.
 * When that route is active, the link gets an "active" class name (or the
 * value of its `activeClassName` prop).
 *
 * For example, assuming you have the following route:
 *
 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
 *
 * You could use the following component to link to that route:
 *
 *   <Link to="showPost" params={{ postID: "123" }} />
 *
 * In addition to params, links may pass along query string parameters
 * using the `query` prop.
 *
 *   <Link to="showPost" params={{ postID: "123" }} query={{ show:true }}/>
 */

var Link = (function (_React$Component) {
  function Link() {
    _classCallCheck(this, Link);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Link, _React$Component);

  _createClass(Link, [{
    key: 'handleClick',
    value: function handleClick(event) {
      var allowTransition = true;
      var clickResult;

      if (this.props.onClick) clickResult = this.props.onClick(event);

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }if (clickResult === false || event.defaultPrevented === true) allowTransition = false;

      event.preventDefault();

      if (allowTransition) this.context.router.transitionTo(this.props.to, this.props.params, this.props.query);
    }
  }, {
    key: 'getHref',

    /**
     * Returns the value of the "href" attribute to use on the DOM element.
     */
    value: function getHref() {
      return this.context.router.makeHref(this.props.to, this.props.params, this.props.query);
    }
  }, {
    key: 'getClassName',

    /**
     * Returns the value of the "class" attribute to use on the DOM element, which contains
     * the value of the activeClassName property when this <Link> is active.
     */
    value: function getClassName() {
      var className = this.props.className;

      if (this.getActiveState()) className += ' ' + this.props.activeClassName;

      return className;
    }
  }, {
    key: 'getActiveState',
    value: function getActiveState() {
      return this.context.router.isActive(this.props.to, this.props.params, this.props.query);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = assign({}, this.props, {
        href: this.getHref(),
        className: this.getClassName(),
        onClick: this.handleClick.bind(this)
      });

      if (props.activeStyle && this.getActiveState()) props.style = props.activeStyle;

      return React.DOM.a(props, this.props.children);
    }
  }]);

  return Link;
})(React.Component);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

Link.contextTypes = {
  router: PropTypes.router.isRequired
};

Link.propTypes = {
  activeClassName: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.route]).isRequired,
  params: PropTypes.object,
  query: PropTypes.object,
  activeStyle: PropTypes.object,
  onClick: PropTypes.func
};

Link.defaultProps = {
  activeClassName: 'active',
  className: ''
};

module.exports = Link;
},{"../PropTypes":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/PropTypes.js","react":"react","react/lib/Object.assign":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/Object.assign.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/NotFoundRoute.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');
var Route = require('./Route');

/**
 * A <NotFoundRoute> is a special kind of <Route> that
 * renders when the beginning of its parent's path matches
 * but none of its siblings do, including any <DefaultRoute>.
 * Only one such route may be used at any given level in the
 * route hierarchy.
 */

var NotFoundRoute = (function (_Route) {
  function NotFoundRoute() {
    _classCallCheck(this, NotFoundRoute);

    if (_Route != null) {
      _Route.apply(this, arguments);
    }
  }

  _inherits(NotFoundRoute, _Route);

  return NotFoundRoute;
})(Route);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

NotFoundRoute.propTypes = {
  name: PropTypes.string,
  path: PropTypes.falsy,
  children: PropTypes.falsy,
  handler: PropTypes.func.isRequired
};

NotFoundRoute.defaultProps = {
  handler: RouteHandler
};

module.exports = NotFoundRoute;
},{"../PropTypes":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/PropTypes.js","./Route":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/Route.js","./RouteHandler":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/RouteHandler.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/Redirect.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var PropTypes = require('../PropTypes');
var Route = require('./Route');

/**
 * A <Redirect> component is a special kind of <Route> that always
 * redirects to another route when it matches.
 */

var Redirect = (function (_Route) {
  function Redirect() {
    _classCallCheck(this, Redirect);

    if (_Route != null) {
      _Route.apply(this, arguments);
    }
  }

  _inherits(Redirect, _Route);

  return Redirect;
})(Route);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

Redirect.propTypes = {
  path: PropTypes.string,
  from: PropTypes.string, // Alias for path.
  to: PropTypes.string,
  handler: PropTypes.falsy
};

// Redirects should not have a default handler
Redirect.defaultProps = {};

module.exports = Redirect;
},{"../PropTypes":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/PropTypes.js","./Route":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/Route.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/Route.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var React = require('react');
var invariant = require('react/lib/invariant');
var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');

/**
 * <Route> components specify components that are rendered to the page when the
 * URL matches a given pattern.
 *
 * Routes are arranged in a nested tree structure. When a new URL is requested,
 * the tree is searched depth-first to find a route whose path matches the URL.
 * When one is found, all routes in the tree that lead to it are considered
 * "active" and their components are rendered into the DOM, nested in the same
 * order as they are in the tree.
 *
 * The preferred way to configure a router is using JSX. The XML-like syntax is
 * a great way to visualize how routes are laid out in an application.
 *
 *   var routes = [
 *     <Route handler={App}>
 *       <Route name="login" handler={Login}/>
 *       <Route name="logout" handler={Logout}/>
 *       <Route name="about" handler={About}/>
 *     </Route>
 *   ];
 *   
 *   Router.run(routes, function (Handler) {
 *     React.render(<Handler/>, document.body);
 *   });
 *
 * Handlers for Route components that contain children can render their active
 * child route using a <RouteHandler> element.
 *
 *   var App = React.createClass({
 *     render: function () {
 *       return (
 *         <div class="application">
 *           <RouteHandler/>
 *         </div>
 *       );
 *     }
 *   });
 *
 * If no handler is provided for the route, it will render a matched child route.
 */

var Route = (function (_React$Component) {
  function Route() {
    _classCallCheck(this, Route);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Route, _React$Component);

  _createClass(Route, [{
    key: 'render',
    value: function render() {
      invariant(false, '%s elements are for router configuration only and should not be rendered', this.constructor.name);
    }
  }]);

  return Route;
})(React.Component);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

Route.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  handler: PropTypes.func,
  ignoreScrollBehavior: PropTypes.bool
};

Route.defaultProps = {
  handler: RouteHandler
};

module.exports = Route;
},{"../PropTypes":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/PropTypes.js","./RouteHandler":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/RouteHandler.js","react":"react","react/lib/invariant":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/invariant.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/RouteHandler.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var React = require('react');
var ContextWrapper = require('./ContextWrapper');
var assign = require('react/lib/Object.assign');
var PropTypes = require('../PropTypes');

var REF_NAME = '__routeHandler__';

/**
 * A <RouteHandler> component renders the active child route handler
 * when routes are nested.
 */

var RouteHandler = (function (_React$Component) {
  function RouteHandler() {
    _classCallCheck(this, RouteHandler);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(RouteHandler, _React$Component);

  _createClass(RouteHandler, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        routeDepth: this.context.routeDepth + 1
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._updateRouteComponent(this.refs[REF_NAME]);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._updateRouteComponent(this.refs[REF_NAME]);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._updateRouteComponent(null);
    }
  }, {
    key: '_updateRouteComponent',
    value: function _updateRouteComponent(component) {
      this.context.router.setRouteComponentAtDepth(this.getRouteDepth(), component);
    }
  }, {
    key: 'getRouteDepth',
    value: function getRouteDepth() {
      return this.context.routeDepth;
    }
  }, {
    key: 'createChildRouteHandler',
    value: function createChildRouteHandler(props) {
      var route = this.context.router.getRouteAtDepth(this.getRouteDepth());

      if (route == null) {
        return null;
      }var childProps = assign({}, props || this.props, {
        ref: REF_NAME,
        params: this.context.router.getCurrentParams(),
        query: this.context.router.getCurrentQuery()
      });

      return React.createElement(route.handler, childProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var handler = this.createChildRouteHandler();
      // <script/> for things like <CSSTransitionGroup/> that don't like null
      return handler ? React.createElement(
        ContextWrapper,
        null,
        handler
      ) : React.createElement('script', null);
    }
  }]);

  return RouteHandler;
})(React.Component);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

RouteHandler.contextTypes = {
  routeDepth: PropTypes.number.isRequired,
  router: PropTypes.router.isRequired
};

RouteHandler.childContextTypes = {
  routeDepth: PropTypes.number.isRequired
};

module.exports = RouteHandler;
},{"../PropTypes":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/PropTypes.js","./ContextWrapper":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/ContextWrapper.js","react":"react","react/lib/Object.assign":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/Object.assign.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/createRouter.js":[function(require,module,exports){
(function (process){
/* jshint -W058 */
'use strict';

var React = require('react');
var warning = require('react/lib/warning');
var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;
var LocationActions = require('./actions/LocationActions');
var ImitateBrowserBehavior = require('./behaviors/ImitateBrowserBehavior');
var HashLocation = require('./locations/HashLocation');
var HistoryLocation = require('./locations/HistoryLocation');
var RefreshLocation = require('./locations/RefreshLocation');
var StaticLocation = require('./locations/StaticLocation');
var ScrollHistory = require('./ScrollHistory');
var createRoutesFromReactChildren = require('./createRoutesFromReactChildren');
var isReactChildren = require('./isReactChildren');
var Transition = require('./Transition');
var PropTypes = require('./PropTypes');
var Redirect = require('./Redirect');
var History = require('./History');
var Cancellation = require('./Cancellation');
var Match = require('./Match');
var Route = require('./Route');
var supportsHistory = require('./supportsHistory');
var PathUtils = require('./PathUtils');

/**
 * The default location for new routers.
 */
var DEFAULT_LOCATION = canUseDOM ? HashLocation : '/';

/**
 * The default scroll behavior for new routers.
 */
var DEFAULT_SCROLL_BEHAVIOR = canUseDOM ? ImitateBrowserBehavior : null;

function hasProperties(object, properties) {
  for (var propertyName in properties) if (properties.hasOwnProperty(propertyName) && object[propertyName] !== properties[propertyName]) {
    return false;
  }return true;
}

function hasMatch(routes, route, prevParams, nextParams, prevQuery, nextQuery) {
  return routes.some(function (r) {
    if (r !== route) return false;

    var paramNames = route.paramNames;
    var paramName;

    // Ensure that all params the route cares about did not change.
    for (var i = 0, len = paramNames.length; i < len; ++i) {
      paramName = paramNames[i];

      if (nextParams[paramName] !== prevParams[paramName]) return false;
    }

    // Ensure the query hasn't changed.
    return hasProperties(prevQuery, nextQuery) && hasProperties(nextQuery, prevQuery);
  });
}

function addRoutesToNamedRoutes(routes, namedRoutes) {
  var route;
  for (var i = 0, len = routes.length; i < len; ++i) {
    route = routes[i];

    if (route.name) {
      invariant(namedRoutes[route.name] == null, 'You may not have more than one route named "%s"', route.name);

      namedRoutes[route.name] = route;
    }

    if (route.childRoutes) addRoutesToNamedRoutes(route.childRoutes, namedRoutes);
  }
}

function routeIsActive(activeRoutes, routeName) {
  return activeRoutes.some(function (route) {
    return route.name === routeName;
  });
}

function paramsAreActive(activeParams, params) {
  for (var property in params) if (String(activeParams[property]) !== String(params[property])) {
    return false;
  }return true;
}

function queryIsActive(activeQuery, query) {
  for (var property in query) if (String(activeQuery[property]) !== String(query[property])) {
    return false;
  }return true;
}

/**
 * Creates and returns a new router using the given options. A router
 * is a ReactComponent class that knows how to react to changes in the
 * URL and keep the contents of the page in sync.
 *
 * Options may be any of the following:
 *
 * - routes           (required) The route config
 * - location         The location to use. Defaults to HashLocation when
 *                    the DOM is available, "/" otherwise
 * - scrollBehavior   The scroll behavior to use. Defaults to ImitateBrowserBehavior
 *                    when the DOM is available, null otherwise
 * - onError          A function that is used to handle errors
 * - onAbort          A function that is used to handle aborted transitions
 *
 * When rendering in a server-side environment, the location should simply
 * be the URL path that was used in the request, including the query string.
 */
function createRouter(options) {
  options = options || {};

  if (isReactChildren(options)) options = { routes: options };

  var mountedComponents = [];
  var location = options.location || DEFAULT_LOCATION;
  var scrollBehavior = options.scrollBehavior || DEFAULT_SCROLL_BEHAVIOR;
  var state = {};
  var nextState = {};
  var pendingTransition = null;
  var dispatchHandler = null;

  if (typeof location === 'string') location = new StaticLocation(location);

  if (location instanceof StaticLocation) {
    warning(!canUseDOM || process.env.NODE_ENV === 'test', 'You should not use a static location in a DOM environment because ' + 'the router will not be kept in sync with the current URL');
  } else {
    invariant(canUseDOM || location.needsDOM === false, 'You cannot use %s without a DOM', location);
  }

  // Automatically fall back to full page refreshes in
  // browsers that don't support the HTML history API.
  if (location === HistoryLocation && !supportsHistory()) location = RefreshLocation;

  var Router = React.createClass({

    displayName: 'Router',

    statics: {

      isRunning: false,

      cancelPendingTransition: function cancelPendingTransition() {
        if (pendingTransition) {
          pendingTransition.cancel();
          pendingTransition = null;
        }
      },

      clearAllRoutes: function clearAllRoutes() {
        Router.cancelPendingTransition();
        Router.namedRoutes = {};
        Router.routes = [];
      },

      /**
       * Adds routes to this router from the given children object (see ReactChildren).
       */
      addRoutes: function addRoutes(routes) {
        if (isReactChildren(routes)) routes = createRoutesFromReactChildren(routes);

        addRoutesToNamedRoutes(routes, Router.namedRoutes);

        Router.routes.push.apply(Router.routes, routes);
      },

      /**
       * Replaces routes of this router from the given children object (see ReactChildren).
       */
      replaceRoutes: function replaceRoutes(routes) {
        Router.clearAllRoutes();
        Router.addRoutes(routes);
        Router.refresh();
      },

      /**
       * Performs a match of the given path against this router and returns an object
       * with the { routes, params, pathname, query } that match. Returns null if no
       * match can be made.
       */
      match: function match(path) {
        return Match.findMatch(Router.routes, path);
      },

      /**
       * Returns an absolute URL path created from the given route
       * name, URL parameters, and query.
       */
      makePath: function makePath(to, params, query) {
        var path;
        if (PathUtils.isAbsolute(to)) {
          path = to;
        } else {
          var route = to instanceof Route ? to : Router.namedRoutes[to];

          invariant(route instanceof Route, 'Cannot find a route named "%s"', to);

          path = route.path;
        }

        return PathUtils.withQuery(PathUtils.injectParams(path, params), query);
      },

      /**
       * Returns a string that may safely be used as the href of a link
       * to the route with the given name, URL parameters, and query.
       */
      makeHref: function makeHref(to, params, query) {
        var path = Router.makePath(to, params, query);
        return location === HashLocation ? '#' + path : path;
      },

      /**
       * Transitions to the URL specified in the arguments by pushing
       * a new URL onto the history stack.
       */
      transitionTo: function transitionTo(to, params, query) {
        var path = Router.makePath(to, params, query);

        if (pendingTransition) {
          // Replace so pending location does not stay in history.
          location.replace(path);
        } else {
          location.push(path);
        }
      },

      /**
       * Transitions to the URL specified in the arguments by replacing
       * the current URL in the history stack.
       */
      replaceWith: function replaceWith(to, params, query) {
        location.replace(Router.makePath(to, params, query));
      },

      /**
       * Transitions to the previous URL if one is available. Returns true if the
       * router was able to go back, false otherwise.
       *
       * Note: The router only tracks history entries in your application, not the
       * current browser session, so you can safely call this function without guarding
       * against sending the user back to some other site. However, when using
       * RefreshLocation (which is the fallback for HistoryLocation in browsers that
       * don't support HTML5 history) this method will *always* send the client back
       * because we cannot reliably track history length.
       */
      goBack: function goBack() {
        if (History.length > 1 || location === RefreshLocation) {
          location.pop();
          return true;
        }

        warning(false, 'goBack() was ignored because there is no router history');

        return false;
      },

      handleAbort: options.onAbort || function (abortReason) {
        if (location instanceof StaticLocation) throw new Error('Unhandled aborted transition! Reason: ' + abortReason);

        if (abortReason instanceof Cancellation) {
          return;
        } else if (abortReason instanceof Redirect) {
          location.replace(Router.makePath(abortReason.to, abortReason.params, abortReason.query));
        } else {
          location.pop();
        }
      },

      handleError: options.onError || function (error) {
        // Throw so we don't silently swallow async errors.
        throw error; // This error probably originated in a transition hook.
      },

      handleLocationChange: function handleLocationChange(change) {
        Router.dispatch(change.path, change.type);
      },

      /**
       * Performs a transition to the given path and calls callback(error, abortReason)
       * when the transition is finished. If both arguments are null the router's state
       * was updated. Otherwise the transition did not complete.
       *
       * In a transition, a router first determines which routes are involved by beginning
       * with the current route, up the route tree to the first parent route that is shared
       * with the destination route, and back down the tree to the destination route. The
       * willTransitionFrom hook is invoked on all route handlers we're transitioning away
       * from, in reverse nesting order. Likewise, the willTransitionTo hook is invoked on
       * all route handlers we're transitioning to.
       *
       * Both willTransitionFrom and willTransitionTo hooks may either abort or redirect the
       * transition. To resolve asynchronously, they may use the callback argument. If no
       * hooks wait, the transition is fully synchronous.
       */
      dispatch: function dispatch(path, action) {
        Router.cancelPendingTransition();

        var prevPath = state.path;
        var isRefreshing = action == null;

        if (prevPath === path && !isRefreshing) {
          return;
        } // Nothing to do!

        // Record the scroll position as early as possible to
        // get it before browsers try update it automatically.
        if (prevPath && action === LocationActions.PUSH) Router.recordScrollPosition(prevPath);

        var match = Router.match(path);

        warning(match != null, 'No route matches path "%s". Make sure you have <Route path="%s"> somewhere in your routes', path, path);

        if (match == null) match = {};

        var prevRoutes = state.routes || [];
        var prevParams = state.params || {};
        var prevQuery = state.query || {};

        var nextRoutes = match.routes || [];
        var nextParams = match.params || {};
        var nextQuery = match.query || {};

        var fromRoutes, toRoutes;
        if (prevRoutes.length) {
          fromRoutes = prevRoutes.filter(function (route) {
            return !hasMatch(nextRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
          });

          toRoutes = nextRoutes.filter(function (route) {
            return !hasMatch(prevRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
          });
        } else {
          fromRoutes = [];
          toRoutes = nextRoutes;
        }

        var transition = new Transition(path, Router.replaceWith.bind(Router, path));
        pendingTransition = transition;

        var fromComponents = mountedComponents.slice(prevRoutes.length - fromRoutes.length);

        Transition.from(transition, fromRoutes, fromComponents, function (error) {
          if (error || transition.abortReason) return dispatchHandler.call(Router, error, transition); // No need to continue.

          Transition.to(transition, toRoutes, nextParams, nextQuery, function (error) {
            dispatchHandler.call(Router, error, transition, {
              path: path,
              action: action,
              pathname: match.pathname,
              routes: nextRoutes,
              params: nextParams,
              query: nextQuery
            });
          });
        });
      },

      /**
       * Starts this router and calls callback(router, state) when the route changes.
       *
       * If the router's location is static (i.e. a URL path in a server environment)
       * the callback is called only once. Otherwise, the location should be one of the
       * Router.*Location objects (e.g. Router.HashLocation or Router.HistoryLocation).
       */
      run: function run(callback) {
        invariant(!Router.isRunning, 'Router is already running');

        dispatchHandler = function (error, transition, newState) {
          if (error) Router.handleError(error);

          if (pendingTransition !== transition) return;

          pendingTransition = null;

          if (transition.abortReason) {
            Router.handleAbort(transition.abortReason);
          } else {
            callback.call(Router, Router, nextState = newState);
          }
        };

        if (!(location instanceof StaticLocation)) {
          if (location.addChangeListener) location.addChangeListener(Router.handleLocationChange);

          Router.isRunning = true;
        }

        // Bootstrap using the current path.
        Router.refresh();
      },

      refresh: function refresh() {
        Router.dispatch(location.getCurrentPath(), null);
      },

      stop: function stop() {
        Router.cancelPendingTransition();

        if (location.removeChangeListener) location.removeChangeListener(Router.handleLocationChange);

        Router.isRunning = false;
      },

      getLocation: function getLocation() {
        return location;
      },

      getScrollBehavior: function getScrollBehavior() {
        return scrollBehavior;
      },

      getRouteAtDepth: function getRouteAtDepth(routeDepth) {
        var routes = state.routes;
        return routes && routes[routeDepth];
      },

      setRouteComponentAtDepth: function setRouteComponentAtDepth(routeDepth, component) {
        mountedComponents[routeDepth] = component;
      },

      /**
       * Returns the current URL path + query string.
       */
      getCurrentPath: function getCurrentPath() {
        return state.path;
      },

      /**
       * Returns the current URL path without the query string.
       */
      getCurrentPathname: function getCurrentPathname() {
        return state.pathname;
      },

      /**
       * Returns an object of the currently active URL parameters.
       */
      getCurrentParams: function getCurrentParams() {
        return state.params;
      },

      /**
       * Returns an object of the currently active query parameters.
       */
      getCurrentQuery: function getCurrentQuery() {
        return state.query;
      },

      /**
       * Returns an array of the currently active routes.
       */
      getCurrentRoutes: function getCurrentRoutes() {
        return state.routes;
      },

      /**
       * Returns true if the given route, params, and query are active.
       */
      isActive: function isActive(to, params, query) {
        if (PathUtils.isAbsolute(to)) {
          return to === state.path;
        }return routeIsActive(state.routes, to) && paramsAreActive(state.params, params) && (query == null || queryIsActive(state.query, query));
      }

    },

    mixins: [ScrollHistory],

    propTypes: {
      children: PropTypes.falsy
    },

    childContextTypes: {
      routeDepth: PropTypes.number.isRequired,
      router: PropTypes.router.isRequired
    },

    getChildContext: function getChildContext() {
      return {
        routeDepth: 1,
        router: Router
      };
    },

    getInitialState: function getInitialState() {
      return state = nextState;
    },

    componentWillReceiveProps: function componentWillReceiveProps() {
      this.setState(state = nextState);
    },

    componentWillUnmount: function componentWillUnmount() {
      Router.stop();
    },

    render: function render() {
      var route = Router.getRouteAtDepth(0);
      return route ? React.createElement(route.handler, this.props) : null;
    }

  });

  Router.clearAllRoutes();

  if (options.routes) Router.addRoutes(options.routes);

  return Router;
}

module.exports = createRouter;
}).call(this,require('_process'))

},{"./Cancellation":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Cancellation.js","./History":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/History.js","./Match":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Match.js","./PathUtils":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/PathUtils.js","./PropTypes":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/PropTypes.js","./Redirect":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Redirect.js","./Route":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Route.js","./ScrollHistory":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/ScrollHistory.js","./Transition":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Transition.js","./actions/LocationActions":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/actions/LocationActions.js","./behaviors/ImitateBrowserBehavior":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/behaviors/ImitateBrowserBehavior.js","./createRoutesFromReactChildren":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/createRoutesFromReactChildren.js","./isReactChildren":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/isReactChildren.js","./locations/HashLocation":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/locations/HashLocation.js","./locations/HistoryLocation":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/locations/HistoryLocation.js","./locations/RefreshLocation":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/locations/RefreshLocation.js","./locations/StaticLocation":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/locations/StaticLocation.js","./supportsHistory":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/supportsHistory.js","_process":"/Users/romeo/Repository/react-app-blog-resume/node_modules/browserify/node_modules/process/browser.js","react":"react","react/lib/ExecutionEnvironment":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/ExecutionEnvironment.js","react/lib/invariant":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/invariant.js","react/lib/warning":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/warning.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/createRoutesFromReactChildren.js":[function(require,module,exports){
/* jshint -W084 */
'use strict';

var React = require('react');
var assign = require('react/lib/Object.assign');
var warning = require('react/lib/warning');
var DefaultRoute = require('./components/DefaultRoute');
var NotFoundRoute = require('./components/NotFoundRoute');
var Redirect = require('./components/Redirect');
var Route = require('./Route');

function checkPropTypes(componentName, propTypes, props) {
  componentName = componentName || 'UnknownComponent';

  for (var propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      var error = propTypes[propName](props, propName, componentName);

      if (error instanceof Error) warning(false, error.message);
    }
  }
}

function createRouteOptions(props) {
  var options = assign({}, props);
  var handler = options.handler;

  if (handler) {
    options.onEnter = handler.willTransitionTo;
    options.onLeave = handler.willTransitionFrom;
  }

  return options;
}

function createRouteFromReactElement(element) {
  if (!React.isValidElement(element)) {
    return;
  }var type = element.type;
  var props = assign({}, type.defaultProps, element.props);

  if (type.propTypes) checkPropTypes(type.displayName, type.propTypes, props);

  if (type === DefaultRoute) {
    return Route.createDefaultRoute(createRouteOptions(props));
  }if (type === NotFoundRoute) {
    return Route.createNotFoundRoute(createRouteOptions(props));
  }if (type === Redirect) {
    return Route.createRedirect(createRouteOptions(props));
  }return Route.createRoute(createRouteOptions(props), function () {
    if (props.children) createRoutesFromReactChildren(props.children);
  });
}

/**
 * Creates and returns an array of routes created from the given
 * ReactChildren, all of which should be one of <Route>, <DefaultRoute>,
 * <NotFoundRoute>, or <Redirect>, e.g.:
 *
 *   var { createRoutesFromReactChildren, Route, Redirect } = require('react-router');
 *
 *   var routes = createRoutesFromReactChildren(
 *     <Route path="/" handler={App}>
 *       <Route name="user" path="/user/:userId" handler={User}>
 *         <Route name="task" path="tasks/:taskId" handler={Task}/>
 *         <Redirect from="todos/:taskId" to="task"/>
 *       </Route>
 *     </Route>
 *   );
 */
function createRoutesFromReactChildren(children) {
  var routes = [];

  React.Children.forEach(children, function (child) {
    if (child = createRouteFromReactElement(child)) routes.push(child);
  });

  return routes;
}

module.exports = createRoutesFromReactChildren;
},{"./Route":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Route.js","./components/DefaultRoute":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/DefaultRoute.js","./components/NotFoundRoute":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/NotFoundRoute.js","./components/Redirect":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/Redirect.js","react":"react","react/lib/Object.assign":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/Object.assign.js","react/lib/warning":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/warning.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/getWindowScrollPosition.js":[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;

/**
 * Returns the current scroll position of the window as { x, y }.
 */
function getWindowScrollPosition() {
  invariant(canUseDOM, 'Cannot get current scroll position without a DOM');

  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop
  };
}

module.exports = getWindowScrollPosition;
},{"react/lib/ExecutionEnvironment":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/ExecutionEnvironment.js","react/lib/invariant":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/invariant.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/index.js":[function(require,module,exports){
'use strict';

exports.DefaultRoute = require('./components/DefaultRoute');
exports.Link = require('./components/Link');
exports.NotFoundRoute = require('./components/NotFoundRoute');
exports.Redirect = require('./components/Redirect');
exports.Route = require('./components/Route');
exports.ActiveHandler = require('./components/RouteHandler');
exports.RouteHandler = exports.ActiveHandler;

exports.HashLocation = require('./locations/HashLocation');
exports.HistoryLocation = require('./locations/HistoryLocation');
exports.RefreshLocation = require('./locations/RefreshLocation');
exports.StaticLocation = require('./locations/StaticLocation');
exports.TestLocation = require('./locations/TestLocation');

exports.ImitateBrowserBehavior = require('./behaviors/ImitateBrowserBehavior');
exports.ScrollToTopBehavior = require('./behaviors/ScrollToTopBehavior');

exports.History = require('./History');
exports.Navigation = require('./Navigation');
exports.State = require('./State');

exports.createRoute = require('./Route').createRoute;
exports.createDefaultRoute = require('./Route').createDefaultRoute;
exports.createNotFoundRoute = require('./Route').createNotFoundRoute;
exports.createRedirect = require('./Route').createRedirect;
exports.createRoutesFromReactChildren = require('./createRoutesFromReactChildren');

exports.create = require('./createRouter');
exports.run = require('./runRouter');
},{"./History":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/History.js","./Navigation":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Navigation.js","./Route":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Route.js","./State":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/State.js","./behaviors/ImitateBrowserBehavior":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/behaviors/ImitateBrowserBehavior.js","./behaviors/ScrollToTopBehavior":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/behaviors/ScrollToTopBehavior.js","./components/DefaultRoute":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/DefaultRoute.js","./components/Link":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/Link.js","./components/NotFoundRoute":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/NotFoundRoute.js","./components/Redirect":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/Redirect.js","./components/Route":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/Route.js","./components/RouteHandler":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/components/RouteHandler.js","./createRouter":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/createRouter.js","./createRoutesFromReactChildren":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/createRoutesFromReactChildren.js","./locations/HashLocation":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/locations/HashLocation.js","./locations/HistoryLocation":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/locations/HistoryLocation.js","./locations/RefreshLocation":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/locations/RefreshLocation.js","./locations/StaticLocation":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/locations/StaticLocation.js","./locations/TestLocation":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/locations/TestLocation.js","./runRouter":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/runRouter.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/isReactChildren.js":[function(require,module,exports){
'use strict';

var React = require('react');

function isValidChild(object) {
  return object == null || React.isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

module.exports = isReactChildren;
},{"react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/locations/HashLocation.js":[function(require,module,exports){
'use strict';

var LocationActions = require('../actions/LocationActions');
var History = require('../History');

var _listeners = [];
var _isListening = false;
var _actionType;

function notifyChange(type) {
  if (type === LocationActions.PUSH) History.length += 1;

  var change = {
    path: HashLocation.getCurrentPath(),
    type: type
  };

  _listeners.forEach(function (listener) {
    listener.call(HashLocation, change);
  });
}

function ensureSlash() {
  var path = HashLocation.getCurrentPath();

  if (path.charAt(0) === '/') {
    return true;
  }HashLocation.replace('/' + path);

  return false;
}

function onHashChange() {
  if (ensureSlash()) {
    // If we don't have an _actionType then all we know is the hash
    // changed. It was probably caused by the user clicking the Back
    // button, but may have also been the Forward button or manual
    // manipulation. So just guess 'pop'.
    var curActionType = _actionType;
    _actionType = null;
    notifyChange(curActionType || LocationActions.POP);
  }
}

/**
 * A Location that uses `window.location.hash`.
 */
var HashLocation = {

  addChangeListener: function addChangeListener(listener) {
    _listeners.push(listener);

    // Do this BEFORE listening for hashchange.
    ensureSlash();

    if (!_isListening) {
      if (window.addEventListener) {
        window.addEventListener('hashchange', onHashChange, false);
      } else {
        window.attachEvent('onhashchange', onHashChange);
      }

      _isListening = true;
    }
  },

  removeChangeListener: function removeChangeListener(listener) {
    _listeners = _listeners.filter(function (l) {
      return l !== listener;
    });

    if (_listeners.length === 0) {
      if (window.removeEventListener) {
        window.removeEventListener('hashchange', onHashChange, false);
      } else {
        window.removeEvent('onhashchange', onHashChange);
      }

      _isListening = false;
    }
  },

  push: function push(path) {
    _actionType = LocationActions.PUSH;
    window.location.hash = path;
  },

  replace: function replace(path) {
    _actionType = LocationActions.REPLACE;
    window.location.replace(window.location.pathname + window.location.search + '#' + path);
  },

  pop: function pop() {
    _actionType = LocationActions.POP;
    History.back();
  },

  getCurrentPath: function getCurrentPath() {
    return decodeURI(
    // We can't use window.location.hash here because it's not
    // consistent across browsers - Firefox will pre-decode it!
    window.location.href.split('#')[1] || '');
  },

  toString: function toString() {
    return '<HashLocation>';
  }

};

module.exports = HashLocation;
},{"../History":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/History.js","../actions/LocationActions":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/actions/LocationActions.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/locations/HistoryLocation.js":[function(require,module,exports){
'use strict';

var LocationActions = require('../actions/LocationActions');
var History = require('../History');

var _listeners = [];
var _isListening = false;

function notifyChange(type) {
  var change = {
    path: HistoryLocation.getCurrentPath(),
    type: type
  };

  _listeners.forEach(function (listener) {
    listener.call(HistoryLocation, change);
  });
}

function onPopState(event) {
  if (event.state === undefined) {
    return;
  } // Ignore extraneous popstate events in WebKit.

  notifyChange(LocationActions.POP);
}

/**
 * A Location that uses HTML5 history.
 */
var HistoryLocation = {

  addChangeListener: function addChangeListener(listener) {
    _listeners.push(listener);

    if (!_isListening) {
      if (window.addEventListener) {
        window.addEventListener('popstate', onPopState, false);
      } else {
        window.attachEvent('onpopstate', onPopState);
      }

      _isListening = true;
    }
  },

  removeChangeListener: function removeChangeListener(listener) {
    _listeners = _listeners.filter(function (l) {
      return l !== listener;
    });

    if (_listeners.length === 0) {
      if (window.addEventListener) {
        window.removeEventListener('popstate', onPopState, false);
      } else {
        window.removeEvent('onpopstate', onPopState);
      }

      _isListening = false;
    }
  },

  push: function push(path) {
    window.history.pushState({ path: path }, '', path);
    History.length += 1;
    notifyChange(LocationActions.PUSH);
  },

  replace: function replace(path) {
    window.history.replaceState({ path: path }, '', path);
    notifyChange(LocationActions.REPLACE);
  },

  pop: History.back,

  getCurrentPath: function getCurrentPath() {
    return decodeURI(window.location.pathname + window.location.search);
  },

  toString: function toString() {
    return '<HistoryLocation>';
  }

};

module.exports = HistoryLocation;
},{"../History":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/History.js","../actions/LocationActions":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/actions/LocationActions.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/locations/RefreshLocation.js":[function(require,module,exports){
'use strict';

var HistoryLocation = require('./HistoryLocation');
var History = require('../History');

/**
 * A Location that uses full page refreshes. This is used as
 * the fallback for HistoryLocation in browsers that do not
 * support the HTML5 history API.
 */
var RefreshLocation = {

  push: function push(path) {
    window.location = path;
  },

  replace: function replace(path) {
    window.location.replace(path);
  },

  pop: History.back,

  getCurrentPath: HistoryLocation.getCurrentPath,

  toString: function toString() {
    return '<RefreshLocation>';
  }

};

module.exports = RefreshLocation;
},{"../History":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/History.js","./HistoryLocation":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/locations/HistoryLocation.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/locations/StaticLocation.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var invariant = require('react/lib/invariant');

function throwCannotModify() {
  invariant(false, 'You cannot modify a static location');
}

/**
 * A location that only ever contains a single path. Useful in
 * stateless environments like servers where there is no path history,
 * only the path that was used in the request.
 */

var StaticLocation = (function () {
  function StaticLocation(path) {
    _classCallCheck(this, StaticLocation);

    this.path = path;
  }

  _createClass(StaticLocation, [{
    key: 'getCurrentPath',
    value: function getCurrentPath() {
      return this.path;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '<StaticLocation path="' + this.path + '">';
    }
  }]);

  return StaticLocation;
})();

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

StaticLocation.prototype.push = throwCannotModify;
StaticLocation.prototype.replace = throwCannotModify;
StaticLocation.prototype.pop = throwCannotModify;

module.exports = StaticLocation;
},{"react/lib/invariant":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/invariant.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/locations/TestLocation.js":[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var invariant = require('react/lib/invariant');
var LocationActions = require('../actions/LocationActions');
var History = require('../History');

/**
 * A location that is convenient for testing and does not require a DOM.
 */

var TestLocation = (function () {
  function TestLocation(history) {
    _classCallCheck(this, TestLocation);

    this.history = history || [];
    this.listeners = [];
    this._updateHistoryLength();
  }

  _createClass(TestLocation, [{
    key: 'needsDOM',
    get: function () {
      return false;
    }
  }, {
    key: '_updateHistoryLength',
    value: function _updateHistoryLength() {
      History.length = this.history.length;
    }
  }, {
    key: '_notifyChange',
    value: function _notifyChange(type) {
      var change = {
        path: this.getCurrentPath(),
        type: type
      };

      for (var i = 0, len = this.listeners.length; i < len; ++i) this.listeners[i].call(this, change);
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(listener) {
      this.listeners.push(listener);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(listener) {
      this.listeners = this.listeners.filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: 'push',
    value: function push(path) {
      this.history.push(path);
      this._updateHistoryLength();
      this._notifyChange(LocationActions.PUSH);
    }
  }, {
    key: 'replace',
    value: function replace(path) {
      invariant(this.history.length, 'You cannot replace the current path with no history');

      this.history[this.history.length - 1] = path;

      this._notifyChange(LocationActions.REPLACE);
    }
  }, {
    key: 'pop',
    value: function pop() {
      this.history.pop();
      this._updateHistoryLength();
      this._notifyChange(LocationActions.POP);
    }
  }, {
    key: 'getCurrentPath',
    value: function getCurrentPath() {
      return this.history[this.history.length - 1];
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '<TestLocation>';
    }
  }]);

  return TestLocation;
})();

module.exports = TestLocation;
},{"../History":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/History.js","../actions/LocationActions":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/actions/LocationActions.js","react/lib/invariant":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/invariant.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/runRouter.js":[function(require,module,exports){
'use strict';

var createRouter = require('./createRouter');

/**
 * A high-level convenience method that creates, configures, and
 * runs a router in one shot. The method signature is:
 *
 *   Router.run(routes[, location ], callback);
 *
 * Using `window.location.hash` to manage the URL, you could do:
 *
 *   Router.run(routes, function (Handler) {
 *     React.render(<Handler/>, document.body);
 *   });
 * 
 * Using HTML5 history and a custom "cursor" prop:
 * 
 *   Router.run(routes, Router.HistoryLocation, function (Handler) {
 *     React.render(<Handler cursor={cursor}/>, document.body);
 *   });
 *
 * Returns the newly created router.
 *
 * Note: If you need to specify further options for your router such
 * as error/abort handling or custom scroll behavior, use Router.create
 * instead.
 *
 *   var router = Router.create(options);
 *   router.run(function (Handler) {
 *     // ...
 *   });
 */
function runRouter(routes, location, callback) {
  if (typeof location === 'function') {
    callback = location;
    location = null;
  }

  var router = createRouter({
    routes: routes,
    location: location
  });

  router.run(callback);

  return router;
}

module.exports = runRouter;
},{"./createRouter":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/createRouter.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/supportsHistory.js":[function(require,module,exports){
'use strict';

function supportsHistory() {
  /*! taken from modernizr
   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
   * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
   */
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

module.exports = supportsHistory;
},{}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/node_modules/object-assign/index.js":[function(require,module,exports){
'use strict';

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

module.exports = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = Object.keys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

},{}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/node_modules/qs/index.js":[function(require,module,exports){
module.exports = require('./lib/');

},{"./lib/":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/node_modules/qs/lib/index.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/node_modules/qs/lib/index.js":[function(require,module,exports){
// Load modules

var Stringify = require('./stringify');
var Parse = require('./parse');


// Declare internals

var internals = {};


module.exports = {
    stringify: Stringify,
    parse: Parse
};

},{"./parse":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/node_modules/qs/lib/parse.js","./stringify":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/node_modules/qs/lib/stringify.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/node_modules/qs/lib/parse.js":[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    depth: 5,
    arrayLimit: 20,
    parameterLimit: 1000
};


internals.parseValues = function (str, options) {

    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0, il = parts.length; i < il; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        if (pos === -1) {
            obj[Utils.decode(part)] = '';
        }
        else {
            var key = Utils.decode(part.slice(0, pos));
            var val = Utils.decode(part.slice(pos + 1));

            if (Object.prototype.hasOwnProperty(key)) {
                continue;
            }

            if (!obj.hasOwnProperty(key)) {
                obj[key] = val;
            }
            else {
                obj[key] = [].concat(obj[key]).concat(val);
            }
        }
    }

    return obj;
};


internals.parseObject = function (chain, val, options) {

    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj = {};
    if (root === '[]') {
        obj = [];
        obj = obj.concat(internals.parseObject(chain, val, options));
    }
    else {
        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
        var index = parseInt(cleanRoot, 10);
        var indexString = '' + index;
        if (!isNaN(index) &&
            root !== cleanRoot &&
            indexString === cleanRoot &&
            index >= 0 &&
            index <= options.arrayLimit) {

            obj = [];
            obj[index] = internals.parseObject(chain, val, options);
        }
        else {
            obj[cleanRoot] = internals.parseObject(chain, val, options);
        }
    }

    return obj;
};


internals.parseKeys = function (key, val, options) {

    if (!key) {
        return;
    }

    // The regex chunks

    var parent = /^([^\[\]]*)/;
    var child = /(\[[^\[\]]*\])/g;

    // Get the parent

    var segment = parent.exec(key);

    // Don't allow them to overwrite object prototype properties

    if (Object.prototype.hasOwnProperty(segment[1])) {
        return;
    }

    // Stash the parent if it exists

    var keys = [];
    if (segment[1]) {
        keys.push(segment[1]);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {

        ++i;
        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
            keys.push(segment[1]);
        }
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return internals.parseObject(keys, val, options);
};


module.exports = function (str, options) {

    if (str === '' ||
        str === null ||
        typeof str === 'undefined') {

        return {};
    }

    options = options || {};
    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;

    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
    var obj = {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        var newObj = internals.parseKeys(key, tempObj[key], options);
        obj = Utils.merge(obj, newObj);
    }

    return Utils.compact(obj);
};

},{"./utils":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/node_modules/qs/lib/utils.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/node_modules/qs/lib/stringify.js":[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    arrayPrefixGenerators: {
        brackets: function (prefix, key) {
            return prefix + '[]';
        },
        indices: function (prefix, key) {
            return prefix + '[' + key + ']';
        },
        repeat: function (prefix, key) {
            return prefix;
        }
    }
};


internals.stringify = function (obj, prefix, generateArrayPrefix) {

    if (Utils.isBuffer(obj)) {
        obj = obj.toString();
    }
    else if (obj instanceof Date) {
        obj = obj.toISOString();
    }
    else if (obj === null) {
        obj = '';
    }

    if (typeof obj === 'string' ||
        typeof obj === 'number' ||
        typeof obj === 'boolean') {

        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys = Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        if (Array.isArray(obj)) {
            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
        }
        else {
            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix));
        }
    }

    return values;
};


module.exports = function (obj, options) {

    options = options || {};
    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;

    var keys = [];

    if (typeof obj !== 'object' ||
        obj === null) {

        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in internals.arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    }
    else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    }
    else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

    var objKeys = Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
    }

    return keys.join(delimiter);
};

},{"./utils":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/node_modules/qs/lib/utils.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/node_modules/qs/lib/utils.js":[function(require,module,exports){
// Load modules


// Declare internals

var internals = {};


exports.arrayToObject = function (source) {

    var obj = {};
    for (var i = 0, il = source.length; i < il; ++i) {
        if (typeof source[i] !== 'undefined') {

            obj[i] = source[i];
        }
    }

    return obj;
};


exports.merge = function (target, source) {

    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        }
        else {
            target[source] = true;
        }

        return target;
    }

    if (typeof target !== 'object') {
        target = [target].concat(source);
        return target;
    }

    if (Array.isArray(target) &&
        !Array.isArray(source)) {

        target = exports.arrayToObject(target);
    }

    var keys = Object.keys(source);
    for (var k = 0, kl = keys.length; k < kl; ++k) {
        var key = keys[k];
        var value = source[key];

        if (!target[key]) {
            target[key] = value;
        }
        else {
            target[key] = exports.merge(target[key], value);
        }
    }

    return target;
};


exports.decode = function (str) {

    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};


exports.compact = function (obj, refs) {

    if (typeof obj !== 'object' ||
        obj === null) {

        return obj;
    }

    refs = refs || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0, il = obj.length; i < il; ++i) {
            if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    for (i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        obj[key] = exports.compact(obj[key], refs);
    }

    return obj;
};


exports.isRegExp = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};


exports.isBuffer = function (obj) {

    if (obj === null ||
        typeof obj === 'undefined') {

        return false;
    }

    return !!(obj.constructor &&
        obj.constructor.isBuffer &&
        obj.constructor.isBuffer(obj));
};

},{}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/ExecutionEnvironment.js":[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/*jslint evil: true */

"use strict";

var canUseDOM = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

},{}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/Object.assign.js":[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

'use strict';

function assign(target, sources) {
  if (target == null) {
    throw new TypeError('Object.assign target cannot be null or undefined');
  }

  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];
    if (nextSource == null) {
      continue;
    }

    var from = Object(nextSource);

    // We don't currently support accessors nor proxies. Therefore this
    // copy cannot throw. If we ever supported this then we must handle
    // exceptions and side-effects. We don't support symbols so they won't
    // be transferred.

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
  }

  return to;
}

module.exports = assign;

},{}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/emptyFunction.js":[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */

function makeEmptyFunction(arg) {
  return function() {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function() { return this; };
emptyFunction.thatReturnsArgument = function(arg) { return arg; };

module.exports = emptyFunction;

},{}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/invariant.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

"use strict";

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if ("production" !== process.env.NODE_ENV) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":"/Users/romeo/Repository/react-app-blog-resume/node_modules/browserify/node_modules/process/browser.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/warning.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warning
 */

"use strict";

var emptyFunction = require("./emptyFunction");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if ("production" !== process.env.NODE_ENV) {
  warning = function(condition, format ) {for (var args=[],$__0=2,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];});
      console.warn(message);
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"./emptyFunction":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/emptyFunction.js","_process":"/Users/romeo/Repository/react-app-blog-resume/node_modules/browserify/node_modules/process/browser.js"}],"/Users/romeo/Repository/react-app-blog-resume/specs/App-spec.js":[function(require,module,exports){
(function (global){
var App = require('./../app/App.js');
var routes = require('./../app/routes.js');
var SiteHeader = require('./../app/Header.jsx');
var InfoBlock = require('./../app/InfoBlock.jsx');
var AddressBlock = require('./../app/AddressBlock.jsx');
var Contact = require('./../app/Contact.jsx');
var Education = require('./../app/Education.jsx');
var EducationItems = require('./../app/EducationItems.jsx');
var Footer = require('./../app/Footer.jsx');
var Head = require('./../app/Head.jsx');
var NavBar = require('./../app/NavBar.jsx');
var SocialNetworkBar = require('./../app/SocialNetworkBar.jsx');
var WidgetTwitter = require('./../app/WidgetTwitter.jsx');
var stubRouterContext = require('./stubRouterContext.js');
var React = require('react/addons');
var blog = require('./../app/model.js');
var TestUtils = React.addons.TestUtils;
var fs = require('fs');
var globaldocument = require('global');
var Router = require('react-router');

describe("App", function () {
    var app;
    var Subject = stubRouterContext(App);
    beforeEach(function() {
        app = TestUtils.renderIntoDocument(React.createElement(Subject, null));
    });

    it("should render header: from model.js title prop", function () {
        expect(global.document.title).toEqual(blog.title);
    });

    it("should be wrapped with a div", function () {
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("SiteHeader", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(React.createElement(SiteHeader, null));
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("WidgetTwitter", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(React.createElement(WidgetTwitter, null));
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("NavBar", function () {
    it("should be wrapped with a nav", function () {
        var Subject = stubRouterContext(NavBar);
        var app = TestUtils.renderIntoDocument(React.createElement(Subject, null));
        expect(app.getDOMNode().tagName).toEqual('NAV');
    });
});

describe("Head", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(React.createElement(Head, null));
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("Footer", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(React.createElement(Footer, null));
        expect(app.getDOMNode().tagName).toEqual('FOOTER');
    });
});

describe("AddressBlock", function () {

    it("should be wrapped with a address", function () {
        var app = TestUtils.renderIntoDocument(React.createElement(AddressBlock, null));
        expect(app.getDOMNode().tagName).toEqual('ADDRESS');
    });
});

describe("InfoBlock", function () {

    it("should be wrapped with a div", function () {
        var Subject = stubRouterContext(InfoBlock);
        var app = TestUtils.renderIntoDocument(React.createElement(Subject, null));
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("Contact", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(React.createElement(Contact, null));
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("Education", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(React.createElement(Education, null));
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("EducationItems", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(React.createElement(EducationItems, {header: "test", items: blog.education}));
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../app/AddressBlock.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/AddressBlock.jsx","./../app/App.js":"/Users/romeo/Repository/react-app-blog-resume/app/App.js","./../app/Contact.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Contact.jsx","./../app/Education.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Education.jsx","./../app/EducationItems.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/EducationItems.jsx","./../app/Footer.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Footer.jsx","./../app/Head.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Head.jsx","./../app/Header.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Header.jsx","./../app/InfoBlock.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/InfoBlock.jsx","./../app/NavBar.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/NavBar.jsx","./../app/SocialNetworkBar.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/SocialNetworkBar.jsx","./../app/WidgetTwitter.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/WidgetTwitter.jsx","./../app/model.js":"/Users/romeo/Repository/react-app-blog-resume/app/model.js","./../app/routes.js":"/Users/romeo/Repository/react-app-blog-resume/app/routes.js","./stubRouterContext.js":"/Users/romeo/Repository/react-app-blog-resume/specs/stubRouterContext.js","fs":"/Users/romeo/Repository/react-app-blog-resume/node_modules/browserify/lib/_empty.js","global":"/Users/romeo/Repository/react-app-blog-resume/node_modules/global/window.js","react-router":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/index.js","react/addons":"react/addons"}],"/Users/romeo/Repository/react-app-blog-resume/specs/stubRouterContext.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');

var stubRouterContext = function(Component, props) {
    function RouterStub() { }

    var src = {
        makePath() {},
        makeHref() {},
        transitionTo() {},
        replaceWith() {},
        goBack() {},
        getCurrentPath() {},
        getCurrentRoutes() {},
        getCurrentPathname() {return "/"},
        getCurrentParams() {},
        getCurrentQuery() {},
        isActive() {},
        getRouteAtDepth() {},
        setRouteComponentAtDepth() {}
    };

    Object.keys(src).forEach(function(k) {
        RouterStub[k] = src[k];
    });

    return React.createClass({
        childContextTypes: {
            router: React.PropTypes.func,
            routeDepth: React.PropTypes.number
        },

        getChildContext() {
            return {
                router: RouterStub,
                routeDepth: 0
            };
        },

        render() {
            return React.createElement(Component, React.__spread({},  props))
        }
    });
};

module.exports = stubRouterContext;
},{"react":"react"}]},{},["/Users/romeo/Repository/react-app-blog-resume/specs/App-spec.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvQWRkcmVzc0Jsb2NrLmpzeCIsImFwcC9BcHAuanMiLCJhcHAvQ29udGFjdC5qc3giLCJhcHAvRGVzYy5qc3giLCJhcHAvRWR1Y2F0aW9uLmpzeCIsImFwcC9FZHVjYXRpb25JdGVtcy5qc3giLCJhcHAvRm9vdGVyLmpzeCIsImFwcC9IZWFkLmpzeCIsImFwcC9IZWFkZXIuanN4IiwiYXBwL0luZm9CbG9jay5qc3giLCJhcHAvTmF2QmFyLmpzeCIsImFwcC9Ob3RGb3VuZC5qc3giLCJhcHAvUmVzdW1lLmpzeCIsImFwcC9Tb2NpYWxOZXR3b3JrQmFyLmpzeCIsImFwcC9TdWJuYXZDb250YWluZXIuanN4IiwiYXBwL1dpZGdldFR3aXR0ZXIuanN4IiwiYXBwL21vZGVsLmpzIiwiYXBwL3JvdXRlcy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L2xpYi9fZW1wdHkuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2dsb2JhbC93aW5kb3cuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9DYW5jZWxsYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9IaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvTWF0Y2guanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9OYXZpZ2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUGF0aFV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUHJvcFR5cGVzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUmVkaXJlY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Sb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1Njcm9sbEhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9TdGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1RyYW5zaXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2JlaGF2aW9ycy9JbWl0YXRlQnJvd3NlckJlaGF2aW9yLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvYmVoYXZpb3JzL1Njcm9sbFRvVG9wQmVoYXZpb3IuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL0NvbnRleHRXcmFwcGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9EZWZhdWx0Um91dGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL0xpbmsuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL05vdEZvdW5kUm91dGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL1JlZGlyZWN0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9Sb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvUm91dGVIYW5kbGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY3JlYXRlUm91dGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9nZXRXaW5kb3dTY3JvbGxQb3NpdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvaXNSZWFjdENoaWxkcmVuLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbG9jYXRpb25zL0hhc2hMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2xvY2F0aW9ucy9IaXN0b3J5TG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9sb2NhdGlvbnMvUmVmcmVzaExvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbG9jYXRpb25zL1N0YXRpY0xvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbG9jYXRpb25zL1Rlc3RMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL3J1blJvdXRlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL3N1cHBvcnRzSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9xcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi9wYXJzZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi9zdHJpbmdpZnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9xcy9saWIvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2xpYi9PYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2xpYi9pbnZhcmlhbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL3dhcm5pbmcuanMiLCJzcGVjcy9BcHAtc3BlYy5qcyIsInNwZWNzL3N0dWJSb3V0ZXJDb250ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2pnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBBZGRyZXNzQmxvY2sgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQWRkcmVzc0Jsb2NrXCIsXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1haWwgOiB0aGlzLnByb3BzLm1haWwsXG4gICAgICAgICAgICBhZGRyZXNzIDogdGhpcy5wcm9wcy5hZGRyZXNzLFxuICAgICAgICAgICAgdGVsbm8gOiB0aGlzLnByb3BzLnRlbG51bWJlclxuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1haWx0byA9IFwibWFpbHRvOlwiICsgdGhpcy5zdGF0ZS5tYWlsO1xuICAgICAgICB2YXIgdGVsID0gXCIjXCIgKyB0aGlzLnN0YXRlLnRlbG5vO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFkZHJlc3NcIiwgbnVsbCwgXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFkZHJlc3MsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogbWFpbHRvfSwgdGhpcy5zdGF0ZS5tYWlsKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiB0ZWx9LCB0aGlzLnN0YXRlLnRlbG5vKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQWRkcmVzc0Jsb2NrOyIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBNb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWwuanMnKTtcbnZhciBTb2NpYWxOZXR3b3JrcyA9IHJlcXVpcmUoJy4vU29jaWFsTmV0d29ya0Jhci5qc3gnKTtcbnZhciBXaWRnZXRUd2l0dGVyID0gcmVxdWlyZSgnLi9XaWRnZXRUd2l0dGVyLmpzeCcpO1xudmFyIEFkZHJlc3NCbG9jayA9IHJlcXVpcmUoJy4vQWRkcmVzc0Jsb2NrLmpzeCcpO1xudmFyIEluZm9CbG9jayA9IHJlcXVpcmUoJy4vSW5mb0Jsb2NrLmpzeCcpO1xudmFyIFN1Ym5hdkNvbnRhaW5lciA9IHJlcXVpcmUoJy4vU3VibmF2Q29udGFpbmVyLmpzeCcpO1xudmFyIEhlYWQgPSByZXF1aXJlKCcuL0hlYWQuanN4Jyk7XG52YXIgRGVzYyA9IHJlcXVpcmUoJy4vRGVzYy5qc3gnKTtcbnZhciBGb290ZXIgPSByZXF1aXJlKCcuL0Zvb3Rlci5qc3gnKTtcbnZhciBOYXZCYXIgPSByZXF1aXJlKCcuL05hdkJhci5qc3gnKTtcbnZhciBTaXRlSGVhZGVyID0gcmVxdWlyZSgnLi9IZWFkZXIuanN4Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJBcHBcIixcbiAgICBtaXhpbnM6IFtSb3V0ZXIuU3RhdGVdLFxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gTW9kZWwudGl0bGU7XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHR3aXR0ZXJCYXIsaW5mb0Jsb2NrLG1haW5QYXJ0O1xuICAgICAgICBpZih0aGlzLmlzQWN0aXZlKCcvcHJvZmlsZScpIHx8IHRoaXMuaXNBY3RpdmUoJy8nKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdHdpdHRlckJhciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0VHdpdHRlciwgbnVsbCk7XG4gICAgICAgICAgICBpbmZvQmxvY2sgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEluZm9CbG9jaywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBtYWluUGFydCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVIYW5kbGVyLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiB0aGlzLmdldFBhdGhuYW1lKCkudHJpbSgpLnN1YnN0cmluZygxKSB8fCBcInByb2ZpbGVcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJ3cmFwcGVyXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZCYXIsIG51bGwpLCBcblxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiY29udGVudFwifSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaW5mb1wifSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCB7bG9nbzogTW9kZWwubG9nbywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IE1vZGVsLnBvc2l0aW9uLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBNb2RlbC5uYW1lLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXJuYW1lOiBNb2RlbC5zdXJuYW1lfSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCB7Y2xhc3NOYW1lOiBcImNsZWFyXCJ9KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb0Jsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgICApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogKHRoaXMuaXNBY3RpdmUoJy9wcm9maWxlJykgfHwgdGhpcy5pc0FjdGl2ZSgnLycpKSA/IFwic2lkZWJhciBoaWRkZW5cIiA6IFwidG9wQWRkcmVzcyBoaWRkZW5cIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWRkcmVzc0Jsb2NrLCB7YWRkcmVzczogTW9kZWwuYWRkcmVzcywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlsOiBNb2RlbC5tYWlsLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbG51bWJlcjogTW9kZWwudGVsfSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU29jaWFsTmV0d29ya3MsIHtuZXR3b3JrczogTW9kZWwuc29jaWFsLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbDogTW9kZWwubWFpbH0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0d2l0dGVyQmFyXG4gICAgICAgICAgICAgICAgICAgICAgICApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCB7Y2xhc3NOYW1lOiBcImNsZWFyXCJ9KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluUGFydFxuICAgICAgICAgICAgICAgICAgICApLCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb290ZXIsIHthdXRob3I6IE1vZGVsLmF1dGhvcn0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIERlc2MgPSByZXF1aXJlKCcuL0Rlc2MuanN4Jyk7XG52YXIgTW9kZWwgPSByZXF1aXJlKCcuL21vZGVsLmpzJyk7XG5cbnZhciBDb250YWN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkNvbnRhY3RcIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImlubmVyQ29udGFpbmVyXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImRlc2NcIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiLCB7ZnJhbWVCb3JkZXI6IFwiMFwiLCBzY3JvbGxpbmc6IFwibm9cIiwgbWFyZ2luSGVpZ2h0OiBcIjBcIiwgbWFyZ2luV2lkdGg6IFwiMFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBNb2RlbC5tYXB9KVxuICAgICAgICAgICAgICAgICAgICApLCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbnRhY3QtaXRlbXNcIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgTW9kZWwudGV4dFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFjdDsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgRGVzYyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJEZXNjXCIsXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZGVzY1wifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDRcIiwgbnVsbCwgdGhpcy5wcm9wcy5oZWFkZXIpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIHRoaXMucHJvcHMudGV4dClcbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG5leHBvcnRzLm1vZHVsZSA9IERlc2M7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBEZXNjID0gcmVxdWlyZSgnLi9EZXNjLmpzeCcpO1xudmFyIEVkdWNhdGlvbkl0ZW1zID0gcmVxdWlyZSgnLi9FZHVjYXRpb25JdGVtcy5qc3gnKTtcbnZhciBNb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWwuanMnKTtcblxudmFyIEVkdWNhdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJFZHVjYXRpb25cIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJpbm5lckNvbnRhaW5lclwifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVkdWNhdGlvbkl0ZW1zLCB7aGVhZGVyOiBcIkVkdWNhdGlvblwiLCBpdGVtczogTW9kZWwuZWR1Y2F0aW9ufSksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCLCoFwiKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVkdWNhdGlvbkl0ZW1zLCB7aGVhZGVyOiBcIkNlcnRpZmljYXRpb25cIiwgaXRlbXM6IE1vZGVsLmNlcnRpZmljYXRpb259KVxuICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWR1Y2F0aW9uOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBFZHVjYXRpb25JdGVtcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJFZHVjYXRpb25JdGVtc1wiLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlYWRlciA6IHRoaXMucHJvcHMuaGVhZGVyLFxuICAgICAgICAgICAgaXRlbXMgOiB0aGlzLnByb3BzLml0ZW1zXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJkZXNjXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgdGhpcy5zdGF0ZS5oZWFkZXIpXG4gICAgICAgICAgICApLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJlZHVjYXRpb24taXRlbXNcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcInBlcnNvbmFsRGV2XCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pdGVtcy5tYXAoZnVuY3Rpb24oZGF0YSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhlYWQgPSAoZGF0YS5saW5rID09PSAndW5kZWZpbmVkJykgPyBkYXRhLnRpdGxlIDogUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IGRhdGEubGluaywgdGFyZ2V0OiBcIl9ibGFua1wifSwgXCIgXCIsIGRhdGEudGl0bGUsIFwiIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGl9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ0aXRsZVwifSwgaGVhZCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcInRpbWVcIn0sIGRhdGEudGltZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGRhdGEuYXV0aG9yaXR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWR1Y2F0aW9uSXRlbXM7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEZvb3RlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJGb290ZXJcIixcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXV0aG9yIDogdGhpcy5wcm9wcy5hdXRob3JcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIsIG51bGwsIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJDb3B5cmlnaHQgwqkyMDE1IFwiLCB0aGlzLnN0YXRlLmF1dGhvciwgXCIuXCIpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiUG93ZXJlZCBieSBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiaHR0cDovL2h0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvXCJ9LCBcIlJlYWN0LmpzXCIpKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlcjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgSGVhZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJIZWFkXCIsXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2dvOiB0aGlzLnByb3BzLmxvZ28sXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICBzdXJuYW1lOiB0aGlzLnByb3BzLnN1cm5hbWUsXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wcm9wcy5wb3NpdGlvblxuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJoZWFkXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogdGhpcy5zdGF0ZS5sb2dvLCBhbHQ6IHRoaXMuc3RhdGUubmFtZX0pLCBcblxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIm5hbWVcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwiZmlyc3RcIn0sIHRoaXMuc3RhdGUubmFtZSksIFxuXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJsYXN0XCJ9LCB0aGlzLnN0YXRlLnN1cm5hbWUpLCBcblxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwidGl0bGVcIn0sIHRoaXMuc3RhdGUucG9zaXRpb24pXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIZWFkOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTW9kZWwgPSByZXF1aXJlKCcuL21vZGVsLmpzJyk7XG52YXIgU29jaWFsTmV0d29ya3MgPSByZXF1aXJlKCcuL1NvY2lhbE5ldHdvcmtCYXIuanN4Jyk7XG5cbnZhciBTaXRlSGVhZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlNpdGVIZWFkZXJcIixcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBNb2RlbC50aXRsZSxcbiAgICAgICAgICAgIGxvZ286IE1vZGVsLmxvZ28sXG4gICAgICAgICAgICBtYWlsOiBNb2RlbC5tYWlsLFxuICAgICAgICAgICAgc29jaWFsOiBNb2RlbC5zb2NpYWxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaGVhZGVyLXRpdGxlXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogdGhpcy5zdGF0ZS5sb2dvLCBcbiAgICAgICAgICAgICAgICAgd2lkdGg6IFwiODBcIiwgXG4gICAgICAgICAgICAgICAgIGFsdDogXCJ7dGhpcy5zdGF0ZS50aXRsZX0gbG9nb1wiLCBcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInBhbmVsLWNvdmVyX19sb2dvXCJ9KSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge2NsYXNzTmFtZTogXCJoZWFkZXItdGl0bGUtLW1haW50aXRsZVwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiL1wifSwgdGhpcy5zdGF0ZS50aXRsZSkpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU29jaWFsTmV0d29ya3MsIHtuZXR3b3JrczogdGhpcy5zdGF0ZS5zb2NpYWwsIG1haWw6IHRoaXMuc3RhdGUubWFpbH0pXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2l0ZUhlYWRlcjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEhlYWQgPSByZXF1aXJlKCcuL0hlYWQuanN4Jyk7XG52YXIgRGVzYyA9IHJlcXVpcmUoJy4vRGVzYy5qc3gnKTtcbnZhciBTdWJuYXZDb250YWluZXIgPSByZXF1aXJlKCcuL1N1Ym5hdkNvbnRhaW5lci5qc3gnKTtcbnZhciBNb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWwuanMnKTtcblxudmFyIEluZm9CbG9jayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJJbmZvQmxvY2tcIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZGVzY1wifSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBNb2RlbC50ZXh0KVxuICAgICAgICAgICAgICAgICAgICApLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VibmF2Q29udGFpbmVyLCBudWxsKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEluZm9CbG9jazsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xudmFyIExpbmsgPSBSb3V0ZXIuTGluaztcblxudmFyIE5hdkJhciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJOYXZCYXJcIixcbiAgICBtaXhpbnM6IFsgUm91dGVyLlN0YXRlIF0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhY3RpdmF0ZSA9IFwiIGN1cnJlbnQtbWVudS1pdGVtXCI7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5nZXRQYXRobmFtZSgpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcIm5hdlwiLCBudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBudWxsLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogbmFtZSA9PT0gJy9wcm9maWxlJz8ncHJvZmlsZScgKyBhY3RpdmF0ZToncHJvZmlsZSd9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJwcm9maWxlXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIlByb2ZpbGVcIikpKSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBuYW1lID09PSAnL3Jlc3VtZSc/J3Jlc3VtZScgKyBhY3RpdmF0ZToncmVzdW1lJ30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcInJlc3VtZVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJSZXN1bWVcIikpKSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBuYW1lID09PSAnL2VkdWNhdGlvbic/J2VkdWNhdGlvbicgKyBhY3RpdmF0ZTonZWR1Y2F0aW9uJ30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcImVkdWNhdGlvblwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJFZHVjYXRpb25cIikpKSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBuYW1lID09PSAnL2Jsb2cnPydibG9nJyArIGFjdGl2YXRlOidibG9nJ30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcImJsb2dcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiQmxvZ1wiKSkpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IG5hbWUgPT09ICcvY29udGFjdCc/J2NvbnRhY3QnICsgYWN0aXZhdGU6J2NvbnRhY3QnfSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiY29udGFjdFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJDb250YWN0XCIpKSkpXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTmF2QmFyOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgU3VibmF2Q29udGFpbmVyID0gcmVxdWlyZSgnLi9TdWJuYXZDb250YWluZXIuanN4Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG5cbnZhciBOb3RGb3VuZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJOb3RGb3VuZFwiLFxuICAgIG1peGluczogW1JvdXRlci5TdGF0ZV0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJpbm5lckNvbnRhaW5lclwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImRlc2NcIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDRcIiwgbnVsbCwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidVwiLCBudWxsLCB0aGlzLmdldFBhdGgoKSksIFwiIHdhc24ndCBmb3VuZFwiKVxuICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJlZHVjYXRpb24taXRlbXNcIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN1Ym5hdkNvbnRhaW5lciwgbnVsbClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTm90Rm91bmQ7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBEZXNjID0gcmVxdWlyZSgnLi9EZXNjLmpzeCcpO1xudmFyIE1vZGVsID0gcmVxdWlyZSgnLi9tb2RlbC5qcycpO1xuXG52YXIgUmVzdW1lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlJlc3VtZVwiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaW5uZXJDb250YWluZXJcIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZGVzY1wifSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgXCJSZXN1bWVcIilcbiAgICAgICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyZXN1bWUtaXRlbXNcIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgTW9kZWwudGV4dFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzdW1lOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBTb2NpYWxOZXR3b3JrQmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlNvY2lhbE5ldHdvcmtCYXJcIixcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvY2lhbDogdGhpcy5wcm9wcy5uZXR3b3JrcyxcbiAgICAgICAgICAgIG1haWw6IHRoaXMucHJvcHMubWFpbFxuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgbGlua3MgPSB0aGlzLnN0YXRlLnNvY2lhbC5tYXAoXG4gICAgICAgICAgICBmdW5jdGlvbih0LCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gXCIuL3NvY2lhbF9pY29ucy9cIiArIHQubmFtZSArIFwiLnBuZ1wiO1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogdC5saW5rLCBrZXk6IGksIHRhcmdldDogXCJfYmxhbmtcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogaW1hZ2UsIGFsdDogdC5uYW1lfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHZhciBtYWlsdG8gPSBcIm1haWx0bzpcIiArIHRoaXMuc3RhdGUubWFpbDtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInNvY2lhbFwifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogbWFpbHRvLCB0YXJnZXQ6IFwiX2JsYW5rXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IFwiLi9zb2NpYWxfaWNvbnMvZW1haWwucG5nXCIsIGFsdDogdGhpcy5zdGF0ZS5tYWlsfSkpLCBcbiAgICAgICAgICAgIGxpbmtzXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU29jaWFsTmV0d29ya0JhcjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExpbmsgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5MaW5rO1xuXG52YXIgU3VibmF2Q29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlN1Ym5hdkNvbnRhaW5lclwiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzdWJuYXZDb250YWluZXJcIn0sIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInN1Ym5hdkxlZnRcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzdWJuYXZSZXN1bWVcIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJyZXN1bWVcIiwgY2xhc3NOYW1lOiBcImludmVydFwifSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcInJlc3VtZVwifSwgXCJSZXN1bWVcIilcbiAgICAgICAgICAgICAgICApLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic3VibmF2ZWR1Y2F0aW9uXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiZWR1Y2F0aW9uXCIsIGNsYXNzTmFtZTogXCJpbnZlcnRcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJlZHVjYXRpb25cIn0sIFwiRWR1Y2F0aW9uXCIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic3VibmF2UmlnaHRcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzdWJuYXZCbG9nXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiYmxvZ1wiLCBjbGFzc05hbWU6IFwiaW52ZXJ0XCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiYmxvZ1wifSwgXCJCbG9nXCIpXG4gICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInN1Ym5hdkNvbnRhY3RcIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJjb250YWN0XCIsIGNsYXNzTmFtZTogXCJpbnZlcnRcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJjb250YWN0XCJ9LCBcIkNvbnRhY3RcIilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICB9fVxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdWJuYXZDb250YWluZXI7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xuXG52YXIgV2lkZ2V0VHdpdHRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJXaWRnZXRUd2l0dGVyXCIsXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7ZGF0YTogW119O1xuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUmVxdWVzdC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwODgvYXBpL2dldFR3ZWV0c1wiLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgICAgICAgICBpZiAoIWVycm9yICYmIHJlc3BvbnNlLnN0YXR1c0NvZGUgPT0gMjAwICYmICFib2R5LmlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLmlzTnVsbE9yVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGF9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIndpZGdldCB0d2l0dGVyLXVwZGF0ZXNcIn0sIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImg2XCIsIHtjbGFzc05hbWU6IFwid2lkZ2V0LXRpdGxlXCJ9LCBcIkxhdGVzdCB0d2VldHNcIiksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIHRoaXMuc3RhdGUuZGF0YS5tYXAoZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQuaXNOdWxsT3JVbmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyAnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGl9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCBudWxsLCB0LnRleHQpKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBXaWRnZXRUd2l0dGVyO1xuIiwidmFyIERiTW9kZWwgPSB7XG4gICAgXCJ0aXRsZVwiOiBcIlJvbWFuIE1lbG55ayBwZXJzb25hbCBibG9nXCIsXG4gICAgXCJhdXRob3JcIjogXCJSb21hbiBNZWxueWtcIixcbiAgICBcIm5hbWVcIjogXCJSb21hblwiLFxuICAgIFwic3VybmFtZVwiOiBcIk1lbG55a1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJTb2Z0d2FyZSBkZXZlbG9wZXJcIixcbiAgICBcImxvZ29cIjogXCJodHRwczovL21lZGlhLmxpY2RuLmNvbS9tZWRpYS9wLzMvMDA1LzAzMS8yNjUvMGE2MTM0My5qcGdcIixcbiAgICBcInNvY2lhbFwiOiBbXG4gICAgICAgIHtuYW1lOiBcImZhY2Vib29rXCIsIGxpbms6IFwiXCJ9LFxuICAgICAgICB7bmFtZTogXCJ0d2l0dGVyXCIsIGxpbms6IFwiXCJ9LFxuICAgICAgICB7bmFtZTogXCJnaXRodWJcIiwgbGluazogXCJcIn0sXG4gICAgICAgIHtuYW1lOiBcImxpbmtlZGluXCIsIGxpbms6IFwiXCJ9XSxcbiAgICBcImVkdWNhdGlvblwiIDogW1xuICAgICAgICB7dGl0bGU6IFwiQ0NOQSBjb3Vyc2VcIiwgdGltZTogXCJBdWcgMjAwOCAtIERlYyAyMDA4XCIsIGF1dGhvcml0eTogXCJDaXNjbyBOZXR3b3JrIEFjYWRlbWlhLCBVa3JhaW5lLCBWaW5ueXRzaWFcIn0sXG4gICAgICAgIHt0aXRsZTogXCJFeHBlcnQgZGlwbG9tYVwiLCB0aW1lOiBcIlNlcCAyMDA2IC0gQXByIDIwMDhcIiwgYXV0aG9yaXR5OiBcIlZpbm55dHNpYSBOYXRpb25hbCBUZWNobmljYWwgVW5pdmVyc2l0eSwgVWtyYWluZSwgVmlubnl0c2lhXCJ9LFxuICAgICAgICB7dGl0bGU6IFwiTWFzdGVyIGRlZ3JlZVwiLCB0aW1lOiBcIlNlcCAyMDA2IC0gSnVuZSAyMDA3XCIsIGF1dGhvcml0eTogXCJWaW5ueXRzaWEgTmF0aW9uYWwgVGVjaG5pY2FsIFVuaXZlcnNpdHksIFVrcmFpbmUsIFZpbm55dHNpYVwifSxcbiAgICAgICAge3RpdGxlOiBcIkJhY2hlbG9ycyBkZWdyZWVcIiwgdGltZTogXCJPY3QgMjAwMSAtIEp1bmUgMjAwNlwiLCBhdXRob3JpdHk6IFwiVmlubnl0c2lhIE5hdGlvbmFsIFRlY2huaWNhbCBVbml2ZXJzaXR5LCBVa3JhaW5lLCBWaW5ueXRzaWFcIn1dLFxuICAgIFwiY2VydGlmaWNhdGlvblwiIDogW1xuICAgICAgICB7dGl0bGU6IFwiUHJpbmNpcGxlcyBvZiBSZWFjdGl2ZSBQcm9ncmFtbWluZ1wiLCB0aW1lOiBcIk1heSAyMDE1XCIsIGF1dGhvcml0eTogXCJDb3Vyc2VyYSBWZXJpZmllZCBDZXJ0aWZpY2F0ZXMuIExpY2Vuc2U6IFVWRkNLVlFOVlFcIixcbiAgICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuY291cnNlcmEub3JnL2FjY291bnQvYWNjb21wbGlzaG1lbnRzL3ZlcmlmeS9VVkZDS1ZRTlZRXCJ9LFxuICAgICAgICB7dGl0bGU6IFwiUHJvZ3JhbW1pbmcgTW9iaWxlIEFwcGxpY2F0aW9ucyBmb3IgQW5kcm9pZCBIYW5kaGVsZCBTeXN0ZW1zXCIsIHRpbWU6IFwiTm92IDIwMTRcIiwgYXV0aG9yaXR5OiBcIkNvdXJzZXJhIFZlcmlmaWVkIENlcnRpZmljYXRlcy4gTGljZW5zZTogODk5VkY3TVlZUlwiLFxuICAgICAgICAgICAgbGluazogXCJodHRwczovL3d3dy5jb3Vyc2VyYS5vcmcvYWNjb3VudC9hY2NvbXBsaXNobWVudHMvdmVyaWZ5Lzg5OVZGN01ZWVJcIn0sXG4gICAgICAgIHt0aXRsZTogXCJNb25nb0RCIGZvciBOb2RlLmpzIERldmVsb3BlcnNcIiwgdGltZTogXCJNYXkgMjAxNVwiLCBhdXRob3JpdHk6IFwiTW9uZ28gVW5pdmVyc2l0eSBpbmMuXCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHA6Ly9lZHVjYXRpb24ubW9uZ29kYi5jb20vZG93bmxvYWRzL2NlcnRpZmljYXRlcy81ODE2NTlhYzAxMWM0MTFhYTZlZDdlMTM1ZmViODdiMy9DZXJ0aWZpY2F0ZS5wZGZcIn0sXG4gICAgICAgIHt0aXRsZTogXCJCcmFpbmJlbmNoOiAuTkVUIEZyYW1ld29yayA0LjUgTWFzdGVyXCIsIHRpbWU6IFwiT2N0IDIwMTQgLSBPY3QgMjAxN1wiLCBhdXRob3JpdHk6IFwiQnJhaW5iZW5jaC4gVHJhbnNjcmlwdCBJRCM6IDk2NDU1MTlcIixcbiAgICAgICAgICAgIGxpbms6IFwiaHR0cDovL3d3dy5icmFpbmJlbmNoLmNvbS9vcmRlcmNlcnQvZG93bmxvYWRDZXJ0aWZpY2F0ZS5kbz9waW49UF8xeW40ZkZYTkUqXCJ9LFxuICAgICAgICB7dGl0bGU6IFwiQnJhaW5iZW5jaDog0KEjIDUuMCBNYXN0ZXJcIiwgdGltZTogXCJTZXAgMjAxNCAtIFNlcCAyMDE3XCIsIGF1dGhvcml0eTogXCJCcmFpbmJlbmNoLiBUcmFuc2NyaXB0IElEIzogOTY0NTUxOVwiLFxuICAgICAgICAgICAgbGluazogXCJodHRwczovL3d3dy5icmFpbmJlbmNoLmNvbS9vcmRlcmNlcnQvZG93bmxvYWRDZXJ0aWZpY2F0ZS5kbz9waW49TWdhQlFQbEVwaEEqXCJ9LFxuICAgICAgICB7dGl0bGU6IFwiQnJhaW5iZW5jaDogUHJvZ3JhbW1pbmcgQ29uY2VwdHMgTWFzdGVyXCIsIHRpbWU6IFwiSmFuIDIwMTMgLSBKYW4gMjAxNlwiLCBhdXRob3JpdHk6IFwiQnJhaW5iZW5jaC4gVHJhbnNjcmlwdCBJRCM6IDk2NDU1MTlcIixcbiAgICAgICAgICAgIGxpbms6IFwiaHR0cDovL3d3dy5icmFpbmJlbmNoLmNvbS9vcmRlcmNlcnQvZG93bmxvYWRDZXJ0aWZpY2F0ZS5kbz9waW49cHRRWW1FdERDcWcqXCJ9LFxuICAgICAgICB7dGl0bGU6IFwiQnJhaW5iZW5jaDog0KEjIDQuMCBNYXN0ZXJcIiwgdGltZTogXCJOb3YgMjAxMiAtIE5vdiAyMDE1XCIsIGF1dGhvcml0eTogXCJCcmFpbmJlbmNoLiBUcmFuc2NyaXB0IElEIzogOTY0NTUxOVwiLFxuICAgICAgICAgICAgbGluazogXCJodHRwOi8vd3d3LmJyYWluYmVuY2guY29tL29yZGVyY2VydC9kb3dubG9hZENlcnRpZmljYXRlLmRvP3Bpbj1uZ1ZIM1ZUcDNDMCpcIn1cbiAgICBdLFxuICAgIFwibWFpbFwiOiBcImF5d2VuZ29AZ21haWwuY29tXCIsXG4gICAgXCJ0ZWxcIjogXCIrNDggMTIzIDQ1NiA3ODlcIixcbiAgICBcImFkZHJlc3NcIjogJ01pZWxcXHUwMTdjeVxcdTAxNDRza2llZ28gMTQsIDYxLTcyNSBQb3puYVxcdTAxNDQnLFxuICAgIFwibWFwXCIgOiAnaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcz9xPVBvem5hbiZobD1lbiZzbGw9NTIuNDA3NTI1NywxNi45MzMzODAyJnNzcG49My45MDIzNDcsNy4xMzU2MiZ0PWgmaG5lYXI9UG96bmFuLCtQb2xhbmQmej0xNCZvdXRwdXQ9ZW1iZWQnLFxuICAgIFwidGV4dFwiOiBcIkFzIGZhciBhcyBJIHJlbWVtYmVyIG15c2VsZiBJIHdhcyBmb25kIG9mIG1hdGgsIHByb2dyYW1taW5nIGFuZCBmb3JlaWduIGxhbmd1YWdlcy4gTXkgZmlyc3QgcHJvZ3JhbSBJIHdyb3RlIG9uIGFzc2VtYmxlciB3aGVuIHdhcyBlaWdodCB5ZWFycyBvbGQgYW5kIG15IGZpcnN0IHByb2dyYW0gYXMgYSBmcmVlbGFuY2VyIGluIDE5LlxcclxcblwiICtcbiAgICBcIklcXCd2ZSBnb3QgaG9ub3IgTWFzdGVyIGRlZ3JlZSBpbiBlbGVjdHJvdGVjaG5pY2FsIGVuZ2luZWVyaW5nIGFuZCBleHBlcnQgRGlwbG9tYSBvZiBDb21wdXRlciBTeXN0ZW1zIGFuZCBOZXR3b3Jrcy4gIER1cmluZyBsYXN0IDEyIHllYXJzIG9mIG15IGxpZmUsIElcXCd2ZSBwcm9mZXNzaW9uYWxseSBiZWVuIGNvZGluZyBvbiBQYXNjYWwsIERlbHBoaSwgUEhQLCBDKyssIEMjLiBOb3cgSSBhbSB0cnlpbmcgbXkgc2tpbGxzIHdpdGggU2NhbGEgYW5kIEphdmFTY3JpcHQuIEhvcGUgSVxcJ2xsIHN3aXRjaCBzaG9ydGx5IHRvIHRoaXMgbmV3IGZhc3QgZ3Jvd2luZyBzdHJlYW0uXCJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGJNb2RlbDsiLCJ2YXIgQXBwID0gcmVxdWlyZSgnLi9BcHAuanMnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgSW5mb0Jsb2NrID0gcmVxdWlyZSgnLi9JbmZvQmxvY2suanN4Jyk7XG52YXIgRWR1Y2F0aW9uID0gcmVxdWlyZSgnLi9FZHVjYXRpb24uanN4Jyk7XG52YXIgUmVzdW1lID0gcmVxdWlyZSgnLi9SZXN1bWUuanN4Jyk7XG52YXIgQ29udGFjdCA9IHJlcXVpcmUoJy4vQ29udGFjdC5qc3gnKTtcbnZhciBOb3RGb3VuZCA9IHJlcXVpcmUoJy4vTm90Rm91bmQuanN4Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgUm91dGUgPSBSb3V0ZXIuUm91dGU7XG52YXIgRGVmYXVsdFJvdXRlID0gUm91dGVyLkRlZmF1bHRSb3V0ZTtcbnZhciBOb3RGb3VuZFJvdXRlID0gUm91dGVyLk5vdEZvdW5kUm91dGU7XG5cbnZhciByb3V0ZXMgPSAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge2hhbmRsZXI6IEFwcH0sIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERlZmF1bHRSb3V0ZSwge2hhbmRsZXI6IEluZm9CbG9ja30pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOb3RGb3VuZFJvdXRlLCB7aGFuZGxlcjogTm90Rm91bmR9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtuYW1lOiBcInByb2ZpbGVcIiwgaGFuZGxlcjogSW5mb0Jsb2NrfSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7bmFtZTogXCJlZHVjYXRpb25cIiwgaGFuZGxlcjogRWR1Y2F0aW9ufSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7bmFtZTogXCJyZXN1bWVcIiwgaGFuZGxlcjogUmVzdW1lfSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7bmFtZTogXCJjb250YWN0XCIsIGhhbmRsZXI6IENvbnRhY3R9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtuYW1lOiBcImJsb2dcIiwgaGFuZGxlcjogTm90Rm91bmR9KVxuICAgIClcbik7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzOyIsbnVsbCwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHNlbGY7XG59IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0ge307XG59XG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYSBjYW5jZWxsYXRpb24gY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYXdheVxuICogYmVmb3JlIHRoZSBwcmV2aW91cyB0cmFuc2l0aW9uIGhhcyBmdWxseSByZXNvbHZlZC5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIENhbmNlbGxhdGlvbigpIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsbGF0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBjYW5Vc2VET00gPSByZXF1aXJlKCdyZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnKS5jYW5Vc2VET007XG5cbnZhciBIaXN0b3J5ID0ge1xuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBudW1iZXIgb2YgZW50cmllcyBpbiB0aGUgaGlzdG9yeS5cbiAgICpcbiAgICogTm90ZTogVGhpcyBwcm9wZXJ0eSBpcyByZWFkLW9ubHkuXG4gICAqL1xuICBsZW5ndGg6IDEsXG5cbiAgLyoqXG4gICAqIFNlbmRzIHRoZSBicm93c2VyIGJhY2sgb25lIGVudHJ5IGluIHRoZSBoaXN0b3J5LlxuICAgKi9cbiAgYmFjazogZnVuY3Rpb24gYmFjaygpIHtcbiAgICBpbnZhcmlhbnQoY2FuVXNlRE9NLCAnQ2Fubm90IHVzZSBIaXN0b3J5LmJhY2sgd2l0aG91dCBhIERPTScpO1xuXG4gICAgLy8gRG8gdGhpcyBmaXJzdCBzbyB0aGF0IEhpc3RvcnkubGVuZ3RoIHdpbGxcbiAgICAvLyBiZSBhY2N1cmF0ZSBpbiBsb2NhdGlvbiBjaGFuZ2UgbGlzdGVuZXJzLlxuICAgIEhpc3RvcnkubGVuZ3RoIC09IDE7XG5cbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuLyoganNoaW50IC1XMDg0ICovXG52YXIgUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxuZnVuY3Rpb24gZGVlcFNlYXJjaChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5KSB7XG4gIC8vIENoZWNrIHRoZSBzdWJ0cmVlIGZpcnN0IHRvIGZpbmQgdGhlIG1vc3QgZGVlcGx5LW5lc3RlZCBtYXRjaC5cbiAgdmFyIGNoaWxkUm91dGVzID0gcm91dGUuY2hpbGRSb3V0ZXM7XG4gIGlmIChjaGlsZFJvdXRlcykge1xuICAgIHZhciBtYXRjaCwgY2hpbGRSb3V0ZTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2hpbGRSb3V0ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGNoaWxkUm91dGUgPSBjaGlsZFJvdXRlc1tpXTtcblxuICAgICAgaWYgKGNoaWxkUm91dGUuaXNEZWZhdWx0IHx8IGNoaWxkUm91dGUuaXNOb3RGb3VuZCkgY29udGludWU7IC8vIENoZWNrIHRoZXNlIGluIG9yZGVyIGxhdGVyLlxuXG4gICAgICBpZiAobWF0Y2ggPSBkZWVwU2VhcmNoKGNoaWxkUm91dGUsIHBhdGhuYW1lLCBxdWVyeSkpIHtcbiAgICAgICAgLy8gQSByb3V0ZSBpbiB0aGUgc3VidHJlZSBtYXRjaGVkISBBZGQgdGhpcyByb3V0ZSBhbmQgd2UncmUgZG9uZS5cbiAgICAgICAgbWF0Y2gucm91dGVzLnVuc2hpZnQocm91dGUpO1xuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTm8gY2hpbGQgcm91dGVzIG1hdGNoZWQ7IHRyeSB0aGUgZGVmYXVsdCByb3V0ZS5cbiAgdmFyIGRlZmF1bHRSb3V0ZSA9IHJvdXRlLmRlZmF1bHRSb3V0ZTtcbiAgaWYgKGRlZmF1bHRSb3V0ZSAmJiAocGFyYW1zID0gUGF0aFV0aWxzLmV4dHJhY3RQYXJhbXMoZGVmYXVsdFJvdXRlLnBhdGgsIHBhdGhuYW1lKSkpIHtcbiAgICByZXR1cm4gbmV3IE1hdGNoKHBhdGhuYW1lLCBwYXJhbXMsIHF1ZXJ5LCBbcm91dGUsIGRlZmF1bHRSb3V0ZV0pO1xuICB9IC8vIERvZXMgdGhlIFwibm90IGZvdW5kXCIgcm91dGUgbWF0Y2g/XG4gIHZhciBub3RGb3VuZFJvdXRlID0gcm91dGUubm90Rm91bmRSb3V0ZTtcbiAgaWYgKG5vdEZvdW5kUm91dGUgJiYgKHBhcmFtcyA9IFBhdGhVdGlscy5leHRyYWN0UGFyYW1zKG5vdEZvdW5kUm91dGUucGF0aCwgcGF0aG5hbWUpKSkge1xuICAgIHJldHVybiBuZXcgTWF0Y2gocGF0aG5hbWUsIHBhcmFtcywgcXVlcnksIFtyb3V0ZSwgbm90Rm91bmRSb3V0ZV0pO1xuICB9IC8vIExhc3QgYXR0ZW1wdDogY2hlY2sgdGhpcyByb3V0ZS5cbiAgdmFyIHBhcmFtcyA9IFBhdGhVdGlscy5leHRyYWN0UGFyYW1zKHJvdXRlLnBhdGgsIHBhdGhuYW1lKTtcbiAgaWYgKHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgTWF0Y2gocGF0aG5hbWUsIHBhcmFtcywgcXVlcnksIFtyb3V0ZV0pO1xuICB9cmV0dXJuIG51bGw7XG59XG5cbnZhciBNYXRjaCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hdGNoKHBhdGhuYW1lLCBwYXJhbXMsIHF1ZXJ5LCByb3V0ZXMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWF0Y2gpO1xuXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLnJvdXRlcyA9IHJvdXRlcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXRjaCwgbnVsbCwgW3tcbiAgICBrZXk6ICdmaW5kTWF0Y2gnLFxuXG4gICAgLyoqXG4gICAgICogQXR0ZW1wdHMgdG8gbWF0Y2ggZGVwdGgtZmlyc3QgYSByb3V0ZSBpbiB0aGUgZ2l2ZW4gcm91dGUnc1xuICAgICAqIHN1YnRyZWUgYWdhaW5zdCB0aGUgZ2l2ZW4gcGF0aCBhbmQgcmV0dXJucyB0aGUgbWF0Y2ggaWYgaXRcbiAgICAgKiBzdWNjZWVkcywgbnVsbCBpZiBubyBtYXRjaCBjYW4gYmUgbWFkZS5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZE1hdGNoKHJvdXRlcywgcGF0aCkge1xuICAgICAgdmFyIHBhdGhuYW1lID0gUGF0aFV0aWxzLndpdGhvdXRRdWVyeShwYXRoKTtcbiAgICAgIHZhciBxdWVyeSA9IFBhdGhVdGlscy5leHRyYWN0UXVlcnkocGF0aCk7XG4gICAgICB2YXIgbWF0Y2ggPSBudWxsO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcm91dGVzLmxlbmd0aDsgbWF0Y2ggPT0gbnVsbCAmJiBpIDwgbGVuOyArK2kpIG1hdGNoID0gZGVlcFNlYXJjaChyb3V0ZXNbaV0sIHBhdGhuYW1lLCBxdWVyeSk7XG5cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWF0Y2g7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGNoOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbi8qKlxuICogQSBtaXhpbiBmb3IgY29tcG9uZW50cyB0aGF0IG1vZGlmeSB0aGUgVVJMLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgIG1peGluczogWyBSb3V0ZXIuTmF2aWdhdGlvbiBdLFxuICogICAgIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gKiAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICogICAgICAgdGhpcy50cmFuc2l0aW9uVG8oJ2FSb3V0ZScsIHsgdGhlOiAncGFyYW1zJyB9LCB7IHRoZTogJ3F1ZXJ5JyB9KTtcbiAqICAgICB9LFxuICogICAgIHJlbmRlcigpIHtcbiAqICAgICAgIHJldHVybiAoXG4gKiAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PkNsaWNrIG1lITwvYT5cbiAqICAgICAgICk7XG4gKiAgICAgfVxuICogICB9KTtcbiAqL1xudmFyIE5hdmlnYXRpb24gPSB7XG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBQcm9wVHlwZXMucm91dGVyLmlzUmVxdWlyZWRcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhYnNvbHV0ZSBVUkwgcGF0aCBjcmVhdGVkIGZyb20gdGhlIGdpdmVuIHJvdXRlXG4gICAqIG5hbWUsIFVSTCBwYXJhbWV0ZXJzLCBhbmQgcXVlcnkgdmFsdWVzLlxuICAgKi9cbiAgbWFrZVBhdGg6IGZ1bmN0aW9uIG1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIubWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgbWF5IHNhZmVseSBiZSB1c2VkIGFzIHRoZSBocmVmIG9mIGFcbiAgICogbGluayB0byB0aGUgcm91dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICovXG4gIG1ha2VIcmVmOiBmdW5jdGlvbiBtYWtlSHJlZih0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLm1ha2VIcmVmKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgfSxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbnMgdG8gdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGFyZ3VtZW50cyBieSBwdXNoaW5nXG4gICAqIGEgbmV3IFVSTCBvbnRvIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgKi9cbiAgdHJhbnNpdGlvblRvOiBmdW5jdGlvbiB0cmFuc2l0aW9uVG8odG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICB0aGlzLmNvbnRleHQucm91dGVyLnRyYW5zaXRpb25Ubyh0bywgcGFyYW1zLCBxdWVyeSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb25zIHRvIHRoZSBVUkwgc3BlY2lmaWVkIGluIHRoZSBhcmd1bWVudHMgYnkgcmVwbGFjaW5nXG4gICAqIHRoZSBjdXJyZW50IFVSTCBpbiB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICovXG4gIHJlcGxhY2VXaXRoOiBmdW5jdGlvbiByZXBsYWNlV2l0aCh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZVdpdGgodG8sIHBhcmFtcywgcXVlcnkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgcHJldmlvdXMgVVJMLlxuICAgKi9cbiAgZ29CYWNrOiBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuZ29CYWNrKCk7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOYXZpZ2F0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgcXMgPSByZXF1aXJlKCdxcycpO1xuXG52YXIgcGFyYW1Db21waWxlTWF0Y2hlciA9IC86KFthLXpBLVpfJF1bYS16QS1aMC05XyRdKil8WyouKClcXFtcXF1cXFxcK3x7fV4kXS9nO1xudmFyIHBhcmFtSW5qZWN0TWF0Y2hlciA9IC86KFthLXpBLVpfJF1bYS16QS1aMC05XyQ/XSpbP10/KXxbKl0vZztcbnZhciBwYXJhbUluamVjdFRyYWlsaW5nU2xhc2hNYXRjaGVyID0gL1xcL1xcL1xcP3xcXC9cXD9cXC98XFwvXFw/L2c7XG52YXIgcXVlcnlNYXRjaGVyID0gL1xcPyguKikkLztcblxudmFyIF9jb21waWxlZFBhdHRlcm5zID0ge307XG5cbmZ1bmN0aW9uIGNvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgaWYgKCEocGF0dGVybiBpbiBfY29tcGlsZWRQYXR0ZXJucykpIHtcbiAgICB2YXIgcGFyYW1OYW1lcyA9IFtdO1xuICAgIHZhciBzb3VyY2UgPSBwYXR0ZXJuLnJlcGxhY2UocGFyYW1Db21waWxlTWF0Y2hlciwgZnVuY3Rpb24gKG1hdGNoLCBwYXJhbU5hbWUpIHtcbiAgICAgIGlmIChwYXJhbU5hbWUpIHtcbiAgICAgICAgcGFyYW1OYW1lcy5wdXNoKHBhcmFtTmFtZSk7XG4gICAgICAgIHJldHVybiAnKFteLz8jXSspJztcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPT09ICcqJykge1xuICAgICAgICBwYXJhbU5hbWVzLnB1c2goJ3NwbGF0Jyk7XG4gICAgICAgIHJldHVybiAnKC4qPyknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdcXFxcJyArIG1hdGNoO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2NvbXBpbGVkUGF0dGVybnNbcGF0dGVybl0gPSB7XG4gICAgICBtYXRjaGVyOiBuZXcgUmVnRXhwKCdeJyArIHNvdXJjZSArICckJywgJ2knKSxcbiAgICAgIHBhcmFtTmFtZXM6IHBhcmFtTmFtZXNcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb21waWxlZFBhdHRlcm5zW3BhdHRlcm5dO1xufVxuXG52YXIgUGF0aFV0aWxzID0ge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHBhdGggaXMgYWJzb2x1dGUuXG4gICAqL1xuICBpc0Fic29sdXRlOiBmdW5jdGlvbiBpc0Fic29sdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfSxcblxuICAvKipcbiAgICogSm9pbnMgdHdvIFVSTCBwYXRocyB0b2dldGhlci5cbiAgICovXG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oYSwgYikge1xuICAgIHJldHVybiBhLnJlcGxhY2UoL1xcLyokLywgJy8nKSArIGI7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIG5hbWVzIG9mIGFsbCBwYXJhbWV0ZXJzIGluIHRoZSBnaXZlbiBwYXR0ZXJuLlxuICAgKi9cbiAgZXh0cmFjdFBhcmFtTmFtZXM6IGZ1bmN0aW9uIGV4dHJhY3RQYXJhbU5hbWVzKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gY29tcGlsZVBhdHRlcm4ocGF0dGVybikucGFyYW1OYW1lcztcbiAgfSxcblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIHBvcnRpb25zIG9mIHRoZSBnaXZlbiBVUkwgcGF0aCB0aGF0IG1hdGNoIHRoZSBnaXZlbiBwYXR0ZXJuXG4gICAqIGFuZCByZXR1cm5zIGFuIG9iamVjdCBvZiBwYXJhbSBuYW1lID0+IHZhbHVlIHBhaXJzLiBSZXR1cm5zIG51bGwgaWYgdGhlXG4gICAqIHBhdHRlcm4gZG9lcyBub3QgbWF0Y2ggdGhlIGdpdmVuIHBhdGguXG4gICAqL1xuICBleHRyYWN0UGFyYW1zOiBmdW5jdGlvbiBleHRyYWN0UGFyYW1zKHBhdHRlcm4sIHBhdGgpIHtcbiAgICB2YXIgX2NvbXBpbGVQYXR0ZXJuID0gY29tcGlsZVBhdHRlcm4ocGF0dGVybik7XG5cbiAgICB2YXIgbWF0Y2hlciA9IF9jb21waWxlUGF0dGVybi5tYXRjaGVyO1xuICAgIHZhciBwYXJhbU5hbWVzID0gX2NvbXBpbGVQYXR0ZXJuLnBhcmFtTmFtZXM7XG5cbiAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKG1hdGNoZXIpO1xuXG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfXZhciBwYXJhbXMgPSB7fTtcblxuICAgIHBhcmFtTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW1OYW1lLCBpbmRleCkge1xuICAgICAgcGFyYW1zW3BhcmFtTmFtZV0gPSBtYXRjaFtpbmRleCArIDFdO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIGdpdmVuIHJvdXRlIHBhdGggd2l0aCBwYXJhbXMgaW50ZXJwb2xhdGVkLiBUaHJvd3NcbiAgICogaWYgdGhlcmUgaXMgYSBkeW5hbWljIHNlZ21lbnQgb2YgdGhlIHJvdXRlIHBhdGggZm9yIHdoaWNoIHRoZXJlIGlzIG5vIHBhcmFtLlxuICAgKi9cbiAgaW5qZWN0UGFyYW1zOiBmdW5jdGlvbiBpbmplY3RQYXJhbXMocGF0dGVybiwgcGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgdmFyIHNwbGF0SW5kZXggPSAwO1xuXG4gICAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZShwYXJhbUluamVjdE1hdGNoZXIsIGZ1bmN0aW9uIChtYXRjaCwgcGFyYW1OYW1lKSB7XG4gICAgICBwYXJhbU5hbWUgPSBwYXJhbU5hbWUgfHwgJ3NwbGF0JztcblxuICAgICAgLy8gSWYgcGFyYW0gaXMgb3B0aW9uYWwgZG9uJ3QgY2hlY2sgZm9yIGV4aXN0ZW5jZVxuICAgICAgaWYgKHBhcmFtTmFtZS5zbGljZSgtMSkgPT09ICc/Jykge1xuICAgICAgICBwYXJhbU5hbWUgPSBwYXJhbU5hbWUuc2xpY2UoMCwgLTEpO1xuXG4gICAgICAgIGlmIChwYXJhbXNbcGFyYW1OYW1lXSA9PSBudWxsKSByZXR1cm4gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnZhcmlhbnQocGFyYW1zW3BhcmFtTmFtZV0gIT0gbnVsbCwgJ01pc3NpbmcgXCIlc1wiIHBhcmFtZXRlciBmb3IgcGF0aCBcIiVzXCInLCBwYXJhbU5hbWUsIHBhdHRlcm4pO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VnbWVudDtcbiAgICAgIGlmIChwYXJhbU5hbWUgPT09ICdzcGxhdCcgJiYgQXJyYXkuaXNBcnJheShwYXJhbXNbcGFyYW1OYW1lXSkpIHtcbiAgICAgICAgc2VnbWVudCA9IHBhcmFtc1twYXJhbU5hbWVdW3NwbGF0SW5kZXgrK107XG5cbiAgICAgICAgaW52YXJpYW50KHNlZ21lbnQgIT0gbnVsbCwgJ01pc3Npbmcgc3BsYXQgIyAlcyBmb3IgcGF0aCBcIiVzXCInLCBzcGxhdEluZGV4LCBwYXR0ZXJuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZ21lbnQgPSBwYXJhbXNbcGFyYW1OYW1lXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlZ21lbnQ7XG4gICAgfSkucmVwbGFjZShwYXJhbUluamVjdFRyYWlsaW5nU2xhc2hNYXRjaGVyLCAnLycpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGlzIHRoZSByZXN1bHQgb2YgcGFyc2luZyBhbnkgcXVlcnkgc3RyaW5nIGNvbnRhaW5lZFxuICAgKiBpbiB0aGUgZ2l2ZW4gcGF0aCwgbnVsbCBpZiB0aGUgcGF0aCBjb250YWlucyBubyBxdWVyeSBzdHJpbmcuXG4gICAqL1xuICBleHRyYWN0UXVlcnk6IGZ1bmN0aW9uIGV4dHJhY3RRdWVyeShwYXRoKSB7XG4gICAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChxdWVyeU1hdGNoZXIpO1xuICAgIHJldHVybiBtYXRjaCAmJiBxcy5wYXJzZShtYXRjaFsxXSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBwYXRoIHdpdGhvdXQgdGhlIHF1ZXJ5IHN0cmluZy5cbiAgICovXG4gIHdpdGhvdXRRdWVyeTogZnVuY3Rpb24gd2l0aG91dFF1ZXJ5KHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKHF1ZXJ5TWF0Y2hlciwgJycpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcGF0aCB3aXRoIHRoZSBwYXJhbWV0ZXJzIGluIHRoZSBnaXZlblxuICAgKiBxdWVyeSBtZXJnZWQgaW50byB0aGUgcXVlcnkgc3RyaW5nLlxuICAgKi9cbiAgd2l0aFF1ZXJ5OiBmdW5jdGlvbiB3aXRoUXVlcnkocGF0aCwgcXVlcnkpIHtcbiAgICB2YXIgZXhpc3RpbmdRdWVyeSA9IFBhdGhVdGlscy5leHRyYWN0UXVlcnkocGF0aCk7XG5cbiAgICBpZiAoZXhpc3RpbmdRdWVyeSkgcXVlcnkgPSBxdWVyeSA/IGFzc2lnbihleGlzdGluZ1F1ZXJ5LCBxdWVyeSkgOiBleGlzdGluZ1F1ZXJ5O1xuXG4gICAgdmFyIHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHF1ZXJ5LCB7IGFycmF5Rm9ybWF0OiAnYnJhY2tldHMnIH0pO1xuXG4gICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICByZXR1cm4gUGF0aFV0aWxzLndpdGhvdXRRdWVyeShwYXRoKSArICc/JyArIHF1ZXJ5U3RyaW5nO1xuICAgIH1yZXR1cm4gUGF0aFV0aWxzLndpdGhvdXRRdWVyeShwYXRoKTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhdGhVdGlsczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdyZWFjdC9saWIvT2JqZWN0LmFzc2lnbicpO1xudmFyIFJlYWN0UHJvcFR5cGVzID0gcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXM7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG5cbnZhciBQcm9wVHlwZXMgPSBhc3NpZ24oe30sIFJlYWN0UHJvcFR5cGVzLCB7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IGEgcHJvcCBzaG91bGQgYmUgZmFsc3kuXG4gICAqL1xuICBmYWxzeTogZnVuY3Rpb24gZmFsc3kocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignPCcgKyBjb21wb25lbnROYW1lICsgJz4gc2hvdWxkIG5vdCBoYXZlIGEgXCInICsgcHJvcE5hbWUgKyAnXCIgcHJvcCcpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgYSBwcm9wIHNob3VsZCBiZSBhIFJvdXRlIG9iamVjdC5cbiAgICovXG4gIHJvdXRlOiBSZWFjdFByb3BUeXBlcy5pbnN0YW5jZU9mKFJvdXRlKSxcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgYSBwcm9wIHNob3VsZCBiZSBhIFJvdXRlciBvYmplY3QuXG4gICAqL1xuICAvL3JvdXRlcjogUmVhY3RQcm9wVHlwZXMuaW5zdGFuY2VPZihSb3V0ZXIpIC8vIFRPRE9cbiAgcm91dGVyOiBSZWFjdFByb3BUeXBlcy5mdW5jXG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3BUeXBlczsiLCIvKipcbiAqIEVuY2Fwc3VsYXRlcyBhIHJlZGlyZWN0IHRvIHRoZSBnaXZlbiByb3V0ZS5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIFJlZGlyZWN0KHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gIHRoaXMudG8gPSB0bztcbiAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIHRoaXMucXVlcnkgPSBxdWVyeTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWRpcmVjdDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdyZWFjdC9saWIvT2JqZWN0LmFzc2lnbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgncmVhY3QvbGliL3dhcm5pbmcnKTtcbnZhciBQYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX2N1cnJlbnRSb3V0ZTtcblxudmFyIFJvdXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUm91dGUobmFtZSwgcGF0aCwgaWdub3JlU2Nyb2xsQmVoYXZpb3IsIGlzRGVmYXVsdCwgaXNOb3RGb3VuZCwgb25FbnRlciwgb25MZWF2ZSwgaGFuZGxlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZSk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5wYXJhbU5hbWVzID0gUGF0aFV0aWxzLmV4dHJhY3RQYXJhbU5hbWVzKHRoaXMucGF0aCk7XG4gICAgdGhpcy5pZ25vcmVTY3JvbGxCZWhhdmlvciA9ICEhaWdub3JlU2Nyb2xsQmVoYXZpb3I7XG4gICAgdGhpcy5pc0RlZmF1bHQgPSAhIWlzRGVmYXVsdDtcbiAgICB0aGlzLmlzTm90Rm91bmQgPSAhIWlzTm90Rm91bmQ7XG4gICAgdGhpcy5vbkVudGVyID0gb25FbnRlcjtcbiAgICB0aGlzLm9uTGVhdmUgPSBvbkxlYXZlO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUm91dGUsIFt7XG4gICAga2V5OiAnYXBwZW5kQ2hpbGQnLFxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyB0aGUgZ2l2ZW4gcm91dGUgdG8gdGhpcyByb3V0ZSdzIGNoaWxkIHJvdXRlcy5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kQ2hpbGQocm91dGUpIHtcbiAgICAgIGludmFyaWFudChyb3V0ZSBpbnN0YW5jZW9mIFJvdXRlLCAncm91dGUuYXBwZW5kQ2hpbGQgbXVzdCB1c2UgYSB2YWxpZCBSb3V0ZScpO1xuXG4gICAgICBpZiAoIXRoaXMuY2hpbGRSb3V0ZXMpIHRoaXMuY2hpbGRSb3V0ZXMgPSBbXTtcblxuICAgICAgdGhpcy5jaGlsZFJvdXRlcy5wdXNoKHJvdXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgdmFyIHN0cmluZyA9ICc8Um91dGUnO1xuXG4gICAgICBpZiAodGhpcy5uYW1lKSBzdHJpbmcgKz0gJyBuYW1lPVwiJyArIHRoaXMubmFtZSArICdcIic7XG5cbiAgICAgIHN0cmluZyArPSAnIHBhdGg9XCInICsgdGhpcy5wYXRoICsgJ1wiPic7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdjcmVhdGVSb3V0ZScsXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgbmV3IHJvdXRlLiBPcHRpb25zIG1heSBiZSBhIFVSTCBwYXRobmFtZSBzdHJpbmdcbiAgICAgKiB3aXRoIHBsYWNlaG9sZGVycyBmb3IgbmFtZWQgcGFyYW1zIG9yIGFuIG9iamVjdCB3aXRoIGFueSBvZiB0aGUgZm9sbG93aW5nXG4gICAgICogcHJvcGVydGllczpcbiAgICAgKlxuICAgICAqIC0gbmFtZSAgICAgICAgICAgICAgICAgICAgIFRoZSBuYW1lIG9mIHRoZSByb3V0ZS4gVGhpcyBpcyB1c2VkIHRvIGxvb2t1cCBhXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgcmVsYXRpdmUgdG8gaXRzIHBhcmVudCByb3V0ZSBhbmQgc2hvdWxkIGJlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlIGFtb25nIGFsbCBjaGlsZCByb3V0ZXMgb2YgdGhlIHNhbWUgcGFyZW50XG4gICAgICogLSBwYXRoICAgICAgICAgICAgICAgICAgICAgQSBVUkwgcGF0aG5hbWUgc3RyaW5nIHdpdGggb3B0aW9uYWwgcGxhY2Vob2xkZXJzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBzcGVjaWZ5IHRoZSBuYW1lcyBvZiBwYXJhbXMgdG8gZXh0cmFjdCBmcm9tXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIFVSTCB3aGVuIHRoZSBwYXRoIG1hdGNoZXMuIERlZmF1bHRzIHRvIGAvJHtuYW1lfWBcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIHRoZXJlIGlzIGEgbmFtZSBnaXZlbiwgb3IgdGhlIHBhdGggb2YgdGhlIHBhcmVudFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLCBvciAvXG4gICAgICogLSBpZ25vcmVTY3JvbGxCZWhhdmlvciAgICAgVHJ1ZSB0byBtYWtlIHRoaXMgcm91dGUgKGFuZCBhbGwgZGVzY2VuZGFudHMpIGlnbm9yZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBzY3JvbGwgYmVoYXZpb3Igb2YgdGhlIHJvdXRlclxuICAgICAqIC0gaXNEZWZhdWx0ICAgICAgICAgICAgICAgIFRydWUgdG8gbWFrZSB0aGlzIHJvdXRlIHRoZSBkZWZhdWx0IHJvdXRlIGFtb25nIGFsbFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0cyBzaWJsaW5nc1xuICAgICAqIC0gaXNOb3RGb3VuZCAgICAgICAgICAgICAgIFRydWUgdG8gbWFrZSB0aGlzIHJvdXRlIHRoZSBcIm5vdCBmb3VuZFwiIHJvdXRlIGFtb25nXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsIGl0cyBzaWJsaW5nc1xuICAgICAqIC0gb25FbnRlciAgICAgICAgICAgICAgICAgIEEgdHJhbnNpdGlvbiBob29rIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGVcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIgaXMgZ29pbmcgdG8gZW50ZXIgdGhpcyByb3V0ZVxuICAgICAqIC0gb25MZWF2ZSAgICAgICAgICAgICAgICAgIEEgdHJhbnNpdGlvbiBob29rIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGVcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIgaXMgZ29pbmcgdG8gbGVhdmUgdGhpcyByb3V0ZVxuICAgICAqIC0gaGFuZGxlciAgICAgICAgICAgICAgICAgIEEgUmVhY3QgY29tcG9uZW50IHRoYXQgd2lsbCBiZSByZW5kZXJlZCB3aGVuXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyByb3V0ZSBpcyBhY3RpdmVcbiAgICAgKiAtIHBhcmVudFJvdXRlICAgICAgICAgICAgICBUaGUgcGFyZW50IHJvdXRlIHRvIHVzZSBmb3IgdGhpcyByb3V0ZS4gVGhpcyBvcHRpb25cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcyBhdXRvbWF0aWNhbGx5IHN1cHBsaWVkIHdoZW4gY3JlYXRpbmcgcm91dGVzIGluc2lkZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBjYWxsYmFjayB0byBhbm90aGVyIGludm9jYXRpb24gb2YgY3JlYXRlUm91dGUuIFlvdVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHkgZXZlciBuZWVkIHRvIHVzZSB0aGlzIHdoZW4gZGVjbGFyaW5nIHJvdXRlc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGVwZW5kZW50bHkgb2Ygb25lIGFub3RoZXIgdG8gbWFudWFsbHkgcGllY2UgdG9nZXRoZXJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgcm91dGUgaGllcmFyY2h5XG4gICAgICpcbiAgICAgKiBUaGUgY2FsbGJhY2sgbWF5IGJlIHVzZWQgdG8gc3RydWN0dXJlIHlvdXIgcm91dGUgaGllcmFyY2h5LiBBbnkgY2FsbCB0b1xuICAgICAqIGNyZWF0ZVJvdXRlLCBjcmVhdGVEZWZhdWx0Um91dGUsIGNyZWF0ZU5vdEZvdW5kUm91dGUsIG9yIGNyZWF0ZVJlZGlyZWN0XG4gICAgICogaW5zaWRlIHRoZSBjYWxsYmFjayBhdXRvbWF0aWNhbGx5IHVzZXMgdGhpcyByb3V0ZSBhcyBpdHMgcGFyZW50LlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVSb3V0ZShvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIG9wdGlvbnMgPSB7IHBhdGg6IG9wdGlvbnMgfTtcblxuICAgICAgdmFyIHBhcmVudFJvdXRlID0gX2N1cnJlbnRSb3V0ZTtcblxuICAgICAgaWYgKHBhcmVudFJvdXRlKSB7XG4gICAgICAgIHdhcm5pbmcob3B0aW9ucy5wYXJlbnRSb3V0ZSA9PSBudWxsIHx8IG9wdGlvbnMucGFyZW50Um91dGUgPT09IHBhcmVudFJvdXRlLCAnWW91IHNob3VsZCBub3QgdXNlIHBhcmVudFJvdXRlIHdpdGggY3JlYXRlUm91dGUgaW5zaWRlIGFub3RoZXIgcm91dGVcXCdzIGNoaWxkIGNhbGxiYWNrOyBpdCBpcyBpZ25vcmVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRSb3V0ZSA9IG9wdGlvbnMucGFyZW50Um91dGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lO1xuICAgICAgdmFyIHBhdGggPSBvcHRpb25zLnBhdGggfHwgbmFtZTtcblxuICAgICAgaWYgKHBhdGggJiYgIShvcHRpb25zLmlzRGVmYXVsdCB8fCBvcHRpb25zLmlzTm90Rm91bmQpKSB7XG4gICAgICAgIGlmIChQYXRoVXRpbHMuaXNBYnNvbHV0ZShwYXRoKSkge1xuICAgICAgICAgIGlmIChwYXJlbnRSb3V0ZSkge1xuICAgICAgICAgICAgaW52YXJpYW50KHBhdGggPT09IHBhcmVudFJvdXRlLnBhdGggfHwgcGFyZW50Um91dGUucGFyYW1OYW1lcy5sZW5ndGggPT09IDAsICdZb3UgY2Fubm90IG5lc3QgcGF0aCBcIiVzXCIgaW5zaWRlIFwiJXNcIjsgdGhlIHBhcmVudCByZXF1aXJlcyBVUkwgcGFyYW1ldGVycycsIHBhdGgsIHBhcmVudFJvdXRlLnBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwYXJlbnRSb3V0ZSkge1xuICAgICAgICAgIC8vIFJlbGF0aXZlIHBhdGhzIGV4dGVuZCB0aGVpciBwYXJlbnQuXG4gICAgICAgICAgcGF0aCA9IFBhdGhVdGlscy5qb2luKHBhcmVudFJvdXRlLnBhdGgsIHBhdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhdGggPSAnLycgKyBwYXRoO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoID0gcGFyZW50Um91dGUgPyBwYXJlbnRSb3V0ZS5wYXRoIDogJy8nO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5pc05vdEZvdW5kICYmICEvXFwqJC8udGVzdChwYXRoKSkgcGF0aCArPSAnKic7IC8vIEF1dG8tYXBwZW5kICogdG8gdGhlIHBhdGggb2Ygbm90IGZvdW5kIHJvdXRlcy5cblxuICAgICAgdmFyIHJvdXRlID0gbmV3IFJvdXRlKG5hbWUsIHBhdGgsIG9wdGlvbnMuaWdub3JlU2Nyb2xsQmVoYXZpb3IsIG9wdGlvbnMuaXNEZWZhdWx0LCBvcHRpb25zLmlzTm90Rm91bmQsIG9wdGlvbnMub25FbnRlciwgb3B0aW9ucy5vbkxlYXZlLCBvcHRpb25zLmhhbmRsZXIpO1xuXG4gICAgICBpZiAocGFyZW50Um91dGUpIHtcbiAgICAgICAgaWYgKHJvdXRlLmlzRGVmYXVsdCkge1xuICAgICAgICAgIGludmFyaWFudChwYXJlbnRSb3V0ZS5kZWZhdWx0Um91dGUgPT0gbnVsbCwgJyVzIG1heSBub3QgaGF2ZSBtb3JlIHRoYW4gb25lIGRlZmF1bHQgcm91dGUnLCBwYXJlbnRSb3V0ZSk7XG5cbiAgICAgICAgICBwYXJlbnRSb3V0ZS5kZWZhdWx0Um91dGUgPSByb3V0ZTtcbiAgICAgICAgfSBlbHNlIGlmIChyb3V0ZS5pc05vdEZvdW5kKSB7XG4gICAgICAgICAgaW52YXJpYW50KHBhcmVudFJvdXRlLm5vdEZvdW5kUm91dGUgPT0gbnVsbCwgJyVzIG1heSBub3QgaGF2ZSBtb3JlIHRoYW4gb25lIG5vdCBmb3VuZCByb3V0ZScsIHBhcmVudFJvdXRlKTtcblxuICAgICAgICAgIHBhcmVudFJvdXRlLm5vdEZvdW5kUm91dGUgPSByb3V0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudFJvdXRlLmFwcGVuZENoaWxkKHJvdXRlKTtcbiAgICAgIH1cblxuICAgICAgLy8gQW55IHJvdXRlcyBjcmVhdGVkIGluIHRoZSBjYWxsYmFja1xuICAgICAgLy8gdXNlIHRoaXMgcm91dGUgYXMgdGhlaXIgcGFyZW50LlxuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgY3VycmVudFJvdXRlID0gX2N1cnJlbnRSb3V0ZTtcbiAgICAgICAgX2N1cnJlbnRSb3V0ZSA9IHJvdXRlO1xuICAgICAgICBjYWxsYmFjay5jYWxsKHJvdXRlLCByb3V0ZSk7XG4gICAgICAgIF9jdXJyZW50Um91dGUgPSBjdXJyZW50Um91dGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVEZWZhdWx0Um91dGUnLFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIHJvdXRlIHRoYXQgaXMgcmVuZGVyZWQgd2hlbiBpdHMgcGFyZW50IG1hdGNoZXNcbiAgICAgKiB0aGUgY3VycmVudCBVUkwuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRSb3V0ZShvcHRpb25zKSB7XG4gICAgICByZXR1cm4gUm91dGUuY3JlYXRlUm91dGUoYXNzaWduKHt9LCBvcHRpb25zLCB7IGlzRGVmYXVsdDogdHJ1ZSB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlTm90Rm91bmRSb3V0ZScsXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgcm91dGUgdGhhdCBpcyByZW5kZXJlZCB3aGVuIGl0cyBwYXJlbnQgbWF0Y2hlc1xuICAgICAqIHRoZSBjdXJyZW50IFVSTCBidXQgbm9uZSBvZiBpdHMgc2libGluZ3MgZG8uXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU5vdEZvdW5kUm91dGUob3B0aW9ucykge1xuICAgICAgcmV0dXJuIFJvdXRlLmNyZWF0ZVJvdXRlKGFzc2lnbih7fSwgb3B0aW9ucywgeyBpc05vdEZvdW5kOiB0cnVlIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVSZWRpcmVjdCcsXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgcm91dGUgdGhhdCBhdXRvbWF0aWNhbGx5IHJlZGlyZWN0cyB0aGUgdHJhbnNpdGlvblxuICAgICAqIHRvIGFub3RoZXIgcm91dGUuIEluIGFkZGl0aW9uIHRvIHRoZSBub3JtYWwgb3B0aW9ucyB0byBjcmVhdGVSb3V0ZSwgdGhpc1xuICAgICAqIGZ1bmN0aW9uIGFjY2VwdHMgdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgICAqXG4gICAgICogLSBmcm9tICAgICAgICAgQW4gYWxpYXMgZm9yIHRoZSBgcGF0aGAgb3B0aW9uLiBEZWZhdWx0cyB0byAqXG4gICAgICogLSB0byAgICAgICAgICAgVGhlIHBhdGgvcm91dGUvcm91dGUgbmFtZSB0byByZWRpcmVjdCB0b1xuICAgICAqIC0gcGFyYW1zICAgICAgIFRoZSBwYXJhbXMgdG8gdXNlIGluIHRoZSByZWRpcmVjdCBVUkwuIERlZmF1bHRzXG4gICAgICogICAgICAgICAgICAgICAgdG8gdXNpbmcgdGhlIGN1cnJlbnQgcGFyYW1zXG4gICAgICogLSBxdWVyeSAgICAgICAgVGhlIHF1ZXJ5IHRvIHVzZSBpbiB0aGUgcmVkaXJlY3QgVVJMLiBEZWZhdWx0c1xuICAgICAqICAgICAgICAgICAgICAgIHRvIHVzaW5nIHRoZSBjdXJyZW50IHF1ZXJ5XG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVJlZGlyZWN0KG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBSb3V0ZS5jcmVhdGVSb3V0ZShhc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgcGF0aDogb3B0aW9ucy5wYXRoIHx8IG9wdGlvbnMuZnJvbSB8fCAnKicsXG4gICAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uIG9uRW50ZXIodHJhbnNpdGlvbiwgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICAgIHRyYW5zaXRpb24ucmVkaXJlY3Qob3B0aW9ucy50bywgb3B0aW9ucy5wYXJhbXMgfHwgcGFyYW1zLCBvcHRpb25zLnF1ZXJ5IHx8IHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSb3V0ZTtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gUm91dGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpLmNhblVzZURPTTtcbnZhciBnZXRXaW5kb3dTY3JvbGxQb3NpdGlvbiA9IHJlcXVpcmUoJy4vZ2V0V2luZG93U2Nyb2xsUG9zaXRpb24nKTtcblxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlU2Nyb2xsKHN0YXRlLCBwcmV2U3RhdGUpIHtcbiAgaWYgKCFwcmV2U3RhdGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBEb24ndCB1cGRhdGUgc2Nyb2xsIHBvc2l0aW9uIHdoZW4gb25seSB0aGUgcXVlcnkgaGFzIGNoYW5nZWQuXG4gIGlmIChzdGF0ZS5wYXRobmFtZSA9PT0gcHJldlN0YXRlLnBhdGhuYW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9dmFyIHJvdXRlcyA9IHN0YXRlLnJvdXRlcztcbiAgdmFyIHByZXZSb3V0ZXMgPSBwcmV2U3RhdGUucm91dGVzO1xuXG4gIHZhciBzaGFyZWRBbmNlc3RvclJvdXRlcyA9IHJvdXRlcy5maWx0ZXIoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgcmV0dXJuIHByZXZSb3V0ZXMuaW5kZXhPZihyb3V0ZSkgIT09IC0xO1xuICB9KTtcblxuICByZXR1cm4gIXNoYXJlZEFuY2VzdG9yUm91dGVzLnNvbWUoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgcmV0dXJuIHJvdXRlLmlnbm9yZVNjcm9sbEJlaGF2aW9yO1xuICB9KTtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyB0aGUgcm91dGVyIHdpdGggdGhlIGFiaWxpdHkgdG8gbWFuYWdlIHdpbmRvdyBzY3JvbGwgcG9zaXRpb25cbiAqIGFjY29yZGluZyB0byBpdHMgc2Nyb2xsIGJlaGF2aW9yLlxuICovXG52YXIgU2Nyb2xsSGlzdG9yeSA9IHtcblxuICBzdGF0aWNzOiB7XG5cbiAgICAvKipcbiAgICAgKiBSZWNvcmRzIGN1cmVudCBzY3JvbGwgcG9zaXRpb24gYXMgdGhlIGxhc3Qga25vd24gcG9zaXRpb24gZm9yIHRoZSBnaXZlbiBVUkwgcGF0aC5cbiAgICAgKi9cbiAgICByZWNvcmRTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24gcmVjb3JkU2Nyb2xsUG9zaXRpb24ocGF0aCkge1xuICAgICAgaWYgKCF0aGlzLnNjcm9sbEhpc3RvcnkpIHRoaXMuc2Nyb2xsSGlzdG9yeSA9IHt9O1xuXG4gICAgICB0aGlzLnNjcm9sbEhpc3RvcnlbcGF0aF0gPSBnZXRXaW5kb3dTY3JvbGxQb3NpdGlvbigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYXN0IGtub3duIHNjcm9sbCBwb3NpdGlvbiBmb3IgdGhlIGdpdmVuIFVSTCBwYXRoLlxuICAgICAqL1xuICAgIGdldFNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbihwYXRoKSB7XG4gICAgICBpZiAoIXRoaXMuc2Nyb2xsSGlzdG9yeSkgdGhpcy5zY3JvbGxIaXN0b3J5ID0ge307XG5cbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbEhpc3RvcnlbcGF0aF0gfHwgbnVsbDtcbiAgICB9XG5cbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpbnZhcmlhbnQodGhpcy5jb25zdHJ1Y3Rvci5nZXRTY3JvbGxCZWhhdmlvcigpID09IG51bGwgfHwgY2FuVXNlRE9NLCAnQ2Fubm90IHVzZSBzY3JvbGwgYmVoYXZpb3Igd2l0aG91dCBhIERPTScpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl91cGRhdGVTY3JvbGwoKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVNjcm9sbChwcmV2U3RhdGUpO1xuICB9LFxuXG4gIF91cGRhdGVTY3JvbGw6IGZ1bmN0aW9uIF91cGRhdGVTY3JvbGwocHJldlN0YXRlKSB7XG4gICAgaWYgKCFzaG91bGRVcGRhdGVTY3JvbGwodGhpcy5zdGF0ZSwgcHJldlN0YXRlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH12YXIgc2Nyb2xsQmVoYXZpb3IgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFNjcm9sbEJlaGF2aW9yKCk7XG5cbiAgICBpZiAoc2Nyb2xsQmVoYXZpb3IpIHNjcm9sbEJlaGF2aW9yLnVwZGF0ZVNjcm9sbFBvc2l0aW9uKHRoaXMuY29uc3RydWN0b3IuZ2V0U2Nyb2xsUG9zaXRpb24odGhpcy5zdGF0ZS5wYXRoKSwgdGhpcy5zdGF0ZS5hY3Rpb24pO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsSGlzdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG4vKipcbiAqIEEgbWl4aW4gZm9yIGNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGtub3cgdGhlIHBhdGgsIHJvdXRlcywgVVJMXG4gKiBwYXJhbXMgYW5kIHF1ZXJ5IHRoYXQgYXJlIGN1cnJlbnRseSBhY3RpdmUuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgIHZhciBBYm91dExpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICAgbWl4aW5zOiBbIFJvdXRlci5TdGF0ZSBdLFxuICogICAgIHJlbmRlcigpIHtcbiAqICAgICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAqXG4gKiAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSgnYWJvdXQnKSlcbiAqICAgICAgICAgY2xhc3NOYW1lICs9ICcgaXMtYWN0aXZlJztcbiAqXG4gKiAgICAgICByZXR1cm4gUmVhY3QuRE9NLmEoeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICovXG52YXIgU3RhdGUgPSB7XG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBQcm9wVHlwZXMucm91dGVyLmlzUmVxdWlyZWRcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBVUkwgcGF0aC5cbiAgICovXG4gIGdldFBhdGg6IGZ1bmN0aW9uIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFBhdGgoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBVUkwgcGF0aCB3aXRob3V0IHRoZSBxdWVyeSBzdHJpbmcuXG4gICAqL1xuICBnZXRQYXRobmFtZTogZnVuY3Rpb24gZ2V0UGF0aG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFBhdGhuYW1lKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHRoZSBVUkwgcGFyYW1zIHRoYXQgYXJlIGN1cnJlbnRseSBhY3RpdmUuXG4gICAqL1xuICBnZXRQYXJhbXM6IGZ1bmN0aW9uIGdldFBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UGFyYW1zKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHRoZSBxdWVyeSBwYXJhbXMgdGhhdCBhcmUgY3VycmVudGx5IGFjdGl2ZS5cbiAgICovXG4gIGdldFF1ZXJ5OiBmdW5jdGlvbiBnZXRRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UXVlcnkoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgcm91dGVzIHRoYXQgYXJlIGN1cnJlbnRseSBhY3RpdmUuXG4gICAqL1xuICBnZXRSb3V0ZXM6IGZ1bmN0aW9uIGdldFJvdXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50Um91dGVzKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byBkZXRlcm1pbmUgaWYgYSBnaXZlbiByb3V0ZSwgcGFyYW1zLCBhbmQgcXVlcnlcbiAgICogYXJlIGFjdGl2ZS5cbiAgICovXG4gIGlzQWN0aXZlOiBmdW5jdGlvbiBpc0FjdGl2ZSh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmlzQWN0aXZlKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlOyIsIi8qIGpzaGludCAtVzA1OCAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWxsYXRpb24gPSByZXF1aXJlKCcuL0NhbmNlbGxhdGlvbicpO1xudmFyIFJlZGlyZWN0ID0gcmVxdWlyZSgnLi9SZWRpcmVjdCcpO1xuXG4vKipcbiAqIEVuY2Fwc3VsYXRlcyBhIHRyYW5zaXRpb24gdG8gYSBnaXZlbiBwYXRoLlxuICpcbiAqIFRoZSB3aWxsVHJhbnNpdGlvblRvIGFuZCB3aWxsVHJhbnNpdGlvbkZyb20gaGFuZGxlcnMgcmVjZWl2ZVxuICogYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBhcyB0aGVpciBmaXJzdCBhcmd1bWVudC5cbiAqL1xuZnVuY3Rpb24gVHJhbnNpdGlvbihwYXRoLCByZXRyeSkge1xuICB0aGlzLnBhdGggPSBwYXRoO1xuICB0aGlzLmFib3J0UmVhc29uID0gbnVsbDtcbiAgLy8gVE9ETzogQ2hhbmdlIHRoaXMgdG8gcm91dGVyLnJldHJ5VHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICB0aGlzLnJldHJ5ID0gcmV0cnkuYmluZCh0aGlzKTtcbn1cblxuVHJhbnNpdGlvbi5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gIGlmICh0aGlzLmFib3J0UmVhc29uID09IG51bGwpIHRoaXMuYWJvcnRSZWFzb24gPSByZWFzb24gfHwgJ0FCT1JUJztcbn07XG5cblRyYW5zaXRpb24ucHJvdG90eXBlLnJlZGlyZWN0ID0gZnVuY3Rpb24gKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gIHRoaXMuYWJvcnQobmV3IFJlZGlyZWN0KHRvLCBwYXJhbXMsIHF1ZXJ5KSk7XG59O1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYWJvcnQobmV3IENhbmNlbGxhdGlvbigpKTtcbn07XG5cblRyYW5zaXRpb24uZnJvbSA9IGZ1bmN0aW9uICh0cmFuc2l0aW9uLCByb3V0ZXMsIGNvbXBvbmVudHMsIGNhbGxiYWNrKSB7XG4gIHJvdXRlcy5yZWR1Y2UoZnVuY3Rpb24gKGNhbGxiYWNrLCByb3V0ZSwgaW5kZXgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IgfHwgdHJhbnNpdGlvbi5hYm9ydFJlYXNvbikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKHJvdXRlLm9uTGVhdmUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZS5vbkxlYXZlKHRyYW5zaXRpb24sIGNvbXBvbmVudHNbaW5kZXhdLCBjYWxsYmFjayk7XG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBjYWxsYmFjayBpbiB0aGUgYXJndW1lbnQgbGlzdCwgY2FsbCBpdCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgIGlmIChyb3V0ZS5vbkxlYXZlLmxlbmd0aCA8IDMpIGNhbGxiYWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBjYWxsYmFjaykoKTtcbn07XG5cblRyYW5zaXRpb24udG8gPSBmdW5jdGlvbiAodHJhbnNpdGlvbiwgcm91dGVzLCBwYXJhbXMsIHF1ZXJ5LCBjYWxsYmFjaykge1xuICByb3V0ZXMucmVkdWNlUmlnaHQoZnVuY3Rpb24gKGNhbGxiYWNrLCByb3V0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciB8fCB0cmFuc2l0aW9uLmFib3J0UmVhc29uKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAocm91dGUub25FbnRlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlLm9uRW50ZXIodHJhbnNpdGlvbiwgcGFyYW1zLCBxdWVyeSwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gY2FsbGJhY2sgaW4gdGhlIGFyZ3VtZW50IGxpc3QsIGNhbGwgaXQgYXV0b21hdGljYWxseS5cbiAgICAgICAgICBpZiAocm91dGUub25FbnRlci5sZW5ndGggPCA0KSBjYWxsYmFjaygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY2FsbGJhY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgY2FsbGJhY2spKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zaXRpb247IiwiLyoqXG4gKiBBY3Rpb25zIHRoYXQgbW9kaWZ5IHRoZSBVUkwuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIExvY2F0aW9uQWN0aW9ucyA9IHtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIGEgbmV3IGxvY2F0aW9uIGlzIGJlaW5nIHB1c2hlZCB0byB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICovXG4gIFBVU0g6ICdwdXNoJyxcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBjdXJyZW50IGxvY2F0aW9uIHNob3VsZCBiZSByZXBsYWNlZC5cbiAgICovXG4gIFJFUExBQ0U6ICdyZXBsYWNlJyxcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBtb3N0IHJlY2VudCBlbnRyeSBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgKi9cbiAgUE9QOiAncG9wJ1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvY2F0aW9uQWN0aW9uczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucycpO1xuXG4vKipcbiAqIEEgc2Nyb2xsIGJlaGF2aW9yIHRoYXQgYXR0ZW1wdHMgdG8gaW1pdGF0ZSB0aGUgZGVmYXVsdCBiZWhhdmlvclxuICogb2YgbW9kZXJuIGJyb3dzZXJzLlxuICovXG52YXIgSW1pdGF0ZUJyb3dzZXJCZWhhdmlvciA9IHtcblxuICB1cGRhdGVTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24gdXBkYXRlU2Nyb2xsUG9zaXRpb24ocG9zaXRpb24sIGFjdGlvblR5cGUpIHtcbiAgICBzd2l0Y2ggKGFjdGlvblR5cGUpIHtcbiAgICAgIGNhc2UgTG9jYXRpb25BY3Rpb25zLlBVU0g6XG4gICAgICBjYXNlIExvY2F0aW9uQWN0aW9ucy5SRVBMQUNFOlxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2NhdGlvbkFjdGlvbnMuUE9QOlxuICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEltaXRhdGVCcm93c2VyQmVoYXZpb3I7IiwiLyoqXG4gKiBBIHNjcm9sbCBiZWhhdmlvciB0aGF0IGFsd2F5cyBzY3JvbGxzIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiAqIGFmdGVyIGEgdHJhbnNpdGlvbi5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBTY3JvbGxUb1RvcEJlaGF2aW9yID0ge1xuXG4gIHVwZGF0ZVNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbiB1cGRhdGVTY3JvbGxQb3NpdGlvbigpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGxUb1RvcEJlaGF2aW9yOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgbmVjZXNzYXJ5IHRvIGdldCBhcm91bmQgYSBjb250ZXh0IHdhcm5pbmdcbiAqIHByZXNlbnQgaW4gUmVhY3QgMC4xMy4wLiBJdCBzb3ZsZXMgdGhpcyBieSBwcm92aWRpbmcgYSBzZXBhcmF0aW9uXG4gKiBiZXR3ZWVuIHRoZSBcIm93bmVyXCIgYW5kIFwicGFyZW50XCIgY29udGV4dHMuXG4gKi9cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIENvbnRleHRXcmFwcGVyID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIENvbnRleHRXcmFwcGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250ZXh0V3JhcHBlcik7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKENvbnRleHRXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoQ29udGV4dFdyYXBwZXIsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbnRleHRXcmFwcGVyO1xufSkoUmVhY3QuQ29tcG9uZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250ZXh0V3JhcHBlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG52YXIgUm91dGVIYW5kbGVyID0gcmVxdWlyZSgnLi9Sb3V0ZUhhbmRsZXInKTtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxuLyoqXG4gKiBBIDxEZWZhdWx0Um91dGU+IGNvbXBvbmVudCBpcyBhIHNwZWNpYWwga2luZCBvZiA8Um91dGU+IHRoYXRcbiAqIHJlbmRlcnMgd2hlbiBpdHMgcGFyZW50IG1hdGNoZXMgYnV0IG5vbmUgb2YgaXRzIHNpYmxpbmdzIGRvLlxuICogT25seSBvbmUgc3VjaCByb3V0ZSBtYXkgYmUgdXNlZCBhdCBhbnkgZ2l2ZW4gbGV2ZWwgaW4gdGhlXG4gKiByb3V0ZSBoaWVyYXJjaHkuXG4gKi9cblxudmFyIERlZmF1bHRSb3V0ZSA9IChmdW5jdGlvbiAoX1JvdXRlKSB7XG4gIGZ1bmN0aW9uIERlZmF1bHRSb3V0ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGVmYXVsdFJvdXRlKTtcblxuICAgIGlmIChfUm91dGUgIT0gbnVsbCkge1xuICAgICAgX1JvdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKERlZmF1bHRSb3V0ZSwgX1JvdXRlKTtcblxuICByZXR1cm4gRGVmYXVsdFJvdXRlO1xufSkoUm91dGUpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cbkRlZmF1bHRSb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhdGg6IFByb3BUeXBlcy5mYWxzeSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mYWxzeSxcbiAgaGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuRGVmYXVsdFJvdXRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGFuZGxlcjogUm91dGVIYW5kbGVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmF1bHRSb3V0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIGlzTGVmdENsaWNrRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxuLyoqXG4gKiA8TGluaz4gY29tcG9uZW50cyBhcmUgdXNlZCB0byBjcmVhdGUgYW4gPGE+IGVsZW1lbnQgdGhhdCBsaW5rcyB0byBhIHJvdXRlLlxuICogV2hlbiB0aGF0IHJvdXRlIGlzIGFjdGl2ZSwgdGhlIGxpbmsgZ2V0cyBhbiBcImFjdGl2ZVwiIGNsYXNzIG5hbWUgKG9yIHRoZVxuICogdmFsdWUgb2YgaXRzIGBhY3RpdmVDbGFzc05hbWVgIHByb3ApLlxuICpcbiAqIEZvciBleGFtcGxlLCBhc3N1bWluZyB5b3UgaGF2ZSB0aGUgZm9sbG93aW5nIHJvdXRlOlxuICpcbiAqICAgPFJvdXRlIG5hbWU9XCJzaG93UG9zdFwiIHBhdGg9XCIvcG9zdHMvOnBvc3RJRFwiIGhhbmRsZXI9e1Bvc3R9Lz5cbiAqXG4gKiBZb3UgY291bGQgdXNlIHRoZSBmb2xsb3dpbmcgY29tcG9uZW50IHRvIGxpbmsgdG8gdGhhdCByb3V0ZTpcbiAqXG4gKiAgIDxMaW5rIHRvPVwic2hvd1Bvc3RcIiBwYXJhbXM9e3sgcG9zdElEOiBcIjEyM1wiIH19IC8+XG4gKlxuICogSW4gYWRkaXRpb24gdG8gcGFyYW1zLCBsaW5rcyBtYXkgcGFzcyBhbG9uZyBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyc1xuICogdXNpbmcgdGhlIGBxdWVyeWAgcHJvcC5cbiAqXG4gKiAgIDxMaW5rIHRvPVwic2hvd1Bvc3RcIiBwYXJhbXM9e3sgcG9zdElEOiBcIjEyM1wiIH19IHF1ZXJ5PXt7IHNob3c6dHJ1ZSB9fS8+XG4gKi9cblxudmFyIExpbmsgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gTGluaygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGluayk7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKExpbmssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhMaW5rLCBbe1xuICAgIGtleTogJ2hhbmRsZUNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICAgIHZhciBhbGxvd1RyYW5zaXRpb24gPSB0cnVlO1xuICAgICAgdmFyIGNsaWNrUmVzdWx0O1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSBjbGlja1Jlc3VsdCA9IHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cbiAgICAgIGlmIChpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHx8ICFpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9aWYgKGNsaWNrUmVzdWx0ID09PSBmYWxzZSB8fCBldmVudC5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlKSBhbGxvd1RyYW5zaXRpb24gPSBmYWxzZTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGFsbG93VHJhbnNpdGlvbikgdGhpcy5jb250ZXh0LnJvdXRlci50cmFuc2l0aW9uVG8odGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5wYXJhbXMsIHRoaXMucHJvcHMucXVlcnkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEhyZWYnLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIFwiaHJlZlwiIGF0dHJpYnV0ZSB0byB1c2Ugb24gdGhlIERPTSBlbGVtZW50LlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRIcmVmKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIubWFrZUhyZWYodGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5wYXJhbXMsIHRoaXMucHJvcHMucXVlcnkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENsYXNzTmFtZScsXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgXCJjbGFzc1wiIGF0dHJpYnV0ZSB0byB1c2Ugb24gdGhlIERPTSBlbGVtZW50LCB3aGljaCBjb250YWluc1xuICAgICAqIHRoZSB2YWx1ZSBvZiB0aGUgYWN0aXZlQ2xhc3NOYW1lIHByb3BlcnR5IHdoZW4gdGhpcyA8TGluaz4gaXMgYWN0aXZlLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbGFzc05hbWUoKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XG5cbiAgICAgIGlmICh0aGlzLmdldEFjdGl2ZVN0YXRlKCkpIGNsYXNzTmFtZSArPSAnICcgKyB0aGlzLnByb3BzLmFjdGl2ZUNsYXNzTmFtZTtcblxuICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRBY3RpdmVTdGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFjdGl2ZVN0YXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuaXNBY3RpdmUodGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5wYXJhbXMsIHRoaXMucHJvcHMucXVlcnkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBwcm9wcyA9IGFzc2lnbih7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBocmVmOiB0aGlzLmdldEhyZWYoKSxcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmdldENsYXNzTmFtZSgpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocHJvcHMuYWN0aXZlU3R5bGUgJiYgdGhpcy5nZXRBY3RpdmVTdGF0ZSgpKSBwcm9wcy5zdHlsZSA9IHByb3BzLmFjdGl2ZVN0eWxlO1xuXG4gICAgICByZXR1cm4gUmVhY3QuRE9NLmEocHJvcHMsIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMaW5rO1xufSkoUmVhY3QuQ29tcG9uZW50KTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5MaW5rLmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBQcm9wVHlwZXMucm91dGVyLmlzUmVxdWlyZWRcbn07XG5cbkxpbmsucHJvcFR5cGVzID0ge1xuICBhY3RpdmVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdG86IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5yb3V0ZV0pLmlzUmVxdWlyZWQsXG4gIHBhcmFtczogUHJvcFR5cGVzLm9iamVjdCxcbiAgcXVlcnk6IFByb3BUeXBlcy5vYmplY3QsXG4gIGFjdGl2ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuTGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGl2ZUNsYXNzTmFtZTogJ2FjdGl2ZScsXG4gIGNsYXNzTmFtZTogJydcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluazsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG52YXIgUm91dGVIYW5kbGVyID0gcmVxdWlyZSgnLi9Sb3V0ZUhhbmRsZXInKTtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxuLyoqXG4gKiBBIDxOb3RGb3VuZFJvdXRlPiBpcyBhIHNwZWNpYWwga2luZCBvZiA8Um91dGU+IHRoYXRcbiAqIHJlbmRlcnMgd2hlbiB0aGUgYmVnaW5uaW5nIG9mIGl0cyBwYXJlbnQncyBwYXRoIG1hdGNoZXNcbiAqIGJ1dCBub25lIG9mIGl0cyBzaWJsaW5ncyBkbywgaW5jbHVkaW5nIGFueSA8RGVmYXVsdFJvdXRlPi5cbiAqIE9ubHkgb25lIHN1Y2ggcm91dGUgbWF5IGJlIHVzZWQgYXQgYW55IGdpdmVuIGxldmVsIGluIHRoZVxuICogcm91dGUgaGllcmFyY2h5LlxuICovXG5cbnZhciBOb3RGb3VuZFJvdXRlID0gKGZ1bmN0aW9uIChfUm91dGUpIHtcbiAgZnVuY3Rpb24gTm90Rm91bmRSb3V0ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90Rm91bmRSb3V0ZSk7XG5cbiAgICBpZiAoX1JvdXRlICE9IG51bGwpIHtcbiAgICAgIF9Sb3V0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhOb3RGb3VuZFJvdXRlLCBfUm91dGUpO1xuXG4gIHJldHVybiBOb3RGb3VuZFJvdXRlO1xufSkoUm91dGUpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cbk5vdEZvdW5kUm91dGUucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYXRoOiBQcm9wVHlwZXMuZmFsc3ksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZmFsc3ksXG4gIGhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbk5vdEZvdW5kUm91dGUuZGVmYXVsdFByb3BzID0ge1xuICBoYW5kbGVyOiBSb3V0ZUhhbmRsZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTm90Rm91bmRSb3V0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG5cbi8qKlxuICogQSA8UmVkaXJlY3Q+IGNvbXBvbmVudCBpcyBhIHNwZWNpYWwga2luZCBvZiA8Um91dGU+IHRoYXQgYWx3YXlzXG4gKiByZWRpcmVjdHMgdG8gYW5vdGhlciByb3V0ZSB3aGVuIGl0IG1hdGNoZXMuXG4gKi9cblxudmFyIFJlZGlyZWN0ID0gKGZ1bmN0aW9uIChfUm91dGUpIHtcbiAgZnVuY3Rpb24gUmVkaXJlY3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlZGlyZWN0KTtcblxuICAgIGlmIChfUm91dGUgIT0gbnVsbCkge1xuICAgICAgX1JvdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKFJlZGlyZWN0LCBfUm91dGUpO1xuXG4gIHJldHVybiBSZWRpcmVjdDtcbn0pKFJvdXRlKTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5SZWRpcmVjdC5wcm9wVHlwZXMgPSB7XG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZyb206IFByb3BUeXBlcy5zdHJpbmcsIC8vIEFsaWFzIGZvciBwYXRoLlxuICB0bzogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGFuZGxlcjogUHJvcFR5cGVzLmZhbHN5XG59O1xuXG4vLyBSZWRpcmVjdHMgc2hvdWxkIG5vdCBoYXZlIGEgZGVmYXVsdCBoYW5kbGVyXG5SZWRpcmVjdC5kZWZhdWx0UHJvcHMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWRpcmVjdDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcbnZhciBSb3V0ZUhhbmRsZXIgPSByZXF1aXJlKCcuL1JvdXRlSGFuZGxlcicpO1xuXG4vKipcbiAqIDxSb3V0ZT4gY29tcG9uZW50cyBzcGVjaWZ5IGNvbXBvbmVudHMgdGhhdCBhcmUgcmVuZGVyZWQgdG8gdGhlIHBhZ2Ugd2hlbiB0aGVcbiAqIFVSTCBtYXRjaGVzIGEgZ2l2ZW4gcGF0dGVybi5cbiAqXG4gKiBSb3V0ZXMgYXJlIGFycmFuZ2VkIGluIGEgbmVzdGVkIHRyZWUgc3RydWN0dXJlLiBXaGVuIGEgbmV3IFVSTCBpcyByZXF1ZXN0ZWQsXG4gKiB0aGUgdHJlZSBpcyBzZWFyY2hlZCBkZXB0aC1maXJzdCB0byBmaW5kIGEgcm91dGUgd2hvc2UgcGF0aCBtYXRjaGVzIHRoZSBVUkwuXG4gKiBXaGVuIG9uZSBpcyBmb3VuZCwgYWxsIHJvdXRlcyBpbiB0aGUgdHJlZSB0aGF0IGxlYWQgdG8gaXQgYXJlIGNvbnNpZGVyZWRcbiAqIFwiYWN0aXZlXCIgYW5kIHRoZWlyIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIGludG8gdGhlIERPTSwgbmVzdGVkIGluIHRoZSBzYW1lXG4gKiBvcmRlciBhcyB0aGV5IGFyZSBpbiB0aGUgdHJlZS5cbiAqXG4gKiBUaGUgcHJlZmVycmVkIHdheSB0byBjb25maWd1cmUgYSByb3V0ZXIgaXMgdXNpbmcgSlNYLiBUaGUgWE1MLWxpa2Ugc3ludGF4IGlzXG4gKiBhIGdyZWF0IHdheSB0byB2aXN1YWxpemUgaG93IHJvdXRlcyBhcmUgbGFpZCBvdXQgaW4gYW4gYXBwbGljYXRpb24uXG4gKlxuICogICB2YXIgcm91dGVzID0gW1xuICogICAgIDxSb3V0ZSBoYW5kbGVyPXtBcHB9PlxuICogICAgICAgPFJvdXRlIG5hbWU9XCJsb2dpblwiIGhhbmRsZXI9e0xvZ2lufS8+XG4gKiAgICAgICA8Um91dGUgbmFtZT1cImxvZ291dFwiIGhhbmRsZXI9e0xvZ291dH0vPlxuICogICAgICAgPFJvdXRlIG5hbWU9XCJhYm91dFwiIGhhbmRsZXI9e0Fib3V0fS8+XG4gKiAgICAgPC9Sb3V0ZT5cbiAqICAgXTtcbiAqICAgXG4gKiAgIFJvdXRlci5ydW4ocm91dGVzLCBmdW5jdGlvbiAoSGFuZGxlcikge1xuICogICAgIFJlYWN0LnJlbmRlcig8SGFuZGxlci8+LCBkb2N1bWVudC5ib2R5KTtcbiAqICAgfSk7XG4gKlxuICogSGFuZGxlcnMgZm9yIFJvdXRlIGNvbXBvbmVudHMgdGhhdCBjb250YWluIGNoaWxkcmVuIGNhbiByZW5kZXIgdGhlaXIgYWN0aXZlXG4gKiBjaGlsZCByb3V0ZSB1c2luZyBhIDxSb3V0ZUhhbmRsZXI+IGVsZW1lbnQuXG4gKlxuICogICB2YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICogICAgICAgcmV0dXJuIChcbiAqICAgICAgICAgPGRpdiBjbGFzcz1cImFwcGxpY2F0aW9uXCI+XG4gKiAgICAgICAgICAgPFJvdXRlSGFuZGxlci8+XG4gKiAgICAgICAgIDwvZGl2PlxuICogICAgICAgKTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIElmIG5vIGhhbmRsZXIgaXMgcHJvdmlkZWQgZm9yIHRoZSByb3V0ZSwgaXQgd2lsbCByZW5kZXIgYSBtYXRjaGVkIGNoaWxkIHJvdXRlLlxuICovXG5cbnZhciBSb3V0ZSA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBSb3V0ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGUpO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhSb3V0ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKFJvdXRlLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGludmFyaWFudChmYWxzZSwgJyVzIGVsZW1lbnRzIGFyZSBmb3Igcm91dGVyIGNvbmZpZ3VyYXRpb24gb25seSBhbmQgc2hvdWxkIG5vdCBiZSByZW5kZXJlZCcsIHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvdXRlO1xufSkoUmVhY3QuQ29tcG9uZW50KTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5Sb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLFxuICBpZ25vcmVTY3JvbGxCZWhhdmlvcjogUHJvcFR5cGVzLmJvb2xcbn07XG5cblJvdXRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGFuZGxlcjogUm91dGVIYW5kbGVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ29udGV4dFdyYXBwZXIgPSByZXF1aXJlKCcuL0NvbnRleHRXcmFwcGVyJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgncmVhY3QvbGliL09iamVjdC5hc3NpZ24nKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcblxudmFyIFJFRl9OQU1FID0gJ19fcm91dGVIYW5kbGVyX18nO1xuXG4vKipcbiAqIEEgPFJvdXRlSGFuZGxlcj4gY29tcG9uZW50IHJlbmRlcnMgdGhlIGFjdGl2ZSBjaGlsZCByb3V0ZSBoYW5kbGVyXG4gKiB3aGVuIHJvdXRlcyBhcmUgbmVzdGVkLlxuICovXG5cbnZhciBSb3V0ZUhhbmRsZXIgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gUm91dGVIYW5kbGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZUhhbmRsZXIpO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhSb3V0ZUhhbmRsZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhSb3V0ZUhhbmRsZXIsIFt7XG4gICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGVEZXB0aDogdGhpcy5jb250ZXh0LnJvdXRlRGVwdGggKyAxXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLl91cGRhdGVSb3V0ZUNvbXBvbmVudCh0aGlzLnJlZnNbUkVGX05BTUVdKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLl91cGRhdGVSb3V0ZUNvbXBvbmVudCh0aGlzLnJlZnNbUkVGX05BTUVdKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5fdXBkYXRlUm91dGVDb21wb25lbnQobnVsbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3VwZGF0ZVJvdXRlQ29tcG9uZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZVJvdXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5zZXRSb3V0ZUNvbXBvbmVudEF0RGVwdGgodGhpcy5nZXRSb3V0ZURlcHRoKCksIGNvbXBvbmVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Um91dGVEZXB0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvdXRlRGVwdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlRGVwdGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlQ2hpbGRSb3V0ZUhhbmRsZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDaGlsZFJvdXRlSGFuZGxlcihwcm9wcykge1xuICAgICAgdmFyIHJvdXRlID0gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRSb3V0ZUF0RGVwdGgodGhpcy5nZXRSb3V0ZURlcHRoKCkpO1xuXG4gICAgICBpZiAocm91dGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH12YXIgY2hpbGRQcm9wcyA9IGFzc2lnbih7fSwgcHJvcHMgfHwgdGhpcy5wcm9wcywge1xuICAgICAgICByZWY6IFJFRl9OQU1FLFxuICAgICAgICBwYXJhbXM6IHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFBhcmFtcygpLFxuICAgICAgICBxdWVyeTogdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UXVlcnkoKVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHJvdXRlLmhhbmRsZXIsIGNoaWxkUHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gdGhpcy5jcmVhdGVDaGlsZFJvdXRlSGFuZGxlcigpO1xuICAgICAgLy8gPHNjcmlwdC8+IGZvciB0aGluZ3MgbGlrZSA8Q1NTVHJhbnNpdGlvbkdyb3VwLz4gdGhhdCBkb24ndCBsaWtlIG51bGxcbiAgICAgIHJldHVybiBoYW5kbGVyID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQ29udGV4dFdyYXBwZXIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGhhbmRsZXJcbiAgICAgICkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnLCBudWxsKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUm91dGVIYW5kbGVyO1xufSkoUmVhY3QuQ29tcG9uZW50KTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5Sb3V0ZUhhbmRsZXIuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZURlcHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHJvdXRlcjogUHJvcFR5cGVzLnJvdXRlci5pc1JlcXVpcmVkXG59O1xuXG5Sb3V0ZUhhbmRsZXIuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlRGVwdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZUhhbmRsZXI7IiwiLyoganNoaW50IC1XMDU4ICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi93YXJuaW5nJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpLmNhblVzZURPTTtcbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zJyk7XG52YXIgSW1pdGF0ZUJyb3dzZXJCZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3JzL0ltaXRhdGVCcm93c2VyQmVoYXZpb3InKTtcbnZhciBIYXNoTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9IYXNoTG9jYXRpb24nKTtcbnZhciBIaXN0b3J5TG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9IaXN0b3J5TG9jYXRpb24nKTtcbnZhciBSZWZyZXNoTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9SZWZyZXNoTG9jYXRpb24nKTtcbnZhciBTdGF0aWNMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL1N0YXRpY0xvY2F0aW9uJyk7XG52YXIgU2Nyb2xsSGlzdG9yeSA9IHJlcXVpcmUoJy4vU2Nyb2xsSGlzdG9yeScpO1xudmFyIGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbicpO1xudmFyIGlzUmVhY3RDaGlsZHJlbiA9IHJlcXVpcmUoJy4vaXNSZWFjdENoaWxkcmVuJyk7XG52YXIgVHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbicpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG52YXIgUmVkaXJlY3QgPSByZXF1aXJlKCcuL1JlZGlyZWN0Jyk7XG52YXIgSGlzdG9yeSA9IHJlcXVpcmUoJy4vSGlzdG9yeScpO1xudmFyIENhbmNlbGxhdGlvbiA9IHJlcXVpcmUoJy4vQ2FuY2VsbGF0aW9uJyk7XG52YXIgTWF0Y2ggPSByZXF1aXJlKCcuL01hdGNoJyk7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG52YXIgc3VwcG9ydHNIaXN0b3J5ID0gcmVxdWlyZSgnLi9zdXBwb3J0c0hpc3RvcnknKTtcbnZhciBQYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGxvY2F0aW9uIGZvciBuZXcgcm91dGVycy5cbiAqL1xudmFyIERFRkFVTFRfTE9DQVRJT04gPSBjYW5Vc2VET00gPyBIYXNoTG9jYXRpb24gOiAnLyc7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgc2Nyb2xsIGJlaGF2aW9yIGZvciBuZXcgcm91dGVycy5cbiAqL1xudmFyIERFRkFVTFRfU0NST0xMX0JFSEFWSU9SID0gY2FuVXNlRE9NID8gSW1pdGF0ZUJyb3dzZXJCZWhhdmlvciA6IG51bGw7XG5cbmZ1bmN0aW9uIGhhc1Byb3BlcnRpZXMob2JqZWN0LCBwcm9wZXJ0aWVzKSB7XG4gIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1yZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFzTWF0Y2gocm91dGVzLCByb3V0ZSwgcHJldlBhcmFtcywgbmV4dFBhcmFtcywgcHJldlF1ZXJ5LCBuZXh0UXVlcnkpIHtcbiAgcmV0dXJuIHJvdXRlcy5zb21lKGZ1bmN0aW9uIChyKSB7XG4gICAgaWYgKHIgIT09IHJvdXRlKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgcGFyYW1OYW1lcyA9IHJvdXRlLnBhcmFtTmFtZXM7XG4gICAgdmFyIHBhcmFtTmFtZTtcblxuICAgIC8vIEVuc3VyZSB0aGF0IGFsbCBwYXJhbXMgdGhlIHJvdXRlIGNhcmVzIGFib3V0IGRpZCBub3QgY2hhbmdlLlxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXJhbU5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBwYXJhbU5hbWUgPSBwYXJhbU5hbWVzW2ldO1xuXG4gICAgICBpZiAobmV4dFBhcmFtc1twYXJhbU5hbWVdICE9PSBwcmV2UGFyYW1zW3BhcmFtTmFtZV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgdGhlIHF1ZXJ5IGhhc24ndCBjaGFuZ2VkLlxuICAgIHJldHVybiBoYXNQcm9wZXJ0aWVzKHByZXZRdWVyeSwgbmV4dFF1ZXJ5KSAmJiBoYXNQcm9wZXJ0aWVzKG5leHRRdWVyeSwgcHJldlF1ZXJ5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFJvdXRlc1RvTmFtZWRSb3V0ZXMocm91dGVzLCBuYW1lZFJvdXRlcykge1xuICB2YXIgcm91dGU7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSByb3V0ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICByb3V0ZSA9IHJvdXRlc1tpXTtcblxuICAgIGlmIChyb3V0ZS5uYW1lKSB7XG4gICAgICBpbnZhcmlhbnQobmFtZWRSb3V0ZXNbcm91dGUubmFtZV0gPT0gbnVsbCwgJ1lvdSBtYXkgbm90IGhhdmUgbW9yZSB0aGFuIG9uZSByb3V0ZSBuYW1lZCBcIiVzXCInLCByb3V0ZS5uYW1lKTtcblxuICAgICAgbmFtZWRSb3V0ZXNbcm91dGUubmFtZV0gPSByb3V0ZTtcbiAgICB9XG5cbiAgICBpZiAocm91dGUuY2hpbGRSb3V0ZXMpIGFkZFJvdXRlc1RvTmFtZWRSb3V0ZXMocm91dGUuY2hpbGRSb3V0ZXMsIG5hbWVkUm91dGVzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByb3V0ZUlzQWN0aXZlKGFjdGl2ZVJvdXRlcywgcm91dGVOYW1lKSB7XG4gIHJldHVybiBhY3RpdmVSb3V0ZXMuc29tZShmdW5jdGlvbiAocm91dGUpIHtcbiAgICByZXR1cm4gcm91dGUubmFtZSA9PT0gcm91dGVOYW1lO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyYW1zQXJlQWN0aXZlKGFjdGl2ZVBhcmFtcywgcGFyYW1zKSB7XG4gIGZvciAodmFyIHByb3BlcnR5IGluIHBhcmFtcykgaWYgKFN0cmluZyhhY3RpdmVQYXJhbXNbcHJvcGVydHldKSAhPT0gU3RyaW5nKHBhcmFtc1twcm9wZXJ0eV0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5SXNBY3RpdmUoYWN0aXZlUXVlcnksIHF1ZXJ5KSB7XG4gIGZvciAodmFyIHByb3BlcnR5IGluIHF1ZXJ5KSBpZiAoU3RyaW5nKGFjdGl2ZVF1ZXJ5W3Byb3BlcnR5XSkgIT09IFN0cmluZyhxdWVyeVtwcm9wZXJ0eV0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyByb3V0ZXIgdXNpbmcgdGhlIGdpdmVuIG9wdGlvbnMuIEEgcm91dGVyXG4gKiBpcyBhIFJlYWN0Q29tcG9uZW50IGNsYXNzIHRoYXQga25vd3MgaG93IHRvIHJlYWN0IHRvIGNoYW5nZXMgaW4gdGhlXG4gKiBVUkwgYW5kIGtlZXAgdGhlIGNvbnRlbnRzIG9mIHRoZSBwYWdlIGluIHN5bmMuXG4gKlxuICogT3B0aW9ucyBtYXkgYmUgYW55IG9mIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogLSByb3V0ZXMgICAgICAgICAgIChyZXF1aXJlZCkgVGhlIHJvdXRlIGNvbmZpZ1xuICogLSBsb2NhdGlvbiAgICAgICAgIFRoZSBsb2NhdGlvbiB0byB1c2UuIERlZmF1bHRzIHRvIEhhc2hMb2NhdGlvbiB3aGVuXG4gKiAgICAgICAgICAgICAgICAgICAgdGhlIERPTSBpcyBhdmFpbGFibGUsIFwiL1wiIG90aGVyd2lzZVxuICogLSBzY3JvbGxCZWhhdmlvciAgIFRoZSBzY3JvbGwgYmVoYXZpb3IgdG8gdXNlLiBEZWZhdWx0cyB0byBJbWl0YXRlQnJvd3NlckJlaGF2aW9yXG4gKiAgICAgICAgICAgICAgICAgICAgd2hlbiB0aGUgRE9NIGlzIGF2YWlsYWJsZSwgbnVsbCBvdGhlcndpc2VcbiAqIC0gb25FcnJvciAgICAgICAgICBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byBoYW5kbGUgZXJyb3JzXG4gKiAtIG9uQWJvcnQgICAgICAgICAgQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gaGFuZGxlIGFib3J0ZWQgdHJhbnNpdGlvbnNcbiAqXG4gKiBXaGVuIHJlbmRlcmluZyBpbiBhIHNlcnZlci1zaWRlIGVudmlyb25tZW50LCB0aGUgbG9jYXRpb24gc2hvdWxkIHNpbXBseVxuICogYmUgdGhlIFVSTCBwYXRoIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QsIGluY2x1ZGluZyB0aGUgcXVlcnkgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaXNSZWFjdENoaWxkcmVuKG9wdGlvbnMpKSBvcHRpb25zID0geyByb3V0ZXM6IG9wdGlvbnMgfTtcblxuICB2YXIgbW91bnRlZENvbXBvbmVudHMgPSBbXTtcbiAgdmFyIGxvY2F0aW9uID0gb3B0aW9ucy5sb2NhdGlvbiB8fCBERUZBVUxUX0xPQ0FUSU9OO1xuICB2YXIgc2Nyb2xsQmVoYXZpb3IgPSBvcHRpb25zLnNjcm9sbEJlaGF2aW9yIHx8IERFRkFVTFRfU0NST0xMX0JFSEFWSU9SO1xuICB2YXIgc3RhdGUgPSB7fTtcbiAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuICB2YXIgcGVuZGluZ1RyYW5zaXRpb24gPSBudWxsO1xuICB2YXIgZGlzcGF0Y2hIYW5kbGVyID0gbnVsbDtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBuZXcgU3RhdGljTG9jYXRpb24obG9jYXRpb24pO1xuXG4gIGlmIChsb2NhdGlvbiBpbnN0YW5jZW9mIFN0YXRpY0xvY2F0aW9uKSB7XG4gICAgd2FybmluZyghY2FuVXNlRE9NIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcsICdZb3Ugc2hvdWxkIG5vdCB1c2UgYSBzdGF0aWMgbG9jYXRpb24gaW4gYSBET00gZW52aXJvbm1lbnQgYmVjYXVzZSAnICsgJ3RoZSByb3V0ZXIgd2lsbCBub3QgYmUga2VwdCBpbiBzeW5jIHdpdGggdGhlIGN1cnJlbnQgVVJMJyk7XG4gIH0gZWxzZSB7XG4gICAgaW52YXJpYW50KGNhblVzZURPTSB8fCBsb2NhdGlvbi5uZWVkc0RPTSA9PT0gZmFsc2UsICdZb3UgY2Fubm90IHVzZSAlcyB3aXRob3V0IGEgRE9NJywgbG9jYXRpb24pO1xuICB9XG5cbiAgLy8gQXV0b21hdGljYWxseSBmYWxsIGJhY2sgdG8gZnVsbCBwYWdlIHJlZnJlc2hlcyBpblxuICAvLyBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIEhUTUwgaGlzdG9yeSBBUEkuXG4gIGlmIChsb2NhdGlvbiA9PT0gSGlzdG9yeUxvY2F0aW9uICYmICFzdXBwb3J0c0hpc3RvcnkoKSkgbG9jYXRpb24gPSBSZWZyZXNoTG9jYXRpb247XG5cbiAgdmFyIFJvdXRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGRpc3BsYXlOYW1lOiAnUm91dGVyJyxcblxuICAgIHN0YXRpY3M6IHtcblxuICAgICAgaXNSdW5uaW5nOiBmYWxzZSxcblxuICAgICAgY2FuY2VsUGVuZGluZ1RyYW5zaXRpb246IGZ1bmN0aW9uIGNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uKCkge1xuICAgICAgICBpZiAocGVuZGluZ1RyYW5zaXRpb24pIHtcbiAgICAgICAgICBwZW5kaW5nVHJhbnNpdGlvbi5jYW5jZWwoKTtcbiAgICAgICAgICBwZW5kaW5nVHJhbnNpdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGNsZWFyQWxsUm91dGVzOiBmdW5jdGlvbiBjbGVhckFsbFJvdXRlcygpIHtcbiAgICAgICAgUm91dGVyLmNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uKCk7XG4gICAgICAgIFJvdXRlci5uYW1lZFJvdXRlcyA9IHt9O1xuICAgICAgICBSb3V0ZXIucm91dGVzID0gW107XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEFkZHMgcm91dGVzIHRvIHRoaXMgcm91dGVyIGZyb20gdGhlIGdpdmVuIGNoaWxkcmVuIG9iamVjdCAoc2VlIFJlYWN0Q2hpbGRyZW4pLlxuICAgICAgICovXG4gICAgICBhZGRSb3V0ZXM6IGZ1bmN0aW9uIGFkZFJvdXRlcyhyb3V0ZXMpIHtcbiAgICAgICAgaWYgKGlzUmVhY3RDaGlsZHJlbihyb3V0ZXMpKSByb3V0ZXMgPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihyb3V0ZXMpO1xuXG4gICAgICAgIGFkZFJvdXRlc1RvTmFtZWRSb3V0ZXMocm91dGVzLCBSb3V0ZXIubmFtZWRSb3V0ZXMpO1xuXG4gICAgICAgIFJvdXRlci5yb3V0ZXMucHVzaC5hcHBseShSb3V0ZXIucm91dGVzLCByb3V0ZXMpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXBsYWNlcyByb3V0ZXMgb2YgdGhpcyByb3V0ZXIgZnJvbSB0aGUgZ2l2ZW4gY2hpbGRyZW4gb2JqZWN0IChzZWUgUmVhY3RDaGlsZHJlbikuXG4gICAgICAgKi9cbiAgICAgIHJlcGxhY2VSb3V0ZXM6IGZ1bmN0aW9uIHJlcGxhY2VSb3V0ZXMocm91dGVzKSB7XG4gICAgICAgIFJvdXRlci5jbGVhckFsbFJvdXRlcygpO1xuICAgICAgICBSb3V0ZXIuYWRkUm91dGVzKHJvdXRlcyk7XG4gICAgICAgIFJvdXRlci5yZWZyZXNoKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFBlcmZvcm1zIGEgbWF0Y2ggb2YgdGhlIGdpdmVuIHBhdGggYWdhaW5zdCB0aGlzIHJvdXRlciBhbmQgcmV0dXJucyBhbiBvYmplY3RcbiAgICAgICAqIHdpdGggdGhlIHsgcm91dGVzLCBwYXJhbXMsIHBhdGhuYW1lLCBxdWVyeSB9IHRoYXQgbWF0Y2guIFJldHVybnMgbnVsbCBpZiBub1xuICAgICAgICogbWF0Y2ggY2FuIGJlIG1hZGUuXG4gICAgICAgKi9cbiAgICAgIG1hdGNoOiBmdW5jdGlvbiBtYXRjaChwYXRoKSB7XG4gICAgICAgIHJldHVybiBNYXRjaC5maW5kTWF0Y2goUm91dGVyLnJvdXRlcywgcGF0aCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYW4gYWJzb2x1dGUgVVJMIHBhdGggY3JlYXRlZCBmcm9tIHRoZSBnaXZlbiByb3V0ZVxuICAgICAgICogbmFtZSwgVVJMIHBhcmFtZXRlcnMsIGFuZCBxdWVyeS5cbiAgICAgICAqL1xuICAgICAgbWFrZVBhdGg6IGZ1bmN0aW9uIG1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgIHZhciBwYXRoO1xuICAgICAgICBpZiAoUGF0aFV0aWxzLmlzQWJzb2x1dGUodG8pKSB7XG4gICAgICAgICAgcGF0aCA9IHRvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciByb3V0ZSA9IHRvIGluc3RhbmNlb2YgUm91dGUgPyB0byA6IFJvdXRlci5uYW1lZFJvdXRlc1t0b107XG5cbiAgICAgICAgICBpbnZhcmlhbnQocm91dGUgaW5zdGFuY2VvZiBSb3V0ZSwgJ0Nhbm5vdCBmaW5kIGEgcm91dGUgbmFtZWQgXCIlc1wiJywgdG8pO1xuXG4gICAgICAgICAgcGF0aCA9IHJvdXRlLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUGF0aFV0aWxzLndpdGhRdWVyeShQYXRoVXRpbHMuaW5qZWN0UGFyYW1zKHBhdGgsIHBhcmFtcyksIHF1ZXJ5KTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhIHN0cmluZyB0aGF0IG1heSBzYWZlbHkgYmUgdXNlZCBhcyB0aGUgaHJlZiBvZiBhIGxpbmtcbiAgICAgICAqIHRvIHRoZSByb3V0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLCBVUkwgcGFyYW1ldGVycywgYW5kIHF1ZXJ5LlxuICAgICAgICovXG4gICAgICBtYWtlSHJlZjogZnVuY3Rpb24gbWFrZUhyZWYodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgdmFyIHBhdGggPSBSb3V0ZXIubWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpO1xuICAgICAgICByZXR1cm4gbG9jYXRpb24gPT09IEhhc2hMb2NhdGlvbiA/ICcjJyArIHBhdGggOiBwYXRoO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgYXJndW1lbnRzIGJ5IHB1c2hpbmdcbiAgICAgICAqIGEgbmV3IFVSTCBvbnRvIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgICAgICovXG4gICAgICB0cmFuc2l0aW9uVG86IGZ1bmN0aW9uIHRyYW5zaXRpb25Ubyh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICB2YXIgcGF0aCA9IFJvdXRlci5tYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSk7XG5cbiAgICAgICAgaWYgKHBlbmRpbmdUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgLy8gUmVwbGFjZSBzbyBwZW5kaW5nIGxvY2F0aW9uIGRvZXMgbm90IHN0YXkgaW4gaGlzdG9yeS5cbiAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKHBhdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvY2F0aW9uLnB1c2gocGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNpdGlvbnMgdG8gdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGFyZ3VtZW50cyBieSByZXBsYWNpbmdcbiAgICAgICAqIHRoZSBjdXJyZW50IFVSTCBpbiB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICAgICAqL1xuICAgICAgcmVwbGFjZVdpdGg6IGZ1bmN0aW9uIHJlcGxhY2VXaXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoUm91dGVyLm1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5zaXRpb25zIHRvIHRoZSBwcmV2aW91cyBVUkwgaWYgb25lIGlzIGF2YWlsYWJsZS4gUmV0dXJucyB0cnVlIGlmIHRoZVxuICAgICAgICogcm91dGVyIHdhcyBhYmxlIHRvIGdvIGJhY2ssIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAqXG4gICAgICAgKiBOb3RlOiBUaGUgcm91dGVyIG9ubHkgdHJhY2tzIGhpc3RvcnkgZW50cmllcyBpbiB5b3VyIGFwcGxpY2F0aW9uLCBub3QgdGhlXG4gICAgICAgKiBjdXJyZW50IGJyb3dzZXIgc2Vzc2lvbiwgc28geW91IGNhbiBzYWZlbHkgY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGhvdXQgZ3VhcmRpbmdcbiAgICAgICAqIGFnYWluc3Qgc2VuZGluZyB0aGUgdXNlciBiYWNrIHRvIHNvbWUgb3RoZXIgc2l0ZS4gSG93ZXZlciwgd2hlbiB1c2luZ1xuICAgICAgICogUmVmcmVzaExvY2F0aW9uICh3aGljaCBpcyB0aGUgZmFsbGJhY2sgZm9yIEhpc3RvcnlMb2NhdGlvbiBpbiBicm93c2VycyB0aGF0XG4gICAgICAgKiBkb24ndCBzdXBwb3J0IEhUTUw1IGhpc3RvcnkpIHRoaXMgbWV0aG9kIHdpbGwgKmFsd2F5cyogc2VuZCB0aGUgY2xpZW50IGJhY2tcbiAgICAgICAqIGJlY2F1c2Ugd2UgY2Fubm90IHJlbGlhYmx5IHRyYWNrIGhpc3RvcnkgbGVuZ3RoLlxuICAgICAgICovXG4gICAgICBnb0JhY2s6IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICAgICAgaWYgKEhpc3RvcnkubGVuZ3RoID4gMSB8fCBsb2NhdGlvbiA9PT0gUmVmcmVzaExvY2F0aW9uKSB7XG4gICAgICAgICAgbG9jYXRpb24ucG9wKCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB3YXJuaW5nKGZhbHNlLCAnZ29CYWNrKCkgd2FzIGlnbm9yZWQgYmVjYXVzZSB0aGVyZSBpcyBubyByb3V0ZXIgaGlzdG9yeScpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIGhhbmRsZUFib3J0OiBvcHRpb25zLm9uQWJvcnQgfHwgZnVuY3Rpb24gKGFib3J0UmVhc29uKSB7XG4gICAgICAgIGlmIChsb2NhdGlvbiBpbnN0YW5jZW9mIFN0YXRpY0xvY2F0aW9uKSB0aHJvdyBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBhYm9ydGVkIHRyYW5zaXRpb24hIFJlYXNvbjogJyArIGFib3J0UmVhc29uKTtcblxuICAgICAgICBpZiAoYWJvcnRSZWFzb24gaW5zdGFuY2VvZiBDYW5jZWxsYXRpb24pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoYWJvcnRSZWFzb24gaW5zdGFuY2VvZiBSZWRpcmVjdCkge1xuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoUm91dGVyLm1ha2VQYXRoKGFib3J0UmVhc29uLnRvLCBhYm9ydFJlYXNvbi5wYXJhbXMsIGFib3J0UmVhc29uLnF1ZXJ5KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9jYXRpb24ucG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGhhbmRsZUVycm9yOiBvcHRpb25zLm9uRXJyb3IgfHwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIC8vIFRocm93IHNvIHdlIGRvbid0IHNpbGVudGx5IHN3YWxsb3cgYXN5bmMgZXJyb3JzLlxuICAgICAgICB0aHJvdyBlcnJvcjsgLy8gVGhpcyBlcnJvciBwcm9iYWJseSBvcmlnaW5hdGVkIGluIGEgdHJhbnNpdGlvbiBob29rLlxuICAgICAgfSxcblxuICAgICAgaGFuZGxlTG9jYXRpb25DaGFuZ2U6IGZ1bmN0aW9uIGhhbmRsZUxvY2F0aW9uQ2hhbmdlKGNoYW5nZSkge1xuICAgICAgICBSb3V0ZXIuZGlzcGF0Y2goY2hhbmdlLnBhdGgsIGNoYW5nZS50eXBlKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUGVyZm9ybXMgYSB0cmFuc2l0aW9uIHRvIHRoZSBnaXZlbiBwYXRoIGFuZCBjYWxscyBjYWxsYmFjayhlcnJvciwgYWJvcnRSZWFzb24pXG4gICAgICAgKiB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGZpbmlzaGVkLiBJZiBib3RoIGFyZ3VtZW50cyBhcmUgbnVsbCB0aGUgcm91dGVyJ3Mgc3RhdGVcbiAgICAgICAqIHdhcyB1cGRhdGVkLiBPdGhlcndpc2UgdGhlIHRyYW5zaXRpb24gZGlkIG5vdCBjb21wbGV0ZS5cbiAgICAgICAqXG4gICAgICAgKiBJbiBhIHRyYW5zaXRpb24sIGEgcm91dGVyIGZpcnN0IGRldGVybWluZXMgd2hpY2ggcm91dGVzIGFyZSBpbnZvbHZlZCBieSBiZWdpbm5pbmdcbiAgICAgICAqIHdpdGggdGhlIGN1cnJlbnQgcm91dGUsIHVwIHRoZSByb3V0ZSB0cmVlIHRvIHRoZSBmaXJzdCBwYXJlbnQgcm91dGUgdGhhdCBpcyBzaGFyZWRcbiAgICAgICAqIHdpdGggdGhlIGRlc3RpbmF0aW9uIHJvdXRlLCBhbmQgYmFjayBkb3duIHRoZSB0cmVlIHRvIHRoZSBkZXN0aW5hdGlvbiByb3V0ZS4gVGhlXG4gICAgICAgKiB3aWxsVHJhbnNpdGlvbkZyb20gaG9vayBpcyBpbnZva2VkIG9uIGFsbCByb3V0ZSBoYW5kbGVycyB3ZSdyZSB0cmFuc2l0aW9uaW5nIGF3YXlcbiAgICAgICAqIGZyb20sIGluIHJldmVyc2UgbmVzdGluZyBvcmRlci4gTGlrZXdpc2UsIHRoZSB3aWxsVHJhbnNpdGlvblRvIGhvb2sgaXMgaW52b2tlZCBvblxuICAgICAgICogYWxsIHJvdXRlIGhhbmRsZXJzIHdlJ3JlIHRyYW5zaXRpb25pbmcgdG8uXG4gICAgICAgKlxuICAgICAgICogQm90aCB3aWxsVHJhbnNpdGlvbkZyb20gYW5kIHdpbGxUcmFuc2l0aW9uVG8gaG9va3MgbWF5IGVpdGhlciBhYm9ydCBvciByZWRpcmVjdCB0aGVcbiAgICAgICAqIHRyYW5zaXRpb24uIFRvIHJlc29sdmUgYXN5bmNocm9ub3VzbHksIHRoZXkgbWF5IHVzZSB0aGUgY2FsbGJhY2sgYXJndW1lbnQuIElmIG5vXG4gICAgICAgKiBob29rcyB3YWl0LCB0aGUgdHJhbnNpdGlvbiBpcyBmdWxseSBzeW5jaHJvbm91cy5cbiAgICAgICAqL1xuICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKHBhdGgsIGFjdGlvbikge1xuICAgICAgICBSb3V0ZXIuY2FuY2VsUGVuZGluZ1RyYW5zaXRpb24oKTtcblxuICAgICAgICB2YXIgcHJldlBhdGggPSBzdGF0ZS5wYXRoO1xuICAgICAgICB2YXIgaXNSZWZyZXNoaW5nID0gYWN0aW9uID09IG51bGw7XG5cbiAgICAgICAgaWYgKHByZXZQYXRoID09PSBwYXRoICYmICFpc1JlZnJlc2hpbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gTm90aGluZyB0byBkbyFcblxuICAgICAgICAvLyBSZWNvcmQgdGhlIHNjcm9sbCBwb3NpdGlvbiBhcyBlYXJseSBhcyBwb3NzaWJsZSB0b1xuICAgICAgICAvLyBnZXQgaXQgYmVmb3JlIGJyb3dzZXJzIHRyeSB1cGRhdGUgaXQgYXV0b21hdGljYWxseS5cbiAgICAgICAgaWYgKHByZXZQYXRoICYmIGFjdGlvbiA9PT0gTG9jYXRpb25BY3Rpb25zLlBVU0gpIFJvdXRlci5yZWNvcmRTY3JvbGxQb3NpdGlvbihwcmV2UGF0aCk7XG5cbiAgICAgICAgdmFyIG1hdGNoID0gUm91dGVyLm1hdGNoKHBhdGgpO1xuXG4gICAgICAgIHdhcm5pbmcobWF0Y2ggIT0gbnVsbCwgJ05vIHJvdXRlIG1hdGNoZXMgcGF0aCBcIiVzXCIuIE1ha2Ugc3VyZSB5b3UgaGF2ZSA8Um91dGUgcGF0aD1cIiVzXCI+IHNvbWV3aGVyZSBpbiB5b3VyIHJvdXRlcycsIHBhdGgsIHBhdGgpO1xuXG4gICAgICAgIGlmIChtYXRjaCA9PSBudWxsKSBtYXRjaCA9IHt9O1xuXG4gICAgICAgIHZhciBwcmV2Um91dGVzID0gc3RhdGUucm91dGVzIHx8IFtdO1xuICAgICAgICB2YXIgcHJldlBhcmFtcyA9IHN0YXRlLnBhcmFtcyB8fCB7fTtcbiAgICAgICAgdmFyIHByZXZRdWVyeSA9IHN0YXRlLnF1ZXJ5IHx8IHt9O1xuXG4gICAgICAgIHZhciBuZXh0Um91dGVzID0gbWF0Y2gucm91dGVzIHx8IFtdO1xuICAgICAgICB2YXIgbmV4dFBhcmFtcyA9IG1hdGNoLnBhcmFtcyB8fCB7fTtcbiAgICAgICAgdmFyIG5leHRRdWVyeSA9IG1hdGNoLnF1ZXJ5IHx8IHt9O1xuXG4gICAgICAgIHZhciBmcm9tUm91dGVzLCB0b1JvdXRlcztcbiAgICAgICAgaWYgKHByZXZSb3V0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgZnJvbVJvdXRlcyA9IHByZXZSb3V0ZXMuZmlsdGVyKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNNYXRjaChuZXh0Um91dGVzLCByb3V0ZSwgcHJldlBhcmFtcywgbmV4dFBhcmFtcywgcHJldlF1ZXJ5LCBuZXh0UXVlcnkpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdG9Sb3V0ZXMgPSBuZXh0Um91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzTWF0Y2gocHJldlJvdXRlcywgcm91dGUsIHByZXZQYXJhbXMsIG5leHRQYXJhbXMsIHByZXZRdWVyeSwgbmV4dFF1ZXJ5KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmcm9tUm91dGVzID0gW107XG4gICAgICAgICAgdG9Sb3V0ZXMgPSBuZXh0Um91dGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbihwYXRoLCBSb3V0ZXIucmVwbGFjZVdpdGguYmluZChSb3V0ZXIsIHBhdGgpKTtcbiAgICAgICAgcGVuZGluZ1RyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuXG4gICAgICAgIHZhciBmcm9tQ29tcG9uZW50cyA9IG1vdW50ZWRDb21wb25lbnRzLnNsaWNlKHByZXZSb3V0ZXMubGVuZ3RoIC0gZnJvbVJvdXRlcy5sZW5ndGgpO1xuXG4gICAgICAgIFRyYW5zaXRpb24uZnJvbSh0cmFuc2l0aW9uLCBmcm9tUm91dGVzLCBmcm9tQ29tcG9uZW50cywgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgaWYgKGVycm9yIHx8IHRyYW5zaXRpb24uYWJvcnRSZWFzb24pIHJldHVybiBkaXNwYXRjaEhhbmRsZXIuY2FsbChSb3V0ZXIsIGVycm9yLCB0cmFuc2l0aW9uKTsgLy8gTm8gbmVlZCB0byBjb250aW51ZS5cblxuICAgICAgICAgIFRyYW5zaXRpb24udG8odHJhbnNpdGlvbiwgdG9Sb3V0ZXMsIG5leHRQYXJhbXMsIG5leHRRdWVyeSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBkaXNwYXRjaEhhbmRsZXIuY2FsbChSb3V0ZXIsIGVycm9yLCB0cmFuc2l0aW9uLCB7XG4gICAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgICBwYXRobmFtZTogbWF0Y2gucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHJvdXRlczogbmV4dFJvdXRlcyxcbiAgICAgICAgICAgICAgcGFyYW1zOiBuZXh0UGFyYW1zLFxuICAgICAgICAgICAgICBxdWVyeTogbmV4dFF1ZXJ5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFN0YXJ0cyB0aGlzIHJvdXRlciBhbmQgY2FsbHMgY2FsbGJhY2socm91dGVyLCBzdGF0ZSkgd2hlbiB0aGUgcm91dGUgY2hhbmdlcy5cbiAgICAgICAqXG4gICAgICAgKiBJZiB0aGUgcm91dGVyJ3MgbG9jYXRpb24gaXMgc3RhdGljIChpLmUuIGEgVVJMIHBhdGggaW4gYSBzZXJ2ZXIgZW52aXJvbm1lbnQpXG4gICAgICAgKiB0aGUgY2FsbGJhY2sgaXMgY2FsbGVkIG9ubHkgb25jZS4gT3RoZXJ3aXNlLCB0aGUgbG9jYXRpb24gc2hvdWxkIGJlIG9uZSBvZiB0aGVcbiAgICAgICAqIFJvdXRlci4qTG9jYXRpb24gb2JqZWN0cyAoZS5nLiBSb3V0ZXIuSGFzaExvY2F0aW9uIG9yIFJvdXRlci5IaXN0b3J5TG9jYXRpb24pLlxuICAgICAgICovXG4gICAgICBydW46IGZ1bmN0aW9uIHJ1bihjYWxsYmFjaykge1xuICAgICAgICBpbnZhcmlhbnQoIVJvdXRlci5pc1J1bm5pbmcsICdSb3V0ZXIgaXMgYWxyZWFkeSBydW5uaW5nJyk7XG5cbiAgICAgICAgZGlzcGF0Y2hIYW5kbGVyID0gZnVuY3Rpb24gKGVycm9yLCB0cmFuc2l0aW9uLCBuZXdTdGF0ZSkge1xuICAgICAgICAgIGlmIChlcnJvcikgUm91dGVyLmhhbmRsZUVycm9yKGVycm9yKTtcblxuICAgICAgICAgIGlmIChwZW5kaW5nVHJhbnNpdGlvbiAhPT0gdHJhbnNpdGlvbikgcmV0dXJuO1xuXG4gICAgICAgICAgcGVuZGluZ1RyYW5zaXRpb24gPSBudWxsO1xuXG4gICAgICAgICAgaWYgKHRyYW5zaXRpb24uYWJvcnRSZWFzb24pIHtcbiAgICAgICAgICAgIFJvdXRlci5oYW5kbGVBYm9ydCh0cmFuc2l0aW9uLmFib3J0UmVhc29uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChSb3V0ZXIsIFJvdXRlciwgbmV4dFN0YXRlID0gbmV3U3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIShsb2NhdGlvbiBpbnN0YW5jZW9mIFN0YXRpY0xvY2F0aW9uKSkge1xuICAgICAgICAgIGlmIChsb2NhdGlvbi5hZGRDaGFuZ2VMaXN0ZW5lcikgbG9jYXRpb24uYWRkQ2hhbmdlTGlzdGVuZXIoUm91dGVyLmhhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcblxuICAgICAgICAgIFJvdXRlci5pc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQm9vdHN0cmFwIHVzaW5nIHRoZSBjdXJyZW50IHBhdGguXG4gICAgICAgIFJvdXRlci5yZWZyZXNoKCk7XG4gICAgICB9LFxuXG4gICAgICByZWZyZXNoOiBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgICAgICBSb3V0ZXIuZGlzcGF0Y2gobG9jYXRpb24uZ2V0Q3VycmVudFBhdGgoKSwgbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBSb3V0ZXIuY2FuY2VsUGVuZGluZ1RyYW5zaXRpb24oKTtcblxuICAgICAgICBpZiAobG9jYXRpb24ucmVtb3ZlQ2hhbmdlTGlzdGVuZXIpIGxvY2F0aW9uLnJlbW92ZUNoYW5nZUxpc3RlbmVyKFJvdXRlci5oYW5kbGVMb2NhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgUm91dGVyLmlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgfSxcblxuICAgICAgZ2V0TG9jYXRpb246IGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgICB9LFxuXG4gICAgICBnZXRTY3JvbGxCZWhhdmlvcjogZnVuY3Rpb24gZ2V0U2Nyb2xsQmVoYXZpb3IoKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGxCZWhhdmlvcjtcbiAgICAgIH0sXG5cbiAgICAgIGdldFJvdXRlQXREZXB0aDogZnVuY3Rpb24gZ2V0Um91dGVBdERlcHRoKHJvdXRlRGVwdGgpIHtcbiAgICAgICAgdmFyIHJvdXRlcyA9IHN0YXRlLnJvdXRlcztcbiAgICAgICAgcmV0dXJuIHJvdXRlcyAmJiByb3V0ZXNbcm91dGVEZXB0aF07XG4gICAgICB9LFxuXG4gICAgICBzZXRSb3V0ZUNvbXBvbmVudEF0RGVwdGg6IGZ1bmN0aW9uIHNldFJvdXRlQ29tcG9uZW50QXREZXB0aChyb3V0ZURlcHRoLCBjb21wb25lbnQpIHtcbiAgICAgICAgbW91bnRlZENvbXBvbmVudHNbcm91dGVEZXB0aF0gPSBjb21wb25lbnQ7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJMIHBhdGggKyBxdWVyeSBzdHJpbmcuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRQYXRoOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnBhdGg7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJMIHBhdGggd2l0aG91dCB0aGUgcXVlcnkgc3RyaW5nLlxuICAgICAgICovXG4gICAgICBnZXRDdXJyZW50UGF0aG5hbWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRobmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnBhdGhuYW1lO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSBVUkwgcGFyYW1ldGVycy5cbiAgICAgICAqL1xuICAgICAgZ2V0Q3VycmVudFBhcmFtczogZnVuY3Rpb24gZ2V0Q3VycmVudFBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnBhcmFtcztcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhbiBvYmplY3Qgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgcXVlcnkgcGFyYW1ldGVycy5cbiAgICAgICAqL1xuICAgICAgZ2V0Q3VycmVudFF1ZXJ5OiBmdW5jdGlvbiBnZXRDdXJyZW50UXVlcnkoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5xdWVyeTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSByb3V0ZXMuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRSb3V0ZXM6IGZ1bmN0aW9uIGdldEN1cnJlbnRSb3V0ZXMoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5yb3V0ZXM7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gcm91dGUsIHBhcmFtcywgYW5kIHF1ZXJ5IGFyZSBhY3RpdmUuXG4gICAgICAgKi9cbiAgICAgIGlzQWN0aXZlOiBmdW5jdGlvbiBpc0FjdGl2ZSh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICBpZiAoUGF0aFV0aWxzLmlzQWJzb2x1dGUodG8pKSB7XG4gICAgICAgICAgcmV0dXJuIHRvID09PSBzdGF0ZS5wYXRoO1xuICAgICAgICB9cmV0dXJuIHJvdXRlSXNBY3RpdmUoc3RhdGUucm91dGVzLCB0bykgJiYgcGFyYW1zQXJlQWN0aXZlKHN0YXRlLnBhcmFtcywgcGFyYW1zKSAmJiAocXVlcnkgPT0gbnVsbCB8fCBxdWVyeUlzQWN0aXZlKHN0YXRlLnF1ZXJ5LCBxdWVyeSkpO1xuICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1peGluczogW1Njcm9sbEhpc3RvcnldLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZhbHN5XG4gICAgfSxcblxuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICAgICByb3V0ZURlcHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICByb3V0ZXI6IFByb3BUeXBlcy5yb3V0ZXIuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBnZXRDaGlsZENvbnRleHQ6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlRGVwdGg6IDEsXG4gICAgICAgIHJvdXRlcjogUm91dGVyXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPSBuZXh0U3RhdGUpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBSb3V0ZXIuc3RvcCgpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciByb3V0ZSA9IFJvdXRlci5nZXRSb3V0ZUF0RGVwdGgoMCk7XG4gICAgICByZXR1cm4gcm91dGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KHJvdXRlLmhhbmRsZXIsIHRoaXMucHJvcHMpIDogbnVsbDtcbiAgICB9XG5cbiAgfSk7XG5cbiAgUm91dGVyLmNsZWFyQWxsUm91dGVzKCk7XG5cbiAgaWYgKG9wdGlvbnMucm91dGVzKSBSb3V0ZXIuYWRkUm91dGVzKG9wdGlvbnMucm91dGVzKTtcblxuICByZXR1cm4gUm91dGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJvdXRlcjsiLCIvKiBqc2hpbnQgLVcwODQgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdyZWFjdC9saWIvT2JqZWN0LmFzc2lnbicpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdyZWFjdC9saWIvd2FybmluZycpO1xudmFyIERlZmF1bHRSb3V0ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9EZWZhdWx0Um91dGUnKTtcbnZhciBOb3RGb3VuZFJvdXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL05vdEZvdW5kUm91dGUnKTtcbnZhciBSZWRpcmVjdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9SZWRpcmVjdCcpO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyhjb21wb25lbnROYW1lLCBwcm9wVHlwZXMsIHByb3BzKSB7XG4gIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8ICdVbmtub3duQ29tcG9uZW50JztcblxuICBmb3IgKHZhciBwcm9wTmFtZSBpbiBwcm9wVHlwZXMpIHtcbiAgICBpZiAocHJvcFR5cGVzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgdmFyIGVycm9yID0gcHJvcFR5cGVzW3Byb3BOYW1lXShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgd2FybmluZyhmYWxzZSwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlT3B0aW9ucyhwcm9wcykge1xuICB2YXIgb3B0aW9ucyA9IGFzc2lnbih7fSwgcHJvcHMpO1xuICB2YXIgaGFuZGxlciA9IG9wdGlvbnMuaGFuZGxlcjtcblxuICBpZiAoaGFuZGxlcikge1xuICAgIG9wdGlvbnMub25FbnRlciA9IGhhbmRsZXIud2lsbFRyYW5zaXRpb25UbztcbiAgICBvcHRpb25zLm9uTGVhdmUgPSBoYW5kbGVyLndpbGxUcmFuc2l0aW9uRnJvbTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoZWxlbWVudCkge1xuICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9dmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG4gIHZhciBwcm9wcyA9IGFzc2lnbih7fSwgdHlwZS5kZWZhdWx0UHJvcHMsIGVsZW1lbnQucHJvcHMpO1xuXG4gIGlmICh0eXBlLnByb3BUeXBlcykgY2hlY2tQcm9wVHlwZXModHlwZS5kaXNwbGF5TmFtZSwgdHlwZS5wcm9wVHlwZXMsIHByb3BzKTtcblxuICBpZiAodHlwZSA9PT0gRGVmYXVsdFJvdXRlKSB7XG4gICAgcmV0dXJuIFJvdXRlLmNyZWF0ZURlZmF1bHRSb3V0ZShjcmVhdGVSb3V0ZU9wdGlvbnMocHJvcHMpKTtcbiAgfWlmICh0eXBlID09PSBOb3RGb3VuZFJvdXRlKSB7XG4gICAgcmV0dXJuIFJvdXRlLmNyZWF0ZU5vdEZvdW5kUm91dGUoY3JlYXRlUm91dGVPcHRpb25zKHByb3BzKSk7XG4gIH1pZiAodHlwZSA9PT0gUmVkaXJlY3QpIHtcbiAgICByZXR1cm4gUm91dGUuY3JlYXRlUmVkaXJlY3QoY3JlYXRlUm91dGVPcHRpb25zKHByb3BzKSk7XG4gIH1yZXR1cm4gUm91dGUuY3JlYXRlUm91dGUoY3JlYXRlUm91dGVPcHRpb25zKHByb3BzKSwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9wcy5jaGlsZHJlbikgY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHJvdXRlcyBjcmVhdGVkIGZyb20gdGhlIGdpdmVuXG4gKiBSZWFjdENoaWxkcmVuLCBhbGwgb2Ygd2hpY2ggc2hvdWxkIGJlIG9uZSBvZiA8Um91dGU+LCA8RGVmYXVsdFJvdXRlPixcbiAqIDxOb3RGb3VuZFJvdXRlPiwgb3IgPFJlZGlyZWN0PiwgZS5nLjpcbiAqXG4gKiAgIHZhciB7IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuLCBSb3V0ZSwgUmVkaXJlY3QgfSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xuICpcbiAqICAgdmFyIHJvdXRlcyA9IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKFxuICogICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGhhbmRsZXI9e0FwcH0+XG4gKiAgICAgICA8Um91dGUgbmFtZT1cInVzZXJcIiBwYXRoPVwiL3VzZXIvOnVzZXJJZFwiIGhhbmRsZXI9e1VzZXJ9PlxuICogICAgICAgICA8Um91dGUgbmFtZT1cInRhc2tcIiBwYXRoPVwidGFza3MvOnRhc2tJZFwiIGhhbmRsZXI9e1Rhc2t9Lz5cbiAqICAgICAgICAgPFJlZGlyZWN0IGZyb209XCJ0b2Rvcy86dGFza0lkXCIgdG89XCJ0YXNrXCIvPlxuICogICAgICAgPC9Sb3V0ZT5cbiAqICAgICA8L1JvdXRlPlxuICogICApO1xuICovXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgcm91dGVzID0gW107XG5cbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkID0gY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGNoaWxkKSkgcm91dGVzLnB1c2goY2hpbGQpO1xuICB9KTtcblxuICByZXR1cm4gcm91dGVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBjYW5Vc2VET00gPSByZXF1aXJlKCdyZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnKS5jYW5Vc2VET007XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIHdpbmRvdyBhcyB7IHgsIHkgfS5cbiAqL1xuZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsUG9zaXRpb24oKSB7XG4gIGludmFyaWFudChjYW5Vc2VET00sICdDYW5ub3QgZ2V0IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHdpdGhvdXQgYSBET00nKTtcblxuICByZXR1cm4ge1xuICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFdpbmRvd1Njcm9sbFBvc2l0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5EZWZhdWx0Um91dGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRGVmYXVsdFJvdXRlJyk7XG5leHBvcnRzLkxpbmsgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTGluaycpO1xuZXhwb3J0cy5Ob3RGb3VuZFJvdXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL05vdEZvdW5kUm91dGUnKTtcbmV4cG9ydHMuUmVkaXJlY3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUmVkaXJlY3QnKTtcbmV4cG9ydHMuUm91dGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUm91dGUnKTtcbmV4cG9ydHMuQWN0aXZlSGFuZGxlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Sb3V0ZUhhbmRsZXInKTtcbmV4cG9ydHMuUm91dGVIYW5kbGVyID0gZXhwb3J0cy5BY3RpdmVIYW5kbGVyO1xuXG5leHBvcnRzLkhhc2hMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL0hhc2hMb2NhdGlvbicpO1xuZXhwb3J0cy5IaXN0b3J5TG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9IaXN0b3J5TG9jYXRpb24nKTtcbmV4cG9ydHMuUmVmcmVzaExvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvUmVmcmVzaExvY2F0aW9uJyk7XG5leHBvcnRzLlN0YXRpY0xvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvU3RhdGljTG9jYXRpb24nKTtcbmV4cG9ydHMuVGVzdExvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvVGVzdExvY2F0aW9uJyk7XG5cbmV4cG9ydHMuSW1pdGF0ZUJyb3dzZXJCZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3JzL0ltaXRhdGVCcm93c2VyQmVoYXZpb3InKTtcbmV4cG9ydHMuU2Nyb2xsVG9Ub3BCZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3JzL1Njcm9sbFRvVG9wQmVoYXZpb3InKTtcblxuZXhwb3J0cy5IaXN0b3J5ID0gcmVxdWlyZSgnLi9IaXN0b3J5Jyk7XG5leHBvcnRzLk5hdmlnYXRpb24gPSByZXF1aXJlKCcuL05hdmlnYXRpb24nKTtcbmV4cG9ydHMuU3RhdGUgPSByZXF1aXJlKCcuL1N0YXRlJyk7XG5cbmV4cG9ydHMuY3JlYXRlUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJykuY3JlYXRlUm91dGU7XG5leHBvcnRzLmNyZWF0ZURlZmF1bHRSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKS5jcmVhdGVEZWZhdWx0Um91dGU7XG5leHBvcnRzLmNyZWF0ZU5vdEZvdW5kUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJykuY3JlYXRlTm90Rm91bmRSb3V0ZTtcbmV4cG9ydHMuY3JlYXRlUmVkaXJlY3QgPSByZXF1aXJlKCcuL1JvdXRlJykuY3JlYXRlUmVkaXJlY3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbicpO1xuXG5leHBvcnRzLmNyZWF0ZSA9IHJlcXVpcmUoJy4vY3JlYXRlUm91dGVyJyk7XG5leHBvcnRzLnJ1biA9IHJlcXVpcmUoJy4vcnVuUm91dGVyJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBpc1ZhbGlkQ2hpbGQob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCB8fCBSZWFjdC5pc1ZhbGlkRWxlbWVudChvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBpc1JlYWN0Q2hpbGRyZW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc1ZhbGlkQ2hpbGQob2JqZWN0KSB8fCBBcnJheS5pc0FycmF5KG9iamVjdCkgJiYgb2JqZWN0LmV2ZXJ5KGlzVmFsaWRDaGlsZCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNSZWFjdENoaWxkcmVuOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIExvY2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zJyk7XG52YXIgSGlzdG9yeSA9IHJlcXVpcmUoJy4uL0hpc3RvcnknKTtcblxudmFyIF9saXN0ZW5lcnMgPSBbXTtcbnZhciBfaXNMaXN0ZW5pbmcgPSBmYWxzZTtcbnZhciBfYWN0aW9uVHlwZTtcblxuZnVuY3Rpb24gbm90aWZ5Q2hhbmdlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IExvY2F0aW9uQWN0aW9ucy5QVVNIKSBIaXN0b3J5Lmxlbmd0aCArPSAxO1xuXG4gIHZhciBjaGFuZ2UgPSB7XG4gICAgcGF0aDogSGFzaExvY2F0aW9uLmdldEN1cnJlbnRQYXRoKCksXG4gICAgdHlwZTogdHlwZVxuICB9O1xuXG4gIF9saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lci5jYWxsKEhhc2hMb2NhdGlvbiwgY2hhbmdlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuc3VyZVNsYXNoKCkge1xuICB2YXIgcGF0aCA9IEhhc2hMb2NhdGlvbi5nZXRDdXJyZW50UGF0aCgpO1xuXG4gIGlmIChwYXRoLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1IYXNoTG9jYXRpb24ucmVwbGFjZSgnLycgKyBwYXRoKTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG9uSGFzaENoYW5nZSgpIHtcbiAgaWYgKGVuc3VyZVNsYXNoKCkpIHtcbiAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGFuIF9hY3Rpb25UeXBlIHRoZW4gYWxsIHdlIGtub3cgaXMgdGhlIGhhc2hcbiAgICAvLyBjaGFuZ2VkLiBJdCB3YXMgcHJvYmFibHkgY2F1c2VkIGJ5IHRoZSB1c2VyIGNsaWNraW5nIHRoZSBCYWNrXG4gICAgLy8gYnV0dG9uLCBidXQgbWF5IGhhdmUgYWxzbyBiZWVuIHRoZSBGb3J3YXJkIGJ1dHRvbiBvciBtYW51YWxcbiAgICAvLyBtYW5pcHVsYXRpb24uIFNvIGp1c3QgZ3Vlc3MgJ3BvcCcuXG4gICAgdmFyIGN1ckFjdGlvblR5cGUgPSBfYWN0aW9uVHlwZTtcbiAgICBfYWN0aW9uVHlwZSA9IG51bGw7XG4gICAgbm90aWZ5Q2hhbmdlKGN1ckFjdGlvblR5cGUgfHwgTG9jYXRpb25BY3Rpb25zLlBPUCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIExvY2F0aW9uIHRoYXQgdXNlcyBgd2luZG93LmxvY2F0aW9uLmhhc2hgLlxuICovXG52YXIgSGFzaExvY2F0aW9uID0ge1xuXG4gIGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiBhZGRDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIF9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICAvLyBEbyB0aGlzIEJFRk9SRSBsaXN0ZW5pbmcgZm9yIGhhc2hjaGFuZ2UuXG4gICAgZW5zdXJlU2xhc2goKTtcblxuICAgIGlmICghX2lzTGlzdGVuaW5nKSB7XG4gICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25oYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgX2lzTGlzdGVuaW5nID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgX2xpc3RlbmVycyA9IF9saXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICByZXR1cm4gbCAhPT0gbGlzdGVuZXI7XG4gICAgfSk7XG5cbiAgICBpZiAoX2xpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50KCdvbmhhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UpO1xuICAgICAgfVxuXG4gICAgICBfaXNMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgcHVzaDogZnVuY3Rpb24gcHVzaChwYXRoKSB7XG4gICAgX2FjdGlvblR5cGUgPSBMb2NhdGlvbkFjdGlvbnMuUFVTSDtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGg7XG4gIH0sXG5cbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShwYXRoKSB7XG4gICAgX2FjdGlvblR5cGUgPSBMb2NhdGlvbkFjdGlvbnMuUkVQTEFDRTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgJyMnICsgcGF0aCk7XG4gIH0sXG5cbiAgcG9wOiBmdW5jdGlvbiBwb3AoKSB7XG4gICAgX2FjdGlvblR5cGUgPSBMb2NhdGlvbkFjdGlvbnMuUE9QO1xuICAgIEhpc3RvcnkuYmFjaygpO1xuICB9LFxuXG4gIGdldEN1cnJlbnRQYXRoOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aCgpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJKFxuICAgIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMV0gfHwgJycpO1xuICB9LFxuXG4gIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJzxIYXNoTG9jYXRpb24+JztcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hMb2NhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucycpO1xudmFyIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9IaXN0b3J5Jyk7XG5cbnZhciBfbGlzdGVuZXJzID0gW107XG52YXIgX2lzTGlzdGVuaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIG5vdGlmeUNoYW5nZSh0eXBlKSB7XG4gIHZhciBjaGFuZ2UgPSB7XG4gICAgcGF0aDogSGlzdG9yeUxvY2F0aW9uLmdldEN1cnJlbnRQYXRoKCksXG4gICAgdHlwZTogdHlwZVxuICB9O1xuXG4gIF9saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lci5jYWxsKEhpc3RvcnlMb2NhdGlvbiwgY2hhbmdlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uUG9wU3RhdGUoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gSWdub3JlIGV4dHJhbmVvdXMgcG9wc3RhdGUgZXZlbnRzIGluIFdlYktpdC5cblxuICBub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlBPUCk7XG59XG5cbi8qKlxuICogQSBMb2NhdGlvbiB0aGF0IHVzZXMgSFRNTDUgaGlzdG9yeS5cbiAqL1xudmFyIEhpc3RvcnlMb2NhdGlvbiA9IHtcblxuICBhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBfbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgaWYgKCFfaXNMaXN0ZW5pbmcpIHtcbiAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBvblBvcFN0YXRlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ucG9wc3RhdGUnLCBvblBvcFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgX2lzTGlzdGVuaW5nID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgX2xpc3RlbmVycyA9IF9saXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICByZXR1cm4gbCAhPT0gbGlzdGVuZXI7XG4gICAgfSk7XG5cbiAgICBpZiAoX2xpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBvblBvcFN0YXRlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnQoJ29ucG9wc3RhdGUnLCBvblBvcFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgX2lzTGlzdGVuaW5nID0gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2gocGF0aCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IHBhdGg6IHBhdGggfSwgJycsIHBhdGgpO1xuICAgIEhpc3RvcnkubGVuZ3RoICs9IDE7XG4gICAgbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5QVVNIKTtcbiAgfSxcblxuICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKHBhdGgpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBwYXRoOiBwYXRoIH0sICcnLCBwYXRoKTtcbiAgICBub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlJFUExBQ0UpO1xuICB9LFxuXG4gIHBvcDogSGlzdG9yeS5iYWNrLFxuXG4gIGdldEN1cnJlbnRQYXRoOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aCgpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICB9LFxuXG4gIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJzxIaXN0b3J5TG9jYXRpb24+JztcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhpc3RvcnlMb2NhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBIaXN0b3J5TG9jYXRpb24gPSByZXF1aXJlKCcuL0hpc3RvcnlMb2NhdGlvbicpO1xudmFyIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9IaXN0b3J5Jyk7XG5cbi8qKlxuICogQSBMb2NhdGlvbiB0aGF0IHVzZXMgZnVsbCBwYWdlIHJlZnJlc2hlcy4gVGhpcyBpcyB1c2VkIGFzXG4gKiB0aGUgZmFsbGJhY2sgZm9yIEhpc3RvcnlMb2NhdGlvbiBpbiBicm93c2VycyB0aGF0IGRvIG5vdFxuICogc3VwcG9ydCB0aGUgSFRNTDUgaGlzdG9yeSBBUEkuXG4gKi9cbnZhciBSZWZyZXNoTG9jYXRpb24gPSB7XG5cbiAgcHVzaDogZnVuY3Rpb24gcHVzaChwYXRoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uID0gcGF0aDtcbiAgfSxcblxuICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKHBhdGgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXRoKTtcbiAgfSxcblxuICBwb3A6IEhpc3RvcnkuYmFjayxcblxuICBnZXRDdXJyZW50UGF0aDogSGlzdG9yeUxvY2F0aW9uLmdldEN1cnJlbnRQYXRoLFxuXG4gIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJzxSZWZyZXNoTG9jYXRpb24+JztcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZnJlc2hMb2NhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG5cbmZ1bmN0aW9uIHRocm93Q2Fubm90TW9kaWZ5KCkge1xuICBpbnZhcmlhbnQoZmFsc2UsICdZb3UgY2Fubm90IG1vZGlmeSBhIHN0YXRpYyBsb2NhdGlvbicpO1xufVxuXG4vKipcbiAqIEEgbG9jYXRpb24gdGhhdCBvbmx5IGV2ZXIgY29udGFpbnMgYSBzaW5nbGUgcGF0aC4gVXNlZnVsIGluXG4gKiBzdGF0ZWxlc3MgZW52aXJvbm1lbnRzIGxpa2Ugc2VydmVycyB3aGVyZSB0aGVyZSBpcyBubyBwYXRoIGhpc3RvcnksXG4gKiBvbmx5IHRoZSBwYXRoIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QuXG4gKi9cblxudmFyIFN0YXRpY0xvY2F0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RhdGljTG9jYXRpb24ocGF0aCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0aWNMb2NhdGlvbik7XG5cbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0YXRpY0xvY2F0aW9uLCBbe1xuICAgIGtleTogJ2dldEN1cnJlbnRQYXRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXRoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gJzxTdGF0aWNMb2NhdGlvbiBwYXRoPVwiJyArIHRoaXMucGF0aCArICdcIj4nO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGF0aWNMb2NhdGlvbjtcbn0pKCk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuU3RhdGljTG9jYXRpb24ucHJvdG90eXBlLnB1c2ggPSB0aHJvd0Nhbm5vdE1vZGlmeTtcblN0YXRpY0xvY2F0aW9uLnByb3RvdHlwZS5yZXBsYWNlID0gdGhyb3dDYW5ub3RNb2RpZnk7XG5TdGF0aWNMb2NhdGlvbi5wcm90b3R5cGUucG9wID0gdGhyb3dDYW5ub3RNb2RpZnk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGljTG9jYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIExvY2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zJyk7XG52YXIgSGlzdG9yeSA9IHJlcXVpcmUoJy4uL0hpc3RvcnknKTtcblxuLyoqXG4gKiBBIGxvY2F0aW9uIHRoYXQgaXMgY29udmVuaWVudCBmb3IgdGVzdGluZyBhbmQgZG9lcyBub3QgcmVxdWlyZSBhIERPTS5cbiAqL1xuXG52YXIgVGVzdExvY2F0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGVzdExvY2F0aW9uKGhpc3RvcnkpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVzdExvY2F0aW9uKTtcblxuICAgIHRoaXMuaGlzdG9yeSA9IGhpc3RvcnkgfHwgW107XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLl91cGRhdGVIaXN0b3J5TGVuZ3RoKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGVzdExvY2F0aW9uLCBbe1xuICAgIGtleTogJ25lZWRzRE9NJyxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfdXBkYXRlSGlzdG9yeUxlbmd0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVIaXN0b3J5TGVuZ3RoKCkge1xuICAgICAgSGlzdG9yeS5sZW5ndGggPSB0aGlzLmhpc3RvcnkubGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19ub3RpZnlDaGFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbm90aWZ5Q2hhbmdlKHR5cGUpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSB7XG4gICAgICAgIHBhdGg6IHRoaXMuZ2V0Q3VycmVudFBhdGgoKSxcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB0aGlzLmxpc3RlbmVyc1tpXS5jYWxsKHRoaXMsIGNoYW5nZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkQ2hhbmdlTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlQ2hhbmdlTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgcmV0dXJuIGwgIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHVzaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2gocGF0aCkge1xuICAgICAgdGhpcy5oaXN0b3J5LnB1c2gocGF0aCk7XG4gICAgICB0aGlzLl91cGRhdGVIaXN0b3J5TGVuZ3RoKCk7XG4gICAgICB0aGlzLl9ub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlBVU0gpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlcGxhY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlKHBhdGgpIHtcbiAgICAgIGludmFyaWFudCh0aGlzLmhpc3RvcnkubGVuZ3RoLCAnWW91IGNhbm5vdCByZXBsYWNlIHRoZSBjdXJyZW50IHBhdGggd2l0aCBubyBoaXN0b3J5Jyk7XG5cbiAgICAgIHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV0gPSBwYXRoO1xuXG4gICAgICB0aGlzLl9ub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlJFUExBQ0UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICAgIHRoaXMuaGlzdG9yeS5wb3AoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUhpc3RvcnlMZW5ndGgoKTtcbiAgICAgIHRoaXMuX25vdGlmeUNoYW5nZShMb2NhdGlvbkFjdGlvbnMuUE9QKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDdXJyZW50UGF0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9TdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiAnPFRlc3RMb2NhdGlvbj4nO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUZXN0TG9jYXRpb247XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRlc3RMb2NhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVSb3V0ZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVJvdXRlcicpO1xuXG4vKipcbiAqIEEgaGlnaC1sZXZlbCBjb252ZW5pZW5jZSBtZXRob2QgdGhhdCBjcmVhdGVzLCBjb25maWd1cmVzLCBhbmRcbiAqIHJ1bnMgYSByb3V0ZXIgaW4gb25lIHNob3QuIFRoZSBtZXRob2Qgc2lnbmF0dXJlIGlzOlxuICpcbiAqICAgUm91dGVyLnJ1bihyb3V0ZXNbLCBsb2NhdGlvbiBdLCBjYWxsYmFjayk7XG4gKlxuICogVXNpbmcgYHdpbmRvdy5sb2NhdGlvbi5oYXNoYCB0byBtYW5hZ2UgdGhlIFVSTCwgeW91IGNvdWxkIGRvOlxuICpcbiAqICAgUm91dGVyLnJ1bihyb3V0ZXMsIGZ1bmN0aW9uIChIYW5kbGVyKSB7XG4gKiAgICAgUmVhY3QucmVuZGVyKDxIYW5kbGVyLz4sIGRvY3VtZW50LmJvZHkpO1xuICogICB9KTtcbiAqIFxuICogVXNpbmcgSFRNTDUgaGlzdG9yeSBhbmQgYSBjdXN0b20gXCJjdXJzb3JcIiBwcm9wOlxuICogXG4gKiAgIFJvdXRlci5ydW4ocm91dGVzLCBSb3V0ZXIuSGlzdG9yeUxvY2F0aW9uLCBmdW5jdGlvbiAoSGFuZGxlcikge1xuICogICAgIFJlYWN0LnJlbmRlcig8SGFuZGxlciBjdXJzb3I9e2N1cnNvcn0vPiwgZG9jdW1lbnQuYm9keSk7XG4gKiAgIH0pO1xuICpcbiAqIFJldHVybnMgdGhlIG5ld2x5IGNyZWF0ZWQgcm91dGVyLlxuICpcbiAqIE5vdGU6IElmIHlvdSBuZWVkIHRvIHNwZWNpZnkgZnVydGhlciBvcHRpb25zIGZvciB5b3VyIHJvdXRlciBzdWNoXG4gKiBhcyBlcnJvci9hYm9ydCBoYW5kbGluZyBvciBjdXN0b20gc2Nyb2xsIGJlaGF2aW9yLCB1c2UgUm91dGVyLmNyZWF0ZVxuICogaW5zdGVhZC5cbiAqXG4gKiAgIHZhciByb3V0ZXIgPSBSb3V0ZXIuY3JlYXRlKG9wdGlvbnMpO1xuICogICByb3V0ZXIucnVuKGZ1bmN0aW9uIChIYW5kbGVyKSB7XG4gKiAgICAgLy8gLi4uXG4gKiAgIH0pO1xuICovXG5mdW5jdGlvbiBydW5Sb3V0ZXIocm91dGVzLCBsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gbG9jYXRpb247XG4gICAgbG9jYXRpb24gPSBudWxsO1xuICB9XG5cbiAgdmFyIHJvdXRlciA9IGNyZWF0ZVJvdXRlcih7XG4gICAgcm91dGVzOiByb3V0ZXMsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uXG4gIH0pO1xuXG4gIHJvdXRlci5ydW4oY2FsbGJhY2spO1xuXG4gIHJldHVybiByb3V0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcnVuUm91dGVyOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gc3VwcG9ydHNIaXN0b3J5KCkge1xuICAvKiEgdGFrZW4gZnJvbSBtb2Rlcm5penJcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICAgKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICAgKi9cbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0c0hpc3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBUb09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIGtleXM7XG5cdHZhciB0byA9IFRvT2JqZWN0KHRhcmdldCk7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gYXJndW1lbnRzW3NdO1xuXHRcdGtleXMgPSBPYmplY3Qua2V5cyhPYmplY3QoZnJvbSkpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0b1trZXlzW2ldXSA9IGZyb21ba2V5c1tpXV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvJyk7XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxudmFyIFN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG52YXIgUGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHt9O1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHN0cmluZ2lmeTogU3RyaW5naWZ5LFxuICAgIHBhcnNlOiBQYXJzZVxufTtcbiIsIi8vIExvYWQgbW9kdWxlc1xuXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHtcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBkZXB0aDogNSxcbiAgICBhcnJheUxpbWl0OiAyMCxcbiAgICBwYXJhbWV0ZXJMaW1pdDogMTAwMFxufTtcblxuXG5pbnRlcm5hbHMucGFyc2VWYWx1ZXMgPSBmdW5jdGlvbiAoc3RyLCBvcHRpb25zKSB7XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KG9wdGlvbnMuZGVsaW1pdGVyLCBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSBJbmZpbml0eSA/IHVuZGVmaW5lZCA6IG9wdGlvbnMucGFyYW1ldGVyTGltaXQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gcGFydHMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICB2YXIgcG9zID0gcGFydC5pbmRleE9mKCddPScpID09PSAtMSA/IHBhcnQuaW5kZXhPZignPScpIDogcGFydC5pbmRleE9mKCddPScpICsgMTtcblxuICAgICAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgICAgICAgb2JqW1V0aWxzLmRlY29kZShwYXJ0KV0gPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBVdGlscy5kZWNvZGUocGFydC5zbGljZSgwLCBwb3MpKTtcbiAgICAgICAgICAgIHZhciB2YWwgPSBVdGlscy5kZWNvZGUocGFydC5zbGljZShwb3MgKyAxKSk7XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSBbXS5jb25jYXQob2JqW2tleV0pLmNvbmNhdCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cblxuaW50ZXJuYWxzLnBhcnNlT2JqZWN0ID0gZnVuY3Rpb24gKGNoYWluLCB2YWwsIG9wdGlvbnMpIHtcblxuICAgIGlmICghY2hhaW4ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgdmFyIHJvb3QgPSBjaGFpbi5zaGlmdCgpO1xuXG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGlmIChyb290ID09PSAnW10nKSB7XG4gICAgICAgIG9iaiA9IFtdO1xuICAgICAgICBvYmogPSBvYmouY29uY2F0KGludGVybmFscy5wYXJzZU9iamVjdChjaGFpbiwgdmFsLCBvcHRpb25zKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgY2xlYW5Sb290ID0gcm9vdFswXSA9PT0gJ1snICYmIHJvb3Rbcm9vdC5sZW5ndGggLSAxXSA9PT0gJ10nID8gcm9vdC5zbGljZSgxLCByb290Lmxlbmd0aCAtIDEpIDogcm9vdDtcbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoY2xlYW5Sb290LCAxMCk7XG4gICAgICAgIHZhciBpbmRleFN0cmluZyA9ICcnICsgaW5kZXg7XG4gICAgICAgIGlmICghaXNOYU4oaW5kZXgpICYmXG4gICAgICAgICAgICByb290ICE9PSBjbGVhblJvb3QgJiZcbiAgICAgICAgICAgIGluZGV4U3RyaW5nID09PSBjbGVhblJvb3QgJiZcbiAgICAgICAgICAgIGluZGV4ID49IDAgJiZcbiAgICAgICAgICAgIGluZGV4IDw9IG9wdGlvbnMuYXJyYXlMaW1pdCkge1xuXG4gICAgICAgICAgICBvYmogPSBbXTtcbiAgICAgICAgICAgIG9ialtpbmRleF0gPSBpbnRlcm5hbHMucGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYmpbY2xlYW5Sb290XSA9IGludGVybmFscy5wYXJzZU9iamVjdChjaGFpbiwgdmFsLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmludGVybmFscy5wYXJzZUtleXMgPSBmdW5jdGlvbiAoa2V5LCB2YWwsIG9wdGlvbnMpIHtcblxuICAgIGlmICgha2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGUgcmVnZXggY2h1bmtzXG5cbiAgICB2YXIgcGFyZW50ID0gL14oW15cXFtcXF1dKikvO1xuICAgIHZhciBjaGlsZCA9IC8oXFxbW15cXFtcXF1dKlxcXSkvZztcblxuICAgIC8vIEdldCB0aGUgcGFyZW50XG5cbiAgICB2YXIgc2VnbWVudCA9IHBhcmVudC5leGVjKGtleSk7XG5cbiAgICAvLyBEb24ndCBhbGxvdyB0aGVtIHRvIG92ZXJ3cml0ZSBvYmplY3QgcHJvdG90eXBlIHByb3BlcnRpZXNcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KHNlZ21lbnRbMV0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTdGFzaCB0aGUgcGFyZW50IGlmIGl0IGV4aXN0c1xuXG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBpZiAoc2VnbWVudFsxXSkge1xuICAgICAgICBrZXlzLnB1c2goc2VnbWVudFsxXSk7XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGNoaWxkcmVuIGFwcGVuZGluZyB0byB0aGUgYXJyYXkgdW50aWwgd2UgaGl0IGRlcHRoXG5cbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKChzZWdtZW50ID0gY2hpbGQuZXhlYyhrZXkpKSAhPT0gbnVsbCAmJiBpIDwgb3B0aW9ucy5kZXB0aCkge1xuXG4gICAgICAgICsraTtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KHNlZ21lbnRbMV0ucmVwbGFjZSgvXFxbfFxcXS9nLCAnJykpKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goc2VnbWVudFsxXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSdzIGEgcmVtYWluZGVyLCBqdXN0IGFkZCB3aGF0ZXZlciBpcyBsZWZ0XG5cbiAgICBpZiAoc2VnbWVudCkge1xuICAgICAgICBrZXlzLnB1c2goJ1snICsga2V5LnNsaWNlKHNlZ21lbnQuaW5kZXgpICsgJ10nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJuYWxzLnBhcnNlT2JqZWN0KGtleXMsIHZhbCwgb3B0aW9ucyk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0ciwgb3B0aW9ucykge1xuXG4gICAgaWYgKHN0ciA9PT0gJycgfHxcbiAgICAgICAgc3RyID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBzdHIgPT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuZGVsaW1pdGVyID0gdHlwZW9mIG9wdGlvbnMuZGVsaW1pdGVyID09PSAnc3RyaW5nJyB8fCBVdGlscy5pc1JlZ0V4cChvcHRpb25zLmRlbGltaXRlcikgPyBvcHRpb25zLmRlbGltaXRlciA6IGludGVybmFscy5kZWxpbWl0ZXI7XG4gICAgb3B0aW9ucy5kZXB0aCA9IHR5cGVvZiBvcHRpb25zLmRlcHRoID09PSAnbnVtYmVyJyA/IG9wdGlvbnMuZGVwdGggOiBpbnRlcm5hbHMuZGVwdGg7XG4gICAgb3B0aW9ucy5hcnJheUxpbWl0ID0gdHlwZW9mIG9wdGlvbnMuYXJyYXlMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmFycmF5TGltaXQgOiBpbnRlcm5hbHMuYXJyYXlMaW1pdDtcbiAgICBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID0gdHlwZW9mIG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPT09ICdudW1iZXInID8gb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA6IGludGVybmFscy5wYXJhbWV0ZXJMaW1pdDtcblxuICAgIHZhciB0ZW1wT2JqID0gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBpbnRlcm5hbHMucGFyc2VWYWx1ZXMoc3RyLCBvcHRpb25zKSA6IHN0cjtcbiAgICB2YXIgb2JqID0ge307XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGtleXMgYW5kIHNldHVwIHRoZSBuZXcgb2JqZWN0XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRlbXBPYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGtleXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIG5ld09iaiA9IGludGVybmFscy5wYXJzZUtleXMoa2V5LCB0ZW1wT2JqW2tleV0sIG9wdGlvbnMpO1xuICAgICAgICBvYmogPSBVdGlscy5tZXJnZShvYmosIG5ld09iaik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFV0aWxzLmNvbXBhY3Qob2JqKTtcbn07XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxudmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7XG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgYXJyYXlQcmVmaXhHZW5lcmF0b3JzOiB7XG4gICAgICAgIGJyYWNrZXRzOiBmdW5jdGlvbiAocHJlZml4LCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXggKyAnW10nO1xuICAgICAgICB9LFxuICAgICAgICBpbmRpY2VzOiBmdW5jdGlvbiAocHJlZml4LCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXggKyAnWycgKyBrZXkgKyAnXSc7XG4gICAgICAgIH0sXG4gICAgICAgIHJlcGVhdDogZnVuY3Rpb24gKHByZWZpeCwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5pbnRlcm5hbHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKG9iaiwgcHJlZml4LCBnZW5lcmF0ZUFycmF5UHJlZml4KSB7XG5cbiAgICBpZiAoVXRpbHMuaXNCdWZmZXIob2JqKSkge1xuICAgICAgICBvYmogPSBvYmoudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBvYmogPSBvYmoudG9JU09TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIG9iaiA9ICcnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyB8fFxuICAgICAgICB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJyB8fFxuICAgICAgICB0eXBlb2Ygb2JqID09PSAnYm9vbGVhbicpIHtcblxuICAgICAgICByZXR1cm4gW2VuY29kZVVSSUNvbXBvbmVudChwcmVmaXgpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9iaildO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHZhciBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoaW50ZXJuYWxzLnN0cmluZ2lmeShvYmpba2V5XSwgZ2VuZXJhdGVBcnJheVByZWZpeChwcmVmaXgsIGtleSksIGdlbmVyYXRlQXJyYXlQcmVmaXgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoaW50ZXJuYWxzLnN0cmluZ2lmeShvYmpba2V5XSwgcHJlZml4ICsgJ1snICsga2V5ICsgJ10nLCBnZW5lcmF0ZUFycmF5UHJlZml4KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIG9wdGlvbnMpIHtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBkZWxpbWl0ZXIgPSB0eXBlb2Ygb3B0aW9ucy5kZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gaW50ZXJuYWxzLmRlbGltaXRlciA6IG9wdGlvbnMuZGVsaW1pdGVyO1xuXG4gICAgdmFyIGtleXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICBvYmogPT09IG51bGwpIHtcblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5Rm9ybWF0O1xuICAgIGlmIChvcHRpb25zLmFycmF5Rm9ybWF0IGluIGludGVybmFscy5hcnJheVByZWZpeEdlbmVyYXRvcnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRpb25zLmFycmF5Rm9ybWF0O1xuICAgIH1cbiAgICBlbHNlIGlmICgnaW5kaWNlcycgaW4gb3B0aW9ucykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdGlvbnMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSAnaW5kaWNlcyc7XG4gICAgfVxuXG4gICAgdmFyIGdlbmVyYXRlQXJyYXlQcmVmaXggPSBpbnRlcm5hbHMuYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcblxuICAgIHZhciBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG4gICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChpbnRlcm5hbHMuc3RyaW5naWZ5KG9ialtrZXldLCBrZXksIGdlbmVyYXRlQXJyYXlQcmVmaXgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5cy5qb2luKGRlbGltaXRlcik7XG59O1xuIiwiLy8gTG9hZCBtb2R1bGVzXG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHt9O1xuXG5cbmV4cG9ydHMuYXJyYXlUb09iamVjdCA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcblxuICAgIHZhciBvYmogPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBzb3VyY2UubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgb2JqW2ldID0gc291cmNlW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cblxuZXhwb3J0cy5tZXJnZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtzb3VyY2VdID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRhcmdldCA9IFt0YXJnZXRdLmNvbmNhdChzb3VyY2UpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiZcbiAgICAgICAgIUFycmF5LmlzQXJyYXkoc291cmNlKSkge1xuXG4gICAgICAgIHRhcmdldCA9IGV4cG9ydHMuYXJyYXlUb09iamVjdCh0YXJnZXQpO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICBmb3IgKHZhciBrID0gMCwga2wgPSBrZXlzLmxlbmd0aDsgayA8IGtsOyArK2spIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNba107XG4gICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtrZXldO1xuXG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IGV4cG9ydHMubWVyZ2UodGFyZ2V0W2tleV0sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gKHN0cikge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59O1xuXG5cbmV4cG9ydHMuY29tcGFjdCA9IGZ1bmN0aW9uIChvYmosIHJlZnMpIHtcblxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICBvYmogPT09IG51bGwpIHtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHJlZnMgPSByZWZzIHx8IFtdO1xuICAgIHZhciBsb29rdXAgPSByZWZzLmluZGV4T2Yob2JqKTtcbiAgICBpZiAobG9va3VwICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gcmVmc1tsb29rdXBdO1xuICAgIH1cblxuICAgIHJlZnMucHVzaChvYmopO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICB2YXIgY29tcGFjdGVkID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gb2JqLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbXBhY3RlZC5wdXNoKG9ialtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcGFjdGVkO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBmb3IgKGkgPSAwLCBpbCA9IGtleXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgb2JqW2tleV0gPSBleHBvcnRzLmNvbXBhY3Qob2JqW2tleV0sIHJlZnMpO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmV4cG9ydHMuaXNSZWdFeHAgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cblxuZXhwb3J0cy5pc0J1ZmZlciA9IGZ1bmN0aW9uIChvYmopIHtcblxuICAgIGlmIChvYmogPT09IG51bGwgfHxcbiAgICAgICAgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhKG9iai5jb25zdHJ1Y3RvciAmJlxuICAgICAgICBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgJiZcbiAgICAgICAgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaikpO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBFeGVjdXRpb25FbnZpcm9ubWVudFxuICovXG5cbi8qanNsaW50IGV2aWw6IHRydWUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYW5Vc2VET00gPSAhIShcbiAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudClcbik7XG5cbi8qKlxuICogU2ltcGxlLCBsaWdodHdlaWdodCBtb2R1bGUgYXNzaXN0aW5nIHdpdGggdGhlIGRldGVjdGlvbiBhbmQgY29udGV4dCBvZlxuICogV29ya2VyLiBIZWxwcyBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXMgYW5kIGFsbG93cyBjb2RlIHRvIHJlYXNvbiBhYm91dFxuICogd2hldGhlciBvciBub3QgdGhleSBhcmUgaW4gYSBXb3JrZXIsIGV2ZW4gaWYgdGhleSBuZXZlciBpbmNsdWRlIHRoZSBtYWluXG4gKiBgUmVhY3RXb3JrZXJgIGRlcGVuZGVuY3kuXG4gKi9cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuICBjYW5Vc2VET006IGNhblVzZURPTSxcblxuICBjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuICBjYW5Vc2VFdmVudExpc3RlbmVyczpcbiAgICBjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuICBjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlbixcblxuICBpc0luV29ya2VyOiAhY2FuVXNlRE9NIC8vIEZvciBub3csIHRoaXMgaXMgdHJ1ZSAtIG1pZ2h0IGNoYW5nZSBpbiB0aGUgZnV0dXJlLlxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIE9iamVjdC5hc3NpZ25cbiAqL1xuXG4vLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtb2JqZWN0LmFzc2lnblxuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZXMpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiB0YXJnZXQgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cblxuICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICBmb3IgKHZhciBuZXh0SW5kZXggPSAxOyBuZXh0SW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBuZXh0SW5kZXgrKykge1xuICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW25leHRJbmRleF07XG4gICAgaWYgKG5leHRTb3VyY2UgPT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGZyb20gPSBPYmplY3QobmV4dFNvdXJjZSk7XG5cbiAgICAvLyBXZSBkb24ndCBjdXJyZW50bHkgc3VwcG9ydCBhY2Nlc3NvcnMgbm9yIHByb3hpZXMuIFRoZXJlZm9yZSB0aGlzXG4gICAgLy8gY29weSBjYW5ub3QgdGhyb3cuIElmIHdlIGV2ZXIgc3VwcG9ydGVkIHRoaXMgdGhlbiB3ZSBtdXN0IGhhbmRsZVxuICAgIC8vIGV4Y2VwdGlvbnMgYW5kIHNpZGUtZWZmZWN0cy4gV2UgZG9uJ3Qgc3VwcG9ydCBzeW1ib2xzIHNvIHRoZXkgd29uJ3RcbiAgICAvLyBiZSB0cmFuc2ZlcnJlZC5cblxuICAgIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG4gICAgICAgIHRvW2tleV0gPSBmcm9tW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBlbXB0eUZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbihhcmcpIHsgcmV0dXJuIGFyZzsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGludmFyaWFudFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdJbnZhcmlhbnQgVmlvbGF0aW9uOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSB3YXJuaW5nXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZShcIi4vZW1wdHlGdW5jdGlvblwiKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCApIHtmb3IgKHZhciBhcmdzPVtdLCRfXzA9MiwkX18xPWFyZ3VtZW50cy5sZW5ndGg7JF9fMDwkX18xOyRfXzArKykgYXJncy5wdXNoKGFyZ3VtZW50c1skX18wXSk7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgL15bc1xcV10qJC8udGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgIHtyZXR1cm4gYXJnc1thcmdJbmRleCsrXTt9KTtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCJ2YXIgQXBwID0gcmVxdWlyZSgnLi8uLi9hcHAvQXBwLmpzJyk7XG52YXIgcm91dGVzID0gcmVxdWlyZSgnLi8uLi9hcHAvcm91dGVzLmpzJyk7XG52YXIgU2l0ZUhlYWRlciA9IHJlcXVpcmUoJy4vLi4vYXBwL0hlYWRlci5qc3gnKTtcbnZhciBJbmZvQmxvY2sgPSByZXF1aXJlKCcuLy4uL2FwcC9JbmZvQmxvY2suanN4Jyk7XG52YXIgQWRkcmVzc0Jsb2NrID0gcmVxdWlyZSgnLi8uLi9hcHAvQWRkcmVzc0Jsb2NrLmpzeCcpO1xudmFyIENvbnRhY3QgPSByZXF1aXJlKCcuLy4uL2FwcC9Db250YWN0LmpzeCcpO1xudmFyIEVkdWNhdGlvbiA9IHJlcXVpcmUoJy4vLi4vYXBwL0VkdWNhdGlvbi5qc3gnKTtcbnZhciBFZHVjYXRpb25JdGVtcyA9IHJlcXVpcmUoJy4vLi4vYXBwL0VkdWNhdGlvbkl0ZW1zLmpzeCcpO1xudmFyIEZvb3RlciA9IHJlcXVpcmUoJy4vLi4vYXBwL0Zvb3Rlci5qc3gnKTtcbnZhciBIZWFkID0gcmVxdWlyZSgnLi8uLi9hcHAvSGVhZC5qc3gnKTtcbnZhciBOYXZCYXIgPSByZXF1aXJlKCcuLy4uL2FwcC9OYXZCYXIuanN4Jyk7XG52YXIgU29jaWFsTmV0d29ya0JhciA9IHJlcXVpcmUoJy4vLi4vYXBwL1NvY2lhbE5ldHdvcmtCYXIuanN4Jyk7XG52YXIgV2lkZ2V0VHdpdHRlciA9IHJlcXVpcmUoJy4vLi4vYXBwL1dpZGdldFR3aXR0ZXIuanN4Jyk7XG52YXIgc3R1YlJvdXRlckNvbnRleHQgPSByZXF1aXJlKCcuL3N0dWJSb3V0ZXJDb250ZXh0LmpzJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdC9hZGRvbnMnKTtcbnZhciBibG9nID0gcmVxdWlyZSgnLi8uLi9hcHAvbW9kZWwuanMnKTtcbnZhciBUZXN0VXRpbHMgPSBSZWFjdC5hZGRvbnMuVGVzdFV0aWxzO1xudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcbnZhciBnbG9iYWxkb2N1bWVudCA9IHJlcXVpcmUoJ2dsb2JhbCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xuXG5kZXNjcmliZShcIkFwcFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFwcDtcbiAgICB2YXIgU3ViamVjdCA9IHN0dWJSb3V0ZXJDb250ZXh0KEFwcCk7XG4gICAgYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgYXBwID0gVGVzdFV0aWxzLnJlbmRlckludG9Eb2N1bWVudChSZWFjdC5jcmVhdGVFbGVtZW50KFN1YmplY3QsIG51bGwpKTtcbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIHJlbmRlciBoZWFkZXI6IGZyb20gbW9kZWwuanMgdGl0bGUgcHJvcFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGV4cGVjdChnbG9iYWwuZG9jdW1lbnQudGl0bGUpLnRvRXF1YWwoYmxvZy50aXRsZSk7XG4gICAgfSk7XG5cbiAgICBpdChcInNob3VsZCBiZSB3cmFwcGVkIHdpdGggYSBkaXZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBleHBlY3QoYXBwLmdldERPTU5vZGUoKS50YWdOYW1lKS50b0VxdWFsKCdESVYnKTtcbiAgICB9KTtcbn0pO1xuXG5kZXNjcmliZShcIlNpdGVIZWFkZXJcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgaXQoXCJzaG91bGQgYmUgd3JhcHBlZCB3aXRoIGEgZGl2XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFwcCA9IFRlc3RVdGlscy5yZW5kZXJJbnRvRG9jdW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChTaXRlSGVhZGVyLCBudWxsKSk7XG4gICAgICAgIGV4cGVjdChhcHAuZ2V0RE9NTm9kZSgpLnRhZ05hbWUpLnRvRXF1YWwoJ0RJVicpO1xuICAgIH0pO1xufSk7XG5cbmRlc2NyaWJlKFwiV2lkZ2V0VHdpdHRlclwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICBpdChcInNob3VsZCBiZSB3cmFwcGVkIHdpdGggYSBkaXZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXBwID0gVGVzdFV0aWxzLnJlbmRlckludG9Eb2N1bWVudChSZWFjdC5jcmVhdGVFbGVtZW50KFdpZGdldFR3aXR0ZXIsIG51bGwpKTtcbiAgICAgICAgZXhwZWN0KGFwcC5nZXRET01Ob2RlKCkudGFnTmFtZSkudG9FcXVhbCgnRElWJyk7XG4gICAgfSk7XG59KTtcblxuZGVzY3JpYmUoXCJOYXZCYXJcIiwgZnVuY3Rpb24gKCkge1xuICAgIGl0KFwic2hvdWxkIGJlIHdyYXBwZWQgd2l0aCBhIG5hdlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBTdWJqZWN0ID0gc3R1YlJvdXRlckNvbnRleHQoTmF2QmFyKTtcbiAgICAgICAgdmFyIGFwcCA9IFRlc3RVdGlscy5yZW5kZXJJbnRvRG9jdW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChTdWJqZWN0LCBudWxsKSk7XG4gICAgICAgIGV4cGVjdChhcHAuZ2V0RE9NTm9kZSgpLnRhZ05hbWUpLnRvRXF1YWwoJ05BVicpO1xuICAgIH0pO1xufSk7XG5cbmRlc2NyaWJlKFwiSGVhZFwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICBpdChcInNob3VsZCBiZSB3cmFwcGVkIHdpdGggYSBkaXZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXBwID0gVGVzdFV0aWxzLnJlbmRlckludG9Eb2N1bWVudChSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwpKTtcbiAgICAgICAgZXhwZWN0KGFwcC5nZXRET01Ob2RlKCkudGFnTmFtZSkudG9FcXVhbCgnRElWJyk7XG4gICAgfSk7XG59KTtcblxuZGVzY3JpYmUoXCJGb290ZXJcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgaXQoXCJzaG91bGQgYmUgd3JhcHBlZCB3aXRoIGEgZGl2XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFwcCA9IFRlc3RVdGlscy5yZW5kZXJJbnRvRG9jdW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChGb290ZXIsIG51bGwpKTtcbiAgICAgICAgZXhwZWN0KGFwcC5nZXRET01Ob2RlKCkudGFnTmFtZSkudG9FcXVhbCgnRk9PVEVSJyk7XG4gICAgfSk7XG59KTtcblxuZGVzY3JpYmUoXCJBZGRyZXNzQmxvY2tcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgaXQoXCJzaG91bGQgYmUgd3JhcHBlZCB3aXRoIGEgYWRkcmVzc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcHAgPSBUZXN0VXRpbHMucmVuZGVySW50b0RvY3VtZW50KFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWRkcmVzc0Jsb2NrLCBudWxsKSk7XG4gICAgICAgIGV4cGVjdChhcHAuZ2V0RE9NTm9kZSgpLnRhZ05hbWUpLnRvRXF1YWwoJ0FERFJFU1MnKTtcbiAgICB9KTtcbn0pO1xuXG5kZXNjcmliZShcIkluZm9CbG9ja1wiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICBpdChcInNob3VsZCBiZSB3cmFwcGVkIHdpdGggYSBkaXZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgU3ViamVjdCA9IHN0dWJSb3V0ZXJDb250ZXh0KEluZm9CbG9jayk7XG4gICAgICAgIHZhciBhcHAgPSBUZXN0VXRpbHMucmVuZGVySW50b0RvY3VtZW50KFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3ViamVjdCwgbnVsbCkpO1xuICAgICAgICBleHBlY3QoYXBwLmdldERPTU5vZGUoKS50YWdOYW1lKS50b0VxdWFsKCdESVYnKTtcbiAgICB9KTtcbn0pO1xuXG5kZXNjcmliZShcIkNvbnRhY3RcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgaXQoXCJzaG91bGQgYmUgd3JhcHBlZCB3aXRoIGEgZGl2XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFwcCA9IFRlc3RVdGlscy5yZW5kZXJJbnRvRG9jdW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWN0LCBudWxsKSk7XG4gICAgICAgIGV4cGVjdChhcHAuZ2V0RE9NTm9kZSgpLnRhZ05hbWUpLnRvRXF1YWwoJ0RJVicpO1xuICAgIH0pO1xufSk7XG5cbmRlc2NyaWJlKFwiRWR1Y2F0aW9uXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgIGl0KFwic2hvdWxkIGJlIHdyYXBwZWQgd2l0aCBhIGRpdlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcHAgPSBUZXN0VXRpbHMucmVuZGVySW50b0RvY3VtZW50KFJlYWN0LmNyZWF0ZUVsZW1lbnQoRWR1Y2F0aW9uLCBudWxsKSk7XG4gICAgICAgIGV4cGVjdChhcHAuZ2V0RE9NTm9kZSgpLnRhZ05hbWUpLnRvRXF1YWwoJ0RJVicpO1xuICAgIH0pO1xufSk7XG5cbmRlc2NyaWJlKFwiRWR1Y2F0aW9uSXRlbXNcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgaXQoXCJzaG91bGQgYmUgd3JhcHBlZCB3aXRoIGEgZGl2XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFwcCA9IFRlc3RVdGlscy5yZW5kZXJJbnRvRG9jdW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChFZHVjYXRpb25JdGVtcywge2hlYWRlcjogXCJ0ZXN0XCIsIGl0ZW1zOiBibG9nLmVkdWNhdGlvbn0pKTtcbiAgICAgICAgZXhwZWN0KGFwcC5nZXRET01Ob2RlKCkudGFnTmFtZSkudG9FcXVhbCgnRElWJyk7XG4gICAgfSk7XG59KTsiLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBzdHViUm91dGVyQ29udGV4dCA9IGZ1bmN0aW9uKENvbXBvbmVudCwgcHJvcHMpIHtcbiAgICBmdW5jdGlvbiBSb3V0ZXJTdHViKCkgeyB9XG5cbiAgICB2YXIgc3JjID0ge1xuICAgICAgICBtYWtlUGF0aCgpIHt9LFxuICAgICAgICBtYWtlSHJlZigpIHt9LFxuICAgICAgICB0cmFuc2l0aW9uVG8oKSB7fSxcbiAgICAgICAgcmVwbGFjZVdpdGgoKSB7fSxcbiAgICAgICAgZ29CYWNrKCkge30sXG4gICAgICAgIGdldEN1cnJlbnRQYXRoKCkge30sXG4gICAgICAgIGdldEN1cnJlbnRSb3V0ZXMoKSB7fSxcbiAgICAgICAgZ2V0Q3VycmVudFBhdGhuYW1lKCkge3JldHVybiBcIi9cIn0sXG4gICAgICAgIGdldEN1cnJlbnRQYXJhbXMoKSB7fSxcbiAgICAgICAgZ2V0Q3VycmVudFF1ZXJ5KCkge30sXG4gICAgICAgIGlzQWN0aXZlKCkge30sXG4gICAgICAgIGdldFJvdXRlQXREZXB0aCgpIHt9LFxuICAgICAgICBzZXRSb3V0ZUNvbXBvbmVudEF0RGVwdGgoKSB7fVxuICAgIH07XG5cbiAgICBPYmplY3Qua2V5cyhzcmMpLmZvckVhY2goZnVuY3Rpb24oaykge1xuICAgICAgICBSb3V0ZXJTdHViW2tdID0gc3JjW2tdO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgICAgY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgICAgICAgICAgIHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgICAgICByb3V0ZURlcHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByb3V0ZXI6IFJvdXRlclN0dWIsXG4gICAgICAgICAgICAgICAgcm91dGVEZXB0aDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIFJlYWN0Ll9fc3ByZWFkKHt9LCAgcHJvcHMpKVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJSb3V0ZXJDb250ZXh0OyJdfQ==
