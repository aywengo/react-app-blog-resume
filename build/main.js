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

var App = React.createClass({displayName: "App",
    mixins: [Router.State],
    componentDidMount: function () {
        document.title = Config.title;
    },
    render: function () {
        var twitterBar,infoBlock,mainPart;
        if(this.isActive('/profile') || this.isActive('/'))
        {
            twitterBar = React.createElement(WidgetTwitter, {count: 5});
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
                            React.createElement(Head, {logo: Config.logo, 
                                  position: Config.position, 
                                  name: Config.name, 
                                  surname: Config.surname}), 
                            React.createElement("br", {className: "clear"}), 
                            infoBlock
                        ), 
                        React.createElement("div", {className: (this.isActive('/profile') || this.isActive('/')) ? "sidebar hidden" : "topAddress hidden"}, 
                            React.createElement(AddressBlock, {address: Config.address, 
                                          mail: Config.mail, 
                                          telnumber: Config.tel}), 
                            React.createElement(SocialNetworks, {resource: "social", 
                                            mail: Config.mail}), 
                            twitterBar
                        ), 
                        React.createElement("br", {className: "clear"}), 
                        mainPart
                    ), 
                    React.createElement(Footer, {author: Config.author})
                )
            )
        );
    }
});

module.exports = App;
},{"./AddressBlock.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/AddressBlock.jsx","./Footer.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Footer.jsx","./Head.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Head.jsx","./InfoBlock.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/InfoBlock.jsx","./NavBar.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/NavBar.jsx","./SocialNetworkBar.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/SocialNetworkBar.jsx","./SubnavContainer.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/SubnavContainer.jsx","./WidgetTwitter.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/WidgetTwitter.jsx","./config.js":"/Users/romeo/Repository/react-app-blog-resume/app/config.js","react":"react","react-router":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/index.js"}],"/Users/romeo/Repository/react-app-blog-resume/app/Contact.jsx":[function(require,module,exports){
var React = require('react');
var Config = require('./config.js');
var ContactForm = require('./ContactForm.jsx');
var WidgetTwitter = require('./WidgetTwitter.jsx');

var Contact = React.createClass({displayName: "Contact",
    render: function () {
        return React.createElement("div", {className: "innerContainer"}, 
            React.createElement("div", {className: "desc"}, 
                React.createElement("iframe", {frameBorder: "0", scrolling: "no", marginHeight: "0", marginWidth: "0", 
                        src: Config.map})
            ), 
            React.createElement("h4", null, "Ask me anything."), 
            React.createElement(ContactForm, null), 
            React.createElement("div", {className: "sidebar hidden"}, 
                React.createElement(WidgetTwitter, null)
            )
        )
    }
});

module.exports = Contact;
},{"./ContactForm.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/ContactForm.jsx","./WidgetTwitter.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/WidgetTwitter.jsx","./config.js":"/Users/romeo/Repository/react-app-blog-resume/app/config.js","react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/ContactForm.jsx":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var Config = require('./config.js');
var Revalidator = require('revalidator');
var ValidationInfoBlock = require('./ValidationInfoBlock.jsx');

var getValidationSchema = function () {
    return {
        properties: {
            email: {
                description: 'the url the object should be stored at',
                type: 'string',
                pattern: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
                required: true
            },
            name: {
                description: 'a means of protecting data (insufficient for production, used as example)',
                type: 'string',
                required: true
            },
            text: {
                type: 'string',
                minLength: 2,
                default: null
            }
        }
    }
};

var ContactForm = React.createClass({displayName: "ContactForm",
    getInitialState: function () {
        return {infomsg: '',
                isValid: null}
    },
    handleSubmit: function (e) {
        e.preventDefault();

        var subject = {
            name: this.refs.uname.getDOMNode().value.toString(),
            email: this.refs.uemail.getDOMNode().value.toString(),
            text: this.refs.umessage.getDOMNode().value.toString(),
            timestamp: Date.now()
        };
        var isValid = Revalidator.validate(subject, getValidationSchema());

        if (!isValid.valid){
            this.setState({infomsg : isValid.errors, isValid: false});
            return;
        }

        var jso = JSON.stringify(subject);
        $.ajax({
            url: Config.service + '/send',
            contentType: 'text/plain',
            crossDomain: true,
            type: 'POST',
            data: jso,
            success: function (body) {
                this.setState({infomsg: body, isValid: true})
            }.bind(this),
            error: function (error) {
                this.setState({infomsg: error.responseType, isValid: false})
            }.bind(this)
        });
    },
    render: function () {

        return React.createElement("form", {className: "fc-contact-form", ref: "contactForm"}, 
            React.createElement(ValidationInfoBlock, {
                infomsg: this.state.infomsg, 
                isValid: this.state.isValid}), 
            React.createElement("label", {htmlFor: "uname"}, "Your name"), 
            React.createElement("input", {type: "text", ref: "uname", id: "uname", required: true}), 

            React.createElement("p", {className: "error uname-error"}), 
            React.createElement("label", {htmlFor: "uemail"}, "Your email"), 
            React.createElement("input", {type: "email", ref: "uemail", id: "uemail", required: true}), 

            React.createElement("p", {className: "error uemail-error"}), 
            React.createElement("label", {htmlFor: "umessage"}, "Your message"), 
            React.createElement("textarea", {className: "umessage", id: "umessage", ref: "umessage", required: true}), 

            React.createElement("br", null), 
            React.createElement("button", {className: "submit", id: "fc-contact-btn", onClick: this.handleSubmit}, 
                "Submit"
            )
        )
    }
});

module.exports = ContactForm;
},{"./ValidationInfoBlock.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/ValidationInfoBlock.jsx","./config.js":"/Users/romeo/Repository/react-app-blog-resume/app/config.js","react":"react","revalidator":"revalidator"}],"/Users/romeo/Repository/react-app-blog-resume/app/Education.jsx":[function(require,module,exports){
var React = require('react');
var EducationItems = require('./EducationItems.jsx');

var Education = React.createClass({displayName: "Education",
    render: function () {
        return React.createElement("div", {className: "innerContainer"}, 
            React.createElement(EducationItems, {header: "Education", resource: "education"}), 
            React.createElement("p", null, " "), 
            React.createElement(EducationItems, {header: "Certification", resource: "certifications"})
        )
    }
});

module.exports = Education;
},{"./EducationItems.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/EducationItems.jsx","react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/EducationItems.jsx":[function(require,module,exports){
var React = require('react');
var Config = require('./config.js');
var Request = require('request');
var Spinner = require('react-spinner');

var elementBody;
var EducationItems = React.createClass({displayName: "EducationItems",
    getInitialState: function () {
        return {data: []};
    },
    componentWillMount: function() {
        elementBody = React.createElement(Spinner, null)
    },
    componentDidMount: function () {
        Request.get(Config.resource + this.props.resource,
            function (error, response, body) {
                if (!error && response.statusCode == 200 && !body.isEmpty) {
                    var data = JSON.parse(body);
                    if (!data.isNullOrUndefined) {
                        elementBody = React.createElement("div", null);
                        this.setState({data: data});
                    }
                }
            }.bind(this))
    },
    render: function () {
        return React.createElement("div", null, 
            React.createElement("div", {className: "desc"}, 
                React.createElement("h2", null, this.props.header)
            ), 
            React.createElement("div", {className: "education-items"}, 
                React.createElement("ul", {className: "personalDev"}, 
                    elementBody, 
                    this.state.data.map(function(data, i) {
                        var head = (data.link === 'undefined')
                                        ? data.title
                                        : React.createElement("a", {href: data.link, target: "_blank"}, " ", data.title, " ");
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
},{"./config.js":"/Users/romeo/Repository/react-app-blog-resume/app/config.js","react":"react","react-spinner":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-spinner/index.js","request":"request"}],"/Users/romeo/Repository/react-app-blog-resume/app/Experience.jsx":[function(require,module,exports){
var React = require('react');
var Config = require('./config.js');
var Request = require('request');
var Spinner = require('react-spinner');

var elementBody;
var Experience = React.createClass({displayName: "Experience",
    getInitialState: function () {
        return {data: []};
    },
    componentWillMount: function() {
        elementBody = React.createElement(Spinner, null)
    },
    componentDidMount: function () {
        Request.get(Config.resource + "experience",
            function (error, response, body) {
                if (!error && response.statusCode == 200 && !body.isEmpty) {
                    var data = JSON.parse(body);
                    if (!data.isNullOrUndefined) {
                        elementBody = React.createElement("div", null);
                        this.setState({data: data});
                    }
                }
            }.bind(this))
    },
    render: function () {
        return (
            React.createElement("div", {className: "education-items"}, 
                React.createElement("ul", {className: "personalDev"}, 
                    elementBody, 
                    this.state.data.map(function(data, i) {
                        var head = (data.link === 'undefined')
                            ? data.employer
                            : React.createElement("a", {href: data.link, target: "_blank"}, " ", data.employer, " ");
                        return (React.createElement("li", {key: i}, 
                            React.createElement("span", {className: "title"}, head), 
                            React.createElement("span", {className: "time"}, data.time), React.createElement("br", null), 
                            React.createElement("p", null, React.createElement("b", null, data.position)), 
                            React.createElement("span", null, data.description)
                        ))
                    })
                )
            ))
    }
});

module.exports = Experience;
},{"./config.js":"/Users/romeo/Repository/react-app-blog-resume/app/config.js","react":"react","react-spinner":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-spinner/index.js","request":"request"}],"/Users/romeo/Repository/react-app-blog-resume/app/Footer.jsx":[function(require,module,exports){
var React = require('react');

var Footer = React.createClass({displayName: "Footer",
    render: function () {
        return React.createElement("footer", null, 
            React.createElement("span", null, " Copyright ©2015 ", this.props.author, "."), 
            React.createElement("span", null, " Powered by ", React.createElement("a", {href: "http://http://facebook.github.io/react/"}, "React.js")), 
            React.createElement("span", null, " Design by ", React.createElement("a", {href: "http://themeforest.net/user/themebakers/portfolio"}, "themebakers")), 
            React.createElement("span", null, " Source code on ", React.createElement("a", {href: "https://github.com/aywengo/react-app-blog-resume"}, "GitHub"))
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
},{"react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/InfoBlock.jsx":[function(require,module,exports){
var React = require('react');
var SubnavContainer = require('./SubnavContainer.jsx');
var Config = require('./config.js');

var InfoBlock = React.createClass({displayName: "InfoBlock",
    render: function () {
        return  React.createElement("div", null, 
                    React.createElement("div", {className: "desc"}, 
                        React.createElement("p", null, Config.text)
                    ), 
            React.createElement(SubnavContainer, null)
        );
    }
});

module.exports = InfoBlock;
},{"./SubnavContainer.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/SubnavContainer.jsx","./config.js":"/Users/romeo/Repository/react-app-blog-resume/app/config.js","react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/NavBar.jsx":[function(require,module,exports){
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
var Config = require('./config.js');
var Skills = require('./Skills.jsx');
var Experience = require('./Experience.jsx');

var Resume = React.createClass({displayName: "Resume",
    render: function () {
        return React.createElement("div", {className: "innerContainer"}, 
            React.createElement("div", {className: "desc"}, 
                React.createElement("h2", null, "Resume")
            ), 
            React.createElement("div", {className: "resume-items"}, 
                React.createElement("h5", null, "Professional profile"), 
                React.createElement("p", null, Config.profile), 
                React.createElement("h5", null, "Experience"), 
                React.createElement("p", null, " ", React.createElement(Experience, null)), 
                React.createElement("h5", null, "Skills"), 
                React.createElement("p", null, " ", React.createElement(Skills, null), " "), 
                React.createElement("h5", null, "About myself"), 
                React.createElement("pre", null, Config.text)
            )
        )
    }
});

module.exports = Resume;
},{"./Experience.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Experience.jsx","./Skills.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Skills.jsx","./config.js":"/Users/romeo/Repository/react-app-blog-resume/app/config.js","react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/Skills.jsx":[function(require,module,exports){
var React = require('react');
var Config = require('./config.js');
var Request = require('request');
var Spinner = require('react-spinner');

var elementBody;
var Skills = React.createClass({displayName: "Skills",
    getInitialState: function () {
        return {data: []};
    },
    componentWillMount: function() {
        elementBody = React.createElement(Spinner, null)
    },
    componentDidMount: function () {
        Request.get(Config.resource + "skills",
            function (error, response, body) {
                if (!error && response.statusCode == 200 && !body.isEmpty) {
                    var data = JSON.parse(body);
                    if (!data.isNullOrUndefined) {
                        elementBody = React.createElement("div", null);
                        this.setState({data: data});
                    }
                }
            }.bind(this))
    },
    render: function () {
        function rates(value){
            var spans = [];
            for (var i = 0; i < 10; i++){
                spans.push( React.createElement("span", {key: i, className: i >= value ? "empty" : "filled"}) )
            }
            return spans;
        }
        function item(args, id) {
            return (React.createElement("li", {key: id}, 
                React.createElement("span", {className: "skill"}, args.name), 
                React.createElement("div", {className: "rating"}, 
                    rates(args.value)
                ), 
                React.createElement("div", {className: "description"}, args.description)
            ))
        }

        return (React.createElement("ul", {className: "skills"}, 
            elementBody, 
            this.state.data.map(item)
        ))
    }
});

module.exports = Skills;
},{"./config.js":"/Users/romeo/Repository/react-app-blog-resume/app/config.js","react":"react","react-spinner":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-spinner/index.js","request":"request"}],"/Users/romeo/Repository/react-app-blog-resume/app/SocialNetworkBar.jsx":[function(require,module,exports){
var React = require('react');
var Config = require('./config.js');
var Request = require('request');
var Spinner = require('react-spinner');

var elementBody;
var SocialNetworkBar = React.createClass({displayName: "SocialNetworkBar",
    getInitialState: function () {
        return {
            social: [],
            mail: this.props.mail
        }
    },
    componentWillMount: function() {
        elementBody = React.createElement(Spinner, null)
    },
    componentDidMount: function () {
        Request.get(Config.resource + this.props.resource,
            function (error, response, body) {
                if (!error && response.statusCode == 200 && !body.isEmpty) {
                    var data = JSON.parse(body);
                    if (!data.isNullOrUndefined) {
                        elementBody = React.createElement("div", null);
                        this.setState({social: data});
                    }
                }
            }.bind(this))
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
            links, 
            elementBody
        );
    }
});

module.exports = SocialNetworkBar;
},{"./config.js":"/Users/romeo/Repository/react-app-blog-resume/app/config.js","react":"react","react-spinner":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-spinner/index.js","request":"request"}],"/Users/romeo/Repository/react-app-blog-resume/app/SubnavContainer.jsx":[function(require,module,exports){
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
},{"react":"react","react-router":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/index.js"}],"/Users/romeo/Repository/react-app-blog-resume/app/ValidationInfoBlock.jsx":[function(require,module,exports){
var React = require('react');

var ValidationInfoBlock = React.createClass({displayName: "ValidationInfoBlock",
    render: function(i){
        if (this.props.isValid == true)
            return (
                React.createElement("div", {className: "alert-box success", key: i}, 
                    React.createElement("span", null, 
                        this.props.infomsg
                    )
                ));

        else if (this.props.infomsg !== 'undefined' && this.props.infomsg instanceof Array)
            return (
                React.createElement("div", {className: "alert-box warning", key: i}, 
                        this.props.infomsg.map(function (data, k){
                            return React.createElement("span", {key: k}, data.property, ": ", data.message, React.createElement("br", null))
                        })

                ));

        else return React.createElement("div", {key: i})
    }
});

module.exports = ValidationInfoBlock;
},{"react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/WidgetTwitter.jsx":[function(require,module,exports){
var React = require('react');
var Request = require('request');
var Config = require('./config.js');
var Spinner = require('react-spinner');

// Takes an ISO time and returns a string representing how
// long ago the date represents.
// Copyright (c) 2011 John Resig (ejohn.org)
function prettyDate(time) {
    var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
        diff = (((new Date()).getTime() - date.getTime()) / 1000),
        day_diff = Math.floor(diff / 86400);

    if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
        return;

    return day_diff == 0 && (
        diff < 60 && "just now" ||
        diff < 120 && "1 minute ago" ||
        diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
        diff < 7200 && "1 hour ago" ||
        diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
        day_diff == 1 && "Yesterday" ||
        day_diff < 7 && day_diff + " days ago" ||
        day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
}

var tweetsBody;
var WidgetTwitter = React.createClass({displayName: "WidgetTwitter",
    getInitialState: function () {
        return {data: []};
    },
    componentWillMount: function() {
        tweetsBody = React.createElement(Spinner, null)
    },
    componentDidMount: function () {
        var count = this.props.count == undefined ? 3 : this.props.count;
        Request.get(Config.service + "/getTweets/" + count,
            function (error, response, body) {
                if (!error && response.statusCode == 200 && !body.isEmpty) {
                    var data = JSON.parse(body);
                    if (!data.isNullOrUndefined) {
                        tweetsBody = React.createElement("div", null);
                        this.setState({data: data});
                    }
                }
            }.bind(this))
    },
    render: function () {
        return React.createElement("div", {className: "widget twitter-updates"}, 
            React.createElement("h6", {className: "widget-title"}, "Latest tweets"), 
            React.createElement("ul", null, 
                React.createElement("span", null, 
                    tweetsBody, 
                    this.state.data.map(function (t, i) {
                        if (t.isNullOrUndefined)
                            return ' ';
                        return React.createElement("li", {key: i}, React.createElement("u", null, prettyDate(t.created_at)), t.text)
                    })
                )
            )
        );
    }
});

module.exports = WidgetTwitter;
},{"./config.js":"/Users/romeo/Repository/react-app-blog-resume/app/config.js","react":"react","react-spinner":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-spinner/index.js","request":"request"}],"/Users/romeo/Repository/react-app-blog-resume/app/config.js":[function(require,module,exports){
var Config = {
    "title": "Roman Melnyk personal blog",
    "author": "Roman Melnyk",
    "gaid": "UA-17275263-4",
    "name": "Roman",
    "surname": "Melnyk",
    "position": "Software developer",
    "logo": "https://media.licdn.com/media/p/3/005/031/265/0a61343.jpg",
    "service": "http://melnyk.co:9098/api/v1",
    "resource" : "http://melnyk.co:9098/api/v1/resource/",
    "profile" : "I am a hands-on, highly competent software engineer with 12 years’ experience designing, programming and testing software across a variety of platforms.I have worked on numerous projects from concept to completion. A specialist in C# and .NET, I take pride in coding to consistently high standards and regularly refresh my skills to ensure I keep up with ongoing developments.",
    "mail": "roman@melnyk.co",
    "tel": "",
    "address": 'Miel\u017cy\u0144skiego 14, 61-725 Pozna\u0144',
    "map" : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155797.70828953368!2d16.901665799999993!3d52.40052855000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470444d2ece10ab7%3A0xa4ea31980334bfd1!2zUG96bmHFhCwgUG9sYW5k!5e0!3m2!1sen!2sus!4v1441220344341',
    "text": "As far as I remember myself I was fond of math, programming and foreign languages. My first program I wrote on assembler when was eight years old and my first program as a freelancer in 19.\r\n" +
    "I\'ve got honor Master degree in electrotechnical engineering and expert Diploma of Computer Systems and Networks.  During last 12 years of my life, I\'ve been professionally coding on Pascal, Delphi, PHP, C++, C#. Now I am trying my skills with Scala and JavaScript. Hope I\'ll switch shortly to this new fast growing stream."
};

module.exports = Config;
},{}],"/Users/romeo/Repository/react-app-blog-resume/app/main.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var routes = require('./routes.js');
var Router = require('react-router');
var Config = require('./config.js');
var Ga = require('react-ga');

Ga.initialize(Config.gaid);
Router.run(routes, Router.HashLocation, function (Handler, state) {
    Ga.pageview(state.pathname);
    React.render(React.createElement(Handler, null), document.body);
});
},{"./config.js":"/Users/romeo/Repository/react-app-blog-resume/app/config.js","./routes.js":"/Users/romeo/Repository/react-app-blog-resume/app/routes.js","react":"react","react-ga":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-ga/src/index.js","react-router":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/index.js"}],"/Users/romeo/Repository/react-app-blog-resume/app/routes.js":[function(require,module,exports){
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
    React.createElement(Route, {handler: App, path: "/"}, 
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
},{"./App.js":"/Users/romeo/Repository/react-app-blog-resume/app/App.js","./Contact.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Contact.jsx","./Education.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Education.jsx","./InfoBlock.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/InfoBlock.jsx","./NotFound.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/NotFound.jsx","./Resume.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Resume.jsx","react":"react","react-router":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/index.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
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
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
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

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-ga/src/components/OutboundLink.js":[function(require,module,exports){
var React = require('react');
var assign = require('react/lib/Object.assign');

var NEWTAB = '_blank';

var OutboundLink = React.createClass({
  displayName: 'OutboundLink',
  propTypes: {
    eventLabel: React.PropTypes.string.isRequired
  },
  statics: {
    trackLink: function() {
      console.warn("ga tracking not enabled");
    }
  },
  handleClick: function (e) {
    e.preventDefault();
    var props = this.props;
    var eventMeta = {label: props.eventLabel};
    OutboundLink.trackLink(eventMeta, function () {
      if ( props.target === NEWTAB ) {
        window.open(props.to, NEWTAB);
      } else {
        window.location.href = props.to;
      }
    });
    if (props.onClick) {
      props.onClick(e);
    }
  },
  render: function () {
    var props = assign({}, this.props, {
      href: this.props.to,
      onClick: this.handleClick
    });
    return React.createElement('a', props);
  }
});

module.exports = OutboundLink;

},{"react":"react","react/lib/Object.assign":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/Object.assign.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-ga/src/index.js":[function(require,module,exports){
/**
 * React Google Analytics Module
 *
 * @package react-ga
 * @author  Adam Lofting <adam@mozillafoundation.org>
 *          Atul Varma <atul@mozillafoundation.org>
 */

/**
 * Utilities
 */

var _redacted = 'REDACTED (Potential Email Address)';
var _debug = false;

function warn (s) {
  console.warn('[react-ga]', s);
}

function log (s) {
  console.info('[react-ga]', s);
}

// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().
function trim(s) {
  return s.replace(/^\s+|\s+$/g, '');
}

function removeLeadingSlash (s) {
  if (s.substring(0, 1) === '/') {
    s = s.substring(1);
  }
  return s;
}

/**
 * To Title Case 2.1 - http://individed.com/code/to-title-case/
 * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
 * https://github.com/gouch/to-title-case
 */
function toTitleCase(s){
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
  s = trim(s);

  return s.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title){
    if (index > 0 &&
        index + match.length !== title.length &&
        match.search(smallWords) > -1 &&
        title.charAt(index - 2) !== ":" &&
        (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
        title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}

// See if s could be an email address. We don't want to send personal data like email.
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return (/[^@]+@[^@]+/).test(s);
}

function format(s) {
  if(mightBeEmail(s)) {
    warn("This arg looks like an email address, redacting.");
    s = _redacted;
    return s;
  }
  s = toTitleCase(s);
  return s;
}

var reactGA = {
  initialize: function(gaTrackingID, options) {
    if (!gaTrackingID) {
      warn('gaTrackingID is required in initialize()');
      return;
    }

    if (options) {
      if (options.debug && options.debug === true) {
        _debug = true;
      }
    }

    // https://developers.google.com/analytics/devguides/collection/analyticsjs/
    /* jshint ignore:start */
    (function(i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script',
       '//www.google-analytics.com/analytics.js', 'ga');
    /* jshint ignore:end */

    ga('create', gaTrackingID, 'auto');
  },

  /**
   * pageview:
   * Basic GA pageview tracking
   * @param  {String} path - the current page page e.g. '/about'
   */
  pageview: function (path) {
    if (!path) {
      warn('path is required in .pageview()');
      return;
    }

    path = trim(path);
    if (path === '') {
      warn('path cannot be an empty string in .pageview()');
      return;
    }

    if (typeof ga === 'function') {
      ga('send', 'pageview', path);

      if (_debug) {
        log('called ga(\'send\', \'pageview\', path);');
        log('with path: ' + path);
      }
    }
  },

  /**
   * modalview:
   * a proxy to basic GA pageview tracking to consistently track
   * modal views that are an equivalent UX to a traditional pageview
   * @param  {String} modalName e.g. 'add-or-edit-club'
   */
  modalview: function (modalName) {
    if (!modalName) {
      warn('modalName is required in .modalview(modalName)');
      return;
    }

    modalName = trim(modalName);
    modalName = removeLeadingSlash(modalName);

    if (modalName === '') {
      warn('modalName cannot be an empty string or a single / in .modalview()');
      return;
    }

    if (typeof ga === 'function') {
      modalName = trim(modalName);
      var path = '/modal/' + modalName;
      ga('send', 'pageview', path);

      if (_debug) {
        log('called ga(\'send\', \'pageview\', path);');
        log('with path: ' + path);
      }
    }
  },

  /**
   * event:
   * GA event tracking
   * @param args.category {String} required
   * @param args.action {String} required
   * @param args.label {String} optional
   * @param args.value {Int} optional
   * @param args.nonInteraction {boolean} optional
   */
  event: function (args) {
    if (typeof ga === 'function') {

      // Simple Validation
      if (!args || !args.category || !args.action) {
        warn('args.category AND args.action are required in event()');
        return;
      }

      // Required Fields
      var fieldObject = {
        'hitType': 'event',
        'eventCategory': format(args.category),
        'eventAction': format(args.action)
      };

      // Optional Fields
      if (args.label) {
        fieldObject.eventLabel = format(args.label);
      }

      if (args.value) {
        if(typeof args.value !== 'number') {
          warn('Expected `args.value` arg to be a Number.');
        } else {
          fieldObject.eventValue = args.value;
        }
      }

      if (args.nonInteraction) {
        if(typeof args.nonInteraction !== 'boolean') {
          warn('`args.nonInteraction` must be a boolean.');
        } else {
          fieldObject.nonInteraction = args.nonInteraction;
        }
      }

      // Send to GA
      ga('send', fieldObject);

      if (_debug) {
        log('called ga(\'send\', fieldObject);');
        log('with fieldObject: ' + JSON.stringify(fieldObject));
      }
    }
  },

  /**
   * outboundLink:
   * GA outboundLink tracking
   * @param args.label {String} e.g. url, or 'Create an Account'
   * @param {function} hitCallback - Called after processing a hit.
   */
  outboundLink: function (args, hitCallback) {
    if (typeof hitCallback !== 'function') {
      warn('hitCallback function is required');
      return;
    }

    if (typeof ga === 'function') {

      // Simple Validation
      if (!args || !args.label) {
        warn('args.label is required in outboundLink()');
        return;
      }

      // Required Fields
      var fieldObject = {
        'hitType': 'event',
        'eventCategory': 'Outbound',
        'eventAction': 'Click',
        'eventLabel': format(args.label)
      };

      var safetyCallbackCalled = false;
      var safetyCallback = function () {

        // This prevents a delayed response from GA
        // causing hitCallback from being fired twice
        safetyCallbackCalled = true;

        hitCallback();
      };

      // Using a timeout to ensure the execution of critical application code
      // in the case when the GA server might be down
      // or an ad blocker prevents sending the data

      // register safety net timeout:
      var t = setTimeout(safetyCallback, 250);

      var clearableCallbackForGA = function () {
          clearTimeout(t);
          if (!safetyCallbackCalled) {
            hitCallback();
          }
      };

      fieldObject.hitCallback = clearableCallbackForGA;

      // Send to GA
      ga('send', fieldObject);

      if (_debug) {
        log('called ga(\'send\', fieldObject);');
        log('with fieldObject: ' + JSON.stringify(fieldObject));
      }
    } else {
      // if ga is not defined, return the callback so the application
      // continues to work as expected
      setTimeout(hitCallback, 0);
    }
  }
};

var OutboundLink = require('./components/OutboundLink');
OutboundLink.trackLink = reactGA.outboundLink;
reactGA.OutboundLink = OutboundLink;

module.exports = reactGA;


},{"./components/OutboundLink":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-ga/src/components/OutboundLink.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/Cancellation.js":[function(require,module,exports){
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

},{}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-spinner/index.js":[function(require,module,exports){
(function(window, React) {
  var Spinner = React.createClass({displayName: 'Spinner',
    render: function() {
      var bars = [];
      var props = this.props;

      for (var i = 0; i < 12; i++) {
        var barStyle = {};
        barStyle.WebkitAnimationDelay = barStyle.animationDelay =
          (i - 12) / 10 + 's';

        barStyle.WebkitTransform = barStyle.transform =
          'rotate(' + (i * 30) + 'deg) translate(146%)';

        bars.push(
          React.createElement("div", {style: barStyle, className: "react-spinner_bar", key: i})
        );
      }

      return (
        React.createElement("div", React.__spread({},  props, {className: (props.className || '') + ' react-spinner'}), 
          bars
        )
      );
    }
  });

  if (typeof module === 'undefined') {
    window.Spinner = Spinner;
  } else {
    module.exports = Spinner;
  }
})(window, typeof require === 'function' ? require('react') : React);

},{"react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/ExecutionEnvironment.js":[function(require,module,exports){
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

},{"./emptyFunction":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react/lib/emptyFunction.js","_process":"/Users/romeo/Repository/react-app-blog-resume/node_modules/browserify/node_modules/process/browser.js"}]},{},["/Users/romeo/Repository/react-app-blog-resume/app/main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvQWRkcmVzc0Jsb2NrLmpzeCIsImFwcC9BcHAuanMiLCJhcHAvQ29udGFjdC5qc3giLCJhcHAvQ29udGFjdEZvcm0uanN4IiwiYXBwL0VkdWNhdGlvbi5qc3giLCJhcHAvRWR1Y2F0aW9uSXRlbXMuanN4IiwiYXBwL0V4cGVyaWVuY2UuanN4IiwiYXBwL0Zvb3Rlci5qc3giLCJhcHAvSGVhZC5qc3giLCJhcHAvSW5mb0Jsb2NrLmpzeCIsImFwcC9OYXZCYXIuanN4IiwiYXBwL05vdEZvdW5kLmpzeCIsImFwcC9SZXN1bWUuanN4IiwiYXBwL1NraWxscy5qc3giLCJhcHAvU29jaWFsTmV0d29ya0Jhci5qc3giLCJhcHAvU3VibmF2Q29udGFpbmVyLmpzeCIsImFwcC9WYWxpZGF0aW9uSW5mb0Jsb2NrLmpzeCIsImFwcC9XaWRnZXRUd2l0dGVyLmpzeCIsImFwcC9jb25maWcuanMiLCJhcHAvbWFpbi5qcyIsImFwcC9yb3V0ZXMuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWdhL3NyYy9jb21wb25lbnRzL091dGJvdW5kTGluay5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1nYS9zcmMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9DYW5jZWxsYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9IaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvTWF0Y2guanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9OYXZpZ2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUGF0aFV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUHJvcFR5cGVzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUmVkaXJlY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9Sb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1Njcm9sbEhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9TdGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1RyYW5zaXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2JlaGF2aW9ycy9JbWl0YXRlQnJvd3NlckJlaGF2aW9yLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvYmVoYXZpb3JzL1Njcm9sbFRvVG9wQmVoYXZpb3IuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL0NvbnRleHRXcmFwcGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9EZWZhdWx0Um91dGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL0xpbmsuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL05vdEZvdW5kUm91dGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL1JlZGlyZWN0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9Sb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvUm91dGVIYW5kbGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY3JlYXRlUm91dGVyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9nZXRXaW5kb3dTY3JvbGxQb3NpdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvaXNSZWFjdENoaWxkcmVuLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbG9jYXRpb25zL0hhc2hMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2xvY2F0aW9ucy9IaXN0b3J5TG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9sb2NhdGlvbnMvUmVmcmVzaExvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbG9jYXRpb25zL1N0YXRpY0xvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbG9jYXRpb25zL1Rlc3RMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL3J1blJvdXRlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL3N1cHBvcnRzSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9xcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi9wYXJzZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3FzL2xpYi9zdHJpbmdpZnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9xcy9saWIvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtc3Bpbm5lci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL09iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL2ludmFyaWFudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC9saWIvd2FybmluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDamdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgQWRkcmVzc0Jsb2NrID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkFkZHJlc3NCbG9ja1wiLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtYWlsIDogdGhpcy5wcm9wcy5tYWlsLFxuICAgICAgICAgICAgYWRkcmVzcyA6IHRoaXMucHJvcHMuYWRkcmVzcyxcbiAgICAgICAgICAgIHRlbG5vIDogdGhpcy5wcm9wcy50ZWxudW1iZXJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtYWlsdG8gPSBcIm1haWx0bzpcIiArIHRoaXMuc3RhdGUubWFpbDtcbiAgICAgICAgdmFyIHRlbCA9IFwiI1wiICsgdGhpcy5zdGF0ZS50ZWxubztcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhZGRyZXNzXCIsIG51bGwsIFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hZGRyZXNzLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IG1haWx0b30sIHRoaXMuc3RhdGUubWFpbCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogdGVsfSwgdGhpcy5zdGF0ZS50ZWxubyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFkZHJlc3NCbG9jazsiLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanMnKTtcbnZhciBTb2NpYWxOZXR3b3JrcyA9IHJlcXVpcmUoJy4vU29jaWFsTmV0d29ya0Jhci5qc3gnKTtcbnZhciBXaWRnZXRUd2l0dGVyID0gcmVxdWlyZSgnLi9XaWRnZXRUd2l0dGVyLmpzeCcpO1xudmFyIEFkZHJlc3NCbG9jayA9IHJlcXVpcmUoJy4vQWRkcmVzc0Jsb2NrLmpzeCcpO1xudmFyIEluZm9CbG9jayA9IHJlcXVpcmUoJy4vSW5mb0Jsb2NrLmpzeCcpO1xudmFyIFN1Ym5hdkNvbnRhaW5lciA9IHJlcXVpcmUoJy4vU3VibmF2Q29udGFpbmVyLmpzeCcpO1xudmFyIEhlYWQgPSByZXF1aXJlKCcuL0hlYWQuanN4Jyk7XG52YXIgRm9vdGVyID0gcmVxdWlyZSgnLi9Gb290ZXIuanN4Jyk7XG52YXIgTmF2QmFyID0gcmVxdWlyZSgnLi9OYXZCYXIuanN4Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJBcHBcIixcbiAgICBtaXhpbnM6IFtSb3V0ZXIuU3RhdGVdLFxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gQ29uZmlnLnRpdGxlO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0d2l0dGVyQmFyLGluZm9CbG9jayxtYWluUGFydDtcbiAgICAgICAgaWYodGhpcy5pc0FjdGl2ZSgnL3Byb2ZpbGUnKSB8fCB0aGlzLmlzQWN0aXZlKCcvJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR3aXR0ZXJCYXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFdpZGdldFR3aXR0ZXIsIHtjb3VudDogNX0pO1xuICAgICAgICAgICAgaW5mb0Jsb2NrID0gUmVhY3QuY3JlYXRlRWxlbWVudChJbmZvQmxvY2ssIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbWFpblBhcnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlSGFuZGxlciwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogdGhpcy5nZXRQYXRobmFtZSgpLnRyaW0oKS5zdWJzdHJpbmcoMSkgfHwgXCJwcm9maWxlXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwid3JhcHBlclwifSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2QmFyLCBudWxsKSwgXG5cbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbnRlbnRcIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImluZm9cIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwge2xvZ286IENvbmZpZy5sb2dvLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogQ29uZmlnLnBvc2l0aW9uLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBDb25maWcubmFtZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VybmFtZTogQ29uZmlnLnN1cm5hbWV9KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIHtjbGFzc05hbWU6IFwiY2xlYXJcIn0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvQmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiAodGhpcy5pc0FjdGl2ZSgnL3Byb2ZpbGUnKSB8fCB0aGlzLmlzQWN0aXZlKCcvJykpID8gXCJzaWRlYmFyIGhpZGRlblwiIDogXCJ0b3BBZGRyZXNzIGhpZGRlblwifSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBZGRyZXNzQmxvY2ssIHthZGRyZXNzOiBDb25maWcuYWRkcmVzcywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlsOiBDb25maWcubWFpbCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWxudW1iZXI6IENvbmZpZy50ZWx9KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTb2NpYWxOZXR3b3Jrcywge3Jlc291cmNlOiBcInNvY2lhbFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbDogQ29uZmlnLm1haWx9KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdpdHRlckJhclxuICAgICAgICAgICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwge2NsYXNzTmFtZTogXCJjbGVhclwifSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpblBhcnRcbiAgICAgICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9vdGVyLCB7YXV0aG9yOiBDb25maWcuYXV0aG9yfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanMnKTtcbnZhciBDb250YWN0Rm9ybSA9IHJlcXVpcmUoJy4vQ29udGFjdEZvcm0uanN4Jyk7XG52YXIgV2lkZ2V0VHdpdHRlciA9IHJlcXVpcmUoJy4vV2lkZ2V0VHdpdHRlci5qc3gnKTtcblxudmFyIENvbnRhY3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQ29udGFjdFwiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImlubmVyQ29udGFpbmVyXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJkZXNjXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIsIHtmcmFtZUJvcmRlcjogXCIwXCIsIHNjcm9sbGluZzogXCJub1wiLCBtYXJnaW5IZWlnaHQ6IFwiMFwiLCBtYXJnaW5XaWR0aDogXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBDb25maWcubWFwfSlcbiAgICAgICAgICAgICksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImg0XCIsIG51bGwsIFwiQXNrIG1lIGFueXRoaW5nLlwiKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhY3RGb3JtLCBudWxsKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic2lkZWJhciBoaWRkZW5cIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0VHdpdHRlciwgbnVsbClcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRhY3Q7IiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIENvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmpzJyk7XG52YXIgUmV2YWxpZGF0b3IgPSByZXF1aXJlKCdyZXZhbGlkYXRvcicpO1xudmFyIFZhbGlkYXRpb25JbmZvQmxvY2sgPSByZXF1aXJlKCcuL1ZhbGlkYXRpb25JbmZvQmxvY2suanN4Jyk7XG5cbnZhciBnZXRWYWxpZGF0aW9uU2NoZW1hID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICd0aGUgdXJsIHRoZSBvYmplY3Qgc2hvdWxkIGJlIHN0b3JlZCBhdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogL15bLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKyhcXC5bLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKykqQChbYS16MC05X11bLWEtejAtOV9dKihcXC5bLWEtejAtOV9dKykqXFwuKGFlcm98YXJwYXxiaXp8Y29tfGNvb3B8ZWR1fGdvdnxpbmZvfGludHxtaWx8bXVzZXVtfG5hbWV8bmV0fG9yZ3xwcm98dHJhdmVsfG1vYml8W2Etel1bYS16XSl8KFswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM30pKSg6WzAtOV17MSw1fSk/JC9pLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYSBtZWFucyBvZiBwcm90ZWN0aW5nIGRhdGEgKGluc3VmZmljaWVudCBmb3IgcHJvZHVjdGlvbiwgdXNlZCBhcyBleGFtcGxlKScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBDb250YWN0Rm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJDb250YWN0Rm9ybVwiLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge2luZm9tc2c6ICcnLFxuICAgICAgICAgICAgICAgIGlzVmFsaWQ6IG51bGx9XG4gICAgfSxcbiAgICBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgc3ViamVjdCA9IHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucmVmcy51bmFtZS5nZXRET01Ob2RlKCkudmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnJlZnMudWVtYWlsLmdldERPTU5vZGUoKS52YWx1ZS50b1N0cmluZygpLFxuICAgICAgICAgICAgdGV4dDogdGhpcy5yZWZzLnVtZXNzYWdlLmdldERPTU5vZGUoKS52YWx1ZS50b1N0cmluZygpLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgICAgIH07XG4gICAgICAgIHZhciBpc1ZhbGlkID0gUmV2YWxpZGF0b3IudmFsaWRhdGUoc3ViamVjdCwgZ2V0VmFsaWRhdGlvblNjaGVtYSgpKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWQudmFsaWQpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5mb21zZyA6IGlzVmFsaWQuZXJyb3JzLCBpc1ZhbGlkOiBmYWxzZX0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGpzbyA9IEpTT04uc3RyaW5naWZ5KHN1YmplY3QpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBDb25maWcuc2VydmljZSArICcvc2VuZCcsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ3RleHQvcGxhaW4nLFxuICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiBqc28sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2luZm9tc2c6IGJvZHksIGlzVmFsaWQ6IHRydWV9KVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2luZm9tc2c6IGVycm9yLnJlc3BvbnNlVHlwZSwgaXNWYWxpZDogZmFsc2V9KVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtjbGFzc05hbWU6IFwiZmMtY29udGFjdC1mb3JtXCIsIHJlZjogXCJjb250YWN0Rm9ybVwifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFZhbGlkYXRpb25JbmZvQmxvY2ssIHtcbiAgICAgICAgICAgICAgICBpbmZvbXNnOiB0aGlzLnN0YXRlLmluZm9tc2csIFxuICAgICAgICAgICAgICAgIGlzVmFsaWQ6IHRoaXMuc3RhdGUuaXNWYWxpZH0pLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7aHRtbEZvcjogXCJ1bmFtZVwifSwgXCJZb3VyIG5hbWVcIiksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgcmVmOiBcInVuYW1lXCIsIGlkOiBcInVuYW1lXCIsIHJlcXVpcmVkOiB0cnVlfSksIFxuXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7Y2xhc3NOYW1lOiBcImVycm9yIHVuYW1lLWVycm9yXCJ9KSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwge2h0bWxGb3I6IFwidWVtYWlsXCJ9LCBcIllvdXIgZW1haWxcIiksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcImVtYWlsXCIsIHJlZjogXCJ1ZW1haWxcIiwgaWQ6IFwidWVtYWlsXCIsIHJlcXVpcmVkOiB0cnVlfSksIFxuXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7Y2xhc3NOYW1lOiBcImVycm9yIHVlbWFpbC1lcnJvclwifSksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHtodG1sRm9yOiBcInVtZXNzYWdlXCJ9LCBcIllvdXIgbWVzc2FnZVwiKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwge2NsYXNzTmFtZTogXCJ1bWVzc2FnZVwiLCBpZDogXCJ1bWVzc2FnZVwiLCByZWY6IFwidW1lc3NhZ2VcIiwgcmVxdWlyZWQ6IHRydWV9KSwgXG5cbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtjbGFzc05hbWU6IFwic3VibWl0XCIsIGlkOiBcImZjLWNvbnRhY3QtYnRuXCIsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU3VibWl0fSwgXG4gICAgICAgICAgICAgICAgXCJTdWJtaXRcIlxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFjdEZvcm07IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBFZHVjYXRpb25JdGVtcyA9IHJlcXVpcmUoJy4vRWR1Y2F0aW9uSXRlbXMuanN4Jyk7XG5cbnZhciBFZHVjYXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiRWR1Y2F0aW9uXCIsXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaW5uZXJDb250YWluZXJcIn0sIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFZHVjYXRpb25JdGVtcywge2hlYWRlcjogXCJFZHVjYXRpb25cIiwgcmVzb3VyY2U6IFwiZWR1Y2F0aW9uXCJ9KSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIsKgXCIpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRWR1Y2F0aW9uSXRlbXMsIHtoZWFkZXI6IFwiQ2VydGlmaWNhdGlvblwiLCByZXNvdXJjZTogXCJjZXJ0aWZpY2F0aW9uc1wifSlcbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVkdWNhdGlvbjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIENvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmpzJyk7XG52YXIgUmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcbnZhciBTcGlubmVyID0gcmVxdWlyZSgncmVhY3Qtc3Bpbm5lcicpO1xuXG52YXIgZWxlbWVudEJvZHk7XG52YXIgRWR1Y2F0aW9uSXRlbXMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiRWR1Y2F0aW9uSXRlbXNcIixcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtkYXRhOiBbXX07XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBlbGVtZW50Qm9keSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3Bpbm5lciwgbnVsbClcbiAgICB9LFxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFJlcXVlc3QuZ2V0KENvbmZpZy5yZXNvdXJjZSArIHRoaXMucHJvcHMucmVzb3VyY2UsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvciAmJiByZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCAmJiAhYm9keS5pc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmlzTnVsbE9yVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Qm9keSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBkYXRhfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZGVzY1wifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIHRoaXMucHJvcHMuaGVhZGVyKVxuICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZWR1Y2F0aW9uLWl0ZW1zXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJwZXJzb25hbERldlwifSwgXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCb2R5LCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLm1hcChmdW5jdGlvbihkYXRhLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGVhZCA9IChkYXRhLmxpbmsgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGF0YS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IGRhdGEubGluaywgdGFyZ2V0OiBcIl9ibGFua1wifSwgXCIgXCIsIGRhdGEudGl0bGUsIFwiIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGl9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ0aXRsZVwifSwgaGVhZCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcInRpbWVcIn0sIGRhdGEudGltZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGRhdGEuYXV0aG9yaXR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWR1Y2F0aW9uSXRlbXM7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBDb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy5qcycpO1xudmFyIFJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG52YXIgU3Bpbm5lciA9IHJlcXVpcmUoJ3JlYWN0LXNwaW5uZXInKTtcblxudmFyIGVsZW1lbnRCb2R5O1xudmFyIEV4cGVyaWVuY2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiRXhwZXJpZW5jZVwiLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge2RhdGE6IFtdfTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsZW1lbnRCb2R5ID0gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCBudWxsKVxuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUmVxdWVzdC5nZXQoQ29uZmlnLnJlc291cmNlICsgXCJleHBlcmllbmNlXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvciAmJiByZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCAmJiAhYm9keS5pc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmlzTnVsbE9yVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Qm9keSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBkYXRhfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJlZHVjYXRpb24taXRlbXNcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcInBlcnNvbmFsRGV2XCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJvZHksIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEubWFwKGZ1bmN0aW9uKGRhdGEsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoZWFkID0gKGRhdGEubGluayA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkYXRhLmVtcGxveWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogZGF0YS5saW5rLCB0YXJnZXQ6IFwiX2JsYW5rXCJ9LCBcIiBcIiwgZGF0YS5lbXBsb3llciwgXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2tleTogaX0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwidGl0bGVcIn0sIGhlYWQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcInRpbWVcIn0sIGRhdGEudGltZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJcIiwgbnVsbCwgZGF0YS5wb3NpdGlvbikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBkYXRhLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApKVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4cGVyaWVuY2U7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEZvb3RlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJGb290ZXJcIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgbnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIiBDb3B5cmlnaHQgwqkyMDE1IFwiLCB0aGlzLnByb3BzLmF1dGhvciwgXCIuXCIpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiIFBvd2VyZWQgYnkgXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcImh0dHA6Ly9odHRwOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L1wifSwgXCJSZWFjdC5qc1wiKSksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCIgRGVzaWduIGJ5IFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCJodHRwOi8vdGhlbWVmb3Jlc3QubmV0L3VzZXIvdGhlbWViYWtlcnMvcG9ydGZvbGlvXCJ9LCBcInRoZW1lYmFrZXJzXCIpKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIiBTb3VyY2UgY29kZSBvbiBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2F5d2VuZ28vcmVhY3QtYXBwLWJsb2ctcmVzdW1lXCJ9LCBcIkdpdEh1YlwiKSlcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb290ZXI7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEhlYWQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiSGVhZFwiLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9nbzogdGhpcy5wcm9wcy5sb2dvLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgc3VybmFtZTogdGhpcy5wcm9wcy5zdXJuYW1lLFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucHJvcHMucG9zaXRpb25cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaGVhZFwifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IHRoaXMuc3RhdGUubG9nbywgYWx0OiB0aGlzLnN0YXRlLm5hbWV9KSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmFtZVwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJmaXJzdFwifSwgdGhpcy5zdGF0ZS5uYW1lKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJsYXN0XCJ9LCB0aGlzLnN0YXRlLnN1cm5hbWUpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7Y2xhc3NOYW1lOiBcInRpdGxlXCJ9LCB0aGlzLnN0YXRlLnBvc2l0aW9uKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSGVhZDsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFN1Ym5hdkNvbnRhaW5lciA9IHJlcXVpcmUoJy4vU3VibmF2Q29udGFpbmVyLmpzeCcpO1xudmFyIENvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmpzJyk7XG5cbnZhciBJbmZvQmxvY2sgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiSW5mb0Jsb2NrXCIsXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImRlc2NcIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgQ29uZmlnLnRleHQpXG4gICAgICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdWJuYXZDb250YWluZXIsIG51bGwpXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5mb0Jsb2NrOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgTGluayA9IFJvdXRlci5MaW5rO1xuXG52YXIgTmF2QmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIk5hdkJhclwiLFxuICAgIG1peGluczogWyBSb3V0ZXIuU3RhdGUgXSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFjdGl2YXRlID0gXCIgY3VycmVudC1tZW51LWl0ZW1cIjtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmdldFBhdGhuYW1lKCk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibmF2XCIsIG51bGwsIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBuYW1lID09PSAnL3Byb2ZpbGUnPydwcm9maWxlJyArIGFjdGl2YXRlOidwcm9maWxlJ30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcInByb2ZpbGVcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiUHJvZmlsZVwiKSkpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IG5hbWUgPT09ICcvcmVzdW1lJz8ncmVzdW1lJyArIGFjdGl2YXRlOidyZXN1bWUnfSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwicmVzdW1lXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIlJlc3VtZVwiKSkpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IG5hbWUgPT09ICcvZWR1Y2F0aW9uJz8nZWR1Y2F0aW9uJyArIGFjdGl2YXRlOidlZHVjYXRpb24nfSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiZWR1Y2F0aW9uXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIkVkdWNhdGlvblwiKSkpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IG5hbWUgPT09ICcvYmxvZyc/J2Jsb2cnICsgYWN0aXZhdGU6J2Jsb2cnfSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiYmxvZ1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJCbG9nXCIpKSkpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogbmFtZSA9PT0gJy9jb250YWN0Jz8nY29udGFjdCcgKyBhY3RpdmF0ZTonY29udGFjdCd9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJjb250YWN0XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIkNvbnRhY3RcIikpKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOYXZCYXI7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTdWJuYXZDb250YWluZXIgPSByZXF1aXJlKCcuL1N1Ym5hdkNvbnRhaW5lci5qc3gnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcblxudmFyIE5vdEZvdW5kID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIk5vdEZvdW5kXCIsXG4gICAgbWl4aW5zOiBbUm91dGVyLlN0YXRlXSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImlubmVyQ29udGFpbmVyXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZGVzY1wifSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNFwiLCBudWxsLCBcIlRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1XCIsIG51bGwsIHRoaXMuZ2V0UGF0aCgpKSwgXCIgd2Fzbid0IGZvdW5kXCIpXG4gICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImVkdWNhdGlvbi1pdGVtc1wifSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VibmF2Q29udGFpbmVyLCBudWxsKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb3RGb3VuZDsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIENvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmpzJyk7XG52YXIgU2tpbGxzID0gcmVxdWlyZSgnLi9Ta2lsbHMuanN4Jyk7XG52YXIgRXhwZXJpZW5jZSA9IHJlcXVpcmUoJy4vRXhwZXJpZW5jZS5qc3gnKTtcblxudmFyIFJlc3VtZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJSZXN1bWVcIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJpbm5lckNvbnRhaW5lclwifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZGVzY1wifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwiUmVzdW1lXCIpXG4gICAgICAgICAgICApLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyZXN1bWUtaXRlbXNcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCBudWxsLCBcIlByb2Zlc3Npb25hbCBwcm9maWxlXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBDb25maWcucHJvZmlsZSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCBudWxsLCBcIkV4cGVyaWVuY2VcIiksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KEV4cGVyaWVuY2UsIG51bGwpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImg1XCIsIG51bGwsIFwiU2tpbGxzXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIiBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChTa2lsbHMsIG51bGwpLCBcIiBcIiksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCBudWxsLCBcIkFib3V0IG15c2VsZlwiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInByZVwiLCBudWxsLCBDb25maWcudGV4dClcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc3VtZTsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIENvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmpzJyk7XG52YXIgUmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcbnZhciBTcGlubmVyID0gcmVxdWlyZSgncmVhY3Qtc3Bpbm5lcicpO1xuXG52YXIgZWxlbWVudEJvZHk7XG52YXIgU2tpbGxzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlNraWxsc1wiLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge2RhdGE6IFtdfTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsZW1lbnRCb2R5ID0gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCBudWxsKVxuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUmVxdWVzdC5nZXQoQ29uZmlnLnJlc291cmNlICsgXCJza2lsbHNcIixcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvciwgcmVzcG9uc2UsIGJvZHkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycm9yICYmIHJlc3BvbnNlLnN0YXR1c0NvZGUgPT0gMjAwICYmICFib2R5LmlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaXNOdWxsT3JVbmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCb2R5ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGF9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiByYXRlcyh2YWx1ZSl7XG4gICAgICAgICAgICB2YXIgc3BhbnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICAgICAgc3BhbnMucHVzaCggUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2tleTogaSwgY2xhc3NOYW1lOiBpID49IHZhbHVlID8gXCJlbXB0eVwiIDogXCJmaWxsZWRcIn0pIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzcGFucztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpdGVtKGFyZ3MsIGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBpZH0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwic2tpbGxcIn0sIGFyZ3MubmFtZSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyYXRpbmdcIn0sIFxuICAgICAgICAgICAgICAgICAgICByYXRlcyhhcmdzLnZhbHVlKVxuICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJkZXNjcmlwdGlvblwifSwgYXJncy5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcInNraWxsc1wifSwgXG4gICAgICAgICAgICBlbGVtZW50Qm9keSwgXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEubWFwKGl0ZW0pXG4gICAgICAgICkpXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2tpbGxzOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanMnKTtcbnZhciBSZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xudmFyIFNwaW5uZXIgPSByZXF1aXJlKCdyZWFjdC1zcGlubmVyJyk7XG5cbnZhciBlbGVtZW50Qm9keTtcbnZhciBTb2NpYWxOZXR3b3JrQmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlNvY2lhbE5ldHdvcmtCYXJcIixcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvY2lhbDogW10sXG4gICAgICAgICAgICBtYWlsOiB0aGlzLnByb3BzLm1haWxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgZWxlbWVudEJvZHkgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW5uZXIsIG51bGwpXG4gICAgfSxcbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICBSZXF1ZXN0LmdldChDb25maWcucmVzb3VyY2UgKyB0aGlzLnByb3BzLnJlc291cmNlLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSwgYm9keSkge1xuICAgICAgICAgICAgICAgIGlmICghZXJyb3IgJiYgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9PSAyMDAgJiYgIWJvZHkuaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5pc051bGxPclVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJvZHkgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c29jaWFsOiBkYXRhfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgbGlua3MgPSB0aGlzLnN0YXRlLnNvY2lhbC5tYXAoXG4gICAgICAgICAgICBmdW5jdGlvbih0LCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gXCIuL3NvY2lhbF9pY29ucy9cIiArIHQubmFtZSArIFwiLnBuZ1wiO1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogdC5saW5rLCBrZXk6IGksIHRhcmdldDogXCJfYmxhbmtcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogaW1hZ2UsIGFsdDogdC5uYW1lfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHZhciBtYWlsdG8gPSBcIm1haWx0bzpcIiArIHRoaXMuc3RhdGUubWFpbDtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInNvY2lhbFwifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogbWFpbHRvLCB0YXJnZXQ6IFwiX2JsYW5rXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IFwiLi9zb2NpYWxfaWNvbnMvZW1haWwucG5nXCIsIGFsdDogdGhpcy5zdGF0ZS5tYWlsfSkpLCBcbiAgICAgICAgICAgIGxpbmtzLCBcbiAgICAgICAgICAgIGVsZW1lbnRCb2R5XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU29jaWFsTmV0d29ya0JhcjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExpbmsgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5MaW5rO1xuXG52YXIgU3VibmF2Q29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlN1Ym5hdkNvbnRhaW5lclwiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzdWJuYXZDb250YWluZXJcIn0sIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInN1Ym5hdkxlZnRcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzdWJuYXZSZXN1bWVcIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJyZXN1bWVcIiwgY2xhc3NOYW1lOiBcImludmVydFwifSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcInJlc3VtZVwifSwgXCJSZXN1bWVcIilcbiAgICAgICAgICAgICAgICApLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic3VibmF2ZWR1Y2F0aW9uXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiZWR1Y2F0aW9uXCIsIGNsYXNzTmFtZTogXCJpbnZlcnRcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJlZHVjYXRpb25cIn0sIFwiRWR1Y2F0aW9uXCIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic3VibmF2UmlnaHRcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzdWJuYXZCbG9nXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiYmxvZ1wiLCBjbGFzc05hbWU6IFwiaW52ZXJ0XCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiYmxvZ1wifSwgXCJCbG9nXCIpXG4gICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInN1Ym5hdkNvbnRhY3RcIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJjb250YWN0XCIsIGNsYXNzTmFtZTogXCJpbnZlcnRcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJjb250YWN0XCJ9LCBcIkNvbnRhY3RcIilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICB9fVxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdWJuYXZDb250YWluZXI7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFZhbGlkYXRpb25JbmZvQmxvY2sgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiVmFsaWRhdGlvbkluZm9CbG9ja1wiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oaSl7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzVmFsaWQgPT0gdHJ1ZSlcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImFsZXJ0LWJveCBzdWNjZXNzXCIsIGtleTogaX0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaW5mb21zZ1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wcm9wcy5pbmZvbXNnICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnByb3BzLmluZm9tc2cgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImFsZXJ0LWJveCB3YXJuaW5nXCIsIGtleTogaX0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pbmZvbXNnLm1hcChmdW5jdGlvbiAoZGF0YSwgayl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtrZXk6IGt9LCBkYXRhLnByb3BlcnR5LCBcIjogXCIsIGRhdGEubWVzc2FnZSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICkpO1xuXG4gICAgICAgIGVsc2UgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2tleTogaX0pXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmFsaWRhdGlvbkluZm9CbG9jazsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG52YXIgQ29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanMnKTtcbnZhciBTcGlubmVyID0gcmVxdWlyZSgncmVhY3Qtc3Bpbm5lcicpO1xuXG4vLyBUYWtlcyBhbiBJU08gdGltZSBhbmQgcmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRpbmcgaG93XG4vLyBsb25nIGFnbyB0aGUgZGF0ZSByZXByZXNlbnRzLlxuLy8gQ29weXJpZ2h0IChjKSAyMDExIEpvaG4gUmVzaWcgKGVqb2huLm9yZylcbmZ1bmN0aW9uIHByZXR0eURhdGUodGltZSkge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoKHRpbWUgfHwgXCJcIikucmVwbGFjZSgvLS9nLCBcIi9cIikucmVwbGFjZSgvW1RaXS9nLCBcIiBcIikpLFxuICAgICAgICBkaWZmID0gKCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lKCkpIC8gMTAwMCksXG4gICAgICAgIGRheV9kaWZmID0gTWF0aC5mbG9vcihkaWZmIC8gODY0MDApO1xuXG4gICAgaWYgKGlzTmFOKGRheV9kaWZmKSB8fCBkYXlfZGlmZiA8IDAgfHwgZGF5X2RpZmYgPj0gMzEpXG4gICAgICAgIHJldHVybjtcblxuICAgIHJldHVybiBkYXlfZGlmZiA9PSAwICYmIChcbiAgICAgICAgZGlmZiA8IDYwICYmIFwianVzdCBub3dcIiB8fFxuICAgICAgICBkaWZmIDwgMTIwICYmIFwiMSBtaW51dGUgYWdvXCIgfHxcbiAgICAgICAgZGlmZiA8IDM2MDAgJiYgTWF0aC5mbG9vcihkaWZmIC8gNjApICsgXCIgbWludXRlcyBhZ29cIiB8fFxuICAgICAgICBkaWZmIDwgNzIwMCAmJiBcIjEgaG91ciBhZ29cIiB8fFxuICAgICAgICBkaWZmIDwgODY0MDAgJiYgTWF0aC5mbG9vcihkaWZmIC8gMzYwMCkgKyBcIiBob3VycyBhZ29cIikgfHxcbiAgICAgICAgZGF5X2RpZmYgPT0gMSAmJiBcIlllc3RlcmRheVwiIHx8XG4gICAgICAgIGRheV9kaWZmIDwgNyAmJiBkYXlfZGlmZiArIFwiIGRheXMgYWdvXCIgfHxcbiAgICAgICAgZGF5X2RpZmYgPCAzMSAmJiBNYXRoLmNlaWwoZGF5X2RpZmYgLyA3KSArIFwiIHdlZWtzIGFnb1wiO1xufVxuXG52YXIgdHdlZXRzQm9keTtcbnZhciBXaWRnZXRUd2l0dGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIldpZGdldFR3aXR0ZXJcIixcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtkYXRhOiBbXX07XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0d2VldHNCb2R5ID0gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCBudWxsKVxuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvdW50ID0gdGhpcy5wcm9wcy5jb3VudCA9PSB1bmRlZmluZWQgPyAzIDogdGhpcy5wcm9wcy5jb3VudDtcbiAgICAgICAgUmVxdWVzdC5nZXQoQ29uZmlnLnNlcnZpY2UgKyBcIi9nZXRUd2VldHMvXCIgKyBjb3VudCxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvciwgcmVzcG9uc2UsIGJvZHkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycm9yICYmIHJlc3BvbnNlLnN0YXR1c0NvZGUgPT0gMjAwICYmICFib2R5LmlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaXNOdWxsT3JVbmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWV0c0JvZHkgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogZGF0YX0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwid2lkZ2V0IHR3aXR0ZXItdXBkYXRlc1wifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDZcIiwge2NsYXNzTmFtZTogXCJ3aWRnZXQtdGl0bGVcIn0sIFwiTGF0ZXN0IHR3ZWV0c1wiKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXG4gICAgICAgICAgICAgICAgICAgIHR3ZWV0c0JvZHksIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEubWFwKGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5pc051bGxPclVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBpfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInVcIiwgbnVsbCwgcHJldHR5RGF0ZSh0LmNyZWF0ZWRfYXQpKSwgdC50ZXh0KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBXaWRnZXRUd2l0dGVyOyIsInZhciBDb25maWcgPSB7XG4gICAgXCJ0aXRsZVwiOiBcIlJvbWFuIE1lbG55ayBwZXJzb25hbCBibG9nXCIsXG4gICAgXCJhdXRob3JcIjogXCJSb21hbiBNZWxueWtcIixcbiAgICBcImdhaWRcIjogXCJVQS0xNzI3NTI2My00XCIsXG4gICAgXCJuYW1lXCI6IFwiUm9tYW5cIixcbiAgICBcInN1cm5hbWVcIjogXCJNZWxueWtcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiU29mdHdhcmUgZGV2ZWxvcGVyXCIsXG4gICAgXCJsb2dvXCI6IFwiaHR0cHM6Ly9tZWRpYS5saWNkbi5jb20vbWVkaWEvcC8zLzAwNS8wMzEvMjY1LzBhNjEzNDMuanBnXCIsXG4gICAgXCJzZXJ2aWNlXCI6IFwiaHR0cDovL21lbG55ay5jbzo5MDk4L2FwaS92MVwiLFxuICAgIFwicmVzb3VyY2VcIiA6IFwiaHR0cDovL21lbG55ay5jbzo5MDk4L2FwaS92MS9yZXNvdXJjZS9cIixcbiAgICBcInByb2ZpbGVcIiA6IFwiSSBhbSBhIGhhbmRzLW9uLCBoaWdobHkgY29tcGV0ZW50IHNvZnR3YXJlIGVuZ2luZWVyIHdpdGggMTIgeWVhcnPigJkgZXhwZXJpZW5jZSBkZXNpZ25pbmcsIHByb2dyYW1taW5nIGFuZCB0ZXN0aW5nIHNvZnR3YXJlIGFjcm9zcyBhIHZhcmlldHkgb2YgcGxhdGZvcm1zLkkgaGF2ZSB3b3JrZWQgb24gbnVtZXJvdXMgcHJvamVjdHMgZnJvbSBjb25jZXB0IHRvIGNvbXBsZXRpb24uIEEgc3BlY2lhbGlzdCBpbiBDIyBhbmQgLk5FVCwgSSB0YWtlIHByaWRlIGluIGNvZGluZyB0byBjb25zaXN0ZW50bHkgaGlnaCBzdGFuZGFyZHMgYW5kIHJlZ3VsYXJseSByZWZyZXNoIG15IHNraWxscyB0byBlbnN1cmUgSSBrZWVwIHVwIHdpdGggb25nb2luZyBkZXZlbG9wbWVudHMuXCIsXG4gICAgXCJtYWlsXCI6IFwicm9tYW5AbWVsbnlrLmNvXCIsXG4gICAgXCJ0ZWxcIjogXCJcIixcbiAgICBcImFkZHJlc3NcIjogJ01pZWxcXHUwMTdjeVxcdTAxNDRza2llZ28gMTQsIDYxLTcyNSBQb3puYVxcdTAxNDQnLFxuICAgIFwibWFwXCIgOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTU1Nzk3LjcwODI4OTUzMzY4ITJkMTYuOTAxNjY1Nzk5OTk5OTkzITNkNTIuNDAwNTI4NTUwMDAwMDIhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDQ3MDQ0NGQyZWNlMTBhYjclM0EweGE0ZWEzMTk4MDMzNGJmZDEhMnpVRzk2Ym1IRmhDd2dVRzlzWVc1ayE1ZTAhM20yITFzZW4hMnN1cyE0djE0NDEyMjAzNDQzNDEnLFxuICAgIFwidGV4dFwiOiBcIkFzIGZhciBhcyBJIHJlbWVtYmVyIG15c2VsZiBJIHdhcyBmb25kIG9mIG1hdGgsIHByb2dyYW1taW5nIGFuZCBmb3JlaWduIGxhbmd1YWdlcy4gTXkgZmlyc3QgcHJvZ3JhbSBJIHdyb3RlIG9uIGFzc2VtYmxlciB3aGVuIHdhcyBlaWdodCB5ZWFycyBvbGQgYW5kIG15IGZpcnN0IHByb2dyYW0gYXMgYSBmcmVlbGFuY2VyIGluIDE5LlxcclxcblwiICtcbiAgICBcIklcXCd2ZSBnb3QgaG9ub3IgTWFzdGVyIGRlZ3JlZSBpbiBlbGVjdHJvdGVjaG5pY2FsIGVuZ2luZWVyaW5nIGFuZCBleHBlcnQgRGlwbG9tYSBvZiBDb21wdXRlciBTeXN0ZW1zIGFuZCBOZXR3b3Jrcy4gIER1cmluZyBsYXN0IDEyIHllYXJzIG9mIG15IGxpZmUsIElcXCd2ZSBiZWVuIHByb2Zlc3Npb25hbGx5IGNvZGluZyBvbiBQYXNjYWwsIERlbHBoaSwgUEhQLCBDKyssIEMjLiBOb3cgSSBhbSB0cnlpbmcgbXkgc2tpbGxzIHdpdGggU2NhbGEgYW5kIEphdmFTY3JpcHQuIEhvcGUgSVxcJ2xsIHN3aXRjaCBzaG9ydGx5IHRvIHRoaXMgbmV3IGZhc3QgZ3Jvd2luZyBzdHJlYW0uXCJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uZmlnOyIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciByb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcy5qcycpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xudmFyIENvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmpzJyk7XG52YXIgR2EgPSByZXF1aXJlKCdyZWFjdC1nYScpO1xuXG5HYS5pbml0aWFsaXplKENvbmZpZy5nYWlkKTtcblJvdXRlci5ydW4ocm91dGVzLCBSb3V0ZXIuSGFzaExvY2F0aW9uLCBmdW5jdGlvbiAoSGFuZGxlciwgc3RhdGUpIHtcbiAgICBHYS5wYWdldmlldyhzdGF0ZS5wYXRobmFtZSk7XG4gICAgUmVhY3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGFuZGxlciwgbnVsbCksIGRvY3VtZW50LmJvZHkpO1xufSk7IiwidmFyIEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEluZm9CbG9jayA9IHJlcXVpcmUoJy4vSW5mb0Jsb2NrLmpzeCcpO1xudmFyIEVkdWNhdGlvbiA9IHJlcXVpcmUoJy4vRWR1Y2F0aW9uLmpzeCcpO1xudmFyIFJlc3VtZSA9IHJlcXVpcmUoJy4vUmVzdW1lLmpzeCcpO1xudmFyIENvbnRhY3QgPSByZXF1aXJlKCcuL0NvbnRhY3QuanN4Jyk7XG52YXIgTm90Rm91bmQgPSByZXF1aXJlKCcuL05vdEZvdW5kLmpzeCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xudmFyIFJvdXRlID0gUm91dGVyLlJvdXRlO1xudmFyIERlZmF1bHRSb3V0ZSA9IFJvdXRlci5EZWZhdWx0Um91dGU7XG52YXIgTm90Rm91bmRSb3V0ZSA9IFJvdXRlci5Ob3RGb3VuZFJvdXRlO1xuXG52YXIgcm91dGVzID0gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtoYW5kbGVyOiBBcHAsIHBhdGg6IFwiL1wifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVmYXVsdFJvdXRlLCB7aGFuZGxlcjogSW5mb0Jsb2NrfSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5vdEZvdW5kUm91dGUsIHtoYW5kbGVyOiBOb3RGb3VuZH0pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge25hbWU6IFwicHJvZmlsZVwiLCBoYW5kbGVyOiBJbmZvQmxvY2t9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtuYW1lOiBcImVkdWNhdGlvblwiLCBoYW5kbGVyOiBFZHVjYXRpb259KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtuYW1lOiBcInJlc3VtZVwiLCBoYW5kbGVyOiBSZXN1bWV9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtuYW1lOiBcImNvbnRhY3RcIiwgaGFuZGxlcjogQ29udGFjdH0pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge25hbWU6IFwiYmxvZ1wiLCBoYW5kbGVyOiBOb3RGb3VuZH0pXG4gICAgKVxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJyk7XG5cbnZhciBORVdUQUIgPSAnX2JsYW5rJztcblxudmFyIE91dGJvdW5kTGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdPdXRib3VuZExpbmsnLFxuICBwcm9wVHlwZXM6IHtcbiAgICBldmVudExhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSxcbiAgc3RhdGljczoge1xuICAgIHRyYWNrTGluazogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJnYSB0cmFja2luZyBub3QgZW5hYmxlZFwiKTtcbiAgICB9XG4gIH0sXG4gIGhhbmRsZUNsaWNrOiBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBldmVudE1ldGEgPSB7bGFiZWw6IHByb3BzLmV2ZW50TGFiZWx9O1xuICAgIE91dGJvdW5kTGluay50cmFja0xpbmsoZXZlbnRNZXRhLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIHByb3BzLnRhcmdldCA9PT0gTkVXVEFCICkge1xuICAgICAgICB3aW5kb3cub3Blbihwcm9wcy50bywgTkVXVEFCKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcHJvcHMudG87XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHByb3BzLm9uQ2xpY2soZSk7XG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvcHMgPSBhc3NpZ24oe30sIHRoaXMucHJvcHMsIHtcbiAgICAgIGhyZWY6IHRoaXMucHJvcHMudG8sXG4gICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrXG4gICAgfSk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCBwcm9wcyk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE91dGJvdW5kTGluaztcbiIsIi8qKlxuICogUmVhY3QgR29vZ2xlIEFuYWx5dGljcyBNb2R1bGVcbiAqXG4gKiBAcGFja2FnZSByZWFjdC1nYVxuICogQGF1dGhvciAgQWRhbSBMb2Z0aW5nIDxhZGFtQG1vemlsbGFmb3VuZGF0aW9uLm9yZz5cbiAqICAgICAgICAgIEF0dWwgVmFybWEgPGF0dWxAbW96aWxsYWZvdW5kYXRpb24ub3JnPlxuICovXG5cbi8qKlxuICogVXRpbGl0aWVzXG4gKi9cblxudmFyIF9yZWRhY3RlZCA9ICdSRURBQ1RFRCAoUG90ZW50aWFsIEVtYWlsIEFkZHJlc3MpJztcbnZhciBfZGVidWcgPSBmYWxzZTtcblxuZnVuY3Rpb24gd2FybiAocykge1xuICBjb25zb2xlLndhcm4oJ1tyZWFjdC1nYV0nLCBzKTtcbn1cblxuZnVuY3Rpb24gbG9nIChzKSB7XG4gIGNvbnNvbGUuaW5mbygnW3JlYWN0LWdhXScsIHMpO1xufVxuXG4vLyBHQSBzdHJpbmdzIG5lZWQgdG8gaGF2ZSBsZWFkaW5nL3RyYWlsaW5nIHdoaXRlc3BhY2UgdHJpbW1lZCwgYW5kIG5vdCBhbGxcbi8vIGJyb3dzZXJzIGhhdmUgU3RyaW5nLnByb3RvdG95cGUudHJpbSgpLlxuZnVuY3Rpb24gdHJpbShzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTGVhZGluZ1NsYXNoIChzKSB7XG4gIGlmIChzLnN1YnN0cmluZygwLCAxKSA9PT0gJy8nKSB7XG4gICAgcyA9IHMuc3Vic3RyaW5nKDEpO1xuICB9XG4gIHJldHVybiBzO1xufVxuXG4vKipcbiAqIFRvIFRpdGxlIENhc2UgMi4xIC0gaHR0cDovL2luZGl2aWRlZC5jb20vY29kZS90by10aXRsZS1jYXNlL1xuICogQ29weXJpZ2h0IDIwMDgtMjAxMyBEYXZpZCBHb3VjaC4gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dvdWNoL3RvLXRpdGxlLWNhc2VcbiAqL1xuZnVuY3Rpb24gdG9UaXRsZUNhc2Uocyl7XG4gIHZhciBzbWFsbFdvcmRzID0gL14oYXxhbnxhbmR8YXN8YXR8YnV0fGJ5fGVufGZvcnxpZnxpbnxub3J8b2Z8b258b3J8cGVyfHRoZXx0b3x2cz9cXC4/fHZpYSkkL2k7XG4gIHMgPSB0cmltKHMpO1xuXG4gIHJldHVybiBzLnJlcGxhY2UoL1tBLVphLXowLTlcXHUwMEMwLVxcdTAwRkZdK1teXFxzLV0qL2csIGZ1bmN0aW9uKG1hdGNoLCBpbmRleCwgdGl0bGUpe1xuICAgIGlmIChpbmRleCA+IDAgJiZcbiAgICAgICAgaW5kZXggKyBtYXRjaC5sZW5ndGggIT09IHRpdGxlLmxlbmd0aCAmJlxuICAgICAgICBtYXRjaC5zZWFyY2goc21hbGxXb3JkcykgPiAtMSAmJlxuICAgICAgICB0aXRsZS5jaGFyQXQoaW5kZXggLSAyKSAhPT0gXCI6XCIgJiZcbiAgICAgICAgKHRpdGxlLmNoYXJBdChpbmRleCArIG1hdGNoLmxlbmd0aCkgIT09ICctJyB8fCB0aXRsZS5jaGFyQXQoaW5kZXggLSAxKSA9PT0gJy0nKSAmJlxuICAgICAgICB0aXRsZS5jaGFyQXQoaW5kZXggLSAxKS5zZWFyY2goL1teXFxzLV0vKSA8IDApIHtcbiAgICAgIHJldHVybiBtYXRjaC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmIChtYXRjaC5zdWJzdHIoMSkuc2VhcmNoKC9bQS1aXXxcXC4uLykgPiAtMSkge1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1hdGNoLnN1YnN0cigxKTtcbiAgfSk7XG59XG5cbi8vIFNlZSBpZiBzIGNvdWxkIGJlIGFuIGVtYWlsIGFkZHJlc3MuIFdlIGRvbid0IHdhbnQgdG8gc2VuZCBwZXJzb25hbCBkYXRhIGxpa2UgZW1haWwuXG5mdW5jdGlvbiBtaWdodEJlRW1haWwocykge1xuICAvLyBUaGVyZSdzIG5vIHBvaW50IHRyeWluZyB0byB2YWxpZGF0ZSByZmM4MjIgZnVsbHksIGp1c3QgbG9vayBmb3IgLi4uQC4uLlxuICByZXR1cm4gKC9bXkBdK0BbXkBdKy8pLnRlc3Qocyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChzKSB7XG4gIGlmKG1pZ2h0QmVFbWFpbChzKSkge1xuICAgIHdhcm4oXCJUaGlzIGFyZyBsb29rcyBsaWtlIGFuIGVtYWlsIGFkZHJlc3MsIHJlZGFjdGluZy5cIik7XG4gICAgcyA9IF9yZWRhY3RlZDtcbiAgICByZXR1cm4gcztcbiAgfVxuICBzID0gdG9UaXRsZUNhc2Uocyk7XG4gIHJldHVybiBzO1xufVxuXG52YXIgcmVhY3RHQSA9IHtcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oZ2FUcmFja2luZ0lELCBvcHRpb25zKSB7XG4gICAgaWYgKCFnYVRyYWNraW5nSUQpIHtcbiAgICAgIHdhcm4oJ2dhVHJhY2tpbmdJRCBpcyByZXF1aXJlZCBpbiBpbml0aWFsaXplKCknKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVidWcgJiYgb3B0aW9ucy5kZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgICAgICBfZGVidWcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9cbiAgICAvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG4gICAgKGZ1bmN0aW9uKGksIHMsIG8sIGcsIHIsIGEsIG0pIHtcbiAgICAgIGlbJ0dvb2dsZUFuYWx5dGljc09iamVjdCddID0gcjtcbiAgICAgIGlbcl0gPSBpW3JdIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICAoaVtyXS5xID0gaVtyXS5xIHx8IFtdKS5wdXNoKGFyZ3VtZW50cylcbiAgICAgIH0sIGlbcl0ubCA9IDEgKiBuZXcgRGF0ZSgpO1xuICAgICAgYSA9IHMuY3JlYXRlRWxlbWVudChvKSxcbiAgICAgICAgICBtID0gcy5nZXRFbGVtZW50c0J5VGFnTmFtZShvKVswXTtcbiAgICAgIGEuYXN5bmMgPSAxO1xuICAgICAgYS5zcmMgPSBnO1xuICAgICAgbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBtKVxuICAgIH0pKHdpbmRvdywgZG9jdW1lbnQsICdzY3JpcHQnLFxuICAgICAgICcvL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCAnZ2EnKTtcbiAgICAvKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xuXG4gICAgZ2EoJ2NyZWF0ZScsIGdhVHJhY2tpbmdJRCwgJ2F1dG8nKTtcbiAgfSxcblxuICAvKipcbiAgICogcGFnZXZpZXc6XG4gICAqIEJhc2ljIEdBIHBhZ2V2aWV3IHRyYWNraW5nXG4gICAqIEBwYXJhbSAge1N0cmluZ30gcGF0aCAtIHRoZSBjdXJyZW50IHBhZ2UgcGFnZSBlLmcuICcvYWJvdXQnXG4gICAqL1xuICBwYWdldmlldzogZnVuY3Rpb24gKHBhdGgpIHtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIHdhcm4oJ3BhdGggaXMgcmVxdWlyZWQgaW4gLnBhZ2V2aWV3KCknKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwYXRoID0gdHJpbShwYXRoKTtcbiAgICBpZiAocGF0aCA9PT0gJycpIHtcbiAgICAgIHdhcm4oJ3BhdGggY2Fubm90IGJlIGFuIGVtcHR5IHN0cmluZyBpbiAucGFnZXZpZXcoKScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZ2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3JywgcGF0aCk7XG5cbiAgICAgIGlmIChfZGVidWcpIHtcbiAgICAgICAgbG9nKCdjYWxsZWQgZ2EoXFwnc2VuZFxcJywgXFwncGFnZXZpZXdcXCcsIHBhdGgpOycpO1xuICAgICAgICBsb2coJ3dpdGggcGF0aDogJyArIHBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogbW9kYWx2aWV3OlxuICAgKiBhIHByb3h5IHRvIGJhc2ljIEdBIHBhZ2V2aWV3IHRyYWNraW5nIHRvIGNvbnNpc3RlbnRseSB0cmFja1xuICAgKiBtb2RhbCB2aWV3cyB0aGF0IGFyZSBhbiBlcXVpdmFsZW50IFVYIHRvIGEgdHJhZGl0aW9uYWwgcGFnZXZpZXdcbiAgICogQHBhcmFtICB7U3RyaW5nfSBtb2RhbE5hbWUgZS5nLiAnYWRkLW9yLWVkaXQtY2x1YidcbiAgICovXG4gIG1vZGFsdmlldzogZnVuY3Rpb24gKG1vZGFsTmFtZSkge1xuICAgIGlmICghbW9kYWxOYW1lKSB7XG4gICAgICB3YXJuKCdtb2RhbE5hbWUgaXMgcmVxdWlyZWQgaW4gLm1vZGFsdmlldyhtb2RhbE5hbWUpJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbW9kYWxOYW1lID0gdHJpbShtb2RhbE5hbWUpO1xuICAgIG1vZGFsTmFtZSA9IHJlbW92ZUxlYWRpbmdTbGFzaChtb2RhbE5hbWUpO1xuXG4gICAgaWYgKG1vZGFsTmFtZSA9PT0gJycpIHtcbiAgICAgIHdhcm4oJ21vZGFsTmFtZSBjYW5ub3QgYmUgYW4gZW1wdHkgc3RyaW5nIG9yIGEgc2luZ2xlIC8gaW4gLm1vZGFsdmlldygpJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBnYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbW9kYWxOYW1lID0gdHJpbShtb2RhbE5hbWUpO1xuICAgICAgdmFyIHBhdGggPSAnL21vZGFsLycgKyBtb2RhbE5hbWU7XG4gICAgICBnYSgnc2VuZCcsICdwYWdldmlldycsIHBhdGgpO1xuXG4gICAgICBpZiAoX2RlYnVnKSB7XG4gICAgICAgIGxvZygnY2FsbGVkIGdhKFxcJ3NlbmRcXCcsIFxcJ3BhZ2V2aWV3XFwnLCBwYXRoKTsnKTtcbiAgICAgICAgbG9nKCd3aXRoIHBhdGg6ICcgKyBwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIGV2ZW50OlxuICAgKiBHQSBldmVudCB0cmFja2luZ1xuICAgKiBAcGFyYW0gYXJncy5jYXRlZ29yeSB7U3RyaW5nfSByZXF1aXJlZFxuICAgKiBAcGFyYW0gYXJncy5hY3Rpb24ge1N0cmluZ30gcmVxdWlyZWRcbiAgICogQHBhcmFtIGFyZ3MubGFiZWwge1N0cmluZ30gb3B0aW9uYWxcbiAgICogQHBhcmFtIGFyZ3MudmFsdWUge0ludH0gb3B0aW9uYWxcbiAgICogQHBhcmFtIGFyZ3Mubm9uSW50ZXJhY3Rpb24ge2Jvb2xlYW59IG9wdGlvbmFsXG4gICAqL1xuICBldmVudDogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGdhID09PSAnZnVuY3Rpb24nKSB7XG5cbiAgICAgIC8vIFNpbXBsZSBWYWxpZGF0aW9uXG4gICAgICBpZiAoIWFyZ3MgfHwgIWFyZ3MuY2F0ZWdvcnkgfHwgIWFyZ3MuYWN0aW9uKSB7XG4gICAgICAgIHdhcm4oJ2FyZ3MuY2F0ZWdvcnkgQU5EIGFyZ3MuYWN0aW9uIGFyZSByZXF1aXJlZCBpbiBldmVudCgpJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUmVxdWlyZWQgRmllbGRzXG4gICAgICB2YXIgZmllbGRPYmplY3QgPSB7XG4gICAgICAgICdoaXRUeXBlJzogJ2V2ZW50JyxcbiAgICAgICAgJ2V2ZW50Q2F0ZWdvcnknOiBmb3JtYXQoYXJncy5jYXRlZ29yeSksXG4gICAgICAgICdldmVudEFjdGlvbic6IGZvcm1hdChhcmdzLmFjdGlvbilcbiAgICAgIH07XG5cbiAgICAgIC8vIE9wdGlvbmFsIEZpZWxkc1xuICAgICAgaWYgKGFyZ3MubGFiZWwpIHtcbiAgICAgICAgZmllbGRPYmplY3QuZXZlbnRMYWJlbCA9IGZvcm1hdChhcmdzLmxhYmVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZ3MudmFsdWUpIHtcbiAgICAgICAgaWYodHlwZW9mIGFyZ3MudmFsdWUgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgd2FybignRXhwZWN0ZWQgYGFyZ3MudmFsdWVgIGFyZyB0byBiZSBhIE51bWJlci4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWVsZE9iamVjdC5ldmVudFZhbHVlID0gYXJncy52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYXJncy5ub25JbnRlcmFjdGlvbikge1xuICAgICAgICBpZih0eXBlb2YgYXJncy5ub25JbnRlcmFjdGlvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgd2FybignYGFyZ3Mubm9uSW50ZXJhY3Rpb25gIG11c3QgYmUgYSBib29sZWFuLicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkT2JqZWN0Lm5vbkludGVyYWN0aW9uID0gYXJncy5ub25JbnRlcmFjdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTZW5kIHRvIEdBXG4gICAgICBnYSgnc2VuZCcsIGZpZWxkT2JqZWN0KTtcblxuICAgICAgaWYgKF9kZWJ1Zykge1xuICAgICAgICBsb2coJ2NhbGxlZCBnYShcXCdzZW5kXFwnLCBmaWVsZE9iamVjdCk7Jyk7XG4gICAgICAgIGxvZygnd2l0aCBmaWVsZE9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KGZpZWxkT2JqZWN0KSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBvdXRib3VuZExpbms6XG4gICAqIEdBIG91dGJvdW5kTGluayB0cmFja2luZ1xuICAgKiBAcGFyYW0gYXJncy5sYWJlbCB7U3RyaW5nfSBlLmcuIHVybCwgb3IgJ0NyZWF0ZSBhbiBBY2NvdW50J1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoaXRDYWxsYmFjayAtIENhbGxlZCBhZnRlciBwcm9jZXNzaW5nIGEgaGl0LlxuICAgKi9cbiAgb3V0Ym91bmRMaW5rOiBmdW5jdGlvbiAoYXJncywgaGl0Q2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIGhpdENhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB3YXJuKCdoaXRDYWxsYmFjayBmdW5jdGlvbiBpcyByZXF1aXJlZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZ2EgPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAgLy8gU2ltcGxlIFZhbGlkYXRpb25cbiAgICAgIGlmICghYXJncyB8fCAhYXJncy5sYWJlbCkge1xuICAgICAgICB3YXJuKCdhcmdzLmxhYmVsIGlzIHJlcXVpcmVkIGluIG91dGJvdW5kTGluaygpJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUmVxdWlyZWQgRmllbGRzXG4gICAgICB2YXIgZmllbGRPYmplY3QgPSB7XG4gICAgICAgICdoaXRUeXBlJzogJ2V2ZW50JyxcbiAgICAgICAgJ2V2ZW50Q2F0ZWdvcnknOiAnT3V0Ym91bmQnLFxuICAgICAgICAnZXZlbnRBY3Rpb24nOiAnQ2xpY2snLFxuICAgICAgICAnZXZlbnRMYWJlbCc6IGZvcm1hdChhcmdzLmxhYmVsKVxuICAgICAgfTtcblxuICAgICAgdmFyIHNhZmV0eUNhbGxiYWNrQ2FsbGVkID0gZmFsc2U7XG4gICAgICB2YXIgc2FmZXR5Q2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gVGhpcyBwcmV2ZW50cyBhIGRlbGF5ZWQgcmVzcG9uc2UgZnJvbSBHQVxuICAgICAgICAvLyBjYXVzaW5nIGhpdENhbGxiYWNrIGZyb20gYmVpbmcgZmlyZWQgdHdpY2VcbiAgICAgICAgc2FmZXR5Q2FsbGJhY2tDYWxsZWQgPSB0cnVlO1xuXG4gICAgICAgIGhpdENhbGxiYWNrKCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBVc2luZyBhIHRpbWVvdXQgdG8gZW5zdXJlIHRoZSBleGVjdXRpb24gb2YgY3JpdGljYWwgYXBwbGljYXRpb24gY29kZVxuICAgICAgLy8gaW4gdGhlIGNhc2Ugd2hlbiB0aGUgR0Egc2VydmVyIG1pZ2h0IGJlIGRvd25cbiAgICAgIC8vIG9yIGFuIGFkIGJsb2NrZXIgcHJldmVudHMgc2VuZGluZyB0aGUgZGF0YVxuXG4gICAgICAvLyByZWdpc3RlciBzYWZldHkgbmV0IHRpbWVvdXQ6XG4gICAgICB2YXIgdCA9IHNldFRpbWVvdXQoc2FmZXR5Q2FsbGJhY2ssIDI1MCk7XG5cbiAgICAgIHZhciBjbGVhcmFibGVDYWxsYmFja0ZvckdBID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0KTtcbiAgICAgICAgICBpZiAoIXNhZmV0eUNhbGxiYWNrQ2FsbGVkKSB7XG4gICAgICAgICAgICBoaXRDYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZpZWxkT2JqZWN0LmhpdENhbGxiYWNrID0gY2xlYXJhYmxlQ2FsbGJhY2tGb3JHQTtcblxuICAgICAgLy8gU2VuZCB0byBHQVxuICAgICAgZ2EoJ3NlbmQnLCBmaWVsZE9iamVjdCk7XG5cbiAgICAgIGlmIChfZGVidWcpIHtcbiAgICAgICAgbG9nKCdjYWxsZWQgZ2EoXFwnc2VuZFxcJywgZmllbGRPYmplY3QpOycpO1xuICAgICAgICBsb2coJ3dpdGggZmllbGRPYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShmaWVsZE9iamVjdCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBnYSBpcyBub3QgZGVmaW5lZCwgcmV0dXJuIHRoZSBjYWxsYmFjayBzbyB0aGUgYXBwbGljYXRpb25cbiAgICAgIC8vIGNvbnRpbnVlcyB0byB3b3JrIGFzIGV4cGVjdGVkXG4gICAgICBzZXRUaW1lb3V0KGhpdENhbGxiYWNrLCAwKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBPdXRib3VuZExpbmsgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvT3V0Ym91bmRMaW5rJyk7XG5PdXRib3VuZExpbmsudHJhY2tMaW5rID0gcmVhY3RHQS5vdXRib3VuZExpbms7XG5yZWFjdEdBLk91dGJvdW5kTGluayA9IE91dGJvdW5kTGluaztcblxubW9kdWxlLmV4cG9ydHMgPSByZWFjdEdBO1xuXG4iLCIvKipcbiAqIFJlcHJlc2VudHMgYSBjYW5jZWxsYXRpb24gY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYXdheVxuICogYmVmb3JlIHRoZSBwcmV2aW91cyB0cmFuc2l0aW9uIGhhcyBmdWxseSByZXNvbHZlZC5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIENhbmNlbGxhdGlvbigpIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsbGF0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBjYW5Vc2VET00gPSByZXF1aXJlKCdyZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnKS5jYW5Vc2VET007XG5cbnZhciBIaXN0b3J5ID0ge1xuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBudW1iZXIgb2YgZW50cmllcyBpbiB0aGUgaGlzdG9yeS5cbiAgICpcbiAgICogTm90ZTogVGhpcyBwcm9wZXJ0eSBpcyByZWFkLW9ubHkuXG4gICAqL1xuICBsZW5ndGg6IDEsXG5cbiAgLyoqXG4gICAqIFNlbmRzIHRoZSBicm93c2VyIGJhY2sgb25lIGVudHJ5IGluIHRoZSBoaXN0b3J5LlxuICAgKi9cbiAgYmFjazogZnVuY3Rpb24gYmFjaygpIHtcbiAgICBpbnZhcmlhbnQoY2FuVXNlRE9NLCAnQ2Fubm90IHVzZSBIaXN0b3J5LmJhY2sgd2l0aG91dCBhIERPTScpO1xuXG4gICAgLy8gRG8gdGhpcyBmaXJzdCBzbyB0aGF0IEhpc3RvcnkubGVuZ3RoIHdpbGxcbiAgICAvLyBiZSBhY2N1cmF0ZSBpbiBsb2NhdGlvbiBjaGFuZ2UgbGlzdGVuZXJzLlxuICAgIEhpc3RvcnkubGVuZ3RoIC09IDE7XG5cbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuLyoganNoaW50IC1XMDg0ICovXG52YXIgUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxuZnVuY3Rpb24gZGVlcFNlYXJjaChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5KSB7XG4gIC8vIENoZWNrIHRoZSBzdWJ0cmVlIGZpcnN0IHRvIGZpbmQgdGhlIG1vc3QgZGVlcGx5LW5lc3RlZCBtYXRjaC5cbiAgdmFyIGNoaWxkUm91dGVzID0gcm91dGUuY2hpbGRSb3V0ZXM7XG4gIGlmIChjaGlsZFJvdXRlcykge1xuICAgIHZhciBtYXRjaCwgY2hpbGRSb3V0ZTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2hpbGRSb3V0ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGNoaWxkUm91dGUgPSBjaGlsZFJvdXRlc1tpXTtcblxuICAgICAgaWYgKGNoaWxkUm91dGUuaXNEZWZhdWx0IHx8IGNoaWxkUm91dGUuaXNOb3RGb3VuZCkgY29udGludWU7IC8vIENoZWNrIHRoZXNlIGluIG9yZGVyIGxhdGVyLlxuXG4gICAgICBpZiAobWF0Y2ggPSBkZWVwU2VhcmNoKGNoaWxkUm91dGUsIHBhdGhuYW1lLCBxdWVyeSkpIHtcbiAgICAgICAgLy8gQSByb3V0ZSBpbiB0aGUgc3VidHJlZSBtYXRjaGVkISBBZGQgdGhpcyByb3V0ZSBhbmQgd2UncmUgZG9uZS5cbiAgICAgICAgbWF0Y2gucm91dGVzLnVuc2hpZnQocm91dGUpO1xuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTm8gY2hpbGQgcm91dGVzIG1hdGNoZWQ7IHRyeSB0aGUgZGVmYXVsdCByb3V0ZS5cbiAgdmFyIGRlZmF1bHRSb3V0ZSA9IHJvdXRlLmRlZmF1bHRSb3V0ZTtcbiAgaWYgKGRlZmF1bHRSb3V0ZSAmJiAocGFyYW1zID0gUGF0aFV0aWxzLmV4dHJhY3RQYXJhbXMoZGVmYXVsdFJvdXRlLnBhdGgsIHBhdGhuYW1lKSkpIHtcbiAgICByZXR1cm4gbmV3IE1hdGNoKHBhdGhuYW1lLCBwYXJhbXMsIHF1ZXJ5LCBbcm91dGUsIGRlZmF1bHRSb3V0ZV0pO1xuICB9IC8vIERvZXMgdGhlIFwibm90IGZvdW5kXCIgcm91dGUgbWF0Y2g/XG4gIHZhciBub3RGb3VuZFJvdXRlID0gcm91dGUubm90Rm91bmRSb3V0ZTtcbiAgaWYgKG5vdEZvdW5kUm91dGUgJiYgKHBhcmFtcyA9IFBhdGhVdGlscy5leHRyYWN0UGFyYW1zKG5vdEZvdW5kUm91dGUucGF0aCwgcGF0aG5hbWUpKSkge1xuICAgIHJldHVybiBuZXcgTWF0Y2gocGF0aG5hbWUsIHBhcmFtcywgcXVlcnksIFtyb3V0ZSwgbm90Rm91bmRSb3V0ZV0pO1xuICB9IC8vIExhc3QgYXR0ZW1wdDogY2hlY2sgdGhpcyByb3V0ZS5cbiAgdmFyIHBhcmFtcyA9IFBhdGhVdGlscy5leHRyYWN0UGFyYW1zKHJvdXRlLnBhdGgsIHBhdGhuYW1lKTtcbiAgaWYgKHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgTWF0Y2gocGF0aG5hbWUsIHBhcmFtcywgcXVlcnksIFtyb3V0ZV0pO1xuICB9cmV0dXJuIG51bGw7XG59XG5cbnZhciBNYXRjaCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hdGNoKHBhdGhuYW1lLCBwYXJhbXMsIHF1ZXJ5LCByb3V0ZXMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWF0Y2gpO1xuXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLnJvdXRlcyA9IHJvdXRlcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXRjaCwgbnVsbCwgW3tcbiAgICBrZXk6ICdmaW5kTWF0Y2gnLFxuXG4gICAgLyoqXG4gICAgICogQXR0ZW1wdHMgdG8gbWF0Y2ggZGVwdGgtZmlyc3QgYSByb3V0ZSBpbiB0aGUgZ2l2ZW4gcm91dGUnc1xuICAgICAqIHN1YnRyZWUgYWdhaW5zdCB0aGUgZ2l2ZW4gcGF0aCBhbmQgcmV0dXJucyB0aGUgbWF0Y2ggaWYgaXRcbiAgICAgKiBzdWNjZWVkcywgbnVsbCBpZiBubyBtYXRjaCBjYW4gYmUgbWFkZS5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZE1hdGNoKHJvdXRlcywgcGF0aCkge1xuICAgICAgdmFyIHBhdGhuYW1lID0gUGF0aFV0aWxzLndpdGhvdXRRdWVyeShwYXRoKTtcbiAgICAgIHZhciBxdWVyeSA9IFBhdGhVdGlscy5leHRyYWN0UXVlcnkocGF0aCk7XG4gICAgICB2YXIgbWF0Y2ggPSBudWxsO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcm91dGVzLmxlbmd0aDsgbWF0Y2ggPT0gbnVsbCAmJiBpIDwgbGVuOyArK2kpIG1hdGNoID0gZGVlcFNlYXJjaChyb3V0ZXNbaV0sIHBhdGhuYW1lLCBxdWVyeSk7XG5cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWF0Y2g7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGNoOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbi8qKlxuICogQSBtaXhpbiBmb3IgY29tcG9uZW50cyB0aGF0IG1vZGlmeSB0aGUgVVJMLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgIG1peGluczogWyBSb3V0ZXIuTmF2aWdhdGlvbiBdLFxuICogICAgIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gKiAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICogICAgICAgdGhpcy50cmFuc2l0aW9uVG8oJ2FSb3V0ZScsIHsgdGhlOiAncGFyYW1zJyB9LCB7IHRoZTogJ3F1ZXJ5JyB9KTtcbiAqICAgICB9LFxuICogICAgIHJlbmRlcigpIHtcbiAqICAgICAgIHJldHVybiAoXG4gKiAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PkNsaWNrIG1lITwvYT5cbiAqICAgICAgICk7XG4gKiAgICAgfVxuICogICB9KTtcbiAqL1xudmFyIE5hdmlnYXRpb24gPSB7XG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBQcm9wVHlwZXMucm91dGVyLmlzUmVxdWlyZWRcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhYnNvbHV0ZSBVUkwgcGF0aCBjcmVhdGVkIGZyb20gdGhlIGdpdmVuIHJvdXRlXG4gICAqIG5hbWUsIFVSTCBwYXJhbWV0ZXJzLCBhbmQgcXVlcnkgdmFsdWVzLlxuICAgKi9cbiAgbWFrZVBhdGg6IGZ1bmN0aW9uIG1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIubWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgbWF5IHNhZmVseSBiZSB1c2VkIGFzIHRoZSBocmVmIG9mIGFcbiAgICogbGluayB0byB0aGUgcm91dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICovXG4gIG1ha2VIcmVmOiBmdW5jdGlvbiBtYWtlSHJlZih0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLm1ha2VIcmVmKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgfSxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbnMgdG8gdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGFyZ3VtZW50cyBieSBwdXNoaW5nXG4gICAqIGEgbmV3IFVSTCBvbnRvIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgKi9cbiAgdHJhbnNpdGlvblRvOiBmdW5jdGlvbiB0cmFuc2l0aW9uVG8odG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICB0aGlzLmNvbnRleHQucm91dGVyLnRyYW5zaXRpb25Ubyh0bywgcGFyYW1zLCBxdWVyeSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb25zIHRvIHRoZSBVUkwgc3BlY2lmaWVkIGluIHRoZSBhcmd1bWVudHMgYnkgcmVwbGFjaW5nXG4gICAqIHRoZSBjdXJyZW50IFVSTCBpbiB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICovXG4gIHJlcGxhY2VXaXRoOiBmdW5jdGlvbiByZXBsYWNlV2l0aCh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucmVwbGFjZVdpdGgodG8sIHBhcmFtcywgcXVlcnkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgcHJldmlvdXMgVVJMLlxuICAgKi9cbiAgZ29CYWNrOiBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuZ29CYWNrKCk7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOYXZpZ2F0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgcXMgPSByZXF1aXJlKCdxcycpO1xuXG52YXIgcGFyYW1Db21waWxlTWF0Y2hlciA9IC86KFthLXpBLVpfJF1bYS16QS1aMC05XyRdKil8WyouKClcXFtcXF1cXFxcK3x7fV4kXS9nO1xudmFyIHBhcmFtSW5qZWN0TWF0Y2hlciA9IC86KFthLXpBLVpfJF1bYS16QS1aMC05XyQ/XSpbP10/KXxbKl0vZztcbnZhciBwYXJhbUluamVjdFRyYWlsaW5nU2xhc2hNYXRjaGVyID0gL1xcL1xcL1xcP3xcXC9cXD9cXC98XFwvXFw/L2c7XG52YXIgcXVlcnlNYXRjaGVyID0gL1xcPyguKikkLztcblxudmFyIF9jb21waWxlZFBhdHRlcm5zID0ge307XG5cbmZ1bmN0aW9uIGNvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgaWYgKCEocGF0dGVybiBpbiBfY29tcGlsZWRQYXR0ZXJucykpIHtcbiAgICB2YXIgcGFyYW1OYW1lcyA9IFtdO1xuICAgIHZhciBzb3VyY2UgPSBwYXR0ZXJuLnJlcGxhY2UocGFyYW1Db21waWxlTWF0Y2hlciwgZnVuY3Rpb24gKG1hdGNoLCBwYXJhbU5hbWUpIHtcbiAgICAgIGlmIChwYXJhbU5hbWUpIHtcbiAgICAgICAgcGFyYW1OYW1lcy5wdXNoKHBhcmFtTmFtZSk7XG4gICAgICAgIHJldHVybiAnKFteLz8jXSspJztcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPT09ICcqJykge1xuICAgICAgICBwYXJhbU5hbWVzLnB1c2goJ3NwbGF0Jyk7XG4gICAgICAgIHJldHVybiAnKC4qPyknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdcXFxcJyArIG1hdGNoO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2NvbXBpbGVkUGF0dGVybnNbcGF0dGVybl0gPSB7XG4gICAgICBtYXRjaGVyOiBuZXcgUmVnRXhwKCdeJyArIHNvdXJjZSArICckJywgJ2knKSxcbiAgICAgIHBhcmFtTmFtZXM6IHBhcmFtTmFtZXNcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb21waWxlZFBhdHRlcm5zW3BhdHRlcm5dO1xufVxuXG52YXIgUGF0aFV0aWxzID0ge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHBhdGggaXMgYWJzb2x1dGUuXG4gICAqL1xuICBpc0Fic29sdXRlOiBmdW5jdGlvbiBpc0Fic29sdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfSxcblxuICAvKipcbiAgICogSm9pbnMgdHdvIFVSTCBwYXRocyB0b2dldGhlci5cbiAgICovXG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oYSwgYikge1xuICAgIHJldHVybiBhLnJlcGxhY2UoL1xcLyokLywgJy8nKSArIGI7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIG5hbWVzIG9mIGFsbCBwYXJhbWV0ZXJzIGluIHRoZSBnaXZlbiBwYXR0ZXJuLlxuICAgKi9cbiAgZXh0cmFjdFBhcmFtTmFtZXM6IGZ1bmN0aW9uIGV4dHJhY3RQYXJhbU5hbWVzKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gY29tcGlsZVBhdHRlcm4ocGF0dGVybikucGFyYW1OYW1lcztcbiAgfSxcblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIHBvcnRpb25zIG9mIHRoZSBnaXZlbiBVUkwgcGF0aCB0aGF0IG1hdGNoIHRoZSBnaXZlbiBwYXR0ZXJuXG4gICAqIGFuZCByZXR1cm5zIGFuIG9iamVjdCBvZiBwYXJhbSBuYW1lID0+IHZhbHVlIHBhaXJzLiBSZXR1cm5zIG51bGwgaWYgdGhlXG4gICAqIHBhdHRlcm4gZG9lcyBub3QgbWF0Y2ggdGhlIGdpdmVuIHBhdGguXG4gICAqL1xuICBleHRyYWN0UGFyYW1zOiBmdW5jdGlvbiBleHRyYWN0UGFyYW1zKHBhdHRlcm4sIHBhdGgpIHtcbiAgICB2YXIgX2NvbXBpbGVQYXR0ZXJuID0gY29tcGlsZVBhdHRlcm4ocGF0dGVybik7XG5cbiAgICB2YXIgbWF0Y2hlciA9IF9jb21waWxlUGF0dGVybi5tYXRjaGVyO1xuICAgIHZhciBwYXJhbU5hbWVzID0gX2NvbXBpbGVQYXR0ZXJuLnBhcmFtTmFtZXM7XG5cbiAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKG1hdGNoZXIpO1xuXG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfXZhciBwYXJhbXMgPSB7fTtcblxuICAgIHBhcmFtTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW1OYW1lLCBpbmRleCkge1xuICAgICAgcGFyYW1zW3BhcmFtTmFtZV0gPSBtYXRjaFtpbmRleCArIDFdO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIGdpdmVuIHJvdXRlIHBhdGggd2l0aCBwYXJhbXMgaW50ZXJwb2xhdGVkLiBUaHJvd3NcbiAgICogaWYgdGhlcmUgaXMgYSBkeW5hbWljIHNlZ21lbnQgb2YgdGhlIHJvdXRlIHBhdGggZm9yIHdoaWNoIHRoZXJlIGlzIG5vIHBhcmFtLlxuICAgKi9cbiAgaW5qZWN0UGFyYW1zOiBmdW5jdGlvbiBpbmplY3RQYXJhbXMocGF0dGVybiwgcGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgdmFyIHNwbGF0SW5kZXggPSAwO1xuXG4gICAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZShwYXJhbUluamVjdE1hdGNoZXIsIGZ1bmN0aW9uIChtYXRjaCwgcGFyYW1OYW1lKSB7XG4gICAgICBwYXJhbU5hbWUgPSBwYXJhbU5hbWUgfHwgJ3NwbGF0JztcblxuICAgICAgLy8gSWYgcGFyYW0gaXMgb3B0aW9uYWwgZG9uJ3QgY2hlY2sgZm9yIGV4aXN0ZW5jZVxuICAgICAgaWYgKHBhcmFtTmFtZS5zbGljZSgtMSkgPT09ICc/Jykge1xuICAgICAgICBwYXJhbU5hbWUgPSBwYXJhbU5hbWUuc2xpY2UoMCwgLTEpO1xuXG4gICAgICAgIGlmIChwYXJhbXNbcGFyYW1OYW1lXSA9PSBudWxsKSByZXR1cm4gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnZhcmlhbnQocGFyYW1zW3BhcmFtTmFtZV0gIT0gbnVsbCwgJ01pc3NpbmcgXCIlc1wiIHBhcmFtZXRlciBmb3IgcGF0aCBcIiVzXCInLCBwYXJhbU5hbWUsIHBhdHRlcm4pO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VnbWVudDtcbiAgICAgIGlmIChwYXJhbU5hbWUgPT09ICdzcGxhdCcgJiYgQXJyYXkuaXNBcnJheShwYXJhbXNbcGFyYW1OYW1lXSkpIHtcbiAgICAgICAgc2VnbWVudCA9IHBhcmFtc1twYXJhbU5hbWVdW3NwbGF0SW5kZXgrK107XG5cbiAgICAgICAgaW52YXJpYW50KHNlZ21lbnQgIT0gbnVsbCwgJ01pc3Npbmcgc3BsYXQgIyAlcyBmb3IgcGF0aCBcIiVzXCInLCBzcGxhdEluZGV4LCBwYXR0ZXJuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZ21lbnQgPSBwYXJhbXNbcGFyYW1OYW1lXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlZ21lbnQ7XG4gICAgfSkucmVwbGFjZShwYXJhbUluamVjdFRyYWlsaW5nU2xhc2hNYXRjaGVyLCAnLycpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGlzIHRoZSByZXN1bHQgb2YgcGFyc2luZyBhbnkgcXVlcnkgc3RyaW5nIGNvbnRhaW5lZFxuICAgKiBpbiB0aGUgZ2l2ZW4gcGF0aCwgbnVsbCBpZiB0aGUgcGF0aCBjb250YWlucyBubyBxdWVyeSBzdHJpbmcuXG4gICAqL1xuICBleHRyYWN0UXVlcnk6IGZ1bmN0aW9uIGV4dHJhY3RRdWVyeShwYXRoKSB7XG4gICAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChxdWVyeU1hdGNoZXIpO1xuICAgIHJldHVybiBtYXRjaCAmJiBxcy5wYXJzZShtYXRjaFsxXSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBwYXRoIHdpdGhvdXQgdGhlIHF1ZXJ5IHN0cmluZy5cbiAgICovXG4gIHdpdGhvdXRRdWVyeTogZnVuY3Rpb24gd2l0aG91dFF1ZXJ5KHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKHF1ZXJ5TWF0Y2hlciwgJycpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcGF0aCB3aXRoIHRoZSBwYXJhbWV0ZXJzIGluIHRoZSBnaXZlblxuICAgKiBxdWVyeSBtZXJnZWQgaW50byB0aGUgcXVlcnkgc3RyaW5nLlxuICAgKi9cbiAgd2l0aFF1ZXJ5OiBmdW5jdGlvbiB3aXRoUXVlcnkocGF0aCwgcXVlcnkpIHtcbiAgICB2YXIgZXhpc3RpbmdRdWVyeSA9IFBhdGhVdGlscy5leHRyYWN0UXVlcnkocGF0aCk7XG5cbiAgICBpZiAoZXhpc3RpbmdRdWVyeSkgcXVlcnkgPSBxdWVyeSA/IGFzc2lnbihleGlzdGluZ1F1ZXJ5LCBxdWVyeSkgOiBleGlzdGluZ1F1ZXJ5O1xuXG4gICAgdmFyIHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHF1ZXJ5LCB7IGFycmF5Rm9ybWF0OiAnYnJhY2tldHMnIH0pO1xuXG4gICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICByZXR1cm4gUGF0aFV0aWxzLndpdGhvdXRRdWVyeShwYXRoKSArICc/JyArIHF1ZXJ5U3RyaW5nO1xuICAgIH1yZXR1cm4gUGF0aFV0aWxzLndpdGhvdXRRdWVyeShwYXRoKTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhdGhVdGlsczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdyZWFjdC9saWIvT2JqZWN0LmFzc2lnbicpO1xudmFyIFJlYWN0UHJvcFR5cGVzID0gcmVxdWlyZSgncmVhY3QnKS5Qcm9wVHlwZXM7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG5cbnZhciBQcm9wVHlwZXMgPSBhc3NpZ24oe30sIFJlYWN0UHJvcFR5cGVzLCB7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IGEgcHJvcCBzaG91bGQgYmUgZmFsc3kuXG4gICAqL1xuICBmYWxzeTogZnVuY3Rpb24gZmFsc3kocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignPCcgKyBjb21wb25lbnROYW1lICsgJz4gc2hvdWxkIG5vdCBoYXZlIGEgXCInICsgcHJvcE5hbWUgKyAnXCIgcHJvcCcpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgYSBwcm9wIHNob3VsZCBiZSBhIFJvdXRlIG9iamVjdC5cbiAgICovXG4gIHJvdXRlOiBSZWFjdFByb3BUeXBlcy5pbnN0YW5jZU9mKFJvdXRlKSxcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgYSBwcm9wIHNob3VsZCBiZSBhIFJvdXRlciBvYmplY3QuXG4gICAqL1xuICAvL3JvdXRlcjogUmVhY3RQcm9wVHlwZXMuaW5zdGFuY2VPZihSb3V0ZXIpIC8vIFRPRE9cbiAgcm91dGVyOiBSZWFjdFByb3BUeXBlcy5mdW5jXG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3BUeXBlczsiLCIvKipcbiAqIEVuY2Fwc3VsYXRlcyBhIHJlZGlyZWN0IHRvIHRoZSBnaXZlbiByb3V0ZS5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIFJlZGlyZWN0KHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gIHRoaXMudG8gPSB0bztcbiAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIHRoaXMucXVlcnkgPSBxdWVyeTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWRpcmVjdDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdyZWFjdC9saWIvT2JqZWN0LmFzc2lnbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgncmVhY3QvbGliL3dhcm5pbmcnKTtcbnZhciBQYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX2N1cnJlbnRSb3V0ZTtcblxudmFyIFJvdXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUm91dGUobmFtZSwgcGF0aCwgaWdub3JlU2Nyb2xsQmVoYXZpb3IsIGlzRGVmYXVsdCwgaXNOb3RGb3VuZCwgb25FbnRlciwgb25MZWF2ZSwgaGFuZGxlcikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZSk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5wYXJhbU5hbWVzID0gUGF0aFV0aWxzLmV4dHJhY3RQYXJhbU5hbWVzKHRoaXMucGF0aCk7XG4gICAgdGhpcy5pZ25vcmVTY3JvbGxCZWhhdmlvciA9ICEhaWdub3JlU2Nyb2xsQmVoYXZpb3I7XG4gICAgdGhpcy5pc0RlZmF1bHQgPSAhIWlzRGVmYXVsdDtcbiAgICB0aGlzLmlzTm90Rm91bmQgPSAhIWlzTm90Rm91bmQ7XG4gICAgdGhpcy5vbkVudGVyID0gb25FbnRlcjtcbiAgICB0aGlzLm9uTGVhdmUgPSBvbkxlYXZlO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUm91dGUsIFt7XG4gICAga2V5OiAnYXBwZW5kQ2hpbGQnLFxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyB0aGUgZ2l2ZW4gcm91dGUgdG8gdGhpcyByb3V0ZSdzIGNoaWxkIHJvdXRlcy5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kQ2hpbGQocm91dGUpIHtcbiAgICAgIGludmFyaWFudChyb3V0ZSBpbnN0YW5jZW9mIFJvdXRlLCAncm91dGUuYXBwZW5kQ2hpbGQgbXVzdCB1c2UgYSB2YWxpZCBSb3V0ZScpO1xuXG4gICAgICBpZiAoIXRoaXMuY2hpbGRSb3V0ZXMpIHRoaXMuY2hpbGRSb3V0ZXMgPSBbXTtcblxuICAgICAgdGhpcy5jaGlsZFJvdXRlcy5wdXNoKHJvdXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgdmFyIHN0cmluZyA9ICc8Um91dGUnO1xuXG4gICAgICBpZiAodGhpcy5uYW1lKSBzdHJpbmcgKz0gJyBuYW1lPVwiJyArIHRoaXMubmFtZSArICdcIic7XG5cbiAgICAgIHN0cmluZyArPSAnIHBhdGg9XCInICsgdGhpcy5wYXRoICsgJ1wiPic7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdjcmVhdGVSb3V0ZScsXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgbmV3IHJvdXRlLiBPcHRpb25zIG1heSBiZSBhIFVSTCBwYXRobmFtZSBzdHJpbmdcbiAgICAgKiB3aXRoIHBsYWNlaG9sZGVycyBmb3IgbmFtZWQgcGFyYW1zIG9yIGFuIG9iamVjdCB3aXRoIGFueSBvZiB0aGUgZm9sbG93aW5nXG4gICAgICogcHJvcGVydGllczpcbiAgICAgKlxuICAgICAqIC0gbmFtZSAgICAgICAgICAgICAgICAgICAgIFRoZSBuYW1lIG9mIHRoZSByb3V0ZS4gVGhpcyBpcyB1c2VkIHRvIGxvb2t1cCBhXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgcmVsYXRpdmUgdG8gaXRzIHBhcmVudCByb3V0ZSBhbmQgc2hvdWxkIGJlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlIGFtb25nIGFsbCBjaGlsZCByb3V0ZXMgb2YgdGhlIHNhbWUgcGFyZW50XG4gICAgICogLSBwYXRoICAgICAgICAgICAgICAgICAgICAgQSBVUkwgcGF0aG5hbWUgc3RyaW5nIHdpdGggb3B0aW9uYWwgcGxhY2Vob2xkZXJzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBzcGVjaWZ5IHRoZSBuYW1lcyBvZiBwYXJhbXMgdG8gZXh0cmFjdCBmcm9tXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIFVSTCB3aGVuIHRoZSBwYXRoIG1hdGNoZXMuIERlZmF1bHRzIHRvIGAvJHtuYW1lfWBcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVuIHRoZXJlIGlzIGEgbmFtZSBnaXZlbiwgb3IgdGhlIHBhdGggb2YgdGhlIHBhcmVudFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLCBvciAvXG4gICAgICogLSBpZ25vcmVTY3JvbGxCZWhhdmlvciAgICAgVHJ1ZSB0byBtYWtlIHRoaXMgcm91dGUgKGFuZCBhbGwgZGVzY2VuZGFudHMpIGlnbm9yZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBzY3JvbGwgYmVoYXZpb3Igb2YgdGhlIHJvdXRlclxuICAgICAqIC0gaXNEZWZhdWx0ICAgICAgICAgICAgICAgIFRydWUgdG8gbWFrZSB0aGlzIHJvdXRlIHRoZSBkZWZhdWx0IHJvdXRlIGFtb25nIGFsbFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0cyBzaWJsaW5nc1xuICAgICAqIC0gaXNOb3RGb3VuZCAgICAgICAgICAgICAgIFRydWUgdG8gbWFrZSB0aGlzIHJvdXRlIHRoZSBcIm5vdCBmb3VuZFwiIHJvdXRlIGFtb25nXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsIGl0cyBzaWJsaW5nc1xuICAgICAqIC0gb25FbnRlciAgICAgICAgICAgICAgICAgIEEgdHJhbnNpdGlvbiBob29rIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGVcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIgaXMgZ29pbmcgdG8gZW50ZXIgdGhpcyByb3V0ZVxuICAgICAqIC0gb25MZWF2ZSAgICAgICAgICAgICAgICAgIEEgdHJhbnNpdGlvbiBob29rIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGVcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIgaXMgZ29pbmcgdG8gbGVhdmUgdGhpcyByb3V0ZVxuICAgICAqIC0gaGFuZGxlciAgICAgICAgICAgICAgICAgIEEgUmVhY3QgY29tcG9uZW50IHRoYXQgd2lsbCBiZSByZW5kZXJlZCB3aGVuXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyByb3V0ZSBpcyBhY3RpdmVcbiAgICAgKiAtIHBhcmVudFJvdXRlICAgICAgICAgICAgICBUaGUgcGFyZW50IHJvdXRlIHRvIHVzZSBmb3IgdGhpcyByb3V0ZS4gVGhpcyBvcHRpb25cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcyBhdXRvbWF0aWNhbGx5IHN1cHBsaWVkIHdoZW4gY3JlYXRpbmcgcm91dGVzIGluc2lkZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBjYWxsYmFjayB0byBhbm90aGVyIGludm9jYXRpb24gb2YgY3JlYXRlUm91dGUuIFlvdVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHkgZXZlciBuZWVkIHRvIHVzZSB0aGlzIHdoZW4gZGVjbGFyaW5nIHJvdXRlc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGVwZW5kZW50bHkgb2Ygb25lIGFub3RoZXIgdG8gbWFudWFsbHkgcGllY2UgdG9nZXRoZXJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgcm91dGUgaGllcmFyY2h5XG4gICAgICpcbiAgICAgKiBUaGUgY2FsbGJhY2sgbWF5IGJlIHVzZWQgdG8gc3RydWN0dXJlIHlvdXIgcm91dGUgaGllcmFyY2h5LiBBbnkgY2FsbCB0b1xuICAgICAqIGNyZWF0ZVJvdXRlLCBjcmVhdGVEZWZhdWx0Um91dGUsIGNyZWF0ZU5vdEZvdW5kUm91dGUsIG9yIGNyZWF0ZVJlZGlyZWN0XG4gICAgICogaW5zaWRlIHRoZSBjYWxsYmFjayBhdXRvbWF0aWNhbGx5IHVzZXMgdGhpcyByb3V0ZSBhcyBpdHMgcGFyZW50LlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVSb3V0ZShvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIG9wdGlvbnMgPSB7IHBhdGg6IG9wdGlvbnMgfTtcblxuICAgICAgdmFyIHBhcmVudFJvdXRlID0gX2N1cnJlbnRSb3V0ZTtcblxuICAgICAgaWYgKHBhcmVudFJvdXRlKSB7XG4gICAgICAgIHdhcm5pbmcob3B0aW9ucy5wYXJlbnRSb3V0ZSA9PSBudWxsIHx8IG9wdGlvbnMucGFyZW50Um91dGUgPT09IHBhcmVudFJvdXRlLCAnWW91IHNob3VsZCBub3QgdXNlIHBhcmVudFJvdXRlIHdpdGggY3JlYXRlUm91dGUgaW5zaWRlIGFub3RoZXIgcm91dGVcXCdzIGNoaWxkIGNhbGxiYWNrOyBpdCBpcyBpZ25vcmVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRSb3V0ZSA9IG9wdGlvbnMucGFyZW50Um91dGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lO1xuICAgICAgdmFyIHBhdGggPSBvcHRpb25zLnBhdGggfHwgbmFtZTtcblxuICAgICAgaWYgKHBhdGggJiYgIShvcHRpb25zLmlzRGVmYXVsdCB8fCBvcHRpb25zLmlzTm90Rm91bmQpKSB7XG4gICAgICAgIGlmIChQYXRoVXRpbHMuaXNBYnNvbHV0ZShwYXRoKSkge1xuICAgICAgICAgIGlmIChwYXJlbnRSb3V0ZSkge1xuICAgICAgICAgICAgaW52YXJpYW50KHBhdGggPT09IHBhcmVudFJvdXRlLnBhdGggfHwgcGFyZW50Um91dGUucGFyYW1OYW1lcy5sZW5ndGggPT09IDAsICdZb3UgY2Fubm90IG5lc3QgcGF0aCBcIiVzXCIgaW5zaWRlIFwiJXNcIjsgdGhlIHBhcmVudCByZXF1aXJlcyBVUkwgcGFyYW1ldGVycycsIHBhdGgsIHBhcmVudFJvdXRlLnBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwYXJlbnRSb3V0ZSkge1xuICAgICAgICAgIC8vIFJlbGF0aXZlIHBhdGhzIGV4dGVuZCB0aGVpciBwYXJlbnQuXG4gICAgICAgICAgcGF0aCA9IFBhdGhVdGlscy5qb2luKHBhcmVudFJvdXRlLnBhdGgsIHBhdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhdGggPSAnLycgKyBwYXRoO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoID0gcGFyZW50Um91dGUgPyBwYXJlbnRSb3V0ZS5wYXRoIDogJy8nO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5pc05vdEZvdW5kICYmICEvXFwqJC8udGVzdChwYXRoKSkgcGF0aCArPSAnKic7IC8vIEF1dG8tYXBwZW5kICogdG8gdGhlIHBhdGggb2Ygbm90IGZvdW5kIHJvdXRlcy5cblxuICAgICAgdmFyIHJvdXRlID0gbmV3IFJvdXRlKG5hbWUsIHBhdGgsIG9wdGlvbnMuaWdub3JlU2Nyb2xsQmVoYXZpb3IsIG9wdGlvbnMuaXNEZWZhdWx0LCBvcHRpb25zLmlzTm90Rm91bmQsIG9wdGlvbnMub25FbnRlciwgb3B0aW9ucy5vbkxlYXZlLCBvcHRpb25zLmhhbmRsZXIpO1xuXG4gICAgICBpZiAocGFyZW50Um91dGUpIHtcbiAgICAgICAgaWYgKHJvdXRlLmlzRGVmYXVsdCkge1xuICAgICAgICAgIGludmFyaWFudChwYXJlbnRSb3V0ZS5kZWZhdWx0Um91dGUgPT0gbnVsbCwgJyVzIG1heSBub3QgaGF2ZSBtb3JlIHRoYW4gb25lIGRlZmF1bHQgcm91dGUnLCBwYXJlbnRSb3V0ZSk7XG5cbiAgICAgICAgICBwYXJlbnRSb3V0ZS5kZWZhdWx0Um91dGUgPSByb3V0ZTtcbiAgICAgICAgfSBlbHNlIGlmIChyb3V0ZS5pc05vdEZvdW5kKSB7XG4gICAgICAgICAgaW52YXJpYW50KHBhcmVudFJvdXRlLm5vdEZvdW5kUm91dGUgPT0gbnVsbCwgJyVzIG1heSBub3QgaGF2ZSBtb3JlIHRoYW4gb25lIG5vdCBmb3VuZCByb3V0ZScsIHBhcmVudFJvdXRlKTtcblxuICAgICAgICAgIHBhcmVudFJvdXRlLm5vdEZvdW5kUm91dGUgPSByb3V0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudFJvdXRlLmFwcGVuZENoaWxkKHJvdXRlKTtcbiAgICAgIH1cblxuICAgICAgLy8gQW55IHJvdXRlcyBjcmVhdGVkIGluIHRoZSBjYWxsYmFja1xuICAgICAgLy8gdXNlIHRoaXMgcm91dGUgYXMgdGhlaXIgcGFyZW50LlxuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgY3VycmVudFJvdXRlID0gX2N1cnJlbnRSb3V0ZTtcbiAgICAgICAgX2N1cnJlbnRSb3V0ZSA9IHJvdXRlO1xuICAgICAgICBjYWxsYmFjay5jYWxsKHJvdXRlLCByb3V0ZSk7XG4gICAgICAgIF9jdXJyZW50Um91dGUgPSBjdXJyZW50Um91dGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVEZWZhdWx0Um91dGUnLFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIHJvdXRlIHRoYXQgaXMgcmVuZGVyZWQgd2hlbiBpdHMgcGFyZW50IG1hdGNoZXNcbiAgICAgKiB0aGUgY3VycmVudCBVUkwuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRSb3V0ZShvcHRpb25zKSB7XG4gICAgICByZXR1cm4gUm91dGUuY3JlYXRlUm91dGUoYXNzaWduKHt9LCBvcHRpb25zLCB7IGlzRGVmYXVsdDogdHJ1ZSB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlTm90Rm91bmRSb3V0ZScsXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgcm91dGUgdGhhdCBpcyByZW5kZXJlZCB3aGVuIGl0cyBwYXJlbnQgbWF0Y2hlc1xuICAgICAqIHRoZSBjdXJyZW50IFVSTCBidXQgbm9uZSBvZiBpdHMgc2libGluZ3MgZG8uXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU5vdEZvdW5kUm91dGUob3B0aW9ucykge1xuICAgICAgcmV0dXJuIFJvdXRlLmNyZWF0ZVJvdXRlKGFzc2lnbih7fSwgb3B0aW9ucywgeyBpc05vdEZvdW5kOiB0cnVlIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVSZWRpcmVjdCcsXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgcm91dGUgdGhhdCBhdXRvbWF0aWNhbGx5IHJlZGlyZWN0cyB0aGUgdHJhbnNpdGlvblxuICAgICAqIHRvIGFub3RoZXIgcm91dGUuIEluIGFkZGl0aW9uIHRvIHRoZSBub3JtYWwgb3B0aW9ucyB0byBjcmVhdGVSb3V0ZSwgdGhpc1xuICAgICAqIGZ1bmN0aW9uIGFjY2VwdHMgdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgICAqXG4gICAgICogLSBmcm9tICAgICAgICAgQW4gYWxpYXMgZm9yIHRoZSBgcGF0aGAgb3B0aW9uLiBEZWZhdWx0cyB0byAqXG4gICAgICogLSB0byAgICAgICAgICAgVGhlIHBhdGgvcm91dGUvcm91dGUgbmFtZSB0byByZWRpcmVjdCB0b1xuICAgICAqIC0gcGFyYW1zICAgICAgIFRoZSBwYXJhbXMgdG8gdXNlIGluIHRoZSByZWRpcmVjdCBVUkwuIERlZmF1bHRzXG4gICAgICogICAgICAgICAgICAgICAgdG8gdXNpbmcgdGhlIGN1cnJlbnQgcGFyYW1zXG4gICAgICogLSBxdWVyeSAgICAgICAgVGhlIHF1ZXJ5IHRvIHVzZSBpbiB0aGUgcmVkaXJlY3QgVVJMLiBEZWZhdWx0c1xuICAgICAqICAgICAgICAgICAgICAgIHRvIHVzaW5nIHRoZSBjdXJyZW50IHF1ZXJ5XG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVJlZGlyZWN0KG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBSb3V0ZS5jcmVhdGVSb3V0ZShhc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgcGF0aDogb3B0aW9ucy5wYXRoIHx8IG9wdGlvbnMuZnJvbSB8fCAnKicsXG4gICAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uIG9uRW50ZXIodHJhbnNpdGlvbiwgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICAgIHRyYW5zaXRpb24ucmVkaXJlY3Qob3B0aW9ucy50bywgb3B0aW9ucy5wYXJhbXMgfHwgcGFyYW1zLCBvcHRpb25zLnF1ZXJ5IHx8IHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSb3V0ZTtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gUm91dGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpLmNhblVzZURPTTtcbnZhciBnZXRXaW5kb3dTY3JvbGxQb3NpdGlvbiA9IHJlcXVpcmUoJy4vZ2V0V2luZG93U2Nyb2xsUG9zaXRpb24nKTtcblxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlU2Nyb2xsKHN0YXRlLCBwcmV2U3RhdGUpIHtcbiAgaWYgKCFwcmV2U3RhdGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBEb24ndCB1cGRhdGUgc2Nyb2xsIHBvc2l0aW9uIHdoZW4gb25seSB0aGUgcXVlcnkgaGFzIGNoYW5nZWQuXG4gIGlmIChzdGF0ZS5wYXRobmFtZSA9PT0gcHJldlN0YXRlLnBhdGhuYW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9dmFyIHJvdXRlcyA9IHN0YXRlLnJvdXRlcztcbiAgdmFyIHByZXZSb3V0ZXMgPSBwcmV2U3RhdGUucm91dGVzO1xuXG4gIHZhciBzaGFyZWRBbmNlc3RvclJvdXRlcyA9IHJvdXRlcy5maWx0ZXIoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgcmV0dXJuIHByZXZSb3V0ZXMuaW5kZXhPZihyb3V0ZSkgIT09IC0xO1xuICB9KTtcblxuICByZXR1cm4gIXNoYXJlZEFuY2VzdG9yUm91dGVzLnNvbWUoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgcmV0dXJuIHJvdXRlLmlnbm9yZVNjcm9sbEJlaGF2aW9yO1xuICB9KTtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyB0aGUgcm91dGVyIHdpdGggdGhlIGFiaWxpdHkgdG8gbWFuYWdlIHdpbmRvdyBzY3JvbGwgcG9zaXRpb25cbiAqIGFjY29yZGluZyB0byBpdHMgc2Nyb2xsIGJlaGF2aW9yLlxuICovXG52YXIgU2Nyb2xsSGlzdG9yeSA9IHtcblxuICBzdGF0aWNzOiB7XG5cbiAgICAvKipcbiAgICAgKiBSZWNvcmRzIGN1cmVudCBzY3JvbGwgcG9zaXRpb24gYXMgdGhlIGxhc3Qga25vd24gcG9zaXRpb24gZm9yIHRoZSBnaXZlbiBVUkwgcGF0aC5cbiAgICAgKi9cbiAgICByZWNvcmRTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24gcmVjb3JkU2Nyb2xsUG9zaXRpb24ocGF0aCkge1xuICAgICAgaWYgKCF0aGlzLnNjcm9sbEhpc3RvcnkpIHRoaXMuc2Nyb2xsSGlzdG9yeSA9IHt9O1xuXG4gICAgICB0aGlzLnNjcm9sbEhpc3RvcnlbcGF0aF0gPSBnZXRXaW5kb3dTY3JvbGxQb3NpdGlvbigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYXN0IGtub3duIHNjcm9sbCBwb3NpdGlvbiBmb3IgdGhlIGdpdmVuIFVSTCBwYXRoLlxuICAgICAqL1xuICAgIGdldFNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbihwYXRoKSB7XG4gICAgICBpZiAoIXRoaXMuc2Nyb2xsSGlzdG9yeSkgdGhpcy5zY3JvbGxIaXN0b3J5ID0ge307XG5cbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbEhpc3RvcnlbcGF0aF0gfHwgbnVsbDtcbiAgICB9XG5cbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpbnZhcmlhbnQodGhpcy5jb25zdHJ1Y3Rvci5nZXRTY3JvbGxCZWhhdmlvcigpID09IG51bGwgfHwgY2FuVXNlRE9NLCAnQ2Fubm90IHVzZSBzY3JvbGwgYmVoYXZpb3Igd2l0aG91dCBhIERPTScpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl91cGRhdGVTY3JvbGwoKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVNjcm9sbChwcmV2U3RhdGUpO1xuICB9LFxuXG4gIF91cGRhdGVTY3JvbGw6IGZ1bmN0aW9uIF91cGRhdGVTY3JvbGwocHJldlN0YXRlKSB7XG4gICAgaWYgKCFzaG91bGRVcGRhdGVTY3JvbGwodGhpcy5zdGF0ZSwgcHJldlN0YXRlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH12YXIgc2Nyb2xsQmVoYXZpb3IgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFNjcm9sbEJlaGF2aW9yKCk7XG5cbiAgICBpZiAoc2Nyb2xsQmVoYXZpb3IpIHNjcm9sbEJlaGF2aW9yLnVwZGF0ZVNjcm9sbFBvc2l0aW9uKHRoaXMuY29uc3RydWN0b3IuZ2V0U2Nyb2xsUG9zaXRpb24odGhpcy5zdGF0ZS5wYXRoKSwgdGhpcy5zdGF0ZS5hY3Rpb24pO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsSGlzdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG4vKipcbiAqIEEgbWl4aW4gZm9yIGNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGtub3cgdGhlIHBhdGgsIHJvdXRlcywgVVJMXG4gKiBwYXJhbXMgYW5kIHF1ZXJ5IHRoYXQgYXJlIGN1cnJlbnRseSBhY3RpdmUuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgIHZhciBBYm91dExpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICAgbWl4aW5zOiBbIFJvdXRlci5TdGF0ZSBdLFxuICogICAgIHJlbmRlcigpIHtcbiAqICAgICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAqXG4gKiAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSgnYWJvdXQnKSlcbiAqICAgICAgICAgY2xhc3NOYW1lICs9ICcgaXMtYWN0aXZlJztcbiAqXG4gKiAgICAgICByZXR1cm4gUmVhY3QuRE9NLmEoeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICovXG52YXIgU3RhdGUgPSB7XG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBQcm9wVHlwZXMucm91dGVyLmlzUmVxdWlyZWRcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBVUkwgcGF0aC5cbiAgICovXG4gIGdldFBhdGg6IGZ1bmN0aW9uIGdldFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFBhdGgoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBVUkwgcGF0aCB3aXRob3V0IHRoZSBxdWVyeSBzdHJpbmcuXG4gICAqL1xuICBnZXRQYXRobmFtZTogZnVuY3Rpb24gZ2V0UGF0aG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFBhdGhuYW1lKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHRoZSBVUkwgcGFyYW1zIHRoYXQgYXJlIGN1cnJlbnRseSBhY3RpdmUuXG4gICAqL1xuICBnZXRQYXJhbXM6IGZ1bmN0aW9uIGdldFBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UGFyYW1zKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHRoZSBxdWVyeSBwYXJhbXMgdGhhdCBhcmUgY3VycmVudGx5IGFjdGl2ZS5cbiAgICovXG4gIGdldFF1ZXJ5OiBmdW5jdGlvbiBnZXRRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UXVlcnkoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgcm91dGVzIHRoYXQgYXJlIGN1cnJlbnRseSBhY3RpdmUuXG4gICAqL1xuICBnZXRSb3V0ZXM6IGZ1bmN0aW9uIGdldFJvdXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50Um91dGVzKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byBkZXRlcm1pbmUgaWYgYSBnaXZlbiByb3V0ZSwgcGFyYW1zLCBhbmQgcXVlcnlcbiAgICogYXJlIGFjdGl2ZS5cbiAgICovXG4gIGlzQWN0aXZlOiBmdW5jdGlvbiBpc0FjdGl2ZSh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmlzQWN0aXZlKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlOyIsIi8qIGpzaGludCAtVzA1OCAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWxsYXRpb24gPSByZXF1aXJlKCcuL0NhbmNlbGxhdGlvbicpO1xudmFyIFJlZGlyZWN0ID0gcmVxdWlyZSgnLi9SZWRpcmVjdCcpO1xuXG4vKipcbiAqIEVuY2Fwc3VsYXRlcyBhIHRyYW5zaXRpb24gdG8gYSBnaXZlbiBwYXRoLlxuICpcbiAqIFRoZSB3aWxsVHJhbnNpdGlvblRvIGFuZCB3aWxsVHJhbnNpdGlvbkZyb20gaGFuZGxlcnMgcmVjZWl2ZVxuICogYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBhcyB0aGVpciBmaXJzdCBhcmd1bWVudC5cbiAqL1xuZnVuY3Rpb24gVHJhbnNpdGlvbihwYXRoLCByZXRyeSkge1xuICB0aGlzLnBhdGggPSBwYXRoO1xuICB0aGlzLmFib3J0UmVhc29uID0gbnVsbDtcbiAgLy8gVE9ETzogQ2hhbmdlIHRoaXMgdG8gcm91dGVyLnJldHJ5VHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICB0aGlzLnJldHJ5ID0gcmV0cnkuYmluZCh0aGlzKTtcbn1cblxuVHJhbnNpdGlvbi5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gIGlmICh0aGlzLmFib3J0UmVhc29uID09IG51bGwpIHRoaXMuYWJvcnRSZWFzb24gPSByZWFzb24gfHwgJ0FCT1JUJztcbn07XG5cblRyYW5zaXRpb24ucHJvdG90eXBlLnJlZGlyZWN0ID0gZnVuY3Rpb24gKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gIHRoaXMuYWJvcnQobmV3IFJlZGlyZWN0KHRvLCBwYXJhbXMsIHF1ZXJ5KSk7XG59O1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYWJvcnQobmV3IENhbmNlbGxhdGlvbigpKTtcbn07XG5cblRyYW5zaXRpb24uZnJvbSA9IGZ1bmN0aW9uICh0cmFuc2l0aW9uLCByb3V0ZXMsIGNvbXBvbmVudHMsIGNhbGxiYWNrKSB7XG4gIHJvdXRlcy5yZWR1Y2UoZnVuY3Rpb24gKGNhbGxiYWNrLCByb3V0ZSwgaW5kZXgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IgfHwgdHJhbnNpdGlvbi5hYm9ydFJlYXNvbikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKHJvdXRlLm9uTGVhdmUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZS5vbkxlYXZlKHRyYW5zaXRpb24sIGNvbXBvbmVudHNbaW5kZXhdLCBjYWxsYmFjayk7XG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBjYWxsYmFjayBpbiB0aGUgYXJndW1lbnQgbGlzdCwgY2FsbCBpdCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgIGlmIChyb3V0ZS5vbkxlYXZlLmxlbmd0aCA8IDMpIGNhbGxiYWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBjYWxsYmFjaykoKTtcbn07XG5cblRyYW5zaXRpb24udG8gPSBmdW5jdGlvbiAodHJhbnNpdGlvbiwgcm91dGVzLCBwYXJhbXMsIHF1ZXJ5LCBjYWxsYmFjaykge1xuICByb3V0ZXMucmVkdWNlUmlnaHQoZnVuY3Rpb24gKGNhbGxiYWNrLCByb3V0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciB8fCB0cmFuc2l0aW9uLmFib3J0UmVhc29uKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAocm91dGUub25FbnRlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlLm9uRW50ZXIodHJhbnNpdGlvbiwgcGFyYW1zLCBxdWVyeSwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gY2FsbGJhY2sgaW4gdGhlIGFyZ3VtZW50IGxpc3QsIGNhbGwgaXQgYXV0b21hdGljYWxseS5cbiAgICAgICAgICBpZiAocm91dGUub25FbnRlci5sZW5ndGggPCA0KSBjYWxsYmFjaygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY2FsbGJhY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgY2FsbGJhY2spKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zaXRpb247IiwiLyoqXG4gKiBBY3Rpb25zIHRoYXQgbW9kaWZ5IHRoZSBVUkwuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIExvY2F0aW9uQWN0aW9ucyA9IHtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIGEgbmV3IGxvY2F0aW9uIGlzIGJlaW5nIHB1c2hlZCB0byB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICovXG4gIFBVU0g6ICdwdXNoJyxcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBjdXJyZW50IGxvY2F0aW9uIHNob3VsZCBiZSByZXBsYWNlZC5cbiAgICovXG4gIFJFUExBQ0U6ICdyZXBsYWNlJyxcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBtb3N0IHJlY2VudCBlbnRyeSBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgKi9cbiAgUE9QOiAncG9wJ1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvY2F0aW9uQWN0aW9uczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucycpO1xuXG4vKipcbiAqIEEgc2Nyb2xsIGJlaGF2aW9yIHRoYXQgYXR0ZW1wdHMgdG8gaW1pdGF0ZSB0aGUgZGVmYXVsdCBiZWhhdmlvclxuICogb2YgbW9kZXJuIGJyb3dzZXJzLlxuICovXG52YXIgSW1pdGF0ZUJyb3dzZXJCZWhhdmlvciA9IHtcblxuICB1cGRhdGVTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24gdXBkYXRlU2Nyb2xsUG9zaXRpb24ocG9zaXRpb24sIGFjdGlvblR5cGUpIHtcbiAgICBzd2l0Y2ggKGFjdGlvblR5cGUpIHtcbiAgICAgIGNhc2UgTG9jYXRpb25BY3Rpb25zLlBVU0g6XG4gICAgICBjYXNlIExvY2F0aW9uQWN0aW9ucy5SRVBMQUNFOlxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2NhdGlvbkFjdGlvbnMuUE9QOlxuICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEltaXRhdGVCcm93c2VyQmVoYXZpb3I7IiwiLyoqXG4gKiBBIHNjcm9sbCBiZWhhdmlvciB0aGF0IGFsd2F5cyBzY3JvbGxzIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiAqIGFmdGVyIGEgdHJhbnNpdGlvbi5cbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBTY3JvbGxUb1RvcEJlaGF2aW9yID0ge1xuXG4gIHVwZGF0ZVNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbiB1cGRhdGVTY3JvbGxQb3NpdGlvbigpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGxUb1RvcEJlaGF2aW9yOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgbmVjZXNzYXJ5IHRvIGdldCBhcm91bmQgYSBjb250ZXh0IHdhcm5pbmdcbiAqIHByZXNlbnQgaW4gUmVhY3QgMC4xMy4wLiBJdCBzb3ZsZXMgdGhpcyBieSBwcm92aWRpbmcgYSBzZXBhcmF0aW9uXG4gKiBiZXR3ZWVuIHRoZSBcIm93bmVyXCIgYW5kIFwicGFyZW50XCIgY29udGV4dHMuXG4gKi9cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIENvbnRleHRXcmFwcGVyID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIENvbnRleHRXcmFwcGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250ZXh0V3JhcHBlcik7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKENvbnRleHRXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoQ29udGV4dFdyYXBwZXIsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbnRleHRXcmFwcGVyO1xufSkoUmVhY3QuQ29tcG9uZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250ZXh0V3JhcHBlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG52YXIgUm91dGVIYW5kbGVyID0gcmVxdWlyZSgnLi9Sb3V0ZUhhbmRsZXInKTtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxuLyoqXG4gKiBBIDxEZWZhdWx0Um91dGU+IGNvbXBvbmVudCBpcyBhIHNwZWNpYWwga2luZCBvZiA8Um91dGU+IHRoYXRcbiAqIHJlbmRlcnMgd2hlbiBpdHMgcGFyZW50IG1hdGNoZXMgYnV0IG5vbmUgb2YgaXRzIHNpYmxpbmdzIGRvLlxuICogT25seSBvbmUgc3VjaCByb3V0ZSBtYXkgYmUgdXNlZCBhdCBhbnkgZ2l2ZW4gbGV2ZWwgaW4gdGhlXG4gKiByb3V0ZSBoaWVyYXJjaHkuXG4gKi9cblxudmFyIERlZmF1bHRSb3V0ZSA9IChmdW5jdGlvbiAoX1JvdXRlKSB7XG4gIGZ1bmN0aW9uIERlZmF1bHRSb3V0ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGVmYXVsdFJvdXRlKTtcblxuICAgIGlmIChfUm91dGUgIT0gbnVsbCkge1xuICAgICAgX1JvdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKERlZmF1bHRSb3V0ZSwgX1JvdXRlKTtcblxuICByZXR1cm4gRGVmYXVsdFJvdXRlO1xufSkoUm91dGUpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cbkRlZmF1bHRSb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhdGg6IFByb3BUeXBlcy5mYWxzeSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mYWxzeSxcbiAgaGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuRGVmYXVsdFJvdXRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGFuZGxlcjogUm91dGVIYW5kbGVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmF1bHRSb3V0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIGlzTGVmdENsaWNrRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxuLyoqXG4gKiA8TGluaz4gY29tcG9uZW50cyBhcmUgdXNlZCB0byBjcmVhdGUgYW4gPGE+IGVsZW1lbnQgdGhhdCBsaW5rcyB0byBhIHJvdXRlLlxuICogV2hlbiB0aGF0IHJvdXRlIGlzIGFjdGl2ZSwgdGhlIGxpbmsgZ2V0cyBhbiBcImFjdGl2ZVwiIGNsYXNzIG5hbWUgKG9yIHRoZVxuICogdmFsdWUgb2YgaXRzIGBhY3RpdmVDbGFzc05hbWVgIHByb3ApLlxuICpcbiAqIEZvciBleGFtcGxlLCBhc3N1bWluZyB5b3UgaGF2ZSB0aGUgZm9sbG93aW5nIHJvdXRlOlxuICpcbiAqICAgPFJvdXRlIG5hbWU9XCJzaG93UG9zdFwiIHBhdGg9XCIvcG9zdHMvOnBvc3RJRFwiIGhhbmRsZXI9e1Bvc3R9Lz5cbiAqXG4gKiBZb3UgY291bGQgdXNlIHRoZSBmb2xsb3dpbmcgY29tcG9uZW50IHRvIGxpbmsgdG8gdGhhdCByb3V0ZTpcbiAqXG4gKiAgIDxMaW5rIHRvPVwic2hvd1Bvc3RcIiBwYXJhbXM9e3sgcG9zdElEOiBcIjEyM1wiIH19IC8+XG4gKlxuICogSW4gYWRkaXRpb24gdG8gcGFyYW1zLCBsaW5rcyBtYXkgcGFzcyBhbG9uZyBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyc1xuICogdXNpbmcgdGhlIGBxdWVyeWAgcHJvcC5cbiAqXG4gKiAgIDxMaW5rIHRvPVwic2hvd1Bvc3RcIiBwYXJhbXM9e3sgcG9zdElEOiBcIjEyM1wiIH19IHF1ZXJ5PXt7IHNob3c6dHJ1ZSB9fS8+XG4gKi9cblxudmFyIExpbmsgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gTGluaygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGluayk7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKExpbmssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhMaW5rLCBbe1xuICAgIGtleTogJ2hhbmRsZUNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICAgIHZhciBhbGxvd1RyYW5zaXRpb24gPSB0cnVlO1xuICAgICAgdmFyIGNsaWNrUmVzdWx0O1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSBjbGlja1Jlc3VsdCA9IHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cbiAgICAgIGlmIChpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHx8ICFpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9aWYgKGNsaWNrUmVzdWx0ID09PSBmYWxzZSB8fCBldmVudC5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlKSBhbGxvd1RyYW5zaXRpb24gPSBmYWxzZTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGFsbG93VHJhbnNpdGlvbikgdGhpcy5jb250ZXh0LnJvdXRlci50cmFuc2l0aW9uVG8odGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5wYXJhbXMsIHRoaXMucHJvcHMucXVlcnkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEhyZWYnLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIFwiaHJlZlwiIGF0dHJpYnV0ZSB0byB1c2Ugb24gdGhlIERPTSBlbGVtZW50LlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRIcmVmKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIubWFrZUhyZWYodGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5wYXJhbXMsIHRoaXMucHJvcHMucXVlcnkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENsYXNzTmFtZScsXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgXCJjbGFzc1wiIGF0dHJpYnV0ZSB0byB1c2Ugb24gdGhlIERPTSBlbGVtZW50LCB3aGljaCBjb250YWluc1xuICAgICAqIHRoZSB2YWx1ZSBvZiB0aGUgYWN0aXZlQ2xhc3NOYW1lIHByb3BlcnR5IHdoZW4gdGhpcyA8TGluaz4gaXMgYWN0aXZlLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbGFzc05hbWUoKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XG5cbiAgICAgIGlmICh0aGlzLmdldEFjdGl2ZVN0YXRlKCkpIGNsYXNzTmFtZSArPSAnICcgKyB0aGlzLnByb3BzLmFjdGl2ZUNsYXNzTmFtZTtcblxuICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRBY3RpdmVTdGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFjdGl2ZVN0YXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuaXNBY3RpdmUodGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5wYXJhbXMsIHRoaXMucHJvcHMucXVlcnkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBwcm9wcyA9IGFzc2lnbih7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBocmVmOiB0aGlzLmdldEhyZWYoKSxcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmdldENsYXNzTmFtZSgpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocHJvcHMuYWN0aXZlU3R5bGUgJiYgdGhpcy5nZXRBY3RpdmVTdGF0ZSgpKSBwcm9wcy5zdHlsZSA9IHByb3BzLmFjdGl2ZVN0eWxlO1xuXG4gICAgICByZXR1cm4gUmVhY3QuRE9NLmEocHJvcHMsIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMaW5rO1xufSkoUmVhY3QuQ29tcG9uZW50KTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5MaW5rLmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBQcm9wVHlwZXMucm91dGVyLmlzUmVxdWlyZWRcbn07XG5cbkxpbmsucHJvcFR5cGVzID0ge1xuICBhY3RpdmVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdG86IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5yb3V0ZV0pLmlzUmVxdWlyZWQsXG4gIHBhcmFtczogUHJvcFR5cGVzLm9iamVjdCxcbiAgcXVlcnk6IFByb3BUeXBlcy5vYmplY3QsXG4gIGFjdGl2ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuTGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGl2ZUNsYXNzTmFtZTogJ2FjdGl2ZScsXG4gIGNsYXNzTmFtZTogJydcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluazsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG52YXIgUm91dGVIYW5kbGVyID0gcmVxdWlyZSgnLi9Sb3V0ZUhhbmRsZXInKTtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxuLyoqXG4gKiBBIDxOb3RGb3VuZFJvdXRlPiBpcyBhIHNwZWNpYWwga2luZCBvZiA8Um91dGU+IHRoYXRcbiAqIHJlbmRlcnMgd2hlbiB0aGUgYmVnaW5uaW5nIG9mIGl0cyBwYXJlbnQncyBwYXRoIG1hdGNoZXNcbiAqIGJ1dCBub25lIG9mIGl0cyBzaWJsaW5ncyBkbywgaW5jbHVkaW5nIGFueSA8RGVmYXVsdFJvdXRlPi5cbiAqIE9ubHkgb25lIHN1Y2ggcm91dGUgbWF5IGJlIHVzZWQgYXQgYW55IGdpdmVuIGxldmVsIGluIHRoZVxuICogcm91dGUgaGllcmFyY2h5LlxuICovXG5cbnZhciBOb3RGb3VuZFJvdXRlID0gKGZ1bmN0aW9uIChfUm91dGUpIHtcbiAgZnVuY3Rpb24gTm90Rm91bmRSb3V0ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90Rm91bmRSb3V0ZSk7XG5cbiAgICBpZiAoX1JvdXRlICE9IG51bGwpIHtcbiAgICAgIF9Sb3V0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhOb3RGb3VuZFJvdXRlLCBfUm91dGUpO1xuXG4gIHJldHVybiBOb3RGb3VuZFJvdXRlO1xufSkoUm91dGUpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cbk5vdEZvdW5kUm91dGUucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYXRoOiBQcm9wVHlwZXMuZmFsc3ksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZmFsc3ksXG4gIGhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbk5vdEZvdW5kUm91dGUuZGVmYXVsdFByb3BzID0ge1xuICBoYW5kbGVyOiBSb3V0ZUhhbmRsZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTm90Rm91bmRSb3V0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG5cbi8qKlxuICogQSA8UmVkaXJlY3Q+IGNvbXBvbmVudCBpcyBhIHNwZWNpYWwga2luZCBvZiA8Um91dGU+IHRoYXQgYWx3YXlzXG4gKiByZWRpcmVjdHMgdG8gYW5vdGhlciByb3V0ZSB3aGVuIGl0IG1hdGNoZXMuXG4gKi9cblxudmFyIFJlZGlyZWN0ID0gKGZ1bmN0aW9uIChfUm91dGUpIHtcbiAgZnVuY3Rpb24gUmVkaXJlY3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlZGlyZWN0KTtcblxuICAgIGlmIChfUm91dGUgIT0gbnVsbCkge1xuICAgICAgX1JvdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKFJlZGlyZWN0LCBfUm91dGUpO1xuXG4gIHJldHVybiBSZWRpcmVjdDtcbn0pKFJvdXRlKTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5SZWRpcmVjdC5wcm9wVHlwZXMgPSB7XG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZyb206IFByb3BUeXBlcy5zdHJpbmcsIC8vIEFsaWFzIGZvciBwYXRoLlxuICB0bzogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGFuZGxlcjogUHJvcFR5cGVzLmZhbHN5XG59O1xuXG4vLyBSZWRpcmVjdHMgc2hvdWxkIG5vdCBoYXZlIGEgZGVmYXVsdCBoYW5kbGVyXG5SZWRpcmVjdC5kZWZhdWx0UHJvcHMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWRpcmVjdDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcbnZhciBSb3V0ZUhhbmRsZXIgPSByZXF1aXJlKCcuL1JvdXRlSGFuZGxlcicpO1xuXG4vKipcbiAqIDxSb3V0ZT4gY29tcG9uZW50cyBzcGVjaWZ5IGNvbXBvbmVudHMgdGhhdCBhcmUgcmVuZGVyZWQgdG8gdGhlIHBhZ2Ugd2hlbiB0aGVcbiAqIFVSTCBtYXRjaGVzIGEgZ2l2ZW4gcGF0dGVybi5cbiAqXG4gKiBSb3V0ZXMgYXJlIGFycmFuZ2VkIGluIGEgbmVzdGVkIHRyZWUgc3RydWN0dXJlLiBXaGVuIGEgbmV3IFVSTCBpcyByZXF1ZXN0ZWQsXG4gKiB0aGUgdHJlZSBpcyBzZWFyY2hlZCBkZXB0aC1maXJzdCB0byBmaW5kIGEgcm91dGUgd2hvc2UgcGF0aCBtYXRjaGVzIHRoZSBVUkwuXG4gKiBXaGVuIG9uZSBpcyBmb3VuZCwgYWxsIHJvdXRlcyBpbiB0aGUgdHJlZSB0aGF0IGxlYWQgdG8gaXQgYXJlIGNvbnNpZGVyZWRcbiAqIFwiYWN0aXZlXCIgYW5kIHRoZWlyIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIGludG8gdGhlIERPTSwgbmVzdGVkIGluIHRoZSBzYW1lXG4gKiBvcmRlciBhcyB0aGV5IGFyZSBpbiB0aGUgdHJlZS5cbiAqXG4gKiBUaGUgcHJlZmVycmVkIHdheSB0byBjb25maWd1cmUgYSByb3V0ZXIgaXMgdXNpbmcgSlNYLiBUaGUgWE1MLWxpa2Ugc3ludGF4IGlzXG4gKiBhIGdyZWF0IHdheSB0byB2aXN1YWxpemUgaG93IHJvdXRlcyBhcmUgbGFpZCBvdXQgaW4gYW4gYXBwbGljYXRpb24uXG4gKlxuICogICB2YXIgcm91dGVzID0gW1xuICogICAgIDxSb3V0ZSBoYW5kbGVyPXtBcHB9PlxuICogICAgICAgPFJvdXRlIG5hbWU9XCJsb2dpblwiIGhhbmRsZXI9e0xvZ2lufS8+XG4gKiAgICAgICA8Um91dGUgbmFtZT1cImxvZ291dFwiIGhhbmRsZXI9e0xvZ291dH0vPlxuICogICAgICAgPFJvdXRlIG5hbWU9XCJhYm91dFwiIGhhbmRsZXI9e0Fib3V0fS8+XG4gKiAgICAgPC9Sb3V0ZT5cbiAqICAgXTtcbiAqICAgXG4gKiAgIFJvdXRlci5ydW4ocm91dGVzLCBmdW5jdGlvbiAoSGFuZGxlcikge1xuICogICAgIFJlYWN0LnJlbmRlcig8SGFuZGxlci8+LCBkb2N1bWVudC5ib2R5KTtcbiAqICAgfSk7XG4gKlxuICogSGFuZGxlcnMgZm9yIFJvdXRlIGNvbXBvbmVudHMgdGhhdCBjb250YWluIGNoaWxkcmVuIGNhbiByZW5kZXIgdGhlaXIgYWN0aXZlXG4gKiBjaGlsZCByb3V0ZSB1c2luZyBhIDxSb3V0ZUhhbmRsZXI+IGVsZW1lbnQuXG4gKlxuICogICB2YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICogICAgICAgcmV0dXJuIChcbiAqICAgICAgICAgPGRpdiBjbGFzcz1cImFwcGxpY2F0aW9uXCI+XG4gKiAgICAgICAgICAgPFJvdXRlSGFuZGxlci8+XG4gKiAgICAgICAgIDwvZGl2PlxuICogICAgICAgKTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIElmIG5vIGhhbmRsZXIgaXMgcHJvdmlkZWQgZm9yIHRoZSByb3V0ZSwgaXQgd2lsbCByZW5kZXIgYSBtYXRjaGVkIGNoaWxkIHJvdXRlLlxuICovXG5cbnZhciBSb3V0ZSA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBSb3V0ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGUpO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhSb3V0ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKFJvdXRlLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGludmFyaWFudChmYWxzZSwgJyVzIGVsZW1lbnRzIGFyZSBmb3Igcm91dGVyIGNvbmZpZ3VyYXRpb24gb25seSBhbmQgc2hvdWxkIG5vdCBiZSByZW5kZXJlZCcsIHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvdXRlO1xufSkoUmVhY3QuQ29tcG9uZW50KTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5Sb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLFxuICBpZ25vcmVTY3JvbGxCZWhhdmlvcjogUHJvcFR5cGVzLmJvb2xcbn07XG5cblJvdXRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGFuZGxlcjogUm91dGVIYW5kbGVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ29udGV4dFdyYXBwZXIgPSByZXF1aXJlKCcuL0NvbnRleHRXcmFwcGVyJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgncmVhY3QvbGliL09iamVjdC5hc3NpZ24nKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcblxudmFyIFJFRl9OQU1FID0gJ19fcm91dGVIYW5kbGVyX18nO1xuXG4vKipcbiAqIEEgPFJvdXRlSGFuZGxlcj4gY29tcG9uZW50IHJlbmRlcnMgdGhlIGFjdGl2ZSBjaGlsZCByb3V0ZSBoYW5kbGVyXG4gKiB3aGVuIHJvdXRlcyBhcmUgbmVzdGVkLlxuICovXG5cbnZhciBSb3V0ZUhhbmRsZXIgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gUm91dGVIYW5kbGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZUhhbmRsZXIpO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhSb3V0ZUhhbmRsZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhSb3V0ZUhhbmRsZXIsIFt7XG4gICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGVEZXB0aDogdGhpcy5jb250ZXh0LnJvdXRlRGVwdGggKyAxXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLl91cGRhdGVSb3V0ZUNvbXBvbmVudCh0aGlzLnJlZnNbUkVGX05BTUVdKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLl91cGRhdGVSb3V0ZUNvbXBvbmVudCh0aGlzLnJlZnNbUkVGX05BTUVdKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5fdXBkYXRlUm91dGVDb21wb25lbnQobnVsbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3VwZGF0ZVJvdXRlQ29tcG9uZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZVJvdXRlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5zZXRSb3V0ZUNvbXBvbmVudEF0RGVwdGgodGhpcy5nZXRSb3V0ZURlcHRoKCksIGNvbXBvbmVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Um91dGVEZXB0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvdXRlRGVwdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlRGVwdGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlQ2hpbGRSb3V0ZUhhbmRsZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDaGlsZFJvdXRlSGFuZGxlcihwcm9wcykge1xuICAgICAgdmFyIHJvdXRlID0gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRSb3V0ZUF0RGVwdGgodGhpcy5nZXRSb3V0ZURlcHRoKCkpO1xuXG4gICAgICBpZiAocm91dGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH12YXIgY2hpbGRQcm9wcyA9IGFzc2lnbih7fSwgcHJvcHMgfHwgdGhpcy5wcm9wcywge1xuICAgICAgICByZWY6IFJFRl9OQU1FLFxuICAgICAgICBwYXJhbXM6IHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFBhcmFtcygpLFxuICAgICAgICBxdWVyeTogdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UXVlcnkoKVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHJvdXRlLmhhbmRsZXIsIGNoaWxkUHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBoYW5kbGVyID0gdGhpcy5jcmVhdGVDaGlsZFJvdXRlSGFuZGxlcigpO1xuICAgICAgLy8gPHNjcmlwdC8+IGZvciB0aGluZ3MgbGlrZSA8Q1NTVHJhbnNpdGlvbkdyb3VwLz4gdGhhdCBkb24ndCBsaWtlIG51bGxcbiAgICAgIHJldHVybiBoYW5kbGVyID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQ29udGV4dFdyYXBwZXIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGhhbmRsZXJcbiAgICAgICkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnLCBudWxsKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUm91dGVIYW5kbGVyO1xufSkoUmVhY3QuQ29tcG9uZW50KTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5Sb3V0ZUhhbmRsZXIuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZURlcHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHJvdXRlcjogUHJvcFR5cGVzLnJvdXRlci5pc1JlcXVpcmVkXG59O1xuXG5Sb3V0ZUhhbmRsZXIuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlRGVwdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZUhhbmRsZXI7IiwiLyoganNoaW50IC1XMDU4ICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi93YXJuaW5nJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpLmNhblVzZURPTTtcbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zJyk7XG52YXIgSW1pdGF0ZUJyb3dzZXJCZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3JzL0ltaXRhdGVCcm93c2VyQmVoYXZpb3InKTtcbnZhciBIYXNoTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9IYXNoTG9jYXRpb24nKTtcbnZhciBIaXN0b3J5TG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9IaXN0b3J5TG9jYXRpb24nKTtcbnZhciBSZWZyZXNoTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9SZWZyZXNoTG9jYXRpb24nKTtcbnZhciBTdGF0aWNMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL1N0YXRpY0xvY2F0aW9uJyk7XG52YXIgU2Nyb2xsSGlzdG9yeSA9IHJlcXVpcmUoJy4vU2Nyb2xsSGlzdG9yeScpO1xudmFyIGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbicpO1xudmFyIGlzUmVhY3RDaGlsZHJlbiA9IHJlcXVpcmUoJy4vaXNSZWFjdENoaWxkcmVuJyk7XG52YXIgVHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvbicpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG52YXIgUmVkaXJlY3QgPSByZXF1aXJlKCcuL1JlZGlyZWN0Jyk7XG52YXIgSGlzdG9yeSA9IHJlcXVpcmUoJy4vSGlzdG9yeScpO1xudmFyIENhbmNlbGxhdGlvbiA9IHJlcXVpcmUoJy4vQ2FuY2VsbGF0aW9uJyk7XG52YXIgTWF0Y2ggPSByZXF1aXJlKCcuL01hdGNoJyk7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG52YXIgc3VwcG9ydHNIaXN0b3J5ID0gcmVxdWlyZSgnLi9zdXBwb3J0c0hpc3RvcnknKTtcbnZhciBQYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGxvY2F0aW9uIGZvciBuZXcgcm91dGVycy5cbiAqL1xudmFyIERFRkFVTFRfTE9DQVRJT04gPSBjYW5Vc2VET00gPyBIYXNoTG9jYXRpb24gOiAnLyc7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgc2Nyb2xsIGJlaGF2aW9yIGZvciBuZXcgcm91dGVycy5cbiAqL1xudmFyIERFRkFVTFRfU0NST0xMX0JFSEFWSU9SID0gY2FuVXNlRE9NID8gSW1pdGF0ZUJyb3dzZXJCZWhhdmlvciA6IG51bGw7XG5cbmZ1bmN0aW9uIGhhc1Byb3BlcnRpZXMob2JqZWN0LCBwcm9wZXJ0aWVzKSB7XG4gIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1yZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFzTWF0Y2gocm91dGVzLCByb3V0ZSwgcHJldlBhcmFtcywgbmV4dFBhcmFtcywgcHJldlF1ZXJ5LCBuZXh0UXVlcnkpIHtcbiAgcmV0dXJuIHJvdXRlcy5zb21lKGZ1bmN0aW9uIChyKSB7XG4gICAgaWYgKHIgIT09IHJvdXRlKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgcGFyYW1OYW1lcyA9IHJvdXRlLnBhcmFtTmFtZXM7XG4gICAgdmFyIHBhcmFtTmFtZTtcblxuICAgIC8vIEVuc3VyZSB0aGF0IGFsbCBwYXJhbXMgdGhlIHJvdXRlIGNhcmVzIGFib3V0IGRpZCBub3QgY2hhbmdlLlxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXJhbU5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBwYXJhbU5hbWUgPSBwYXJhbU5hbWVzW2ldO1xuXG4gICAgICBpZiAobmV4dFBhcmFtc1twYXJhbU5hbWVdICE9PSBwcmV2UGFyYW1zW3BhcmFtTmFtZV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgdGhlIHF1ZXJ5IGhhc24ndCBjaGFuZ2VkLlxuICAgIHJldHVybiBoYXNQcm9wZXJ0aWVzKHByZXZRdWVyeSwgbmV4dFF1ZXJ5KSAmJiBoYXNQcm9wZXJ0aWVzKG5leHRRdWVyeSwgcHJldlF1ZXJ5KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFJvdXRlc1RvTmFtZWRSb3V0ZXMocm91dGVzLCBuYW1lZFJvdXRlcykge1xuICB2YXIgcm91dGU7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSByb3V0ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICByb3V0ZSA9IHJvdXRlc1tpXTtcblxuICAgIGlmIChyb3V0ZS5uYW1lKSB7XG4gICAgICBpbnZhcmlhbnQobmFtZWRSb3V0ZXNbcm91dGUubmFtZV0gPT0gbnVsbCwgJ1lvdSBtYXkgbm90IGhhdmUgbW9yZSB0aGFuIG9uZSByb3V0ZSBuYW1lZCBcIiVzXCInLCByb3V0ZS5uYW1lKTtcblxuICAgICAgbmFtZWRSb3V0ZXNbcm91dGUubmFtZV0gPSByb3V0ZTtcbiAgICB9XG5cbiAgICBpZiAocm91dGUuY2hpbGRSb3V0ZXMpIGFkZFJvdXRlc1RvTmFtZWRSb3V0ZXMocm91dGUuY2hpbGRSb3V0ZXMsIG5hbWVkUm91dGVzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByb3V0ZUlzQWN0aXZlKGFjdGl2ZVJvdXRlcywgcm91dGVOYW1lKSB7XG4gIHJldHVybiBhY3RpdmVSb3V0ZXMuc29tZShmdW5jdGlvbiAocm91dGUpIHtcbiAgICByZXR1cm4gcm91dGUubmFtZSA9PT0gcm91dGVOYW1lO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyYW1zQXJlQWN0aXZlKGFjdGl2ZVBhcmFtcywgcGFyYW1zKSB7XG4gIGZvciAodmFyIHByb3BlcnR5IGluIHBhcmFtcykgaWYgKFN0cmluZyhhY3RpdmVQYXJhbXNbcHJvcGVydHldKSAhPT0gU3RyaW5nKHBhcmFtc1twcm9wZXJ0eV0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5SXNBY3RpdmUoYWN0aXZlUXVlcnksIHF1ZXJ5KSB7XG4gIGZvciAodmFyIHByb3BlcnR5IGluIHF1ZXJ5KSBpZiAoU3RyaW5nKGFjdGl2ZVF1ZXJ5W3Byb3BlcnR5XSkgIT09IFN0cmluZyhxdWVyeVtwcm9wZXJ0eV0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyByb3V0ZXIgdXNpbmcgdGhlIGdpdmVuIG9wdGlvbnMuIEEgcm91dGVyXG4gKiBpcyBhIFJlYWN0Q29tcG9uZW50IGNsYXNzIHRoYXQga25vd3MgaG93IHRvIHJlYWN0IHRvIGNoYW5nZXMgaW4gdGhlXG4gKiBVUkwgYW5kIGtlZXAgdGhlIGNvbnRlbnRzIG9mIHRoZSBwYWdlIGluIHN5bmMuXG4gKlxuICogT3B0aW9ucyBtYXkgYmUgYW55IG9mIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogLSByb3V0ZXMgICAgICAgICAgIChyZXF1aXJlZCkgVGhlIHJvdXRlIGNvbmZpZ1xuICogLSBsb2NhdGlvbiAgICAgICAgIFRoZSBsb2NhdGlvbiB0byB1c2UuIERlZmF1bHRzIHRvIEhhc2hMb2NhdGlvbiB3aGVuXG4gKiAgICAgICAgICAgICAgICAgICAgdGhlIERPTSBpcyBhdmFpbGFibGUsIFwiL1wiIG90aGVyd2lzZVxuICogLSBzY3JvbGxCZWhhdmlvciAgIFRoZSBzY3JvbGwgYmVoYXZpb3IgdG8gdXNlLiBEZWZhdWx0cyB0byBJbWl0YXRlQnJvd3NlckJlaGF2aW9yXG4gKiAgICAgICAgICAgICAgICAgICAgd2hlbiB0aGUgRE9NIGlzIGF2YWlsYWJsZSwgbnVsbCBvdGhlcndpc2VcbiAqIC0gb25FcnJvciAgICAgICAgICBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byBoYW5kbGUgZXJyb3JzXG4gKiAtIG9uQWJvcnQgICAgICAgICAgQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gaGFuZGxlIGFib3J0ZWQgdHJhbnNpdGlvbnNcbiAqXG4gKiBXaGVuIHJlbmRlcmluZyBpbiBhIHNlcnZlci1zaWRlIGVudmlyb25tZW50LCB0aGUgbG9jYXRpb24gc2hvdWxkIHNpbXBseVxuICogYmUgdGhlIFVSTCBwYXRoIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QsIGluY2x1ZGluZyB0aGUgcXVlcnkgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaXNSZWFjdENoaWxkcmVuKG9wdGlvbnMpKSBvcHRpb25zID0geyByb3V0ZXM6IG9wdGlvbnMgfTtcblxuICB2YXIgbW91bnRlZENvbXBvbmVudHMgPSBbXTtcbiAgdmFyIGxvY2F0aW9uID0gb3B0aW9ucy5sb2NhdGlvbiB8fCBERUZBVUxUX0xPQ0FUSU9OO1xuICB2YXIgc2Nyb2xsQmVoYXZpb3IgPSBvcHRpb25zLnNjcm9sbEJlaGF2aW9yIHx8IERFRkFVTFRfU0NST0xMX0JFSEFWSU9SO1xuICB2YXIgc3RhdGUgPSB7fTtcbiAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuICB2YXIgcGVuZGluZ1RyYW5zaXRpb24gPSBudWxsO1xuICB2YXIgZGlzcGF0Y2hIYW5kbGVyID0gbnVsbDtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBuZXcgU3RhdGljTG9jYXRpb24obG9jYXRpb24pO1xuXG4gIGlmIChsb2NhdGlvbiBpbnN0YW5jZW9mIFN0YXRpY0xvY2F0aW9uKSB7XG4gICAgd2FybmluZyghY2FuVXNlRE9NIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcsICdZb3Ugc2hvdWxkIG5vdCB1c2UgYSBzdGF0aWMgbG9jYXRpb24gaW4gYSBET00gZW52aXJvbm1lbnQgYmVjYXVzZSAnICsgJ3RoZSByb3V0ZXIgd2lsbCBub3QgYmUga2VwdCBpbiBzeW5jIHdpdGggdGhlIGN1cnJlbnQgVVJMJyk7XG4gIH0gZWxzZSB7XG4gICAgaW52YXJpYW50KGNhblVzZURPTSB8fCBsb2NhdGlvbi5uZWVkc0RPTSA9PT0gZmFsc2UsICdZb3UgY2Fubm90IHVzZSAlcyB3aXRob3V0IGEgRE9NJywgbG9jYXRpb24pO1xuICB9XG5cbiAgLy8gQXV0b21hdGljYWxseSBmYWxsIGJhY2sgdG8gZnVsbCBwYWdlIHJlZnJlc2hlcyBpblxuICAvLyBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIEhUTUwgaGlzdG9yeSBBUEkuXG4gIGlmIChsb2NhdGlvbiA9PT0gSGlzdG9yeUxvY2F0aW9uICYmICFzdXBwb3J0c0hpc3RvcnkoKSkgbG9jYXRpb24gPSBSZWZyZXNoTG9jYXRpb247XG5cbiAgdmFyIFJvdXRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGRpc3BsYXlOYW1lOiAnUm91dGVyJyxcblxuICAgIHN0YXRpY3M6IHtcblxuICAgICAgaXNSdW5uaW5nOiBmYWxzZSxcblxuICAgICAgY2FuY2VsUGVuZGluZ1RyYW5zaXRpb246IGZ1bmN0aW9uIGNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uKCkge1xuICAgICAgICBpZiAocGVuZGluZ1RyYW5zaXRpb24pIHtcbiAgICAgICAgICBwZW5kaW5nVHJhbnNpdGlvbi5jYW5jZWwoKTtcbiAgICAgICAgICBwZW5kaW5nVHJhbnNpdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGNsZWFyQWxsUm91dGVzOiBmdW5jdGlvbiBjbGVhckFsbFJvdXRlcygpIHtcbiAgICAgICAgUm91dGVyLmNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uKCk7XG4gICAgICAgIFJvdXRlci5uYW1lZFJvdXRlcyA9IHt9O1xuICAgICAgICBSb3V0ZXIucm91dGVzID0gW107XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEFkZHMgcm91dGVzIHRvIHRoaXMgcm91dGVyIGZyb20gdGhlIGdpdmVuIGNoaWxkcmVuIG9iamVjdCAoc2VlIFJlYWN0Q2hpbGRyZW4pLlxuICAgICAgICovXG4gICAgICBhZGRSb3V0ZXM6IGZ1bmN0aW9uIGFkZFJvdXRlcyhyb3V0ZXMpIHtcbiAgICAgICAgaWYgKGlzUmVhY3RDaGlsZHJlbihyb3V0ZXMpKSByb3V0ZXMgPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihyb3V0ZXMpO1xuXG4gICAgICAgIGFkZFJvdXRlc1RvTmFtZWRSb3V0ZXMocm91dGVzLCBSb3V0ZXIubmFtZWRSb3V0ZXMpO1xuXG4gICAgICAgIFJvdXRlci5yb3V0ZXMucHVzaC5hcHBseShSb3V0ZXIucm91dGVzLCByb3V0ZXMpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXBsYWNlcyByb3V0ZXMgb2YgdGhpcyByb3V0ZXIgZnJvbSB0aGUgZ2l2ZW4gY2hpbGRyZW4gb2JqZWN0IChzZWUgUmVhY3RDaGlsZHJlbikuXG4gICAgICAgKi9cbiAgICAgIHJlcGxhY2VSb3V0ZXM6IGZ1bmN0aW9uIHJlcGxhY2VSb3V0ZXMocm91dGVzKSB7XG4gICAgICAgIFJvdXRlci5jbGVhckFsbFJvdXRlcygpO1xuICAgICAgICBSb3V0ZXIuYWRkUm91dGVzKHJvdXRlcyk7XG4gICAgICAgIFJvdXRlci5yZWZyZXNoKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFBlcmZvcm1zIGEgbWF0Y2ggb2YgdGhlIGdpdmVuIHBhdGggYWdhaW5zdCB0aGlzIHJvdXRlciBhbmQgcmV0dXJucyBhbiBvYmplY3RcbiAgICAgICAqIHdpdGggdGhlIHsgcm91dGVzLCBwYXJhbXMsIHBhdGhuYW1lLCBxdWVyeSB9IHRoYXQgbWF0Y2guIFJldHVybnMgbnVsbCBpZiBub1xuICAgICAgICogbWF0Y2ggY2FuIGJlIG1hZGUuXG4gICAgICAgKi9cbiAgICAgIG1hdGNoOiBmdW5jdGlvbiBtYXRjaChwYXRoKSB7XG4gICAgICAgIHJldHVybiBNYXRjaC5maW5kTWF0Y2goUm91dGVyLnJvdXRlcywgcGF0aCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYW4gYWJzb2x1dGUgVVJMIHBhdGggY3JlYXRlZCBmcm9tIHRoZSBnaXZlbiByb3V0ZVxuICAgICAgICogbmFtZSwgVVJMIHBhcmFtZXRlcnMsIGFuZCBxdWVyeS5cbiAgICAgICAqL1xuICAgICAgbWFrZVBhdGg6IGZ1bmN0aW9uIG1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgIHZhciBwYXRoO1xuICAgICAgICBpZiAoUGF0aFV0aWxzLmlzQWJzb2x1dGUodG8pKSB7XG4gICAgICAgICAgcGF0aCA9IHRvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciByb3V0ZSA9IHRvIGluc3RhbmNlb2YgUm91dGUgPyB0byA6IFJvdXRlci5uYW1lZFJvdXRlc1t0b107XG5cbiAgICAgICAgICBpbnZhcmlhbnQocm91dGUgaW5zdGFuY2VvZiBSb3V0ZSwgJ0Nhbm5vdCBmaW5kIGEgcm91dGUgbmFtZWQgXCIlc1wiJywgdG8pO1xuXG4gICAgICAgICAgcGF0aCA9IHJvdXRlLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUGF0aFV0aWxzLndpdGhRdWVyeShQYXRoVXRpbHMuaW5qZWN0UGFyYW1zKHBhdGgsIHBhcmFtcyksIHF1ZXJ5KTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhIHN0cmluZyB0aGF0IG1heSBzYWZlbHkgYmUgdXNlZCBhcyB0aGUgaHJlZiBvZiBhIGxpbmtcbiAgICAgICAqIHRvIHRoZSByb3V0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLCBVUkwgcGFyYW1ldGVycywgYW5kIHF1ZXJ5LlxuICAgICAgICovXG4gICAgICBtYWtlSHJlZjogZnVuY3Rpb24gbWFrZUhyZWYodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgdmFyIHBhdGggPSBSb3V0ZXIubWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpO1xuICAgICAgICByZXR1cm4gbG9jYXRpb24gPT09IEhhc2hMb2NhdGlvbiA/ICcjJyArIHBhdGggOiBwYXRoO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgYXJndW1lbnRzIGJ5IHB1c2hpbmdcbiAgICAgICAqIGEgbmV3IFVSTCBvbnRvIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgICAgICovXG4gICAgICB0cmFuc2l0aW9uVG86IGZ1bmN0aW9uIHRyYW5zaXRpb25Ubyh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICB2YXIgcGF0aCA9IFJvdXRlci5tYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSk7XG5cbiAgICAgICAgaWYgKHBlbmRpbmdUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgLy8gUmVwbGFjZSBzbyBwZW5kaW5nIGxvY2F0aW9uIGRvZXMgbm90IHN0YXkgaW4gaGlzdG9yeS5cbiAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKHBhdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvY2F0aW9uLnB1c2gocGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNpdGlvbnMgdG8gdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGFyZ3VtZW50cyBieSByZXBsYWNpbmdcbiAgICAgICAqIHRoZSBjdXJyZW50IFVSTCBpbiB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICAgICAqL1xuICAgICAgcmVwbGFjZVdpdGg6IGZ1bmN0aW9uIHJlcGxhY2VXaXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoUm91dGVyLm1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5zaXRpb25zIHRvIHRoZSBwcmV2aW91cyBVUkwgaWYgb25lIGlzIGF2YWlsYWJsZS4gUmV0dXJucyB0cnVlIGlmIHRoZVxuICAgICAgICogcm91dGVyIHdhcyBhYmxlIHRvIGdvIGJhY2ssIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAqXG4gICAgICAgKiBOb3RlOiBUaGUgcm91dGVyIG9ubHkgdHJhY2tzIGhpc3RvcnkgZW50cmllcyBpbiB5b3VyIGFwcGxpY2F0aW9uLCBub3QgdGhlXG4gICAgICAgKiBjdXJyZW50IGJyb3dzZXIgc2Vzc2lvbiwgc28geW91IGNhbiBzYWZlbHkgY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGhvdXQgZ3VhcmRpbmdcbiAgICAgICAqIGFnYWluc3Qgc2VuZGluZyB0aGUgdXNlciBiYWNrIHRvIHNvbWUgb3RoZXIgc2l0ZS4gSG93ZXZlciwgd2hlbiB1c2luZ1xuICAgICAgICogUmVmcmVzaExvY2F0aW9uICh3aGljaCBpcyB0aGUgZmFsbGJhY2sgZm9yIEhpc3RvcnlMb2NhdGlvbiBpbiBicm93c2VycyB0aGF0XG4gICAgICAgKiBkb24ndCBzdXBwb3J0IEhUTUw1IGhpc3RvcnkpIHRoaXMgbWV0aG9kIHdpbGwgKmFsd2F5cyogc2VuZCB0aGUgY2xpZW50IGJhY2tcbiAgICAgICAqIGJlY2F1c2Ugd2UgY2Fubm90IHJlbGlhYmx5IHRyYWNrIGhpc3RvcnkgbGVuZ3RoLlxuICAgICAgICovXG4gICAgICBnb0JhY2s6IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICAgICAgaWYgKEhpc3RvcnkubGVuZ3RoID4gMSB8fCBsb2NhdGlvbiA9PT0gUmVmcmVzaExvY2F0aW9uKSB7XG4gICAgICAgICAgbG9jYXRpb24ucG9wKCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB3YXJuaW5nKGZhbHNlLCAnZ29CYWNrKCkgd2FzIGlnbm9yZWQgYmVjYXVzZSB0aGVyZSBpcyBubyByb3V0ZXIgaGlzdG9yeScpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIGhhbmRsZUFib3J0OiBvcHRpb25zLm9uQWJvcnQgfHwgZnVuY3Rpb24gKGFib3J0UmVhc29uKSB7XG4gICAgICAgIGlmIChsb2NhdGlvbiBpbnN0YW5jZW9mIFN0YXRpY0xvY2F0aW9uKSB0aHJvdyBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBhYm9ydGVkIHRyYW5zaXRpb24hIFJlYXNvbjogJyArIGFib3J0UmVhc29uKTtcblxuICAgICAgICBpZiAoYWJvcnRSZWFzb24gaW5zdGFuY2VvZiBDYW5jZWxsYXRpb24pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoYWJvcnRSZWFzb24gaW5zdGFuY2VvZiBSZWRpcmVjdCkge1xuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoUm91dGVyLm1ha2VQYXRoKGFib3J0UmVhc29uLnRvLCBhYm9ydFJlYXNvbi5wYXJhbXMsIGFib3J0UmVhc29uLnF1ZXJ5KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9jYXRpb24ucG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGhhbmRsZUVycm9yOiBvcHRpb25zLm9uRXJyb3IgfHwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIC8vIFRocm93IHNvIHdlIGRvbid0IHNpbGVudGx5IHN3YWxsb3cgYXN5bmMgZXJyb3JzLlxuICAgICAgICB0aHJvdyBlcnJvcjsgLy8gVGhpcyBlcnJvciBwcm9iYWJseSBvcmlnaW5hdGVkIGluIGEgdHJhbnNpdGlvbiBob29rLlxuICAgICAgfSxcblxuICAgICAgaGFuZGxlTG9jYXRpb25DaGFuZ2U6IGZ1bmN0aW9uIGhhbmRsZUxvY2F0aW9uQ2hhbmdlKGNoYW5nZSkge1xuICAgICAgICBSb3V0ZXIuZGlzcGF0Y2goY2hhbmdlLnBhdGgsIGNoYW5nZS50eXBlKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUGVyZm9ybXMgYSB0cmFuc2l0aW9uIHRvIHRoZSBnaXZlbiBwYXRoIGFuZCBjYWxscyBjYWxsYmFjayhlcnJvciwgYWJvcnRSZWFzb24pXG4gICAgICAgKiB3aGVuIHRoZSB0cmFuc2l0aW9uIGlzIGZpbmlzaGVkLiBJZiBib3RoIGFyZ3VtZW50cyBhcmUgbnVsbCB0aGUgcm91dGVyJ3Mgc3RhdGVcbiAgICAgICAqIHdhcyB1cGRhdGVkLiBPdGhlcndpc2UgdGhlIHRyYW5zaXRpb24gZGlkIG5vdCBjb21wbGV0ZS5cbiAgICAgICAqXG4gICAgICAgKiBJbiBhIHRyYW5zaXRpb24sIGEgcm91dGVyIGZpcnN0IGRldGVybWluZXMgd2hpY2ggcm91dGVzIGFyZSBpbnZvbHZlZCBieSBiZWdpbm5pbmdcbiAgICAgICAqIHdpdGggdGhlIGN1cnJlbnQgcm91dGUsIHVwIHRoZSByb3V0ZSB0cmVlIHRvIHRoZSBmaXJzdCBwYXJlbnQgcm91dGUgdGhhdCBpcyBzaGFyZWRcbiAgICAgICAqIHdpdGggdGhlIGRlc3RpbmF0aW9uIHJvdXRlLCBhbmQgYmFjayBkb3duIHRoZSB0cmVlIHRvIHRoZSBkZXN0aW5hdGlvbiByb3V0ZS4gVGhlXG4gICAgICAgKiB3aWxsVHJhbnNpdGlvbkZyb20gaG9vayBpcyBpbnZva2VkIG9uIGFsbCByb3V0ZSBoYW5kbGVycyB3ZSdyZSB0cmFuc2l0aW9uaW5nIGF3YXlcbiAgICAgICAqIGZyb20sIGluIHJldmVyc2UgbmVzdGluZyBvcmRlci4gTGlrZXdpc2UsIHRoZSB3aWxsVHJhbnNpdGlvblRvIGhvb2sgaXMgaW52b2tlZCBvblxuICAgICAgICogYWxsIHJvdXRlIGhhbmRsZXJzIHdlJ3JlIHRyYW5zaXRpb25pbmcgdG8uXG4gICAgICAgKlxuICAgICAgICogQm90aCB3aWxsVHJhbnNpdGlvbkZyb20gYW5kIHdpbGxUcmFuc2l0aW9uVG8gaG9va3MgbWF5IGVpdGhlciBhYm9ydCBvciByZWRpcmVjdCB0aGVcbiAgICAgICAqIHRyYW5zaXRpb24uIFRvIHJlc29sdmUgYXN5bmNocm9ub3VzbHksIHRoZXkgbWF5IHVzZSB0aGUgY2FsbGJhY2sgYXJndW1lbnQuIElmIG5vXG4gICAgICAgKiBob29rcyB3YWl0LCB0aGUgdHJhbnNpdGlvbiBpcyBmdWxseSBzeW5jaHJvbm91cy5cbiAgICAgICAqL1xuICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKHBhdGgsIGFjdGlvbikge1xuICAgICAgICBSb3V0ZXIuY2FuY2VsUGVuZGluZ1RyYW5zaXRpb24oKTtcblxuICAgICAgICB2YXIgcHJldlBhdGggPSBzdGF0ZS5wYXRoO1xuICAgICAgICB2YXIgaXNSZWZyZXNoaW5nID0gYWN0aW9uID09IG51bGw7XG5cbiAgICAgICAgaWYgKHByZXZQYXRoID09PSBwYXRoICYmICFpc1JlZnJlc2hpbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gTm90aGluZyB0byBkbyFcblxuICAgICAgICAvLyBSZWNvcmQgdGhlIHNjcm9sbCBwb3NpdGlvbiBhcyBlYXJseSBhcyBwb3NzaWJsZSB0b1xuICAgICAgICAvLyBnZXQgaXQgYmVmb3JlIGJyb3dzZXJzIHRyeSB1cGRhdGUgaXQgYXV0b21hdGljYWxseS5cbiAgICAgICAgaWYgKHByZXZQYXRoICYmIGFjdGlvbiA9PT0gTG9jYXRpb25BY3Rpb25zLlBVU0gpIFJvdXRlci5yZWNvcmRTY3JvbGxQb3NpdGlvbihwcmV2UGF0aCk7XG5cbiAgICAgICAgdmFyIG1hdGNoID0gUm91dGVyLm1hdGNoKHBhdGgpO1xuXG4gICAgICAgIHdhcm5pbmcobWF0Y2ggIT0gbnVsbCwgJ05vIHJvdXRlIG1hdGNoZXMgcGF0aCBcIiVzXCIuIE1ha2Ugc3VyZSB5b3UgaGF2ZSA8Um91dGUgcGF0aD1cIiVzXCI+IHNvbWV3aGVyZSBpbiB5b3VyIHJvdXRlcycsIHBhdGgsIHBhdGgpO1xuXG4gICAgICAgIGlmIChtYXRjaCA9PSBudWxsKSBtYXRjaCA9IHt9O1xuXG4gICAgICAgIHZhciBwcmV2Um91dGVzID0gc3RhdGUucm91dGVzIHx8IFtdO1xuICAgICAgICB2YXIgcHJldlBhcmFtcyA9IHN0YXRlLnBhcmFtcyB8fCB7fTtcbiAgICAgICAgdmFyIHByZXZRdWVyeSA9IHN0YXRlLnF1ZXJ5IHx8IHt9O1xuXG4gICAgICAgIHZhciBuZXh0Um91dGVzID0gbWF0Y2gucm91dGVzIHx8IFtdO1xuICAgICAgICB2YXIgbmV4dFBhcmFtcyA9IG1hdGNoLnBhcmFtcyB8fCB7fTtcbiAgICAgICAgdmFyIG5leHRRdWVyeSA9IG1hdGNoLnF1ZXJ5IHx8IHt9O1xuXG4gICAgICAgIHZhciBmcm9tUm91dGVzLCB0b1JvdXRlcztcbiAgICAgICAgaWYgKHByZXZSb3V0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgZnJvbVJvdXRlcyA9IHByZXZSb3V0ZXMuZmlsdGVyKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNNYXRjaChuZXh0Um91dGVzLCByb3V0ZSwgcHJldlBhcmFtcywgbmV4dFBhcmFtcywgcHJldlF1ZXJ5LCBuZXh0UXVlcnkpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdG9Sb3V0ZXMgPSBuZXh0Um91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzTWF0Y2gocHJldlJvdXRlcywgcm91dGUsIHByZXZQYXJhbXMsIG5leHRQYXJhbXMsIHByZXZRdWVyeSwgbmV4dFF1ZXJ5KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmcm9tUm91dGVzID0gW107XG4gICAgICAgICAgdG9Sb3V0ZXMgPSBuZXh0Um91dGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbihwYXRoLCBSb3V0ZXIucmVwbGFjZVdpdGguYmluZChSb3V0ZXIsIHBhdGgpKTtcbiAgICAgICAgcGVuZGluZ1RyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuXG4gICAgICAgIHZhciBmcm9tQ29tcG9uZW50cyA9IG1vdW50ZWRDb21wb25lbnRzLnNsaWNlKHByZXZSb3V0ZXMubGVuZ3RoIC0gZnJvbVJvdXRlcy5sZW5ndGgpO1xuXG4gICAgICAgIFRyYW5zaXRpb24uZnJvbSh0cmFuc2l0aW9uLCBmcm9tUm91dGVzLCBmcm9tQ29tcG9uZW50cywgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgaWYgKGVycm9yIHx8IHRyYW5zaXRpb24uYWJvcnRSZWFzb24pIHJldHVybiBkaXNwYXRjaEhhbmRsZXIuY2FsbChSb3V0ZXIsIGVycm9yLCB0cmFuc2l0aW9uKTsgLy8gTm8gbmVlZCB0byBjb250aW51ZS5cblxuICAgICAgICAgIFRyYW5zaXRpb24udG8odHJhbnNpdGlvbiwgdG9Sb3V0ZXMsIG5leHRQYXJhbXMsIG5leHRRdWVyeSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBkaXNwYXRjaEhhbmRsZXIuY2FsbChSb3V0ZXIsIGVycm9yLCB0cmFuc2l0aW9uLCB7XG4gICAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgICBwYXRobmFtZTogbWF0Y2gucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHJvdXRlczogbmV4dFJvdXRlcyxcbiAgICAgICAgICAgICAgcGFyYW1zOiBuZXh0UGFyYW1zLFxuICAgICAgICAgICAgICBxdWVyeTogbmV4dFF1ZXJ5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFN0YXJ0cyB0aGlzIHJvdXRlciBhbmQgY2FsbHMgY2FsbGJhY2socm91dGVyLCBzdGF0ZSkgd2hlbiB0aGUgcm91dGUgY2hhbmdlcy5cbiAgICAgICAqXG4gICAgICAgKiBJZiB0aGUgcm91dGVyJ3MgbG9jYXRpb24gaXMgc3RhdGljIChpLmUuIGEgVVJMIHBhdGggaW4gYSBzZXJ2ZXIgZW52aXJvbm1lbnQpXG4gICAgICAgKiB0aGUgY2FsbGJhY2sgaXMgY2FsbGVkIG9ubHkgb25jZS4gT3RoZXJ3aXNlLCB0aGUgbG9jYXRpb24gc2hvdWxkIGJlIG9uZSBvZiB0aGVcbiAgICAgICAqIFJvdXRlci4qTG9jYXRpb24gb2JqZWN0cyAoZS5nLiBSb3V0ZXIuSGFzaExvY2F0aW9uIG9yIFJvdXRlci5IaXN0b3J5TG9jYXRpb24pLlxuICAgICAgICovXG4gICAgICBydW46IGZ1bmN0aW9uIHJ1bihjYWxsYmFjaykge1xuICAgICAgICBpbnZhcmlhbnQoIVJvdXRlci5pc1J1bm5pbmcsICdSb3V0ZXIgaXMgYWxyZWFkeSBydW5uaW5nJyk7XG5cbiAgICAgICAgZGlzcGF0Y2hIYW5kbGVyID0gZnVuY3Rpb24gKGVycm9yLCB0cmFuc2l0aW9uLCBuZXdTdGF0ZSkge1xuICAgICAgICAgIGlmIChlcnJvcikgUm91dGVyLmhhbmRsZUVycm9yKGVycm9yKTtcblxuICAgICAgICAgIGlmIChwZW5kaW5nVHJhbnNpdGlvbiAhPT0gdHJhbnNpdGlvbikgcmV0dXJuO1xuXG4gICAgICAgICAgcGVuZGluZ1RyYW5zaXRpb24gPSBudWxsO1xuXG4gICAgICAgICAgaWYgKHRyYW5zaXRpb24uYWJvcnRSZWFzb24pIHtcbiAgICAgICAgICAgIFJvdXRlci5oYW5kbGVBYm9ydCh0cmFuc2l0aW9uLmFib3J0UmVhc29uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChSb3V0ZXIsIFJvdXRlciwgbmV4dFN0YXRlID0gbmV3U3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIShsb2NhdGlvbiBpbnN0YW5jZW9mIFN0YXRpY0xvY2F0aW9uKSkge1xuICAgICAgICAgIGlmIChsb2NhdGlvbi5hZGRDaGFuZ2VMaXN0ZW5lcikgbG9jYXRpb24uYWRkQ2hhbmdlTGlzdGVuZXIoUm91dGVyLmhhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcblxuICAgICAgICAgIFJvdXRlci5pc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQm9vdHN0cmFwIHVzaW5nIHRoZSBjdXJyZW50IHBhdGguXG4gICAgICAgIFJvdXRlci5yZWZyZXNoKCk7XG4gICAgICB9LFxuXG4gICAgICByZWZyZXNoOiBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgICAgICBSb3V0ZXIuZGlzcGF0Y2gobG9jYXRpb24uZ2V0Q3VycmVudFBhdGgoKSwgbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBSb3V0ZXIuY2FuY2VsUGVuZGluZ1RyYW5zaXRpb24oKTtcblxuICAgICAgICBpZiAobG9jYXRpb24ucmVtb3ZlQ2hhbmdlTGlzdGVuZXIpIGxvY2F0aW9uLnJlbW92ZUNoYW5nZUxpc3RlbmVyKFJvdXRlci5oYW5kbGVMb2NhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgUm91dGVyLmlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgfSxcblxuICAgICAgZ2V0TG9jYXRpb246IGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgICB9LFxuXG4gICAgICBnZXRTY3JvbGxCZWhhdmlvcjogZnVuY3Rpb24gZ2V0U2Nyb2xsQmVoYXZpb3IoKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGxCZWhhdmlvcjtcbiAgICAgIH0sXG5cbiAgICAgIGdldFJvdXRlQXREZXB0aDogZnVuY3Rpb24gZ2V0Um91dGVBdERlcHRoKHJvdXRlRGVwdGgpIHtcbiAgICAgICAgdmFyIHJvdXRlcyA9IHN0YXRlLnJvdXRlcztcbiAgICAgICAgcmV0dXJuIHJvdXRlcyAmJiByb3V0ZXNbcm91dGVEZXB0aF07XG4gICAgICB9LFxuXG4gICAgICBzZXRSb3V0ZUNvbXBvbmVudEF0RGVwdGg6IGZ1bmN0aW9uIHNldFJvdXRlQ29tcG9uZW50QXREZXB0aChyb3V0ZURlcHRoLCBjb21wb25lbnQpIHtcbiAgICAgICAgbW91bnRlZENvbXBvbmVudHNbcm91dGVEZXB0aF0gPSBjb21wb25lbnQ7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJMIHBhdGggKyBxdWVyeSBzdHJpbmcuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRQYXRoOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnBhdGg7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJMIHBhdGggd2l0aG91dCB0aGUgcXVlcnkgc3RyaW5nLlxuICAgICAgICovXG4gICAgICBnZXRDdXJyZW50UGF0aG5hbWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRobmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnBhdGhuYW1lO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSBVUkwgcGFyYW1ldGVycy5cbiAgICAgICAqL1xuICAgICAgZ2V0Q3VycmVudFBhcmFtczogZnVuY3Rpb24gZ2V0Q3VycmVudFBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnBhcmFtcztcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhbiBvYmplY3Qgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgcXVlcnkgcGFyYW1ldGVycy5cbiAgICAgICAqL1xuICAgICAgZ2V0Q3VycmVudFF1ZXJ5OiBmdW5jdGlvbiBnZXRDdXJyZW50UXVlcnkoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5xdWVyeTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSByb3V0ZXMuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRSb3V0ZXM6IGZ1bmN0aW9uIGdldEN1cnJlbnRSb3V0ZXMoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5yb3V0ZXM7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gcm91dGUsIHBhcmFtcywgYW5kIHF1ZXJ5IGFyZSBhY3RpdmUuXG4gICAgICAgKi9cbiAgICAgIGlzQWN0aXZlOiBmdW5jdGlvbiBpc0FjdGl2ZSh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICBpZiAoUGF0aFV0aWxzLmlzQWJzb2x1dGUodG8pKSB7XG4gICAgICAgICAgcmV0dXJuIHRvID09PSBzdGF0ZS5wYXRoO1xuICAgICAgICB9cmV0dXJuIHJvdXRlSXNBY3RpdmUoc3RhdGUucm91dGVzLCB0bykgJiYgcGFyYW1zQXJlQWN0aXZlKHN0YXRlLnBhcmFtcywgcGFyYW1zKSAmJiAocXVlcnkgPT0gbnVsbCB8fCBxdWVyeUlzQWN0aXZlKHN0YXRlLnF1ZXJ5LCBxdWVyeSkpO1xuICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1peGluczogW1Njcm9sbEhpc3RvcnldLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZhbHN5XG4gICAgfSxcblxuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICAgICByb3V0ZURlcHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICByb3V0ZXI6IFByb3BUeXBlcy5yb3V0ZXIuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBnZXRDaGlsZENvbnRleHQ6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlRGVwdGg6IDEsXG4gICAgICAgIHJvdXRlcjogUm91dGVyXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPSBuZXh0U3RhdGUpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBSb3V0ZXIuc3RvcCgpO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciByb3V0ZSA9IFJvdXRlci5nZXRSb3V0ZUF0RGVwdGgoMCk7XG4gICAgICByZXR1cm4gcm91dGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KHJvdXRlLmhhbmRsZXIsIHRoaXMucHJvcHMpIDogbnVsbDtcbiAgICB9XG5cbiAgfSk7XG5cbiAgUm91dGVyLmNsZWFyQWxsUm91dGVzKCk7XG5cbiAgaWYgKG9wdGlvbnMucm91dGVzKSBSb3V0ZXIuYWRkUm91dGVzKG9wdGlvbnMucm91dGVzKTtcblxuICByZXR1cm4gUm91dGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJvdXRlcjsiLCIvKiBqc2hpbnQgLVcwODQgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdyZWFjdC9saWIvT2JqZWN0LmFzc2lnbicpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdyZWFjdC9saWIvd2FybmluZycpO1xudmFyIERlZmF1bHRSb3V0ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9EZWZhdWx0Um91dGUnKTtcbnZhciBOb3RGb3VuZFJvdXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL05vdEZvdW5kUm91dGUnKTtcbnZhciBSZWRpcmVjdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9SZWRpcmVjdCcpO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyhjb21wb25lbnROYW1lLCBwcm9wVHlwZXMsIHByb3BzKSB7XG4gIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8ICdVbmtub3duQ29tcG9uZW50JztcblxuICBmb3IgKHZhciBwcm9wTmFtZSBpbiBwcm9wVHlwZXMpIHtcbiAgICBpZiAocHJvcFR5cGVzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgdmFyIGVycm9yID0gcHJvcFR5cGVzW3Byb3BOYW1lXShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgd2FybmluZyhmYWxzZSwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlT3B0aW9ucyhwcm9wcykge1xuICB2YXIgb3B0aW9ucyA9IGFzc2lnbih7fSwgcHJvcHMpO1xuICB2YXIgaGFuZGxlciA9IG9wdGlvbnMuaGFuZGxlcjtcblxuICBpZiAoaGFuZGxlcikge1xuICAgIG9wdGlvbnMub25FbnRlciA9IGhhbmRsZXIud2lsbFRyYW5zaXRpb25UbztcbiAgICBvcHRpb25zLm9uTGVhdmUgPSBoYW5kbGVyLndpbGxUcmFuc2l0aW9uRnJvbTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoZWxlbWVudCkge1xuICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9dmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG4gIHZhciBwcm9wcyA9IGFzc2lnbih7fSwgdHlwZS5kZWZhdWx0UHJvcHMsIGVsZW1lbnQucHJvcHMpO1xuXG4gIGlmICh0eXBlLnByb3BUeXBlcykgY2hlY2tQcm9wVHlwZXModHlwZS5kaXNwbGF5TmFtZSwgdHlwZS5wcm9wVHlwZXMsIHByb3BzKTtcblxuICBpZiAodHlwZSA9PT0gRGVmYXVsdFJvdXRlKSB7XG4gICAgcmV0dXJuIFJvdXRlLmNyZWF0ZURlZmF1bHRSb3V0ZShjcmVhdGVSb3V0ZU9wdGlvbnMocHJvcHMpKTtcbiAgfWlmICh0eXBlID09PSBOb3RGb3VuZFJvdXRlKSB7XG4gICAgcmV0dXJuIFJvdXRlLmNyZWF0ZU5vdEZvdW5kUm91dGUoY3JlYXRlUm91dGVPcHRpb25zKHByb3BzKSk7XG4gIH1pZiAodHlwZSA9PT0gUmVkaXJlY3QpIHtcbiAgICByZXR1cm4gUm91dGUuY3JlYXRlUmVkaXJlY3QoY3JlYXRlUm91dGVPcHRpb25zKHByb3BzKSk7XG4gIH1yZXR1cm4gUm91dGUuY3JlYXRlUm91dGUoY3JlYXRlUm91dGVPcHRpb25zKHByb3BzKSwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9wcy5jaGlsZHJlbikgY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHJvdXRlcyBjcmVhdGVkIGZyb20gdGhlIGdpdmVuXG4gKiBSZWFjdENoaWxkcmVuLCBhbGwgb2Ygd2hpY2ggc2hvdWxkIGJlIG9uZSBvZiA8Um91dGU+LCA8RGVmYXVsdFJvdXRlPixcbiAqIDxOb3RGb3VuZFJvdXRlPiwgb3IgPFJlZGlyZWN0PiwgZS5nLjpcbiAqXG4gKiAgIHZhciB7IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuLCBSb3V0ZSwgUmVkaXJlY3QgfSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xuICpcbiAqICAgdmFyIHJvdXRlcyA9IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKFxuICogICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGhhbmRsZXI9e0FwcH0+XG4gKiAgICAgICA8Um91dGUgbmFtZT1cInVzZXJcIiBwYXRoPVwiL3VzZXIvOnVzZXJJZFwiIGhhbmRsZXI9e1VzZXJ9PlxuICogICAgICAgICA8Um91dGUgbmFtZT1cInRhc2tcIiBwYXRoPVwidGFza3MvOnRhc2tJZFwiIGhhbmRsZXI9e1Rhc2t9Lz5cbiAqICAgICAgICAgPFJlZGlyZWN0IGZyb209XCJ0b2Rvcy86dGFza0lkXCIgdG89XCJ0YXNrXCIvPlxuICogICAgICAgPC9Sb3V0ZT5cbiAqICAgICA8L1JvdXRlPlxuICogICApO1xuICovXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgcm91dGVzID0gW107XG5cbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkID0gY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGNoaWxkKSkgcm91dGVzLnB1c2goY2hpbGQpO1xuICB9KTtcblxuICByZXR1cm4gcm91dGVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBjYW5Vc2VET00gPSByZXF1aXJlKCdyZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnKS5jYW5Vc2VET007XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIHdpbmRvdyBhcyB7IHgsIHkgfS5cbiAqL1xuZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsUG9zaXRpb24oKSB7XG4gIGludmFyaWFudChjYW5Vc2VET00sICdDYW5ub3QgZ2V0IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHdpdGhvdXQgYSBET00nKTtcblxuICByZXR1cm4ge1xuICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFdpbmRvd1Njcm9sbFBvc2l0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5EZWZhdWx0Um91dGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRGVmYXVsdFJvdXRlJyk7XG5leHBvcnRzLkxpbmsgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTGluaycpO1xuZXhwb3J0cy5Ob3RGb3VuZFJvdXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL05vdEZvdW5kUm91dGUnKTtcbmV4cG9ydHMuUmVkaXJlY3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUmVkaXJlY3QnKTtcbmV4cG9ydHMuUm91dGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUm91dGUnKTtcbmV4cG9ydHMuQWN0aXZlSGFuZGxlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Sb3V0ZUhhbmRsZXInKTtcbmV4cG9ydHMuUm91dGVIYW5kbGVyID0gZXhwb3J0cy5BY3RpdmVIYW5kbGVyO1xuXG5leHBvcnRzLkhhc2hMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL0hhc2hMb2NhdGlvbicpO1xuZXhwb3J0cy5IaXN0b3J5TG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9IaXN0b3J5TG9jYXRpb24nKTtcbmV4cG9ydHMuUmVmcmVzaExvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvUmVmcmVzaExvY2F0aW9uJyk7XG5leHBvcnRzLlN0YXRpY0xvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvU3RhdGljTG9jYXRpb24nKTtcbmV4cG9ydHMuVGVzdExvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvVGVzdExvY2F0aW9uJyk7XG5cbmV4cG9ydHMuSW1pdGF0ZUJyb3dzZXJCZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3JzL0ltaXRhdGVCcm93c2VyQmVoYXZpb3InKTtcbmV4cG9ydHMuU2Nyb2xsVG9Ub3BCZWhhdmlvciA9IHJlcXVpcmUoJy4vYmVoYXZpb3JzL1Njcm9sbFRvVG9wQmVoYXZpb3InKTtcblxuZXhwb3J0cy5IaXN0b3J5ID0gcmVxdWlyZSgnLi9IaXN0b3J5Jyk7XG5leHBvcnRzLk5hdmlnYXRpb24gPSByZXF1aXJlKCcuL05hdmlnYXRpb24nKTtcbmV4cG9ydHMuU3RhdGUgPSByZXF1aXJlKCcuL1N0YXRlJyk7XG5cbmV4cG9ydHMuY3JlYXRlUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJykuY3JlYXRlUm91dGU7XG5leHBvcnRzLmNyZWF0ZURlZmF1bHRSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKS5jcmVhdGVEZWZhdWx0Um91dGU7XG5leHBvcnRzLmNyZWF0ZU5vdEZvdW5kUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJykuY3JlYXRlTm90Rm91bmRSb3V0ZTtcbmV4cG9ydHMuY3JlYXRlUmVkaXJlY3QgPSByZXF1aXJlKCcuL1JvdXRlJykuY3JlYXRlUmVkaXJlY3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbicpO1xuXG5leHBvcnRzLmNyZWF0ZSA9IHJlcXVpcmUoJy4vY3JlYXRlUm91dGVyJyk7XG5leHBvcnRzLnJ1biA9IHJlcXVpcmUoJy4vcnVuUm91dGVyJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBpc1ZhbGlkQ2hpbGQob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCB8fCBSZWFjdC5pc1ZhbGlkRWxlbWVudChvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBpc1JlYWN0Q2hpbGRyZW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc1ZhbGlkQ2hpbGQob2JqZWN0KSB8fCBBcnJheS5pc0FycmF5KG9iamVjdCkgJiYgb2JqZWN0LmV2ZXJ5KGlzVmFsaWRDaGlsZCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNSZWFjdENoaWxkcmVuOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIExvY2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zJyk7XG52YXIgSGlzdG9yeSA9IHJlcXVpcmUoJy4uL0hpc3RvcnknKTtcblxudmFyIF9saXN0ZW5lcnMgPSBbXTtcbnZhciBfaXNMaXN0ZW5pbmcgPSBmYWxzZTtcbnZhciBfYWN0aW9uVHlwZTtcblxuZnVuY3Rpb24gbm90aWZ5Q2hhbmdlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IExvY2F0aW9uQWN0aW9ucy5QVVNIKSBIaXN0b3J5Lmxlbmd0aCArPSAxO1xuXG4gIHZhciBjaGFuZ2UgPSB7XG4gICAgcGF0aDogSGFzaExvY2F0aW9uLmdldEN1cnJlbnRQYXRoKCksXG4gICAgdHlwZTogdHlwZVxuICB9O1xuXG4gIF9saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lci5jYWxsKEhhc2hMb2NhdGlvbiwgY2hhbmdlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuc3VyZVNsYXNoKCkge1xuICB2YXIgcGF0aCA9IEhhc2hMb2NhdGlvbi5nZXRDdXJyZW50UGF0aCgpO1xuXG4gIGlmIChwYXRoLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1IYXNoTG9jYXRpb24ucmVwbGFjZSgnLycgKyBwYXRoKTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG9uSGFzaENoYW5nZSgpIHtcbiAgaWYgKGVuc3VyZVNsYXNoKCkpIHtcbiAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGFuIF9hY3Rpb25UeXBlIHRoZW4gYWxsIHdlIGtub3cgaXMgdGhlIGhhc2hcbiAgICAvLyBjaGFuZ2VkLiBJdCB3YXMgcHJvYmFibHkgY2F1c2VkIGJ5IHRoZSB1c2VyIGNsaWNraW5nIHRoZSBCYWNrXG4gICAgLy8gYnV0dG9uLCBidXQgbWF5IGhhdmUgYWxzbyBiZWVuIHRoZSBGb3J3YXJkIGJ1dHRvbiBvciBtYW51YWxcbiAgICAvLyBtYW5pcHVsYXRpb24uIFNvIGp1c3QgZ3Vlc3MgJ3BvcCcuXG4gICAgdmFyIGN1ckFjdGlvblR5cGUgPSBfYWN0aW9uVHlwZTtcbiAgICBfYWN0aW9uVHlwZSA9IG51bGw7XG4gICAgbm90aWZ5Q2hhbmdlKGN1ckFjdGlvblR5cGUgfHwgTG9jYXRpb25BY3Rpb25zLlBPUCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIExvY2F0aW9uIHRoYXQgdXNlcyBgd2luZG93LmxvY2F0aW9uLmhhc2hgLlxuICovXG52YXIgSGFzaExvY2F0aW9uID0ge1xuXG4gIGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiBhZGRDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIF9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICAvLyBEbyB0aGlzIEJFRk9SRSBsaXN0ZW5pbmcgZm9yIGhhc2hjaGFuZ2UuXG4gICAgZW5zdXJlU2xhc2goKTtcblxuICAgIGlmICghX2lzTGlzdGVuaW5nKSB7XG4gICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25oYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgX2lzTGlzdGVuaW5nID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgX2xpc3RlbmVycyA9IF9saXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICByZXR1cm4gbCAhPT0gbGlzdGVuZXI7XG4gICAgfSk7XG5cbiAgICBpZiAoX2xpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50KCdvbmhhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UpO1xuICAgICAgfVxuXG4gICAgICBfaXNMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgcHVzaDogZnVuY3Rpb24gcHVzaChwYXRoKSB7XG4gICAgX2FjdGlvblR5cGUgPSBMb2NhdGlvbkFjdGlvbnMuUFVTSDtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGg7XG4gIH0sXG5cbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShwYXRoKSB7XG4gICAgX2FjdGlvblR5cGUgPSBMb2NhdGlvbkFjdGlvbnMuUkVQTEFDRTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgJyMnICsgcGF0aCk7XG4gIH0sXG5cbiAgcG9wOiBmdW5jdGlvbiBwb3AoKSB7XG4gICAgX2FjdGlvblR5cGUgPSBMb2NhdGlvbkFjdGlvbnMuUE9QO1xuICAgIEhpc3RvcnkuYmFjaygpO1xuICB9LFxuXG4gIGdldEN1cnJlbnRQYXRoOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aCgpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJKFxuICAgIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMV0gfHwgJycpO1xuICB9LFxuXG4gIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJzxIYXNoTG9jYXRpb24+JztcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hMb2NhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucycpO1xudmFyIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9IaXN0b3J5Jyk7XG5cbnZhciBfbGlzdGVuZXJzID0gW107XG52YXIgX2lzTGlzdGVuaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIG5vdGlmeUNoYW5nZSh0eXBlKSB7XG4gIHZhciBjaGFuZ2UgPSB7XG4gICAgcGF0aDogSGlzdG9yeUxvY2F0aW9uLmdldEN1cnJlbnRQYXRoKCksXG4gICAgdHlwZTogdHlwZVxuICB9O1xuXG4gIF9saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lci5jYWxsKEhpc3RvcnlMb2NhdGlvbiwgY2hhbmdlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uUG9wU3RhdGUoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gSWdub3JlIGV4dHJhbmVvdXMgcG9wc3RhdGUgZXZlbnRzIGluIFdlYktpdC5cblxuICBub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlBPUCk7XG59XG5cbi8qKlxuICogQSBMb2NhdGlvbiB0aGF0IHVzZXMgSFRNTDUgaGlzdG9yeS5cbiAqL1xudmFyIEhpc3RvcnlMb2NhdGlvbiA9IHtcblxuICBhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBfbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgaWYgKCFfaXNMaXN0ZW5pbmcpIHtcbiAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBvblBvcFN0YXRlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ucG9wc3RhdGUnLCBvblBvcFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgX2lzTGlzdGVuaW5nID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgX2xpc3RlbmVycyA9IF9saXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICByZXR1cm4gbCAhPT0gbGlzdGVuZXI7XG4gICAgfSk7XG5cbiAgICBpZiAoX2xpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBvblBvcFN0YXRlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnQoJ29ucG9wc3RhdGUnLCBvblBvcFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgX2lzTGlzdGVuaW5nID0gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2gocGF0aCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IHBhdGg6IHBhdGggfSwgJycsIHBhdGgpO1xuICAgIEhpc3RvcnkubGVuZ3RoICs9IDE7XG4gICAgbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5QVVNIKTtcbiAgfSxcblxuICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKHBhdGgpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBwYXRoOiBwYXRoIH0sICcnLCBwYXRoKTtcbiAgICBub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlJFUExBQ0UpO1xuICB9LFxuXG4gIHBvcDogSGlzdG9yeS5iYWNrLFxuXG4gIGdldEN1cnJlbnRQYXRoOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aCgpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICB9LFxuXG4gIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJzxIaXN0b3J5TG9jYXRpb24+JztcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhpc3RvcnlMb2NhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBIaXN0b3J5TG9jYXRpb24gPSByZXF1aXJlKCcuL0hpc3RvcnlMb2NhdGlvbicpO1xudmFyIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9IaXN0b3J5Jyk7XG5cbi8qKlxuICogQSBMb2NhdGlvbiB0aGF0IHVzZXMgZnVsbCBwYWdlIHJlZnJlc2hlcy4gVGhpcyBpcyB1c2VkIGFzXG4gKiB0aGUgZmFsbGJhY2sgZm9yIEhpc3RvcnlMb2NhdGlvbiBpbiBicm93c2VycyB0aGF0IGRvIG5vdFxuICogc3VwcG9ydCB0aGUgSFRNTDUgaGlzdG9yeSBBUEkuXG4gKi9cbnZhciBSZWZyZXNoTG9jYXRpb24gPSB7XG5cbiAgcHVzaDogZnVuY3Rpb24gcHVzaChwYXRoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uID0gcGF0aDtcbiAgfSxcblxuICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKHBhdGgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXRoKTtcbiAgfSxcblxuICBwb3A6IEhpc3RvcnkuYmFjayxcblxuICBnZXRDdXJyZW50UGF0aDogSGlzdG9yeUxvY2F0aW9uLmdldEN1cnJlbnRQYXRoLFxuXG4gIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJzxSZWZyZXNoTG9jYXRpb24+JztcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZnJlc2hMb2NhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG5cbmZ1bmN0aW9uIHRocm93Q2Fubm90TW9kaWZ5KCkge1xuICBpbnZhcmlhbnQoZmFsc2UsICdZb3UgY2Fubm90IG1vZGlmeSBhIHN0YXRpYyBsb2NhdGlvbicpO1xufVxuXG4vKipcbiAqIEEgbG9jYXRpb24gdGhhdCBvbmx5IGV2ZXIgY29udGFpbnMgYSBzaW5nbGUgcGF0aC4gVXNlZnVsIGluXG4gKiBzdGF0ZWxlc3MgZW52aXJvbm1lbnRzIGxpa2Ugc2VydmVycyB3aGVyZSB0aGVyZSBpcyBubyBwYXRoIGhpc3RvcnksXG4gKiBvbmx5IHRoZSBwYXRoIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QuXG4gKi9cblxudmFyIFN0YXRpY0xvY2F0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RhdGljTG9jYXRpb24ocGF0aCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0aWNMb2NhdGlvbik7XG5cbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0YXRpY0xvY2F0aW9uLCBbe1xuICAgIGtleTogJ2dldEN1cnJlbnRQYXRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXRoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gJzxTdGF0aWNMb2NhdGlvbiBwYXRoPVwiJyArIHRoaXMucGF0aCArICdcIj4nO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGF0aWNMb2NhdGlvbjtcbn0pKCk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuU3RhdGljTG9jYXRpb24ucHJvdG90eXBlLnB1c2ggPSB0aHJvd0Nhbm5vdE1vZGlmeTtcblN0YXRpY0xvY2F0aW9uLnByb3RvdHlwZS5yZXBsYWNlID0gdGhyb3dDYW5ub3RNb2RpZnk7XG5TdGF0aWNMb2NhdGlvbi5wcm90b3R5cGUucG9wID0gdGhyb3dDYW5ub3RNb2RpZnk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGljTG9jYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIExvY2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zJyk7XG52YXIgSGlzdG9yeSA9IHJlcXVpcmUoJy4uL0hpc3RvcnknKTtcblxuLyoqXG4gKiBBIGxvY2F0aW9uIHRoYXQgaXMgY29udmVuaWVudCBmb3IgdGVzdGluZyBhbmQgZG9lcyBub3QgcmVxdWlyZSBhIERPTS5cbiAqL1xuXG52YXIgVGVzdExvY2F0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGVzdExvY2F0aW9uKGhpc3RvcnkpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGVzdExvY2F0aW9uKTtcblxuICAgIHRoaXMuaGlzdG9yeSA9IGhpc3RvcnkgfHwgW107XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLl91cGRhdGVIaXN0b3J5TGVuZ3RoKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGVzdExvY2F0aW9uLCBbe1xuICAgIGtleTogJ25lZWRzRE9NJyxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfdXBkYXRlSGlzdG9yeUxlbmd0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVIaXN0b3J5TGVuZ3RoKCkge1xuICAgICAgSGlzdG9yeS5sZW5ndGggPSB0aGlzLmhpc3RvcnkubGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19ub3RpZnlDaGFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbm90aWZ5Q2hhbmdlKHR5cGUpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSB7XG4gICAgICAgIHBhdGg6IHRoaXMuZ2V0Q3VycmVudFBhdGgoKSxcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB0aGlzLmxpc3RlbmVyc1tpXS5jYWxsKHRoaXMsIGNoYW5nZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkQ2hhbmdlTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlQ2hhbmdlTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgcmV0dXJuIGwgIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHVzaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2gocGF0aCkge1xuICAgICAgdGhpcy5oaXN0b3J5LnB1c2gocGF0aCk7XG4gICAgICB0aGlzLl91cGRhdGVIaXN0b3J5TGVuZ3RoKCk7XG4gICAgICB0aGlzLl9ub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlBVU0gpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlcGxhY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlKHBhdGgpIHtcbiAgICAgIGludmFyaWFudCh0aGlzLmhpc3RvcnkubGVuZ3RoLCAnWW91IGNhbm5vdCByZXBsYWNlIHRoZSBjdXJyZW50IHBhdGggd2l0aCBubyBoaXN0b3J5Jyk7XG5cbiAgICAgIHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV0gPSBwYXRoO1xuXG4gICAgICB0aGlzLl9ub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlJFUExBQ0UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICAgIHRoaXMuaGlzdG9yeS5wb3AoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUhpc3RvcnlMZW5ndGgoKTtcbiAgICAgIHRoaXMuX25vdGlmeUNoYW5nZShMb2NhdGlvbkFjdGlvbnMuUE9QKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDdXJyZW50UGF0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeVt0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9TdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiAnPFRlc3RMb2NhdGlvbj4nO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUZXN0TG9jYXRpb247XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRlc3RMb2NhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVSb3V0ZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVJvdXRlcicpO1xuXG4vKipcbiAqIEEgaGlnaC1sZXZlbCBjb252ZW5pZW5jZSBtZXRob2QgdGhhdCBjcmVhdGVzLCBjb25maWd1cmVzLCBhbmRcbiAqIHJ1bnMgYSByb3V0ZXIgaW4gb25lIHNob3QuIFRoZSBtZXRob2Qgc2lnbmF0dXJlIGlzOlxuICpcbiAqICAgUm91dGVyLnJ1bihyb3V0ZXNbLCBsb2NhdGlvbiBdLCBjYWxsYmFjayk7XG4gKlxuICogVXNpbmcgYHdpbmRvdy5sb2NhdGlvbi5oYXNoYCB0byBtYW5hZ2UgdGhlIFVSTCwgeW91IGNvdWxkIGRvOlxuICpcbiAqICAgUm91dGVyLnJ1bihyb3V0ZXMsIGZ1bmN0aW9uIChIYW5kbGVyKSB7XG4gKiAgICAgUmVhY3QucmVuZGVyKDxIYW5kbGVyLz4sIGRvY3VtZW50LmJvZHkpO1xuICogICB9KTtcbiAqIFxuICogVXNpbmcgSFRNTDUgaGlzdG9yeSBhbmQgYSBjdXN0b20gXCJjdXJzb3JcIiBwcm9wOlxuICogXG4gKiAgIFJvdXRlci5ydW4ocm91dGVzLCBSb3V0ZXIuSGlzdG9yeUxvY2F0aW9uLCBmdW5jdGlvbiAoSGFuZGxlcikge1xuICogICAgIFJlYWN0LnJlbmRlcig8SGFuZGxlciBjdXJzb3I9e2N1cnNvcn0vPiwgZG9jdW1lbnQuYm9keSk7XG4gKiAgIH0pO1xuICpcbiAqIFJldHVybnMgdGhlIG5ld2x5IGNyZWF0ZWQgcm91dGVyLlxuICpcbiAqIE5vdGU6IElmIHlvdSBuZWVkIHRvIHNwZWNpZnkgZnVydGhlciBvcHRpb25zIGZvciB5b3VyIHJvdXRlciBzdWNoXG4gKiBhcyBlcnJvci9hYm9ydCBoYW5kbGluZyBvciBjdXN0b20gc2Nyb2xsIGJlaGF2aW9yLCB1c2UgUm91dGVyLmNyZWF0ZVxuICogaW5zdGVhZC5cbiAqXG4gKiAgIHZhciByb3V0ZXIgPSBSb3V0ZXIuY3JlYXRlKG9wdGlvbnMpO1xuICogICByb3V0ZXIucnVuKGZ1bmN0aW9uIChIYW5kbGVyKSB7XG4gKiAgICAgLy8gLi4uXG4gKiAgIH0pO1xuICovXG5mdW5jdGlvbiBydW5Sb3V0ZXIocm91dGVzLCBsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gbG9jYXRpb247XG4gICAgbG9jYXRpb24gPSBudWxsO1xuICB9XG5cbiAgdmFyIHJvdXRlciA9IGNyZWF0ZVJvdXRlcih7XG4gICAgcm91dGVzOiByb3V0ZXMsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uXG4gIH0pO1xuXG4gIHJvdXRlci5ydW4oY2FsbGJhY2spO1xuXG4gIHJldHVybiByb3V0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcnVuUm91dGVyOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gc3VwcG9ydHNIaXN0b3J5KCkge1xuICAvKiEgdGFrZW4gZnJvbSBtb2Rlcm5penJcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICAgKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICAgKi9cbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0c0hpc3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBUb09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIGtleXM7XG5cdHZhciB0byA9IFRvT2JqZWN0KHRhcmdldCk7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gYXJndW1lbnRzW3NdO1xuXHRcdGtleXMgPSBPYmplY3Qua2V5cyhPYmplY3QoZnJvbSkpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0b1trZXlzW2ldXSA9IGZyb21ba2V5c1tpXV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvJyk7XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxudmFyIFN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG52YXIgUGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHt9O1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHN0cmluZ2lmeTogU3RyaW5naWZ5LFxuICAgIHBhcnNlOiBQYXJzZVxufTtcbiIsIi8vIExvYWQgbW9kdWxlc1xuXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHtcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBkZXB0aDogNSxcbiAgICBhcnJheUxpbWl0OiAyMCxcbiAgICBwYXJhbWV0ZXJMaW1pdDogMTAwMFxufTtcblxuXG5pbnRlcm5hbHMucGFyc2VWYWx1ZXMgPSBmdW5jdGlvbiAoc3RyLCBvcHRpb25zKSB7XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KG9wdGlvbnMuZGVsaW1pdGVyLCBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSBJbmZpbml0eSA/IHVuZGVmaW5lZCA6IG9wdGlvbnMucGFyYW1ldGVyTGltaXQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gcGFydHMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICB2YXIgcG9zID0gcGFydC5pbmRleE9mKCddPScpID09PSAtMSA/IHBhcnQuaW5kZXhPZignPScpIDogcGFydC5pbmRleE9mKCddPScpICsgMTtcblxuICAgICAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgICAgICAgb2JqW1V0aWxzLmRlY29kZShwYXJ0KV0gPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBVdGlscy5kZWNvZGUocGFydC5zbGljZSgwLCBwb3MpKTtcbiAgICAgICAgICAgIHZhciB2YWwgPSBVdGlscy5kZWNvZGUocGFydC5zbGljZShwb3MgKyAxKSk7XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSBbXS5jb25jYXQob2JqW2tleV0pLmNvbmNhdCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cblxuaW50ZXJuYWxzLnBhcnNlT2JqZWN0ID0gZnVuY3Rpb24gKGNoYWluLCB2YWwsIG9wdGlvbnMpIHtcblxuICAgIGlmICghY2hhaW4ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgdmFyIHJvb3QgPSBjaGFpbi5zaGlmdCgpO1xuXG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGlmIChyb290ID09PSAnW10nKSB7XG4gICAgICAgIG9iaiA9IFtdO1xuICAgICAgICBvYmogPSBvYmouY29uY2F0KGludGVybmFscy5wYXJzZU9iamVjdChjaGFpbiwgdmFsLCBvcHRpb25zKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgY2xlYW5Sb290ID0gcm9vdFswXSA9PT0gJ1snICYmIHJvb3Rbcm9vdC5sZW5ndGggLSAxXSA9PT0gJ10nID8gcm9vdC5zbGljZSgxLCByb290Lmxlbmd0aCAtIDEpIDogcm9vdDtcbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoY2xlYW5Sb290LCAxMCk7XG4gICAgICAgIHZhciBpbmRleFN0cmluZyA9ICcnICsgaW5kZXg7XG4gICAgICAgIGlmICghaXNOYU4oaW5kZXgpICYmXG4gICAgICAgICAgICByb290ICE9PSBjbGVhblJvb3QgJiZcbiAgICAgICAgICAgIGluZGV4U3RyaW5nID09PSBjbGVhblJvb3QgJiZcbiAgICAgICAgICAgIGluZGV4ID49IDAgJiZcbiAgICAgICAgICAgIGluZGV4IDw9IG9wdGlvbnMuYXJyYXlMaW1pdCkge1xuXG4gICAgICAgICAgICBvYmogPSBbXTtcbiAgICAgICAgICAgIG9ialtpbmRleF0gPSBpbnRlcm5hbHMucGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYmpbY2xlYW5Sb290XSA9IGludGVybmFscy5wYXJzZU9iamVjdChjaGFpbiwgdmFsLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmludGVybmFscy5wYXJzZUtleXMgPSBmdW5jdGlvbiAoa2V5LCB2YWwsIG9wdGlvbnMpIHtcblxuICAgIGlmICgha2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGUgcmVnZXggY2h1bmtzXG5cbiAgICB2YXIgcGFyZW50ID0gL14oW15cXFtcXF1dKikvO1xuICAgIHZhciBjaGlsZCA9IC8oXFxbW15cXFtcXF1dKlxcXSkvZztcblxuICAgIC8vIEdldCB0aGUgcGFyZW50XG5cbiAgICB2YXIgc2VnbWVudCA9IHBhcmVudC5leGVjKGtleSk7XG5cbiAgICAvLyBEb24ndCBhbGxvdyB0aGVtIHRvIG92ZXJ3cml0ZSBvYmplY3QgcHJvdG90eXBlIHByb3BlcnRpZXNcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KHNlZ21lbnRbMV0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTdGFzaCB0aGUgcGFyZW50IGlmIGl0IGV4aXN0c1xuXG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBpZiAoc2VnbWVudFsxXSkge1xuICAgICAgICBrZXlzLnB1c2goc2VnbWVudFsxXSk7XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGNoaWxkcmVuIGFwcGVuZGluZyB0byB0aGUgYXJyYXkgdW50aWwgd2UgaGl0IGRlcHRoXG5cbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKChzZWdtZW50ID0gY2hpbGQuZXhlYyhrZXkpKSAhPT0gbnVsbCAmJiBpIDwgb3B0aW9ucy5kZXB0aCkge1xuXG4gICAgICAgICsraTtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KHNlZ21lbnRbMV0ucmVwbGFjZSgvXFxbfFxcXS9nLCAnJykpKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goc2VnbWVudFsxXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSdzIGEgcmVtYWluZGVyLCBqdXN0IGFkZCB3aGF0ZXZlciBpcyBsZWZ0XG5cbiAgICBpZiAoc2VnbWVudCkge1xuICAgICAgICBrZXlzLnB1c2goJ1snICsga2V5LnNsaWNlKHNlZ21lbnQuaW5kZXgpICsgJ10nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJuYWxzLnBhcnNlT2JqZWN0KGtleXMsIHZhbCwgb3B0aW9ucyk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0ciwgb3B0aW9ucykge1xuXG4gICAgaWYgKHN0ciA9PT0gJycgfHxcbiAgICAgICAgc3RyID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBzdHIgPT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuZGVsaW1pdGVyID0gdHlwZW9mIG9wdGlvbnMuZGVsaW1pdGVyID09PSAnc3RyaW5nJyB8fCBVdGlscy5pc1JlZ0V4cChvcHRpb25zLmRlbGltaXRlcikgPyBvcHRpb25zLmRlbGltaXRlciA6IGludGVybmFscy5kZWxpbWl0ZXI7XG4gICAgb3B0aW9ucy5kZXB0aCA9IHR5cGVvZiBvcHRpb25zLmRlcHRoID09PSAnbnVtYmVyJyA/IG9wdGlvbnMuZGVwdGggOiBpbnRlcm5hbHMuZGVwdGg7XG4gICAgb3B0aW9ucy5hcnJheUxpbWl0ID0gdHlwZW9mIG9wdGlvbnMuYXJyYXlMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmFycmF5TGltaXQgOiBpbnRlcm5hbHMuYXJyYXlMaW1pdDtcbiAgICBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID0gdHlwZW9mIG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPT09ICdudW1iZXInID8gb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA6IGludGVybmFscy5wYXJhbWV0ZXJMaW1pdDtcblxuICAgIHZhciB0ZW1wT2JqID0gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBpbnRlcm5hbHMucGFyc2VWYWx1ZXMoc3RyLCBvcHRpb25zKSA6IHN0cjtcbiAgICB2YXIgb2JqID0ge307XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGtleXMgYW5kIHNldHVwIHRoZSBuZXcgb2JqZWN0XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRlbXBPYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGtleXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIG5ld09iaiA9IGludGVybmFscy5wYXJzZUtleXMoa2V5LCB0ZW1wT2JqW2tleV0sIG9wdGlvbnMpO1xuICAgICAgICBvYmogPSBVdGlscy5tZXJnZShvYmosIG5ld09iaik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFV0aWxzLmNvbXBhY3Qob2JqKTtcbn07XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxudmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7XG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgYXJyYXlQcmVmaXhHZW5lcmF0b3JzOiB7XG4gICAgICAgIGJyYWNrZXRzOiBmdW5jdGlvbiAocHJlZml4LCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXggKyAnW10nO1xuICAgICAgICB9LFxuICAgICAgICBpbmRpY2VzOiBmdW5jdGlvbiAocHJlZml4LCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXggKyAnWycgKyBrZXkgKyAnXSc7XG4gICAgICAgIH0sXG4gICAgICAgIHJlcGVhdDogZnVuY3Rpb24gKHByZWZpeCwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5pbnRlcm5hbHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKG9iaiwgcHJlZml4LCBnZW5lcmF0ZUFycmF5UHJlZml4KSB7XG5cbiAgICBpZiAoVXRpbHMuaXNCdWZmZXIob2JqKSkge1xuICAgICAgICBvYmogPSBvYmoudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBvYmogPSBvYmoudG9JU09TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIG9iaiA9ICcnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyB8fFxuICAgICAgICB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJyB8fFxuICAgICAgICB0eXBlb2Ygb2JqID09PSAnYm9vbGVhbicpIHtcblxuICAgICAgICByZXR1cm4gW2VuY29kZVVSSUNvbXBvbmVudChwcmVmaXgpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9iaildO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHZhciBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoaW50ZXJuYWxzLnN0cmluZ2lmeShvYmpba2V5XSwgZ2VuZXJhdGVBcnJheVByZWZpeChwcmVmaXgsIGtleSksIGdlbmVyYXRlQXJyYXlQcmVmaXgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoaW50ZXJuYWxzLnN0cmluZ2lmeShvYmpba2V5XSwgcHJlZml4ICsgJ1snICsga2V5ICsgJ10nLCBnZW5lcmF0ZUFycmF5UHJlZml4KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIG9wdGlvbnMpIHtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBkZWxpbWl0ZXIgPSB0eXBlb2Ygb3B0aW9ucy5kZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gaW50ZXJuYWxzLmRlbGltaXRlciA6IG9wdGlvbnMuZGVsaW1pdGVyO1xuXG4gICAgdmFyIGtleXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICBvYmogPT09IG51bGwpIHtcblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5Rm9ybWF0O1xuICAgIGlmIChvcHRpb25zLmFycmF5Rm9ybWF0IGluIGludGVybmFscy5hcnJheVByZWZpeEdlbmVyYXRvcnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRpb25zLmFycmF5Rm9ybWF0O1xuICAgIH1cbiAgICBlbHNlIGlmICgnaW5kaWNlcycgaW4gb3B0aW9ucykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdGlvbnMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSAnaW5kaWNlcyc7XG4gICAgfVxuXG4gICAgdmFyIGdlbmVyYXRlQXJyYXlQcmVmaXggPSBpbnRlcm5hbHMuYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcblxuICAgIHZhciBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBvYmpLZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG4gICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChpbnRlcm5hbHMuc3RyaW5naWZ5KG9ialtrZXldLCBrZXksIGdlbmVyYXRlQXJyYXlQcmVmaXgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5cy5qb2luKGRlbGltaXRlcik7XG59O1xuIiwiLy8gTG9hZCBtb2R1bGVzXG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHt9O1xuXG5cbmV4cG9ydHMuYXJyYXlUb09iamVjdCA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcblxuICAgIHZhciBvYmogPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBzb3VyY2UubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgb2JqW2ldID0gc291cmNlW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cblxuZXhwb3J0cy5tZXJnZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2goc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtzb3VyY2VdID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRhcmdldCA9IFt0YXJnZXRdLmNvbmNhdChzb3VyY2UpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiZcbiAgICAgICAgIUFycmF5LmlzQXJyYXkoc291cmNlKSkge1xuXG4gICAgICAgIHRhcmdldCA9IGV4cG9ydHMuYXJyYXlUb09iamVjdCh0YXJnZXQpO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICBmb3IgKHZhciBrID0gMCwga2wgPSBrZXlzLmxlbmd0aDsgayA8IGtsOyArK2spIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNba107XG4gICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtrZXldO1xuXG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IGV4cG9ydHMubWVyZ2UodGFyZ2V0W2tleV0sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gKHN0cikge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59O1xuXG5cbmV4cG9ydHMuY29tcGFjdCA9IGZ1bmN0aW9uIChvYmosIHJlZnMpIHtcblxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICBvYmogPT09IG51bGwpIHtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHJlZnMgPSByZWZzIHx8IFtdO1xuICAgIHZhciBsb29rdXAgPSByZWZzLmluZGV4T2Yob2JqKTtcbiAgICBpZiAobG9va3VwICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gcmVmc1tsb29rdXBdO1xuICAgIH1cblxuICAgIHJlZnMucHVzaChvYmopO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICB2YXIgY29tcGFjdGVkID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gb2JqLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbXBhY3RlZC5wdXNoKG9ialtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcGFjdGVkO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBmb3IgKGkgPSAwLCBpbCA9IGtleXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgb2JqW2tleV0gPSBleHBvcnRzLmNvbXBhY3Qob2JqW2tleV0sIHJlZnMpO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmV4cG9ydHMuaXNSZWdFeHAgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cblxuZXhwb3J0cy5pc0J1ZmZlciA9IGZ1bmN0aW9uIChvYmopIHtcblxuICAgIGlmIChvYmogPT09IG51bGwgfHxcbiAgICAgICAgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhKG9iai5jb25zdHJ1Y3RvciAmJlxuICAgICAgICBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgJiZcbiAgICAgICAgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaikpO1xufTtcbiIsIihmdW5jdGlvbih3aW5kb3csIFJlYWN0KSB7XG4gIHZhciBTcGlubmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnU3Bpbm5lcicsXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBiYXJzID0gW107XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgdmFyIGJhclN0eWxlID0ge307XG4gICAgICAgIGJhclN0eWxlLldlYmtpdEFuaW1hdGlvbkRlbGF5ID0gYmFyU3R5bGUuYW5pbWF0aW9uRGVsYXkgPVxuICAgICAgICAgIChpIC0gMTIpIC8gMTAgKyAncyc7XG5cbiAgICAgICAgYmFyU3R5bGUuV2Via2l0VHJhbnNmb3JtID0gYmFyU3R5bGUudHJhbnNmb3JtID1cbiAgICAgICAgICAncm90YXRlKCcgKyAoaSAqIDMwKSArICdkZWcpIHRyYW5zbGF0ZSgxNDYlKSc7XG5cbiAgICAgICAgYmFycy5wdXNoKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge3N0eWxlOiBiYXJTdHlsZSwgY2xhc3NOYW1lOiBcInJlYWN0LXNwaW5uZXJfYmFyXCIsIGtleTogaX0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgUmVhY3QuX19zcHJlYWQoe30sICBwcm9wcywge2NsYXNzTmFtZTogKHByb3BzLmNsYXNzTmFtZSB8fCAnJykgKyAnIHJlYWN0LXNwaW5uZXInfSksIFxuICAgICAgICAgIGJhcnNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0eXBlb2YgbW9kdWxlID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5TcGlubmVyID0gU3Bpbm5lcjtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFNwaW5uZXI7XG4gIH1cbn0pKHdpbmRvdywgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgPyByZXF1aXJlKCdyZWFjdCcpIDogUmVhY3QpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIEV4ZWN1dGlvbkVudmlyb25tZW50XG4gKi9cblxuLypqc2xpbnQgZXZpbDogdHJ1ZSAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhblVzZURPTSA9ICEhKFxuICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KVxuKTtcblxuLyoqXG4gKiBTaW1wbGUsIGxpZ2h0d2VpZ2h0IG1vZHVsZSBhc3Npc3Rpbmcgd2l0aCB0aGUgZGV0ZWN0aW9uIGFuZCBjb250ZXh0IG9mXG4gKiBXb3JrZXIuIEhlbHBzIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY2llcyBhbmQgYWxsb3dzIGNvZGUgdG8gcmVhc29uIGFib3V0XG4gKiB3aGV0aGVyIG9yIG5vdCB0aGV5IGFyZSBpbiBhIFdvcmtlciwgZXZlbiBpZiB0aGV5IG5ldmVyIGluY2x1ZGUgdGhlIG1haW5cbiAqIGBSZWFjdFdvcmtlcmAgZGVwZW5kZW5jeS5cbiAqL1xudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0ge1xuXG4gIGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG4gIGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG4gIGNhblVzZUV2ZW50TGlzdGVuZXJzOlxuICAgIGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG4gIGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuLFxuXG4gIGlzSW5Xb3JrZXI6ICFjYW5Vc2VET00gLy8gRm9yIG5vdywgdGhpcyBpcyB0cnVlIC0gbWlnaHQgY2hhbmdlIGluIHRoZSBmdXR1cmUuXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgT2JqZWN0LmFzc2lnblxuICovXG5cbi8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1vYmplY3QuYXNzaWduXG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlcykge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIHRhcmdldCBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gIGZvciAodmFyIG5leHRJbmRleCA9IDE7IG5leHRJbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IG5leHRJbmRleCsrKSB7XG4gICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHNbbmV4dEluZGV4XTtcbiAgICBpZiAobmV4dFNvdXJjZSA9PSBudWxsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgZnJvbSA9IE9iamVjdChuZXh0U291cmNlKTtcblxuICAgIC8vIFdlIGRvbid0IGN1cnJlbnRseSBzdXBwb3J0IGFjY2Vzc29ycyBub3IgcHJveGllcy4gVGhlcmVmb3JlIHRoaXNcbiAgICAvLyBjb3B5IGNhbm5vdCB0aHJvdy4gSWYgd2UgZXZlciBzdXBwb3J0ZWQgdGhpcyB0aGVuIHdlIG11c3QgaGFuZGxlXG4gICAgLy8gZXhjZXB0aW9ucyBhbmQgc2lkZS1lZmZlY3RzLiBXZSBkb24ndCBzdXBwb3J0IHN5bWJvbHMgc28gdGhleSB3b24ndFxuICAgIC8vIGJlIHRyYW5zZmVycmVkLlxuXG4gICAgZm9yICh2YXIga2V5IGluIGZyb20pIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcbiAgICAgICAgdG9ba2V5XSA9IGZyb21ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGVtcHR5RnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uKGFyZykgeyByZXR1cm4gYXJnOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgaW52YXJpYW50XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ0ludmFyaWFudCBWaW9sYXRpb246ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIHdhcm5pbmdcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKFwiLi9lbXB0eUZ1bmN0aW9uXCIpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0ICkge2ZvciAodmFyIGFyZ3M9W10sJF9fMD0yLCRfXzE9YXJndW1lbnRzLmxlbmd0aDskX18wPCRfXzE7JF9fMCsrKSBhcmdzLnB1c2goYXJndW1lbnRzWyRfXzBdKTtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAvXltzXFxXXSokLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSAge3JldHVybiBhcmdzW2FyZ0luZGV4KytdO30pO1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiJdfQ==
