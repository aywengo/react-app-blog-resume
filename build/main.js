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
},{"react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/Admin.jsx":[function(require,module,exports){
var React = require('react');

var Admin = React.createClass({displayName: "Admin",
    render: function () {
        return React.createElement("div", {className: "innerContainer"}, 
            React.createElement("div", {className: "desc"}, 
                React.createElement("h2", null, "Admin section")
            ), 
            React.createElement("div", {className: "accordion", id: "optional-id"}, 
                React.createElement("div", {className: "atitle"}, React.createElement("a", null, "About myself shortly")), 
                React.createElement("div", {className: "atab"}, "Tab 1 content goes here"), 
                React.createElement("div", {className: "atitle"}, React.createElement("a", {href: "#"}, "About myself")), 
                React.createElement("div", {className: "atab"}, "Tab 2 content goes here"), 
                React.createElement("div", {className: "atitle"}, React.createElement("a", {href: "#"}, "Address")), 
                React.createElement("div", {className: "atab"}, "Tab 3 content goes here"), 
                React.createElement("div", {className: "atitle"}, React.createElement("a", {href: "#"}, "Phone number")), 
                React.createElement("div", {className: "atab"}, "Mauris a tempor tellus. Sed feugiat sem ac tellus mollis rhoncus. Nunc ante diam," + ' ' +
                    "tincidunt in bibendum id, porttitor ac justo. Sed felis urna, imperdiet ac molestie eu, interdum" + ' ' +
                    "eget elit. Aenean dui diam, adipiscing nec tincidunt eget, cursus et tortor. Sed sollicitudin" + ' ' +
                    "gravida dui."
                ), 
                React.createElement("div", {className: "atitle"}, React.createElement("a", {href: "#"}, "Map link")), 
                React.createElement("div", {className: "atab"}, "Mauris a tempor tellus. Sed feugiat sem ac tellus mollis rhoncus. Nunc ante diam," + ' ' +
                    "tincidunt in bibendum id, porttitor ac justo. Sed felis urna, imperdiet ac molestie eu, interdum" + ' ' +
                    "eget elit. Aenean dui diam, adipiscing nec tincidunt eget, cursus et tortor. Sed sollicitudin" + ' ' +
                    "gravida dui."
                )
            )

        )
    }
});

module.exports = Admin;
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
            React.createElement("a", {href: "http://stackexchange.com/users/470057"}, 
                React.createElement("img", {src: "http://stackexchange.com/users/flair/470057.png", width: "208", height: "58", alt: "profile for Roman Melnyk on Stack Exchange, a network of free, community-driven Q&A sites", title: "profile for Roman Melnyk on Stack Exchange, a network of free, community-driven Q&A sites"})
            ), 
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
var Admin = require('./Admin.jsx');
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
        React.createElement(Route, {name: "admin", handler: Admin}), 
        React.createElement(Route, {name: "blog", handler: NotFound})
    )
);

module.exports = routes;
},{"./Admin.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Admin.jsx","./App.js":"/Users/romeo/Repository/react-app-blog-resume/app/App.js","./Contact.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Contact.jsx","./Education.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Education.jsx","./InfoBlock.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/InfoBlock.jsx","./NotFound.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/NotFound.jsx","./Resume.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Resume.jsx","react":"react","react-router":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/index.js"}],"/Users/romeo/Repository/react-app-blog-resume/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvQWRkcmVzc0Jsb2NrLmpzeCIsImFwcC9BZG1pbi5qc3giLCJhcHAvQXBwLmpzIiwiYXBwL0NvbnRhY3QuanN4IiwiYXBwL0NvbnRhY3RGb3JtLmpzeCIsImFwcC9FZHVjYXRpb24uanN4IiwiYXBwL0VkdWNhdGlvbkl0ZW1zLmpzeCIsImFwcC9FeHBlcmllbmNlLmpzeCIsImFwcC9Gb290ZXIuanN4IiwiYXBwL0hlYWQuanN4IiwiYXBwL0luZm9CbG9jay5qc3giLCJhcHAvTmF2QmFyLmpzeCIsImFwcC9Ob3RGb3VuZC5qc3giLCJhcHAvUmVzdW1lLmpzeCIsImFwcC9Ta2lsbHMuanN4IiwiYXBwL1NvY2lhbE5ldHdvcmtCYXIuanN4IiwiYXBwL1N1Ym5hdkNvbnRhaW5lci5qc3giLCJhcHAvVmFsaWRhdGlvbkluZm9CbG9jay5qc3giLCJhcHAvV2lkZ2V0VHdpdHRlci5qc3giLCJhcHAvY29uZmlnLmpzIiwiYXBwL21haW4uanMiLCJhcHAvcm91dGVzLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1nYS9zcmMvY29tcG9uZW50cy9PdXRib3VuZExpbmsuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtZ2Evc3JjL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvQ2FuY2VsbGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL01hdGNoLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvTmF2aWdhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1BhdGhVdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1Byb3BUeXBlcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1JlZGlyZWN0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUm91dGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9TY3JvbGxIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvU3RhdGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9UcmFuc2l0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvYWN0aW9ucy9Mb2NhdGlvbkFjdGlvbnMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9iZWhhdmlvcnMvSW1pdGF0ZUJyb3dzZXJCZWhhdmlvci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2JlaGF2aW9ycy9TY3JvbGxUb1RvcEJlaGF2aW9yLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9Db250ZXh0V3JhcHBlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvRGVmYXVsdFJvdXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9MaW5rLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9Ob3RGb3VuZFJvdXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9SZWRpcmVjdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvUm91dGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL1JvdXRlSGFuZGxlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NyZWF0ZVJvdXRlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvZ2V0V2luZG93U2Nyb2xsUG9zaXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2lzUmVhY3RDaGlsZHJlbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2xvY2F0aW9ucy9IYXNoTG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9sb2NhdGlvbnMvSGlzdG9yeUxvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbG9jYXRpb25zL1JlZnJlc2hMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2xvY2F0aW9ucy9TdGF0aWNMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2xvY2F0aW9ucy9UZXN0TG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9ydW5Sb3V0ZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9zdXBwb3J0c0hpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9xcy9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9xcy9saWIvcGFyc2UuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9xcy9saWIvc3RyaW5naWZ5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvbGliL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2xpYi9PYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2xpYi9pbnZhcmlhbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL3dhcm5pbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDamdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgQWRkcmVzc0Jsb2NrID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkFkZHJlc3NCbG9ja1wiLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtYWlsIDogdGhpcy5wcm9wcy5tYWlsLFxuICAgICAgICAgICAgYWRkcmVzcyA6IHRoaXMucHJvcHMuYWRkcmVzcyxcbiAgICAgICAgICAgIHRlbG5vIDogdGhpcy5wcm9wcy50ZWxudW1iZXJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtYWlsdG8gPSBcIm1haWx0bzpcIiArIHRoaXMuc3RhdGUubWFpbDtcbiAgICAgICAgdmFyIHRlbCA9IFwiI1wiICsgdGhpcy5zdGF0ZS50ZWxubztcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhZGRyZXNzXCIsIG51bGwsIFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hZGRyZXNzLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IG1haWx0b30sIHRoaXMuc3RhdGUubWFpbCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogdGVsfSwgdGhpcy5zdGF0ZS50ZWxubyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFkZHJlc3NCbG9jazsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgQWRtaW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQWRtaW5cIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJpbm5lckNvbnRhaW5lclwifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZGVzY1wifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwiQWRtaW4gc2VjdGlvblwiKVxuICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYWNjb3JkaW9uXCIsIGlkOiBcIm9wdGlvbmFsLWlkXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYXRpdGxlXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBcIkFib3V0IG15c2VsZiBzaG9ydGx5XCIpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImF0YWJcIn0sIFwiVGFiIDEgY29udGVudCBnb2VzIGhlcmVcIiksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhdGl0bGVcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiNcIn0sIFwiQWJvdXQgbXlzZWxmXCIpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImF0YWJcIn0sIFwiVGFiIDIgY29udGVudCBnb2VzIGhlcmVcIiksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhdGl0bGVcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcIiNcIn0sIFwiQWRkcmVzc1wiKSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhdGFiXCJ9LCBcIlRhYiAzIGNvbnRlbnQgZ29lcyBoZXJlXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiYXRpdGxlXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCIjXCJ9LCBcIlBob25lIG51bWJlclwiKSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhdGFiXCJ9LCBcIk1hdXJpcyBhIHRlbXBvciB0ZWxsdXMuIFNlZCBmZXVnaWF0IHNlbSBhYyB0ZWxsdXMgbW9sbGlzIHJob25jdXMuIE51bmMgYW50ZSBkaWFtLFwiICsgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgXCJ0aW5jaWR1bnQgaW4gYmliZW5kdW0gaWQsIHBvcnR0aXRvciBhYyBqdXN0by4gU2VkIGZlbGlzIHVybmEsIGltcGVyZGlldCBhYyBtb2xlc3RpZSBldSwgaW50ZXJkdW1cIiArICcgJyArXG4gICAgICAgICAgICAgICAgICAgIFwiZWdldCBlbGl0LiBBZW5lYW4gZHVpIGRpYW0sIGFkaXBpc2NpbmcgbmVjIHRpbmNpZHVudCBlZ2V0LCBjdXJzdXMgZXQgdG9ydG9yLiBTZWQgc29sbGljaXR1ZGluXCIgKyAnICcgK1xuICAgICAgICAgICAgICAgICAgICBcImdyYXZpZGEgZHVpLlwiXG4gICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImF0aXRsZVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiI1wifSwgXCJNYXAgbGlua1wiKSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhdGFiXCJ9LCBcIk1hdXJpcyBhIHRlbXBvciB0ZWxsdXMuIFNlZCBmZXVnaWF0IHNlbSBhYyB0ZWxsdXMgbW9sbGlzIHJob25jdXMuIE51bmMgYW50ZSBkaWFtLFwiICsgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgXCJ0aW5jaWR1bnQgaW4gYmliZW5kdW0gaWQsIHBvcnR0aXRvciBhYyBqdXN0by4gU2VkIGZlbGlzIHVybmEsIGltcGVyZGlldCBhYyBtb2xlc3RpZSBldSwgaW50ZXJkdW1cIiArICcgJyArXG4gICAgICAgICAgICAgICAgICAgIFwiZWdldCBlbGl0LiBBZW5lYW4gZHVpIGRpYW0sIGFkaXBpc2NpbmcgbmVjIHRpbmNpZHVudCBlZ2V0LCBjdXJzdXMgZXQgdG9ydG9yLiBTZWQgc29sbGljaXR1ZGluXCIgKyAnICcgK1xuICAgICAgICAgICAgICAgICAgICBcImdyYXZpZGEgZHVpLlwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgIClcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZG1pbjsiLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanMnKTtcbnZhciBTb2NpYWxOZXR3b3JrcyA9IHJlcXVpcmUoJy4vU29jaWFsTmV0d29ya0Jhci5qc3gnKTtcbnZhciBXaWRnZXRUd2l0dGVyID0gcmVxdWlyZSgnLi9XaWRnZXRUd2l0dGVyLmpzeCcpO1xudmFyIEFkZHJlc3NCbG9jayA9IHJlcXVpcmUoJy4vQWRkcmVzc0Jsb2NrLmpzeCcpO1xudmFyIEluZm9CbG9jayA9IHJlcXVpcmUoJy4vSW5mb0Jsb2NrLmpzeCcpO1xudmFyIFN1Ym5hdkNvbnRhaW5lciA9IHJlcXVpcmUoJy4vU3VibmF2Q29udGFpbmVyLmpzeCcpO1xudmFyIEhlYWQgPSByZXF1aXJlKCcuL0hlYWQuanN4Jyk7XG52YXIgRm9vdGVyID0gcmVxdWlyZSgnLi9Gb290ZXIuanN4Jyk7XG52YXIgTmF2QmFyID0gcmVxdWlyZSgnLi9OYXZCYXIuanN4Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgUm91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcjtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJBcHBcIixcbiAgICBtaXhpbnM6IFtSb3V0ZXIuU3RhdGVdLFxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gQ29uZmlnLnRpdGxlO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0d2l0dGVyQmFyLGluZm9CbG9jayxtYWluUGFydDtcbiAgICAgICAgaWYodGhpcy5pc0FjdGl2ZSgnL3Byb2ZpbGUnKSB8fCB0aGlzLmlzQWN0aXZlKCcvJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR3aXR0ZXJCYXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFdpZGdldFR3aXR0ZXIsIHtjb3VudDogNX0pO1xuICAgICAgICAgICAgaW5mb0Jsb2NrID0gUmVhY3QuY3JlYXRlRWxlbWVudChJbmZvQmxvY2ssIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbWFpblBhcnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlSGFuZGxlciwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogdGhpcy5nZXRQYXRobmFtZSgpLnRyaW0oKS5zdWJzdHJpbmcoMSkgfHwgXCJwcm9maWxlXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwid3JhcHBlclwifSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2QmFyLCBudWxsKSwgXG5cbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImNvbnRlbnRcIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImluZm9cIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwge2xvZ286IENvbmZpZy5sb2dvLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogQ29uZmlnLnBvc2l0aW9uLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBDb25maWcubmFtZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VybmFtZTogQ29uZmlnLnN1cm5hbWV9KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIHtjbGFzc05hbWU6IFwiY2xlYXJcIn0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvQmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiAodGhpcy5pc0FjdGl2ZSgnL3Byb2ZpbGUnKSB8fCB0aGlzLmlzQWN0aXZlKCcvJykpID8gXCJzaWRlYmFyIGhpZGRlblwiIDogXCJ0b3BBZGRyZXNzIGhpZGRlblwifSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBZGRyZXNzQmxvY2ssIHthZGRyZXNzOiBDb25maWcuYWRkcmVzcywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlsOiBDb25maWcubWFpbCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWxudW1iZXI6IENvbmZpZy50ZWx9KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTb2NpYWxOZXR3b3Jrcywge3Jlc291cmNlOiBcInNvY2lhbFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbDogQ29uZmlnLm1haWx9KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdpdHRlckJhclxuICAgICAgICAgICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwge2NsYXNzTmFtZTogXCJjbGVhclwifSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpblBhcnRcbiAgICAgICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9vdGVyLCB7YXV0aG9yOiBDb25maWcuYXV0aG9yfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanMnKTtcbnZhciBDb250YWN0Rm9ybSA9IHJlcXVpcmUoJy4vQ29udGFjdEZvcm0uanN4Jyk7XG52YXIgV2lkZ2V0VHdpdHRlciA9IHJlcXVpcmUoJy4vV2lkZ2V0VHdpdHRlci5qc3gnKTtcblxudmFyIENvbnRhY3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQ29udGFjdFwiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImlubmVyQ29udGFpbmVyXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJkZXNjXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIsIHtmcmFtZUJvcmRlcjogXCIwXCIsIHNjcm9sbGluZzogXCJub1wiLCBtYXJnaW5IZWlnaHQ6IFwiMFwiLCBtYXJnaW5XaWR0aDogXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBDb25maWcubWFwfSlcbiAgICAgICAgICAgICksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImg0XCIsIG51bGwsIFwiQXNrIG1lIGFueXRoaW5nLlwiKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhY3RGb3JtLCBudWxsKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic2lkZWJhciBoaWRkZW5cIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0VHdpdHRlciwgbnVsbClcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRhY3Q7IiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIENvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmpzJyk7XG52YXIgUmV2YWxpZGF0b3IgPSByZXF1aXJlKCdyZXZhbGlkYXRvcicpO1xudmFyIFZhbGlkYXRpb25JbmZvQmxvY2sgPSByZXF1aXJlKCcuL1ZhbGlkYXRpb25JbmZvQmxvY2suanN4Jyk7XG5cbnZhciBnZXRWYWxpZGF0aW9uU2NoZW1hID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICd0aGUgdXJsIHRoZSBvYmplY3Qgc2hvdWxkIGJlIHN0b3JlZCBhdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogL15bLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKyhcXC5bLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKykqQChbYS16MC05X11bLWEtejAtOV9dKihcXC5bLWEtejAtOV9dKykqXFwuKGFlcm98YXJwYXxiaXp8Y29tfGNvb3B8ZWR1fGdvdnxpbmZvfGludHxtaWx8bXVzZXVtfG5hbWV8bmV0fG9yZ3xwcm98dHJhdmVsfG1vYml8W2Etel1bYS16XSl8KFswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM30pKSg6WzAtOV17MSw1fSk/JC9pLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYSBtZWFucyBvZiBwcm90ZWN0aW5nIGRhdGEgKGluc3VmZmljaWVudCBmb3IgcHJvZHVjdGlvbiwgdXNlZCBhcyBleGFtcGxlKScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBDb250YWN0Rm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJDb250YWN0Rm9ybVwiLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge2luZm9tc2c6ICcnLFxuICAgICAgICAgICAgICAgIGlzVmFsaWQ6IG51bGx9XG4gICAgfSxcbiAgICBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgc3ViamVjdCA9IHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucmVmcy51bmFtZS5nZXRET01Ob2RlKCkudmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnJlZnMudWVtYWlsLmdldERPTU5vZGUoKS52YWx1ZS50b1N0cmluZygpLFxuICAgICAgICAgICAgdGV4dDogdGhpcy5yZWZzLnVtZXNzYWdlLmdldERPTU5vZGUoKS52YWx1ZS50b1N0cmluZygpLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgICAgIH07XG4gICAgICAgIHZhciBpc1ZhbGlkID0gUmV2YWxpZGF0b3IudmFsaWRhdGUoc3ViamVjdCwgZ2V0VmFsaWRhdGlvblNjaGVtYSgpKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWQudmFsaWQpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5mb21zZyA6IGlzVmFsaWQuZXJyb3JzLCBpc1ZhbGlkOiBmYWxzZX0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGpzbyA9IEpTT04uc3RyaW5naWZ5KHN1YmplY3QpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBDb25maWcuc2VydmljZSArICcvc2VuZCcsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ3RleHQvcGxhaW4nLFxuICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiBqc28sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2luZm9tc2c6IGJvZHksIGlzVmFsaWQ6IHRydWV9KVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2luZm9tc2c6IGVycm9yLnJlc3BvbnNlVHlwZSwgaXNWYWxpZDogZmFsc2V9KVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtjbGFzc05hbWU6IFwiZmMtY29udGFjdC1mb3JtXCIsIHJlZjogXCJjb250YWN0Rm9ybVwifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFZhbGlkYXRpb25JbmZvQmxvY2ssIHtcbiAgICAgICAgICAgICAgICBpbmZvbXNnOiB0aGlzLnN0YXRlLmluZm9tc2csIFxuICAgICAgICAgICAgICAgIGlzVmFsaWQ6IHRoaXMuc3RhdGUuaXNWYWxpZH0pLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7aHRtbEZvcjogXCJ1bmFtZVwifSwgXCJZb3VyIG5hbWVcIiksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcInRleHRcIiwgcmVmOiBcInVuYW1lXCIsIGlkOiBcInVuYW1lXCIsIHJlcXVpcmVkOiB0cnVlfSksIFxuXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7Y2xhc3NOYW1lOiBcImVycm9yIHVuYW1lLWVycm9yXCJ9KSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwge2h0bWxGb3I6IFwidWVtYWlsXCJ9LCBcIllvdXIgZW1haWxcIiksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHt0eXBlOiBcImVtYWlsXCIsIHJlZjogXCJ1ZW1haWxcIiwgaWQ6IFwidWVtYWlsXCIsIHJlcXVpcmVkOiB0cnVlfSksIFxuXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7Y2xhc3NOYW1lOiBcImVycm9yIHVlbWFpbC1lcnJvclwifSksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHtodG1sRm9yOiBcInVtZXNzYWdlXCJ9LCBcIllvdXIgbWVzc2FnZVwiKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwge2NsYXNzTmFtZTogXCJ1bWVzc2FnZVwiLCBpZDogXCJ1bWVzc2FnZVwiLCByZWY6IFwidW1lc3NhZ2VcIiwgcmVxdWlyZWQ6IHRydWV9KSwgXG5cbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtjbGFzc05hbWU6IFwic3VibWl0XCIsIGlkOiBcImZjLWNvbnRhY3QtYnRuXCIsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU3VibWl0fSwgXG4gICAgICAgICAgICAgICAgXCJTdWJtaXRcIlxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFjdEZvcm07IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBFZHVjYXRpb25JdGVtcyA9IHJlcXVpcmUoJy4vRWR1Y2F0aW9uSXRlbXMuanN4Jyk7XG5cbnZhciBFZHVjYXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiRWR1Y2F0aW9uXCIsXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaW5uZXJDb250YWluZXJcIn0sIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFZHVjYXRpb25JdGVtcywge2hlYWRlcjogXCJFZHVjYXRpb25cIiwgcmVzb3VyY2U6IFwiZWR1Y2F0aW9uXCJ9KSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIsKgXCIpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRWR1Y2F0aW9uSXRlbXMsIHtoZWFkZXI6IFwiQ2VydGlmaWNhdGlvblwiLCByZXNvdXJjZTogXCJjZXJ0aWZpY2F0aW9uc1wifSlcbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVkdWNhdGlvbjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIENvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmpzJyk7XG52YXIgUmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcbnZhciBTcGlubmVyID0gcmVxdWlyZSgncmVhY3Qtc3Bpbm5lcicpO1xuXG52YXIgZWxlbWVudEJvZHk7XG52YXIgRWR1Y2F0aW9uSXRlbXMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiRWR1Y2F0aW9uSXRlbXNcIixcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtkYXRhOiBbXX07XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBlbGVtZW50Qm9keSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3Bpbm5lciwgbnVsbClcbiAgICB9LFxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFJlcXVlc3QuZ2V0KENvbmZpZy5yZXNvdXJjZSArIHRoaXMucHJvcHMucmVzb3VyY2UsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvciAmJiByZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCAmJiAhYm9keS5pc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmlzTnVsbE9yVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Qm9keSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBkYXRhfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZGVzY1wifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIHRoaXMucHJvcHMuaGVhZGVyKVxuICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZWR1Y2F0aW9uLWl0ZW1zXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge2NsYXNzTmFtZTogXCJwZXJzb25hbERldlwifSwgXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCb2R5LCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLm1hcChmdW5jdGlvbihkYXRhLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGVhZCA9IChkYXRhLmxpbmsgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGF0YS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IGRhdGEubGluaywgdGFyZ2V0OiBcIl9ibGFua1wifSwgXCIgXCIsIGRhdGEudGl0bGUsIFwiIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGl9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ0aXRsZVwifSwgaGVhZCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcInRpbWVcIn0sIGRhdGEudGltZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGRhdGEuYXV0aG9yaXR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWR1Y2F0aW9uSXRlbXM7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBDb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy5qcycpO1xudmFyIFJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG52YXIgU3Bpbm5lciA9IHJlcXVpcmUoJ3JlYWN0LXNwaW5uZXInKTtcblxudmFyIGVsZW1lbnRCb2R5O1xudmFyIEV4cGVyaWVuY2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiRXhwZXJpZW5jZVwiLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge2RhdGE6IFtdfTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsZW1lbnRCb2R5ID0gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCBudWxsKVxuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUmVxdWVzdC5nZXQoQ29uZmlnLnJlc291cmNlICsgXCJleHBlcmllbmNlXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvciAmJiByZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCAmJiAhYm9keS5pc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmlzTnVsbE9yVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Qm9keSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBkYXRhfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJlZHVjYXRpb24taXRlbXNcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcInBlcnNvbmFsRGV2XCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJvZHksIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEubWFwKGZ1bmN0aW9uKGRhdGEsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoZWFkID0gKGRhdGEubGluayA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkYXRhLmVtcGxveWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogZGF0YS5saW5rLCB0YXJnZXQ6IFwiX2JsYW5rXCJ9LCBcIiBcIiwgZGF0YS5lbXBsb3llciwgXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2tleTogaX0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwidGl0bGVcIn0sIGhlYWQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3NOYW1lOiBcInRpbWVcIn0sIGRhdGEudGltZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJcIiwgbnVsbCwgZGF0YS5wb3NpdGlvbikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBkYXRhLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApKVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4cGVyaWVuY2U7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEZvb3RlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJGb290ZXJcIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgbnVsbCwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIiBDb3B5cmlnaHQgwqkyMDE1IFwiLCB0aGlzLnByb3BzLmF1dGhvciwgXCIuXCIpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiIFBvd2VyZWQgYnkgXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcImh0dHA6Ly9odHRwOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L1wifSwgXCJSZWFjdC5qc1wiKSksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCIgRGVzaWduIGJ5IFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCJodHRwOi8vdGhlbWVmb3Jlc3QubmV0L3VzZXIvdGhlbWViYWtlcnMvcG9ydGZvbGlvXCJ9LCBcInRoZW1lYmFrZXJzXCIpKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIiBTb3VyY2UgY29kZSBvbiBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2F5d2VuZ28vcmVhY3QtYXBwLWJsb2ctcmVzdW1lXCJ9LCBcIkdpdEh1YlwiKSlcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb290ZXI7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEhlYWQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiSGVhZFwiLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9nbzogdGhpcy5wcm9wcy5sb2dvLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgc3VybmFtZTogdGhpcy5wcm9wcy5zdXJuYW1lLFxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucHJvcHMucG9zaXRpb25cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaGVhZFwifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IHRoaXMuc3RhdGUubG9nbywgYWx0OiB0aGlzLnN0YXRlLm5hbWV9KSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwibmFtZVwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJmaXJzdFwifSwgdGhpcy5zdGF0ZS5uYW1lKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJsYXN0XCJ9LCB0aGlzLnN0YXRlLnN1cm5hbWUpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7Y2xhc3NOYW1lOiBcInRpdGxlXCJ9LCB0aGlzLnN0YXRlLnBvc2l0aW9uKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSGVhZDsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFN1Ym5hdkNvbnRhaW5lciA9IHJlcXVpcmUoJy4vU3VibmF2Q29udGFpbmVyLmpzeCcpO1xudmFyIENvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmpzJyk7XG5cbnZhciBJbmZvQmxvY2sgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiSW5mb0Jsb2NrXCIsXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImRlc2NcIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgQ29uZmlnLnRleHQpXG4gICAgICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdWJuYXZDb250YWluZXIsIG51bGwpXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5mb0Jsb2NrOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgTGluayA9IFJvdXRlci5MaW5rO1xuXG52YXIgTmF2QmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIk5hdkJhclwiLFxuICAgIG1peGluczogWyBSb3V0ZXIuU3RhdGUgXSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFjdGl2YXRlID0gXCIgY3VycmVudC1tZW51LWl0ZW1cIjtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmdldFBhdGhuYW1lKCk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibmF2XCIsIG51bGwsIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBuYW1lID09PSAnL3Byb2ZpbGUnPydwcm9maWxlJyArIGFjdGl2YXRlOidwcm9maWxlJ30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcInByb2ZpbGVcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiUHJvZmlsZVwiKSkpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IG5hbWUgPT09ICcvcmVzdW1lJz8ncmVzdW1lJyArIGFjdGl2YXRlOidyZXN1bWUnfSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwicmVzdW1lXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIlJlc3VtZVwiKSkpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IG5hbWUgPT09ICcvZWR1Y2F0aW9uJz8nZWR1Y2F0aW9uJyArIGFjdGl2YXRlOidlZHVjYXRpb24nfSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiZWR1Y2F0aW9uXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIkVkdWNhdGlvblwiKSkpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IG5hbWUgPT09ICcvYmxvZyc/J2Jsb2cnICsgYWN0aXZhdGU6J2Jsb2cnfSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiYmxvZ1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJCbG9nXCIpKSkpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogbmFtZSA9PT0gJy9jb250YWN0Jz8nY29udGFjdCcgKyBhY3RpdmF0ZTonY29udGFjdCd9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJjb250YWN0XCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIkNvbnRhY3RcIikpKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOYXZCYXI7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTdWJuYXZDb250YWluZXIgPSByZXF1aXJlKCcuL1N1Ym5hdkNvbnRhaW5lci5qc3gnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcblxudmFyIE5vdEZvdW5kID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIk5vdEZvdW5kXCIsXG4gICAgbWl4aW5zOiBbUm91dGVyLlN0YXRlXSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImlubmVyQ29udGFpbmVyXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZGVzY1wifSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNFwiLCBudWxsLCBcIlRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1XCIsIG51bGwsIHRoaXMuZ2V0UGF0aCgpKSwgXCIgd2Fzbid0IGZvdW5kXCIpXG4gICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImVkdWNhdGlvbi1pdGVtc1wifSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VibmF2Q29udGFpbmVyLCBudWxsKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb3RGb3VuZDsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIENvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmpzJyk7XG52YXIgU2tpbGxzID0gcmVxdWlyZSgnLi9Ta2lsbHMuanN4Jyk7XG52YXIgRXhwZXJpZW5jZSA9IHJlcXVpcmUoJy4vRXhwZXJpZW5jZS5qc3gnKTtcblxudmFyIFJlc3VtZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJSZXN1bWVcIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJpbm5lckNvbnRhaW5lclwifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZGVzY1wifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwiUmVzdW1lXCIpXG4gICAgICAgICAgICApLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyZXN1bWUtaXRlbXNcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCBudWxsLCBcIlByb2Zlc3Npb25hbCBwcm9maWxlXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBDb25maWcucHJvZmlsZSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCBudWxsLCBcIkV4cGVyaWVuY2VcIiksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KEV4cGVyaWVuY2UsIG51bGwpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImg1XCIsIG51bGwsIFwiU2tpbGxzXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIiBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChTa2lsbHMsIG51bGwpLCBcIiBcIiksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCBudWxsLCBcIkFib3V0IG15c2VsZlwiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInByZVwiLCBudWxsLCBDb25maWcudGV4dClcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc3VtZTsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIENvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmpzJyk7XG52YXIgUmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcbnZhciBTcGlubmVyID0gcmVxdWlyZSgncmVhY3Qtc3Bpbm5lcicpO1xuXG52YXIgZWxlbWVudEJvZHk7XG52YXIgU2tpbGxzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlNraWxsc1wiLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge2RhdGE6IFtdfTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsZW1lbnRCb2R5ID0gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCBudWxsKVxuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUmVxdWVzdC5nZXQoQ29uZmlnLnJlc291cmNlICsgXCJza2lsbHNcIixcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvciwgcmVzcG9uc2UsIGJvZHkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycm9yICYmIHJlc3BvbnNlLnN0YXR1c0NvZGUgPT0gMjAwICYmICFib2R5LmlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaXNOdWxsT3JVbmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRCb2R5ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGF9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiByYXRlcyh2YWx1ZSl7XG4gICAgICAgICAgICB2YXIgc3BhbnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICAgICAgc3BhbnMucHVzaCggUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2tleTogaSwgY2xhc3NOYW1lOiBpID49IHZhbHVlID8gXCJlbXB0eVwiIDogXCJmaWxsZWRcIn0pIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzcGFucztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpdGVtKGFyZ3MsIGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBpZH0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwic2tpbGxcIn0sIGFyZ3MubmFtZSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJyYXRpbmdcIn0sIFxuICAgICAgICAgICAgICAgICAgICByYXRlcyhhcmdzLnZhbHVlKVxuICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJkZXNjcmlwdGlvblwifSwgYXJncy5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcInNraWxsc1wifSwgXG4gICAgICAgICAgICBlbGVtZW50Qm9keSwgXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEubWFwKGl0ZW0pXG4gICAgICAgICkpXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2tpbGxzOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanMnKTtcbnZhciBSZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xudmFyIFNwaW5uZXIgPSByZXF1aXJlKCdyZWFjdC1zcGlubmVyJyk7XG5cbnZhciBlbGVtZW50Qm9keTtcbnZhciBTb2NpYWxOZXR3b3JrQmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlNvY2lhbE5ldHdvcmtCYXJcIixcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNvY2lhbDogW10sXG4gICAgICAgICAgICBtYWlsOiB0aGlzLnByb3BzLm1haWxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgZWxlbWVudEJvZHkgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW5uZXIsIG51bGwpXG4gICAgfSxcbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICBSZXF1ZXN0LmdldChDb25maWcucmVzb3VyY2UgKyB0aGlzLnByb3BzLnJlc291cmNlLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSwgYm9keSkge1xuICAgICAgICAgICAgICAgIGlmICghZXJyb3IgJiYgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9PSAyMDAgJiYgIWJvZHkuaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5pc051bGxPclVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEJvZHkgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c29jaWFsOiBkYXRhfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgbGlua3MgPSB0aGlzLnN0YXRlLnNvY2lhbC5tYXAoXG4gICAgICAgICAgICBmdW5jdGlvbih0LCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gXCIuL3NvY2lhbF9pY29ucy9cIiArIHQubmFtZSArIFwiLnBuZ1wiO1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogdC5saW5rLCBrZXk6IGksIHRhcmdldDogXCJfYmxhbmtcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogaW1hZ2UsIGFsdDogdC5uYW1lfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHZhciBtYWlsdG8gPSBcIm1haWx0bzpcIiArIHRoaXMuc3RhdGUubWFpbDtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInNvY2lhbFwifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogbWFpbHRvLCB0YXJnZXQ6IFwiX2JsYW5rXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IFwiLi9zb2NpYWxfaWNvbnMvZW1haWwucG5nXCIsIGFsdDogdGhpcy5zdGF0ZS5tYWlsfSkpLCBcbiAgICAgICAgICAgIGxpbmtzLCBcbiAgICAgICAgICAgIGVsZW1lbnRCb2R5XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU29jaWFsTmV0d29ya0JhcjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIExpbmsgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5MaW5rO1xuXG52YXIgU3VibmF2Q29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlN1Ym5hdkNvbnRhaW5lclwiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzdWJuYXZDb250YWluZXJcIn0sIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInN1Ym5hdkxlZnRcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzdWJuYXZSZXN1bWVcIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJyZXN1bWVcIiwgY2xhc3NOYW1lOiBcImludmVydFwifSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcInJlc3VtZVwifSwgXCJSZXN1bWVcIilcbiAgICAgICAgICAgICAgICApLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic3VibmF2ZWR1Y2F0aW9uXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiZWR1Y2F0aW9uXCIsIGNsYXNzTmFtZTogXCJpbnZlcnRcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJlZHVjYXRpb25cIn0sIFwiRWR1Y2F0aW9uXCIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic3VibmF2UmlnaHRcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzdWJuYXZCbG9nXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiYmxvZ1wiLCBjbGFzc05hbWU6IFwiaW52ZXJ0XCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiYmxvZ1wifSwgXCJCbG9nXCIpXG4gICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInN1Ym5hdkNvbnRhY3RcIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJjb250YWN0XCIsIGNsYXNzTmFtZTogXCJpbnZlcnRcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJjb250YWN0XCJ9LCBcIkNvbnRhY3RcIilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICB9fVxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdWJuYXZDb250YWluZXI7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFZhbGlkYXRpb25JbmZvQmxvY2sgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiVmFsaWRhdGlvbkluZm9CbG9ja1wiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oaSl7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzVmFsaWQgPT0gdHJ1ZSlcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImFsZXJ0LWJveCBzdWNjZXNzXCIsIGtleTogaX0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaW5mb21zZ1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wcm9wcy5pbmZvbXNnICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnByb3BzLmluZm9tc2cgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImFsZXJ0LWJveCB3YXJuaW5nXCIsIGtleTogaX0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pbmZvbXNnLm1hcChmdW5jdGlvbiAoZGF0YSwgayl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtrZXk6IGt9LCBkYXRhLnByb3BlcnR5LCBcIjogXCIsIGRhdGEubWVzc2FnZSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICkpO1xuXG4gICAgICAgIGVsc2UgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2tleTogaX0pXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmFsaWRhdGlvbkluZm9CbG9jazsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG52YXIgQ29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanMnKTtcbnZhciBTcGlubmVyID0gcmVxdWlyZSgncmVhY3Qtc3Bpbm5lcicpO1xuXG4vLyBUYWtlcyBhbiBJU08gdGltZSBhbmQgcmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRpbmcgaG93XG4vLyBsb25nIGFnbyB0aGUgZGF0ZSByZXByZXNlbnRzLlxuLy8gQ29weXJpZ2h0IChjKSAyMDExIEpvaG4gUmVzaWcgKGVqb2huLm9yZylcbmZ1bmN0aW9uIHByZXR0eURhdGUodGltZSkge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoKHRpbWUgfHwgXCJcIikucmVwbGFjZSgvLS9nLCBcIi9cIikucmVwbGFjZSgvW1RaXS9nLCBcIiBcIikpLFxuICAgICAgICBkaWZmID0gKCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lKCkpIC8gMTAwMCksXG4gICAgICAgIGRheV9kaWZmID0gTWF0aC5mbG9vcihkaWZmIC8gODY0MDApO1xuXG4gICAgaWYgKGlzTmFOKGRheV9kaWZmKSB8fCBkYXlfZGlmZiA8IDAgfHwgZGF5X2RpZmYgPj0gMzEpXG4gICAgICAgIHJldHVybjtcblxuICAgIHJldHVybiBkYXlfZGlmZiA9PSAwICYmIChcbiAgICAgICAgZGlmZiA8IDYwICYmIFwianVzdCBub3dcIiB8fFxuICAgICAgICBkaWZmIDwgMTIwICYmIFwiMSBtaW51dGUgYWdvXCIgfHxcbiAgICAgICAgZGlmZiA8IDM2MDAgJiYgTWF0aC5mbG9vcihkaWZmIC8gNjApICsgXCIgbWludXRlcyBhZ29cIiB8fFxuICAgICAgICBkaWZmIDwgNzIwMCAmJiBcIjEgaG91ciBhZ29cIiB8fFxuICAgICAgICBkaWZmIDwgODY0MDAgJiYgTWF0aC5mbG9vcihkaWZmIC8gMzYwMCkgKyBcIiBob3VycyBhZ29cIikgfHxcbiAgICAgICAgZGF5X2RpZmYgPT0gMSAmJiBcIlllc3RlcmRheVwiIHx8XG4gICAgICAgIGRheV9kaWZmIDwgNyAmJiBkYXlfZGlmZiArIFwiIGRheXMgYWdvXCIgfHxcbiAgICAgICAgZGF5X2RpZmYgPCAzMSAmJiBNYXRoLmNlaWwoZGF5X2RpZmYgLyA3KSArIFwiIHdlZWtzIGFnb1wiO1xufVxuXG52YXIgdHdlZXRzQm9keTtcbnZhciBXaWRnZXRUd2l0dGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIldpZGdldFR3aXR0ZXJcIixcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtkYXRhOiBbXX07XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0d2VldHNCb2R5ID0gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCBudWxsKVxuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvdW50ID0gdGhpcy5wcm9wcy5jb3VudCA9PSB1bmRlZmluZWQgPyAzIDogdGhpcy5wcm9wcy5jb3VudDtcbiAgICAgICAgUmVxdWVzdC5nZXQoQ29uZmlnLnNlcnZpY2UgKyBcIi9nZXRUd2VldHMvXCIgKyBjb3VudCxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvciwgcmVzcG9uc2UsIGJvZHkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycm9yICYmIHJlc3BvbnNlLnN0YXR1c0NvZGUgPT0gMjAwICYmICFib2R5LmlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuaXNOdWxsT3JVbmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWV0c0JvZHkgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogZGF0YX0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwid2lkZ2V0IHR3aXR0ZXItdXBkYXRlc1wifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCJodHRwOi8vc3RhY2tleGNoYW5nZS5jb20vdXNlcnMvNDcwMDU3XCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IFwiaHR0cDovL3N0YWNrZXhjaGFuZ2UuY29tL3VzZXJzL2ZsYWlyLzQ3MDA1Ny5wbmdcIiwgd2lkdGg6IFwiMjA4XCIsIGhlaWdodDogXCI1OFwiLCBhbHQ6IFwicHJvZmlsZSBmb3IgUm9tYW4gTWVsbnlrIG9uIFN0YWNrIEV4Y2hhbmdlLCBhIG5ldHdvcmsgb2YgZnJlZSwgY29tbXVuaXR5LWRyaXZlbiBRJkEgc2l0ZXNcIiwgdGl0bGU6IFwicHJvZmlsZSBmb3IgUm9tYW4gTWVsbnlrIG9uIFN0YWNrIEV4Y2hhbmdlLCBhIG5ldHdvcmsgb2YgZnJlZSwgY29tbXVuaXR5LWRyaXZlbiBRJkEgc2l0ZXNcIn0pXG4gICAgICAgICAgICApLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNlwiLCB7Y2xhc3NOYW1lOiBcIndpZGdldC10aXRsZVwifSwgXCJMYXRlc3QgdHdlZXRzXCIpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBudWxsLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcbiAgICAgICAgICAgICAgICAgICAgdHdlZXRzQm9keSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YS5tYXAoZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmlzTnVsbE9yVW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnICc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGl9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidVwiLCBudWxsLCBwcmV0dHlEYXRlKHQuY3JlYXRlZF9hdCkpLCB0LnRleHQpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdpZGdldFR3aXR0ZXI7IiwidmFyIENvbmZpZyA9IHtcbiAgICBcInRpdGxlXCI6IFwiUm9tYW4gTWVsbnlrIHBlcnNvbmFsIGJsb2dcIixcbiAgICBcImF1dGhvclwiOiBcIlJvbWFuIE1lbG55a1wiLFxuICAgIFwiZ2FpZFwiOiBcIlVBLTE3Mjc1MjYzLTRcIixcbiAgICBcIm5hbWVcIjogXCJSb21hblwiLFxuICAgIFwic3VybmFtZVwiOiBcIk1lbG55a1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJTb2Z0d2FyZSBkZXZlbG9wZXJcIixcbiAgICBcImxvZ29cIjogXCJodHRwczovL21lZGlhLmxpY2RuLmNvbS9tZWRpYS9wLzMvMDA1LzAzMS8yNjUvMGE2MTM0My5qcGdcIixcbiAgICBcInNlcnZpY2VcIjogXCJodHRwOi8vbWVsbnlrLmNvOjkwOTgvYXBpL3YxXCIsXG4gICAgXCJyZXNvdXJjZVwiIDogXCJodHRwOi8vbWVsbnlrLmNvOjkwOTgvYXBpL3YxL3Jlc291cmNlL1wiLFxuICAgIFwicHJvZmlsZVwiIDogXCJJIGFtIGEgaGFuZHMtb24sIGhpZ2hseSBjb21wZXRlbnQgc29mdHdhcmUgZW5naW5lZXIgd2l0aCAxMiB5ZWFyc+KAmSBleHBlcmllbmNlIGRlc2lnbmluZywgcHJvZ3JhbW1pbmcgYW5kIHRlc3Rpbmcgc29mdHdhcmUgYWNyb3NzIGEgdmFyaWV0eSBvZiBwbGF0Zm9ybXMuSSBoYXZlIHdvcmtlZCBvbiBudW1lcm91cyBwcm9qZWN0cyBmcm9tIGNvbmNlcHQgdG8gY29tcGxldGlvbi4gQSBzcGVjaWFsaXN0IGluIEMjIGFuZCAuTkVULCBJIHRha2UgcHJpZGUgaW4gY29kaW5nIHRvIGNvbnNpc3RlbnRseSBoaWdoIHN0YW5kYXJkcyBhbmQgcmVndWxhcmx5IHJlZnJlc2ggbXkgc2tpbGxzIHRvIGVuc3VyZSBJIGtlZXAgdXAgd2l0aCBvbmdvaW5nIGRldmVsb3BtZW50cy5cIixcbiAgICBcIm1haWxcIjogXCJyb21hbkBtZWxueWsuY29cIixcbiAgICBcInRlbFwiOiBcIlwiLFxuICAgIFwiYWRkcmVzc1wiOiAnTWllbFxcdTAxN2N5XFx1MDE0NHNraWVnbyAxNCwgNjEtNzI1IFBvem5hXFx1MDE0NCcsXG4gICAgXCJtYXBcIiA6ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxNTU3OTcuNzA4Mjg5NTMzNjghMmQxNi45MDE2NjU3OTk5OTk5OTMhM2Q1Mi40MDA1Mjg1NTAwMDAwMiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NDcwNDQ0ZDJlY2UxMGFiNyUzQTB4YTRlYTMxOTgwMzM0YmZkMSEyelVHOTZibUhGaEN3Z1VHOXNZVzVrITVlMCEzbTIhMXNlbiEyc3VzITR2MTQ0MTIyMDM0NDM0MScsXG4gICAgXCJ0ZXh0XCI6IFwiQXMgZmFyIGFzIEkgcmVtZW1iZXIgbXlzZWxmIEkgd2FzIGZvbmQgb2YgbWF0aCwgcHJvZ3JhbW1pbmcgYW5kIGZvcmVpZ24gbGFuZ3VhZ2VzLiBNeSBmaXJzdCBwcm9ncmFtIEkgd3JvdGUgb24gYXNzZW1ibGVyIHdoZW4gd2FzIGVpZ2h0IHllYXJzIG9sZCBhbmQgbXkgZmlyc3QgcHJvZ3JhbSBhcyBhIGZyZWVsYW5jZXIgaW4gMTkuXFxyXFxuXCIgK1xuICAgIFwiSVxcJ3ZlIGdvdCBob25vciBNYXN0ZXIgZGVncmVlIGluIGVsZWN0cm90ZWNobmljYWwgZW5naW5lZXJpbmcgYW5kIGV4cGVydCBEaXBsb21hIG9mIENvbXB1dGVyIFN5c3RlbXMgYW5kIE5ldHdvcmtzLiAgRHVyaW5nIGxhc3QgMTIgeWVhcnMgb2YgbXkgbGlmZSwgSVxcJ3ZlIGJlZW4gcHJvZmVzc2lvbmFsbHkgY29kaW5nIG9uIFBhc2NhbCwgRGVscGhpLCBQSFAsIEMrKywgQyMuIE5vdyBJIGFtIHRyeWluZyBteSBza2lsbHMgd2l0aCBTY2FsYSBhbmQgSmF2YVNjcmlwdC4gSG9wZSBJXFwnbGwgc3dpdGNoIHNob3J0bHkgdG8gdGhpcyBuZXcgZmFzdCBncm93aW5nIHN0cmVhbS5cIlxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb25maWc7IiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzLmpzJyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgQ29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanMnKTtcbnZhciBHYSA9IHJlcXVpcmUoJ3JlYWN0LWdhJyk7XG5cbkdhLmluaXRpYWxpemUoQ29uZmlnLmdhaWQpO1xuUm91dGVyLnJ1bihyb3V0ZXMsIFJvdXRlci5IYXNoTG9jYXRpb24sIGZ1bmN0aW9uIChIYW5kbGVyLCBzdGF0ZSkge1xuICAgIEdhLnBhZ2V2aWV3KHN0YXRlLnBhdGhuYW1lKTtcbiAgICBSZWFjdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChIYW5kbGVyLCBudWxsKSwgZG9jdW1lbnQuYm9keSk7XG59KTsiLCJ2YXIgQXBwID0gcmVxdWlyZSgnLi9BcHAuanMnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQWRtaW4gPSByZXF1aXJlKCcuL0FkbWluLmpzeCcpO1xudmFyIEluZm9CbG9jayA9IHJlcXVpcmUoJy4vSW5mb0Jsb2NrLmpzeCcpO1xudmFyIEVkdWNhdGlvbiA9IHJlcXVpcmUoJy4vRWR1Y2F0aW9uLmpzeCcpO1xudmFyIFJlc3VtZSA9IHJlcXVpcmUoJy4vUmVzdW1lLmpzeCcpO1xudmFyIENvbnRhY3QgPSByZXF1aXJlKCcuL0NvbnRhY3QuanN4Jyk7XG52YXIgTm90Rm91bmQgPSByZXF1aXJlKCcuL05vdEZvdW5kLmpzeCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xudmFyIFJvdXRlID0gUm91dGVyLlJvdXRlO1xudmFyIERlZmF1bHRSb3V0ZSA9IFJvdXRlci5EZWZhdWx0Um91dGU7XG52YXIgTm90Rm91bmRSb3V0ZSA9IFJvdXRlci5Ob3RGb3VuZFJvdXRlO1xuXG52YXIgcm91dGVzID0gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtoYW5kbGVyOiBBcHAsIHBhdGg6IFwiL1wifSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVmYXVsdFJvdXRlLCB7aGFuZGxlcjogSW5mb0Jsb2NrfSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5vdEZvdW5kUm91dGUsIHtoYW5kbGVyOiBOb3RGb3VuZH0pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge25hbWU6IFwicHJvZmlsZVwiLCBoYW5kbGVyOiBJbmZvQmxvY2t9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtuYW1lOiBcImVkdWNhdGlvblwiLCBoYW5kbGVyOiBFZHVjYXRpb259KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtuYW1lOiBcInJlc3VtZVwiLCBoYW5kbGVyOiBSZXN1bWV9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtuYW1lOiBcImNvbnRhY3RcIiwgaGFuZGxlcjogQ29udGFjdH0pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge25hbWU6IFwiYWRtaW5cIiwgaGFuZGxlcjogQWRtaW59KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtuYW1lOiBcImJsb2dcIiwgaGFuZGxlcjogTm90Rm91bmR9KVxuICAgIClcbik7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdyZWFjdC9saWIvT2JqZWN0LmFzc2lnbicpO1xuXG52YXIgTkVXVEFCID0gJ19ibGFuayc7XG5cbnZhciBPdXRib3VuZExpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnT3V0Ym91bmRMaW5rJyxcbiAgcHJvcFR5cGVzOiB7XG4gICAgZXZlbnRMYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0sXG4gIHN0YXRpY3M6IHtcbiAgICB0cmFja0xpbms6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiZ2EgdHJhY2tpbmcgbm90IGVuYWJsZWRcIik7XG4gICAgfVxuICB9LFxuICBoYW5kbGVDbGljazogZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZXZlbnRNZXRhID0ge2xhYmVsOiBwcm9wcy5ldmVudExhYmVsfTtcbiAgICBPdXRib3VuZExpbmsudHJhY2tMaW5rKGV2ZW50TWV0YSwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCBwcm9wcy50YXJnZXQgPT09IE5FV1RBQiApIHtcbiAgICAgICAgd2luZG93Lm9wZW4ocHJvcHMudG8sIE5FV1RBQik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHByb3BzLnRvO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChwcm9wcy5vbkNsaWNrKSB7XG4gICAgICBwcm9wcy5vbkNsaWNrKGUpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb3BzID0gYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICBocmVmOiB0aGlzLnByb3BzLnRvLFxuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGlja1xuICAgIH0pO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgcHJvcHMpO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBPdXRib3VuZExpbms7XG4iLCIvKipcbiAqIFJlYWN0IEdvb2dsZSBBbmFseXRpY3MgTW9kdWxlXG4gKlxuICogQHBhY2thZ2UgcmVhY3QtZ2FcbiAqIEBhdXRob3IgIEFkYW0gTG9mdGluZyA8YWRhbUBtb3ppbGxhZm91bmRhdGlvbi5vcmc+XG4gKiAgICAgICAgICBBdHVsIFZhcm1hIDxhdHVsQG1vemlsbGFmb3VuZGF0aW9uLm9yZz5cbiAqL1xuXG4vKipcbiAqIFV0aWxpdGllc1xuICovXG5cbnZhciBfcmVkYWN0ZWQgPSAnUkVEQUNURUQgKFBvdGVudGlhbCBFbWFpbCBBZGRyZXNzKSc7XG52YXIgX2RlYnVnID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHdhcm4gKHMpIHtcbiAgY29uc29sZS53YXJuKCdbcmVhY3QtZ2FdJywgcyk7XG59XG5cbmZ1bmN0aW9uIGxvZyAocykge1xuICBjb25zb2xlLmluZm8oJ1tyZWFjdC1nYV0nLCBzKTtcbn1cblxuLy8gR0Egc3RyaW5ncyBuZWVkIHRvIGhhdmUgbGVhZGluZy90cmFpbGluZyB3aGl0ZXNwYWNlIHRyaW1tZWQsIGFuZCBub3QgYWxsXG4vLyBicm93c2VycyBoYXZlIFN0cmluZy5wcm90b3RveXBlLnRyaW0oKS5cbmZ1bmN0aW9uIHRyaW0ocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxlYWRpbmdTbGFzaCAocykge1xuICBpZiAocy5zdWJzdHJpbmcoMCwgMSkgPT09ICcvJykge1xuICAgIHMgPSBzLnN1YnN0cmluZygxKTtcbiAgfVxuICByZXR1cm4gcztcbn1cblxuLyoqXG4gKiBUbyBUaXRsZSBDYXNlIDIuMSAtIGh0dHA6Ly9pbmRpdmlkZWQuY29tL2NvZGUvdG8tdGl0bGUtY2FzZS9cbiAqIENvcHlyaWdodCAyMDA4LTIwMTMgRGF2aWQgR291Y2guIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb3VjaC90by10aXRsZS1jYXNlXG4gKi9cbmZ1bmN0aW9uIHRvVGl0bGVDYXNlKHMpe1xuICB2YXIgc21hbGxXb3JkcyA9IC9eKGF8YW58YW5kfGFzfGF0fGJ1dHxieXxlbnxmb3J8aWZ8aW58bm9yfG9mfG9ufG9yfHBlcnx0aGV8dG98dnM/XFwuP3x2aWEpJC9pO1xuICBzID0gdHJpbShzKTtcblxuICByZXR1cm4gcy5yZXBsYWNlKC9bQS1aYS16MC05XFx1MDBDMC1cXHUwMEZGXStbXlxccy1dKi9nLCBmdW5jdGlvbihtYXRjaCwgaW5kZXgsIHRpdGxlKXtcbiAgICBpZiAoaW5kZXggPiAwICYmXG4gICAgICAgIGluZGV4ICsgbWF0Y2gubGVuZ3RoICE9PSB0aXRsZS5sZW5ndGggJiZcbiAgICAgICAgbWF0Y2guc2VhcmNoKHNtYWxsV29yZHMpID4gLTEgJiZcbiAgICAgICAgdGl0bGUuY2hhckF0KGluZGV4IC0gMikgIT09IFwiOlwiICYmXG4gICAgICAgICh0aXRsZS5jaGFyQXQoaW5kZXggKyBtYXRjaC5sZW5ndGgpICE9PSAnLScgfHwgdGl0bGUuY2hhckF0KGluZGV4IC0gMSkgPT09ICctJykgJiZcbiAgICAgICAgdGl0bGUuY2hhckF0KGluZGV4IC0gMSkuc2VhcmNoKC9bXlxccy1dLykgPCAwKSB7XG4gICAgICByZXR1cm4gbWF0Y2gudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAobWF0Y2guc3Vic3RyKDEpLnNlYXJjaCgvW0EtWl18XFwuLi8pID4gLTEpIHtcbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtYXRjaC5zdWJzdHIoMSk7XG4gIH0pO1xufVxuXG4vLyBTZWUgaWYgcyBjb3VsZCBiZSBhbiBlbWFpbCBhZGRyZXNzLiBXZSBkb24ndCB3YW50IHRvIHNlbmQgcGVyc29uYWwgZGF0YSBsaWtlIGVtYWlsLlxuZnVuY3Rpb24gbWlnaHRCZUVtYWlsKHMpIHtcbiAgLy8gVGhlcmUncyBubyBwb2ludCB0cnlpbmcgdG8gdmFsaWRhdGUgcmZjODIyIGZ1bGx5LCBqdXN0IGxvb2sgZm9yIC4uLkAuLi5cbiAgcmV0dXJuICgvW15AXStAW15AXSsvKS50ZXN0KHMpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXQocykge1xuICBpZihtaWdodEJlRW1haWwocykpIHtcbiAgICB3YXJuKFwiVGhpcyBhcmcgbG9va3MgbGlrZSBhbiBlbWFpbCBhZGRyZXNzLCByZWRhY3RpbmcuXCIpO1xuICAgIHMgPSBfcmVkYWN0ZWQ7XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgcyA9IHRvVGl0bGVDYXNlKHMpO1xuICByZXR1cm4gcztcbn1cblxudmFyIHJlYWN0R0EgPSB7XG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKGdhVHJhY2tpbmdJRCwgb3B0aW9ucykge1xuICAgIGlmICghZ2FUcmFja2luZ0lEKSB7XG4gICAgICB3YXJuKCdnYVRyYWNraW5nSUQgaXMgcmVxdWlyZWQgaW4gaW5pdGlhbGl6ZSgpJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLmRlYnVnICYmIG9wdGlvbnMuZGVidWcgPT09IHRydWUpIHtcbiAgICAgICAgX2RlYnVnID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvXG4gICAgLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuICAgIChmdW5jdGlvbihpLCBzLCBvLCBnLCByLCBhLCBtKSB7XG4gICAgICBpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXSA9IHI7XG4gICAgICBpW3JdID0gaVtyXSB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgKGlbcl0ucSA9IGlbcl0ucSB8fCBbXSkucHVzaChhcmd1bWVudHMpXG4gICAgICB9LCBpW3JdLmwgPSAxICogbmV3IERhdGUoKTtcbiAgICAgIGEgPSBzLmNyZWF0ZUVsZW1lbnQobyksXG4gICAgICAgICAgbSA9IHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07XG4gICAgICBhLmFzeW5jID0gMTtcbiAgICAgIGEuc3JjID0gZztcbiAgICAgIG0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSwgbSlcbiAgICB9KSh3aW5kb3csIGRvY3VtZW50LCAnc2NyaXB0JyxcbiAgICAgICAnLy93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJywgJ2dhJyk7XG4gICAgLyoganNoaW50IGlnbm9yZTplbmQgKi9cblxuICAgIGdhKCdjcmVhdGUnLCBnYVRyYWNraW5nSUQsICdhdXRvJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIHBhZ2V2aWV3OlxuICAgKiBCYXNpYyBHQSBwYWdldmlldyB0cmFja2luZ1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGggLSB0aGUgY3VycmVudCBwYWdlIHBhZ2UgZS5nLiAnL2Fib3V0J1xuICAgKi9cbiAgcGFnZXZpZXc6IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICB3YXJuKCdwYXRoIGlzIHJlcXVpcmVkIGluIC5wYWdldmlldygpJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGF0aCA9IHRyaW0ocGF0aCk7XG4gICAgaWYgKHBhdGggPT09ICcnKSB7XG4gICAgICB3YXJuKCdwYXRoIGNhbm5vdCBiZSBhbiBlbXB0eSBzdHJpbmcgaW4gLnBhZ2V2aWV3KCknKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGdhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBnYSgnc2VuZCcsICdwYWdldmlldycsIHBhdGgpO1xuXG4gICAgICBpZiAoX2RlYnVnKSB7XG4gICAgICAgIGxvZygnY2FsbGVkIGdhKFxcJ3NlbmRcXCcsIFxcJ3BhZ2V2aWV3XFwnLCBwYXRoKTsnKTtcbiAgICAgICAgbG9nKCd3aXRoIHBhdGg6ICcgKyBwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIG1vZGFsdmlldzpcbiAgICogYSBwcm94eSB0byBiYXNpYyBHQSBwYWdldmlldyB0cmFja2luZyB0byBjb25zaXN0ZW50bHkgdHJhY2tcbiAgICogbW9kYWwgdmlld3MgdGhhdCBhcmUgYW4gZXF1aXZhbGVudCBVWCB0byBhIHRyYWRpdGlvbmFsIHBhZ2V2aWV3XG4gICAqIEBwYXJhbSAge1N0cmluZ30gbW9kYWxOYW1lIGUuZy4gJ2FkZC1vci1lZGl0LWNsdWInXG4gICAqL1xuICBtb2RhbHZpZXc6IGZ1bmN0aW9uIChtb2RhbE5hbWUpIHtcbiAgICBpZiAoIW1vZGFsTmFtZSkge1xuICAgICAgd2FybignbW9kYWxOYW1lIGlzIHJlcXVpcmVkIGluIC5tb2RhbHZpZXcobW9kYWxOYW1lKScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1vZGFsTmFtZSA9IHRyaW0obW9kYWxOYW1lKTtcbiAgICBtb2RhbE5hbWUgPSByZW1vdmVMZWFkaW5nU2xhc2gobW9kYWxOYW1lKTtcblxuICAgIGlmIChtb2RhbE5hbWUgPT09ICcnKSB7XG4gICAgICB3YXJuKCdtb2RhbE5hbWUgY2Fubm90IGJlIGFuIGVtcHR5IHN0cmluZyBvciBhIHNpbmdsZSAvIGluIC5tb2RhbHZpZXcoKScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZ2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG1vZGFsTmFtZSA9IHRyaW0obW9kYWxOYW1lKTtcbiAgICAgIHZhciBwYXRoID0gJy9tb2RhbC8nICsgbW9kYWxOYW1lO1xuICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCBwYXRoKTtcblxuICAgICAgaWYgKF9kZWJ1Zykge1xuICAgICAgICBsb2coJ2NhbGxlZCBnYShcXCdzZW5kXFwnLCBcXCdwYWdldmlld1xcJywgcGF0aCk7Jyk7XG4gICAgICAgIGxvZygnd2l0aCBwYXRoOiAnICsgcGF0aCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBldmVudDpcbiAgICogR0EgZXZlbnQgdHJhY2tpbmdcbiAgICogQHBhcmFtIGFyZ3MuY2F0ZWdvcnkge1N0cmluZ30gcmVxdWlyZWRcbiAgICogQHBhcmFtIGFyZ3MuYWN0aW9uIHtTdHJpbmd9IHJlcXVpcmVkXG4gICAqIEBwYXJhbSBhcmdzLmxhYmVsIHtTdHJpbmd9IG9wdGlvbmFsXG4gICAqIEBwYXJhbSBhcmdzLnZhbHVlIHtJbnR9IG9wdGlvbmFsXG4gICAqIEBwYXJhbSBhcmdzLm5vbkludGVyYWN0aW9uIHtib29sZWFufSBvcHRpb25hbFxuICAgKi9cbiAgZXZlbnQ6IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBnYSA9PT0gJ2Z1bmN0aW9uJykge1xuXG4gICAgICAvLyBTaW1wbGUgVmFsaWRhdGlvblxuICAgICAgaWYgKCFhcmdzIHx8ICFhcmdzLmNhdGVnb3J5IHx8ICFhcmdzLmFjdGlvbikge1xuICAgICAgICB3YXJuKCdhcmdzLmNhdGVnb3J5IEFORCBhcmdzLmFjdGlvbiBhcmUgcmVxdWlyZWQgaW4gZXZlbnQoKScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFJlcXVpcmVkIEZpZWxkc1xuICAgICAgdmFyIGZpZWxkT2JqZWN0ID0ge1xuICAgICAgICAnaGl0VHlwZSc6ICdldmVudCcsXG4gICAgICAgICdldmVudENhdGVnb3J5JzogZm9ybWF0KGFyZ3MuY2F0ZWdvcnkpLFxuICAgICAgICAnZXZlbnRBY3Rpb24nOiBmb3JtYXQoYXJncy5hY3Rpb24pXG4gICAgICB9O1xuXG4gICAgICAvLyBPcHRpb25hbCBGaWVsZHNcbiAgICAgIGlmIChhcmdzLmxhYmVsKSB7XG4gICAgICAgIGZpZWxkT2JqZWN0LmV2ZW50TGFiZWwgPSBmb3JtYXQoYXJncy5sYWJlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhcmdzLnZhbHVlKSB7XG4gICAgICAgIGlmKHR5cGVvZiBhcmdzLnZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgIHdhcm4oJ0V4cGVjdGVkIGBhcmdzLnZhbHVlYCBhcmcgdG8gYmUgYSBOdW1iZXIuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmllbGRPYmplY3QuZXZlbnRWYWx1ZSA9IGFyZ3MudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFyZ3Mubm9uSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgaWYodHlwZW9mIGFyZ3Mubm9uSW50ZXJhY3Rpb24gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHdhcm4oJ2BhcmdzLm5vbkludGVyYWN0aW9uYCBtdXN0IGJlIGEgYm9vbGVhbi4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWVsZE9iamVjdC5ub25JbnRlcmFjdGlvbiA9IGFyZ3Mubm9uSW50ZXJhY3Rpb247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2VuZCB0byBHQVxuICAgICAgZ2EoJ3NlbmQnLCBmaWVsZE9iamVjdCk7XG5cbiAgICAgIGlmIChfZGVidWcpIHtcbiAgICAgICAgbG9nKCdjYWxsZWQgZ2EoXFwnc2VuZFxcJywgZmllbGRPYmplY3QpOycpO1xuICAgICAgICBsb2coJ3dpdGggZmllbGRPYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShmaWVsZE9iamVjdCkpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogb3V0Ym91bmRMaW5rOlxuICAgKiBHQSBvdXRib3VuZExpbmsgdHJhY2tpbmdcbiAgICogQHBhcmFtIGFyZ3MubGFiZWwge1N0cmluZ30gZS5nLiB1cmwsIG9yICdDcmVhdGUgYW4gQWNjb3VudCdcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gaGl0Q2FsbGJhY2sgLSBDYWxsZWQgYWZ0ZXIgcHJvY2Vzc2luZyBhIGhpdC5cbiAgICovXG4gIG91dGJvdW5kTGluazogZnVuY3Rpb24gKGFyZ3MsIGhpdENhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBoaXRDYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2FybignaGl0Q2FsbGJhY2sgZnVuY3Rpb24gaXMgcmVxdWlyZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGdhID09PSAnZnVuY3Rpb24nKSB7XG5cbiAgICAgIC8vIFNpbXBsZSBWYWxpZGF0aW9uXG4gICAgICBpZiAoIWFyZ3MgfHwgIWFyZ3MubGFiZWwpIHtcbiAgICAgICAgd2FybignYXJncy5sYWJlbCBpcyByZXF1aXJlZCBpbiBvdXRib3VuZExpbmsoKScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFJlcXVpcmVkIEZpZWxkc1xuICAgICAgdmFyIGZpZWxkT2JqZWN0ID0ge1xuICAgICAgICAnaGl0VHlwZSc6ICdldmVudCcsXG4gICAgICAgICdldmVudENhdGVnb3J5JzogJ091dGJvdW5kJyxcbiAgICAgICAgJ2V2ZW50QWN0aW9uJzogJ0NsaWNrJyxcbiAgICAgICAgJ2V2ZW50TGFiZWwnOiBmb3JtYXQoYXJncy5sYWJlbClcbiAgICAgIH07XG5cbiAgICAgIHZhciBzYWZldHlDYWxsYmFja0NhbGxlZCA9IGZhbHNlO1xuICAgICAgdmFyIHNhZmV0eUNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIFRoaXMgcHJldmVudHMgYSBkZWxheWVkIHJlc3BvbnNlIGZyb20gR0FcbiAgICAgICAgLy8gY2F1c2luZyBoaXRDYWxsYmFjayBmcm9tIGJlaW5nIGZpcmVkIHR3aWNlXG4gICAgICAgIHNhZmV0eUNhbGxiYWNrQ2FsbGVkID0gdHJ1ZTtcblxuICAgICAgICBoaXRDYWxsYmFjaygpO1xuICAgICAgfTtcblxuICAgICAgLy8gVXNpbmcgYSB0aW1lb3V0IHRvIGVuc3VyZSB0aGUgZXhlY3V0aW9uIG9mIGNyaXRpY2FsIGFwcGxpY2F0aW9uIGNvZGVcbiAgICAgIC8vIGluIHRoZSBjYXNlIHdoZW4gdGhlIEdBIHNlcnZlciBtaWdodCBiZSBkb3duXG4gICAgICAvLyBvciBhbiBhZCBibG9ja2VyIHByZXZlbnRzIHNlbmRpbmcgdGhlIGRhdGFcblxuICAgICAgLy8gcmVnaXN0ZXIgc2FmZXR5IG5ldCB0aW1lb3V0OlxuICAgICAgdmFyIHQgPSBzZXRUaW1lb3V0KHNhZmV0eUNhbGxiYWNrLCAyNTApO1xuXG4gICAgICB2YXIgY2xlYXJhYmxlQ2FsbGJhY2tGb3JHQSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgICAgaWYgKCFzYWZldHlDYWxsYmFja0NhbGxlZCkge1xuICAgICAgICAgICAgaGl0Q2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmaWVsZE9iamVjdC5oaXRDYWxsYmFjayA9IGNsZWFyYWJsZUNhbGxiYWNrRm9yR0E7XG5cbiAgICAgIC8vIFNlbmQgdG8gR0FcbiAgICAgIGdhKCdzZW5kJywgZmllbGRPYmplY3QpO1xuXG4gICAgICBpZiAoX2RlYnVnKSB7XG4gICAgICAgIGxvZygnY2FsbGVkIGdhKFxcJ3NlbmRcXCcsIGZpZWxkT2JqZWN0KTsnKTtcbiAgICAgICAgbG9nKCd3aXRoIGZpZWxkT2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkoZmllbGRPYmplY3QpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgZ2EgaXMgbm90IGRlZmluZWQsIHJldHVybiB0aGUgY2FsbGJhY2sgc28gdGhlIGFwcGxpY2F0aW9uXG4gICAgICAvLyBjb250aW51ZXMgdG8gd29yayBhcyBleHBlY3RlZFxuICAgICAgc2V0VGltZW91dChoaXRDYWxsYmFjaywgMCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgT3V0Ym91bmRMaW5rID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL091dGJvdW5kTGluaycpO1xuT3V0Ym91bmRMaW5rLnRyYWNrTGluayA9IHJlYWN0R0Eub3V0Ym91bmRMaW5rO1xucmVhY3RHQS5PdXRib3VuZExpbmsgPSBPdXRib3VuZExpbms7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVhY3RHQTtcblxuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgY2FuY2VsbGF0aW9uIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGF3YXlcbiAqIGJlZm9yZSB0aGUgcHJldmlvdXMgdHJhbnNpdGlvbiBoYXMgZnVsbHkgcmVzb2x2ZWQuXG4gKi9cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBDYW5jZWxsYXRpb24oKSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbGxhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgY2FuVXNlRE9NID0gcmVxdWlyZSgncmVhY3QvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50JykuY2FuVXNlRE9NO1xuXG52YXIgSGlzdG9yeSA9IHtcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgbnVtYmVyIG9mIGVudHJpZXMgaW4gdGhlIGhpc3RvcnkuXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgcHJvcGVydHkgaXMgcmVhZC1vbmx5LlxuICAgKi9cbiAgbGVuZ3RoOiAxLFxuXG4gIC8qKlxuICAgKiBTZW5kcyB0aGUgYnJvd3NlciBiYWNrIG9uZSBlbnRyeSBpbiB0aGUgaGlzdG9yeS5cbiAgICovXG4gIGJhY2s6IGZ1bmN0aW9uIGJhY2soKSB7XG4gICAgaW52YXJpYW50KGNhblVzZURPTSwgJ0Nhbm5vdCB1c2UgSGlzdG9yeS5iYWNrIHdpdGhvdXQgYSBET00nKTtcblxuICAgIC8vIERvIHRoaXMgZmlyc3Qgc28gdGhhdCBIaXN0b3J5Lmxlbmd0aCB3aWxsXG4gICAgLy8gYmUgYWNjdXJhdGUgaW4gbG9jYXRpb24gY2hhbmdlIGxpc3RlbmVycy5cbiAgICBIaXN0b3J5Lmxlbmd0aCAtPSAxO1xuXG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGlzdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbi8qIGpzaGludCAtVzA4NCAqL1xudmFyIFBhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbmZ1bmN0aW9uIGRlZXBTZWFyY2gocm91dGUsIHBhdGhuYW1lLCBxdWVyeSkge1xuICAvLyBDaGVjayB0aGUgc3VidHJlZSBmaXJzdCB0byBmaW5kIHRoZSBtb3N0IGRlZXBseS1uZXN0ZWQgbWF0Y2guXG4gIHZhciBjaGlsZFJvdXRlcyA9IHJvdXRlLmNoaWxkUm91dGVzO1xuICBpZiAoY2hpbGRSb3V0ZXMpIHtcbiAgICB2YXIgbWF0Y2gsIGNoaWxkUm91dGU7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNoaWxkUm91dGVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjaGlsZFJvdXRlID0gY2hpbGRSb3V0ZXNbaV07XG5cbiAgICAgIGlmIChjaGlsZFJvdXRlLmlzRGVmYXVsdCB8fCBjaGlsZFJvdXRlLmlzTm90Rm91bmQpIGNvbnRpbnVlOyAvLyBDaGVjayB0aGVzZSBpbiBvcmRlciBsYXRlci5cblxuICAgICAgaWYgKG1hdGNoID0gZGVlcFNlYXJjaChjaGlsZFJvdXRlLCBwYXRobmFtZSwgcXVlcnkpKSB7XG4gICAgICAgIC8vIEEgcm91dGUgaW4gdGhlIHN1YnRyZWUgbWF0Y2hlZCEgQWRkIHRoaXMgcm91dGUgYW5kIHdlJ3JlIGRvbmUuXG4gICAgICAgIG1hdGNoLnJvdXRlcy51bnNoaWZ0KHJvdXRlKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE5vIGNoaWxkIHJvdXRlcyBtYXRjaGVkOyB0cnkgdGhlIGRlZmF1bHQgcm91dGUuXG4gIHZhciBkZWZhdWx0Um91dGUgPSByb3V0ZS5kZWZhdWx0Um91dGU7XG4gIGlmIChkZWZhdWx0Um91dGUgJiYgKHBhcmFtcyA9IFBhdGhVdGlscy5leHRyYWN0UGFyYW1zKGRlZmF1bHRSb3V0ZS5wYXRoLCBwYXRobmFtZSkpKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRjaChwYXRobmFtZSwgcGFyYW1zLCBxdWVyeSwgW3JvdXRlLCBkZWZhdWx0Um91dGVdKTtcbiAgfSAvLyBEb2VzIHRoZSBcIm5vdCBmb3VuZFwiIHJvdXRlIG1hdGNoP1xuICB2YXIgbm90Rm91bmRSb3V0ZSA9IHJvdXRlLm5vdEZvdW5kUm91dGU7XG4gIGlmIChub3RGb3VuZFJvdXRlICYmIChwYXJhbXMgPSBQYXRoVXRpbHMuZXh0cmFjdFBhcmFtcyhub3RGb3VuZFJvdXRlLnBhdGgsIHBhdGhuYW1lKSkpIHtcbiAgICByZXR1cm4gbmV3IE1hdGNoKHBhdGhuYW1lLCBwYXJhbXMsIHF1ZXJ5LCBbcm91dGUsIG5vdEZvdW5kUm91dGVdKTtcbiAgfSAvLyBMYXN0IGF0dGVtcHQ6IGNoZWNrIHRoaXMgcm91dGUuXG4gIHZhciBwYXJhbXMgPSBQYXRoVXRpbHMuZXh0cmFjdFBhcmFtcyhyb3V0ZS5wYXRoLCBwYXRobmFtZSk7XG4gIGlmIChwYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IE1hdGNoKHBhdGhuYW1lLCBwYXJhbXMsIHF1ZXJ5LCBbcm91dGVdKTtcbiAgfXJldHVybiBudWxsO1xufVxuXG52YXIgTWF0Y2ggPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYXRjaChwYXRobmFtZSwgcGFyYW1zLCBxdWVyeSwgcm91dGVzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hdGNoKTtcblxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5yb3V0ZXMgPSByb3V0ZXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWF0Y2gsIG51bGwsIFt7XG4gICAga2V5OiAnZmluZE1hdGNoJyxcblxuICAgIC8qKlxuICAgICAqIEF0dGVtcHRzIHRvIG1hdGNoIGRlcHRoLWZpcnN0IGEgcm91dGUgaW4gdGhlIGdpdmVuIHJvdXRlJ3NcbiAgICAgKiBzdWJ0cmVlIGFnYWluc3QgdGhlIGdpdmVuIHBhdGggYW5kIHJldHVybnMgdGhlIG1hdGNoIGlmIGl0XG4gICAgICogc3VjY2VlZHMsIG51bGwgaWYgbm8gbWF0Y2ggY2FuIGJlIG1hZGUuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmRNYXRjaChyb3V0ZXMsIHBhdGgpIHtcbiAgICAgIHZhciBwYXRobmFtZSA9IFBhdGhVdGlscy53aXRob3V0UXVlcnkocGF0aCk7XG4gICAgICB2YXIgcXVlcnkgPSBQYXRoVXRpbHMuZXh0cmFjdFF1ZXJ5KHBhdGgpO1xuICAgICAgdmFyIG1hdGNoID0gbnVsbDtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJvdXRlcy5sZW5ndGg7IG1hdGNoID09IG51bGwgJiYgaSA8IGxlbjsgKytpKSBtYXRjaCA9IGRlZXBTZWFyY2gocm91dGVzW2ldLCBwYXRobmFtZSwgcXVlcnkpO1xuXG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hdGNoO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXRjaDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG4vKipcbiAqIEEgbWl4aW4gZm9yIGNvbXBvbmVudHMgdGhhdCBtb2RpZnkgdGhlIFVSTC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAqICAgICBtaXhpbnM6IFsgUm91dGVyLk5hdmlnYXRpb24gXSxcbiAqICAgICBoYW5kbGVDbGljayhldmVudCkge1xuICogICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAqICAgICAgIHRoaXMudHJhbnNpdGlvblRvKCdhUm91dGUnLCB7IHRoZTogJ3BhcmFtcycgfSwgeyB0aGU6ICdxdWVyeScgfSk7XG4gKiAgICAgfSxcbiAqICAgICByZW5kZXIoKSB7XG4gKiAgICAgICByZXR1cm4gKFxuICogICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5DbGljayBtZSE8L2E+XG4gKiAgICAgICApO1xuICogICAgIH1cbiAqICAgfSk7XG4gKi9cbnZhciBOYXZpZ2F0aW9uID0ge1xuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIHJvdXRlcjogUHJvcFR5cGVzLnJvdXRlci5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYWJzb2x1dGUgVVJMIHBhdGggY3JlYXRlZCBmcm9tIHRoZSBnaXZlbiByb3V0ZVxuICAgKiBuYW1lLCBVUkwgcGFyYW1ldGVycywgYW5kIHF1ZXJ5IHZhbHVlcy5cbiAgICovXG4gIG1ha2VQYXRoOiBmdW5jdGlvbiBtYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLm1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyB0aGF0IG1heSBzYWZlbHkgYmUgdXNlZCBhcyB0aGUgaHJlZiBvZiBhXG4gICAqIGxpbmsgdG8gdGhlIHJvdXRlIHdpdGggdGhlIGdpdmVuIG5hbWUuXG4gICAqL1xuICBtYWtlSHJlZjogZnVuY3Rpb24gbWFrZUhyZWYodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5tYWtlSHJlZih0bywgcGFyYW1zLCBxdWVyeSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb25zIHRvIHRoZSBVUkwgc3BlY2lmaWVkIGluIHRoZSBhcmd1bWVudHMgYnkgcHVzaGluZ1xuICAgKiBhIG5ldyBVUkwgb250byB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICovXG4gIHRyYW5zaXRpb25UbzogZnVuY3Rpb24gdHJhbnNpdGlvblRvKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgdGhpcy5jb250ZXh0LnJvdXRlci50cmFuc2l0aW9uVG8odG8sIHBhcmFtcywgcXVlcnkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgYXJndW1lbnRzIGJ5IHJlcGxhY2luZ1xuICAgKiB0aGUgY3VycmVudCBVUkwgaW4gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAqL1xuICByZXBsYWNlV2l0aDogZnVuY3Rpb24gcmVwbGFjZVdpdGgodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICB0aGlzLmNvbnRleHQucm91dGVyLnJlcGxhY2VXaXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgfSxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbnMgdG8gdGhlIHByZXZpb3VzIFVSTC5cbiAgICovXG4gIGdvQmFjazogZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmdvQmFjaygpO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTmF2aWdhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIHFzID0gcmVxdWlyZSgncXMnKTtcblxudmFyIHBhcmFtQ29tcGlsZU1hdGNoZXIgPSAvOihbYS16QS1aXyRdW2EtekEtWjAtOV8kXSopfFsqLigpXFxbXFxdXFxcXCt8e31eJF0vZztcbnZhciBwYXJhbUluamVjdE1hdGNoZXIgPSAvOihbYS16QS1aXyRdW2EtekEtWjAtOV8kP10qWz9dPyl8WypdL2c7XG52YXIgcGFyYW1JbmplY3RUcmFpbGluZ1NsYXNoTWF0Y2hlciA9IC9cXC9cXC9cXD98XFwvXFw/XFwvfFxcL1xcPy9nO1xudmFyIHF1ZXJ5TWF0Y2hlciA9IC9cXD8oLiopJC87XG5cbnZhciBfY29tcGlsZWRQYXR0ZXJucyA9IHt9O1xuXG5mdW5jdGlvbiBjb21waWxlUGF0dGVybihwYXR0ZXJuKSB7XG4gIGlmICghKHBhdHRlcm4gaW4gX2NvbXBpbGVkUGF0dGVybnMpKSB7XG4gICAgdmFyIHBhcmFtTmFtZXMgPSBbXTtcbiAgICB2YXIgc291cmNlID0gcGF0dGVybi5yZXBsYWNlKHBhcmFtQ29tcGlsZU1hdGNoZXIsIGZ1bmN0aW9uIChtYXRjaCwgcGFyYW1OYW1lKSB7XG4gICAgICBpZiAocGFyYW1OYW1lKSB7XG4gICAgICAgIHBhcmFtTmFtZXMucHVzaChwYXJhbU5hbWUpO1xuICAgICAgICByZXR1cm4gJyhbXi8/I10rKSc7XG4gICAgICB9IGVsc2UgaWYgKG1hdGNoID09PSAnKicpIHtcbiAgICAgICAgcGFyYW1OYW1lcy5wdXNoKCdzcGxhdCcpO1xuICAgICAgICByZXR1cm4gJyguKj8pJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnXFxcXCcgKyBtYXRjaDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9jb21waWxlZFBhdHRlcm5zW3BhdHRlcm5dID0ge1xuICAgICAgbWF0Y2hlcjogbmV3IFJlZ0V4cCgnXicgKyBzb3VyY2UgKyAnJCcsICdpJyksXG4gICAgICBwYXJhbU5hbWVzOiBwYXJhbU5hbWVzXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29tcGlsZWRQYXR0ZXJuc1twYXR0ZXJuXTtcbn1cblxudmFyIFBhdGhVdGlscyA9IHtcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBwYXRoIGlzIGFic29sdXRlLlxuICAgKi9cbiAgaXNBYnNvbHV0ZTogZnVuY3Rpb24gaXNBYnNvbHV0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEpvaW5zIHR3byBVUkwgcGF0aHMgdG9nZXRoZXIuXG4gICAqL1xuICBqb2luOiBmdW5jdGlvbiBqb2luKGEsIGIpIHtcbiAgICByZXR1cm4gYS5yZXBsYWNlKC9cXC8qJC8sICcvJykgKyBiO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBuYW1lcyBvZiBhbGwgcGFyYW1ldGVycyBpbiB0aGUgZ2l2ZW4gcGF0dGVybi5cbiAgICovXG4gIGV4dHJhY3RQYXJhbU5hbWVzOiBmdW5jdGlvbiBleHRyYWN0UGFyYW1OYW1lcyhwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGNvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pLnBhcmFtTmFtZXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHRoZSBwb3J0aW9ucyBvZiB0aGUgZ2l2ZW4gVVJMIHBhdGggdGhhdCBtYXRjaCB0aGUgZ2l2ZW4gcGF0dGVyblxuICAgKiBhbmQgcmV0dXJucyBhbiBvYmplY3Qgb2YgcGFyYW0gbmFtZSA9PiB2YWx1ZSBwYWlycy4gUmV0dXJucyBudWxsIGlmIHRoZVxuICAgKiBwYXR0ZXJuIGRvZXMgbm90IG1hdGNoIHRoZSBnaXZlbiBwYXRoLlxuICAgKi9cbiAgZXh0cmFjdFBhcmFtczogZnVuY3Rpb24gZXh0cmFjdFBhcmFtcyhwYXR0ZXJuLCBwYXRoKSB7XG4gICAgdmFyIF9jb21waWxlUGF0dGVybiA9IGNvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pO1xuXG4gICAgdmFyIG1hdGNoZXIgPSBfY29tcGlsZVBhdHRlcm4ubWF0Y2hlcjtcbiAgICB2YXIgcGFyYW1OYW1lcyA9IF9jb21waWxlUGF0dGVybi5wYXJhbU5hbWVzO1xuXG4gICAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChtYXRjaGVyKTtcblxuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH12YXIgcGFyYW1zID0ge307XG5cbiAgICBwYXJhbU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtTmFtZSwgaW5kZXgpIHtcbiAgICAgIHBhcmFtc1twYXJhbU5hbWVdID0gbWF0Y2hbaW5kZXggKyAxXTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiByb3V0ZSBwYXRoIHdpdGggcGFyYW1zIGludGVycG9sYXRlZC4gVGhyb3dzXG4gICAqIGlmIHRoZXJlIGlzIGEgZHluYW1pYyBzZWdtZW50IG9mIHRoZSByb3V0ZSBwYXRoIGZvciB3aGljaCB0aGVyZSBpcyBubyBwYXJhbS5cbiAgICovXG4gIGluamVjdFBhcmFtczogZnVuY3Rpb24gaW5qZWN0UGFyYW1zKHBhdHRlcm4sIHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgIHZhciBzcGxhdEluZGV4ID0gMDtcblxuICAgIHJldHVybiBwYXR0ZXJuLnJlcGxhY2UocGFyYW1JbmplY3RNYXRjaGVyLCBmdW5jdGlvbiAobWF0Y2gsIHBhcmFtTmFtZSkge1xuICAgICAgcGFyYW1OYW1lID0gcGFyYW1OYW1lIHx8ICdzcGxhdCc7XG5cbiAgICAgIC8vIElmIHBhcmFtIGlzIG9wdGlvbmFsIGRvbid0IGNoZWNrIGZvciBleGlzdGVuY2VcbiAgICAgIGlmIChwYXJhbU5hbWUuc2xpY2UoLTEpID09PSAnPycpIHtcbiAgICAgICAgcGFyYW1OYW1lID0gcGFyYW1OYW1lLnNsaWNlKDAsIC0xKTtcblxuICAgICAgICBpZiAocGFyYW1zW3BhcmFtTmFtZV0gPT0gbnVsbCkgcmV0dXJuICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW52YXJpYW50KHBhcmFtc1twYXJhbU5hbWVdICE9IG51bGwsICdNaXNzaW5nIFwiJXNcIiBwYXJhbWV0ZXIgZm9yIHBhdGggXCIlc1wiJywgcGFyYW1OYW1lLCBwYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlZ21lbnQ7XG4gICAgICBpZiAocGFyYW1OYW1lID09PSAnc3BsYXQnICYmIEFycmF5LmlzQXJyYXkocGFyYW1zW3BhcmFtTmFtZV0pKSB7XG4gICAgICAgIHNlZ21lbnQgPSBwYXJhbXNbcGFyYW1OYW1lXVtzcGxhdEluZGV4KytdO1xuXG4gICAgICAgIGludmFyaWFudChzZWdtZW50ICE9IG51bGwsICdNaXNzaW5nIHNwbGF0ICMgJXMgZm9yIHBhdGggXCIlc1wiJywgc3BsYXRJbmRleCwgcGF0dGVybik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWdtZW50ID0gcGFyYW1zW3BhcmFtTmFtZV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWdtZW50O1xuICAgIH0pLnJlcGxhY2UocGFyYW1JbmplY3RUcmFpbGluZ1NsYXNoTWF0Y2hlciwgJy8nKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBpcyB0aGUgcmVzdWx0IG9mIHBhcnNpbmcgYW55IHF1ZXJ5IHN0cmluZyBjb250YWluZWRcbiAgICogaW4gdGhlIGdpdmVuIHBhdGgsIG51bGwgaWYgdGhlIHBhdGggY29udGFpbnMgbm8gcXVlcnkgc3RyaW5nLlxuICAgKi9cbiAgZXh0cmFjdFF1ZXJ5OiBmdW5jdGlvbiBleHRyYWN0UXVlcnkocGF0aCkge1xuICAgIHZhciBtYXRjaCA9IHBhdGgubWF0Y2gocXVlcnlNYXRjaGVyKTtcbiAgICByZXR1cm4gbWF0Y2ggJiYgcXMucGFyc2UobWF0Y2hbMV0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcGF0aCB3aXRob3V0IHRoZSBxdWVyeSBzdHJpbmcuXG4gICAqL1xuICB3aXRob3V0UXVlcnk6IGZ1bmN0aW9uIHdpdGhvdXRRdWVyeShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZShxdWVyeU1hdGNoZXIsICcnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIGdpdmVuIHBhdGggd2l0aCB0aGUgcGFyYW1ldGVycyBpbiB0aGUgZ2l2ZW5cbiAgICogcXVlcnkgbWVyZ2VkIGludG8gdGhlIHF1ZXJ5IHN0cmluZy5cbiAgICovXG4gIHdpdGhRdWVyeTogZnVuY3Rpb24gd2l0aFF1ZXJ5KHBhdGgsIHF1ZXJ5KSB7XG4gICAgdmFyIGV4aXN0aW5nUXVlcnkgPSBQYXRoVXRpbHMuZXh0cmFjdFF1ZXJ5KHBhdGgpO1xuXG4gICAgaWYgKGV4aXN0aW5nUXVlcnkpIHF1ZXJ5ID0gcXVlcnkgPyBhc3NpZ24oZXhpc3RpbmdRdWVyeSwgcXVlcnkpIDogZXhpc3RpbmdRdWVyeTtcblxuICAgIHZhciBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeShxdWVyeSwgeyBhcnJheUZvcm1hdDogJ2JyYWNrZXRzJyB9KTtcblxuICAgIGlmIChxdWVyeVN0cmluZykge1xuICAgICAgcmV0dXJuIFBhdGhVdGlscy53aXRob3V0UXVlcnkocGF0aCkgKyAnPycgKyBxdWVyeVN0cmluZztcbiAgICB9cmV0dXJuIFBhdGhVdGlscy53aXRob3V0UXVlcnkocGF0aCk7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXRoVXRpbHM7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgncmVhY3QvbGliL09iamVjdC5hc3NpZ24nKTtcbnZhciBSZWFjdFByb3BUeXBlcyA9IHJlcXVpcmUoJ3JlYWN0JykuUHJvcFR5cGVzO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xuXG52YXIgUHJvcFR5cGVzID0gYXNzaWduKHt9LCBSZWFjdFByb3BUeXBlcywge1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCBhIHByb3Agc2hvdWxkIGJlIGZhbHN5LlxuICAgKi9cbiAgZmFsc3k6IGZ1bmN0aW9uIGZhbHN5KHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJzwnICsgY29tcG9uZW50TmFtZSArICc+IHNob3VsZCBub3QgaGF2ZSBhIFwiJyArIHByb3BOYW1lICsgJ1wiIHByb3AnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IGEgcHJvcCBzaG91bGQgYmUgYSBSb3V0ZSBvYmplY3QuXG4gICAqL1xuICByb3V0ZTogUmVhY3RQcm9wVHlwZXMuaW5zdGFuY2VPZihSb3V0ZSksXG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IGEgcHJvcCBzaG91bGQgYmUgYSBSb3V0ZXIgb2JqZWN0LlxuICAgKi9cbiAgLy9yb3V0ZXI6IFJlYWN0UHJvcFR5cGVzLmluc3RhbmNlT2YoUm91dGVyKSAvLyBUT0RPXG4gIHJvdXRlcjogUmVhY3RQcm9wVHlwZXMuZnVuY1xuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9wVHlwZXM7IiwiLyoqXG4gKiBFbmNhcHN1bGF0ZXMgYSByZWRpcmVjdCB0byB0aGUgZ2l2ZW4gcm91dGUuXG4gKi9cblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBSZWRpcmVjdCh0bywgcGFyYW1zLCBxdWVyeSkge1xuICB0aGlzLnRvID0gdG87XG4gIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkaXJlY3Q7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgncmVhY3QvbGliL09iamVjdC5hc3NpZ24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi93YXJuaW5nJyk7XG52YXIgUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxudmFyIF9jdXJyZW50Um91dGU7XG5cbnZhciBSb3V0ZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJvdXRlKG5hbWUsIHBhdGgsIGlnbm9yZVNjcm9sbEJlaGF2aW9yLCBpc0RlZmF1bHQsIGlzTm90Rm91bmQsIG9uRW50ZXIsIG9uTGVhdmUsIGhhbmRsZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGUpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMucGFyYW1OYW1lcyA9IFBhdGhVdGlscy5leHRyYWN0UGFyYW1OYW1lcyh0aGlzLnBhdGgpO1xuICAgIHRoaXMuaWdub3JlU2Nyb2xsQmVoYXZpb3IgPSAhIWlnbm9yZVNjcm9sbEJlaGF2aW9yO1xuICAgIHRoaXMuaXNEZWZhdWx0ID0gISFpc0RlZmF1bHQ7XG4gICAgdGhpcy5pc05vdEZvdW5kID0gISFpc05vdEZvdW5kO1xuICAgIHRoaXMub25FbnRlciA9IG9uRW50ZXI7XG4gICAgdGhpcy5vbkxlYXZlID0gb25MZWF2ZTtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJvdXRlLCBbe1xuICAgIGtleTogJ2FwcGVuZENoaWxkJyxcblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgdGhlIGdpdmVuIHJvdXRlIHRvIHRoaXMgcm91dGUncyBjaGlsZCByb3V0ZXMuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZENoaWxkKHJvdXRlKSB7XG4gICAgICBpbnZhcmlhbnQocm91dGUgaW5zdGFuY2VvZiBSb3V0ZSwgJ3JvdXRlLmFwcGVuZENoaWxkIG11c3QgdXNlIGEgdmFsaWQgUm91dGUnKTtcblxuICAgICAgaWYgKCF0aGlzLmNoaWxkUm91dGVzKSB0aGlzLmNoaWxkUm91dGVzID0gW107XG5cbiAgICAgIHRoaXMuY2hpbGRSb3V0ZXMucHVzaChyb3V0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9TdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHZhciBzdHJpbmcgPSAnPFJvdXRlJztcblxuICAgICAgaWYgKHRoaXMubmFtZSkgc3RyaW5nICs9ICcgbmFtZT1cIicgKyB0aGlzLm5hbWUgKyAnXCInO1xuXG4gICAgICBzdHJpbmcgKz0gJyBwYXRoPVwiJyArIHRoaXMucGF0aCArICdcIj4nO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnY3JlYXRlUm91dGUnLFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyByb3V0ZS4gT3B0aW9ucyBtYXkgYmUgYSBVUkwgcGF0aG5hbWUgc3RyaW5nXG4gICAgICogd2l0aCBwbGFjZWhvbGRlcnMgZm9yIG5hbWVkIHBhcmFtcyBvciBhbiBvYmplY3Qgd2l0aCBhbnkgb2YgdGhlIGZvbGxvd2luZ1xuICAgICAqIHByb3BlcnRpZXM6XG4gICAgICpcbiAgICAgKiAtIG5hbWUgICAgICAgICAgICAgICAgICAgICBUaGUgbmFtZSBvZiB0aGUgcm91dGUuIFRoaXMgaXMgdXNlZCB0byBsb29rdXAgYVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlIHJlbGF0aXZlIHRvIGl0cyBwYXJlbnQgcm91dGUgYW5kIHNob3VsZCBiZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZSBhbW9uZyBhbGwgY2hpbGQgcm91dGVzIG9mIHRoZSBzYW1lIHBhcmVudFxuICAgICAqIC0gcGF0aCAgICAgICAgICAgICAgICAgICAgIEEgVVJMIHBhdGhuYW1lIHN0cmluZyB3aXRoIG9wdGlvbmFsIHBsYWNlaG9sZGVyc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgc3BlY2lmeSB0aGUgbmFtZXMgb2YgcGFyYW1zIHRvIGV4dHJhY3QgZnJvbVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBVUkwgd2hlbiB0aGUgcGF0aCBtYXRjaGVzLiBEZWZhdWx0cyB0byBgLyR7bmFtZX1gXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbiB0aGVyZSBpcyBhIG5hbWUgZ2l2ZW4sIG9yIHRoZSBwYXRoIG9mIHRoZSBwYXJlbnRcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSwgb3IgL1xuICAgICAqIC0gaWdub3JlU2Nyb2xsQmVoYXZpb3IgICAgIFRydWUgdG8gbWFrZSB0aGlzIHJvdXRlIChhbmQgYWxsIGRlc2NlbmRhbnRzKSBpZ25vcmVcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgc2Nyb2xsIGJlaGF2aW9yIG9mIHRoZSByb3V0ZXJcbiAgICAgKiAtIGlzRGVmYXVsdCAgICAgICAgICAgICAgICBUcnVlIHRvIG1ha2UgdGhpcyByb3V0ZSB0aGUgZGVmYXVsdCByb3V0ZSBhbW9uZyBhbGxcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdHMgc2libGluZ3NcbiAgICAgKiAtIGlzTm90Rm91bmQgICAgICAgICAgICAgICBUcnVlIHRvIG1ha2UgdGhpcyByb3V0ZSB0aGUgXCJub3QgZm91bmRcIiByb3V0ZSBhbW9uZ1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbCBpdHMgc2libGluZ3NcbiAgICAgKiAtIG9uRW50ZXIgICAgICAgICAgICAgICAgICBBIHRyYW5zaXRpb24gaG9vayB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyIGlzIGdvaW5nIHRvIGVudGVyIHRoaXMgcm91dGVcbiAgICAgKiAtIG9uTGVhdmUgICAgICAgICAgICAgICAgICBBIHRyYW5zaXRpb24gaG9vayB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyIGlzIGdvaW5nIHRvIGxlYXZlIHRoaXMgcm91dGVcbiAgICAgKiAtIGhhbmRsZXIgICAgICAgICAgICAgICAgICBBIFJlYWN0IGNvbXBvbmVudCB0aGF0IHdpbGwgYmUgcmVuZGVyZWQgd2hlblxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMgcm91dGUgaXMgYWN0aXZlXG4gICAgICogLSBwYXJlbnRSb3V0ZSAgICAgICAgICAgICAgVGhlIHBhcmVudCByb3V0ZSB0byB1c2UgZm9yIHRoaXMgcm91dGUuIFRoaXMgb3B0aW9uXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgYXV0b21hdGljYWxseSBzdXBwbGllZCB3aGVuIGNyZWF0aW5nIHJvdXRlcyBpbnNpZGVcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2FsbGJhY2sgdG8gYW5vdGhlciBpbnZvY2F0aW9uIG9mIGNyZWF0ZVJvdXRlLiBZb3VcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmx5IGV2ZXIgbmVlZCB0byB1c2UgdGhpcyB3aGVuIGRlY2xhcmluZyByb3V0ZXNcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRlcGVuZGVudGx5IG9mIG9uZSBhbm90aGVyIHRvIG1hbnVhbGx5IHBpZWNlIHRvZ2V0aGVyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHJvdXRlIGhpZXJhcmNoeVxuICAgICAqXG4gICAgICogVGhlIGNhbGxiYWNrIG1heSBiZSB1c2VkIHRvIHN0cnVjdHVyZSB5b3VyIHJvdXRlIGhpZXJhcmNoeS4gQW55IGNhbGwgdG9cbiAgICAgKiBjcmVhdGVSb3V0ZSwgY3JlYXRlRGVmYXVsdFJvdXRlLCBjcmVhdGVOb3RGb3VuZFJvdXRlLCBvciBjcmVhdGVSZWRpcmVjdFxuICAgICAqIGluc2lkZSB0aGUgY2FsbGJhY2sgYXV0b21hdGljYWxseSB1c2VzIHRoaXMgcm91dGUgYXMgaXRzIHBhcmVudC5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUm91dGUob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSBvcHRpb25zID0geyBwYXRoOiBvcHRpb25zIH07XG5cbiAgICAgIHZhciBwYXJlbnRSb3V0ZSA9IF9jdXJyZW50Um91dGU7XG5cbiAgICAgIGlmIChwYXJlbnRSb3V0ZSkge1xuICAgICAgICB3YXJuaW5nKG9wdGlvbnMucGFyZW50Um91dGUgPT0gbnVsbCB8fCBvcHRpb25zLnBhcmVudFJvdXRlID09PSBwYXJlbnRSb3V0ZSwgJ1lvdSBzaG91bGQgbm90IHVzZSBwYXJlbnRSb3V0ZSB3aXRoIGNyZWF0ZVJvdXRlIGluc2lkZSBhbm90aGVyIHJvdXRlXFwncyBjaGlsZCBjYWxsYmFjazsgaXQgaXMgaWdub3JlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Um91dGUgPSBvcHRpb25zLnBhcmVudFJvdXRlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZTtcbiAgICAgIHZhciBwYXRoID0gb3B0aW9ucy5wYXRoIHx8IG5hbWU7XG5cbiAgICAgIGlmIChwYXRoICYmICEob3B0aW9ucy5pc0RlZmF1bHQgfHwgb3B0aW9ucy5pc05vdEZvdW5kKSkge1xuICAgICAgICBpZiAoUGF0aFV0aWxzLmlzQWJzb2x1dGUocGF0aCkpIHtcbiAgICAgICAgICBpZiAocGFyZW50Um91dGUpIHtcbiAgICAgICAgICAgIGludmFyaWFudChwYXRoID09PSBwYXJlbnRSb3V0ZS5wYXRoIHx8IHBhcmVudFJvdXRlLnBhcmFtTmFtZXMubGVuZ3RoID09PSAwLCAnWW91IGNhbm5vdCBuZXN0IHBhdGggXCIlc1wiIGluc2lkZSBcIiVzXCI7IHRoZSBwYXJlbnQgcmVxdWlyZXMgVVJMIHBhcmFtZXRlcnMnLCBwYXRoLCBwYXJlbnRSb3V0ZS5wYXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGFyZW50Um91dGUpIHtcbiAgICAgICAgICAvLyBSZWxhdGl2ZSBwYXRocyBleHRlbmQgdGhlaXIgcGFyZW50LlxuICAgICAgICAgIHBhdGggPSBQYXRoVXRpbHMuam9pbihwYXJlbnRSb3V0ZS5wYXRoLCBwYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXRoID0gJy8nICsgcGF0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aCA9IHBhcmVudFJvdXRlID8gcGFyZW50Um91dGUucGF0aCA6ICcvJztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuaXNOb3RGb3VuZCAmJiAhL1xcKiQvLnRlc3QocGF0aCkpIHBhdGggKz0gJyonOyAvLyBBdXRvLWFwcGVuZCAqIHRvIHRoZSBwYXRoIG9mIG5vdCBmb3VuZCByb3V0ZXMuXG5cbiAgICAgIHZhciByb3V0ZSA9IG5ldyBSb3V0ZShuYW1lLCBwYXRoLCBvcHRpb25zLmlnbm9yZVNjcm9sbEJlaGF2aW9yLCBvcHRpb25zLmlzRGVmYXVsdCwgb3B0aW9ucy5pc05vdEZvdW5kLCBvcHRpb25zLm9uRW50ZXIsIG9wdGlvbnMub25MZWF2ZSwgb3B0aW9ucy5oYW5kbGVyKTtcblxuICAgICAgaWYgKHBhcmVudFJvdXRlKSB7XG4gICAgICAgIGlmIChyb3V0ZS5pc0RlZmF1bHQpIHtcbiAgICAgICAgICBpbnZhcmlhbnQocGFyZW50Um91dGUuZGVmYXVsdFJvdXRlID09IG51bGwsICclcyBtYXkgbm90IGhhdmUgbW9yZSB0aGFuIG9uZSBkZWZhdWx0IHJvdXRlJywgcGFyZW50Um91dGUpO1xuXG4gICAgICAgICAgcGFyZW50Um91dGUuZGVmYXVsdFJvdXRlID0gcm91dGU7XG4gICAgICAgIH0gZWxzZSBpZiAocm91dGUuaXNOb3RGb3VuZCkge1xuICAgICAgICAgIGludmFyaWFudChwYXJlbnRSb3V0ZS5ub3RGb3VuZFJvdXRlID09IG51bGwsICclcyBtYXkgbm90IGhhdmUgbW9yZSB0aGFuIG9uZSBub3QgZm91bmQgcm91dGUnLCBwYXJlbnRSb3V0ZSk7XG5cbiAgICAgICAgICBwYXJlbnRSb3V0ZS5ub3RGb3VuZFJvdXRlID0gcm91dGU7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnRSb3V0ZS5hcHBlbmRDaGlsZChyb3V0ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFueSByb3V0ZXMgY3JlYXRlZCBpbiB0aGUgY2FsbGJhY2tcbiAgICAgIC8vIHVzZSB0aGlzIHJvdXRlIGFzIHRoZWlyIHBhcmVudC5cbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRSb3V0ZSA9IF9jdXJyZW50Um91dGU7XG4gICAgICAgIF9jdXJyZW50Um91dGUgPSByb3V0ZTtcbiAgICAgICAgY2FsbGJhY2suY2FsbChyb3V0ZSwgcm91dGUpO1xuICAgICAgICBfY3VycmVudFJvdXRlID0gY3VycmVudFJvdXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlRGVmYXVsdFJvdXRlJyxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSByb3V0ZSB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gaXRzIHBhcmVudCBtYXRjaGVzXG4gICAgICogdGhlIGN1cnJlbnQgVVJMLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0Um91dGUob3B0aW9ucykge1xuICAgICAgcmV0dXJuIFJvdXRlLmNyZWF0ZVJvdXRlKGFzc2lnbih7fSwgb3B0aW9ucywgeyBpc0RlZmF1bHQ6IHRydWUgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZU5vdEZvdW5kUm91dGUnLFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIHJvdXRlIHRoYXQgaXMgcmVuZGVyZWQgd2hlbiBpdHMgcGFyZW50IG1hdGNoZXNcbiAgICAgKiB0aGUgY3VycmVudCBVUkwgYnV0IG5vbmUgb2YgaXRzIHNpYmxpbmdzIGRvLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVOb3RGb3VuZFJvdXRlKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBSb3V0ZS5jcmVhdGVSb3V0ZShhc3NpZ24oe30sIG9wdGlvbnMsIHsgaXNOb3RGb3VuZDogdHJ1ZSB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlUmVkaXJlY3QnLFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIHJvdXRlIHRoYXQgYXV0b21hdGljYWxseSByZWRpcmVjdHMgdGhlIHRyYW5zaXRpb25cbiAgICAgKiB0byBhbm90aGVyIHJvdXRlLiBJbiBhZGRpdGlvbiB0byB0aGUgbm9ybWFsIG9wdGlvbnMgdG8gY3JlYXRlUm91dGUsIHRoaXNcbiAgICAgKiBmdW5jdGlvbiBhY2NlcHRzIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICAgKlxuICAgICAqIC0gZnJvbSAgICAgICAgIEFuIGFsaWFzIGZvciB0aGUgYHBhdGhgIG9wdGlvbi4gRGVmYXVsdHMgdG8gKlxuICAgICAqIC0gdG8gICAgICAgICAgIFRoZSBwYXRoL3JvdXRlL3JvdXRlIG5hbWUgdG8gcmVkaXJlY3QgdG9cbiAgICAgKiAtIHBhcmFtcyAgICAgICBUaGUgcGFyYW1zIHRvIHVzZSBpbiB0aGUgcmVkaXJlY3QgVVJMLiBEZWZhdWx0c1xuICAgICAqICAgICAgICAgICAgICAgIHRvIHVzaW5nIHRoZSBjdXJyZW50IHBhcmFtc1xuICAgICAqIC0gcXVlcnkgICAgICAgIFRoZSBxdWVyeSB0byB1c2UgaW4gdGhlIHJlZGlyZWN0IFVSTC4gRGVmYXVsdHNcbiAgICAgKiAgICAgICAgICAgICAgICB0byB1c2luZyB0aGUgY3VycmVudCBxdWVyeVxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVSZWRpcmVjdChvcHRpb25zKSB7XG4gICAgICByZXR1cm4gUm91dGUuY3JlYXRlUm91dGUoYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHBhdGg6IG9wdGlvbnMucGF0aCB8fCBvcHRpb25zLmZyb20gfHwgJyonLFxuICAgICAgICBvbkVudGVyOiBmdW5jdGlvbiBvbkVudGVyKHRyYW5zaXRpb24sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgICB0cmFuc2l0aW9uLnJlZGlyZWN0KG9wdGlvbnMudG8sIG9wdGlvbnMucGFyYW1zIHx8IHBhcmFtcywgb3B0aW9ucy5xdWVyeSB8fCBxdWVyeSk7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUm91dGU7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBjYW5Vc2VET00gPSByZXF1aXJlKCdyZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnKS5jYW5Vc2VET007XG52YXIgZ2V0V2luZG93U2Nyb2xsUG9zaXRpb24gPSByZXF1aXJlKCcuL2dldFdpbmRvd1Njcm9sbFBvc2l0aW9uJyk7XG5cbmZ1bmN0aW9uIHNob3VsZFVwZGF0ZVNjcm9sbChzdGF0ZSwgcHJldlN0YXRlKSB7XG4gIGlmICghcHJldlN0YXRlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gRG9uJ3QgdXBkYXRlIHNjcm9sbCBwb3NpdGlvbiB3aGVuIG9ubHkgdGhlIHF1ZXJ5IGhhcyBjaGFuZ2VkLlxuICBpZiAoc3RhdGUucGF0aG5hbWUgPT09IHByZXZTdGF0ZS5wYXRobmFtZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfXZhciByb3V0ZXMgPSBzdGF0ZS5yb3V0ZXM7XG4gIHZhciBwcmV2Um91dGVzID0gcHJldlN0YXRlLnJvdXRlcztcblxuICB2YXIgc2hhcmVkQW5jZXN0b3JSb3V0ZXMgPSByb3V0ZXMuZmlsdGVyKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIHJldHVybiBwcmV2Um91dGVzLmluZGV4T2Yocm91dGUpICE9PSAtMTtcbiAgfSk7XG5cbiAgcmV0dXJuICFzaGFyZWRBbmNlc3RvclJvdXRlcy5zb21lKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIHJldHVybiByb3V0ZS5pZ25vcmVTY3JvbGxCZWhhdmlvcjtcbiAgfSk7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgdGhlIHJvdXRlciB3aXRoIHRoZSBhYmlsaXR5IHRvIG1hbmFnZSB3aW5kb3cgc2Nyb2xsIHBvc2l0aW9uXG4gKiBhY2NvcmRpbmcgdG8gaXRzIHNjcm9sbCBiZWhhdmlvci5cbiAqL1xudmFyIFNjcm9sbEhpc3RvcnkgPSB7XG5cbiAgc3RhdGljczoge1xuXG4gICAgLyoqXG4gICAgICogUmVjb3JkcyBjdXJlbnQgc2Nyb2xsIHBvc2l0aW9uIGFzIHRoZSBsYXN0IGtub3duIHBvc2l0aW9uIGZvciB0aGUgZ2l2ZW4gVVJMIHBhdGguXG4gICAgICovXG4gICAgcmVjb3JkU2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uIHJlY29yZFNjcm9sbFBvc2l0aW9uKHBhdGgpIHtcbiAgICAgIGlmICghdGhpcy5zY3JvbGxIaXN0b3J5KSB0aGlzLnNjcm9sbEhpc3RvcnkgPSB7fTtcblxuICAgICAgdGhpcy5zY3JvbGxIaXN0b3J5W3BhdGhdID0gZ2V0V2luZG93U2Nyb2xsUG9zaXRpb24oKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGFzdCBrbm93biBzY3JvbGwgcG9zaXRpb24gZm9yIHRoZSBnaXZlbiBVUkwgcGF0aC5cbiAgICAgKi9cbiAgICBnZXRTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24gZ2V0U2Nyb2xsUG9zaXRpb24ocGF0aCkge1xuICAgICAgaWYgKCF0aGlzLnNjcm9sbEhpc3RvcnkpIHRoaXMuc2Nyb2xsSGlzdG9yeSA9IHt9O1xuXG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxIaXN0b3J5W3BhdGhdIHx8IG51bGw7XG4gICAgfVxuXG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaW52YXJpYW50KHRoaXMuY29uc3RydWN0b3IuZ2V0U2Nyb2xsQmVoYXZpb3IoKSA9PSBudWxsIHx8IGNhblVzZURPTSwgJ0Nhbm5vdCB1c2Ugc2Nyb2xsIGJlaGF2aW9yIHdpdGhvdXQgYSBET00nKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fdXBkYXRlU2Nyb2xsKCk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB0aGlzLl91cGRhdGVTY3JvbGwocHJldlN0YXRlKTtcbiAgfSxcblxuICBfdXBkYXRlU2Nyb2xsOiBmdW5jdGlvbiBfdXBkYXRlU2Nyb2xsKHByZXZTdGF0ZSkge1xuICAgIGlmICghc2hvdWxkVXBkYXRlU2Nyb2xsKHRoaXMuc3RhdGUsIHByZXZTdGF0ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9dmFyIHNjcm9sbEJlaGF2aW9yID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRTY3JvbGxCZWhhdmlvcigpO1xuXG4gICAgaWYgKHNjcm9sbEJlaGF2aW9yKSBzY3JvbGxCZWhhdmlvci51cGRhdGVTY3JvbGxQb3NpdGlvbih0aGlzLmNvbnN0cnVjdG9yLmdldFNjcm9sbFBvc2l0aW9uKHRoaXMuc3RhdGUucGF0aCksIHRoaXMuc3RhdGUuYWN0aW9uKTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbEhpc3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9Qcm9wVHlwZXMnKTtcblxuLyoqXG4gKiBBIG1peGluIGZvciBjb21wb25lbnRzIHRoYXQgbmVlZCB0byBrbm93IHRoZSBwYXRoLCByb3V0ZXMsIFVSTFxuICogcGFyYW1zIGFuZCBxdWVyeSB0aGF0IGFyZSBjdXJyZW50bHkgYWN0aXZlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICB2YXIgQWJvdXRMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICogICAgIG1peGluczogWyBSb3V0ZXIuU3RhdGUgXSxcbiAqICAgICByZW5kZXIoKSB7XG4gKiAgICAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gKlxuICogICAgICAgaWYgKHRoaXMuaXNBY3RpdmUoJ2Fib3V0JykpXG4gKiAgICAgICAgIGNsYXNzTmFtZSArPSAnIGlzLWFjdGl2ZSc7XG4gKlxuICogICAgICAgcmV0dXJuIFJlYWN0LkRPTS5hKHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gKiAgICAgfVxuICogICB9KTtcbiAqL1xudmFyIFN0YXRlID0ge1xuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIHJvdXRlcjogUHJvcFR5cGVzLnJvdXRlci5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJMIHBhdGguXG4gICAqL1xuICBnZXRQYXRoOiBmdW5jdGlvbiBnZXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRQYXRoKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJMIHBhdGggd2l0aG91dCB0aGUgcXVlcnkgc3RyaW5nLlxuICAgKi9cbiAgZ2V0UGF0aG5hbWU6IGZ1bmN0aW9uIGdldFBhdGhuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRQYXRobmFtZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCBvZiB0aGUgVVJMIHBhcmFtcyB0aGF0IGFyZSBjdXJyZW50bHkgYWN0aXZlLlxuICAgKi9cbiAgZ2V0UGFyYW1zOiBmdW5jdGlvbiBnZXRQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFBhcmFtcygpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCBvZiB0aGUgcXVlcnkgcGFyYW1zIHRoYXQgYXJlIGN1cnJlbnRseSBhY3RpdmUuXG4gICAqL1xuICBnZXRRdWVyeTogZnVuY3Rpb24gZ2V0UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFF1ZXJ5KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHJvdXRlcyB0aGF0IGFyZSBjdXJyZW50bHkgYWN0aXZlLlxuICAgKi9cbiAgZ2V0Um91dGVzOiBmdW5jdGlvbiBnZXRSb3V0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFJvdXRlcygpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gZGV0ZXJtaW5lIGlmIGEgZ2l2ZW4gcm91dGUsIHBhcmFtcywgYW5kIHF1ZXJ5XG4gICAqIGFyZSBhY3RpdmUuXG4gICAqL1xuICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5pc0FjdGl2ZSh0bywgcGFyYW1zLCBxdWVyeSk7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZTsiLCIvKiBqc2hpbnQgLVcwNTggKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsbGF0aW9uID0gcmVxdWlyZSgnLi9DYW5jZWxsYXRpb24nKTtcbnZhciBSZWRpcmVjdCA9IHJlcXVpcmUoJy4vUmVkaXJlY3QnKTtcblxuLyoqXG4gKiBFbmNhcHN1bGF0ZXMgYSB0cmFuc2l0aW9uIHRvIGEgZ2l2ZW4gcGF0aC5cbiAqXG4gKiBUaGUgd2lsbFRyYW5zaXRpb25UbyBhbmQgd2lsbFRyYW5zaXRpb25Gcm9tIGhhbmRsZXJzIHJlY2VpdmVcbiAqIGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgYXMgdGhlaXIgZmlyc3QgYXJndW1lbnQuXG4gKi9cbmZ1bmN0aW9uIFRyYW5zaXRpb24ocGF0aCwgcmV0cnkpIHtcbiAgdGhpcy5wYXRoID0gcGF0aDtcbiAgdGhpcy5hYm9ydFJlYXNvbiA9IG51bGw7XG4gIC8vIFRPRE86IENoYW5nZSB0aGlzIHRvIHJvdXRlci5yZXRyeVRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgdGhpcy5yZXRyeSA9IHJldHJ5LmJpbmQodGhpcyk7XG59XG5cblRyYW5zaXRpb24ucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICBpZiAodGhpcy5hYm9ydFJlYXNvbiA9PSBudWxsKSB0aGlzLmFib3J0UmVhc29uID0gcmVhc29uIHx8ICdBQk9SVCc7XG59O1xuXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5yZWRpcmVjdCA9IGZ1bmN0aW9uICh0bywgcGFyYW1zLCBxdWVyeSkge1xuICB0aGlzLmFib3J0KG5ldyBSZWRpcmVjdCh0bywgcGFyYW1zLCBxdWVyeSkpO1xufTtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFib3J0KG5ldyBDYW5jZWxsYXRpb24oKSk7XG59O1xuXG5UcmFuc2l0aW9uLmZyb20gPSBmdW5jdGlvbiAodHJhbnNpdGlvbiwgcm91dGVzLCBjb21wb25lbnRzLCBjYWxsYmFjaykge1xuICByb3V0ZXMucmVkdWNlKGZ1bmN0aW9uIChjYWxsYmFjaywgcm91dGUsIGluZGV4KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIHx8IHRyYW5zaXRpb24uYWJvcnRSZWFzb24pIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChyb3V0ZS5vbkxlYXZlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGUub25MZWF2ZSh0cmFuc2l0aW9uLCBjb21wb25lbnRzW2luZGV4XSwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gY2FsbGJhY2sgaW4gdGhlIGFyZ3VtZW50IGxpc3QsIGNhbGwgaXQgYXV0b21hdGljYWxseS5cbiAgICAgICAgICBpZiAocm91dGUub25MZWF2ZS5sZW5ndGggPCAzKSBjYWxsYmFjaygpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY2FsbGJhY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgY2FsbGJhY2spKCk7XG59O1xuXG5UcmFuc2l0aW9uLnRvID0gZnVuY3Rpb24gKHRyYW5zaXRpb24sIHJvdXRlcywgcGFyYW1zLCBxdWVyeSwgY2FsbGJhY2spIHtcbiAgcm91dGVzLnJlZHVjZVJpZ2h0KGZ1bmN0aW9uIChjYWxsYmFjaywgcm91dGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IgfHwgdHJhbnNpdGlvbi5hYm9ydFJlYXNvbikge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKHJvdXRlLm9uRW50ZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZS5vbkVudGVyKHRyYW5zaXRpb24sIHBhcmFtcywgcXVlcnksIGNhbGxiYWNrKTtcblxuICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGNhbGxiYWNrIGluIHRoZSBhcmd1bWVudCBsaXN0LCBjYWxsIGl0IGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAgaWYgKHJvdXRlLm9uRW50ZXIubGVuZ3RoIDwgNCkgY2FsbGJhY2soKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIGNhbGxiYWNrKSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2l0aW9uOyIsIi8qKlxuICogQWN0aW9ucyB0aGF0IG1vZGlmeSB0aGUgVVJMLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBMb2NhdGlvbkFjdGlvbnMgPSB7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBhIG5ldyBsb2NhdGlvbiBpcyBiZWluZyBwdXNoZWQgdG8gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAqL1xuICBQVVNIOiAncHVzaCcsXG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGUgY3VycmVudCBsb2NhdGlvbiBzaG91bGQgYmUgcmVwbGFjZWQuXG4gICAqL1xuICBSRVBMQUNFOiAncmVwbGFjZScsXG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGUgbW9zdCByZWNlbnQgZW50cnkgc2hvdWxkIGJlIHJlbW92ZWQgZnJvbSB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICovXG4gIFBPUDogJ3BvcCdcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2NhdGlvbkFjdGlvbnM7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTG9jYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Mb2NhdGlvbkFjdGlvbnMnKTtcblxuLyoqXG4gKiBBIHNjcm9sbCBiZWhhdmlvciB0aGF0IGF0dGVtcHRzIHRvIGltaXRhdGUgdGhlIGRlZmF1bHQgYmVoYXZpb3JcbiAqIG9mIG1vZGVybiBicm93c2Vycy5cbiAqL1xudmFyIEltaXRhdGVCcm93c2VyQmVoYXZpb3IgPSB7XG5cbiAgdXBkYXRlU2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uLCBhY3Rpb25UeXBlKSB7XG4gICAgc3dpdGNoIChhY3Rpb25UeXBlKSB7XG4gICAgICBjYXNlIExvY2F0aW9uQWN0aW9ucy5QVVNIOlxuICAgICAgY2FzZSBMb2NhdGlvbkFjdGlvbnMuUkVQTEFDRTpcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9jYXRpb25BY3Rpb25zLlBPUDpcbiAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbWl0YXRlQnJvd3NlckJlaGF2aW9yOyIsIi8qKlxuICogQSBzY3JvbGwgYmVoYXZpb3IgdGhhdCBhbHdheXMgc2Nyb2xscyB0byB0aGUgdG9wIG9mIHRoZSBwYWdlXG4gKiBhZnRlciBhIHRyYW5zaXRpb24uXG4gKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgU2Nyb2xsVG9Ub3BCZWhhdmlvciA9IHtcblxuICB1cGRhdGVTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24gdXBkYXRlU2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsVG9Ub3BCZWhhdmlvcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGlzIG5lY2Vzc2FyeSB0byBnZXQgYXJvdW5kIGEgY29udGV4dCB3YXJuaW5nXG4gKiBwcmVzZW50IGluIFJlYWN0IDAuMTMuMC4gSXQgc292bGVzIHRoaXMgYnkgcHJvdmlkaW5nIGEgc2VwYXJhdGlvblxuICogYmV0d2VlbiB0aGUgXCJvd25lclwiIGFuZCBcInBhcmVudFwiIGNvbnRleHRzLlxuICovXG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBDb250ZXh0V3JhcHBlciA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBDb250ZXh0V3JhcHBlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udGV4dFdyYXBwZXIpO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhDb250ZXh0V3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKENvbnRleHRXcmFwcGVyLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb250ZXh0V3JhcHBlcjtcbn0pKFJlYWN0LkNvbXBvbmVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGV4dFdyYXBwZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4uL1Byb3BUeXBlcycpO1xudmFyIFJvdXRlSGFuZGxlciA9IHJlcXVpcmUoJy4vUm91dGVIYW5kbGVyJyk7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG5cbi8qKlxuICogQSA8RGVmYXVsdFJvdXRlPiBjb21wb25lbnQgaXMgYSBzcGVjaWFsIGtpbmQgb2YgPFJvdXRlPiB0aGF0XG4gKiByZW5kZXJzIHdoZW4gaXRzIHBhcmVudCBtYXRjaGVzIGJ1dCBub25lIG9mIGl0cyBzaWJsaW5ncyBkby5cbiAqIE9ubHkgb25lIHN1Y2ggcm91dGUgbWF5IGJlIHVzZWQgYXQgYW55IGdpdmVuIGxldmVsIGluIHRoZVxuICogcm91dGUgaGllcmFyY2h5LlxuICovXG5cbnZhciBEZWZhdWx0Um91dGUgPSAoZnVuY3Rpb24gKF9Sb3V0ZSkge1xuICBmdW5jdGlvbiBEZWZhdWx0Um91dGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERlZmF1bHRSb3V0ZSk7XG5cbiAgICBpZiAoX1JvdXRlICE9IG51bGwpIHtcbiAgICAgIF9Sb3V0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhEZWZhdWx0Um91dGUsIF9Sb3V0ZSk7XG5cbiAgcmV0dXJuIERlZmF1bHRSb3V0ZTtcbn0pKFJvdXRlKTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5EZWZhdWx0Um91dGUucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYXRoOiBQcm9wVHlwZXMuZmFsc3ksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZmFsc3ksXG4gIGhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbkRlZmF1bHRSb3V0ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhhbmRsZXI6IFJvdXRlSGFuZGxlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZWZhdWx0Um91dGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdyZWFjdC9saWIvT2JqZWN0LmFzc2lnbicpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4uL1Byb3BUeXBlcycpO1xuXG5mdW5jdGlvbiBpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5idXR0b24gPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59XG5cbi8qKlxuICogPExpbms+IGNvbXBvbmVudHMgYXJlIHVzZWQgdG8gY3JlYXRlIGFuIDxhPiBlbGVtZW50IHRoYXQgbGlua3MgdG8gYSByb3V0ZS5cbiAqIFdoZW4gdGhhdCByb3V0ZSBpcyBhY3RpdmUsIHRoZSBsaW5rIGdldHMgYW4gXCJhY3RpdmVcIiBjbGFzcyBuYW1lIChvciB0aGVcbiAqIHZhbHVlIG9mIGl0cyBgYWN0aXZlQ2xhc3NOYW1lYCBwcm9wKS5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgYXNzdW1pbmcgeW91IGhhdmUgdGhlIGZvbGxvd2luZyByb3V0ZTpcbiAqXG4gKiAgIDxSb3V0ZSBuYW1lPVwic2hvd1Bvc3RcIiBwYXRoPVwiL3Bvc3RzLzpwb3N0SURcIiBoYW5kbGVyPXtQb3N0fS8+XG4gKlxuICogWW91IGNvdWxkIHVzZSB0aGUgZm9sbG93aW5nIGNvbXBvbmVudCB0byBsaW5rIHRvIHRoYXQgcm91dGU6XG4gKlxuICogICA8TGluayB0bz1cInNob3dQb3N0XCIgcGFyYW1zPXt7IHBvc3RJRDogXCIxMjNcIiB9fSAvPlxuICpcbiAqIEluIGFkZGl0aW9uIHRvIHBhcmFtcywgbGlua3MgbWF5IHBhc3MgYWxvbmcgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnNcbiAqIHVzaW5nIHRoZSBgcXVlcnlgIHByb3AuXG4gKlxuICogICA8TGluayB0bz1cInNob3dQb3N0XCIgcGFyYW1zPXt7IHBvc3RJRDogXCIxMjNcIiB9fSBxdWVyeT17eyBzaG93OnRydWUgfX0vPlxuICovXG5cbnZhciBMaW5rID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIExpbmsoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmspO1xuXG4gICAgaWYgKF9SZWFjdCRDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhMaW5rLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoTGluaywgW3tcbiAgICBrZXk6ICdoYW5kbGVDbGljaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICB2YXIgYWxsb3dUcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICAgIHZhciBjbGlja1Jlc3VsdDtcblxuICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykgY2xpY2tSZXN1bHQgPSB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXG4gICAgICBpZiAoaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB8fCAhaXNMZWZ0Q2xpY2tFdmVudChldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfWlmIChjbGlja1Jlc3VsdCA9PT0gZmFsc2UgfHwgZXZlbnQuZGVmYXVsdFByZXZlbnRlZCA9PT0gdHJ1ZSkgYWxsb3dUcmFuc2l0aW9uID0gZmFsc2U7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChhbGxvd1RyYW5zaXRpb24pIHRoaXMuY29udGV4dC5yb3V0ZXIudHJhbnNpdGlvblRvKHRoaXMucHJvcHMudG8sIHRoaXMucHJvcHMucGFyYW1zLCB0aGlzLnByb3BzLnF1ZXJ5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRIcmVmJyxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBcImhyZWZcIiBhdHRyaWJ1dGUgdG8gdXNlIG9uIHRoZSBET00gZWxlbWVudC5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SHJlZigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLm1ha2VIcmVmKHRoaXMucHJvcHMudG8sIHRoaXMucHJvcHMucGFyYW1zLCB0aGlzLnByb3BzLnF1ZXJ5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDbGFzc05hbWUnLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIFwiY2xhc3NcIiBhdHRyaWJ1dGUgdG8gdXNlIG9uIHRoZSBET00gZWxlbWVudCwgd2hpY2ggY29udGFpbnNcbiAgICAgKiB0aGUgdmFsdWUgb2YgdGhlIGFjdGl2ZUNsYXNzTmFtZSBwcm9wZXJ0eSB3aGVuIHRoaXMgPExpbms+IGlzIGFjdGl2ZS5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKCkge1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuXG4gICAgICBpZiAodGhpcy5nZXRBY3RpdmVTdGF0ZSgpKSBjbGFzc05hbWUgKz0gJyAnICsgdGhpcy5wcm9wcy5hY3RpdmVDbGFzc05hbWU7XG5cbiAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0QWN0aXZlU3RhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBY3RpdmVTdGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmlzQWN0aXZlKHRoaXMucHJvcHMudG8sIHRoaXMucHJvcHMucGFyYW1zLCB0aGlzLnByb3BzLnF1ZXJ5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcHJvcHMgPSBhc3NpZ24oe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgaHJlZjogdGhpcy5nZXRIcmVmKCksXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5nZXRDbGFzc05hbWUoKSxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXG4gICAgICB9KTtcblxuICAgICAgaWYgKHByb3BzLmFjdGl2ZVN0eWxlICYmIHRoaXMuZ2V0QWN0aXZlU3RhdGUoKSkgcHJvcHMuc3R5bGUgPSBwcm9wcy5hY3RpdmVTdHlsZTtcblxuICAgICAgcmV0dXJuIFJlYWN0LkRPTS5hKHByb3BzLCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGluaztcbn0pKFJlYWN0LkNvbXBvbmVudCk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuTGluay5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLnJvdXRlci5pc1JlcXVpcmVkXG59O1xuXG5MaW5rLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRvOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMucm91dGVdKS5pc1JlcXVpcmVkLFxuICBwYXJhbXM6IFByb3BUeXBlcy5vYmplY3QsXG4gIHF1ZXJ5OiBQcm9wVHlwZXMub2JqZWN0LFxuICBhY3RpdmVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkxpbmsuZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmVDbGFzc05hbWU6ICdhY3RpdmUnLFxuICBjbGFzc05hbWU6ICcnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4uL1Byb3BUeXBlcycpO1xudmFyIFJvdXRlSGFuZGxlciA9IHJlcXVpcmUoJy4vUm91dGVIYW5kbGVyJyk7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG5cbi8qKlxuICogQSA8Tm90Rm91bmRSb3V0ZT4gaXMgYSBzcGVjaWFsIGtpbmQgb2YgPFJvdXRlPiB0aGF0XG4gKiByZW5kZXJzIHdoZW4gdGhlIGJlZ2lubmluZyBvZiBpdHMgcGFyZW50J3MgcGF0aCBtYXRjaGVzXG4gKiBidXQgbm9uZSBvZiBpdHMgc2libGluZ3MgZG8sIGluY2x1ZGluZyBhbnkgPERlZmF1bHRSb3V0ZT4uXG4gKiBPbmx5IG9uZSBzdWNoIHJvdXRlIG1heSBiZSB1c2VkIGF0IGFueSBnaXZlbiBsZXZlbCBpbiB0aGVcbiAqIHJvdXRlIGhpZXJhcmNoeS5cbiAqL1xuXG52YXIgTm90Rm91bmRSb3V0ZSA9IChmdW5jdGlvbiAoX1JvdXRlKSB7XG4gIGZ1bmN0aW9uIE5vdEZvdW5kUm91dGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdEZvdW5kUm91dGUpO1xuXG4gICAgaWYgKF9Sb3V0ZSAhPSBudWxsKSB7XG4gICAgICBfUm91dGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoTm90Rm91bmRSb3V0ZSwgX1JvdXRlKTtcblxuICByZXR1cm4gTm90Rm91bmRSb3V0ZTtcbn0pKFJvdXRlKTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5Ob3RGb3VuZFJvdXRlLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGF0aDogUHJvcFR5cGVzLmZhbHN5LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZhbHN5LFxuICBoYW5kbGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5Ob3RGb3VuZFJvdXRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGFuZGxlcjogUm91dGVIYW5kbGVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5vdEZvdW5kUm91dGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4uL1Byb3BUeXBlcycpO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xuXG4vKipcbiAqIEEgPFJlZGlyZWN0PiBjb21wb25lbnQgaXMgYSBzcGVjaWFsIGtpbmQgb2YgPFJvdXRlPiB0aGF0IGFsd2F5c1xuICogcmVkaXJlY3RzIHRvIGFub3RoZXIgcm91dGUgd2hlbiBpdCBtYXRjaGVzLlxuICovXG5cbnZhciBSZWRpcmVjdCA9IChmdW5jdGlvbiAoX1JvdXRlKSB7XG4gIGZ1bmN0aW9uIFJlZGlyZWN0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWRpcmVjdCk7XG5cbiAgICBpZiAoX1JvdXRlICE9IG51bGwpIHtcbiAgICAgIF9Sb3V0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhSZWRpcmVjdCwgX1JvdXRlKTtcblxuICByZXR1cm4gUmVkaXJlY3Q7XG59KShSb3V0ZSk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuUmVkaXJlY3QucHJvcFR5cGVzID0ge1xuICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmcm9tOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBBbGlhcyBmb3IgcGF0aC5cbiAgdG86IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhhbmRsZXI6IFByb3BUeXBlcy5mYWxzeVxufTtcblxuLy8gUmVkaXJlY3RzIHNob3VsZCBub3QgaGF2ZSBhIGRlZmF1bHQgaGFuZGxlclxuUmVkaXJlY3QuZGVmYXVsdFByb3BzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkaXJlY3Q7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG52YXIgUm91dGVIYW5kbGVyID0gcmVxdWlyZSgnLi9Sb3V0ZUhhbmRsZXInKTtcblxuLyoqXG4gKiA8Um91dGU+IGNvbXBvbmVudHMgc3BlY2lmeSBjb21wb25lbnRzIHRoYXQgYXJlIHJlbmRlcmVkIHRvIHRoZSBwYWdlIHdoZW4gdGhlXG4gKiBVUkwgbWF0Y2hlcyBhIGdpdmVuIHBhdHRlcm4uXG4gKlxuICogUm91dGVzIGFyZSBhcnJhbmdlZCBpbiBhIG5lc3RlZCB0cmVlIHN0cnVjdHVyZS4gV2hlbiBhIG5ldyBVUkwgaXMgcmVxdWVzdGVkLFxuICogdGhlIHRyZWUgaXMgc2VhcmNoZWQgZGVwdGgtZmlyc3QgdG8gZmluZCBhIHJvdXRlIHdob3NlIHBhdGggbWF0Y2hlcyB0aGUgVVJMLlxuICogV2hlbiBvbmUgaXMgZm91bmQsIGFsbCByb3V0ZXMgaW4gdGhlIHRyZWUgdGhhdCBsZWFkIHRvIGl0IGFyZSBjb25zaWRlcmVkXG4gKiBcImFjdGl2ZVwiIGFuZCB0aGVpciBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBpbnRvIHRoZSBET00sIG5lc3RlZCBpbiB0aGUgc2FtZVxuICogb3JkZXIgYXMgdGhleSBhcmUgaW4gdGhlIHRyZWUuXG4gKlxuICogVGhlIHByZWZlcnJlZCB3YXkgdG8gY29uZmlndXJlIGEgcm91dGVyIGlzIHVzaW5nIEpTWC4gVGhlIFhNTC1saWtlIHN5bnRheCBpc1xuICogYSBncmVhdCB3YXkgdG8gdmlzdWFsaXplIGhvdyByb3V0ZXMgYXJlIGxhaWQgb3V0IGluIGFuIGFwcGxpY2F0aW9uLlxuICpcbiAqICAgdmFyIHJvdXRlcyA9IFtcbiAqICAgICA8Um91dGUgaGFuZGxlcj17QXBwfT5cbiAqICAgICAgIDxSb3V0ZSBuYW1lPVwibG9naW5cIiBoYW5kbGVyPXtMb2dpbn0vPlxuICogICAgICAgPFJvdXRlIG5hbWU9XCJsb2dvdXRcIiBoYW5kbGVyPXtMb2dvdXR9Lz5cbiAqICAgICAgIDxSb3V0ZSBuYW1lPVwiYWJvdXRcIiBoYW5kbGVyPXtBYm91dH0vPlxuICogICAgIDwvUm91dGU+XG4gKiAgIF07XG4gKiAgIFxuICogICBSb3V0ZXIucnVuKHJvdXRlcywgZnVuY3Rpb24gKEhhbmRsZXIpIHtcbiAqICAgICBSZWFjdC5yZW5kZXIoPEhhbmRsZXIvPiwgZG9jdW1lbnQuYm9keSk7XG4gKiAgIH0pO1xuICpcbiAqIEhhbmRsZXJzIGZvciBSb3V0ZSBjb21wb25lbnRzIHRoYXQgY29udGFpbiBjaGlsZHJlbiBjYW4gcmVuZGVyIHRoZWlyIGFjdGl2ZVxuICogY2hpbGQgcm91dGUgdXNpbmcgYSA8Um91dGVIYW5kbGVyPiBlbGVtZW50LlxuICpcbiAqICAgdmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAqICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAqICAgICAgIHJldHVybiAoXG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHBsaWNhdGlvblwiPlxuICogICAgICAgICAgIDxSb3V0ZUhhbmRsZXIvPlxuICogICAgICAgICA8L2Rpdj5cbiAqICAgICAgICk7XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiBJZiBubyBoYW5kbGVyIGlzIHByb3ZpZGVkIGZvciB0aGUgcm91dGUsIGl0IHdpbGwgcmVuZGVyIGEgbWF0Y2hlZCBjaGlsZCByb3V0ZS5cbiAqL1xuXG52YXIgUm91dGUgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gUm91dGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoUm91dGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhSb3V0ZSwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpbnZhcmlhbnQoZmFsc2UsICclcyBlbGVtZW50cyBhcmUgZm9yIHJvdXRlciBjb25maWd1cmF0aW9uIG9ubHkgYW5kIHNob3VsZCBub3QgYmUgcmVuZGVyZWQnLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSb3V0ZTtcbn0pKFJlYWN0LkNvbXBvbmVudCk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuUm91dGUucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoYW5kbGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgaWdub3JlU2Nyb2xsQmVoYXZpb3I6IFByb3BUeXBlcy5ib29sXG59O1xuXG5Sb3V0ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhhbmRsZXI6IFJvdXRlSGFuZGxlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9O1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIENvbnRleHRXcmFwcGVyID0gcmVxdWlyZSgnLi9Db250ZXh0V3JhcHBlcicpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi4vUHJvcFR5cGVzJyk7XG5cbnZhciBSRUZfTkFNRSA9ICdfX3JvdXRlSGFuZGxlcl9fJztcblxuLyoqXG4gKiBBIDxSb3V0ZUhhbmRsZXI+IGNvbXBvbmVudCByZW5kZXJzIHRoZSBhY3RpdmUgY2hpbGQgcm91dGUgaGFuZGxlclxuICogd2hlbiByb3V0ZXMgYXJlIG5lc3RlZC5cbiAqL1xuXG52YXIgUm91dGVIYW5kbGVyID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIFJvdXRlSGFuZGxlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGVIYW5kbGVyKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoUm91dGVIYW5kbGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoUm91dGVIYW5kbGVyLCBbe1xuICAgIGtleTogJ2dldENoaWxkQ29udGV4dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlRGVwdGg6IHRoaXMuY29udGV4dC5yb3V0ZURlcHRoICsgMVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5fdXBkYXRlUm91dGVDb21wb25lbnQodGhpcy5yZWZzW1JFRl9OQU1FXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5fdXBkYXRlUm91dGVDb21wb25lbnQodGhpcy5yZWZzW1JFRl9OQU1FXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJvdXRlQ29tcG9uZW50KG51bGwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ191cGRhdGVSb3V0ZUNvbXBvbmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVSb3V0ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIuc2V0Um91dGVDb21wb25lbnRBdERlcHRoKHRoaXMuZ2V0Um91dGVEZXB0aCgpLCBjb21wb25lbnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFJvdXRlRGVwdGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb3V0ZURlcHRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZURlcHRoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZUNoaWxkUm91dGVIYW5kbGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ2hpbGRSb3V0ZUhhbmRsZXIocHJvcHMpIHtcbiAgICAgIHZhciByb3V0ZSA9IHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Um91dGVBdERlcHRoKHRoaXMuZ2V0Um91dGVEZXB0aCgpKTtcblxuICAgICAgaWYgKHJvdXRlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9dmFyIGNoaWxkUHJvcHMgPSBhc3NpZ24oe30sIHByb3BzIHx8IHRoaXMucHJvcHMsIHtcbiAgICAgICAgcmVmOiBSRUZfTkFNRSxcbiAgICAgICAgcGFyYW1zOiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRQYXJhbXMoKSxcbiAgICAgICAgcXVlcnk6IHRoaXMuY29udGV4dC5yb3V0ZXIuZ2V0Q3VycmVudFF1ZXJ5KClcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChyb3V0ZS5oYW5kbGVyLCBjaGlsZFByb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IHRoaXMuY3JlYXRlQ2hpbGRSb3V0ZUhhbmRsZXIoKTtcbiAgICAgIC8vIDxzY3JpcHQvPiBmb3IgdGhpbmdzIGxpa2UgPENTU1RyYW5zaXRpb25Hcm91cC8+IHRoYXQgZG9uJ3QgbGlrZSBudWxsXG4gICAgICByZXR1cm4gaGFuZGxlciA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIENvbnRleHRXcmFwcGVyLFxuICAgICAgICBudWxsLFxuICAgICAgICBoYW5kbGVyXG4gICAgICApIDogUmVhY3QuY3JlYXRlRWxlbWVudCgnc2NyaXB0JywgbnVsbCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvdXRlSGFuZGxlcjtcbn0pKFJlYWN0LkNvbXBvbmVudCk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuUm91dGVIYW5kbGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVEZXB0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICByb3V0ZXI6IFByb3BUeXBlcy5yb3V0ZXIuaXNSZXF1aXJlZFxufTtcblxuUm91dGVIYW5kbGVyLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICByb3V0ZURlcHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUm91dGVIYW5kbGVyOyIsIi8qIGpzaGludCAtVzA1OCAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdyZWFjdC9saWIvd2FybmluZycpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBjYW5Vc2VET00gPSByZXF1aXJlKCdyZWFjdC9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnKS5jYW5Vc2VET007XG52YXIgTG9jYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucycpO1xudmFyIEltaXRhdGVCcm93c2VyQmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9ycy9JbWl0YXRlQnJvd3NlckJlaGF2aW9yJyk7XG52YXIgSGFzaExvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvSGFzaExvY2F0aW9uJyk7XG52YXIgSGlzdG9yeUxvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvSGlzdG9yeUxvY2F0aW9uJyk7XG52YXIgUmVmcmVzaExvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvUmVmcmVzaExvY2F0aW9uJyk7XG52YXIgU3RhdGljTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9TdGF0aWNMb2NhdGlvbicpO1xudmFyIFNjcm9sbEhpc3RvcnkgPSByZXF1aXJlKCcuL1Njcm9sbEhpc3RvcnknKTtcbnZhciBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbiA9IHJlcXVpcmUoJy4vY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4nKTtcbnZhciBpc1JlYWN0Q2hpbGRyZW4gPSByZXF1aXJlKCcuL2lzUmVhY3RDaGlsZHJlbicpO1xudmFyIFRyYW5zaXRpb24gPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xudmFyIFJlZGlyZWN0ID0gcmVxdWlyZSgnLi9SZWRpcmVjdCcpO1xudmFyIEhpc3RvcnkgPSByZXF1aXJlKCcuL0hpc3RvcnknKTtcbnZhciBDYW5jZWxsYXRpb24gPSByZXF1aXJlKCcuL0NhbmNlbGxhdGlvbicpO1xudmFyIE1hdGNoID0gcmVxdWlyZSgnLi9NYXRjaCcpO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xudmFyIHN1cHBvcnRzSGlzdG9yeSA9IHJlcXVpcmUoJy4vc3VwcG9ydHNIaXN0b3J5Jyk7XG52YXIgUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBsb2NhdGlvbiBmb3IgbmV3IHJvdXRlcnMuXG4gKi9cbnZhciBERUZBVUxUX0xPQ0FUSU9OID0gY2FuVXNlRE9NID8gSGFzaExvY2F0aW9uIDogJy8nO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IHNjcm9sbCBiZWhhdmlvciBmb3IgbmV3IHJvdXRlcnMuXG4gKi9cbnZhciBERUZBVUxUX1NDUk9MTF9CRUhBVklPUiA9IGNhblVzZURPTSA/IEltaXRhdGVCcm93c2VyQmVoYXZpb3IgOiBudWxsO1xuXG5mdW5jdGlvbiBoYXNQcm9wZXJ0aWVzKG9iamVjdCwgcHJvcGVydGllcykge1xuICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhc01hdGNoKHJvdXRlcywgcm91dGUsIHByZXZQYXJhbXMsIG5leHRQYXJhbXMsIHByZXZRdWVyeSwgbmV4dFF1ZXJ5KSB7XG4gIHJldHVybiByb3V0ZXMuc29tZShmdW5jdGlvbiAocikge1xuICAgIGlmIChyICE9PSByb3V0ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIHBhcmFtTmFtZXMgPSByb3V0ZS5wYXJhbU5hbWVzO1xuICAgIHZhciBwYXJhbU5hbWU7XG5cbiAgICAvLyBFbnN1cmUgdGhhdCBhbGwgcGFyYW1zIHRoZSByb3V0ZSBjYXJlcyBhYm91dCBkaWQgbm90IGNoYW5nZS5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFyYW1OYW1lcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgcGFyYW1OYW1lID0gcGFyYW1OYW1lc1tpXTtcblxuICAgICAgaWYgKG5leHRQYXJhbXNbcGFyYW1OYW1lXSAhPT0gcHJldlBhcmFtc1twYXJhbU5hbWVdKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIHRoZSBxdWVyeSBoYXNuJ3QgY2hhbmdlZC5cbiAgICByZXR1cm4gaGFzUHJvcGVydGllcyhwcmV2UXVlcnksIG5leHRRdWVyeSkgJiYgaGFzUHJvcGVydGllcyhuZXh0UXVlcnksIHByZXZRdWVyeSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRSb3V0ZXNUb05hbWVkUm91dGVzKHJvdXRlcywgbmFtZWRSb3V0ZXMpIHtcbiAgdmFyIHJvdXRlO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcm91dGVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgcm91dGUgPSByb3V0ZXNbaV07XG5cbiAgICBpZiAocm91dGUubmFtZSkge1xuICAgICAgaW52YXJpYW50KG5hbWVkUm91dGVzW3JvdXRlLm5hbWVdID09IG51bGwsICdZb3UgbWF5IG5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgcm91dGUgbmFtZWQgXCIlc1wiJywgcm91dGUubmFtZSk7XG5cbiAgICAgIG5hbWVkUm91dGVzW3JvdXRlLm5hbWVdID0gcm91dGU7XG4gICAgfVxuXG4gICAgaWYgKHJvdXRlLmNoaWxkUm91dGVzKSBhZGRSb3V0ZXNUb05hbWVkUm91dGVzKHJvdXRlLmNoaWxkUm91dGVzLCBuYW1lZFJvdXRlcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcm91dGVJc0FjdGl2ZShhY3RpdmVSb3V0ZXMsIHJvdXRlTmFtZSkge1xuICByZXR1cm4gYWN0aXZlUm91dGVzLnNvbWUoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgcmV0dXJuIHJvdXRlLm5hbWUgPT09IHJvdXRlTmFtZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcmFtc0FyZUFjdGl2ZShhY3RpdmVQYXJhbXMsIHBhcmFtcykge1xuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwYXJhbXMpIGlmIChTdHJpbmcoYWN0aXZlUGFyYW1zW3Byb3BlcnR5XSkgIT09IFN0cmluZyhwYXJhbXNbcHJvcGVydHldKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfXJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBxdWVyeUlzQWN0aXZlKGFjdGl2ZVF1ZXJ5LCBxdWVyeSkge1xuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBxdWVyeSkgaWYgKFN0cmluZyhhY3RpdmVRdWVyeVtwcm9wZXJ0eV0pICE9PSBTdHJpbmcocXVlcnlbcHJvcGVydHldKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfXJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBuZXcgcm91dGVyIHVzaW5nIHRoZSBnaXZlbiBvcHRpb25zLiBBIHJvdXRlclxuICogaXMgYSBSZWFjdENvbXBvbmVudCBjbGFzcyB0aGF0IGtub3dzIGhvdyB0byByZWFjdCB0byBjaGFuZ2VzIGluIHRoZVxuICogVVJMIGFuZCBrZWVwIHRoZSBjb250ZW50cyBvZiB0aGUgcGFnZSBpbiBzeW5jLlxuICpcbiAqIE9wdGlvbnMgbWF5IGJlIGFueSBvZiB0aGUgZm9sbG93aW5nOlxuICpcbiAqIC0gcm91dGVzICAgICAgICAgICAocmVxdWlyZWQpIFRoZSByb3V0ZSBjb25maWdcbiAqIC0gbG9jYXRpb24gICAgICAgICBUaGUgbG9jYXRpb24gdG8gdXNlLiBEZWZhdWx0cyB0byBIYXNoTG9jYXRpb24gd2hlblxuICogICAgICAgICAgICAgICAgICAgIHRoZSBET00gaXMgYXZhaWxhYmxlLCBcIi9cIiBvdGhlcndpc2VcbiAqIC0gc2Nyb2xsQmVoYXZpb3IgICBUaGUgc2Nyb2xsIGJlaGF2aW9yIHRvIHVzZS4gRGVmYXVsdHMgdG8gSW1pdGF0ZUJyb3dzZXJCZWhhdmlvclxuICogICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlIERPTSBpcyBhdmFpbGFibGUsIG51bGwgb3RoZXJ3aXNlXG4gKiAtIG9uRXJyb3IgICAgICAgICAgQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gaGFuZGxlIGVycm9yc1xuICogLSBvbkFib3J0ICAgICAgICAgIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGhhbmRsZSBhYm9ydGVkIHRyYW5zaXRpb25zXG4gKlxuICogV2hlbiByZW5kZXJpbmcgaW4gYSBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudCwgdGhlIGxvY2F0aW9uIHNob3VsZCBzaW1wbHlcbiAqIGJlIHRoZSBVUkwgcGF0aCB0aGF0IHdhcyB1c2VkIGluIHRoZSByZXF1ZXN0LCBpbmNsdWRpbmcgdGhlIHF1ZXJ5IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUm91dGVyKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKGlzUmVhY3RDaGlsZHJlbihvcHRpb25zKSkgb3B0aW9ucyA9IHsgcm91dGVzOiBvcHRpb25zIH07XG5cbiAgdmFyIG1vdW50ZWRDb21wb25lbnRzID0gW107XG4gIHZhciBsb2NhdGlvbiA9IG9wdGlvbnMubG9jYXRpb24gfHwgREVGQVVMVF9MT0NBVElPTjtcbiAgdmFyIHNjcm9sbEJlaGF2aW9yID0gb3B0aW9ucy5zY3JvbGxCZWhhdmlvciB8fCBERUZBVUxUX1NDUk9MTF9CRUhBVklPUjtcbiAgdmFyIHN0YXRlID0ge307XG4gIHZhciBuZXh0U3RhdGUgPSB7fTtcbiAgdmFyIHBlbmRpbmdUcmFuc2l0aW9uID0gbnVsbDtcbiAgdmFyIGRpc3BhdGNoSGFuZGxlciA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gbmV3IFN0YXRpY0xvY2F0aW9uKGxvY2F0aW9uKTtcblxuICBpZiAobG9jYXRpb24gaW5zdGFuY2VvZiBTdGF0aWNMb2NhdGlvbikge1xuICAgIHdhcm5pbmcoIWNhblVzZURPTSB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnLCAnWW91IHNob3VsZCBub3QgdXNlIGEgc3RhdGljIGxvY2F0aW9uIGluIGEgRE9NIGVudmlyb25tZW50IGJlY2F1c2UgJyArICd0aGUgcm91dGVyIHdpbGwgbm90IGJlIGtlcHQgaW4gc3luYyB3aXRoIHRoZSBjdXJyZW50IFVSTCcpO1xuICB9IGVsc2Uge1xuICAgIGludmFyaWFudChjYW5Vc2VET00gfHwgbG9jYXRpb24ubmVlZHNET00gPT09IGZhbHNlLCAnWW91IGNhbm5vdCB1c2UgJXMgd2l0aG91dCBhIERPTScsIGxvY2F0aW9uKTtcbiAgfVxuXG4gIC8vIEF1dG9tYXRpY2FsbHkgZmFsbCBiYWNrIHRvIGZ1bGwgcGFnZSByZWZyZXNoZXMgaW5cbiAgLy8gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBIVE1MIGhpc3RvcnkgQVBJLlxuICBpZiAobG9jYXRpb24gPT09IEhpc3RvcnlMb2NhdGlvbiAmJiAhc3VwcG9ydHNIaXN0b3J5KCkpIGxvY2F0aW9uID0gUmVmcmVzaExvY2F0aW9uO1xuXG4gIHZhciBSb3V0ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBkaXNwbGF5TmFtZTogJ1JvdXRlcicsXG5cbiAgICBzdGF0aWNzOiB7XG5cbiAgICAgIGlzUnVubmluZzogZmFsc2UsXG5cbiAgICAgIGNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uOiBmdW5jdGlvbiBjYW5jZWxQZW5kaW5nVHJhbnNpdGlvbigpIHtcbiAgICAgICAgaWYgKHBlbmRpbmdUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgcGVuZGluZ1RyYW5zaXRpb24uY2FuY2VsKCk7XG4gICAgICAgICAgcGVuZGluZ1RyYW5zaXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBjbGVhckFsbFJvdXRlczogZnVuY3Rpb24gY2xlYXJBbGxSb3V0ZXMoKSB7XG4gICAgICAgIFJvdXRlci5jYW5jZWxQZW5kaW5nVHJhbnNpdGlvbigpO1xuICAgICAgICBSb3V0ZXIubmFtZWRSb3V0ZXMgPSB7fTtcbiAgICAgICAgUm91dGVyLnJvdXRlcyA9IFtdO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBZGRzIHJvdXRlcyB0byB0aGlzIHJvdXRlciBmcm9tIHRoZSBnaXZlbiBjaGlsZHJlbiBvYmplY3QgKHNlZSBSZWFjdENoaWxkcmVuKS5cbiAgICAgICAqL1xuICAgICAgYWRkUm91dGVzOiBmdW5jdGlvbiBhZGRSb3V0ZXMocm91dGVzKSB7XG4gICAgICAgIGlmIChpc1JlYWN0Q2hpbGRyZW4ocm91dGVzKSkgcm91dGVzID0gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4ocm91dGVzKTtcblxuICAgICAgICBhZGRSb3V0ZXNUb05hbWVkUm91dGVzKHJvdXRlcywgUm91dGVyLm5hbWVkUm91dGVzKTtcblxuICAgICAgICBSb3V0ZXIucm91dGVzLnB1c2guYXBwbHkoUm91dGVyLnJvdXRlcywgcm91dGVzKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVwbGFjZXMgcm91dGVzIG9mIHRoaXMgcm91dGVyIGZyb20gdGhlIGdpdmVuIGNoaWxkcmVuIG9iamVjdCAoc2VlIFJlYWN0Q2hpbGRyZW4pLlxuICAgICAgICovXG4gICAgICByZXBsYWNlUm91dGVzOiBmdW5jdGlvbiByZXBsYWNlUm91dGVzKHJvdXRlcykge1xuICAgICAgICBSb3V0ZXIuY2xlYXJBbGxSb3V0ZXMoKTtcbiAgICAgICAgUm91dGVyLmFkZFJvdXRlcyhyb3V0ZXMpO1xuICAgICAgICBSb3V0ZXIucmVmcmVzaCgpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBQZXJmb3JtcyBhIG1hdGNoIG9mIHRoZSBnaXZlbiBwYXRoIGFnYWluc3QgdGhpcyByb3V0ZXIgYW5kIHJldHVybnMgYW4gb2JqZWN0XG4gICAgICAgKiB3aXRoIHRoZSB7IHJvdXRlcywgcGFyYW1zLCBwYXRobmFtZSwgcXVlcnkgfSB0aGF0IG1hdGNoLiBSZXR1cm5zIG51bGwgaWYgbm9cbiAgICAgICAqIG1hdGNoIGNhbiBiZSBtYWRlLlxuICAgICAgICovXG4gICAgICBtYXRjaDogZnVuY3Rpb24gbWF0Y2gocGF0aCkge1xuICAgICAgICByZXR1cm4gTWF0Y2guZmluZE1hdGNoKFJvdXRlci5yb3V0ZXMsIHBhdGgpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIGFuIGFic29sdXRlIFVSTCBwYXRoIGNyZWF0ZWQgZnJvbSB0aGUgZ2l2ZW4gcm91dGVcbiAgICAgICAqIG5hbWUsIFVSTCBwYXJhbWV0ZXJzLCBhbmQgcXVlcnkuXG4gICAgICAgKi9cbiAgICAgIG1ha2VQYXRoOiBmdW5jdGlvbiBtYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICB2YXIgcGF0aDtcbiAgICAgICAgaWYgKFBhdGhVdGlscy5pc0Fic29sdXRlKHRvKSkge1xuICAgICAgICAgIHBhdGggPSB0bztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcm91dGUgPSB0byBpbnN0YW5jZW9mIFJvdXRlID8gdG8gOiBSb3V0ZXIubmFtZWRSb3V0ZXNbdG9dO1xuXG4gICAgICAgICAgaW52YXJpYW50KHJvdXRlIGluc3RhbmNlb2YgUm91dGUsICdDYW5ub3QgZmluZCBhIHJvdXRlIG5hbWVkIFwiJXNcIicsIHRvKTtcblxuICAgICAgICAgIHBhdGggPSByb3V0ZS5wYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFBhdGhVdGlscy53aXRoUXVlcnkoUGF0aFV0aWxzLmluamVjdFBhcmFtcyhwYXRoLCBwYXJhbXMpLCBxdWVyeSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYSBzdHJpbmcgdGhhdCBtYXkgc2FmZWx5IGJlIHVzZWQgYXMgdGhlIGhyZWYgb2YgYSBsaW5rXG4gICAgICAgKiB0byB0aGUgcm91dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgVVJMIHBhcmFtZXRlcnMsIGFuZCBxdWVyeS5cbiAgICAgICAqL1xuICAgICAgbWFrZUhyZWY6IGZ1bmN0aW9uIG1ha2VIcmVmKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgIHZhciBwYXRoID0gUm91dGVyLm1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uID09PSBIYXNoTG9jYXRpb24gPyAnIycgKyBwYXRoIDogcGF0aDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNpdGlvbnMgdG8gdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGFyZ3VtZW50cyBieSBwdXNoaW5nXG4gICAgICAgKiBhIG5ldyBVUkwgb250byB0aGUgaGlzdG9yeSBzdGFjay5cbiAgICAgICAqL1xuICAgICAgdHJhbnNpdGlvblRvOiBmdW5jdGlvbiB0cmFuc2l0aW9uVG8odG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgdmFyIHBhdGggPSBSb3V0ZXIubWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpO1xuXG4gICAgICAgIGlmIChwZW5kaW5nVHJhbnNpdGlvbikge1xuICAgICAgICAgIC8vIFJlcGxhY2Ugc28gcGVuZGluZyBsb2NhdGlvbiBkb2VzIG5vdCBzdGF5IGluIGhpc3RvcnkuXG4gICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShwYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2NhdGlvbi5wdXNoKHBhdGgpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5zaXRpb25zIHRvIHRoZSBVUkwgc3BlY2lmaWVkIGluIHRoZSBhcmd1bWVudHMgYnkgcmVwbGFjaW5nXG4gICAgICAgKiB0aGUgY3VycmVudCBVUkwgaW4gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAgICAgKi9cbiAgICAgIHJlcGxhY2VXaXRoOiBmdW5jdGlvbiByZXBsYWNlV2l0aCh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFJvdXRlci5tYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSkpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgcHJldmlvdXMgVVJMIGlmIG9uZSBpcyBhdmFpbGFibGUuIFJldHVybnMgdHJ1ZSBpZiB0aGVcbiAgICAgICAqIHJvdXRlciB3YXMgYWJsZSB0byBnbyBiYWNrLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogTm90ZTogVGhlIHJvdXRlciBvbmx5IHRyYWNrcyBoaXN0b3J5IGVudHJpZXMgaW4geW91ciBhcHBsaWNhdGlvbiwgbm90IHRoZVxuICAgICAgICogY3VycmVudCBicm93c2VyIHNlc3Npb24sIHNvIHlvdSBjYW4gc2FmZWx5IGNhbGwgdGhpcyBmdW5jdGlvbiB3aXRob3V0IGd1YXJkaW5nXG4gICAgICAgKiBhZ2FpbnN0IHNlbmRpbmcgdGhlIHVzZXIgYmFjayB0byBzb21lIG90aGVyIHNpdGUuIEhvd2V2ZXIsIHdoZW4gdXNpbmdcbiAgICAgICAqIFJlZnJlc2hMb2NhdGlvbiAod2hpY2ggaXMgdGhlIGZhbGxiYWNrIGZvciBIaXN0b3J5TG9jYXRpb24gaW4gYnJvd3NlcnMgdGhhdFxuICAgICAgICogZG9uJ3Qgc3VwcG9ydCBIVE1MNSBoaXN0b3J5KSB0aGlzIG1ldGhvZCB3aWxsICphbHdheXMqIHNlbmQgdGhlIGNsaWVudCBiYWNrXG4gICAgICAgKiBiZWNhdXNlIHdlIGNhbm5vdCByZWxpYWJseSB0cmFjayBoaXN0b3J5IGxlbmd0aC5cbiAgICAgICAqL1xuICAgICAgZ29CYWNrOiBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgICAgIGlmIChIaXN0b3J5Lmxlbmd0aCA+IDEgfHwgbG9jYXRpb24gPT09IFJlZnJlc2hMb2NhdGlvbikge1xuICAgICAgICAgIGxvY2F0aW9uLnBvcCgpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgd2FybmluZyhmYWxzZSwgJ2dvQmFjaygpIHdhcyBpZ25vcmVkIGJlY2F1c2UgdGhlcmUgaXMgbm8gcm91dGVyIGhpc3RvcnknKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICBoYW5kbGVBYm9ydDogb3B0aW9ucy5vbkFib3J0IHx8IGZ1bmN0aW9uIChhYm9ydFJlYXNvbikge1xuICAgICAgICBpZiAobG9jYXRpb24gaW5zdGFuY2VvZiBTdGF0aWNMb2NhdGlvbikgdGhyb3cgbmV3IEVycm9yKCdVbmhhbmRsZWQgYWJvcnRlZCB0cmFuc2l0aW9uISBSZWFzb246ICcgKyBhYm9ydFJlYXNvbik7XG5cbiAgICAgICAgaWYgKGFib3J0UmVhc29uIGluc3RhbmNlb2YgQ2FuY2VsbGF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGFib3J0UmVhc29uIGluc3RhbmNlb2YgUmVkaXJlY3QpIHtcbiAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFJvdXRlci5tYWtlUGF0aChhYm9ydFJlYXNvbi50bywgYWJvcnRSZWFzb24ucGFyYW1zLCBhYm9ydFJlYXNvbi5xdWVyeSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvY2F0aW9uLnBvcCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBoYW5kbGVFcnJvcjogb3B0aW9ucy5vbkVycm9yIHx8IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAvLyBUaHJvdyBzbyB3ZSBkb24ndCBzaWxlbnRseSBzd2FsbG93IGFzeW5jIGVycm9ycy5cbiAgICAgICAgdGhyb3cgZXJyb3I7IC8vIFRoaXMgZXJyb3IgcHJvYmFibHkgb3JpZ2luYXRlZCBpbiBhIHRyYW5zaXRpb24gaG9vay5cbiAgICAgIH0sXG5cbiAgICAgIGhhbmRsZUxvY2F0aW9uQ2hhbmdlOiBmdW5jdGlvbiBoYW5kbGVMb2NhdGlvbkNoYW5nZShjaGFuZ2UpIHtcbiAgICAgICAgUm91dGVyLmRpc3BhdGNoKGNoYW5nZS5wYXRoLCBjaGFuZ2UudHlwZSk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFBlcmZvcm1zIGEgdHJhbnNpdGlvbiB0byB0aGUgZ2l2ZW4gcGF0aCBhbmQgY2FsbHMgY2FsbGJhY2soZXJyb3IsIGFib3J0UmVhc29uKVxuICAgICAgICogd2hlbiB0aGUgdHJhbnNpdGlvbiBpcyBmaW5pc2hlZC4gSWYgYm90aCBhcmd1bWVudHMgYXJlIG51bGwgdGhlIHJvdXRlcidzIHN0YXRlXG4gICAgICAgKiB3YXMgdXBkYXRlZC4gT3RoZXJ3aXNlIHRoZSB0cmFuc2l0aW9uIGRpZCBub3QgY29tcGxldGUuXG4gICAgICAgKlxuICAgICAgICogSW4gYSB0cmFuc2l0aW9uLCBhIHJvdXRlciBmaXJzdCBkZXRlcm1pbmVzIHdoaWNoIHJvdXRlcyBhcmUgaW52b2x2ZWQgYnkgYmVnaW5uaW5nXG4gICAgICAgKiB3aXRoIHRoZSBjdXJyZW50IHJvdXRlLCB1cCB0aGUgcm91dGUgdHJlZSB0byB0aGUgZmlyc3QgcGFyZW50IHJvdXRlIHRoYXQgaXMgc2hhcmVkXG4gICAgICAgKiB3aXRoIHRoZSBkZXN0aW5hdGlvbiByb3V0ZSwgYW5kIGJhY2sgZG93biB0aGUgdHJlZSB0byB0aGUgZGVzdGluYXRpb24gcm91dGUuIFRoZVxuICAgICAgICogd2lsbFRyYW5zaXRpb25Gcm9tIGhvb2sgaXMgaW52b2tlZCBvbiBhbGwgcm91dGUgaGFuZGxlcnMgd2UncmUgdHJhbnNpdGlvbmluZyBhd2F5XG4gICAgICAgKiBmcm9tLCBpbiByZXZlcnNlIG5lc3Rpbmcgb3JkZXIuIExpa2V3aXNlLCB0aGUgd2lsbFRyYW5zaXRpb25UbyBob29rIGlzIGludm9rZWQgb25cbiAgICAgICAqIGFsbCByb3V0ZSBoYW5kbGVycyB3ZSdyZSB0cmFuc2l0aW9uaW5nIHRvLlxuICAgICAgICpcbiAgICAgICAqIEJvdGggd2lsbFRyYW5zaXRpb25Gcm9tIGFuZCB3aWxsVHJhbnNpdGlvblRvIGhvb2tzIG1heSBlaXRoZXIgYWJvcnQgb3IgcmVkaXJlY3QgdGhlXG4gICAgICAgKiB0cmFuc2l0aW9uLiBUbyByZXNvbHZlIGFzeW5jaHJvbm91c2x5LCB0aGV5IG1heSB1c2UgdGhlIGNhbGxiYWNrIGFyZ3VtZW50LiBJZiBub1xuICAgICAgICogaG9va3Mgd2FpdCwgdGhlIHRyYW5zaXRpb24gaXMgZnVsbHkgc3luY2hyb25vdXMuXG4gICAgICAgKi9cbiAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChwYXRoLCBhY3Rpb24pIHtcbiAgICAgICAgUm91dGVyLmNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgdmFyIHByZXZQYXRoID0gc3RhdGUucGF0aDtcbiAgICAgICAgdmFyIGlzUmVmcmVzaGluZyA9IGFjdGlvbiA9PSBudWxsO1xuXG4gICAgICAgIGlmIChwcmV2UGF0aCA9PT0gcGF0aCAmJiAhaXNSZWZyZXNoaW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIE5vdGhpbmcgdG8gZG8hXG5cbiAgICAgICAgLy8gUmVjb3JkIHRoZSBzY3JvbGwgcG9zaXRpb24gYXMgZWFybHkgYXMgcG9zc2libGUgdG9cbiAgICAgICAgLy8gZ2V0IGl0IGJlZm9yZSBicm93c2VycyB0cnkgdXBkYXRlIGl0IGF1dG9tYXRpY2FsbHkuXG4gICAgICAgIGlmIChwcmV2UGF0aCAmJiBhY3Rpb24gPT09IExvY2F0aW9uQWN0aW9ucy5QVVNIKSBSb3V0ZXIucmVjb3JkU2Nyb2xsUG9zaXRpb24ocHJldlBhdGgpO1xuXG4gICAgICAgIHZhciBtYXRjaCA9IFJvdXRlci5tYXRjaChwYXRoKTtcblxuICAgICAgICB3YXJuaW5nKG1hdGNoICE9IG51bGwsICdObyByb3V0ZSBtYXRjaGVzIHBhdGggXCIlc1wiLiBNYWtlIHN1cmUgeW91IGhhdmUgPFJvdXRlIHBhdGg9XCIlc1wiPiBzb21ld2hlcmUgaW4geW91ciByb3V0ZXMnLCBwYXRoLCBwYXRoKTtcblxuICAgICAgICBpZiAobWF0Y2ggPT0gbnVsbCkgbWF0Y2ggPSB7fTtcblxuICAgICAgICB2YXIgcHJldlJvdXRlcyA9IHN0YXRlLnJvdXRlcyB8fCBbXTtcbiAgICAgICAgdmFyIHByZXZQYXJhbXMgPSBzdGF0ZS5wYXJhbXMgfHwge307XG4gICAgICAgIHZhciBwcmV2UXVlcnkgPSBzdGF0ZS5xdWVyeSB8fCB7fTtcblxuICAgICAgICB2YXIgbmV4dFJvdXRlcyA9IG1hdGNoLnJvdXRlcyB8fCBbXTtcbiAgICAgICAgdmFyIG5leHRQYXJhbXMgPSBtYXRjaC5wYXJhbXMgfHwge307XG4gICAgICAgIHZhciBuZXh0UXVlcnkgPSBtYXRjaC5xdWVyeSB8fCB7fTtcblxuICAgICAgICB2YXIgZnJvbVJvdXRlcywgdG9Sb3V0ZXM7XG4gICAgICAgIGlmIChwcmV2Um91dGVzLmxlbmd0aCkge1xuICAgICAgICAgIGZyb21Sb3V0ZXMgPSBwcmV2Um91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzTWF0Y2gobmV4dFJvdXRlcywgcm91dGUsIHByZXZQYXJhbXMsIG5leHRQYXJhbXMsIHByZXZRdWVyeSwgbmV4dFF1ZXJ5KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRvUm91dGVzID0gbmV4dFJvdXRlcy5maWx0ZXIoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gIWhhc01hdGNoKHByZXZSb3V0ZXMsIHJvdXRlLCBwcmV2UGFyYW1zLCBuZXh0UGFyYW1zLCBwcmV2UXVlcnksIG5leHRRdWVyeSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJvbVJvdXRlcyA9IFtdO1xuICAgICAgICAgIHRvUm91dGVzID0gbmV4dFJvdXRlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24ocGF0aCwgUm91dGVyLnJlcGxhY2VXaXRoLmJpbmQoUm91dGVyLCBwYXRoKSk7XG4gICAgICAgIHBlbmRpbmdUcmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcblxuICAgICAgICB2YXIgZnJvbUNvbXBvbmVudHMgPSBtb3VudGVkQ29tcG9uZW50cy5zbGljZShwcmV2Um91dGVzLmxlbmd0aCAtIGZyb21Sb3V0ZXMubGVuZ3RoKTtcblxuICAgICAgICBUcmFuc2l0aW9uLmZyb20odHJhbnNpdGlvbiwgZnJvbVJvdXRlcywgZnJvbUNvbXBvbmVudHMsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGlmIChlcnJvciB8fCB0cmFuc2l0aW9uLmFib3J0UmVhc29uKSByZXR1cm4gZGlzcGF0Y2hIYW5kbGVyLmNhbGwoUm91dGVyLCBlcnJvciwgdHJhbnNpdGlvbik7IC8vIE5vIG5lZWQgdG8gY29udGludWUuXG5cbiAgICAgICAgICBUcmFuc2l0aW9uLnRvKHRyYW5zaXRpb24sIHRvUm91dGVzLCBuZXh0UGFyYW1zLCBuZXh0UXVlcnksIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgZGlzcGF0Y2hIYW5kbGVyLmNhbGwoUm91dGVyLCBlcnJvciwgdHJhbnNpdGlvbiwge1xuICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IG1hdGNoLnBhdGhuYW1lLFxuICAgICAgICAgICAgICByb3V0ZXM6IG5leHRSb3V0ZXMsXG4gICAgICAgICAgICAgIHBhcmFtczogbmV4dFBhcmFtcyxcbiAgICAgICAgICAgICAgcXVlcnk6IG5leHRRdWVyeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTdGFydHMgdGhpcyByb3V0ZXIgYW5kIGNhbGxzIGNhbGxiYWNrKHJvdXRlciwgc3RhdGUpIHdoZW4gdGhlIHJvdXRlIGNoYW5nZXMuXG4gICAgICAgKlxuICAgICAgICogSWYgdGhlIHJvdXRlcidzIGxvY2F0aW9uIGlzIHN0YXRpYyAoaS5lLiBhIFVSTCBwYXRoIGluIGEgc2VydmVyIGVudmlyb25tZW50KVxuICAgICAgICogdGhlIGNhbGxiYWNrIGlzIGNhbGxlZCBvbmx5IG9uY2UuIE90aGVyd2lzZSwgdGhlIGxvY2F0aW9uIHNob3VsZCBiZSBvbmUgb2YgdGhlXG4gICAgICAgKiBSb3V0ZXIuKkxvY2F0aW9uIG9iamVjdHMgKGUuZy4gUm91dGVyLkhhc2hMb2NhdGlvbiBvciBSb3V0ZXIuSGlzdG9yeUxvY2F0aW9uKS5cbiAgICAgICAqL1xuICAgICAgcnVuOiBmdW5jdGlvbiBydW4oY2FsbGJhY2spIHtcbiAgICAgICAgaW52YXJpYW50KCFSb3V0ZXIuaXNSdW5uaW5nLCAnUm91dGVyIGlzIGFscmVhZHkgcnVubmluZycpO1xuXG4gICAgICAgIGRpc3BhdGNoSGFuZGxlciA9IGZ1bmN0aW9uIChlcnJvciwgdHJhbnNpdGlvbiwgbmV3U3RhdGUpIHtcbiAgICAgICAgICBpZiAoZXJyb3IpIFJvdXRlci5oYW5kbGVFcnJvcihlcnJvcik7XG5cbiAgICAgICAgICBpZiAocGVuZGluZ1RyYW5zaXRpb24gIT09IHRyYW5zaXRpb24pIHJldHVybjtcblxuICAgICAgICAgIHBlbmRpbmdUcmFuc2l0aW9uID0gbnVsbDtcblxuICAgICAgICAgIGlmICh0cmFuc2l0aW9uLmFib3J0UmVhc29uKSB7XG4gICAgICAgICAgICBSb3V0ZXIuaGFuZGxlQWJvcnQodHJhbnNpdGlvbi5hYm9ydFJlYXNvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoUm91dGVyLCBSb3V0ZXIsIG5leHRTdGF0ZSA9IG5ld1N0YXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCEobG9jYXRpb24gaW5zdGFuY2VvZiBTdGF0aWNMb2NhdGlvbikpIHtcbiAgICAgICAgICBpZiAobG9jYXRpb24uYWRkQ2hhbmdlTGlzdGVuZXIpIGxvY2F0aW9uLmFkZENoYW5nZUxpc3RlbmVyKFJvdXRlci5oYW5kbGVMb2NhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgICBSb3V0ZXIuaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJvb3RzdHJhcCB1c2luZyB0aGUgY3VycmVudCBwYXRoLlxuICAgICAgICBSb3V0ZXIucmVmcmVzaCgpO1xuICAgICAgfSxcblxuICAgICAgcmVmcmVzaDogZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICAgICAgUm91dGVyLmRpc3BhdGNoKGxvY2F0aW9uLmdldEN1cnJlbnRQYXRoKCksIG51bGwpO1xuICAgICAgfSxcblxuICAgICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgUm91dGVyLmNhbmNlbFBlbmRpbmdUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKGxvY2F0aW9uLnJlbW92ZUNoYW5nZUxpc3RlbmVyKSBsb2NhdGlvbi5yZW1vdmVDaGFuZ2VMaXN0ZW5lcihSb3V0ZXIuaGFuZGxlTG9jYXRpb25DaGFuZ2UpO1xuXG4gICAgICAgIFJvdXRlci5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIGdldExvY2F0aW9uOiBmdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgICAgfSxcblxuICAgICAgZ2V0U2Nyb2xsQmVoYXZpb3I6IGZ1bmN0aW9uIGdldFNjcm9sbEJlaGF2aW9yKCkge1xuICAgICAgICByZXR1cm4gc2Nyb2xsQmVoYXZpb3I7XG4gICAgICB9LFxuXG4gICAgICBnZXRSb3V0ZUF0RGVwdGg6IGZ1bmN0aW9uIGdldFJvdXRlQXREZXB0aChyb3V0ZURlcHRoKSB7XG4gICAgICAgIHZhciByb3V0ZXMgPSBzdGF0ZS5yb3V0ZXM7XG4gICAgICAgIHJldHVybiByb3V0ZXMgJiYgcm91dGVzW3JvdXRlRGVwdGhdO1xuICAgICAgfSxcblxuICAgICAgc2V0Um91dGVDb21wb25lbnRBdERlcHRoOiBmdW5jdGlvbiBzZXRSb3V0ZUNvbXBvbmVudEF0RGVwdGgocm91dGVEZXB0aCwgY29tcG9uZW50KSB7XG4gICAgICAgIG1vdW50ZWRDb21wb25lbnRzW3JvdXRlRGVwdGhdID0gY29tcG9uZW50O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IFVSTCBwYXRoICsgcXVlcnkgc3RyaW5nLlxuICAgICAgICovXG4gICAgICBnZXRDdXJyZW50UGF0aDogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGgoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5wYXRoO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IFVSTCBwYXRoIHdpdGhvdXQgdGhlIHF1ZXJ5IHN0cmluZy5cbiAgICAgICAqL1xuICAgICAgZ2V0Q3VycmVudFBhdGhuYW1lOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aG5hbWUoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5wYXRobmFtZTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhbiBvYmplY3Qgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgVVJMIHBhcmFtZXRlcnMuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRQYXJhbXM6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5wYXJhbXM7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIHF1ZXJ5IHBhcmFtZXRlcnMuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRRdWVyeTogZnVuY3Rpb24gZ2V0Q3VycmVudFF1ZXJ5KCkge1xuICAgICAgICByZXR1cm4gc3RhdGUucXVlcnk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgcm91dGVzLlxuICAgICAgICovXG4gICAgICBnZXRDdXJyZW50Um91dGVzOiBmdW5jdGlvbiBnZXRDdXJyZW50Um91dGVzKCkge1xuICAgICAgICByZXR1cm4gc3RhdGUucm91dGVzO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHJvdXRlLCBwYXJhbXMsIGFuZCBxdWVyeSBhcmUgYWN0aXZlLlxuICAgICAgICovXG4gICAgICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgaWYgKFBhdGhVdGlscy5pc0Fic29sdXRlKHRvKSkge1xuICAgICAgICAgIHJldHVybiB0byA9PT0gc3RhdGUucGF0aDtcbiAgICAgICAgfXJldHVybiByb3V0ZUlzQWN0aXZlKHN0YXRlLnJvdXRlcywgdG8pICYmIHBhcmFtc0FyZUFjdGl2ZShzdGF0ZS5wYXJhbXMsIHBhcmFtcykgJiYgKHF1ZXJ5ID09IG51bGwgfHwgcXVlcnlJc0FjdGl2ZShzdGF0ZS5xdWVyeSwgcXVlcnkpKTtcbiAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtaXhpbnM6IFtTY3JvbGxIaXN0b3J5XSxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5mYWxzeVxuICAgIH0sXG5cbiAgICBjaGlsZENvbnRleHRUeXBlczoge1xuICAgICAgcm91dGVEZXB0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgcm91dGVyOiBQcm9wVHlwZXMucm91dGVyLmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgZ2V0Q2hpbGRDb250ZXh0OiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZURlcHRoOiAxLFxuICAgICAgICByb3V0ZXI6IFJvdXRlclxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICByZXR1cm4gc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0gbmV4dFN0YXRlKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgUm91dGVyLnN0b3AoKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcm91dGUgPSBSb3V0ZXIuZ2V0Um91dGVBdERlcHRoKDApO1xuICAgICAgcmV0dXJuIHJvdXRlID8gUmVhY3QuY3JlYXRlRWxlbWVudChyb3V0ZS5oYW5kbGVyLCB0aGlzLnByb3BzKSA6IG51bGw7XG4gICAgfVxuXG4gIH0pO1xuXG4gIFJvdXRlci5jbGVhckFsbFJvdXRlcygpO1xuXG4gIGlmIChvcHRpb25zLnJvdXRlcykgUm91dGVyLmFkZFJvdXRlcyhvcHRpb25zLnJvdXRlcyk7XG5cbiAgcmV0dXJuIFJvdXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVSb3V0ZXI7IiwiLyoganNoaW50IC1XMDg0ICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgncmVhY3QvbGliL09iamVjdC5hc3NpZ24nKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgncmVhY3QvbGliL3dhcm5pbmcnKTtcbnZhciBEZWZhdWx0Um91dGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRGVmYXVsdFJvdXRlJyk7XG52YXIgTm90Rm91bmRSb3V0ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ob3RGb3VuZFJvdXRlJyk7XG52YXIgUmVkaXJlY3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUmVkaXJlY3QnKTtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXMoY29tcG9uZW50TmFtZSwgcHJvcFR5cGVzLCBwcm9wcykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCAnVW5rbm93bkNvbXBvbmVudCc7XG5cbiAgZm9yICh2YXIgcHJvcE5hbWUgaW4gcHJvcFR5cGVzKSB7XG4gICAgaWYgKHByb3BUeXBlcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgIHZhciBlcnJvciA9IHByb3BUeXBlc1twcm9wTmFtZV0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHdhcm5pbmcoZmFsc2UsIGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZU9wdGlvbnMocHJvcHMpIHtcbiAgdmFyIG9wdGlvbnMgPSBhc3NpZ24oe30sIHByb3BzKTtcbiAgdmFyIGhhbmRsZXIgPSBvcHRpb25zLmhhbmRsZXI7XG5cbiAgaWYgKGhhbmRsZXIpIHtcbiAgICBvcHRpb25zLm9uRW50ZXIgPSBoYW5kbGVyLndpbGxUcmFuc2l0aW9uVG87XG4gICAgb3B0aW9ucy5vbkxlYXZlID0gaGFuZGxlci53aWxsVHJhbnNpdGlvbkZyb207XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfXZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuICB2YXIgcHJvcHMgPSBhc3NpZ24oe30sIHR5cGUuZGVmYXVsdFByb3BzLCBlbGVtZW50LnByb3BzKTtcblxuICBpZiAodHlwZS5wcm9wVHlwZXMpIGNoZWNrUHJvcFR5cGVzKHR5cGUuZGlzcGxheU5hbWUsIHR5cGUucHJvcFR5cGVzLCBwcm9wcyk7XG5cbiAgaWYgKHR5cGUgPT09IERlZmF1bHRSb3V0ZSkge1xuICAgIHJldHVybiBSb3V0ZS5jcmVhdGVEZWZhdWx0Um91dGUoY3JlYXRlUm91dGVPcHRpb25zKHByb3BzKSk7XG4gIH1pZiAodHlwZSA9PT0gTm90Rm91bmRSb3V0ZSkge1xuICAgIHJldHVybiBSb3V0ZS5jcmVhdGVOb3RGb3VuZFJvdXRlKGNyZWF0ZVJvdXRlT3B0aW9ucyhwcm9wcykpO1xuICB9aWYgKHR5cGUgPT09IFJlZGlyZWN0KSB7XG4gICAgcmV0dXJuIFJvdXRlLmNyZWF0ZVJlZGlyZWN0KGNyZWF0ZVJvdXRlT3B0aW9ucyhwcm9wcykpO1xuICB9cmV0dXJuIFJvdXRlLmNyZWF0ZVJvdXRlKGNyZWF0ZVJvdXRlT3B0aW9ucyhwcm9wcyksIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJvcHMuY2hpbGRyZW4pIGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKHByb3BzLmNoaWxkcmVuKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiByb3V0ZXMgY3JlYXRlZCBmcm9tIHRoZSBnaXZlblxuICogUmVhY3RDaGlsZHJlbiwgYWxsIG9mIHdoaWNoIHNob3VsZCBiZSBvbmUgb2YgPFJvdXRlPiwgPERlZmF1bHRSb3V0ZT4sXG4gKiA8Tm90Rm91bmRSb3V0ZT4sIG9yIDxSZWRpcmVjdD4sIGUuZy46XG4gKlxuICogICB2YXIgeyBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbiwgUm91dGUsIFJlZGlyZWN0IH0gPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbiAqXG4gKiAgIHZhciByb3V0ZXMgPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihcbiAqICAgICA8Um91dGUgcGF0aD1cIi9cIiBoYW5kbGVyPXtBcHB9PlxuICogICAgICAgPFJvdXRlIG5hbWU9XCJ1c2VyXCIgcGF0aD1cIi91c2VyLzp1c2VySWRcIiBoYW5kbGVyPXtVc2VyfT5cbiAqICAgICAgICAgPFJvdXRlIG5hbWU9XCJ0YXNrXCIgcGF0aD1cInRhc2tzLzp0YXNrSWRcIiBoYW5kbGVyPXtUYXNrfS8+XG4gKiAgICAgICAgIDxSZWRpcmVjdCBmcm9tPVwidG9kb3MvOnRhc2tJZFwiIHRvPVwidGFza1wiLz5cbiAqICAgICAgIDwvUm91dGU+XG4gKiAgICAgPC9Sb3V0ZT5cbiAqICAgKTtcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIHJvdXRlcyA9IFtdO1xuXG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCA9IGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChjaGlsZCkpIHJvdXRlcy5wdXNoKGNoaWxkKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvdXRlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgY2FuVXNlRE9NID0gcmVxdWlyZSgncmVhY3QvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50JykuY2FuVXNlRE9NO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSB3aW5kb3cgYXMgeyB4LCB5IH0uXG4gKi9cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbFBvc2l0aW9uKCkge1xuICBpbnZhcmlhbnQoY2FuVXNlRE9NLCAnQ2Fubm90IGdldCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiB3aXRob3V0IGEgRE9NJyk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRXaW5kb3dTY3JvbGxQb3NpdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuRGVmYXVsdFJvdXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0RlZmF1bHRSb3V0ZScpO1xuZXhwb3J0cy5MaW5rID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0xpbmsnKTtcbmV4cG9ydHMuTm90Rm91bmRSb3V0ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Ob3RGb3VuZFJvdXRlJyk7XG5leHBvcnRzLlJlZGlyZWN0ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1JlZGlyZWN0Jyk7XG5leHBvcnRzLlJvdXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1JvdXRlJyk7XG5leHBvcnRzLkFjdGl2ZUhhbmRsZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUm91dGVIYW5kbGVyJyk7XG5leHBvcnRzLlJvdXRlSGFuZGxlciA9IGV4cG9ydHMuQWN0aXZlSGFuZGxlcjtcblxuZXhwb3J0cy5IYXNoTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9IYXNoTG9jYXRpb24nKTtcbmV4cG9ydHMuSGlzdG9yeUxvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvSGlzdG9yeUxvY2F0aW9uJyk7XG5leHBvcnRzLlJlZnJlc2hMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL1JlZnJlc2hMb2NhdGlvbicpO1xuZXhwb3J0cy5TdGF0aWNMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL1N0YXRpY0xvY2F0aW9uJyk7XG5leHBvcnRzLlRlc3RMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL1Rlc3RMb2NhdGlvbicpO1xuXG5leHBvcnRzLkltaXRhdGVCcm93c2VyQmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9ycy9JbWl0YXRlQnJvd3NlckJlaGF2aW9yJyk7XG5leHBvcnRzLlNjcm9sbFRvVG9wQmVoYXZpb3IgPSByZXF1aXJlKCcuL2JlaGF2aW9ycy9TY3JvbGxUb1RvcEJlaGF2aW9yJyk7XG5cbmV4cG9ydHMuSGlzdG9yeSA9IHJlcXVpcmUoJy4vSGlzdG9yeScpO1xuZXhwb3J0cy5OYXZpZ2F0aW9uID0gcmVxdWlyZSgnLi9OYXZpZ2F0aW9uJyk7XG5leHBvcnRzLlN0YXRlID0gcmVxdWlyZSgnLi9TdGF0ZScpO1xuXG5leHBvcnRzLmNyZWF0ZVJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpLmNyZWF0ZVJvdXRlO1xuZXhwb3J0cy5jcmVhdGVEZWZhdWx0Um91dGUgPSByZXF1aXJlKCcuL1JvdXRlJykuY3JlYXRlRGVmYXVsdFJvdXRlO1xuZXhwb3J0cy5jcmVhdGVOb3RGb3VuZFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpLmNyZWF0ZU5vdEZvdW5kUm91dGU7XG5leHBvcnRzLmNyZWF0ZVJlZGlyZWN0ID0gcmVxdWlyZSgnLi9Sb3V0ZScpLmNyZWF0ZVJlZGlyZWN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbiA9IHJlcXVpcmUoJy4vY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4nKTtcblxuZXhwb3J0cy5jcmVhdGUgPSByZXF1aXJlKCcuL2NyZWF0ZVJvdXRlcicpO1xuZXhwb3J0cy5ydW4gPSByZXF1aXJlKCcuL3J1blJvdXRlcicpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gaXNWYWxpZENoaWxkKG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgfHwgUmVhY3QuaXNWYWxpZEVsZW1lbnQob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gaXNSZWFjdENoaWxkcmVuKG9iamVjdCkge1xuICByZXR1cm4gaXNWYWxpZENoaWxkKG9iamVjdCkgfHwgQXJyYXkuaXNBcnJheShvYmplY3QpICYmIG9iamVjdC5ldmVyeShpc1ZhbGlkQ2hpbGQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUmVhY3RDaGlsZHJlbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucycpO1xudmFyIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9IaXN0b3J5Jyk7XG5cbnZhciBfbGlzdGVuZXJzID0gW107XG52YXIgX2lzTGlzdGVuaW5nID0gZmFsc2U7XG52YXIgX2FjdGlvblR5cGU7XG5cbmZ1bmN0aW9uIG5vdGlmeUNoYW5nZSh0eXBlKSB7XG4gIGlmICh0eXBlID09PSBMb2NhdGlvbkFjdGlvbnMuUFVTSCkgSGlzdG9yeS5sZW5ndGggKz0gMTtcblxuICB2YXIgY2hhbmdlID0ge1xuICAgIHBhdGg6IEhhc2hMb2NhdGlvbi5nZXRDdXJyZW50UGF0aCgpLFxuICAgIHR5cGU6IHR5cGVcbiAgfTtcblxuICBfbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXIuY2FsbChIYXNoTG9jYXRpb24sIGNoYW5nZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbnN1cmVTbGFzaCgpIHtcbiAgdmFyIHBhdGggPSBIYXNoTG9jYXRpb24uZ2V0Q3VycmVudFBhdGgoKTtcblxuICBpZiAocGF0aC5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9SGFzaExvY2F0aW9uLnJlcGxhY2UoJy8nICsgcGF0aCk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBvbkhhc2hDaGFuZ2UoKSB7XG4gIGlmIChlbnN1cmVTbGFzaCgpKSB7XG4gICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhbiBfYWN0aW9uVHlwZSB0aGVuIGFsbCB3ZSBrbm93IGlzIHRoZSBoYXNoXG4gICAgLy8gY2hhbmdlZC4gSXQgd2FzIHByb2JhYmx5IGNhdXNlZCBieSB0aGUgdXNlciBjbGlja2luZyB0aGUgQmFja1xuICAgIC8vIGJ1dHRvbiwgYnV0IG1heSBoYXZlIGFsc28gYmVlbiB0aGUgRm9yd2FyZCBidXR0b24gb3IgbWFudWFsXG4gICAgLy8gbWFuaXB1bGF0aW9uLiBTbyBqdXN0IGd1ZXNzICdwb3AnLlxuICAgIHZhciBjdXJBY3Rpb25UeXBlID0gX2FjdGlvblR5cGU7XG4gICAgX2FjdGlvblR5cGUgPSBudWxsO1xuICAgIG5vdGlmeUNoYW5nZShjdXJBY3Rpb25UeXBlIHx8IExvY2F0aW9uQWN0aW9ucy5QT1ApO1xuICB9XG59XG5cbi8qKlxuICogQSBMb2NhdGlvbiB0aGF0IHVzZXMgYHdpbmRvdy5sb2NhdGlvbi5oYXNoYC5cbiAqL1xudmFyIEhhc2hMb2NhdGlvbiA9IHtcblxuICBhZGRDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBfbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgLy8gRG8gdGhpcyBCRUZPUkUgbGlzdGVuaW5nIGZvciBoYXNoY2hhbmdlLlxuICAgIGVuc3VyZVNsYXNoKCk7XG5cbiAgICBpZiAoIV9pc0xpc3RlbmluZykge1xuICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29uaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIF9pc0xpc3RlbmluZyA9IHRydWU7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIF9saXN0ZW5lcnMgPSBfbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgcmV0dXJuIGwgIT09IGxpc3RlbmVyO1xuICAgIH0pO1xuXG4gICAgaWYgKF9saXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudCgnb25oYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgX2lzTGlzdGVuaW5nID0gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2gocGF0aCkge1xuICAgIF9hY3Rpb25UeXBlID0gTG9jYXRpb25BY3Rpb25zLlBVU0g7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xuICB9LFxuXG4gIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCkge1xuICAgIF9hY3Rpb25UeXBlID0gTG9jYXRpb25BY3Rpb25zLlJFUExBQ0U7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhdGgpO1xuICB9LFxuXG4gIHBvcDogZnVuY3Rpb24gcG9wKCkge1xuICAgIF9hY3Rpb25UeXBlID0gTG9jYXRpb25BY3Rpb25zLlBPUDtcbiAgICBIaXN0b3J5LmJhY2soKTtcbiAgfSxcblxuICBnZXRDdXJyZW50UGF0aDogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGgoKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSShcbiAgICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gICAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzFdIHx8ICcnKTtcbiAgfSxcblxuICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICc8SGFzaExvY2F0aW9uPic7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoTG9jYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTG9jYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Mb2NhdGlvbkFjdGlvbnMnKTtcbnZhciBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vSGlzdG9yeScpO1xuXG52YXIgX2xpc3RlbmVycyA9IFtdO1xudmFyIF9pc0xpc3RlbmluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBub3RpZnlDaGFuZ2UodHlwZSkge1xuICB2YXIgY2hhbmdlID0ge1xuICAgIHBhdGg6IEhpc3RvcnlMb2NhdGlvbi5nZXRDdXJyZW50UGF0aCgpLFxuICAgIHR5cGU6IHR5cGVcbiAgfTtcblxuICBfbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXIuY2FsbChIaXN0b3J5TG9jYXRpb24sIGNoYW5nZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvblBvcFN0YXRlKGV2ZW50KSB7XG4gIGlmIChldmVudC5zdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIElnbm9yZSBleHRyYW5lb3VzIHBvcHN0YXRlIGV2ZW50cyBpbiBXZWJLaXQuXG5cbiAgbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5QT1ApO1xufVxuXG4vKipcbiAqIEEgTG9jYXRpb24gdGhhdCB1c2VzIEhUTUw1IGhpc3RvcnkuXG4gKi9cbnZhciBIaXN0b3J5TG9jYXRpb24gPSB7XG5cbiAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIGFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIGlmICghX2lzTGlzdGVuaW5nKSB7XG4gICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgb25Qb3BTdGF0ZSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbnBvcHN0YXRlJywgb25Qb3BTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIF9pc0xpc3RlbmluZyA9IHRydWU7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIF9saXN0ZW5lcnMgPSBfbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgcmV0dXJuIGwgIT09IGxpc3RlbmVyO1xuICAgIH0pO1xuXG4gICAgaWYgKF9saXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgb25Qb3BTdGF0ZSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50KCdvbnBvcHN0YXRlJywgb25Qb3BTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIF9pc0xpc3RlbmluZyA9IGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKHBhdGgpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoOiBwYXRoIH0sICcnLCBwYXRoKTtcbiAgICBIaXN0b3J5Lmxlbmd0aCArPSAxO1xuICAgIG5vdGlmeUNoYW5nZShMb2NhdGlvbkFjdGlvbnMuUFVTSCk7XG4gIH0sXG5cbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShwYXRoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHsgcGF0aDogcGF0aCB9LCAnJywgcGF0aCk7XG4gICAgbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5SRVBMQUNFKTtcbiAgfSxcblxuICBwb3A6IEhpc3RvcnkuYmFjayxcblxuICBnZXRDdXJyZW50UGF0aDogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGgoKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgfSxcblxuICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICc8SGlzdG9yeUxvY2F0aW9uPic7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5TG9jYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSGlzdG9yeUxvY2F0aW9uID0gcmVxdWlyZSgnLi9IaXN0b3J5TG9jYXRpb24nKTtcbnZhciBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vSGlzdG9yeScpO1xuXG4vKipcbiAqIEEgTG9jYXRpb24gdGhhdCB1c2VzIGZ1bGwgcGFnZSByZWZyZXNoZXMuIFRoaXMgaXMgdXNlZCBhc1xuICogdGhlIGZhbGxiYWNrIGZvciBIaXN0b3J5TG9jYXRpb24gaW4gYnJvd3NlcnMgdGhhdCBkbyBub3RcbiAqIHN1cHBvcnQgdGhlIEhUTUw1IGhpc3RvcnkgQVBJLlxuICovXG52YXIgUmVmcmVzaExvY2F0aW9uID0ge1xuXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2gocGF0aCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IHBhdGg7XG4gIH0sXG5cbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShwYXRoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocGF0aCk7XG4gIH0sXG5cbiAgcG9wOiBIaXN0b3J5LmJhY2ssXG5cbiAgZ2V0Q3VycmVudFBhdGg6IEhpc3RvcnlMb2NhdGlvbi5nZXRDdXJyZW50UGF0aCxcblxuICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICc8UmVmcmVzaExvY2F0aW9uPic7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWZyZXNoTG9jYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xuXG5mdW5jdGlvbiB0aHJvd0Nhbm5vdE1vZGlmeSgpIHtcbiAgaW52YXJpYW50KGZhbHNlLCAnWW91IGNhbm5vdCBtb2RpZnkgYSBzdGF0aWMgbG9jYXRpb24nKTtcbn1cblxuLyoqXG4gKiBBIGxvY2F0aW9uIHRoYXQgb25seSBldmVyIGNvbnRhaW5zIGEgc2luZ2xlIHBhdGguIFVzZWZ1bCBpblxuICogc3RhdGVsZXNzIGVudmlyb25tZW50cyBsaWtlIHNlcnZlcnMgd2hlcmUgdGhlcmUgaXMgbm8gcGF0aCBoaXN0b3J5LFxuICogb25seSB0aGUgcGF0aCB0aGF0IHdhcyB1c2VkIGluIHRoZSByZXF1ZXN0LlxuICovXG5cbnZhciBTdGF0aWNMb2NhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0YXRpY0xvY2F0aW9uKHBhdGgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdGljTG9jYXRpb24pO1xuXG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdGF0aWNMb2NhdGlvbiwgW3tcbiAgICBrZXk6ICdnZXRDdXJyZW50UGF0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuICc8U3RhdGljTG9jYXRpb24gcGF0aD1cIicgKyB0aGlzLnBhdGggKyAnXCI+JztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RhdGljTG9jYXRpb247XG59KSgpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cblN0YXRpY0xvY2F0aW9uLnByb3RvdHlwZS5wdXNoID0gdGhyb3dDYW5ub3RNb2RpZnk7XG5TdGF0aWNMb2NhdGlvbi5wcm90b3R5cGUucmVwbGFjZSA9IHRocm93Q2Fubm90TW9kaWZ5O1xuU3RhdGljTG9jYXRpb24ucHJvdG90eXBlLnBvcCA9IHRocm93Q2Fubm90TW9kaWZ5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRpY0xvY2F0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcbnZhciBMb2NhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0xvY2F0aW9uQWN0aW9ucycpO1xudmFyIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9IaXN0b3J5Jyk7XG5cbi8qKlxuICogQSBsb2NhdGlvbiB0aGF0IGlzIGNvbnZlbmllbnQgZm9yIHRlc3RpbmcgYW5kIGRvZXMgbm90IHJlcXVpcmUgYSBET00uXG4gKi9cblxudmFyIFRlc3RMb2NhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRlc3RMb2NhdGlvbihoaXN0b3J5KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RMb2NhdGlvbik7XG5cbiAgICB0aGlzLmhpc3RvcnkgPSBoaXN0b3J5IHx8IFtdO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5fdXBkYXRlSGlzdG9yeUxlbmd0aCgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRlc3RMb2NhdGlvbiwgW3tcbiAgICBrZXk6ICduZWVkc0RPTScsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3VwZGF0ZUhpc3RvcnlMZW5ndGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlSGlzdG9yeUxlbmd0aCgpIHtcbiAgICAgIEhpc3RvcnkubGVuZ3RoID0gdGhpcy5oaXN0b3J5Lmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfbm90aWZ5Q2hhbmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX25vdGlmeUNoYW5nZSh0eXBlKSB7XG4gICAgICB2YXIgY2hhbmdlID0ge1xuICAgICAgICBwYXRoOiB0aGlzLmdldEN1cnJlbnRQYXRoKCksXG4gICAgICAgIHR5cGU6IHR5cGVcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47ICsraSkgdGhpcy5saXN0ZW5lcnNbaV0uY2FsbCh0aGlzLCBjaGFuZ2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZENoYW5nZUxpc3RlbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUNoYW5nZUxpc3RlbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgIHJldHVybiBsICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3B1c2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoKHBhdGgpIHtcbiAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKHBhdGgpO1xuICAgICAgdGhpcy5fdXBkYXRlSGlzdG9yeUxlbmd0aCgpO1xuICAgICAgdGhpcy5fbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5QVVNIKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXBsYWNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbGFjZShwYXRoKSB7XG4gICAgICBpbnZhcmlhbnQodGhpcy5oaXN0b3J5Lmxlbmd0aCwgJ1lvdSBjYW5ub3QgcmVwbGFjZSB0aGUgY3VycmVudCBwYXRoIHdpdGggbm8gaGlzdG9yeScpO1xuXG4gICAgICB0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdID0gcGF0aDtcblxuICAgICAgdGhpcy5fbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5SRVBMQUNFKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwb3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3AoKSB7XG4gICAgICB0aGlzLmhpc3RvcnkucG9wKCk7XG4gICAgICB0aGlzLl91cGRhdGVIaXN0b3J5TGVuZ3RoKCk7XG4gICAgICB0aGlzLl9ub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlBPUCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q3VycmVudFBhdGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gJzxUZXN0TG9jYXRpb24+JztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVGVzdExvY2F0aW9uO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBUZXN0TG9jYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlUm91dGVyID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXInKTtcblxuLyoqXG4gKiBBIGhpZ2gtbGV2ZWwgY29udmVuaWVuY2UgbWV0aG9kIHRoYXQgY3JlYXRlcywgY29uZmlndXJlcywgYW5kXG4gKiBydW5zIGEgcm91dGVyIGluIG9uZSBzaG90LiBUaGUgbWV0aG9kIHNpZ25hdHVyZSBpczpcbiAqXG4gKiAgIFJvdXRlci5ydW4ocm91dGVzWywgbG9jYXRpb24gXSwgY2FsbGJhY2spO1xuICpcbiAqIFVzaW5nIGB3aW5kb3cubG9jYXRpb24uaGFzaGAgdG8gbWFuYWdlIHRoZSBVUkwsIHlvdSBjb3VsZCBkbzpcbiAqXG4gKiAgIFJvdXRlci5ydW4ocm91dGVzLCBmdW5jdGlvbiAoSGFuZGxlcikge1xuICogICAgIFJlYWN0LnJlbmRlcig8SGFuZGxlci8+LCBkb2N1bWVudC5ib2R5KTtcbiAqICAgfSk7XG4gKiBcbiAqIFVzaW5nIEhUTUw1IGhpc3RvcnkgYW5kIGEgY3VzdG9tIFwiY3Vyc29yXCIgcHJvcDpcbiAqIFxuICogICBSb3V0ZXIucnVuKHJvdXRlcywgUm91dGVyLkhpc3RvcnlMb2NhdGlvbiwgZnVuY3Rpb24gKEhhbmRsZXIpIHtcbiAqICAgICBSZWFjdC5yZW5kZXIoPEhhbmRsZXIgY3Vyc29yPXtjdXJzb3J9Lz4sIGRvY3VtZW50LmJvZHkpO1xuICogICB9KTtcbiAqXG4gKiBSZXR1cm5zIHRoZSBuZXdseSBjcmVhdGVkIHJvdXRlci5cbiAqXG4gKiBOb3RlOiBJZiB5b3UgbmVlZCB0byBzcGVjaWZ5IGZ1cnRoZXIgb3B0aW9ucyBmb3IgeW91ciByb3V0ZXIgc3VjaFxuICogYXMgZXJyb3IvYWJvcnQgaGFuZGxpbmcgb3IgY3VzdG9tIHNjcm9sbCBiZWhhdmlvciwgdXNlIFJvdXRlci5jcmVhdGVcbiAqIGluc3RlYWQuXG4gKlxuICogICB2YXIgcm91dGVyID0gUm91dGVyLmNyZWF0ZShvcHRpb25zKTtcbiAqICAgcm91dGVyLnJ1bihmdW5jdGlvbiAoSGFuZGxlcikge1xuICogICAgIC8vIC4uLlxuICogICB9KTtcbiAqL1xuZnVuY3Rpb24gcnVuUm91dGVyKHJvdXRlcywgbG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGxvY2F0aW9uO1xuICAgIGxvY2F0aW9uID0gbnVsbDtcbiAgfVxuXG4gIHZhciByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICAgIHJvdXRlczogcm91dGVzLFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICB9KTtcblxuICByb3V0ZXIucnVuKGNhbGxiYWNrKTtcblxuICByZXR1cm4gcm91dGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1blJvdXRlcjsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgLyohIHRha2VuIGZyb20gbW9kZXJuaXpyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2hpc3RvcnkuanNcbiAgICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAgICovXG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3VwcG9ydHNIaXN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gVG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciBrZXlzO1xuXHR2YXIgdG8gPSBUb09iamVjdCh0YXJnZXQpO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IGFyZ3VtZW50c1tzXTtcblx0XHRrZXlzID0gT2JqZWN0LmtleXMoT2JqZWN0KGZyb20pKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dG9ba2V5c1tpXV0gPSBmcm9tW2tleXNbaV1dO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliLycpO1xuIiwiLy8gTG9hZCBtb2R1bGVzXG5cbnZhciBTdHJpbmdpZnkgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpO1xudmFyIFBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpO1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7fTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzdHJpbmdpZnk6IFN0cmluZ2lmeSxcbiAgICBwYXJzZTogUGFyc2Vcbn07XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxudmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7XG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZGVwdGg6IDUsXG4gICAgYXJyYXlMaW1pdDogMjAsXG4gICAgcGFyYW1ldGVyTGltaXQ6IDEwMDBcbn07XG5cblxuaW50ZXJuYWxzLnBhcnNlVmFsdWVzID0gZnVuY3Rpb24gKHN0ciwgb3B0aW9ucykge1xuXG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdChvcHRpb25zLmRlbGltaXRlciwgb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9PT0gSW5maW5pdHkgPyB1bmRlZmluZWQgOiBvcHRpb25zLnBhcmFtZXRlckxpbWl0KTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHBhcnRzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgdmFyIHBvcyA9IHBhcnQuaW5kZXhPZignXT0nKSA9PT0gLTEgPyBwYXJ0LmluZGV4T2YoJz0nKSA6IHBhcnQuaW5kZXhPZignXT0nKSArIDE7XG5cbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgICAgICAgIG9ialtVdGlscy5kZWNvZGUocGFydCldID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gVXRpbHMuZGVjb2RlKHBhcnQuc2xpY2UoMCwgcG9zKSk7XG4gICAgICAgICAgICB2YXIgdmFsID0gVXRpbHMuZGVjb2RlKHBhcnQuc2xpY2UocG9zICsgMSkpO1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gW10uY29uY2F0KG9ialtrZXldKS5jb25jYXQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmludGVybmFscy5wYXJzZU9iamVjdCA9IGZ1bmN0aW9uIChjaGFpbiwgdmFsLCBvcHRpb25zKSB7XG5cbiAgICBpZiAoIWNoYWluLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHZhciByb290ID0gY2hhaW4uc2hpZnQoKTtcblxuICAgIHZhciBvYmogPSB7fTtcbiAgICBpZiAocm9vdCA9PT0gJ1tdJykge1xuICAgICAgICBvYmogPSBbXTtcbiAgICAgICAgb2JqID0gb2JqLmNvbmNhdChpbnRlcm5hbHMucGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucykpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGNsZWFuUm9vdCA9IHJvb3RbMF0gPT09ICdbJyAmJiByb290W3Jvb3QubGVuZ3RoIC0gMV0gPT09ICddJyA/IHJvb3Quc2xpY2UoMSwgcm9vdC5sZW5ndGggLSAxKSA6IHJvb3Q7XG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGNsZWFuUm9vdCwgMTApO1xuICAgICAgICB2YXIgaW5kZXhTdHJpbmcgPSAnJyArIGluZGV4O1xuICAgICAgICBpZiAoIWlzTmFOKGluZGV4KSAmJlxuICAgICAgICAgICAgcm9vdCAhPT0gY2xlYW5Sb290ICYmXG4gICAgICAgICAgICBpbmRleFN0cmluZyA9PT0gY2xlYW5Sb290ICYmXG4gICAgICAgICAgICBpbmRleCA+PSAwICYmXG4gICAgICAgICAgICBpbmRleCA8PSBvcHRpb25zLmFycmF5TGltaXQpIHtcblxuICAgICAgICAgICAgb2JqID0gW107XG4gICAgICAgICAgICBvYmpbaW5kZXhdID0gaW50ZXJuYWxzLnBhcnNlT2JqZWN0KGNoYWluLCB2YWwsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2JqW2NsZWFuUm9vdF0gPSBpbnRlcm5hbHMucGFyc2VPYmplY3QoY2hhaW4sIHZhbCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXG5pbnRlcm5hbHMucGFyc2VLZXlzID0gZnVuY3Rpb24gKGtleSwgdmFsLCBvcHRpb25zKSB7XG5cbiAgICBpZiAoIWtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGhlIHJlZ2V4IGNodW5rc1xuXG4gICAgdmFyIHBhcmVudCA9IC9eKFteXFxbXFxdXSopLztcbiAgICB2YXIgY2hpbGQgPSAvKFxcW1teXFxbXFxdXSpcXF0pL2c7XG5cbiAgICAvLyBHZXQgdGhlIHBhcmVudFxuXG4gICAgdmFyIHNlZ21lbnQgPSBwYXJlbnQuZXhlYyhrZXkpO1xuXG4gICAgLy8gRG9uJ3QgYWxsb3cgdGhlbSB0byBvdmVyd3JpdGUgb2JqZWN0IHByb3RvdHlwZSBwcm9wZXJ0aWVzXG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShzZWdtZW50WzFdKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3Rhc2ggdGhlIHBhcmVudCBpZiBpdCBleGlzdHNcblxuICAgIHZhciBrZXlzID0gW107XG4gICAgaWYgKHNlZ21lbnRbMV0pIHtcbiAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBjaGlsZHJlbiBhcHBlbmRpbmcgdG8gdGhlIGFycmF5IHVudGlsIHdlIGhpdCBkZXB0aFxuXG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlICgoc2VnbWVudCA9IGNoaWxkLmV4ZWMoa2V5KSkgIT09IG51bGwgJiYgaSA8IG9wdGlvbnMuZGVwdGgpIHtcblxuICAgICAgICArK2k7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShzZWdtZW50WzFdLnJlcGxhY2UoL1xcW3xcXF0vZywgJycpKSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUncyBhIHJlbWFpbmRlciwganVzdCBhZGQgd2hhdGV2ZXIgaXMgbGVmdFxuXG4gICAgaWYgKHNlZ21lbnQpIHtcbiAgICAgICAga2V5cy5wdXNoKCdbJyArIGtleS5zbGljZShzZWdtZW50LmluZGV4KSArICddJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVybmFscy5wYXJzZU9iamVjdChrZXlzLCB2YWwsIG9wdGlvbnMpO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIG9wdGlvbnMpIHtcblxuICAgIGlmIChzdHIgPT09ICcnIHx8XG4gICAgICAgIHN0ciA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2Ygc3RyID09PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmRlbGltaXRlciA9IHR5cGVvZiBvcHRpb25zLmRlbGltaXRlciA9PT0gJ3N0cmluZycgfHwgVXRpbHMuaXNSZWdFeHAob3B0aW9ucy5kZWxpbWl0ZXIpID8gb3B0aW9ucy5kZWxpbWl0ZXIgOiBpbnRlcm5hbHMuZGVsaW1pdGVyO1xuICAgIG9wdGlvbnMuZGVwdGggPSB0eXBlb2Ygb3B0aW9ucy5kZXB0aCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmRlcHRoIDogaW50ZXJuYWxzLmRlcHRoO1xuICAgIG9wdGlvbnMuYXJyYXlMaW1pdCA9IHR5cGVvZiBvcHRpb25zLmFycmF5TGltaXQgPT09ICdudW1iZXInID8gb3B0aW9ucy5hcnJheUxpbWl0IDogaW50ZXJuYWxzLmFycmF5TGltaXQ7XG4gICAgb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9IHR5cGVvZiBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMucGFyYW1ldGVyTGltaXQgOiBpbnRlcm5hbHMucGFyYW1ldGVyTGltaXQ7XG5cbiAgICB2YXIgdGVtcE9iaiA9IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gaW50ZXJuYWxzLnBhcnNlVmFsdWVzKHN0ciwgb3B0aW9ucykgOiBzdHI7XG4gICAgdmFyIG9iaiA9IHt9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBrZXlzIGFuZCBzZXR1cCB0aGUgbmV3IG9iamVjdFxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0ZW1wT2JqKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBrZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhciBuZXdPYmogPSBpbnRlcm5hbHMucGFyc2VLZXlzKGtleSwgdGVtcE9ialtrZXldLCBvcHRpb25zKTtcbiAgICAgICAgb2JqID0gVXRpbHMubWVyZ2Uob2JqLCBuZXdPYmopO1xuICAgIH1cblxuICAgIHJldHVybiBVdGlscy5jb21wYWN0KG9iaik7XG59O1xuIiwiLy8gTG9hZCBtb2R1bGVzXG5cbnZhciBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuXG4vLyBEZWNsYXJlIGludGVybmFsc1xuXG52YXIgaW50ZXJuYWxzID0ge1xuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGFycmF5UHJlZml4R2VuZXJhdG9yczoge1xuICAgICAgICBicmFja2V0czogZnVuY3Rpb24gKHByZWZpeCwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1tdJztcbiAgICAgICAgfSxcbiAgICAgICAgaW5kaWNlczogZnVuY3Rpb24gKHByZWZpeCwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1snICsga2V5ICsgJ10nO1xuICAgICAgICB9LFxuICAgICAgICByZXBlYXQ6IGZ1bmN0aW9uIChwcmVmaXgsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuaW50ZXJuYWxzLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIChvYmosIHByZWZpeCwgZ2VuZXJhdGVBcnJheVByZWZpeCkge1xuXG4gICAgaWYgKFV0aWxzLmlzQnVmZmVyKG9iaikpIHtcbiAgICAgICAgb2JqID0gb2JqLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgb2JqID0gb2JqLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgICAgICBvYmogPSAnJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgdHlwZW9mIG9iaiA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgdHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nKSB7XG5cbiAgICAgICAgcmV0dXJuIFtlbmNvZGVVUklDb21wb25lbnQocHJlZml4KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmopXTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICB2YXIgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBvYmpLZXlzW2ldO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGludGVybmFscy5zdHJpbmdpZnkob2JqW2tleV0sIGdlbmVyYXRlQXJyYXlQcmVmaXgocHJlZml4LCBrZXkpLCBnZW5lcmF0ZUFycmF5UHJlZml4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGludGVybmFscy5zdHJpbmdpZnkob2JqW2tleV0sIHByZWZpeCArICdbJyArIGtleSArICddJywgZ2VuZXJhdGVBcnJheVByZWZpeCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBvcHRpb25zKSB7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgZGVsaW1pdGVyID0gdHlwZW9mIG9wdGlvbnMuZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/IGludGVybmFscy5kZWxpbWl0ZXIgOiBvcHRpb25zLmRlbGltaXRlcjtcblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgb2JqID09PSBudWxsKSB7XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHZhciBhcnJheUZvcm1hdDtcbiAgICBpZiAob3B0aW9ucy5hcnJheUZvcm1hdCBpbiBpbnRlcm5hbHMuYXJyYXlQcmVmaXhHZW5lcmF0b3JzKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0aW9ucy5hcnJheUZvcm1hdDtcbiAgICB9XG4gICAgZWxzZSBpZiAoJ2luZGljZXMnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRpb25zLmluZGljZXMgPyAnaW5kaWNlcycgOiAncmVwZWF0JztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gaW50ZXJuYWxzLmFycmF5UHJlZml4R2VuZXJhdG9yc1thcnJheUZvcm1hdF07XG5cbiAgICB2YXIgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBvYmpLZXlzW2ldO1xuICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoaW50ZXJuYWxzLnN0cmluZ2lmeShvYmpba2V5XSwga2V5LCBnZW5lcmF0ZUFycmF5UHJlZml4KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXMuam9pbihkZWxpbWl0ZXIpO1xufTtcbiIsIi8vIExvYWQgbW9kdWxlc1xuXG5cbi8vIERlY2xhcmUgaW50ZXJuYWxzXG5cbnZhciBpbnRlcm5hbHMgPSB7fTtcblxuXG5leHBvcnRzLmFycmF5VG9PYmplY3QgPSBmdW5jdGlvbiAoc291cmNlKSB7XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gc291cmNlLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VbaV0gIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIG9ialtpXSA9IHNvdXJjZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG5cbmV4cG9ydHMubWVyZ2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblxuICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbc291cmNlXSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0YXJnZXQgPSBbdGFyZ2V0XS5jb25jYXQoc291cmNlKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcblxuICAgICAgICB0YXJnZXQgPSBleHBvcnRzLmFycmF5VG9PYmplY3QodGFyZ2V0KTtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgZm9yICh2YXIgayA9IDAsIGtsID0ga2V5cy5sZW5ndGg7IGsgPCBrbDsgKytrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2tdO1xuICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vba2V5XTtcblxuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBleHBvcnRzLm1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxufTtcblxuXG5leHBvcnRzLmNvbXBhY3QgPSBmdW5jdGlvbiAob2JqLCByZWZzKSB7XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgb2JqID09PSBudWxsKSB7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICByZWZzID0gcmVmcyB8fCBbXTtcbiAgICB2YXIgbG9va3VwID0gcmVmcy5pbmRleE9mKG9iaik7XG4gICAgaWYgKGxvb2t1cCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHJlZnNbbG9va3VwXTtcbiAgICB9XG5cbiAgICByZWZzLnB1c2gob2JqKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgdmFyIGNvbXBhY3RlZCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IG9iai5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9ialtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb21wYWN0ZWQucHVzaChvYmpbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBhY3RlZDtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgZm9yIChpID0gMCwgaWwgPSBrZXlzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIG9ialtrZXldID0gZXhwb3J0cy5jb21wYWN0KG9ialtrZXldLCByZWZzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXG5leHBvcnRzLmlzUmVnRXhwID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuXG5cbmV4cG9ydHMuaXNCdWZmZXIgPSBmdW5jdGlvbiAob2JqKSB7XG5cbiAgICBpZiAob2JqID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhIShvYmouY29uc3RydWN0b3IgJiZcbiAgICAgICAgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyICYmXG4gICAgICAgIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopKTtcbn07XG4iLCIoZnVuY3Rpb24od2luZG93LCBSZWFjdCkge1xuICB2YXIgU3Bpbm5lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ1NwaW5uZXInLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYmFycyA9IFtdO1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgIHZhciBiYXJTdHlsZSA9IHt9O1xuICAgICAgICBiYXJTdHlsZS5XZWJraXRBbmltYXRpb25EZWxheSA9IGJhclN0eWxlLmFuaW1hdGlvbkRlbGF5ID1cbiAgICAgICAgICAoaSAtIDEyKSAvIDEwICsgJ3MnO1xuXG4gICAgICAgIGJhclN0eWxlLldlYmtpdFRyYW5zZm9ybSA9IGJhclN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICAgJ3JvdGF0ZSgnICsgKGkgKiAzMCkgKyAnZGVnKSB0cmFuc2xhdGUoMTQ2JSknO1xuXG4gICAgICAgIGJhcnMucHVzaChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtzdHlsZTogYmFyU3R5bGUsIGNsYXNzTmFtZTogXCJyZWFjdC1zcGlubmVyX2JhclwiLCBrZXk6IGl9KVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFJlYWN0Ll9fc3ByZWFkKHt9LCAgcHJvcHMsIHtjbGFzc05hbWU6IChwcm9wcy5jbGFzc05hbWUgfHwgJycpICsgJyByZWFjdC1zcGlubmVyJ30pLCBcbiAgICAgICAgICBiYXJzXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuU3Bpbm5lciA9IFNwaW5uZXI7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBTcGlubmVyO1xuICB9XG59KSh3aW5kb3csIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nID8gcmVxdWlyZSgncmVhY3QnKSA6IFJlYWN0KTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBFeGVjdXRpb25FbnZpcm9ubWVudFxuICovXG5cbi8qanNsaW50IGV2aWw6IHRydWUgKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYW5Vc2VET00gPSAhIShcbiAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudClcbik7XG5cbi8qKlxuICogU2ltcGxlLCBsaWdodHdlaWdodCBtb2R1bGUgYXNzaXN0aW5nIHdpdGggdGhlIGRldGVjdGlvbiBhbmQgY29udGV4dCBvZlxuICogV29ya2VyLiBIZWxwcyBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXMgYW5kIGFsbG93cyBjb2RlIHRvIHJlYXNvbiBhYm91dFxuICogd2hldGhlciBvciBub3QgdGhleSBhcmUgaW4gYSBXb3JrZXIsIGV2ZW4gaWYgdGhleSBuZXZlciBpbmNsdWRlIHRoZSBtYWluXG4gKiBgUmVhY3RXb3JrZXJgIGRlcGVuZGVuY3kuXG4gKi9cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuICBjYW5Vc2VET006IGNhblVzZURPTSxcblxuICBjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuICBjYW5Vc2VFdmVudExpc3RlbmVyczpcbiAgICBjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuICBjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlbixcblxuICBpc0luV29ya2VyOiAhY2FuVXNlRE9NIC8vIEZvciBub3csIHRoaXMgaXMgdHJ1ZSAtIG1pZ2h0IGNoYW5nZSBpbiB0aGUgZnV0dXJlLlxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIE9iamVjdC5hc3NpZ25cbiAqL1xuXG4vLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtb2JqZWN0LmFzc2lnblxuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZXMpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiB0YXJnZXQgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cblxuICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICBmb3IgKHZhciBuZXh0SW5kZXggPSAxOyBuZXh0SW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBuZXh0SW5kZXgrKykge1xuICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW25leHRJbmRleF07XG4gICAgaWYgKG5leHRTb3VyY2UgPT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGZyb20gPSBPYmplY3QobmV4dFNvdXJjZSk7XG5cbiAgICAvLyBXZSBkb24ndCBjdXJyZW50bHkgc3VwcG9ydCBhY2Nlc3NvcnMgbm9yIHByb3hpZXMuIFRoZXJlZm9yZSB0aGlzXG4gICAgLy8gY29weSBjYW5ub3QgdGhyb3cuIElmIHdlIGV2ZXIgc3VwcG9ydGVkIHRoaXMgdGhlbiB3ZSBtdXN0IGhhbmRsZVxuICAgIC8vIGV4Y2VwdGlvbnMgYW5kIHNpZGUtZWZmZWN0cy4gV2UgZG9uJ3Qgc3VwcG9ydCBzeW1ib2xzIHNvIHRoZXkgd29uJ3RcbiAgICAvLyBiZSB0cmFuc2ZlcnJlZC5cblxuICAgIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG4gICAgICAgIHRvW2tleV0gPSBmcm9tW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBlbXB0eUZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbihhcmcpIHsgcmV0dXJuIGFyZzsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGludmFyaWFudFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdJbnZhcmlhbnQgVmlvbGF0aW9uOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSB3YXJuaW5nXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZShcIi4vZW1wdHlGdW5jdGlvblwiKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCApIHtmb3IgKHZhciBhcmdzPVtdLCRfXzA9MiwkX18xPWFyZ3VtZW50cy5sZW5ndGg7JF9fMDwkX18xOyRfXzArKykgYXJncy5wdXNoKGFyZ3VtZW50c1skX18wXSk7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgL15bc1xcV10qJC8udGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgIHtyZXR1cm4gYXJnc1thcmdJbmRleCsrXTt9KTtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iXX0=
