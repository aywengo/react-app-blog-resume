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
var ContactForm = require('./ContactForm.jsx');
var WidgetTwitter = require('./WidgetTwitter.jsx');

var Contact = React.createClass({displayName: "Contact",
    render: function () {
        return React.createElement("div", {className: "innerContainer"}, 
            React.createElement("div", {className: "desc"}, 
                React.createElement("iframe", {frameBorder: "0", scrolling: "no", marginHeight: "0", marginWidth: "0", 
                        src: Model.map})
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
},{"./ContactForm.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/ContactForm.jsx","./Desc.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Desc.jsx","./WidgetTwitter.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/WidgetTwitter.jsx","./model.js":"/Users/romeo/Repository/react-app-blog-resume/app/model.js","react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/ContactForm.jsx":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var Model = require('./model.js');
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
            text: this.refs.umessage.getDOMNode().value.toString()
        };
        var isValid = Revalidator.validate(subject, getValidationSchema());

        if (!isValid.valid){
            this.setState({infomsg : isValid.errors, isValid: false});
            return;
        }

        var jso = JSON.stringify(subject);
        $.ajax({
            url: Model.service + '/send',
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
},{"./ValidationInfoBlock.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/ValidationInfoBlock.jsx","./model.js":"/Users/romeo/Repository/react-app-blog-resume/app/model.js","react":"react","revalidator":"revalidator"}],"/Users/romeo/Repository/react-app-blog-resume/app/Desc.jsx":[function(require,module,exports){
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
    render: function () {
        return React.createElement("div", null, 
            React.createElement("div", {className: "desc"}, 
                React.createElement("h2", null, this.props.header)
            ), 
            React.createElement("div", {className: "education-items"}, 
                React.createElement("ul", {className: "personalDev"}, 
                    this.props.items.map(function(data, i) {
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
},{"react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/Experience.jsx":[function(require,module,exports){
var React = require('react');

var Experience = React.createClass({displayName: "Experience",
    render: function () {
        return (
            React.createElement("div", {className: "education-items"}, 
                React.createElement("ul", {className: "personalDev"}, 
                    this.props.items.map(function(data, i) {
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
},{"react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/Footer.jsx":[function(require,module,exports){
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
                React.createElement("p", null, Model.profile), 
                React.createElement("h5", null, "Experience"), 
                React.createElement("p", null, " ", React.createElement(Experience, {items: Model.experience})), 
                React.createElement("h5", null, "Skills"), 
                React.createElement("p", null, " ", React.createElement(Skills, {skills: Model.skills}), " "), 
                React.createElement("h5", null, "About myself"), 
                React.createElement("pre", null, Model.text)
            )
        )
    }
});

module.exports = Resume;
},{"./Desc.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Desc.jsx","./Experience.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Experience.jsx","./Skills.jsx":"/Users/romeo/Repository/react-app-blog-resume/app/Skills.jsx","./model.js":"/Users/romeo/Repository/react-app-blog-resume/app/model.js","react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/Skills.jsx":[function(require,module,exports){
var React = require('react');

var Skills = React.createClass({displayName: "Skills",
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
            this.props.skills.map(item)
        ))
    }
});

module.exports = Skills;
},{"react":"react"}],"/Users/romeo/Repository/react-app-blog-resume/app/SocialNetworkBar.jsx":[function(require,module,exports){
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
var Model = require('./model.js');
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
        Request.get(Model.service + "/getTweets/" + count,
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
},{"./model.js":"/Users/romeo/Repository/react-app-blog-resume/app/model.js","react":"react","react-spinner":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-spinner/index.js","request":"request"}],"/Users/romeo/Repository/react-app-blog-resume/app/main.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var routes = require('./routes.js');
var Router = require('react-router');
var DbModel = require('./model.js');
var Ga = require('react-ga');

Ga.initialize(DbModel.gaid);
Router.run(routes, Router.HashLocation, function (Handler, state) {
    Ga.pageview(state.pathname);
    React.render(React.createElement(Handler, null), document.body);
});
},{"./model.js":"/Users/romeo/Repository/react-app-blog-resume/app/model.js","./routes.js":"/Users/romeo/Repository/react-app-blog-resume/app/routes.js","react":"react","react-ga":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-ga/src/index.js","react-router":"/Users/romeo/Repository/react-app-blog-resume/node_modules/react-router/lib/index.js"}],"/Users/romeo/Repository/react-app-blog-resume/app/model.js":[function(require,module,exports){
var DbModel = {
    "title": "Roman Melnyk personal blog",
    "author": "Roman Melnyk",
    "gaid": "UA-17275263-4",
    "name": "Roman",
    "surname": "Melnyk",
    "position": "Software developer",
    "logo": "https://media.licdn.com/media/p/3/005/031/265/0a61343.jpg",
    "service": "http://melnyk.co:9098/api/v1",
    "profile" : "I am a hands-on, highly competent software engineer with 12 years’ experience designing, programming and testing software across a variety of platforms.I have worked on numerous projects from concept to completion. A specialist in C# and .NET, I take pride in coding to consistently high standards and regularly refresh my skills to ensure I keep up with ongoing developments.",
    "social": [
        {name: "facebook", link: "http://fb.com/aywengo"},
        {name: "twitter", link: "https://twitter.com/aywengo"},
        {name: "github", link: "https://github.com/aywengo"},
        {name: "linkedin", link: "https://pl.linkedin.com/in/aywengo"}],
    "education" : [
        {title: "CCNA Exploration, Network Fundamentals; Routing Protocols and Concepts; LAN Switching and Wireless;", time: "Aug 2008 - Apr 2009", authority: "Cisco Network Academia, Ukraine, Vinnytsia"},
        {title: "Expert diploma - Computer systems and networks", time: "Sep 2006 - Apr 2008", authority: "Vinnytsia National Technical University, Ukraine, Vinnytsia"},
        {title: "Master degree - Electrotechnics", time: "Sep 2006 - June 2007", authority: "Vinnytsia National Technical University, Ukraine, Vinnytsia"},
        {title: "Bachelors degree - Electrotechnics", time: "Oct 2001 - June 2006", authority: "Vinnytsia National Technical University, Ukraine, Vinnytsia"}],
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
    "experience" : [
        {position: "Senior Software Developer", time: "since March 2014", employer: "GFT Polska",
            link: "http://gft.com", description: "GFT specialises in designing and implementing IT solutions for the financial services industry. Combining technological expertise and seamless project management with a deep understanding of the industry, GFT is the perfect strategic IT partner for many well-known companies in all corners of the globe."},
        {position: "Senior Software Developer", time: "October 2011 - March 2014", employer: "Win interactive LLC (division of BWIN.Party)",
            link: "http://win.com", description: "Design, development and support backend infrastructure for gambling software."},
        {position: "Senior Software Developer", time: "June 2011 - October 2011", employer: "SoftServe inc",
            link: "http://softserve.com", description: "Development and support systems for Contract Management and Trade Spending Solutions for Foodservice."},
        {position: "Senior engineer- TL/Architect", time: "September 2007 - Jule 2011", employer: "State Inspectorate for the Energy Control in the South-West region of Ukraine",
            link: "", description: "Development of technical solutions to meet the energy company's needs"}
    ],
    "skills" : [
        {name : "C#", value: "10", description: ""},
        {name : "JavaScript", value: "6", description: ""},
        {name : ".NET Framework", value: "9", description: ""},
        {name : "Scala", value: "7", description: ""},
        {name : "HTML5 & CSS3", value: "5", description: ""},
        {name : "DesignPatterns", value: "8", description: ""},
        {name : "C++", value: "6", description: ""},
        {name : "OOP", value: "8", description: ""},
        {name : "React.js", value: "7", description: ""},
        {name : "Functional programming", value: "7", description: ""}
    ],
    "mail": "roman@melnyk.co",
    "tel": "",
    "address": 'Miel\u017cy\u0144skiego 14, 61-725 Pozna\u0144',
    "map" : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155797.70828953368!2d16.901665799999993!3d52.40052855000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470444d2ece10ab7%3A0xa4ea31980334bfd1!2zUG96bmHFhCwgUG9sYW5k!5e0!3m2!1sen!2sus!4v1441220344341',
    "text": "As far as I remember myself I was fond of math, programming and foreign languages. My first program I wrote on assembler when was eight years old and my first program as a freelancer in 19.\r\n" +
    "I\'ve got honor Master degree in electrotechnical engineering and expert Diploma of Computer Systems and Networks.  During last 12 years of my life, I\'ve been professionally coding on Pascal, Delphi, PHP, C++, C#. Now I am trying my skills with Scala and JavaScript. Hope I\'ll switch shortly to this new fast growing stream."
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvQWRkcmVzc0Jsb2NrLmpzeCIsImFwcC9BcHAuanMiLCJhcHAvQ29udGFjdC5qc3giLCJhcHAvQ29udGFjdEZvcm0uanN4IiwiYXBwL0Rlc2MuanN4IiwiYXBwL0VkdWNhdGlvbi5qc3giLCJhcHAvRWR1Y2F0aW9uSXRlbXMuanN4IiwiYXBwL0V4cGVyaWVuY2UuanN4IiwiYXBwL0Zvb3Rlci5qc3giLCJhcHAvSGVhZC5qc3giLCJhcHAvSGVhZGVyLmpzeCIsImFwcC9JbmZvQmxvY2suanN4IiwiYXBwL05hdkJhci5qc3giLCJhcHAvTm90Rm91bmQuanN4IiwiYXBwL1Jlc3VtZS5qc3giLCJhcHAvU2tpbGxzLmpzeCIsImFwcC9Tb2NpYWxOZXR3b3JrQmFyLmpzeCIsImFwcC9TdWJuYXZDb250YWluZXIuanN4IiwiYXBwL1ZhbGlkYXRpb25JbmZvQmxvY2suanN4IiwiYXBwL1dpZGdldFR3aXR0ZXIuanN4IiwiYXBwL21haW4uanMiLCJhcHAvbW9kZWwuanMiLCJhcHAvcm91dGVzLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1nYS9zcmMvY29tcG9uZW50cy9PdXRib3VuZExpbmsuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtZ2Evc3JjL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvQ2FuY2VsbGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL01hdGNoLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvTmF2aWdhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1BhdGhVdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1Byb3BUeXBlcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL1JlZGlyZWN0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvUm91dGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9TY3JvbGxIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvU3RhdGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9UcmFuc2l0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvYWN0aW9ucy9Mb2NhdGlvbkFjdGlvbnMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9iZWhhdmlvcnMvSW1pdGF0ZUJyb3dzZXJCZWhhdmlvci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2JlaGF2aW9ycy9TY3JvbGxUb1RvcEJlaGF2aW9yLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9Db250ZXh0V3JhcHBlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvRGVmYXVsdFJvdXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9MaW5rLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9Ob3RGb3VuZFJvdXRlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvY29tcG9uZW50cy9SZWRpcmVjdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NvbXBvbmVudHMvUm91dGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9jb21wb25lbnRzL1JvdXRlSGFuZGxlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NyZWF0ZVJvdXRlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2NyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvZ2V0V2luZG93U2Nyb2xsUG9zaXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2lzUmVhY3RDaGlsZHJlbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2xvY2F0aW9ucy9IYXNoTG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9sb2NhdGlvbnMvSGlzdG9yeUxvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9saWIvbG9jYXRpb25zL1JlZnJlc2hMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2xvY2F0aW9ucy9TdGF0aWNMb2NhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbGliL2xvY2F0aW9ucy9UZXN0TG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9ydW5Sb3V0ZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2xpYi9zdXBwb3J0c0hpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9xcy9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9xcy9saWIvcGFyc2UuanMiLCJub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL25vZGVfbW9kdWxlcy9xcy9saWIvc3RyaW5naWZ5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcXMvbGliL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2xpYi9PYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2xpYi9pbnZhcmlhbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL3dhcm5pbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2pnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEFkZHJlc3NCbG9jayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJBZGRyZXNzQmxvY2tcIixcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWFpbCA6IHRoaXMucHJvcHMubWFpbCxcbiAgICAgICAgICAgIGFkZHJlc3MgOiB0aGlzLnByb3BzLmFkZHJlc3MsXG4gICAgICAgICAgICB0ZWxubyA6IHRoaXMucHJvcHMudGVsbnVtYmVyXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWFpbHRvID0gXCJtYWlsdG86XCIgKyB0aGlzLnN0YXRlLm1haWw7XG4gICAgICAgIHZhciB0ZWwgPSBcIiNcIiArIHRoaXMuc3RhdGUudGVsbm87XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYWRkcmVzc1wiLCBudWxsLCBcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWRkcmVzcywgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBtYWlsdG99LCB0aGlzLnN0YXRlLm1haWwpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IHRlbH0sIHRoaXMuc3RhdGUudGVsbm8pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZGRyZXNzQmxvY2s7IiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIE1vZGVsID0gcmVxdWlyZSgnLi9tb2RlbC5qcycpO1xudmFyIFNvY2lhbE5ldHdvcmtzID0gcmVxdWlyZSgnLi9Tb2NpYWxOZXR3b3JrQmFyLmpzeCcpO1xudmFyIFdpZGdldFR3aXR0ZXIgPSByZXF1aXJlKCcuL1dpZGdldFR3aXR0ZXIuanN4Jyk7XG52YXIgQWRkcmVzc0Jsb2NrID0gcmVxdWlyZSgnLi9BZGRyZXNzQmxvY2suanN4Jyk7XG52YXIgSW5mb0Jsb2NrID0gcmVxdWlyZSgnLi9JbmZvQmxvY2suanN4Jyk7XG52YXIgU3VibmF2Q29udGFpbmVyID0gcmVxdWlyZSgnLi9TdWJuYXZDb250YWluZXIuanN4Jyk7XG52YXIgSGVhZCA9IHJlcXVpcmUoJy4vSGVhZC5qc3gnKTtcbnZhciBEZXNjID0gcmVxdWlyZSgnLi9EZXNjLmpzeCcpO1xudmFyIEZvb3RlciA9IHJlcXVpcmUoJy4vRm9vdGVyLmpzeCcpO1xudmFyIE5hdkJhciA9IHJlcXVpcmUoJy4vTmF2QmFyLmpzeCcpO1xudmFyIFNpdGVIZWFkZXIgPSByZXF1aXJlKCcuL0hlYWRlci5qc3gnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbnZhciBSb3V0ZUhhbmRsZXIgPSBSb3V0ZXIuUm91dGVIYW5kbGVyO1xuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkFwcFwiLFxuICAgIG1peGluczogW1JvdXRlci5TdGF0ZV0sXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBNb2RlbC50aXRsZTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHdpdHRlckJhcixpbmZvQmxvY2ssbWFpblBhcnQ7XG4gICAgICAgIGlmKHRoaXMuaXNBY3RpdmUoJy9wcm9maWxlJykgfHwgdGhpcy5pc0FjdGl2ZSgnLycpKVxuICAgICAgICB7XG4gICAgICAgICAgICB0d2l0dGVyQmFyID0gUmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXRUd2l0dGVyLCB7Y291bnQ6IDV9KTtcbiAgICAgICAgICAgIGluZm9CbG9jayA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5mb0Jsb2NrLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1haW5QYXJ0ID0gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZUhhbmRsZXIsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IHRoaXMuZ2V0UGF0aG5hbWUoKS50cmltKCkuc3Vic3RyaW5nKDEpIHx8IFwicHJvZmlsZVwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIndyYXBwZXJcIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdkJhciwgbnVsbCksIFxuXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJjb250ZW50XCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJpbmZvXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIHtsb2dvOiBNb2RlbC5sb2dvLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogTW9kZWwucG9zaXRpb24sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IE1vZGVsLm5hbWUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cm5hbWU6IE1vZGVsLnN1cm5hbWV9KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIHtjbGFzc05hbWU6IFwiY2xlYXJcIn0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvQmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiAodGhpcy5pc0FjdGl2ZSgnL3Byb2ZpbGUnKSB8fCB0aGlzLmlzQWN0aXZlKCcvJykpID8gXCJzaWRlYmFyIGhpZGRlblwiIDogXCJ0b3BBZGRyZXNzIGhpZGRlblwifSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBZGRyZXNzQmxvY2ssIHthZGRyZXNzOiBNb2RlbC5hZGRyZXNzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haWw6IE1vZGVsLm1haWwsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVsbnVtYmVyOiBNb2RlbC50ZWx9KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTb2NpYWxOZXR3b3Jrcywge25ldHdvcmtzOiBNb2RlbC5zb2NpYWwsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlsOiBNb2RlbC5tYWlsfSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR3aXR0ZXJCYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIHtjbGFzc05hbWU6IFwiY2xlYXJcIn0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5QYXJ0XG4gICAgICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvb3Rlciwge2F1dGhvcjogTW9kZWwuYXV0aG9yfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgRGVzYyA9IHJlcXVpcmUoJy4vRGVzYy5qc3gnKTtcbnZhciBNb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWwuanMnKTtcbnZhciBDb250YWN0Rm9ybSA9IHJlcXVpcmUoJy4vQ29udGFjdEZvcm0uanN4Jyk7XG52YXIgV2lkZ2V0VHdpdHRlciA9IHJlcXVpcmUoJy4vV2lkZ2V0VHdpdHRlci5qc3gnKTtcblxudmFyIENvbnRhY3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQ29udGFjdFwiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImlubmVyQ29udGFpbmVyXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJkZXNjXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIsIHtmcmFtZUJvcmRlcjogXCIwXCIsIHNjcm9sbGluZzogXCJub1wiLCBtYXJnaW5IZWlnaHQ6IFwiMFwiLCBtYXJnaW5XaWR0aDogXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBNb2RlbC5tYXB9KVxuICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDRcIiwgbnVsbCwgXCJBc2sgbWUgYW55dGhpbmcuXCIpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFjdEZvcm0sIG51bGwpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzaWRlYmFyIGhpZGRlblwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXRUd2l0dGVyLCBudWxsKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFjdDsiLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTW9kZWwgPSByZXF1aXJlKCcuL21vZGVsLmpzJyk7XG52YXIgUmV2YWxpZGF0b3IgPSByZXF1aXJlKCdyZXZhbGlkYXRvcicpO1xudmFyIFZhbGlkYXRpb25JbmZvQmxvY2sgPSByZXF1aXJlKCcuL1ZhbGlkYXRpb25JbmZvQmxvY2suanN4Jyk7XG5cbnZhciBnZXRWYWxpZGF0aW9uU2NoZW1hID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICd0aGUgdXJsIHRoZSBvYmplY3Qgc2hvdWxkIGJlIHN0b3JlZCBhdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogL15bLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKyhcXC5bLWEtejAtOX4hJCVeJipfPSt9e1xcJz9dKykqQChbYS16MC05X11bLWEtejAtOV9dKihcXC5bLWEtejAtOV9dKykqXFwuKGFlcm98YXJwYXxiaXp8Y29tfGNvb3B8ZWR1fGdvdnxpbmZvfGludHxtaWx8bXVzZXVtfG5hbWV8bmV0fG9yZ3xwcm98dHJhdmVsfG1vYml8W2Etel1bYS16XSl8KFswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM30pKSg6WzAtOV17MSw1fSk/JC9pLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYSBtZWFucyBvZiBwcm90ZWN0aW5nIGRhdGEgKGluc3VmZmljaWVudCBmb3IgcHJvZHVjdGlvbiwgdXNlZCBhcyBleGFtcGxlKScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBDb250YWN0Rm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJDb250YWN0Rm9ybVwiLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge2luZm9tc2c6ICcnLFxuICAgICAgICAgICAgICAgIGlzVmFsaWQ6IG51bGx9XG4gICAgfSxcbiAgICBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgc3ViamVjdCA9IHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucmVmcy51bmFtZS5nZXRET01Ob2RlKCkudmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnJlZnMudWVtYWlsLmdldERPTU5vZGUoKS52YWx1ZS50b1N0cmluZygpLFxuICAgICAgICAgICAgdGV4dDogdGhpcy5yZWZzLnVtZXNzYWdlLmdldERPTU5vZGUoKS52YWx1ZS50b1N0cmluZygpXG4gICAgICAgIH07XG4gICAgICAgIHZhciBpc1ZhbGlkID0gUmV2YWxpZGF0b3IudmFsaWRhdGUoc3ViamVjdCwgZ2V0VmFsaWRhdGlvblNjaGVtYSgpKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWQudmFsaWQpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5mb21zZyA6IGlzVmFsaWQuZXJyb3JzLCBpc1ZhbGlkOiBmYWxzZX0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGpzbyA9IEpTT04uc3RyaW5naWZ5KHN1YmplY3QpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBNb2RlbC5zZXJ2aWNlICsgJy9zZW5kJyxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAndGV4dC9wbGFpbicsXG4gICAgICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IGpzbyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5mb21zZzogYm9keSwgaXNWYWxpZDogdHJ1ZX0pXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5mb21zZzogZXJyb3IucmVzcG9uc2VUeXBlLCBpc1ZhbGlkOiBmYWxzZX0pXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwge2NsYXNzTmFtZTogXCJmYy1jb250YWN0LWZvcm1cIiwgcmVmOiBcImNvbnRhY3RGb3JtXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmFsaWRhdGlvbkluZm9CbG9jaywge1xuICAgICAgICAgICAgICAgIGluZm9tc2c6IHRoaXMuc3RhdGUuaW5mb21zZywgXG4gICAgICAgICAgICAgICAgaXNWYWxpZDogdGhpcy5zdGF0ZS5pc1ZhbGlkfSksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHtodG1sRm9yOiBcInVuYW1lXCJ9LCBcIllvdXIgbmFtZVwiKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3R5cGU6IFwidGV4dFwiLCByZWY6IFwidW5hbWVcIiwgaWQ6IFwidW5hbWVcIiwgcmVxdWlyZWQ6IHRydWV9KSwgXG5cbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwiZXJyb3IgdW5hbWUtZXJyb3JcIn0pLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7aHRtbEZvcjogXCJ1ZW1haWxcIn0sIFwiWW91ciBlbWFpbFwiKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge3R5cGU6IFwiZW1haWxcIiwgcmVmOiBcInVlbWFpbFwiLCBpZDogXCJ1ZW1haWxcIiwgcmVxdWlyZWQ6IHRydWV9KSwgXG5cbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwiZXJyb3IgdWVtYWlsLWVycm9yXCJ9KSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwge2h0bWxGb3I6IFwidW1lc3NhZ2VcIn0sIFwiWW91ciBtZXNzYWdlXCIpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7Y2xhc3NOYW1lOiBcInVtZXNzYWdlXCIsIGlkOiBcInVtZXNzYWdlXCIsIHJlZjogXCJ1bWVzc2FnZVwiLCByZXF1aXJlZDogdHJ1ZX0pLCBcblxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge2NsYXNzTmFtZTogXCJzdWJtaXRcIiwgaWQ6IFwiZmMtY29udGFjdC1idG5cIiwgb25DbGljazogdGhpcy5oYW5kbGVTdWJtaXR9LCBcbiAgICAgICAgICAgICAgICBcIlN1Ym1pdFwiXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250YWN0Rm9ybTsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgRGVzYyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJEZXNjXCIsXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZGVzY1wifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDRcIiwgbnVsbCwgdGhpcy5wcm9wcy5oZWFkZXIpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIHRoaXMucHJvcHMudGV4dClcbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG5leHBvcnRzLm1vZHVsZSA9IERlc2M7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBEZXNjID0gcmVxdWlyZSgnLi9EZXNjLmpzeCcpO1xudmFyIEVkdWNhdGlvbkl0ZW1zID0gcmVxdWlyZSgnLi9FZHVjYXRpb25JdGVtcy5qc3gnKTtcbnZhciBNb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWwuanMnKTtcblxudmFyIEVkdWNhdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJFZHVjYXRpb25cIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJpbm5lckNvbnRhaW5lclwifSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVkdWNhdGlvbkl0ZW1zLCB7aGVhZGVyOiBcIkVkdWNhdGlvblwiLCBpdGVtczogTW9kZWwuZWR1Y2F0aW9ufSksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCLCoFwiKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVkdWNhdGlvbkl0ZW1zLCB7aGVhZGVyOiBcIkNlcnRpZmljYXRpb25cIiwgaXRlbXM6IE1vZGVsLmNlcnRpZmljYXRpb259KVxuICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWR1Y2F0aW9uOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBFZHVjYXRpb25JdGVtcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJFZHVjYXRpb25JdGVtc1wiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJkZXNjXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgdGhpcy5wcm9wcy5oZWFkZXIpXG4gICAgICAgICAgICApLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJlZHVjYXRpb24taXRlbXNcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcInBlcnNvbmFsRGV2XCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pdGVtcy5tYXAoZnVuY3Rpb24oZGF0YSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhlYWQgPSAoZGF0YS5saW5rID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRhdGEudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBkYXRhLmxpbmssIHRhcmdldDogXCJfYmxhbmtcIn0sIFwiIFwiLCBkYXRhLnRpdGxlLCBcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBpfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwidGl0bGVcIn0sIGhlYWQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ0aW1lXCJ9LCBkYXRhLnRpbWUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBkYXRhLmF1dGhvcml0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVkdWNhdGlvbkl0ZW1zOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBFeHBlcmllbmNlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkV4cGVyaWVuY2VcIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJlZHVjYXRpb24taXRlbXNcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7Y2xhc3NOYW1lOiBcInBlcnNvbmFsRGV2XCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pdGVtcy5tYXAoZnVuY3Rpb24oZGF0YSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhlYWQgPSAoZGF0YS5saW5rID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRhdGEuZW1wbG95ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBkYXRhLmxpbmssIHRhcmdldDogXCJfYmxhbmtcIn0sIFwiIFwiLCBkYXRhLmVtcGxveWVyLCBcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7a2V5OiBpfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJ0aXRsZVwifSwgaGVhZCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtjbGFzc05hbWU6IFwidGltZVwifSwgZGF0YS50aW1lKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYlwiLCBudWxsLCBkYXRhLnBvc2l0aW9uKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGRhdGEuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkpXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXhwZXJpZW5jZTsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgRm9vdGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkZvb3RlclwiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImZvb3RlclwiLCBudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiIENvcHlyaWdodCDCqTIwMTUgXCIsIHRoaXMucHJvcHMuYXV0aG9yLCBcIi5cIiksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCIgUG93ZXJlZCBieSBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiaHR0cDovL2h0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvXCJ9LCBcIlJlYWN0LmpzXCIpKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIiBEZXNpZ24gYnkgXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtocmVmOiBcImh0dHA6Ly90aGVtZWZvcmVzdC5uZXQvdXNlci90aGVtZWJha2Vycy9wb3J0Zm9saW9cIn0sIFwidGhlbWViYWtlcnNcIikpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiIFNvdXJjZSBjb2RlIG9uIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vYXl3ZW5nby9yZWFjdC1hcHAtYmxvZy1yZXN1bWVcIn0sIFwiR2l0SHViXCIpKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlcjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgSGVhZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJIZWFkXCIsXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2dvOiB0aGlzLnByb3BzLmxvZ28sXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICBzdXJuYW1lOiB0aGlzLnByb3BzLnN1cm5hbWUsXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wcm9wcy5wb3NpdGlvblxuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJoZWFkXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogdGhpcy5zdGF0ZS5sb2dvLCBhbHQ6IHRoaXMuc3RhdGUubmFtZX0pLCBcblxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIm5hbWVcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwiZmlyc3RcIn0sIHRoaXMuc3RhdGUubmFtZSksIFxuXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge2NsYXNzTmFtZTogXCJsYXN0XCJ9LCB0aGlzLnN0YXRlLnN1cm5hbWUpLCBcblxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtjbGFzc05hbWU6IFwidGl0bGVcIn0sIHRoaXMuc3RhdGUucG9zaXRpb24pXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIZWFkOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTW9kZWwgPSByZXF1aXJlKCcuL21vZGVsLmpzJyk7XG52YXIgU29jaWFsTmV0d29ya3MgPSByZXF1aXJlKCcuL1NvY2lhbE5ldHdvcmtCYXIuanN4Jyk7XG5cbnZhciBTaXRlSGVhZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlNpdGVIZWFkZXJcIixcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBNb2RlbC50aXRsZSxcbiAgICAgICAgICAgIGxvZ286IE1vZGVsLmxvZ28sXG4gICAgICAgICAgICBtYWlsOiBNb2RlbC5tYWlsLFxuICAgICAgICAgICAgc29jaWFsOiBNb2RlbC5zb2NpYWxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaGVhZGVyLXRpdGxlXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogdGhpcy5zdGF0ZS5sb2dvLCBcbiAgICAgICAgICAgICAgICAgd2lkdGg6IFwiODBcIiwgXG4gICAgICAgICAgICAgICAgIGFsdDogXCJ7dGhpcy5zdGF0ZS50aXRsZX0gbG9nb1wiLCBcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInBhbmVsLWNvdmVyX19sb2dvXCJ9KSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge2NsYXNzTmFtZTogXCJoZWFkZXItdGl0bGUtLW1haW50aXRsZVwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IFwiL1wifSwgdGhpcy5zdGF0ZS50aXRsZSkpLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU29jaWFsTmV0d29ya3MsIHtuZXR3b3JrczogdGhpcy5zdGF0ZS5zb2NpYWwsIG1haWw6IHRoaXMuc3RhdGUubWFpbH0pXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2l0ZUhlYWRlcjsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEhlYWQgPSByZXF1aXJlKCcuL0hlYWQuanN4Jyk7XG52YXIgRGVzYyA9IHJlcXVpcmUoJy4vRGVzYy5qc3gnKTtcbnZhciBTdWJuYXZDb250YWluZXIgPSByZXF1aXJlKCcuL1N1Ym5hdkNvbnRhaW5lci5qc3gnKTtcbnZhciBNb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWwuanMnKTtcblxudmFyIEluZm9CbG9jayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJJbmZvQmxvY2tcIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiZGVzY1wifSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBNb2RlbC50ZXh0KVxuICAgICAgICAgICAgICAgICAgICApLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VibmF2Q29udGFpbmVyLCBudWxsKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEluZm9CbG9jazsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpO1xudmFyIExpbmsgPSBSb3V0ZXIuTGluaztcblxudmFyIE5hdkJhciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJOYXZCYXJcIixcbiAgICBtaXhpbnM6IFsgUm91dGVyLlN0YXRlIF0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhY3RpdmF0ZSA9IFwiIGN1cnJlbnQtbWVudS1pdGVtXCI7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5nZXRQYXRobmFtZSgpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcIm5hdlwiLCBudWxsLCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBudWxsLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2NsYXNzTmFtZTogbmFtZSA9PT0gJy9wcm9maWxlJz8ncHJvZmlsZScgKyBhY3RpdmF0ZToncHJvZmlsZSd9LCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJwcm9maWxlXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIlByb2ZpbGVcIikpKSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBuYW1lID09PSAnL3Jlc3VtZSc/J3Jlc3VtZScgKyBhY3RpdmF0ZToncmVzdW1lJ30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcInJlc3VtZVwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJSZXN1bWVcIikpKSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBuYW1lID09PSAnL2VkdWNhdGlvbic/J2VkdWNhdGlvbicgKyBhY3RpdmF0ZTonZWR1Y2F0aW9uJ30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcImVkdWNhdGlvblwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJFZHVjYXRpb25cIikpKSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBuYW1lID09PSAnL2Jsb2cnPydibG9nJyArIGFjdGl2YXRlOidibG9nJ30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcImJsb2dcIn0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiQmxvZ1wiKSkpKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzc05hbWU6IG5hbWUgPT09ICcvY29udGFjdCc/J2NvbnRhY3QnICsgYWN0aXZhdGU6J2NvbnRhY3QnfSwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiY29udGFjdFwifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJDb250YWN0XCIpKSkpXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTmF2QmFyOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgU3VibmF2Q29udGFpbmVyID0gcmVxdWlyZSgnLi9TdWJuYXZDb250YWluZXIuanN4Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG5cbnZhciBOb3RGb3VuZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJOb3RGb3VuZFwiLFxuICAgIG1peGluczogW1JvdXRlci5TdGF0ZV0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJpbm5lckNvbnRhaW5lclwifSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImRlc2NcIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDRcIiwgbnVsbCwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidVwiLCBudWxsLCB0aGlzLmdldFBhdGgoKSksIFwiIHdhc24ndCBmb3VuZFwiKVxuICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJlZHVjYXRpb24taXRlbXNcIn0sIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN1Ym5hdkNvbnRhaW5lciwgbnVsbClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTm90Rm91bmQ7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBEZXNjID0gcmVxdWlyZSgnLi9EZXNjLmpzeCcpO1xudmFyIE1vZGVsID0gcmVxdWlyZSgnLi9tb2RlbC5qcycpO1xudmFyIFNraWxscyA9IHJlcXVpcmUoJy4vU2tpbGxzLmpzeCcpO1xudmFyIEV4cGVyaWVuY2UgPSByZXF1aXJlKCcuL0V4cGVyaWVuY2UuanN4Jyk7XG5cbnZhciBSZXN1bWUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiUmVzdW1lXCIsXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwiaW5uZXJDb250YWluZXJcIn0sIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImRlc2NcIn0sIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIlJlc3VtZVwiKVxuICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwicmVzdW1lLWl0ZW1zXCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDVcIiwgbnVsbCwgXCJQcm9mZXNzaW9uYWwgcHJvZmlsZVwiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgTW9kZWwucHJvZmlsZSksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCBudWxsLCBcIkV4cGVyaWVuY2VcIiksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiIFwiLCBSZWFjdC5jcmVhdGVFbGVtZW50KEV4cGVyaWVuY2UsIHtpdGVtczogTW9kZWwuZXhwZXJpZW5jZX0pKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImg1XCIsIG51bGwsIFwiU2tpbGxzXCIpLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIiBcIiwgUmVhY3QuY3JlYXRlRWxlbWVudChTa2lsbHMsIHtza2lsbHM6IE1vZGVsLnNraWxsc30pLCBcIiBcIiksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNVwiLCBudWxsLCBcIkFib3V0IG15c2VsZlwiKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInByZVwiLCBudWxsLCBNb2RlbC50ZXh0KVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzdW1lOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBTa2lsbHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiU2tpbGxzXCIsXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHJhdGVzKHZhbHVlKXtcbiAgICAgICAgICAgIHZhciBzcGFucyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKXtcbiAgICAgICAgICAgICAgICBzcGFucy5wdXNoKCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7a2V5OiBpLCBjbGFzc05hbWU6IGkgPj0gdmFsdWUgPyBcImVtcHR5XCIgOiBcImZpbGxlZFwifSkgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNwYW5zO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGl0ZW0oYXJncywgaWQpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtrZXk6IGlkfSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJza2lsbFwifSwgYXJncy5uYW1lKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInJhdGluZ1wifSwgXG4gICAgICAgICAgICAgICAgICAgIHJhdGVzKGFyZ3MudmFsdWUpXG4gICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImRlc2NyaXB0aW9uXCJ9LCBhcmdzLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtjbGFzc05hbWU6IFwic2tpbGxzXCJ9LCBcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2tpbGxzLm1hcChpdGVtKVxuICAgICAgICApKVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNraWxsczsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgU29jaWFsTmV0d29ya0JhciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJTb2NpYWxOZXR3b3JrQmFyXCIsXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzb2NpYWw6IHRoaXMucHJvcHMubmV0d29ya3MsXG4gICAgICAgICAgICBtYWlsOiB0aGlzLnByb3BzLm1haWxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIGxpbmtzID0gdGhpcy5zdGF0ZS5zb2NpYWwubWFwKFxuICAgICAgICAgICAgZnVuY3Rpb24odCwgaSkge1xuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9IFwiLi9zb2NpYWxfaWNvbnMvXCIgKyB0Lm5hbWUgKyBcIi5wbmdcIjtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IHQubGluaywga2V5OiBpLCB0YXJnZXQ6IFwiX2JsYW5rXCJ9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IGltYWdlLCBhbHQ6IHQubmFtZX0pKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB2YXIgbWFpbHRvID0gXCJtYWlsdG86XCIgKyB0aGlzLnN0YXRlLm1haWw7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzb2NpYWxcIn0sIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge2hyZWY6IG1haWx0bywgdGFyZ2V0OiBcIl9ibGFua1wifSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7c3JjOiBcIi4vc29jaWFsX2ljb25zL2VtYWlsLnBuZ1wiLCBhbHQ6IHRoaXMuc3RhdGUubWFpbH0pKSwgXG4gICAgICAgICAgICBsaW5rc1xuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNvY2lhbE5ldHdvcmtCYXI7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBMaW5rID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuTGluaztcblxudmFyIFN1Ym5hdkNvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJTdWJuYXZDb250YWluZXJcIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic3VibmF2Q29udGFpbmVyXCJ9LCBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzdWJuYXZMZWZ0XCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic3VibmF2UmVzdW1lXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwicmVzdW1lXCIsIGNsYXNzTmFtZTogXCJpbnZlcnRcIn0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHt0bzogXCJyZXN1bWVcIn0sIFwiUmVzdW1lXCIpXG4gICAgICAgICAgICAgICAgKSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInN1Ym5hdmVkdWNhdGlvblwifSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcImVkdWNhdGlvblwiLCBjbGFzc05hbWU6IFwiaW52ZXJ0XCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiZWR1Y2F0aW9uXCJ9LCBcIkVkdWNhdGlvblwiKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInN1Ym5hdlJpZ2h0XCJ9LCBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzc05hbWU6IFwic3VibmF2QmxvZ1wifSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcImJsb2dcIiwgY2xhc3NOYW1lOiBcImludmVydFwifSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge3RvOiBcImJsb2dcIn0sIFwiQmxvZ1wiKVxuICAgICAgICAgICAgICAgICksIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJzdWJuYXZDb250YWN0XCJ9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiY29udGFjdFwiLCBjbGFzc05hbWU6IFwiaW52ZXJ0XCJ9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7dG86IFwiY29udGFjdFwifSwgXCJDb250YWN0XCIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgfX1cbik7XG5cbm1vZHVsZS5leHBvcnRzID0gU3VibmF2Q29udGFpbmVyOyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBWYWxpZGF0aW9uSW5mb0Jsb2NrID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlZhbGlkYXRpb25JbmZvQmxvY2tcIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uKGkpe1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc1ZhbGlkID09IHRydWUpXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhbGVydC1ib3ggc3VjY2Vzc1wiLCBrZXk6IGl9LCBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmluZm9tc2dcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkpO1xuXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJvcHMuaW5mb21zZyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5wcm9wcy5pbmZvbXNnIGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJhbGVydC1ib3ggd2FybmluZ1wiLCBrZXk6IGl9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaW5mb21zZy5tYXAoZnVuY3Rpb24gKGRhdGEsIGspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7a2V5OiBrfSwgZGF0YS5wcm9wZXJ0eSwgXCI6IFwiLCBkYXRhLm1lc3NhZ2UsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICApKTtcblxuICAgICAgICBlbHNlIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtrZXk6IGl9KVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZhbGlkYXRpb25JbmZvQmxvY2s7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZXF1ZXN0ID0gcmVxdWlyZSgncmVxdWVzdCcpO1xudmFyIE1vZGVsID0gcmVxdWlyZSgnLi9tb2RlbC5qcycpO1xudmFyIFNwaW5uZXIgPSByZXF1aXJlKCdyZWFjdC1zcGlubmVyJyk7XG5cbi8vIFRha2VzIGFuIElTTyB0aW1lIGFuZCByZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGluZyBob3dcbi8vIGxvbmcgYWdvIHRoZSBkYXRlIHJlcHJlc2VudHMuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTEgSm9obiBSZXNpZyAoZWpvaG4ub3JnKVxuZnVuY3Rpb24gcHJldHR5RGF0ZSh0aW1lKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgodGltZSB8fCBcIlwiKS5yZXBsYWNlKC8tL2csIFwiL1wiKS5yZXBsYWNlKC9bVFpdL2csIFwiIFwiKSksXG4gICAgICAgIGRpZmYgPSAoKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKSkgLyAxMDAwKSxcbiAgICAgICAgZGF5X2RpZmYgPSBNYXRoLmZsb29yKGRpZmYgLyA4NjQwMCk7XG5cbiAgICBpZiAoaXNOYU4oZGF5X2RpZmYpIHx8IGRheV9kaWZmIDwgMCB8fCBkYXlfZGlmZiA+PSAzMSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgcmV0dXJuIGRheV9kaWZmID09IDAgJiYgKFxuICAgICAgICBkaWZmIDwgNjAgJiYgXCJqdXN0IG5vd1wiIHx8XG4gICAgICAgIGRpZmYgPCAxMjAgJiYgXCIxIG1pbnV0ZSBhZ29cIiB8fFxuICAgICAgICBkaWZmIDwgMzYwMCAmJiBNYXRoLmZsb29yKGRpZmYgLyA2MCkgKyBcIiBtaW51dGVzIGFnb1wiIHx8XG4gICAgICAgIGRpZmYgPCA3MjAwICYmIFwiMSBob3VyIGFnb1wiIHx8XG4gICAgICAgIGRpZmYgPCA4NjQwMCAmJiBNYXRoLmZsb29yKGRpZmYgLyAzNjAwKSArIFwiIGhvdXJzIGFnb1wiKSB8fFxuICAgICAgICBkYXlfZGlmZiA9PSAxICYmIFwiWWVzdGVyZGF5XCIgfHxcbiAgICAgICAgZGF5X2RpZmYgPCA3ICYmIGRheV9kaWZmICsgXCIgZGF5cyBhZ29cIiB8fFxuICAgICAgICBkYXlfZGlmZiA8IDMxICYmIE1hdGguY2VpbChkYXlfZGlmZiAvIDcpICsgXCIgd2Vla3MgYWdvXCI7XG59XG5cbnZhciB0d2VldHNCb2R5O1xudmFyIFdpZGdldFR3aXR0ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiV2lkZ2V0VHdpdHRlclwiLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge2RhdGE6IFtdfTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHR3ZWV0c0JvZHkgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW5uZXIsIG51bGwpXG4gICAgfSxcbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY291bnQgPSB0aGlzLnByb3BzLmNvdW50ID09IHVuZGVmaW5lZCA/IDMgOiB0aGlzLnByb3BzLmNvdW50O1xuICAgICAgICBSZXF1ZXN0LmdldChNb2RlbC5zZXJ2aWNlICsgXCIvZ2V0VHdlZXRzL1wiICsgY291bnQsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvciAmJiByZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCAmJiAhYm9keS5pc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmlzTnVsbE9yVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0d2VldHNCb2R5ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGF9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcIndpZGdldCB0d2l0dGVyLXVwZGF0ZXNcIn0sIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImg2XCIsIHtjbGFzc05hbWU6IFwid2lkZ2V0LXRpdGxlXCJ9LCBcIkxhdGVzdCB0d2VldHNcIiksIFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFxuICAgICAgICAgICAgICAgICAgICB0d2VldHNCb2R5LCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLm1hcChmdW5jdGlvbiAodCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuaXNOdWxsT3JVbmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcgJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge2tleTogaX0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1XCIsIG51bGwsIHByZXR0eURhdGUodC5jcmVhdGVkX2F0KSksIHQudGV4dClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2lkZ2V0VHdpdHRlcjsiLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgcm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMuanMnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbnZhciBEYk1vZGVsID0gcmVxdWlyZSgnLi9tb2RlbC5qcycpO1xudmFyIEdhID0gcmVxdWlyZSgncmVhY3QtZ2EnKTtcblxuR2EuaW5pdGlhbGl6ZShEYk1vZGVsLmdhaWQpO1xuUm91dGVyLnJ1bihyb3V0ZXMsIFJvdXRlci5IYXNoTG9jYXRpb24sIGZ1bmN0aW9uIChIYW5kbGVyLCBzdGF0ZSkge1xuICAgIEdhLnBhZ2V2aWV3KHN0YXRlLnBhdGhuYW1lKTtcbiAgICBSZWFjdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChIYW5kbGVyLCBudWxsKSwgZG9jdW1lbnQuYm9keSk7XG59KTsiLCJ2YXIgRGJNb2RlbCA9IHtcbiAgICBcInRpdGxlXCI6IFwiUm9tYW4gTWVsbnlrIHBlcnNvbmFsIGJsb2dcIixcbiAgICBcImF1dGhvclwiOiBcIlJvbWFuIE1lbG55a1wiLFxuICAgIFwiZ2FpZFwiOiBcIlVBLTE3Mjc1MjYzLTRcIixcbiAgICBcIm5hbWVcIjogXCJSb21hblwiLFxuICAgIFwic3VybmFtZVwiOiBcIk1lbG55a1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJTb2Z0d2FyZSBkZXZlbG9wZXJcIixcbiAgICBcImxvZ29cIjogXCJodHRwczovL21lZGlhLmxpY2RuLmNvbS9tZWRpYS9wLzMvMDA1LzAzMS8yNjUvMGE2MTM0My5qcGdcIixcbiAgICBcInNlcnZpY2VcIjogXCJodHRwOi8vbWVsbnlrLmNvOjkwOTgvYXBpL3YxXCIsXG4gICAgXCJwcm9maWxlXCIgOiBcIkkgYW0gYSBoYW5kcy1vbiwgaGlnaGx5IGNvbXBldGVudCBzb2Z0d2FyZSBlbmdpbmVlciB3aXRoIDEyIHllYXJz4oCZIGV4cGVyaWVuY2UgZGVzaWduaW5nLCBwcm9ncmFtbWluZyBhbmQgdGVzdGluZyBzb2Z0d2FyZSBhY3Jvc3MgYSB2YXJpZXR5IG9mIHBsYXRmb3Jtcy5JIGhhdmUgd29ya2VkIG9uIG51bWVyb3VzIHByb2plY3RzIGZyb20gY29uY2VwdCB0byBjb21wbGV0aW9uLiBBIHNwZWNpYWxpc3QgaW4gQyMgYW5kIC5ORVQsIEkgdGFrZSBwcmlkZSBpbiBjb2RpbmcgdG8gY29uc2lzdGVudGx5IGhpZ2ggc3RhbmRhcmRzIGFuZCByZWd1bGFybHkgcmVmcmVzaCBteSBza2lsbHMgdG8gZW5zdXJlIEkga2VlcCB1cCB3aXRoIG9uZ29pbmcgZGV2ZWxvcG1lbnRzLlwiLFxuICAgIFwic29jaWFsXCI6IFtcbiAgICAgICAge25hbWU6IFwiZmFjZWJvb2tcIiwgbGluazogXCJodHRwOi8vZmIuY29tL2F5d2VuZ29cIn0sXG4gICAgICAgIHtuYW1lOiBcInR3aXR0ZXJcIiwgbGluazogXCJodHRwczovL3R3aXR0ZXIuY29tL2F5d2VuZ29cIn0sXG4gICAgICAgIHtuYW1lOiBcImdpdGh1YlwiLCBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9heXdlbmdvXCJ9LFxuICAgICAgICB7bmFtZTogXCJsaW5rZWRpblwiLCBsaW5rOiBcImh0dHBzOi8vcGwubGlua2VkaW4uY29tL2luL2F5d2VuZ29cIn1dLFxuICAgIFwiZWR1Y2F0aW9uXCIgOiBbXG4gICAgICAgIHt0aXRsZTogXCJDQ05BIEV4cGxvcmF0aW9uLCBOZXR3b3JrIEZ1bmRhbWVudGFsczsgUm91dGluZyBQcm90b2NvbHMgYW5kIENvbmNlcHRzOyBMQU4gU3dpdGNoaW5nIGFuZCBXaXJlbGVzcztcIiwgdGltZTogXCJBdWcgMjAwOCAtIEFwciAyMDA5XCIsIGF1dGhvcml0eTogXCJDaXNjbyBOZXR3b3JrIEFjYWRlbWlhLCBVa3JhaW5lLCBWaW5ueXRzaWFcIn0sXG4gICAgICAgIHt0aXRsZTogXCJFeHBlcnQgZGlwbG9tYSAtIENvbXB1dGVyIHN5c3RlbXMgYW5kIG5ldHdvcmtzXCIsIHRpbWU6IFwiU2VwIDIwMDYgLSBBcHIgMjAwOFwiLCBhdXRob3JpdHk6IFwiVmlubnl0c2lhIE5hdGlvbmFsIFRlY2huaWNhbCBVbml2ZXJzaXR5LCBVa3JhaW5lLCBWaW5ueXRzaWFcIn0sXG4gICAgICAgIHt0aXRsZTogXCJNYXN0ZXIgZGVncmVlIC0gRWxlY3Ryb3RlY2huaWNzXCIsIHRpbWU6IFwiU2VwIDIwMDYgLSBKdW5lIDIwMDdcIiwgYXV0aG9yaXR5OiBcIlZpbm55dHNpYSBOYXRpb25hbCBUZWNobmljYWwgVW5pdmVyc2l0eSwgVWtyYWluZSwgVmlubnl0c2lhXCJ9LFxuICAgICAgICB7dGl0bGU6IFwiQmFjaGVsb3JzIGRlZ3JlZSAtIEVsZWN0cm90ZWNobmljc1wiLCB0aW1lOiBcIk9jdCAyMDAxIC0gSnVuZSAyMDA2XCIsIGF1dGhvcml0eTogXCJWaW5ueXRzaWEgTmF0aW9uYWwgVGVjaG5pY2FsIFVuaXZlcnNpdHksIFVrcmFpbmUsIFZpbm55dHNpYVwifV0sXG4gICAgXCJjZXJ0aWZpY2F0aW9uXCIgOiBbXG4gICAgICAgIHt0aXRsZTogXCJQcmluY2lwbGVzIG9mIFJlYWN0aXZlIFByb2dyYW1taW5nXCIsIHRpbWU6IFwiTWF5IDIwMTVcIiwgYXV0aG9yaXR5OiBcIkNvdXJzZXJhIFZlcmlmaWVkIENlcnRpZmljYXRlcy4gTGljZW5zZTogVVZGQ0tWUU5WUVwiLFxuICAgICAgICAgICAgbGluazogXCJodHRwczovL3d3dy5jb3Vyc2VyYS5vcmcvYWNjb3VudC9hY2NvbXBsaXNobWVudHMvdmVyaWZ5L1VWRkNLVlFOVlFcIn0sXG4gICAgICAgIHt0aXRsZTogXCJQcm9ncmFtbWluZyBNb2JpbGUgQXBwbGljYXRpb25zIGZvciBBbmRyb2lkIEhhbmRoZWxkIFN5c3RlbXNcIiwgdGltZTogXCJOb3YgMjAxNFwiLCBhdXRob3JpdHk6IFwiQ291cnNlcmEgVmVyaWZpZWQgQ2VydGlmaWNhdGVzLiBMaWNlbnNlOiA4OTlWRjdNWVlSXCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmNvdXJzZXJhLm9yZy9hY2NvdW50L2FjY29tcGxpc2htZW50cy92ZXJpZnkvODk5VkY3TVlZUlwifSxcbiAgICAgICAge3RpdGxlOiBcIk1vbmdvREIgZm9yIE5vZGUuanMgRGV2ZWxvcGVyc1wiLCB0aW1lOiBcIk1heSAyMDE1XCIsIGF1dGhvcml0eTogXCJNb25nbyBVbml2ZXJzaXR5IGluYy5cIixcbiAgICAgICAgICAgIGxpbms6IFwiaHR0cDovL2VkdWNhdGlvbi5tb25nb2RiLmNvbS9kb3dubG9hZHMvY2VydGlmaWNhdGVzLzU4MTY1OWFjMDExYzQxMWFhNmVkN2UxMzVmZWI4N2IzL0NlcnRpZmljYXRlLnBkZlwifSxcbiAgICAgICAge3RpdGxlOiBcIkJyYWluYmVuY2g6IC5ORVQgRnJhbWV3b3JrIDQuNSBNYXN0ZXJcIiwgdGltZTogXCJPY3QgMjAxNCAtIE9jdCAyMDE3XCIsIGF1dGhvcml0eTogXCJCcmFpbmJlbmNoLiBUcmFuc2NyaXB0IElEIzogOTY0NTUxOVwiLFxuICAgICAgICAgICAgbGluazogXCJodHRwOi8vd3d3LmJyYWluYmVuY2guY29tL29yZGVyY2VydC9kb3dubG9hZENlcnRpZmljYXRlLmRvP3Bpbj1QXzF5bjRmRlhORSpcIn0sXG4gICAgICAgIHt0aXRsZTogXCJCcmFpbmJlbmNoOiDQoSMgNS4wIE1hc3RlclwiLCB0aW1lOiBcIlNlcCAyMDE0IC0gU2VwIDIwMTdcIiwgYXV0aG9yaXR5OiBcIkJyYWluYmVuY2guIFRyYW5zY3JpcHQgSUQjOiA5NjQ1NTE5XCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmJyYWluYmVuY2guY29tL29yZGVyY2VydC9kb3dubG9hZENlcnRpZmljYXRlLmRvP3Bpbj1NZ2FCUVBsRXBoQSpcIn0sXG4gICAgICAgIHt0aXRsZTogXCJCcmFpbmJlbmNoOiBQcm9ncmFtbWluZyBDb25jZXB0cyBNYXN0ZXJcIiwgdGltZTogXCJKYW4gMjAxMyAtIEphbiAyMDE2XCIsIGF1dGhvcml0eTogXCJCcmFpbmJlbmNoLiBUcmFuc2NyaXB0IElEIzogOTY0NTUxOVwiLFxuICAgICAgICAgICAgbGluazogXCJodHRwOi8vd3d3LmJyYWluYmVuY2guY29tL29yZGVyY2VydC9kb3dubG9hZENlcnRpZmljYXRlLmRvP3Bpbj1wdFFZbUV0RENxZypcIn0sXG4gICAgICAgIHt0aXRsZTogXCJCcmFpbmJlbmNoOiDQoSMgNC4wIE1hc3RlclwiLCB0aW1lOiBcIk5vdiAyMDEyIC0gTm92IDIwMTVcIiwgYXV0aG9yaXR5OiBcIkJyYWluYmVuY2guIFRyYW5zY3JpcHQgSUQjOiA5NjQ1NTE5XCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHA6Ly93d3cuYnJhaW5iZW5jaC5jb20vb3JkZXJjZXJ0L2Rvd25sb2FkQ2VydGlmaWNhdGUuZG8/cGluPW5nVkgzVlRwM0MwKlwifVxuICAgIF0sXG4gICAgXCJleHBlcmllbmNlXCIgOiBbXG4gICAgICAgIHtwb3NpdGlvbjogXCJTZW5pb3IgU29mdHdhcmUgRGV2ZWxvcGVyXCIsIHRpbWU6IFwic2luY2UgTWFyY2ggMjAxNFwiLCBlbXBsb3llcjogXCJHRlQgUG9sc2thXCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHA6Ly9nZnQuY29tXCIsIGRlc2NyaXB0aW9uOiBcIkdGVCBzcGVjaWFsaXNlcyBpbiBkZXNpZ25pbmcgYW5kIGltcGxlbWVudGluZyBJVCBzb2x1dGlvbnMgZm9yIHRoZSBmaW5hbmNpYWwgc2VydmljZXMgaW5kdXN0cnkuIENvbWJpbmluZyB0ZWNobm9sb2dpY2FsIGV4cGVydGlzZSBhbmQgc2VhbWxlc3MgcHJvamVjdCBtYW5hZ2VtZW50IHdpdGggYSBkZWVwIHVuZGVyc3RhbmRpbmcgb2YgdGhlIGluZHVzdHJ5LCBHRlQgaXMgdGhlIHBlcmZlY3Qgc3RyYXRlZ2ljIElUIHBhcnRuZXIgZm9yIG1hbnkgd2VsbC1rbm93biBjb21wYW5pZXMgaW4gYWxsIGNvcm5lcnMgb2YgdGhlIGdsb2JlLlwifSxcbiAgICAgICAge3Bvc2l0aW9uOiBcIlNlbmlvciBTb2Z0d2FyZSBEZXZlbG9wZXJcIiwgdGltZTogXCJPY3RvYmVyIDIwMTEgLSBNYXJjaCAyMDE0XCIsIGVtcGxveWVyOiBcIldpbiBpbnRlcmFjdGl2ZSBMTEMgKGRpdmlzaW9uIG9mIEJXSU4uUGFydHkpXCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHA6Ly93aW4uY29tXCIsIGRlc2NyaXB0aW9uOiBcIkRlc2lnbiwgZGV2ZWxvcG1lbnQgYW5kIHN1cHBvcnQgYmFja2VuZCBpbmZyYXN0cnVjdHVyZSBmb3IgZ2FtYmxpbmcgc29mdHdhcmUuXCJ9LFxuICAgICAgICB7cG9zaXRpb246IFwiU2VuaW9yIFNvZnR3YXJlIERldmVsb3BlclwiLCB0aW1lOiBcIkp1bmUgMjAxMSAtIE9jdG9iZXIgMjAxMVwiLCBlbXBsb3llcjogXCJTb2Z0U2VydmUgaW5jXCIsXG4gICAgICAgICAgICBsaW5rOiBcImh0dHA6Ly9zb2Z0c2VydmUuY29tXCIsIGRlc2NyaXB0aW9uOiBcIkRldmVsb3BtZW50IGFuZCBzdXBwb3J0IHN5c3RlbXMgZm9yIENvbnRyYWN0IE1hbmFnZW1lbnQgYW5kIFRyYWRlIFNwZW5kaW5nIFNvbHV0aW9ucyBmb3IgRm9vZHNlcnZpY2UuXCJ9LFxuICAgICAgICB7cG9zaXRpb246IFwiU2VuaW9yIGVuZ2luZWVyLSBUTC9BcmNoaXRlY3RcIiwgdGltZTogXCJTZXB0ZW1iZXIgMjAwNyAtIEp1bGUgMjAxMVwiLCBlbXBsb3llcjogXCJTdGF0ZSBJbnNwZWN0b3JhdGUgZm9yIHRoZSBFbmVyZ3kgQ29udHJvbCBpbiB0aGUgU291dGgtV2VzdCByZWdpb24gb2YgVWtyYWluZVwiLFxuICAgICAgICAgICAgbGluazogXCJcIiwgZGVzY3JpcHRpb246IFwiRGV2ZWxvcG1lbnQgb2YgdGVjaG5pY2FsIHNvbHV0aW9ucyB0byBtZWV0IHRoZSBlbmVyZ3kgY29tcGFueSdzIG5lZWRzXCJ9XG4gICAgXSxcbiAgICBcInNraWxsc1wiIDogW1xuICAgICAgICB7bmFtZSA6IFwiQyNcIiwgdmFsdWU6IFwiMTBcIiwgZGVzY3JpcHRpb246IFwiXCJ9LFxuICAgICAgICB7bmFtZSA6IFwiSmF2YVNjcmlwdFwiLCB2YWx1ZTogXCI2XCIsIGRlc2NyaXB0aW9uOiBcIlwifSxcbiAgICAgICAge25hbWUgOiBcIi5ORVQgRnJhbWV3b3JrXCIsIHZhbHVlOiBcIjlcIiwgZGVzY3JpcHRpb246IFwiXCJ9LFxuICAgICAgICB7bmFtZSA6IFwiU2NhbGFcIiwgdmFsdWU6IFwiN1wiLCBkZXNjcmlwdGlvbjogXCJcIn0sXG4gICAgICAgIHtuYW1lIDogXCJIVE1MNSAmIENTUzNcIiwgdmFsdWU6IFwiNVwiLCBkZXNjcmlwdGlvbjogXCJcIn0sXG4gICAgICAgIHtuYW1lIDogXCJEZXNpZ25QYXR0ZXJuc1wiLCB2YWx1ZTogXCI4XCIsIGRlc2NyaXB0aW9uOiBcIlwifSxcbiAgICAgICAge25hbWUgOiBcIkMrK1wiLCB2YWx1ZTogXCI2XCIsIGRlc2NyaXB0aW9uOiBcIlwifSxcbiAgICAgICAge25hbWUgOiBcIk9PUFwiLCB2YWx1ZTogXCI4XCIsIGRlc2NyaXB0aW9uOiBcIlwifSxcbiAgICAgICAge25hbWUgOiBcIlJlYWN0LmpzXCIsIHZhbHVlOiBcIjdcIiwgZGVzY3JpcHRpb246IFwiXCJ9LFxuICAgICAgICB7bmFtZSA6IFwiRnVuY3Rpb25hbCBwcm9ncmFtbWluZ1wiLCB2YWx1ZTogXCI3XCIsIGRlc2NyaXB0aW9uOiBcIlwifVxuICAgIF0sXG4gICAgXCJtYWlsXCI6IFwicm9tYW5AbWVsbnlrLmNvXCIsXG4gICAgXCJ0ZWxcIjogXCJcIixcbiAgICBcImFkZHJlc3NcIjogJ01pZWxcXHUwMTdjeVxcdTAxNDRza2llZ28gMTQsIDYxLTcyNSBQb3puYVxcdTAxNDQnLFxuICAgIFwibWFwXCIgOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTU1Nzk3LjcwODI4OTUzMzY4ITJkMTYuOTAxNjY1Nzk5OTk5OTkzITNkNTIuNDAwNTI4NTUwMDAwMDIhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDQ3MDQ0NGQyZWNlMTBhYjclM0EweGE0ZWEzMTk4MDMzNGJmZDEhMnpVRzk2Ym1IRmhDd2dVRzlzWVc1ayE1ZTAhM20yITFzZW4hMnN1cyE0djE0NDEyMjAzNDQzNDEnLFxuICAgIFwidGV4dFwiOiBcIkFzIGZhciBhcyBJIHJlbWVtYmVyIG15c2VsZiBJIHdhcyBmb25kIG9mIG1hdGgsIHByb2dyYW1taW5nIGFuZCBmb3JlaWduIGxhbmd1YWdlcy4gTXkgZmlyc3QgcHJvZ3JhbSBJIHdyb3RlIG9uIGFzc2VtYmxlciB3aGVuIHdhcyBlaWdodCB5ZWFycyBvbGQgYW5kIG15IGZpcnN0IHByb2dyYW0gYXMgYSBmcmVlbGFuY2VyIGluIDE5LlxcclxcblwiICtcbiAgICBcIklcXCd2ZSBnb3QgaG9ub3IgTWFzdGVyIGRlZ3JlZSBpbiBlbGVjdHJvdGVjaG5pY2FsIGVuZ2luZWVyaW5nIGFuZCBleHBlcnQgRGlwbG9tYSBvZiBDb21wdXRlciBTeXN0ZW1zIGFuZCBOZXR3b3Jrcy4gIER1cmluZyBsYXN0IDEyIHllYXJzIG9mIG15IGxpZmUsIElcXCd2ZSBiZWVuIHByb2Zlc3Npb25hbGx5IGNvZGluZyBvbiBQYXNjYWwsIERlbHBoaSwgUEhQLCBDKyssIEMjLiBOb3cgSSBhbSB0cnlpbmcgbXkgc2tpbGxzIHdpdGggU2NhbGEgYW5kIEphdmFTY3JpcHQuIEhvcGUgSVxcJ2xsIHN3aXRjaCBzaG9ydGx5IHRvIHRoaXMgbmV3IGZhc3QgZ3Jvd2luZyBzdHJlYW0uXCJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGJNb2RlbDsiLCJ2YXIgQXBwID0gcmVxdWlyZSgnLi9BcHAuanMnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgSW5mb0Jsb2NrID0gcmVxdWlyZSgnLi9JbmZvQmxvY2suanN4Jyk7XG52YXIgRWR1Y2F0aW9uID0gcmVxdWlyZSgnLi9FZHVjYXRpb24uanN4Jyk7XG52YXIgUmVzdW1lID0gcmVxdWlyZSgnLi9SZXN1bWUuanN4Jyk7XG52YXIgQ29udGFjdCA9IHJlcXVpcmUoJy4vQ29udGFjdC5qc3gnKTtcbnZhciBOb3RGb3VuZCA9IHJlcXVpcmUoJy4vTm90Rm91bmQuanN4Jyk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgUm91dGUgPSBSb3V0ZXIuUm91dGU7XG52YXIgRGVmYXVsdFJvdXRlID0gUm91dGVyLkRlZmF1bHRSb3V0ZTtcbnZhciBOb3RGb3VuZFJvdXRlID0gUm91dGVyLk5vdEZvdW5kUm91dGU7XG5cbnZhciByb3V0ZXMgPSAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge2hhbmRsZXI6IEFwcCwgcGF0aDogXCIvXCJ9LCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEZWZhdWx0Um91dGUsIHtoYW5kbGVyOiBJbmZvQmxvY2t9KSwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90Rm91bmRSb3V0ZSwge2hhbmRsZXI6IE5vdEZvdW5kfSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7bmFtZTogXCJwcm9maWxlXCIsIGhhbmRsZXI6IEluZm9CbG9ja30pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge25hbWU6IFwiZWR1Y2F0aW9uXCIsIGhhbmRsZXI6IEVkdWNhdGlvbn0pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge25hbWU6IFwicmVzdW1lXCIsIGhhbmRsZXI6IFJlc3VtZX0pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge25hbWU6IFwiY29udGFjdFwiLCBoYW5kbGVyOiBDb250YWN0fSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7bmFtZTogXCJibG9nXCIsIGhhbmRsZXI6IE5vdEZvdW5kfSlcbiAgICApXG4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlczsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgncmVhY3QvbGliL09iamVjdC5hc3NpZ24nKTtcblxudmFyIE5FV1RBQiA9ICdfYmxhbmsnO1xuXG52YXIgT3V0Ym91bmRMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ091dGJvdW5kTGluaycsXG4gIHByb3BUeXBlczoge1xuICAgIGV2ZW50TGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9LFxuICBzdGF0aWNzOiB7XG4gICAgdHJhY2tMaW5rOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUud2FybihcImdhIHRyYWNraW5nIG5vdCBlbmFibGVkXCIpO1xuICAgIH1cbiAgfSxcbiAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGV2ZW50TWV0YSA9IHtsYWJlbDogcHJvcHMuZXZlbnRMYWJlbH07XG4gICAgT3V0Ym91bmRMaW5rLnRyYWNrTGluayhldmVudE1ldGEsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICggcHJvcHMudGFyZ2V0ID09PSBORVdUQUIgKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHByb3BzLnRvLCBORVdUQUIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwcm9wcy50bztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocHJvcHMub25DbGljaykge1xuICAgICAgcHJvcHMub25DbGljayhlKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9wcyA9IGFzc2lnbih7fSwgdGhpcy5wcm9wcywge1xuICAgICAgaHJlZjogdGhpcy5wcm9wcy50byxcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2tcbiAgICB9KTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHByb3BzKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gT3V0Ym91bmRMaW5rO1xuIiwiLyoqXG4gKiBSZWFjdCBHb29nbGUgQW5hbHl0aWNzIE1vZHVsZVxuICpcbiAqIEBwYWNrYWdlIHJlYWN0LWdhXG4gKiBAYXV0aG9yICBBZGFtIExvZnRpbmcgPGFkYW1AbW96aWxsYWZvdW5kYXRpb24ub3JnPlxuICogICAgICAgICAgQXR1bCBWYXJtYSA8YXR1bEBtb3ppbGxhZm91bmRhdGlvbi5vcmc+XG4gKi9cblxuLyoqXG4gKiBVdGlsaXRpZXNcbiAqL1xuXG52YXIgX3JlZGFjdGVkID0gJ1JFREFDVEVEIChQb3RlbnRpYWwgRW1haWwgQWRkcmVzcyknO1xudmFyIF9kZWJ1ZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiB3YXJuIChzKSB7XG4gIGNvbnNvbGUud2FybignW3JlYWN0LWdhXScsIHMpO1xufVxuXG5mdW5jdGlvbiBsb2cgKHMpIHtcbiAgY29uc29sZS5pbmZvKCdbcmVhY3QtZ2FdJywgcyk7XG59XG5cbi8vIEdBIHN0cmluZ3MgbmVlZCB0byBoYXZlIGxlYWRpbmcvdHJhaWxpbmcgd2hpdGVzcGFjZSB0cmltbWVkLCBhbmQgbm90IGFsbFxuLy8gYnJvd3NlcnMgaGF2ZSBTdHJpbmcucHJvdG90b3lwZS50cmltKCkuXG5mdW5jdGlvbiB0cmltKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVMZWFkaW5nU2xhc2ggKHMpIHtcbiAgaWYgKHMuc3Vic3RyaW5nKDAsIDEpID09PSAnLycpIHtcbiAgICBzID0gcy5zdWJzdHJpbmcoMSk7XG4gIH1cbiAgcmV0dXJuIHM7XG59XG5cbi8qKlxuICogVG8gVGl0bGUgQ2FzZSAyLjEgLSBodHRwOi8vaW5kaXZpZGVkLmNvbS9jb2RlL3RvLXRpdGxlLWNhc2UvXG4gKiBDb3B5cmlnaHQgMjAwOC0yMDEzIERhdmlkIEdvdWNoLiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ291Y2gvdG8tdGl0bGUtY2FzZVxuICovXG5mdW5jdGlvbiB0b1RpdGxlQ2FzZShzKXtcbiAgdmFyIHNtYWxsV29yZHMgPSAvXihhfGFufGFuZHxhc3xhdHxidXR8Ynl8ZW58Zm9yfGlmfGlufG5vcnxvZnxvbnxvcnxwZXJ8dGhlfHRvfHZzP1xcLj98dmlhKSQvaTtcbiAgcyA9IHRyaW0ocyk7XG5cbiAgcmV0dXJuIHMucmVwbGFjZSgvW0EtWmEtejAtOVxcdTAwQzAtXFx1MDBGRl0rW15cXHMtXSovZywgZnVuY3Rpb24obWF0Y2gsIGluZGV4LCB0aXRsZSl7XG4gICAgaWYgKGluZGV4ID4gMCAmJlxuICAgICAgICBpbmRleCArIG1hdGNoLmxlbmd0aCAhPT0gdGl0bGUubGVuZ3RoICYmXG4gICAgICAgIG1hdGNoLnNlYXJjaChzbWFsbFdvcmRzKSA+IC0xICYmXG4gICAgICAgIHRpdGxlLmNoYXJBdChpbmRleCAtIDIpICE9PSBcIjpcIiAmJlxuICAgICAgICAodGl0bGUuY2hhckF0KGluZGV4ICsgbWF0Y2gubGVuZ3RoKSAhPT0gJy0nIHx8IHRpdGxlLmNoYXJBdChpbmRleCAtIDEpID09PSAnLScpICYmXG4gICAgICAgIHRpdGxlLmNoYXJBdChpbmRleCAtIDEpLnNlYXJjaCgvW15cXHMtXS8pIDwgMCkge1xuICAgICAgcmV0dXJuIG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLnN1YnN0cigxKS5zZWFyY2goL1tBLVpdfFxcLi4vKSA+IC0xKSB7XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbWF0Y2guc3Vic3RyKDEpO1xuICB9KTtcbn1cblxuLy8gU2VlIGlmIHMgY291bGQgYmUgYW4gZW1haWwgYWRkcmVzcy4gV2UgZG9uJ3Qgd2FudCB0byBzZW5kIHBlcnNvbmFsIGRhdGEgbGlrZSBlbWFpbC5cbmZ1bmN0aW9uIG1pZ2h0QmVFbWFpbChzKSB7XG4gIC8vIFRoZXJlJ3Mgbm8gcG9pbnQgdHJ5aW5nIHRvIHZhbGlkYXRlIHJmYzgyMiBmdWxseSwganVzdCBsb29rIGZvciAuLi5ALi4uXG4gIHJldHVybiAoL1teQF0rQFteQF0rLykudGVzdChzKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0KHMpIHtcbiAgaWYobWlnaHRCZUVtYWlsKHMpKSB7XG4gICAgd2FybihcIlRoaXMgYXJnIGxvb2tzIGxpa2UgYW4gZW1haWwgYWRkcmVzcywgcmVkYWN0aW5nLlwiKTtcbiAgICBzID0gX3JlZGFjdGVkO1xuICAgIHJldHVybiBzO1xuICB9XG4gIHMgPSB0b1RpdGxlQ2FzZShzKTtcbiAgcmV0dXJuIHM7XG59XG5cbnZhciByZWFjdEdBID0ge1xuICBpbml0aWFsaXplOiBmdW5jdGlvbihnYVRyYWNraW5nSUQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIWdhVHJhY2tpbmdJRCkge1xuICAgICAgd2FybignZ2FUcmFja2luZ0lEIGlzIHJlcXVpcmVkIGluIGluaXRpYWxpemUoKScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5kZWJ1ZyAmJiBvcHRpb25zLmRlYnVnID09PSB0cnVlKSB7XG4gICAgICAgIF9kZWJ1ZyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2FuYWx5dGljc2pzL1xuICAgIC8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cbiAgICAoZnVuY3Rpb24oaSwgcywgbywgZywgciwgYSwgbSkge1xuICAgICAgaVsnR29vZ2xlQW5hbHl0aWNzT2JqZWN0J10gPSByO1xuICAgICAgaVtyXSA9IGlbcl0gfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIChpW3JdLnEgPSBpW3JdLnEgfHwgW10pLnB1c2goYXJndW1lbnRzKVxuICAgICAgfSwgaVtyXS5sID0gMSAqIG5ldyBEYXRlKCk7XG4gICAgICBhID0gcy5jcmVhdGVFbGVtZW50KG8pLFxuICAgICAgICAgIG0gPSBzLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdO1xuICAgICAgYS5hc3luYyA9IDE7XG4gICAgICBhLnNyYyA9IGc7XG4gICAgICBtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIG0pXG4gICAgfSkod2luZG93LCBkb2N1bWVudCwgJ3NjcmlwdCcsXG4gICAgICAgJy8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2FuYWx5dGljcy5qcycsICdnYScpO1xuICAgIC8qIGpzaGludCBpZ25vcmU6ZW5kICovXG5cbiAgICBnYSgnY3JlYXRlJywgZ2FUcmFja2luZ0lELCAnYXV0bycpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBwYWdldmlldzpcbiAgICogQmFzaWMgR0EgcGFnZXZpZXcgdHJhY2tpbmdcbiAgICogQHBhcmFtICB7U3RyaW5nfSBwYXRoIC0gdGhlIGN1cnJlbnQgcGFnZSBwYWdlIGUuZy4gJy9hYm91dCdcbiAgICovXG4gIHBhZ2V2aWV3OiBmdW5jdGlvbiAocGF0aCkge1xuICAgIGlmICghcGF0aCkge1xuICAgICAgd2FybigncGF0aCBpcyByZXF1aXJlZCBpbiAucGFnZXZpZXcoKScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBhdGggPSB0cmltKHBhdGgpO1xuICAgIGlmIChwYXRoID09PSAnJykge1xuICAgICAgd2FybigncGF0aCBjYW5ub3QgYmUgYW4gZW1wdHkgc3RyaW5nIGluIC5wYWdldmlldygpJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBnYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCBwYXRoKTtcblxuICAgICAgaWYgKF9kZWJ1Zykge1xuICAgICAgICBsb2coJ2NhbGxlZCBnYShcXCdzZW5kXFwnLCBcXCdwYWdldmlld1xcJywgcGF0aCk7Jyk7XG4gICAgICAgIGxvZygnd2l0aCBwYXRoOiAnICsgcGF0aCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBtb2RhbHZpZXc6XG4gICAqIGEgcHJveHkgdG8gYmFzaWMgR0EgcGFnZXZpZXcgdHJhY2tpbmcgdG8gY29uc2lzdGVudGx5IHRyYWNrXG4gICAqIG1vZGFsIHZpZXdzIHRoYXQgYXJlIGFuIGVxdWl2YWxlbnQgVVggdG8gYSB0cmFkaXRpb25hbCBwYWdldmlld1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1vZGFsTmFtZSBlLmcuICdhZGQtb3ItZWRpdC1jbHViJ1xuICAgKi9cbiAgbW9kYWx2aWV3OiBmdW5jdGlvbiAobW9kYWxOYW1lKSB7XG4gICAgaWYgKCFtb2RhbE5hbWUpIHtcbiAgICAgIHdhcm4oJ21vZGFsTmFtZSBpcyByZXF1aXJlZCBpbiAubW9kYWx2aWV3KG1vZGFsTmFtZSknKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtb2RhbE5hbWUgPSB0cmltKG1vZGFsTmFtZSk7XG4gICAgbW9kYWxOYW1lID0gcmVtb3ZlTGVhZGluZ1NsYXNoKG1vZGFsTmFtZSk7XG5cbiAgICBpZiAobW9kYWxOYW1lID09PSAnJykge1xuICAgICAgd2FybignbW9kYWxOYW1lIGNhbm5vdCBiZSBhbiBlbXB0eSBzdHJpbmcgb3IgYSBzaW5nbGUgLyBpbiAubW9kYWx2aWV3KCknKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGdhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBtb2RhbE5hbWUgPSB0cmltKG1vZGFsTmFtZSk7XG4gICAgICB2YXIgcGF0aCA9ICcvbW9kYWwvJyArIG1vZGFsTmFtZTtcbiAgICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3JywgcGF0aCk7XG5cbiAgICAgIGlmIChfZGVidWcpIHtcbiAgICAgICAgbG9nKCdjYWxsZWQgZ2EoXFwnc2VuZFxcJywgXFwncGFnZXZpZXdcXCcsIHBhdGgpOycpO1xuICAgICAgICBsb2coJ3dpdGggcGF0aDogJyArIHBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogZXZlbnQ6XG4gICAqIEdBIGV2ZW50IHRyYWNraW5nXG4gICAqIEBwYXJhbSBhcmdzLmNhdGVnb3J5IHtTdHJpbmd9IHJlcXVpcmVkXG4gICAqIEBwYXJhbSBhcmdzLmFjdGlvbiB7U3RyaW5nfSByZXF1aXJlZFxuICAgKiBAcGFyYW0gYXJncy5sYWJlbCB7U3RyaW5nfSBvcHRpb25hbFxuICAgKiBAcGFyYW0gYXJncy52YWx1ZSB7SW50fSBvcHRpb25hbFxuICAgKiBAcGFyYW0gYXJncy5ub25JbnRlcmFjdGlvbiB7Ym9vbGVhbn0gb3B0aW9uYWxcbiAgICovXG4gIGV2ZW50OiBmdW5jdGlvbiAoYXJncykge1xuICAgIGlmICh0eXBlb2YgZ2EgPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAgLy8gU2ltcGxlIFZhbGlkYXRpb25cbiAgICAgIGlmICghYXJncyB8fCAhYXJncy5jYXRlZ29yeSB8fCAhYXJncy5hY3Rpb24pIHtcbiAgICAgICAgd2FybignYXJncy5jYXRlZ29yeSBBTkQgYXJncy5hY3Rpb24gYXJlIHJlcXVpcmVkIGluIGV2ZW50KCknKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXF1aXJlZCBGaWVsZHNcbiAgICAgIHZhciBmaWVsZE9iamVjdCA9IHtcbiAgICAgICAgJ2hpdFR5cGUnOiAnZXZlbnQnLFxuICAgICAgICAnZXZlbnRDYXRlZ29yeSc6IGZvcm1hdChhcmdzLmNhdGVnb3J5KSxcbiAgICAgICAgJ2V2ZW50QWN0aW9uJzogZm9ybWF0KGFyZ3MuYWN0aW9uKVxuICAgICAgfTtcblxuICAgICAgLy8gT3B0aW9uYWwgRmllbGRzXG4gICAgICBpZiAoYXJncy5sYWJlbCkge1xuICAgICAgICBmaWVsZE9iamVjdC5ldmVudExhYmVsID0gZm9ybWF0KGFyZ3MubGFiZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXJncy52YWx1ZSkge1xuICAgICAgICBpZih0eXBlb2YgYXJncy52YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICB3YXJuKCdFeHBlY3RlZCBgYXJncy52YWx1ZWAgYXJnIHRvIGJlIGEgTnVtYmVyLicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkT2JqZWN0LmV2ZW50VmFsdWUgPSBhcmdzLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhcmdzLm5vbkludGVyYWN0aW9uKSB7XG4gICAgICAgIGlmKHR5cGVvZiBhcmdzLm5vbkludGVyYWN0aW9uICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB3YXJuKCdgYXJncy5ub25JbnRlcmFjdGlvbmAgbXVzdCBiZSBhIGJvb2xlYW4uJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmllbGRPYmplY3Qubm9uSW50ZXJhY3Rpb24gPSBhcmdzLm5vbkludGVyYWN0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFNlbmQgdG8gR0FcbiAgICAgIGdhKCdzZW5kJywgZmllbGRPYmplY3QpO1xuXG4gICAgICBpZiAoX2RlYnVnKSB7XG4gICAgICAgIGxvZygnY2FsbGVkIGdhKFxcJ3NlbmRcXCcsIGZpZWxkT2JqZWN0KTsnKTtcbiAgICAgICAgbG9nKCd3aXRoIGZpZWxkT2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkoZmllbGRPYmplY3QpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIG91dGJvdW5kTGluazpcbiAgICogR0Egb3V0Ym91bmRMaW5rIHRyYWNraW5nXG4gICAqIEBwYXJhbSBhcmdzLmxhYmVsIHtTdHJpbmd9IGUuZy4gdXJsLCBvciAnQ3JlYXRlIGFuIEFjY291bnQnXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGhpdENhbGxiYWNrIC0gQ2FsbGVkIGFmdGVyIHByb2Nlc3NpbmcgYSBoaXQuXG4gICAqL1xuICBvdXRib3VuZExpbms6IGZ1bmN0aW9uIChhcmdzLCBoaXRDYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2YgaGl0Q2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHdhcm4oJ2hpdENhbGxiYWNrIGZ1bmN0aW9uIGlzIHJlcXVpcmVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBnYSA9PT0gJ2Z1bmN0aW9uJykge1xuXG4gICAgICAvLyBTaW1wbGUgVmFsaWRhdGlvblxuICAgICAgaWYgKCFhcmdzIHx8ICFhcmdzLmxhYmVsKSB7XG4gICAgICAgIHdhcm4oJ2FyZ3MubGFiZWwgaXMgcmVxdWlyZWQgaW4gb3V0Ym91bmRMaW5rKCknKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXF1aXJlZCBGaWVsZHNcbiAgICAgIHZhciBmaWVsZE9iamVjdCA9IHtcbiAgICAgICAgJ2hpdFR5cGUnOiAnZXZlbnQnLFxuICAgICAgICAnZXZlbnRDYXRlZ29yeSc6ICdPdXRib3VuZCcsXG4gICAgICAgICdldmVudEFjdGlvbic6ICdDbGljaycsXG4gICAgICAgICdldmVudExhYmVsJzogZm9ybWF0KGFyZ3MubGFiZWwpXG4gICAgICB9O1xuXG4gICAgICB2YXIgc2FmZXR5Q2FsbGJhY2tDYWxsZWQgPSBmYWxzZTtcbiAgICAgIHZhciBzYWZldHlDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBUaGlzIHByZXZlbnRzIGEgZGVsYXllZCByZXNwb25zZSBmcm9tIEdBXG4gICAgICAgIC8vIGNhdXNpbmcgaGl0Q2FsbGJhY2sgZnJvbSBiZWluZyBmaXJlZCB0d2ljZVxuICAgICAgICBzYWZldHlDYWxsYmFja0NhbGxlZCA9IHRydWU7XG5cbiAgICAgICAgaGl0Q2FsbGJhY2soKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFVzaW5nIGEgdGltZW91dCB0byBlbnN1cmUgdGhlIGV4ZWN1dGlvbiBvZiBjcml0aWNhbCBhcHBsaWNhdGlvbiBjb2RlXG4gICAgICAvLyBpbiB0aGUgY2FzZSB3aGVuIHRoZSBHQSBzZXJ2ZXIgbWlnaHQgYmUgZG93blxuICAgICAgLy8gb3IgYW4gYWQgYmxvY2tlciBwcmV2ZW50cyBzZW5kaW5nIHRoZSBkYXRhXG5cbiAgICAgIC8vIHJlZ2lzdGVyIHNhZmV0eSBuZXQgdGltZW91dDpcbiAgICAgIHZhciB0ID0gc2V0VGltZW91dChzYWZldHlDYWxsYmFjaywgMjUwKTtcblxuICAgICAgdmFyIGNsZWFyYWJsZUNhbGxiYWNrRm9yR0EgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHQpO1xuICAgICAgICAgIGlmICghc2FmZXR5Q2FsbGJhY2tDYWxsZWQpIHtcbiAgICAgICAgICAgIGhpdENhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZmllbGRPYmplY3QuaGl0Q2FsbGJhY2sgPSBjbGVhcmFibGVDYWxsYmFja0ZvckdBO1xuXG4gICAgICAvLyBTZW5kIHRvIEdBXG4gICAgICBnYSgnc2VuZCcsIGZpZWxkT2JqZWN0KTtcblxuICAgICAgaWYgKF9kZWJ1Zykge1xuICAgICAgICBsb2coJ2NhbGxlZCBnYShcXCdzZW5kXFwnLCBmaWVsZE9iamVjdCk7Jyk7XG4gICAgICAgIGxvZygnd2l0aCBmaWVsZE9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KGZpZWxkT2JqZWN0KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGdhIGlzIG5vdCBkZWZpbmVkLCByZXR1cm4gdGhlIGNhbGxiYWNrIHNvIHRoZSBhcHBsaWNhdGlvblxuICAgICAgLy8gY29udGludWVzIHRvIHdvcmsgYXMgZXhwZWN0ZWRcbiAgICAgIHNldFRpbWVvdXQoaGl0Q2FsbGJhY2ssIDApO1xuICAgIH1cbiAgfVxufTtcblxudmFyIE91dGJvdW5kTGluayA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9PdXRib3VuZExpbmsnKTtcbk91dGJvdW5kTGluay50cmFja0xpbmsgPSByZWFjdEdBLm91dGJvdW5kTGluaztcbnJlYWN0R0EuT3V0Ym91bmRMaW5rID0gT3V0Ym91bmRMaW5rO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYWN0R0E7XG5cbiIsIi8qKlxuICogUmVwcmVzZW50cyBhIGNhbmNlbGxhdGlvbiBjYXVzZWQgYnkgbmF2aWdhdGluZyBhd2F5XG4gKiBiZWZvcmUgdGhlIHByZXZpb3VzIHRyYW5zaXRpb24gaGFzIGZ1bGx5IHJlc29sdmVkLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gQ2FuY2VsbGF0aW9uKCkge31cblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxsYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpLmNhblVzZURPTTtcblxudmFyIEhpc3RvcnkgPSB7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IG51bWJlciBvZiBlbnRyaWVzIGluIHRoZSBoaXN0b3J5LlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIHByb3BlcnR5IGlzIHJlYWQtb25seS5cbiAgICovXG4gIGxlbmd0aDogMSxcblxuICAvKipcbiAgICogU2VuZHMgdGhlIGJyb3dzZXIgYmFjayBvbmUgZW50cnkgaW4gdGhlIGhpc3RvcnkuXG4gICAqL1xuICBiYWNrOiBmdW5jdGlvbiBiYWNrKCkge1xuICAgIGludmFyaWFudChjYW5Vc2VET00sICdDYW5ub3QgdXNlIEhpc3RvcnkuYmFjayB3aXRob3V0IGEgRE9NJyk7XG5cbiAgICAvLyBEbyB0aGlzIGZpcnN0IHNvIHRoYXQgSGlzdG9yeS5sZW5ndGggd2lsbFxuICAgIC8vIGJlIGFjY3VyYXRlIGluIGxvY2F0aW9uIGNoYW5nZSBsaXN0ZW5lcnMuXG4gICAgSGlzdG9yeS5sZW5ndGggLT0gMTtcblxuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhpc3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG4vKiBqc2hpbnQgLVcwODQgKi9cbnZhciBQYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG5mdW5jdGlvbiBkZWVwU2VhcmNoKHJvdXRlLCBwYXRobmFtZSwgcXVlcnkpIHtcbiAgLy8gQ2hlY2sgdGhlIHN1YnRyZWUgZmlyc3QgdG8gZmluZCB0aGUgbW9zdCBkZWVwbHktbmVzdGVkIG1hdGNoLlxuICB2YXIgY2hpbGRSb3V0ZXMgPSByb3V0ZS5jaGlsZFJvdXRlcztcbiAgaWYgKGNoaWxkUm91dGVzKSB7XG4gICAgdmFyIG1hdGNoLCBjaGlsZFJvdXRlO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaGlsZFJvdXRlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2hpbGRSb3V0ZSA9IGNoaWxkUm91dGVzW2ldO1xuXG4gICAgICBpZiAoY2hpbGRSb3V0ZS5pc0RlZmF1bHQgfHwgY2hpbGRSb3V0ZS5pc05vdEZvdW5kKSBjb250aW51ZTsgLy8gQ2hlY2sgdGhlc2UgaW4gb3JkZXIgbGF0ZXIuXG5cbiAgICAgIGlmIChtYXRjaCA9IGRlZXBTZWFyY2goY2hpbGRSb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5KSkge1xuICAgICAgICAvLyBBIHJvdXRlIGluIHRoZSBzdWJ0cmVlIG1hdGNoZWQhIEFkZCB0aGlzIHJvdXRlIGFuZCB3ZSdyZSBkb25lLlxuICAgICAgICBtYXRjaC5yb3V0ZXMudW5zaGlmdChyb3V0ZSk7XG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBObyBjaGlsZCByb3V0ZXMgbWF0Y2hlZDsgdHJ5IHRoZSBkZWZhdWx0IHJvdXRlLlxuICB2YXIgZGVmYXVsdFJvdXRlID0gcm91dGUuZGVmYXVsdFJvdXRlO1xuICBpZiAoZGVmYXVsdFJvdXRlICYmIChwYXJhbXMgPSBQYXRoVXRpbHMuZXh0cmFjdFBhcmFtcyhkZWZhdWx0Um91dGUucGF0aCwgcGF0aG5hbWUpKSkge1xuICAgIHJldHVybiBuZXcgTWF0Y2gocGF0aG5hbWUsIHBhcmFtcywgcXVlcnksIFtyb3V0ZSwgZGVmYXVsdFJvdXRlXSk7XG4gIH0gLy8gRG9lcyB0aGUgXCJub3QgZm91bmRcIiByb3V0ZSBtYXRjaD9cbiAgdmFyIG5vdEZvdW5kUm91dGUgPSByb3V0ZS5ub3RGb3VuZFJvdXRlO1xuICBpZiAobm90Rm91bmRSb3V0ZSAmJiAocGFyYW1zID0gUGF0aFV0aWxzLmV4dHJhY3RQYXJhbXMobm90Rm91bmRSb3V0ZS5wYXRoLCBwYXRobmFtZSkpKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRjaChwYXRobmFtZSwgcGFyYW1zLCBxdWVyeSwgW3JvdXRlLCBub3RGb3VuZFJvdXRlXSk7XG4gIH0gLy8gTGFzdCBhdHRlbXB0OiBjaGVjayB0aGlzIHJvdXRlLlxuICB2YXIgcGFyYW1zID0gUGF0aFV0aWxzLmV4dHJhY3RQYXJhbXMocm91dGUucGF0aCwgcGF0aG5hbWUpO1xuICBpZiAocGFyYW1zKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRjaChwYXRobmFtZSwgcGFyYW1zLCBxdWVyeSwgW3JvdXRlXSk7XG4gIH1yZXR1cm4gbnVsbDtcbn1cblxudmFyIE1hdGNoID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWF0Y2gocGF0aG5hbWUsIHBhcmFtcywgcXVlcnksIHJvdXRlcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXRjaCk7XG5cbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMucm91dGVzID0gcm91dGVzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hdGNoLCBudWxsLCBbe1xuICAgIGtleTogJ2ZpbmRNYXRjaCcsXG5cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0cyB0byBtYXRjaCBkZXB0aC1maXJzdCBhIHJvdXRlIGluIHRoZSBnaXZlbiByb3V0ZSdzXG4gICAgICogc3VidHJlZSBhZ2FpbnN0IHRoZSBnaXZlbiBwYXRoIGFuZCByZXR1cm5zIHRoZSBtYXRjaCBpZiBpdFxuICAgICAqIHN1Y2NlZWRzLCBudWxsIGlmIG5vIG1hdGNoIGNhbiBiZSBtYWRlLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kTWF0Y2gocm91dGVzLCBwYXRoKSB7XG4gICAgICB2YXIgcGF0aG5hbWUgPSBQYXRoVXRpbHMud2l0aG91dFF1ZXJ5KHBhdGgpO1xuICAgICAgdmFyIHF1ZXJ5ID0gUGF0aFV0aWxzLmV4dHJhY3RRdWVyeShwYXRoKTtcbiAgICAgIHZhciBtYXRjaCA9IG51bGw7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByb3V0ZXMubGVuZ3RoOyBtYXRjaCA9PSBudWxsICYmIGkgPCBsZW47ICsraSkgbWF0Y2ggPSBkZWVwU2VhcmNoKHJvdXRlc1tpXSwgcGF0aG5hbWUsIHF1ZXJ5KTtcblxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXRjaDtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWF0Y2g7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9Qcm9wVHlwZXMnKTtcblxuLyoqXG4gKiBBIG1peGluIGZvciBjb21wb25lbnRzIHRoYXQgbW9kaWZ5IHRoZSBVUkwuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICAgbWl4aW5zOiBbIFJvdXRlci5OYXZpZ2F0aW9uIF0sXG4gKiAgICAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAqICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gKiAgICAgICB0aGlzLnRyYW5zaXRpb25UbygnYVJvdXRlJywgeyB0aGU6ICdwYXJhbXMnIH0sIHsgdGhlOiAncXVlcnknIH0pO1xuICogICAgIH0sXG4gKiAgICAgcmVuZGVyKCkge1xuICogICAgICAgcmV0dXJuIChcbiAqICAgICAgICAgPGEgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+Q2xpY2sgbWUhPC9hPlxuICogICAgICAgKTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICovXG52YXIgTmF2aWdhdGlvbiA9IHtcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IFByb3BUeXBlcy5yb3V0ZXIuaXNSZXF1aXJlZFxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFic29sdXRlIFVSTCBwYXRoIGNyZWF0ZWQgZnJvbSB0aGUgZ2l2ZW4gcm91dGVcbiAgICogbmFtZSwgVVJMIHBhcmFtZXRlcnMsIGFuZCBxdWVyeSB2YWx1ZXMuXG4gICAqL1xuICBtYWtlUGF0aDogZnVuY3Rpb24gbWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5tYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgdGhhdCBtYXkgc2FmZWx5IGJlIHVzZWQgYXMgdGhlIGhyZWYgb2YgYVxuICAgKiBsaW5rIHRvIHRoZSByb3V0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgKi9cbiAgbWFrZUhyZWY6IGZ1bmN0aW9uIG1ha2VIcmVmKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIubWFrZUhyZWYodG8sIHBhcmFtcywgcXVlcnkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgYXJndW1lbnRzIGJ5IHB1c2hpbmdcbiAgICogYSBuZXcgVVJMIG9udG8gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAqL1xuICB0cmFuc2l0aW9uVG86IGZ1bmN0aW9uIHRyYW5zaXRpb25Ubyh0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgIHRoaXMuY29udGV4dC5yb3V0ZXIudHJhbnNpdGlvblRvKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcbiAgfSxcblxuICAvKipcbiAgICogVHJhbnNpdGlvbnMgdG8gdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGFyZ3VtZW50cyBieSByZXBsYWNpbmdcbiAgICogdGhlIGN1cnJlbnQgVVJMIGluIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgKi9cbiAgcmVwbGFjZVdpdGg6IGZ1bmN0aW9uIHJlcGxhY2VXaXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgdGhpcy5jb250ZXh0LnJvdXRlci5yZXBsYWNlV2l0aCh0bywgcGFyYW1zLCBxdWVyeSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRyYW5zaXRpb25zIHRvIHRoZSBwcmV2aW91cyBVUkwuXG4gICAqL1xuICBnb0JhY2s6IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nb0JhY2soKTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5hdmlnYXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBxcyA9IHJlcXVpcmUoJ3FzJyk7XG5cbnZhciBwYXJhbUNvbXBpbGVNYXRjaGVyID0gLzooW2EtekEtWl8kXVthLXpBLVowLTlfJF0qKXxbKi4oKVxcW1xcXVxcXFwrfHt9XiRdL2c7XG52YXIgcGFyYW1JbmplY3RNYXRjaGVyID0gLzooW2EtekEtWl8kXVthLXpBLVowLTlfJD9dKls/XT8pfFsqXS9nO1xudmFyIHBhcmFtSW5qZWN0VHJhaWxpbmdTbGFzaE1hdGNoZXIgPSAvXFwvXFwvXFw/fFxcL1xcP1xcL3xcXC9cXD8vZztcbnZhciBxdWVyeU1hdGNoZXIgPSAvXFw/KC4qKSQvO1xuXG52YXIgX2NvbXBpbGVkUGF0dGVybnMgPSB7fTtcblxuZnVuY3Rpb24gY29tcGlsZVBhdHRlcm4ocGF0dGVybikge1xuICBpZiAoIShwYXR0ZXJuIGluIF9jb21waWxlZFBhdHRlcm5zKSkge1xuICAgIHZhciBwYXJhbU5hbWVzID0gW107XG4gICAgdmFyIHNvdXJjZSA9IHBhdHRlcm4ucmVwbGFjZShwYXJhbUNvbXBpbGVNYXRjaGVyLCBmdW5jdGlvbiAobWF0Y2gsIHBhcmFtTmFtZSkge1xuICAgICAgaWYgKHBhcmFtTmFtZSkge1xuICAgICAgICBwYXJhbU5hbWVzLnB1c2gocGFyYW1OYW1lKTtcbiAgICAgICAgcmV0dXJuICcoW14vPyNdKyknO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaCA9PT0gJyonKSB7XG4gICAgICAgIHBhcmFtTmFtZXMucHVzaCgnc3BsYXQnKTtcbiAgICAgICAgcmV0dXJuICcoLio/KSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ1xcXFwnICsgbWF0Y2g7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfY29tcGlsZWRQYXR0ZXJuc1twYXR0ZXJuXSA9IHtcbiAgICAgIG1hdGNoZXI6IG5ldyBSZWdFeHAoJ14nICsgc291cmNlICsgJyQnLCAnaScpLFxuICAgICAgcGFyYW1OYW1lczogcGFyYW1OYW1lc1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbXBpbGVkUGF0dGVybnNbcGF0dGVybl07XG59XG5cbnZhciBQYXRoVXRpbHMgPSB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gcGF0aCBpcyBhYnNvbHV0ZS5cbiAgICovXG4gIGlzQWJzb2x1dGU6IGZ1bmN0aW9uIGlzQWJzb2x1dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9LFxuXG4gIC8qKlxuICAgKiBKb2lucyB0d28gVVJMIHBhdGhzIHRvZ2V0aGVyLlxuICAgKi9cbiAgam9pbjogZnVuY3Rpb24gam9pbihhLCBiKSB7XG4gICAgcmV0dXJuIGEucmVwbGFjZSgvXFwvKiQvLCAnLycpICsgYjtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgbmFtZXMgb2YgYWxsIHBhcmFtZXRlcnMgaW4gdGhlIGdpdmVuIHBhdHRlcm4uXG4gICAqL1xuICBleHRyYWN0UGFyYW1OYW1lczogZnVuY3Rpb24gZXh0cmFjdFBhcmFtTmFtZXMocGF0dGVybikge1xuICAgIHJldHVybiBjb21waWxlUGF0dGVybihwYXR0ZXJuKS5wYXJhbU5hbWVzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgcG9ydGlvbnMgb2YgdGhlIGdpdmVuIFVSTCBwYXRoIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIHBhdHRlcm5cbiAgICogYW5kIHJldHVybnMgYW4gb2JqZWN0IG9mIHBhcmFtIG5hbWUgPT4gdmFsdWUgcGFpcnMuIFJldHVybnMgbnVsbCBpZiB0aGVcbiAgICogcGF0dGVybiBkb2VzIG5vdCBtYXRjaCB0aGUgZ2l2ZW4gcGF0aC5cbiAgICovXG4gIGV4dHJhY3RQYXJhbXM6IGZ1bmN0aW9uIGV4dHJhY3RQYXJhbXMocGF0dGVybiwgcGF0aCkge1xuICAgIHZhciBfY29tcGlsZVBhdHRlcm4gPSBjb21waWxlUGF0dGVybihwYXR0ZXJuKTtcblxuICAgIHZhciBtYXRjaGVyID0gX2NvbXBpbGVQYXR0ZXJuLm1hdGNoZXI7XG4gICAgdmFyIHBhcmFtTmFtZXMgPSBfY29tcGlsZVBhdHRlcm4ucGFyYW1OYW1lcztcblxuICAgIHZhciBtYXRjaCA9IHBhdGgubWF0Y2gobWF0Y2hlcik7XG5cbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9dmFyIHBhcmFtcyA9IHt9O1xuXG4gICAgcGFyYW1OYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbU5hbWUsIGluZGV4KSB7XG4gICAgICBwYXJhbXNbcGFyYW1OYW1lXSA9IG1hdGNoW2luZGV4ICsgMV07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcm91dGUgcGF0aCB3aXRoIHBhcmFtcyBpbnRlcnBvbGF0ZWQuIFRocm93c1xuICAgKiBpZiB0aGVyZSBpcyBhIGR5bmFtaWMgc2VnbWVudCBvZiB0aGUgcm91dGUgcGF0aCBmb3Igd2hpY2ggdGhlcmUgaXMgbm8gcGFyYW0uXG4gICAqL1xuICBpbmplY3RQYXJhbXM6IGZ1bmN0aW9uIGluamVjdFBhcmFtcyhwYXR0ZXJuLCBwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgICB2YXIgc3BsYXRJbmRleCA9IDA7XG5cbiAgICByZXR1cm4gcGF0dGVybi5yZXBsYWNlKHBhcmFtSW5qZWN0TWF0Y2hlciwgZnVuY3Rpb24gKG1hdGNoLCBwYXJhbU5hbWUpIHtcbiAgICAgIHBhcmFtTmFtZSA9IHBhcmFtTmFtZSB8fCAnc3BsYXQnO1xuXG4gICAgICAvLyBJZiBwYXJhbSBpcyBvcHRpb25hbCBkb24ndCBjaGVjayBmb3IgZXhpc3RlbmNlXG4gICAgICBpZiAocGFyYW1OYW1lLnNsaWNlKC0xKSA9PT0gJz8nKSB7XG4gICAgICAgIHBhcmFtTmFtZSA9IHBhcmFtTmFtZS5zbGljZSgwLCAtMSk7XG5cbiAgICAgICAgaWYgKHBhcmFtc1twYXJhbU5hbWVdID09IG51bGwpIHJldHVybiAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludmFyaWFudChwYXJhbXNbcGFyYW1OYW1lXSAhPSBudWxsLCAnTWlzc2luZyBcIiVzXCIgcGFyYW1ldGVyIGZvciBwYXRoIFwiJXNcIicsIHBhcmFtTmFtZSwgcGF0dGVybik7XG4gICAgICB9XG5cbiAgICAgIHZhciBzZWdtZW50O1xuICAgICAgaWYgKHBhcmFtTmFtZSA9PT0gJ3NwbGF0JyAmJiBBcnJheS5pc0FycmF5KHBhcmFtc1twYXJhbU5hbWVdKSkge1xuICAgICAgICBzZWdtZW50ID0gcGFyYW1zW3BhcmFtTmFtZV1bc3BsYXRJbmRleCsrXTtcblxuICAgICAgICBpbnZhcmlhbnQoc2VnbWVudCAhPSBudWxsLCAnTWlzc2luZyBzcGxhdCAjICVzIGZvciBwYXRoIFwiJXNcIicsIHNwbGF0SW5kZXgsIHBhdHRlcm4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VnbWVudCA9IHBhcmFtc1twYXJhbU5hbWVdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VnbWVudDtcbiAgICB9KS5yZXBsYWNlKHBhcmFtSW5qZWN0VHJhaWxpbmdTbGFzaE1hdGNoZXIsICcvJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBwYXJzaW5nIGFueSBxdWVyeSBzdHJpbmcgY29udGFpbmVkXG4gICAqIGluIHRoZSBnaXZlbiBwYXRoLCBudWxsIGlmIHRoZSBwYXRoIGNvbnRhaW5zIG5vIHF1ZXJ5IHN0cmluZy5cbiAgICovXG4gIGV4dHJhY3RRdWVyeTogZnVuY3Rpb24gZXh0cmFjdFF1ZXJ5KHBhdGgpIHtcbiAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKHF1ZXJ5TWF0Y2hlcik7XG4gICAgcmV0dXJuIG1hdGNoICYmIHFzLnBhcnNlKG1hdGNoWzFdKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIGdpdmVuIHBhdGggd2l0aG91dCB0aGUgcXVlcnkgc3RyaW5nLlxuICAgKi9cbiAgd2l0aG91dFF1ZXJ5OiBmdW5jdGlvbiB3aXRob3V0UXVlcnkocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UocXVlcnlNYXRjaGVyLCAnJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBwYXRoIHdpdGggdGhlIHBhcmFtZXRlcnMgaW4gdGhlIGdpdmVuXG4gICAqIHF1ZXJ5IG1lcmdlZCBpbnRvIHRoZSBxdWVyeSBzdHJpbmcuXG4gICAqL1xuICB3aXRoUXVlcnk6IGZ1bmN0aW9uIHdpdGhRdWVyeShwYXRoLCBxdWVyeSkge1xuICAgIHZhciBleGlzdGluZ1F1ZXJ5ID0gUGF0aFV0aWxzLmV4dHJhY3RRdWVyeShwYXRoKTtcblxuICAgIGlmIChleGlzdGluZ1F1ZXJ5KSBxdWVyeSA9IHF1ZXJ5ID8gYXNzaWduKGV4aXN0aW5nUXVlcnksIHF1ZXJ5KSA6IGV4aXN0aW5nUXVlcnk7XG5cbiAgICB2YXIgcXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkocXVlcnksIHsgYXJyYXlGb3JtYXQ6ICdicmFja2V0cycgfSk7XG5cbiAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgIHJldHVybiBQYXRoVXRpbHMud2l0aG91dFF1ZXJ5KHBhdGgpICsgJz8nICsgcXVlcnlTdHJpbmc7XG4gICAgfXJldHVybiBQYXRoVXRpbHMud2l0aG91dFF1ZXJ5KHBhdGgpO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGF0aFV0aWxzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJyk7XG52YXIgUmVhY3RQcm9wVHlwZXMgPSByZXF1aXJlKCdyZWFjdCcpLlByb3BUeXBlcztcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxudmFyIFByb3BUeXBlcyA9IGFzc2lnbih7fSwgUmVhY3RQcm9wVHlwZXMsIHtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgYSBwcm9wIHNob3VsZCBiZSBmYWxzeS5cbiAgICovXG4gIGZhbHN5OiBmdW5jdGlvbiBmYWxzeShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCc8JyArIGNvbXBvbmVudE5hbWUgKyAnPiBzaG91bGQgbm90IGhhdmUgYSBcIicgKyBwcm9wTmFtZSArICdcIiBwcm9wJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCBhIHByb3Agc2hvdWxkIGJlIGEgUm91dGUgb2JqZWN0LlxuICAgKi9cbiAgcm91dGU6IFJlYWN0UHJvcFR5cGVzLmluc3RhbmNlT2YoUm91dGUpLFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCBhIHByb3Agc2hvdWxkIGJlIGEgUm91dGVyIG9iamVjdC5cbiAgICovXG4gIC8vcm91dGVyOiBSZWFjdFByb3BUeXBlcy5pbnN0YW5jZU9mKFJvdXRlcikgLy8gVE9ET1xuICByb3V0ZXI6IFJlYWN0UHJvcFR5cGVzLmZ1bmNcblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvcFR5cGVzOyIsIi8qKlxuICogRW5jYXBzdWxhdGVzIGEgcmVkaXJlY3QgdG8gdGhlIGdpdmVuIHJvdXRlLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gUmVkaXJlY3QodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgdGhpcy50byA9IHRvO1xuICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZGlyZWN0OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdyZWFjdC9saWIvd2FybmluZycpO1xudmFyIFBhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfY3VycmVudFJvdXRlO1xuXG52YXIgUm91dGUgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSb3V0ZShuYW1lLCBwYXRoLCBpZ25vcmVTY3JvbGxCZWhhdmlvciwgaXNEZWZhdWx0LCBpc05vdEZvdW5kLCBvbkVudGVyLCBvbkxlYXZlLCBoYW5kbGVyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnBhcmFtTmFtZXMgPSBQYXRoVXRpbHMuZXh0cmFjdFBhcmFtTmFtZXModGhpcy5wYXRoKTtcbiAgICB0aGlzLmlnbm9yZVNjcm9sbEJlaGF2aW9yID0gISFpZ25vcmVTY3JvbGxCZWhhdmlvcjtcbiAgICB0aGlzLmlzRGVmYXVsdCA9ICEhaXNEZWZhdWx0O1xuICAgIHRoaXMuaXNOb3RGb3VuZCA9ICEhaXNOb3RGb3VuZDtcbiAgICB0aGlzLm9uRW50ZXIgPSBvbkVudGVyO1xuICAgIHRoaXMub25MZWF2ZSA9IG9uTGVhdmU7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSb3V0ZSwgW3tcbiAgICBrZXk6ICdhcHBlbmRDaGlsZCcsXG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIHRoZSBnaXZlbiByb3V0ZSB0byB0aGlzIHJvdXRlJ3MgY2hpbGQgcm91dGVzLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRDaGlsZChyb3V0ZSkge1xuICAgICAgaW52YXJpYW50KHJvdXRlIGluc3RhbmNlb2YgUm91dGUsICdyb3V0ZS5hcHBlbmRDaGlsZCBtdXN0IHVzZSBhIHZhbGlkIFJvdXRlJyk7XG5cbiAgICAgIGlmICghdGhpcy5jaGlsZFJvdXRlcykgdGhpcy5jaGlsZFJvdXRlcyA9IFtdO1xuXG4gICAgICB0aGlzLmNoaWxkUm91dGVzLnB1c2gocm91dGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICB2YXIgc3RyaW5nID0gJzxSb3V0ZSc7XG5cbiAgICAgIGlmICh0aGlzLm5hbWUpIHN0cmluZyArPSAnIG5hbWU9XCInICsgdGhpcy5uYW1lICsgJ1wiJztcblxuICAgICAgc3RyaW5nICs9ICcgcGF0aD1cIicgKyB0aGlzLnBhdGggKyAnXCI+JztcblxuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2NyZWF0ZVJvdXRlJyxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBuZXcgcm91dGUuIE9wdGlvbnMgbWF5IGJlIGEgVVJMIHBhdGhuYW1lIHN0cmluZ1xuICAgICAqIHdpdGggcGxhY2Vob2xkZXJzIGZvciBuYW1lZCBwYXJhbXMgb3IgYW4gb2JqZWN0IHdpdGggYW55IG9mIHRoZSBmb2xsb3dpbmdcbiAgICAgKiBwcm9wZXJ0aWVzOlxuICAgICAqXG4gICAgICogLSBuYW1lICAgICAgICAgICAgICAgICAgICAgVGhlIG5hbWUgb2YgdGhlIHJvdXRlLiBUaGlzIGlzIHVzZWQgdG8gbG9va3VwIGFcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSByZWxhdGl2ZSB0byBpdHMgcGFyZW50IHJvdXRlIGFuZCBzaG91bGQgYmVcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWUgYW1vbmcgYWxsIGNoaWxkIHJvdXRlcyBvZiB0aGUgc2FtZSBwYXJlbnRcbiAgICAgKiAtIHBhdGggICAgICAgICAgICAgICAgICAgICBBIFVSTCBwYXRobmFtZSBzdHJpbmcgd2l0aCBvcHRpb25hbCBwbGFjZWhvbGRlcnNcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0IHNwZWNpZnkgdGhlIG5hbWVzIG9mIHBhcmFtcyB0byBleHRyYWN0IGZyb21cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgVVJMIHdoZW4gdGhlIHBhdGggbWF0Y2hlcy4gRGVmYXVsdHMgdG8gYC8ke25hbWV9YFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW4gdGhlcmUgaXMgYSBuYW1lIGdpdmVuLCBvciB0aGUgcGF0aCBvZiB0aGUgcGFyZW50XG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUsIG9yIC9cbiAgICAgKiAtIGlnbm9yZVNjcm9sbEJlaGF2aW9yICAgICBUcnVlIHRvIG1ha2UgdGhpcyByb3V0ZSAoYW5kIGFsbCBkZXNjZW5kYW50cykgaWdub3JlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHNjcm9sbCBiZWhhdmlvciBvZiB0aGUgcm91dGVyXG4gICAgICogLSBpc0RlZmF1bHQgICAgICAgICAgICAgICAgVHJ1ZSB0byBtYWtlIHRoaXMgcm91dGUgdGhlIGRlZmF1bHQgcm91dGUgYW1vbmcgYWxsXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRzIHNpYmxpbmdzXG4gICAgICogLSBpc05vdEZvdW5kICAgICAgICAgICAgICAgVHJ1ZSB0byBtYWtlIHRoaXMgcm91dGUgdGhlIFwibm90IGZvdW5kXCIgcm91dGUgYW1vbmdcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGwgaXRzIHNpYmxpbmdzXG4gICAgICogLSBvbkVudGVyICAgICAgICAgICAgICAgICAgQSB0cmFuc2l0aW9uIGhvb2sgdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlciBpcyBnb2luZyB0byBlbnRlciB0aGlzIHJvdXRlXG4gICAgICogLSBvbkxlYXZlICAgICAgICAgICAgICAgICAgQSB0cmFuc2l0aW9uIGhvb2sgdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlciBpcyBnb2luZyB0byBsZWF2ZSB0aGlzIHJvdXRlXG4gICAgICogLSBoYW5kbGVyICAgICAgICAgICAgICAgICAgQSBSZWFjdCBjb21wb25lbnQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkIHdoZW5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzIHJvdXRlIGlzIGFjdGl2ZVxuICAgICAqIC0gcGFyZW50Um91dGUgICAgICAgICAgICAgIFRoZSBwYXJlbnQgcm91dGUgdG8gdXNlIGZvciB0aGlzIHJvdXRlLiBUaGlzIG9wdGlvblxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzIGF1dG9tYXRpY2FsbHkgc3VwcGxpZWQgd2hlbiBjcmVhdGluZyByb3V0ZXMgaW5zaWRlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGNhbGxiYWNrIHRvIGFub3RoZXIgaW52b2NhdGlvbiBvZiBjcmVhdGVSb3V0ZS4gWW91XG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgb25seSBldmVyIG5lZWQgdG8gdXNlIHRoaXMgd2hlbiBkZWNsYXJpbmcgcm91dGVzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXBlbmRlbnRseSBvZiBvbmUgYW5vdGhlciB0byBtYW51YWxseSBwaWVjZSB0b2dldGhlclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSByb3V0ZSBoaWVyYXJjaHlcbiAgICAgKlxuICAgICAqIFRoZSBjYWxsYmFjayBtYXkgYmUgdXNlZCB0byBzdHJ1Y3R1cmUgeW91ciByb3V0ZSBoaWVyYXJjaHkuIEFueSBjYWxsIHRvXG4gICAgICogY3JlYXRlUm91dGUsIGNyZWF0ZURlZmF1bHRSb3V0ZSwgY3JlYXRlTm90Rm91bmRSb3V0ZSwgb3IgY3JlYXRlUmVkaXJlY3RcbiAgICAgKiBpbnNpZGUgdGhlIGNhbGxiYWNrIGF1dG9tYXRpY2FsbHkgdXNlcyB0aGlzIHJvdXRlIGFzIGl0cyBwYXJlbnQuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVJvdXRlKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykgb3B0aW9ucyA9IHsgcGF0aDogb3B0aW9ucyB9O1xuXG4gICAgICB2YXIgcGFyZW50Um91dGUgPSBfY3VycmVudFJvdXRlO1xuXG4gICAgICBpZiAocGFyZW50Um91dGUpIHtcbiAgICAgICAgd2FybmluZyhvcHRpb25zLnBhcmVudFJvdXRlID09IG51bGwgfHwgb3B0aW9ucy5wYXJlbnRSb3V0ZSA9PT0gcGFyZW50Um91dGUsICdZb3Ugc2hvdWxkIG5vdCB1c2UgcGFyZW50Um91dGUgd2l0aCBjcmVhdGVSb3V0ZSBpbnNpZGUgYW5vdGhlciByb3V0ZVxcJ3MgY2hpbGQgY2FsbGJhY2s7IGl0IGlzIGlnbm9yZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudFJvdXRlID0gb3B0aW9ucy5wYXJlbnRSb3V0ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgICB2YXIgcGF0aCA9IG9wdGlvbnMucGF0aCB8fCBuYW1lO1xuXG4gICAgICBpZiAocGF0aCAmJiAhKG9wdGlvbnMuaXNEZWZhdWx0IHx8IG9wdGlvbnMuaXNOb3RGb3VuZCkpIHtcbiAgICAgICAgaWYgKFBhdGhVdGlscy5pc0Fic29sdXRlKHBhdGgpKSB7XG4gICAgICAgICAgaWYgKHBhcmVudFJvdXRlKSB7XG4gICAgICAgICAgICBpbnZhcmlhbnQocGF0aCA9PT0gcGFyZW50Um91dGUucGF0aCB8fCBwYXJlbnRSb3V0ZS5wYXJhbU5hbWVzLmxlbmd0aCA9PT0gMCwgJ1lvdSBjYW5ub3QgbmVzdCBwYXRoIFwiJXNcIiBpbnNpZGUgXCIlc1wiOyB0aGUgcGFyZW50IHJlcXVpcmVzIFVSTCBwYXJhbWV0ZXJzJywgcGF0aCwgcGFyZW50Um91dGUucGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBhcmVudFJvdXRlKSB7XG4gICAgICAgICAgLy8gUmVsYXRpdmUgcGF0aHMgZXh0ZW5kIHRoZWlyIHBhcmVudC5cbiAgICAgICAgICBwYXRoID0gUGF0aFV0aWxzLmpvaW4ocGFyZW50Um91dGUucGF0aCwgcGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGF0aCA9ICcvJyArIHBhdGg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGggPSBwYXJlbnRSb3V0ZSA/IHBhcmVudFJvdXRlLnBhdGggOiAnLyc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmlzTm90Rm91bmQgJiYgIS9cXCokLy50ZXN0KHBhdGgpKSBwYXRoICs9ICcqJzsgLy8gQXV0by1hcHBlbmQgKiB0byB0aGUgcGF0aCBvZiBub3QgZm91bmQgcm91dGVzLlxuXG4gICAgICB2YXIgcm91dGUgPSBuZXcgUm91dGUobmFtZSwgcGF0aCwgb3B0aW9ucy5pZ25vcmVTY3JvbGxCZWhhdmlvciwgb3B0aW9ucy5pc0RlZmF1bHQsIG9wdGlvbnMuaXNOb3RGb3VuZCwgb3B0aW9ucy5vbkVudGVyLCBvcHRpb25zLm9uTGVhdmUsIG9wdGlvbnMuaGFuZGxlcik7XG5cbiAgICAgIGlmIChwYXJlbnRSb3V0ZSkge1xuICAgICAgICBpZiAocm91dGUuaXNEZWZhdWx0KSB7XG4gICAgICAgICAgaW52YXJpYW50KHBhcmVudFJvdXRlLmRlZmF1bHRSb3V0ZSA9PSBudWxsLCAnJXMgbWF5IG5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgZGVmYXVsdCByb3V0ZScsIHBhcmVudFJvdXRlKTtcblxuICAgICAgICAgIHBhcmVudFJvdXRlLmRlZmF1bHRSb3V0ZSA9IHJvdXRlO1xuICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLmlzTm90Rm91bmQpIHtcbiAgICAgICAgICBpbnZhcmlhbnQocGFyZW50Um91dGUubm90Rm91bmRSb3V0ZSA9PSBudWxsLCAnJXMgbWF5IG5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgbm90IGZvdW5kIHJvdXRlJywgcGFyZW50Um91dGUpO1xuXG4gICAgICAgICAgcGFyZW50Um91dGUubm90Rm91bmRSb3V0ZSA9IHJvdXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50Um91dGUuYXBwZW5kQ2hpbGQocm91dGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBBbnkgcm91dGVzIGNyZWF0ZWQgaW4gdGhlIGNhbGxiYWNrXG4gICAgICAvLyB1c2UgdGhpcyByb3V0ZSBhcyB0aGVpciBwYXJlbnQuXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBjdXJyZW50Um91dGUgPSBfY3VycmVudFJvdXRlO1xuICAgICAgICBfY3VycmVudFJvdXRlID0gcm91dGU7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwocm91dGUsIHJvdXRlKTtcbiAgICAgICAgX2N1cnJlbnRSb3V0ZSA9IGN1cnJlbnRSb3V0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZURlZmF1bHRSb3V0ZScsXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgcm91dGUgdGhhdCBpcyByZW5kZXJlZCB3aGVuIGl0cyBwYXJlbnQgbWF0Y2hlc1xuICAgICAqIHRoZSBjdXJyZW50IFVSTC5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFJvdXRlKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBSb3V0ZS5jcmVhdGVSb3V0ZShhc3NpZ24oe30sIG9wdGlvbnMsIHsgaXNEZWZhdWx0OiB0cnVlIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVOb3RGb3VuZFJvdXRlJyxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSByb3V0ZSB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gaXRzIHBhcmVudCBtYXRjaGVzXG4gICAgICogdGhlIGN1cnJlbnQgVVJMIGJ1dCBub25lIG9mIGl0cyBzaWJsaW5ncyBkby5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTm90Rm91bmRSb3V0ZShvcHRpb25zKSB7XG4gICAgICByZXR1cm4gUm91dGUuY3JlYXRlUm91dGUoYXNzaWduKHt9LCBvcHRpb25zLCB7IGlzTm90Rm91bmQ6IHRydWUgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZVJlZGlyZWN0JyxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSByb3V0ZSB0aGF0IGF1dG9tYXRpY2FsbHkgcmVkaXJlY3RzIHRoZSB0cmFuc2l0aW9uXG4gICAgICogdG8gYW5vdGhlciByb3V0ZS4gSW4gYWRkaXRpb24gdG8gdGhlIG5vcm1hbCBvcHRpb25zIHRvIGNyZWF0ZVJvdXRlLCB0aGlzXG4gICAgICogZnVuY3Rpb24gYWNjZXB0cyB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAgICpcbiAgICAgKiAtIGZyb20gICAgICAgICBBbiBhbGlhcyBmb3IgdGhlIGBwYXRoYCBvcHRpb24uIERlZmF1bHRzIHRvICpcbiAgICAgKiAtIHRvICAgICAgICAgICBUaGUgcGF0aC9yb3V0ZS9yb3V0ZSBuYW1lIHRvIHJlZGlyZWN0IHRvXG4gICAgICogLSBwYXJhbXMgICAgICAgVGhlIHBhcmFtcyB0byB1c2UgaW4gdGhlIHJlZGlyZWN0IFVSTC4gRGVmYXVsdHNcbiAgICAgKiAgICAgICAgICAgICAgICB0byB1c2luZyB0aGUgY3VycmVudCBwYXJhbXNcbiAgICAgKiAtIHF1ZXJ5ICAgICAgICBUaGUgcXVlcnkgdG8gdXNlIGluIHRoZSByZWRpcmVjdCBVUkwuIERlZmF1bHRzXG4gICAgICogICAgICAgICAgICAgICAgdG8gdXNpbmcgdGhlIGN1cnJlbnQgcXVlcnlcbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUmVkaXJlY3Qob3B0aW9ucykge1xuICAgICAgcmV0dXJuIFJvdXRlLmNyZWF0ZVJvdXRlKGFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBwYXRoOiBvcHRpb25zLnBhdGggfHwgb3B0aW9ucy5mcm9tIHx8ICcqJyxcbiAgICAgICAgb25FbnRlcjogZnVuY3Rpb24gb25FbnRlcih0cmFuc2l0aW9uLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgICAgdHJhbnNpdGlvbi5yZWRpcmVjdChvcHRpb25zLnRvLCBvcHRpb25zLnBhcmFtcyB8fCBwYXJhbXMsIG9wdGlvbnMucXVlcnkgfHwgcXVlcnkpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvdXRlO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgY2FuVXNlRE9NID0gcmVxdWlyZSgncmVhY3QvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50JykuY2FuVXNlRE9NO1xudmFyIGdldFdpbmRvd1Njcm9sbFBvc2l0aW9uID0gcmVxdWlyZSgnLi9nZXRXaW5kb3dTY3JvbGxQb3NpdGlvbicpO1xuXG5mdW5jdGlvbiBzaG91bGRVcGRhdGVTY3JvbGwoc3RhdGUsIHByZXZTdGF0ZSkge1xuICBpZiAoIXByZXZTdGF0ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIERvbid0IHVwZGF0ZSBzY3JvbGwgcG9zaXRpb24gd2hlbiBvbmx5IHRoZSBxdWVyeSBoYXMgY2hhbmdlZC5cbiAgaWYgKHN0YXRlLnBhdGhuYW1lID09PSBwcmV2U3RhdGUucGF0aG5hbWUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH12YXIgcm91dGVzID0gc3RhdGUucm91dGVzO1xuICB2YXIgcHJldlJvdXRlcyA9IHByZXZTdGF0ZS5yb3V0ZXM7XG5cbiAgdmFyIHNoYXJlZEFuY2VzdG9yUm91dGVzID0gcm91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICByZXR1cm4gcHJldlJvdXRlcy5pbmRleE9mKHJvdXRlKSAhPT0gLTE7XG4gIH0pO1xuXG4gIHJldHVybiAhc2hhcmVkQW5jZXN0b3JSb3V0ZXMuc29tZShmdW5jdGlvbiAocm91dGUpIHtcbiAgICByZXR1cm4gcm91dGUuaWdub3JlU2Nyb2xsQmVoYXZpb3I7XG4gIH0pO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIHRoZSByb3V0ZXIgd2l0aCB0aGUgYWJpbGl0eSB0byBtYW5hZ2Ugd2luZG93IHNjcm9sbCBwb3NpdGlvblxuICogYWNjb3JkaW5nIHRvIGl0cyBzY3JvbGwgYmVoYXZpb3IuXG4gKi9cbnZhciBTY3JvbGxIaXN0b3J5ID0ge1xuXG4gIHN0YXRpY3M6IHtcblxuICAgIC8qKlxuICAgICAqIFJlY29yZHMgY3VyZW50IHNjcm9sbCBwb3NpdGlvbiBhcyB0aGUgbGFzdCBrbm93biBwb3NpdGlvbiBmb3IgdGhlIGdpdmVuIFVSTCBwYXRoLlxuICAgICAqL1xuICAgIHJlY29yZFNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbiByZWNvcmRTY3JvbGxQb3NpdGlvbihwYXRoKSB7XG4gICAgICBpZiAoIXRoaXMuc2Nyb2xsSGlzdG9yeSkgdGhpcy5zY3JvbGxIaXN0b3J5ID0ge307XG5cbiAgICAgIHRoaXMuc2Nyb2xsSGlzdG9yeVtwYXRoXSA9IGdldFdpbmRvd1Njcm9sbFBvc2l0aW9uKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhc3Qga25vd24gc2Nyb2xsIHBvc2l0aW9uIGZvciB0aGUgZ2l2ZW4gVVJMIHBhdGguXG4gICAgICovXG4gICAgZ2V0U2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uIGdldFNjcm9sbFBvc2l0aW9uKHBhdGgpIHtcbiAgICAgIGlmICghdGhpcy5zY3JvbGxIaXN0b3J5KSB0aGlzLnNjcm9sbEhpc3RvcnkgPSB7fTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsSGlzdG9yeVtwYXRoXSB8fCBudWxsO1xuICAgIH1cblxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGludmFyaWFudCh0aGlzLmNvbnN0cnVjdG9yLmdldFNjcm9sbEJlaGF2aW9yKCkgPT0gbnVsbCB8fCBjYW5Vc2VET00sICdDYW5ub3QgdXNlIHNjcm9sbCBiZWhhdmlvciB3aXRob3V0IGEgRE9NJyk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX3VwZGF0ZVNjcm9sbCgpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgdGhpcy5fdXBkYXRlU2Nyb2xsKHByZXZTdGF0ZSk7XG4gIH0sXG5cbiAgX3VwZGF0ZVNjcm9sbDogZnVuY3Rpb24gX3VwZGF0ZVNjcm9sbChwcmV2U3RhdGUpIHtcbiAgICBpZiAoIXNob3VsZFVwZGF0ZVNjcm9sbCh0aGlzLnN0YXRlLCBwcmV2U3RhdGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfXZhciBzY3JvbGxCZWhhdmlvciA9IHRoaXMuY29uc3RydWN0b3IuZ2V0U2Nyb2xsQmVoYXZpb3IoKTtcblxuICAgIGlmIChzY3JvbGxCZWhhdmlvcikgc2Nyb2xsQmVoYXZpb3IudXBkYXRlU2Nyb2xsUG9zaXRpb24odGhpcy5jb25zdHJ1Y3Rvci5nZXRTY3JvbGxQb3NpdGlvbih0aGlzLnN0YXRlLnBhdGgpLCB0aGlzLnN0YXRlLmFjdGlvbik7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGxIaXN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbi8qKlxuICogQSBtaXhpbiBmb3IgY29tcG9uZW50cyB0aGF0IG5lZWQgdG8ga25vdyB0aGUgcGF0aCwgcm91dGVzLCBVUkxcbiAqIHBhcmFtcyBhbmQgcXVlcnkgdGhhdCBhcmUgY3VycmVudGx5IGFjdGl2ZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgdmFyIEFib3V0TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAqICAgICBtaXhpbnM6IFsgUm91dGVyLlN0YXRlIF0sXG4gKiAgICAgcmVuZGVyKCkge1xuICogICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICpcbiAqICAgICAgIGlmICh0aGlzLmlzQWN0aXZlKCdhYm91dCcpKVxuICogICAgICAgICBjbGFzc05hbWUgKz0gJyBpcy1hY3RpdmUnO1xuICpcbiAqICAgICAgIHJldHVybiBSZWFjdC5ET00uYSh7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICogICAgIH1cbiAqICAgfSk7XG4gKi9cbnZhciBTdGF0ZSA9IHtcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICByb3V0ZXI6IFByb3BUeXBlcy5yb3V0ZXIuaXNSZXF1aXJlZFxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IFVSTCBwYXRoLlxuICAgKi9cbiAgZ2V0UGF0aDogZnVuY3Rpb24gZ2V0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UGF0aCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IFVSTCBwYXRoIHdpdGhvdXQgdGhlIHF1ZXJ5IHN0cmluZy5cbiAgICovXG4gIGdldFBhdGhuYW1lOiBmdW5jdGlvbiBnZXRQYXRobmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UGF0aG5hbWUoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3Qgb2YgdGhlIFVSTCBwYXJhbXMgdGhhdCBhcmUgY3VycmVudGx5IGFjdGl2ZS5cbiAgICovXG4gIGdldFBhcmFtczogZnVuY3Rpb24gZ2V0UGFyYW1zKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRQYXJhbXMoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3Qgb2YgdGhlIHF1ZXJ5IHBhcmFtcyB0aGF0IGFyZSBjdXJyZW50bHkgYWN0aXZlLlxuICAgKi9cbiAgZ2V0UXVlcnk6IGZ1bmN0aW9uIGdldFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRRdWVyeSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSByb3V0ZXMgdGhhdCBhcmUgY3VycmVudGx5IGFjdGl2ZS5cbiAgICovXG4gIGdldFJvdXRlczogZnVuY3Rpb24gZ2V0Um91dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRSb3V0ZXMoKTtcbiAgfSxcblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIGRldGVybWluZSBpZiBhIGdpdmVuIHJvdXRlLCBwYXJhbXMsIGFuZCBxdWVyeVxuICAgKiBhcmUgYWN0aXZlLlxuICAgKi9cbiAgaXNBY3RpdmU6IGZ1bmN0aW9uIGlzQWN0aXZlKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIuaXNBY3RpdmUodG8sIHBhcmFtcywgcXVlcnkpO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGU7IiwiLyoganNoaW50IC1XMDU4ICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbGxhdGlvbiA9IHJlcXVpcmUoJy4vQ2FuY2VsbGF0aW9uJyk7XG52YXIgUmVkaXJlY3QgPSByZXF1aXJlKCcuL1JlZGlyZWN0Jyk7XG5cbi8qKlxuICogRW5jYXBzdWxhdGVzIGEgdHJhbnNpdGlvbiB0byBhIGdpdmVuIHBhdGguXG4gKlxuICogVGhlIHdpbGxUcmFuc2l0aW9uVG8gYW5kIHdpbGxUcmFuc2l0aW9uRnJvbSBoYW5kbGVycyByZWNlaXZlXG4gKiBhbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGFzIHRoZWlyIGZpcnN0IGFyZ3VtZW50LlxuICovXG5mdW5jdGlvbiBUcmFuc2l0aW9uKHBhdGgsIHJldHJ5KSB7XG4gIHRoaXMucGF0aCA9IHBhdGg7XG4gIHRoaXMuYWJvcnRSZWFzb24gPSBudWxsO1xuICAvLyBUT0RPOiBDaGFuZ2UgdGhpcyB0byByb3V0ZXIucmV0cnlUcmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gIHRoaXMucmV0cnkgPSByZXRyeS5iaW5kKHRoaXMpO1xufVxuXG5UcmFuc2l0aW9uLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgaWYgKHRoaXMuYWJvcnRSZWFzb24gPT0gbnVsbCkgdGhpcy5hYm9ydFJlYXNvbiA9IHJlYXNvbiB8fCAnQUJPUlQnO1xufTtcblxuVHJhbnNpdGlvbi5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbiAodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgdGhpcy5hYm9ydChuZXcgUmVkaXJlY3QodG8sIHBhcmFtcywgcXVlcnkpKTtcbn07XG5cblRyYW5zaXRpb24ucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hYm9ydChuZXcgQ2FuY2VsbGF0aW9uKCkpO1xufTtcblxuVHJhbnNpdGlvbi5mcm9tID0gZnVuY3Rpb24gKHRyYW5zaXRpb24sIHJvdXRlcywgY29tcG9uZW50cywgY2FsbGJhY2spIHtcbiAgcm91dGVzLnJlZHVjZShmdW5jdGlvbiAoY2FsbGJhY2ssIHJvdXRlLCBpbmRleCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciB8fCB0cmFuc2l0aW9uLmFib3J0UmVhc29uKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAocm91dGUub25MZWF2ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlLm9uTGVhdmUodHJhbnNpdGlvbiwgY29tcG9uZW50c1tpbmRleF0sIGNhbGxiYWNrKTtcblxuICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGNhbGxiYWNrIGluIHRoZSBhcmd1bWVudCBsaXN0LCBjYWxsIGl0IGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAgaWYgKHJvdXRlLm9uTGVhdmUubGVuZ3RoIDwgMykgY2FsbGJhY2soKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIGNhbGxiYWNrKSgpO1xufTtcblxuVHJhbnNpdGlvbi50byA9IGZ1bmN0aW9uICh0cmFuc2l0aW9uLCByb3V0ZXMsIHBhcmFtcywgcXVlcnksIGNhbGxiYWNrKSB7XG4gIHJvdXRlcy5yZWR1Y2VSaWdodChmdW5jdGlvbiAoY2FsbGJhY2ssIHJvdXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIHx8IHRyYW5zaXRpb24uYWJvcnRSZWFzb24pIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChyb3V0ZS5vbkVudGVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGUub25FbnRlcih0cmFuc2l0aW9uLCBwYXJhbXMsIHF1ZXJ5LCBjYWxsYmFjayk7XG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBjYWxsYmFjayBpbiB0aGUgYXJndW1lbnQgbGlzdCwgY2FsbCBpdCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgIGlmIChyb3V0ZS5vbkVudGVyLmxlbmd0aCA8IDQpIGNhbGxiYWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBjYWxsYmFjaykoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNpdGlvbjsiLCIvKipcbiAqIEFjdGlvbnMgdGhhdCBtb2RpZnkgdGhlIFVSTC5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgTG9jYXRpb25BY3Rpb25zID0ge1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgYSBuZXcgbG9jYXRpb24gaXMgYmVpbmcgcHVzaGVkIHRvIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgKi9cbiAgUFVTSDogJ3B1c2gnLFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24gc2hvdWxkIGJlIHJlcGxhY2VkLlxuICAgKi9cbiAgUkVQTEFDRTogJ3JlcGxhY2UnLFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIG1vc3QgcmVjZW50IGVudHJ5IHNob3VsZCBiZSByZW1vdmVkIGZyb20gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAqL1xuICBQT1A6ICdwb3AnXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9jYXRpb25BY3Rpb25zOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIExvY2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zJyk7XG5cbi8qKlxuICogQSBzY3JvbGwgYmVoYXZpb3IgdGhhdCBhdHRlbXB0cyB0byBpbWl0YXRlIHRoZSBkZWZhdWx0IGJlaGF2aW9yXG4gKiBvZiBtb2Rlcm4gYnJvd3NlcnMuXG4gKi9cbnZhciBJbWl0YXRlQnJvd3NlckJlaGF2aW9yID0ge1xuXG4gIHVwZGF0ZVNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbiB1cGRhdGVTY3JvbGxQb3NpdGlvbihwb3NpdGlvbiwgYWN0aW9uVHlwZSkge1xuICAgIHN3aXRjaCAoYWN0aW9uVHlwZSkge1xuICAgICAgY2FzZSBMb2NhdGlvbkFjdGlvbnMuUFVTSDpcbiAgICAgIGNhc2UgTG9jYXRpb25BY3Rpb25zLlJFUExBQ0U6XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvY2F0aW9uQWN0aW9ucy5QT1A6XG4gICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyhwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW1pdGF0ZUJyb3dzZXJCZWhhdmlvcjsiLCIvKipcbiAqIEEgc2Nyb2xsIGJlaGF2aW9yIHRoYXQgYWx3YXlzIHNjcm9sbHMgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZVxuICogYWZ0ZXIgYSB0cmFuc2l0aW9uLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFNjcm9sbFRvVG9wQmVoYXZpb3IgPSB7XG5cbiAgdXBkYXRlU2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFBvc2l0aW9uKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbFRvVG9wQmVoYXZpb3I7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBuZWNlc3NhcnkgdG8gZ2V0IGFyb3VuZCBhIGNvbnRleHQgd2FybmluZ1xuICogcHJlc2VudCBpbiBSZWFjdCAwLjEzLjAuIEl0IHNvdmxlcyB0aGlzIGJ5IHByb3ZpZGluZyBhIHNlcGFyYXRpb25cbiAqIGJldHdlZW4gdGhlIFwib3duZXJcIiBhbmQgXCJwYXJlbnRcIiBjb250ZXh0cy5cbiAqL1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgQ29udGV4dFdyYXBwZXIgPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgZnVuY3Rpb24gQ29udGV4dFdyYXBwZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRleHRXcmFwcGVyKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoQ29udGV4dFdyYXBwZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhDb250ZXh0V3JhcHBlciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29udGV4dFdyYXBwZXI7XG59KShSZWFjdC5Db21wb25lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHRXcmFwcGVyOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcbnZhciBSb3V0ZUhhbmRsZXIgPSByZXF1aXJlKCcuL1JvdXRlSGFuZGxlcicpO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xuXG4vKipcbiAqIEEgPERlZmF1bHRSb3V0ZT4gY29tcG9uZW50IGlzIGEgc3BlY2lhbCBraW5kIG9mIDxSb3V0ZT4gdGhhdFxuICogcmVuZGVycyB3aGVuIGl0cyBwYXJlbnQgbWF0Y2hlcyBidXQgbm9uZSBvZiBpdHMgc2libGluZ3MgZG8uXG4gKiBPbmx5IG9uZSBzdWNoIHJvdXRlIG1heSBiZSB1c2VkIGF0IGFueSBnaXZlbiBsZXZlbCBpbiB0aGVcbiAqIHJvdXRlIGhpZXJhcmNoeS5cbiAqL1xuXG52YXIgRGVmYXVsdFJvdXRlID0gKGZ1bmN0aW9uIChfUm91dGUpIHtcbiAgZnVuY3Rpb24gRGVmYXVsdFJvdXRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZWZhdWx0Um91dGUpO1xuXG4gICAgaWYgKF9Sb3V0ZSAhPSBudWxsKSB7XG4gICAgICBfUm91dGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoRGVmYXVsdFJvdXRlLCBfUm91dGUpO1xuXG4gIHJldHVybiBEZWZhdWx0Um91dGU7XG59KShSb3V0ZSk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuRGVmYXVsdFJvdXRlLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGF0aDogUHJvcFR5cGVzLmZhbHN5LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZhbHN5LFxuICBoYW5kbGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5EZWZhdWx0Um91dGUuZGVmYXVsdFByb3BzID0ge1xuICBoYW5kbGVyOiBSb3V0ZUhhbmRsZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmYXVsdFJvdXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgncmVhY3QvbGliL09iamVjdC5hc3NpZ24nKTtcbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcblxuZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG4vKipcbiAqIDxMaW5rPiBjb21wb25lbnRzIGFyZSB1c2VkIHRvIGNyZWF0ZSBhbiA8YT4gZWxlbWVudCB0aGF0IGxpbmtzIHRvIGEgcm91dGUuXG4gKiBXaGVuIHRoYXQgcm91dGUgaXMgYWN0aXZlLCB0aGUgbGluayBnZXRzIGFuIFwiYWN0aXZlXCIgY2xhc3MgbmFtZSAob3IgdGhlXG4gKiB2YWx1ZSBvZiBpdHMgYGFjdGl2ZUNsYXNzTmFtZWAgcHJvcCkuXG4gKlxuICogRm9yIGV4YW1wbGUsIGFzc3VtaW5nIHlvdSBoYXZlIHRoZSBmb2xsb3dpbmcgcm91dGU6XG4gKlxuICogICA8Um91dGUgbmFtZT1cInNob3dQb3N0XCIgcGF0aD1cIi9wb3N0cy86cG9zdElEXCIgaGFuZGxlcj17UG9zdH0vPlxuICpcbiAqIFlvdSBjb3VsZCB1c2UgdGhlIGZvbGxvd2luZyBjb21wb25lbnQgdG8gbGluayB0byB0aGF0IHJvdXRlOlxuICpcbiAqICAgPExpbmsgdG89XCJzaG93UG9zdFwiIHBhcmFtcz17eyBwb3N0SUQ6IFwiMTIzXCIgfX0gLz5cbiAqXG4gKiBJbiBhZGRpdGlvbiB0byBwYXJhbXMsIGxpbmtzIG1heSBwYXNzIGFsb25nIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzXG4gKiB1c2luZyB0aGUgYHF1ZXJ5YCBwcm9wLlxuICpcbiAqICAgPExpbmsgdG89XCJzaG93UG9zdFwiIHBhcmFtcz17eyBwb3N0SUQ6IFwiMTIzXCIgfX0gcXVlcnk9e3sgc2hvdzp0cnVlIH19Lz5cbiAqL1xuXG52YXIgTGluayA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBMaW5rKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5rKTtcblxuICAgIGlmIChfUmVhY3QkQ29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoTGluaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKExpbmssIFt7XG4gICAga2V5OiAnaGFuZGxlQ2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgdmFyIGFsbG93VHJhbnNpdGlvbiA9IHRydWU7XG4gICAgICB2YXIgY2xpY2tSZXN1bHQ7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIGNsaWNrUmVzdWx0ID0gdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblxuICAgICAgaWYgKGlzTW9kaWZpZWRFdmVudChldmVudCkgfHwgIWlzTGVmdENsaWNrRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1pZiAoY2xpY2tSZXN1bHQgPT09IGZhbHNlIHx8IGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIGFsbG93VHJhbnNpdGlvbiA9IGZhbHNlO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoYWxsb3dUcmFuc2l0aW9uKSB0aGlzLmNvbnRleHQucm91dGVyLnRyYW5zaXRpb25Ubyh0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLnBhcmFtcywgdGhpcy5wcm9wcy5xdWVyeSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SHJlZicsXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgXCJocmVmXCIgYXR0cmlidXRlIHRvIHVzZSBvbiB0aGUgRE9NIGVsZW1lbnQuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEhyZWYoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5tYWtlSHJlZih0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLnBhcmFtcywgdGhpcy5wcm9wcy5xdWVyeSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2xhc3NOYW1lJyxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBcImNsYXNzXCIgYXR0cmlidXRlIHRvIHVzZSBvbiB0aGUgRE9NIGVsZW1lbnQsIHdoaWNoIGNvbnRhaW5zXG4gICAgICogdGhlIHZhbHVlIG9mIHRoZSBhY3RpdmVDbGFzc05hbWUgcHJvcGVydHkgd2hlbiB0aGlzIDxMaW5rPiBpcyBhY3RpdmUuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENsYXNzTmFtZSgpIHtcbiAgICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcblxuICAgICAgaWYgKHRoaXMuZ2V0QWN0aXZlU3RhdGUoKSkgY2xhc3NOYW1lICs9ICcgJyArIHRoaXMucHJvcHMuYWN0aXZlQ2xhc3NOYW1lO1xuXG4gICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEFjdGl2ZVN0YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWN0aXZlU3RhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnJvdXRlci5pc0FjdGl2ZSh0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLnBhcmFtcywgdGhpcy5wcm9wcy5xdWVyeSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHByb3BzID0gYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGhyZWY6IHRoaXMuZ2V0SHJlZigpLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuZ2V0Q2xhc3NOYW1lKCksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcm9wcy5hY3RpdmVTdHlsZSAmJiB0aGlzLmdldEFjdGl2ZVN0YXRlKCkpIHByb3BzLnN0eWxlID0gcHJvcHMuYWN0aXZlU3R5bGU7XG5cbiAgICAgIHJldHVybiBSZWFjdC5ET00uYShwcm9wcywgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpbms7XG59KShSZWFjdC5Db21wb25lbnQpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cbkxpbmsuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5yb3V0ZXIuaXNSZXF1aXJlZFxufTtcblxuTGluay5wcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0bzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLnJvdXRlXSkuaXNSZXF1aXJlZCxcbiAgcGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LFxuICBxdWVyeTogUHJvcFR5cGVzLm9iamVjdCxcbiAgYWN0aXZlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5MaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlQ2xhc3NOYW1lOiAnYWN0aXZlJyxcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcbnZhciBSb3V0ZUhhbmRsZXIgPSByZXF1aXJlKCcuL1JvdXRlSGFuZGxlcicpO1xudmFyIFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpO1xuXG4vKipcbiAqIEEgPE5vdEZvdW5kUm91dGU+IGlzIGEgc3BlY2lhbCBraW5kIG9mIDxSb3V0ZT4gdGhhdFxuICogcmVuZGVycyB3aGVuIHRoZSBiZWdpbm5pbmcgb2YgaXRzIHBhcmVudCdzIHBhdGggbWF0Y2hlc1xuICogYnV0IG5vbmUgb2YgaXRzIHNpYmxpbmdzIGRvLCBpbmNsdWRpbmcgYW55IDxEZWZhdWx0Um91dGU+LlxuICogT25seSBvbmUgc3VjaCByb3V0ZSBtYXkgYmUgdXNlZCBhdCBhbnkgZ2l2ZW4gbGV2ZWwgaW4gdGhlXG4gKiByb3V0ZSBoaWVyYXJjaHkuXG4gKi9cblxudmFyIE5vdEZvdW5kUm91dGUgPSAoZnVuY3Rpb24gKF9Sb3V0ZSkge1xuICBmdW5jdGlvbiBOb3RGb3VuZFJvdXRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb3RGb3VuZFJvdXRlKTtcblxuICAgIGlmIChfUm91dGUgIT0gbnVsbCkge1xuICAgICAgX1JvdXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKE5vdEZvdW5kUm91dGUsIF9Sb3V0ZSk7XG5cbiAgcmV0dXJuIE5vdEZvdW5kUm91dGU7XG59KShSb3V0ZSk7XG5cbi8vIFRPRE86IEluY2x1ZGUgdGhlc2UgaW4gdGhlIGFib3ZlIGNsYXNzIGRlZmluaXRpb25cbi8vIG9uY2Ugd2UgY2FuIHVzZSBFUzcgcHJvcGVydHkgaW5pdGlhbGl6ZXJzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy82MTlcblxuTm90Rm91bmRSb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhdGg6IFByb3BUeXBlcy5mYWxzeSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mYWxzeSxcbiAgaGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuTm90Rm91bmRSb3V0ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGhhbmRsZXI6IFJvdXRlSGFuZGxlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb3RGb3VuZFJvdXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCcuLi9Qcm9wVHlwZXMnKTtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxuLyoqXG4gKiBBIDxSZWRpcmVjdD4gY29tcG9uZW50IGlzIGEgc3BlY2lhbCBraW5kIG9mIDxSb3V0ZT4gdGhhdCBhbHdheXNcbiAqIHJlZGlyZWN0cyB0byBhbm90aGVyIHJvdXRlIHdoZW4gaXQgbWF0Y2hlcy5cbiAqL1xuXG52YXIgUmVkaXJlY3QgPSAoZnVuY3Rpb24gKF9Sb3V0ZSkge1xuICBmdW5jdGlvbiBSZWRpcmVjdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVkaXJlY3QpO1xuXG4gICAgaWYgKF9Sb3V0ZSAhPSBudWxsKSB7XG4gICAgICBfUm91dGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBfaW5oZXJpdHMoUmVkaXJlY3QsIF9Sb3V0ZSk7XG5cbiAgcmV0dXJuIFJlZGlyZWN0O1xufSkoUm91dGUpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cblJlZGlyZWN0LnByb3BUeXBlcyA9IHtcbiAgcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnJvbTogUHJvcFR5cGVzLnN0cmluZywgLy8gQWxpYXMgZm9yIHBhdGguXG4gIHRvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoYW5kbGVyOiBQcm9wVHlwZXMuZmFsc3lcbn07XG5cbi8vIFJlZGlyZWN0cyBzaG91bGQgbm90IGhhdmUgYSBkZWZhdWx0IGhhbmRsZXJcblJlZGlyZWN0LmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZGlyZWN0OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH07XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4uL1Byb3BUeXBlcycpO1xudmFyIFJvdXRlSGFuZGxlciA9IHJlcXVpcmUoJy4vUm91dGVIYW5kbGVyJyk7XG5cbi8qKlxuICogPFJvdXRlPiBjb21wb25lbnRzIHNwZWNpZnkgY29tcG9uZW50cyB0aGF0IGFyZSByZW5kZXJlZCB0byB0aGUgcGFnZSB3aGVuIHRoZVxuICogVVJMIG1hdGNoZXMgYSBnaXZlbiBwYXR0ZXJuLlxuICpcbiAqIFJvdXRlcyBhcmUgYXJyYW5nZWQgaW4gYSBuZXN0ZWQgdHJlZSBzdHJ1Y3R1cmUuIFdoZW4gYSBuZXcgVVJMIGlzIHJlcXVlc3RlZCxcbiAqIHRoZSB0cmVlIGlzIHNlYXJjaGVkIGRlcHRoLWZpcnN0IHRvIGZpbmQgYSByb3V0ZSB3aG9zZSBwYXRoIG1hdGNoZXMgdGhlIFVSTC5cbiAqIFdoZW4gb25lIGlzIGZvdW5kLCBhbGwgcm91dGVzIGluIHRoZSB0cmVlIHRoYXQgbGVhZCB0byBpdCBhcmUgY29uc2lkZXJlZFxuICogXCJhY3RpdmVcIiBhbmQgdGhlaXIgY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgaW50byB0aGUgRE9NLCBuZXN0ZWQgaW4gdGhlIHNhbWVcbiAqIG9yZGVyIGFzIHRoZXkgYXJlIGluIHRoZSB0cmVlLlxuICpcbiAqIFRoZSBwcmVmZXJyZWQgd2F5IHRvIGNvbmZpZ3VyZSBhIHJvdXRlciBpcyB1c2luZyBKU1guIFRoZSBYTUwtbGlrZSBzeW50YXggaXNcbiAqIGEgZ3JlYXQgd2F5IHRvIHZpc3VhbGl6ZSBob3cgcm91dGVzIGFyZSBsYWlkIG91dCBpbiBhbiBhcHBsaWNhdGlvbi5cbiAqXG4gKiAgIHZhciByb3V0ZXMgPSBbXG4gKiAgICAgPFJvdXRlIGhhbmRsZXI9e0FwcH0+XG4gKiAgICAgICA8Um91dGUgbmFtZT1cImxvZ2luXCIgaGFuZGxlcj17TG9naW59Lz5cbiAqICAgICAgIDxSb3V0ZSBuYW1lPVwibG9nb3V0XCIgaGFuZGxlcj17TG9nb3V0fS8+XG4gKiAgICAgICA8Um91dGUgbmFtZT1cImFib3V0XCIgaGFuZGxlcj17QWJvdXR9Lz5cbiAqICAgICA8L1JvdXRlPlxuICogICBdO1xuICogICBcbiAqICAgUm91dGVyLnJ1bihyb3V0ZXMsIGZ1bmN0aW9uIChIYW5kbGVyKSB7XG4gKiAgICAgUmVhY3QucmVuZGVyKDxIYW5kbGVyLz4sIGRvY3VtZW50LmJvZHkpO1xuICogICB9KTtcbiAqXG4gKiBIYW5kbGVycyBmb3IgUm91dGUgY29tcG9uZW50cyB0aGF0IGNvbnRhaW4gY2hpbGRyZW4gY2FuIHJlbmRlciB0aGVpciBhY3RpdmVcbiAqIGNoaWxkIHJvdXRlIHVzaW5nIGEgPFJvdXRlSGFuZGxlcj4gZWxlbWVudC5cbiAqXG4gKiAgIHZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gKiAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gKiAgICAgICByZXR1cm4gKFxuICogICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwbGljYXRpb25cIj5cbiAqICAgICAgICAgICA8Um91dGVIYW5kbGVyLz5cbiAqICAgICAgICAgPC9kaXY+XG4gKiAgICAgICApO1xuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogSWYgbm8gaGFuZGxlciBpcyBwcm92aWRlZCBmb3IgdGhlIHJvdXRlLCBpdCB3aWxsIHJlbmRlciBhIG1hdGNoZWQgY2hpbGQgcm91dGUuXG4gKi9cblxudmFyIFJvdXRlID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIGZ1bmN0aW9uIFJvdXRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZSk7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKFJvdXRlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoUm91dGUsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaW52YXJpYW50KGZhbHNlLCAnJXMgZWxlbWVudHMgYXJlIGZvciByb3V0ZXIgY29uZmlndXJhdGlvbiBvbmx5IGFuZCBzaG91bGQgbm90IGJlIHJlbmRlcmVkJywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUm91dGU7XG59KShSZWFjdC5Db21wb25lbnQpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cblJvdXRlLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGlnbm9yZVNjcm9sbEJlaGF2aW9yOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUm91dGUuZGVmYXVsdFByb3BzID0ge1xuICBoYW5kbGVyOiBSb3V0ZUhhbmRsZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUm91dGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBDb250ZXh0V3JhcHBlciA9IHJlcXVpcmUoJy4vQ29udGV4dFdyYXBwZXInKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdyZWFjdC9saWIvT2JqZWN0LmFzc2lnbicpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJy4uL1Byb3BUeXBlcycpO1xuXG52YXIgUkVGX05BTUUgPSAnX19yb3V0ZUhhbmRsZXJfXyc7XG5cbi8qKlxuICogQSA8Um91dGVIYW5kbGVyPiBjb21wb25lbnQgcmVuZGVycyB0aGUgYWN0aXZlIGNoaWxkIHJvdXRlIGhhbmRsZXJcbiAqIHdoZW4gcm91dGVzIGFyZSBuZXN0ZWQuXG4gKi9cblxudmFyIFJvdXRlSGFuZGxlciA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBSb3V0ZUhhbmRsZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlSGFuZGxlcik7XG5cbiAgICBpZiAoX1JlYWN0JENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKFJvdXRlSGFuZGxlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKFJvdXRlSGFuZGxlciwgW3tcbiAgICBrZXk6ICdnZXRDaGlsZENvbnRleHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZURlcHRoOiB0aGlzLmNvbnRleHQucm91dGVEZXB0aCArIDFcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJvdXRlQ29tcG9uZW50KHRoaXMucmVmc1tSRUZfTkFNRV0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJvdXRlQ29tcG9uZW50KHRoaXMucmVmc1tSRUZfTkFNRV0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLl91cGRhdGVSb3V0ZUNvbXBvbmVudChudWxsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfdXBkYXRlUm91dGVDb21wb25lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlUm91dGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNvbnRleHQucm91dGVyLnNldFJvdXRlQ29tcG9uZW50QXREZXB0aCh0aGlzLmdldFJvdXRlRGVwdGgoKSwgY29tcG9uZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRSb3V0ZURlcHRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um91dGVEZXB0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQucm91dGVEZXB0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVDaGlsZFJvdXRlSGFuZGxlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUNoaWxkUm91dGVIYW5kbGVyKHByb3BzKSB7XG4gICAgICB2YXIgcm91dGUgPSB0aGlzLmNvbnRleHQucm91dGVyLmdldFJvdXRlQXREZXB0aCh0aGlzLmdldFJvdXRlRGVwdGgoKSk7XG5cbiAgICAgIGlmIChyb3V0ZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfXZhciBjaGlsZFByb3BzID0gYXNzaWduKHt9LCBwcm9wcyB8fCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJlZjogUkVGX05BTUUsXG4gICAgICAgIHBhcmFtczogdGhpcy5jb250ZXh0LnJvdXRlci5nZXRDdXJyZW50UGFyYW1zKCksXG4gICAgICAgIHF1ZXJ5OiB0aGlzLmNvbnRleHQucm91dGVyLmdldEN1cnJlbnRRdWVyeSgpXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocm91dGUuaGFuZGxlciwgY2hpbGRQcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGhhbmRsZXIgPSB0aGlzLmNyZWF0ZUNoaWxkUm91dGVIYW5kbGVyKCk7XG4gICAgICAvLyA8c2NyaXB0Lz4gZm9yIHRoaW5ncyBsaWtlIDxDU1NUcmFuc2l0aW9uR3JvdXAvPiB0aGF0IGRvbid0IGxpa2UgbnVsbFxuICAgICAgcmV0dXJuIGhhbmRsZXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBDb250ZXh0V3JhcHBlcixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaGFuZGxlclxuICAgICAgKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcsIG51bGwpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSb3V0ZUhhbmRsZXI7XG59KShSZWFjdC5Db21wb25lbnQpO1xuXG4vLyBUT0RPOiBJbmNsdWRlIHRoZXNlIGluIHRoZSBhYm92ZSBjbGFzcyBkZWZpbml0aW9uXG4vLyBvbmNlIHdlIGNhbiB1c2UgRVM3IHByb3BlcnR5IGluaXRpYWxpemVycy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvNjE5XG5cblJvdXRlSGFuZGxlci5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlRGVwdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcm91dGVyOiBQcm9wVHlwZXMucm91dGVyLmlzUmVxdWlyZWRcbn07XG5cblJvdXRlSGFuZGxlci5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVEZXB0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlSGFuZGxlcjsiLCIvKiBqc2hpbnQgLVcwNTggKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgncmVhY3QvbGliL3dhcm5pbmcnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgY2FuVXNlRE9NID0gcmVxdWlyZSgncmVhY3QvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50JykuY2FuVXNlRE9NO1xudmFyIExvY2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9Mb2NhdGlvbkFjdGlvbnMnKTtcbnZhciBJbWl0YXRlQnJvd3NlckJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvcnMvSW1pdGF0ZUJyb3dzZXJCZWhhdmlvcicpO1xudmFyIEhhc2hMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL0hhc2hMb2NhdGlvbicpO1xudmFyIEhpc3RvcnlMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL0hpc3RvcnlMb2NhdGlvbicpO1xudmFyIFJlZnJlc2hMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL1JlZnJlc2hMb2NhdGlvbicpO1xudmFyIFN0YXRpY0xvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvU3RhdGljTG9jYXRpb24nKTtcbnZhciBTY3JvbGxIaXN0b3J5ID0gcmVxdWlyZSgnLi9TY3JvbGxIaXN0b3J5Jyk7XG52YXIgY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4gPSByZXF1aXJlKCcuL2NyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuJyk7XG52YXIgaXNSZWFjdENoaWxkcmVuID0gcmVxdWlyZSgnLi9pc1JlYWN0Q2hpbGRyZW4nKTtcbnZhciBUcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uJyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9Qcm9wVHlwZXMnKTtcbnZhciBSZWRpcmVjdCA9IHJlcXVpcmUoJy4vUmVkaXJlY3QnKTtcbnZhciBIaXN0b3J5ID0gcmVxdWlyZSgnLi9IaXN0b3J5Jyk7XG52YXIgQ2FuY2VsbGF0aW9uID0gcmVxdWlyZSgnLi9DYW5jZWxsYXRpb24nKTtcbnZhciBNYXRjaCA9IHJlcXVpcmUoJy4vTWF0Y2gnKTtcbnZhciBSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKTtcbnZhciBzdXBwb3J0c0hpc3RvcnkgPSByZXF1aXJlKCcuL3N1cHBvcnRzSGlzdG9yeScpO1xudmFyIFBhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgbG9jYXRpb24gZm9yIG5ldyByb3V0ZXJzLlxuICovXG52YXIgREVGQVVMVF9MT0NBVElPTiA9IGNhblVzZURPTSA/IEhhc2hMb2NhdGlvbiA6ICcvJztcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBzY3JvbGwgYmVoYXZpb3IgZm9yIG5ldyByb3V0ZXJzLlxuICovXG52YXIgREVGQVVMVF9TQ1JPTExfQkVIQVZJT1IgPSBjYW5Vc2VET00gPyBJbWl0YXRlQnJvd3NlckJlaGF2aW9yIDogbnVsbDtcblxuZnVuY3Rpb24gaGFzUHJvcGVydGllcyhvYmplY3QsIHByb3BlcnRpZXMpIHtcbiAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiYgb2JqZWN0W3Byb3BlcnR5TmFtZV0gIT09IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfXJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBoYXNNYXRjaChyb3V0ZXMsIHJvdXRlLCBwcmV2UGFyYW1zLCBuZXh0UGFyYW1zLCBwcmV2UXVlcnksIG5leHRRdWVyeSkge1xuICByZXR1cm4gcm91dGVzLnNvbWUoZnVuY3Rpb24gKHIpIHtcbiAgICBpZiAociAhPT0gcm91dGUpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBwYXJhbU5hbWVzID0gcm91dGUucGFyYW1OYW1lcztcbiAgICB2YXIgcGFyYW1OYW1lO1xuXG4gICAgLy8gRW5zdXJlIHRoYXQgYWxsIHBhcmFtcyB0aGUgcm91dGUgY2FyZXMgYWJvdXQgZGlkIG5vdCBjaGFuZ2UuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhcmFtTmFtZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHBhcmFtTmFtZSA9IHBhcmFtTmFtZXNbaV07XG5cbiAgICAgIGlmIChuZXh0UGFyYW1zW3BhcmFtTmFtZV0gIT09IHByZXZQYXJhbXNbcGFyYW1OYW1lXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZSB0aGUgcXVlcnkgaGFzbid0IGNoYW5nZWQuXG4gICAgcmV0dXJuIGhhc1Byb3BlcnRpZXMocHJldlF1ZXJ5LCBuZXh0UXVlcnkpICYmIGhhc1Byb3BlcnRpZXMobmV4dFF1ZXJ5LCBwcmV2UXVlcnkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUm91dGVzVG9OYW1lZFJvdXRlcyhyb3V0ZXMsIG5hbWVkUm91dGVzKSB7XG4gIHZhciByb3V0ZTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJvdXRlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHJvdXRlID0gcm91dGVzW2ldO1xuXG4gICAgaWYgKHJvdXRlLm5hbWUpIHtcbiAgICAgIGludmFyaWFudChuYW1lZFJvdXRlc1tyb3V0ZS5uYW1lXSA9PSBudWxsLCAnWW91IG1heSBub3QgaGF2ZSBtb3JlIHRoYW4gb25lIHJvdXRlIG5hbWVkIFwiJXNcIicsIHJvdXRlLm5hbWUpO1xuXG4gICAgICBuYW1lZFJvdXRlc1tyb3V0ZS5uYW1lXSA9IHJvdXRlO1xuICAgIH1cblxuICAgIGlmIChyb3V0ZS5jaGlsZFJvdXRlcykgYWRkUm91dGVzVG9OYW1lZFJvdXRlcyhyb3V0ZS5jaGlsZFJvdXRlcywgbmFtZWRSb3V0ZXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJvdXRlSXNBY3RpdmUoYWN0aXZlUm91dGVzLCByb3V0ZU5hbWUpIHtcbiAgcmV0dXJuIGFjdGl2ZVJvdXRlcy5zb21lKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIHJldHVybiByb3V0ZS5uYW1lID09PSByb3V0ZU5hbWU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJhbXNBcmVBY3RpdmUoYWN0aXZlUGFyYW1zLCBwYXJhbXMpIHtcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gcGFyYW1zKSBpZiAoU3RyaW5nKGFjdGl2ZVBhcmFtc1twcm9wZXJ0eV0pICE9PSBTdHJpbmcocGFyYW1zW3Byb3BlcnR5XSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1yZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcXVlcnlJc0FjdGl2ZShhY3RpdmVRdWVyeSwgcXVlcnkpIHtcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gcXVlcnkpIGlmIChTdHJpbmcoYWN0aXZlUXVlcnlbcHJvcGVydHldKSAhPT0gU3RyaW5nKHF1ZXJ5W3Byb3BlcnR5XSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1yZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgbmV3IHJvdXRlciB1c2luZyB0aGUgZ2l2ZW4gb3B0aW9ucy4gQSByb3V0ZXJcbiAqIGlzIGEgUmVhY3RDb21wb25lbnQgY2xhc3MgdGhhdCBrbm93cyBob3cgdG8gcmVhY3QgdG8gY2hhbmdlcyBpbiB0aGVcbiAqIFVSTCBhbmQga2VlcCB0aGUgY29udGVudHMgb2YgdGhlIHBhZ2UgaW4gc3luYy5cbiAqXG4gKiBPcHRpb25zIG1heSBiZSBhbnkgb2YgdGhlIGZvbGxvd2luZzpcbiAqXG4gKiAtIHJvdXRlcyAgICAgICAgICAgKHJlcXVpcmVkKSBUaGUgcm91dGUgY29uZmlnXG4gKiAtIGxvY2F0aW9uICAgICAgICAgVGhlIGxvY2F0aW9uIHRvIHVzZS4gRGVmYXVsdHMgdG8gSGFzaExvY2F0aW9uIHdoZW5cbiAqICAgICAgICAgICAgICAgICAgICB0aGUgRE9NIGlzIGF2YWlsYWJsZSwgXCIvXCIgb3RoZXJ3aXNlXG4gKiAtIHNjcm9sbEJlaGF2aW9yICAgVGhlIHNjcm9sbCBiZWhhdmlvciB0byB1c2UuIERlZmF1bHRzIHRvIEltaXRhdGVCcm93c2VyQmVoYXZpb3JcbiAqICAgICAgICAgICAgICAgICAgICB3aGVuIHRoZSBET00gaXMgYXZhaWxhYmxlLCBudWxsIG90aGVyd2lzZVxuICogLSBvbkVycm9yICAgICAgICAgIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGhhbmRsZSBlcnJvcnNcbiAqIC0gb25BYm9ydCAgICAgICAgICBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byBoYW5kbGUgYWJvcnRlZCB0cmFuc2l0aW9uc1xuICpcbiAqIFdoZW4gcmVuZGVyaW5nIGluIGEgc2VydmVyLXNpZGUgZW52aXJvbm1lbnQsIHRoZSBsb2NhdGlvbiBzaG91bGQgc2ltcGx5XG4gKiBiZSB0aGUgVVJMIHBhdGggdGhhdCB3YXMgdXNlZCBpbiB0aGUgcmVxdWVzdCwgaW5jbHVkaW5nIHRoZSBxdWVyeSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlcihvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmIChpc1JlYWN0Q2hpbGRyZW4ob3B0aW9ucykpIG9wdGlvbnMgPSB7IHJvdXRlczogb3B0aW9ucyB9O1xuXG4gIHZhciBtb3VudGVkQ29tcG9uZW50cyA9IFtdO1xuICB2YXIgbG9jYXRpb24gPSBvcHRpb25zLmxvY2F0aW9uIHx8IERFRkFVTFRfTE9DQVRJT047XG4gIHZhciBzY3JvbGxCZWhhdmlvciA9IG9wdGlvbnMuc2Nyb2xsQmVoYXZpb3IgfHwgREVGQVVMVF9TQ1JPTExfQkVIQVZJT1I7XG4gIHZhciBzdGF0ZSA9IHt9O1xuICB2YXIgbmV4dFN0YXRlID0ge307XG4gIHZhciBwZW5kaW5nVHJhbnNpdGlvbiA9IG51bGw7XG4gIHZhciBkaXNwYXRjaEhhbmRsZXIgPSBudWxsO1xuXG4gIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICdzdHJpbmcnKSBsb2NhdGlvbiA9IG5ldyBTdGF0aWNMb2NhdGlvbihsb2NhdGlvbik7XG5cbiAgaWYgKGxvY2F0aW9uIGluc3RhbmNlb2YgU3RhdGljTG9jYXRpb24pIHtcbiAgICB3YXJuaW5nKCFjYW5Vc2VET00gfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JywgJ1lvdSBzaG91bGQgbm90IHVzZSBhIHN0YXRpYyBsb2NhdGlvbiBpbiBhIERPTSBlbnZpcm9ubWVudCBiZWNhdXNlICcgKyAndGhlIHJvdXRlciB3aWxsIG5vdCBiZSBrZXB0IGluIHN5bmMgd2l0aCB0aGUgY3VycmVudCBVUkwnKTtcbiAgfSBlbHNlIHtcbiAgICBpbnZhcmlhbnQoY2FuVXNlRE9NIHx8IGxvY2F0aW9uLm5lZWRzRE9NID09PSBmYWxzZSwgJ1lvdSBjYW5ub3QgdXNlICVzIHdpdGhvdXQgYSBET00nLCBsb2NhdGlvbik7XG4gIH1cblxuICAvLyBBdXRvbWF0aWNhbGx5IGZhbGwgYmFjayB0byBmdWxsIHBhZ2UgcmVmcmVzaGVzIGluXG4gIC8vIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgSFRNTCBoaXN0b3J5IEFQSS5cbiAgaWYgKGxvY2F0aW9uID09PSBIaXN0b3J5TG9jYXRpb24gJiYgIXN1cHBvcnRzSGlzdG9yeSgpKSBsb2NhdGlvbiA9IFJlZnJlc2hMb2NhdGlvbjtcblxuICB2YXIgUm91dGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gICAgZGlzcGxheU5hbWU6ICdSb3V0ZXInLFxuXG4gICAgc3RhdGljczoge1xuXG4gICAgICBpc1J1bm5pbmc6IGZhbHNlLFxuXG4gICAgICBjYW5jZWxQZW5kaW5nVHJhbnNpdGlvbjogZnVuY3Rpb24gY2FuY2VsUGVuZGluZ1RyYW5zaXRpb24oKSB7XG4gICAgICAgIGlmIChwZW5kaW5nVHJhbnNpdGlvbikge1xuICAgICAgICAgIHBlbmRpbmdUcmFuc2l0aW9uLmNhbmNlbCgpO1xuICAgICAgICAgIHBlbmRpbmdUcmFuc2l0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgY2xlYXJBbGxSb3V0ZXM6IGZ1bmN0aW9uIGNsZWFyQWxsUm91dGVzKCkge1xuICAgICAgICBSb3V0ZXIuY2FuY2VsUGVuZGluZ1RyYW5zaXRpb24oKTtcbiAgICAgICAgUm91dGVyLm5hbWVkUm91dGVzID0ge307XG4gICAgICAgIFJvdXRlci5yb3V0ZXMgPSBbXTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQWRkcyByb3V0ZXMgdG8gdGhpcyByb3V0ZXIgZnJvbSB0aGUgZ2l2ZW4gY2hpbGRyZW4gb2JqZWN0IChzZWUgUmVhY3RDaGlsZHJlbikuXG4gICAgICAgKi9cbiAgICAgIGFkZFJvdXRlczogZnVuY3Rpb24gYWRkUm91dGVzKHJvdXRlcykge1xuICAgICAgICBpZiAoaXNSZWFjdENoaWxkcmVuKHJvdXRlcykpIHJvdXRlcyA9IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKHJvdXRlcyk7XG5cbiAgICAgICAgYWRkUm91dGVzVG9OYW1lZFJvdXRlcyhyb3V0ZXMsIFJvdXRlci5uYW1lZFJvdXRlcyk7XG5cbiAgICAgICAgUm91dGVyLnJvdXRlcy5wdXNoLmFwcGx5KFJvdXRlci5yb3V0ZXMsIHJvdXRlcyk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJlcGxhY2VzIHJvdXRlcyBvZiB0aGlzIHJvdXRlciBmcm9tIHRoZSBnaXZlbiBjaGlsZHJlbiBvYmplY3QgKHNlZSBSZWFjdENoaWxkcmVuKS5cbiAgICAgICAqL1xuICAgICAgcmVwbGFjZVJvdXRlczogZnVuY3Rpb24gcmVwbGFjZVJvdXRlcyhyb3V0ZXMpIHtcbiAgICAgICAgUm91dGVyLmNsZWFyQWxsUm91dGVzKCk7XG4gICAgICAgIFJvdXRlci5hZGRSb3V0ZXMocm91dGVzKTtcbiAgICAgICAgUm91dGVyLnJlZnJlc2goKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUGVyZm9ybXMgYSBtYXRjaCBvZiB0aGUgZ2l2ZW4gcGF0aCBhZ2FpbnN0IHRoaXMgcm91dGVyIGFuZCByZXR1cm5zIGFuIG9iamVjdFxuICAgICAgICogd2l0aCB0aGUgeyByb3V0ZXMsIHBhcmFtcywgcGF0aG5hbWUsIHF1ZXJ5IH0gdGhhdCBtYXRjaC4gUmV0dXJucyBudWxsIGlmIG5vXG4gICAgICAgKiBtYXRjaCBjYW4gYmUgbWFkZS5cbiAgICAgICAqL1xuICAgICAgbWF0Y2g6IGZ1bmN0aW9uIG1hdGNoKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGNoLmZpbmRNYXRjaChSb3V0ZXIucm91dGVzLCBwYXRoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyBhbiBhYnNvbHV0ZSBVUkwgcGF0aCBjcmVhdGVkIGZyb20gdGhlIGdpdmVuIHJvdXRlXG4gICAgICAgKiBuYW1lLCBVUkwgcGFyYW1ldGVycywgYW5kIHF1ZXJ5LlxuICAgICAgICovXG4gICAgICBtYWtlUGF0aDogZnVuY3Rpb24gbWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgdmFyIHBhdGg7XG4gICAgICAgIGlmIChQYXRoVXRpbHMuaXNBYnNvbHV0ZSh0bykpIHtcbiAgICAgICAgICBwYXRoID0gdG87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHJvdXRlID0gdG8gaW5zdGFuY2VvZiBSb3V0ZSA/IHRvIDogUm91dGVyLm5hbWVkUm91dGVzW3RvXTtcblxuICAgICAgICAgIGludmFyaWFudChyb3V0ZSBpbnN0YW5jZW9mIFJvdXRlLCAnQ2Fubm90IGZpbmQgYSByb3V0ZSBuYW1lZCBcIiVzXCInLCB0byk7XG5cbiAgICAgICAgICBwYXRoID0gcm91dGUucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQYXRoVXRpbHMud2l0aFF1ZXJ5KFBhdGhVdGlscy5pbmplY3RQYXJhbXMocGF0aCwgcGFyYW1zKSwgcXVlcnkpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgbWF5IHNhZmVseSBiZSB1c2VkIGFzIHRoZSBocmVmIG9mIGEgbGlua1xuICAgICAgICogdG8gdGhlIHJvdXRlIHdpdGggdGhlIGdpdmVuIG5hbWUsIFVSTCBwYXJhbWV0ZXJzLCBhbmQgcXVlcnkuXG4gICAgICAgKi9cbiAgICAgIG1ha2VIcmVmOiBmdW5jdGlvbiBtYWtlSHJlZih0bywgcGFyYW1zLCBxdWVyeSkge1xuICAgICAgICB2YXIgcGF0aCA9IFJvdXRlci5tYWtlUGF0aCh0bywgcGFyYW1zLCBxdWVyeSk7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbiA9PT0gSGFzaExvY2F0aW9uID8gJyMnICsgcGF0aCA6IHBhdGg7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5zaXRpb25zIHRvIHRoZSBVUkwgc3BlY2lmaWVkIGluIHRoZSBhcmd1bWVudHMgYnkgcHVzaGluZ1xuICAgICAgICogYSBuZXcgVVJMIG9udG8gdGhlIGhpc3Rvcnkgc3RhY2suXG4gICAgICAgKi9cbiAgICAgIHRyYW5zaXRpb25UbzogZnVuY3Rpb24gdHJhbnNpdGlvblRvKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgIHZhciBwYXRoID0gUm91dGVyLm1ha2VQYXRoKHRvLCBwYXJhbXMsIHF1ZXJ5KTtcblxuICAgICAgICBpZiAocGVuZGluZ1RyYW5zaXRpb24pIHtcbiAgICAgICAgICAvLyBSZXBsYWNlIHNvIHBlbmRpbmcgbG9jYXRpb24gZG9lcyBub3Qgc3RheSBpbiBoaXN0b3J5LlxuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UocGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9jYXRpb24ucHVzaChwYXRoKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUcmFuc2l0aW9ucyB0byB0aGUgVVJMIHNwZWNpZmllZCBpbiB0aGUgYXJndW1lbnRzIGJ5IHJlcGxhY2luZ1xuICAgICAgICogdGhlIGN1cnJlbnQgVVJMIGluIHRoZSBoaXN0b3J5IHN0YWNrLlxuICAgICAgICovXG4gICAgICByZXBsYWNlV2l0aDogZnVuY3Rpb24gcmVwbGFjZVdpdGgodG8sIHBhcmFtcywgcXVlcnkpIHtcbiAgICAgICAgbG9jYXRpb24ucmVwbGFjZShSb3V0ZXIubWFrZVBhdGgodG8sIHBhcmFtcywgcXVlcnkpKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNpdGlvbnMgdG8gdGhlIHByZXZpb3VzIFVSTCBpZiBvbmUgaXMgYXZhaWxhYmxlLiBSZXR1cm5zIHRydWUgaWYgdGhlXG4gICAgICAgKiByb3V0ZXIgd2FzIGFibGUgdG8gZ28gYmFjaywgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICpcbiAgICAgICAqIE5vdGU6IFRoZSByb3V0ZXIgb25seSB0cmFja3MgaGlzdG9yeSBlbnRyaWVzIGluIHlvdXIgYXBwbGljYXRpb24sIG5vdCB0aGVcbiAgICAgICAqIGN1cnJlbnQgYnJvd3NlciBzZXNzaW9uLCBzbyB5b3UgY2FuIHNhZmVseSBjYWxsIHRoaXMgZnVuY3Rpb24gd2l0aG91dCBndWFyZGluZ1xuICAgICAgICogYWdhaW5zdCBzZW5kaW5nIHRoZSB1c2VyIGJhY2sgdG8gc29tZSBvdGhlciBzaXRlLiBIb3dldmVyLCB3aGVuIHVzaW5nXG4gICAgICAgKiBSZWZyZXNoTG9jYXRpb24gKHdoaWNoIGlzIHRoZSBmYWxsYmFjayBmb3IgSGlzdG9yeUxvY2F0aW9uIGluIGJyb3dzZXJzIHRoYXRcbiAgICAgICAqIGRvbid0IHN1cHBvcnQgSFRNTDUgaGlzdG9yeSkgdGhpcyBtZXRob2Qgd2lsbCAqYWx3YXlzKiBzZW5kIHRoZSBjbGllbnQgYmFja1xuICAgICAgICogYmVjYXVzZSB3ZSBjYW5ub3QgcmVsaWFibHkgdHJhY2sgaGlzdG9yeSBsZW5ndGguXG4gICAgICAgKi9cbiAgICAgIGdvQmFjazogZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgICAgICBpZiAoSGlzdG9yeS5sZW5ndGggPiAxIHx8IGxvY2F0aW9uID09PSBSZWZyZXNoTG9jYXRpb24pIHtcbiAgICAgICAgICBsb2NhdGlvbi5wb3AoKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdhcm5pbmcoZmFsc2UsICdnb0JhY2soKSB3YXMgaWdub3JlZCBiZWNhdXNlIHRoZXJlIGlzIG5vIHJvdXRlciBoaXN0b3J5Jyk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcblxuICAgICAgaGFuZGxlQWJvcnQ6IG9wdGlvbnMub25BYm9ydCB8fCBmdW5jdGlvbiAoYWJvcnRSZWFzb24pIHtcbiAgICAgICAgaWYgKGxvY2F0aW9uIGluc3RhbmNlb2YgU3RhdGljTG9jYXRpb24pIHRocm93IG5ldyBFcnJvcignVW5oYW5kbGVkIGFib3J0ZWQgdHJhbnNpdGlvbiEgUmVhc29uOiAnICsgYWJvcnRSZWFzb24pO1xuXG4gICAgICAgIGlmIChhYm9ydFJlYXNvbiBpbnN0YW5jZW9mIENhbmNlbGxhdGlvbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChhYm9ydFJlYXNvbiBpbnN0YW5jZW9mIFJlZGlyZWN0KSB7XG4gICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShSb3V0ZXIubWFrZVBhdGgoYWJvcnRSZWFzb24udG8sIGFib3J0UmVhc29uLnBhcmFtcywgYWJvcnRSZWFzb24ucXVlcnkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2NhdGlvbi5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgaGFuZGxlRXJyb3I6IG9wdGlvbnMub25FcnJvciB8fCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgLy8gVGhyb3cgc28gd2UgZG9uJ3Qgc2lsZW50bHkgc3dhbGxvdyBhc3luYyBlcnJvcnMuXG4gICAgICAgIHRocm93IGVycm9yOyAvLyBUaGlzIGVycm9yIHByb2JhYmx5IG9yaWdpbmF0ZWQgaW4gYSB0cmFuc2l0aW9uIGhvb2suXG4gICAgICB9LFxuXG4gICAgICBoYW5kbGVMb2NhdGlvbkNoYW5nZTogZnVuY3Rpb24gaGFuZGxlTG9jYXRpb25DaGFuZ2UoY2hhbmdlKSB7XG4gICAgICAgIFJvdXRlci5kaXNwYXRjaChjaGFuZ2UucGF0aCwgY2hhbmdlLnR5cGUpO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBQZXJmb3JtcyBhIHRyYW5zaXRpb24gdG8gdGhlIGdpdmVuIHBhdGggYW5kIGNhbGxzIGNhbGxiYWNrKGVycm9yLCBhYm9ydFJlYXNvbilcbiAgICAgICAqIHdoZW4gdGhlIHRyYW5zaXRpb24gaXMgZmluaXNoZWQuIElmIGJvdGggYXJndW1lbnRzIGFyZSBudWxsIHRoZSByb3V0ZXIncyBzdGF0ZVxuICAgICAgICogd2FzIHVwZGF0ZWQuIE90aGVyd2lzZSB0aGUgdHJhbnNpdGlvbiBkaWQgbm90IGNvbXBsZXRlLlxuICAgICAgICpcbiAgICAgICAqIEluIGEgdHJhbnNpdGlvbiwgYSByb3V0ZXIgZmlyc3QgZGV0ZXJtaW5lcyB3aGljaCByb3V0ZXMgYXJlIGludm9sdmVkIGJ5IGJlZ2lubmluZ1xuICAgICAgICogd2l0aCB0aGUgY3VycmVudCByb3V0ZSwgdXAgdGhlIHJvdXRlIHRyZWUgdG8gdGhlIGZpcnN0IHBhcmVudCByb3V0ZSB0aGF0IGlzIHNoYXJlZFxuICAgICAgICogd2l0aCB0aGUgZGVzdGluYXRpb24gcm91dGUsIGFuZCBiYWNrIGRvd24gdGhlIHRyZWUgdG8gdGhlIGRlc3RpbmF0aW9uIHJvdXRlLiBUaGVcbiAgICAgICAqIHdpbGxUcmFuc2l0aW9uRnJvbSBob29rIGlzIGludm9rZWQgb24gYWxsIHJvdXRlIGhhbmRsZXJzIHdlJ3JlIHRyYW5zaXRpb25pbmcgYXdheVxuICAgICAgICogZnJvbSwgaW4gcmV2ZXJzZSBuZXN0aW5nIG9yZGVyLiBMaWtld2lzZSwgdGhlIHdpbGxUcmFuc2l0aW9uVG8gaG9vayBpcyBpbnZva2VkIG9uXG4gICAgICAgKiBhbGwgcm91dGUgaGFuZGxlcnMgd2UncmUgdHJhbnNpdGlvbmluZyB0by5cbiAgICAgICAqXG4gICAgICAgKiBCb3RoIHdpbGxUcmFuc2l0aW9uRnJvbSBhbmQgd2lsbFRyYW5zaXRpb25UbyBob29rcyBtYXkgZWl0aGVyIGFib3J0IG9yIHJlZGlyZWN0IHRoZVxuICAgICAgICogdHJhbnNpdGlvbi4gVG8gcmVzb2x2ZSBhc3luY2hyb25vdXNseSwgdGhleSBtYXkgdXNlIHRoZSBjYWxsYmFjayBhcmd1bWVudC4gSWYgbm9cbiAgICAgICAqIGhvb2tzIHdhaXQsIHRoZSB0cmFuc2l0aW9uIGlzIGZ1bGx5IHN5bmNocm9ub3VzLlxuICAgICAgICovXG4gICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2gocGF0aCwgYWN0aW9uKSB7XG4gICAgICAgIFJvdXRlci5jYW5jZWxQZW5kaW5nVHJhbnNpdGlvbigpO1xuXG4gICAgICAgIHZhciBwcmV2UGF0aCA9IHN0YXRlLnBhdGg7XG4gICAgICAgIHZhciBpc1JlZnJlc2hpbmcgPSBhY3Rpb24gPT0gbnVsbDtcblxuICAgICAgICBpZiAocHJldlBhdGggPT09IHBhdGggJiYgIWlzUmVmcmVzaGluZykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBOb3RoaW5nIHRvIGRvIVxuXG4gICAgICAgIC8vIFJlY29yZCB0aGUgc2Nyb2xsIHBvc2l0aW9uIGFzIGVhcmx5IGFzIHBvc3NpYmxlIHRvXG4gICAgICAgIC8vIGdldCBpdCBiZWZvcmUgYnJvd3NlcnMgdHJ5IHVwZGF0ZSBpdCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICBpZiAocHJldlBhdGggJiYgYWN0aW9uID09PSBMb2NhdGlvbkFjdGlvbnMuUFVTSCkgUm91dGVyLnJlY29yZFNjcm9sbFBvc2l0aW9uKHByZXZQYXRoKTtcblxuICAgICAgICB2YXIgbWF0Y2ggPSBSb3V0ZXIubWF0Y2gocGF0aCk7XG5cbiAgICAgICAgd2FybmluZyhtYXRjaCAhPSBudWxsLCAnTm8gcm91dGUgbWF0Y2hlcyBwYXRoIFwiJXNcIi4gTWFrZSBzdXJlIHlvdSBoYXZlIDxSb3V0ZSBwYXRoPVwiJXNcIj4gc29tZXdoZXJlIGluIHlvdXIgcm91dGVzJywgcGF0aCwgcGF0aCk7XG5cbiAgICAgICAgaWYgKG1hdGNoID09IG51bGwpIG1hdGNoID0ge307XG5cbiAgICAgICAgdmFyIHByZXZSb3V0ZXMgPSBzdGF0ZS5yb3V0ZXMgfHwgW107XG4gICAgICAgIHZhciBwcmV2UGFyYW1zID0gc3RhdGUucGFyYW1zIHx8IHt9O1xuICAgICAgICB2YXIgcHJldlF1ZXJ5ID0gc3RhdGUucXVlcnkgfHwge307XG5cbiAgICAgICAgdmFyIG5leHRSb3V0ZXMgPSBtYXRjaC5yb3V0ZXMgfHwgW107XG4gICAgICAgIHZhciBuZXh0UGFyYW1zID0gbWF0Y2gucGFyYW1zIHx8IHt9O1xuICAgICAgICB2YXIgbmV4dFF1ZXJ5ID0gbWF0Y2gucXVlcnkgfHwge307XG5cbiAgICAgICAgdmFyIGZyb21Sb3V0ZXMsIHRvUm91dGVzO1xuICAgICAgICBpZiAocHJldlJvdXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICBmcm9tUm91dGVzID0gcHJldlJvdXRlcy5maWx0ZXIoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gIWhhc01hdGNoKG5leHRSb3V0ZXMsIHJvdXRlLCBwcmV2UGFyYW1zLCBuZXh0UGFyYW1zLCBwcmV2UXVlcnksIG5leHRRdWVyeSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0b1JvdXRlcyA9IG5leHRSb3V0ZXMuZmlsdGVyKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNNYXRjaChwcmV2Um91dGVzLCByb3V0ZSwgcHJldlBhcmFtcywgbmV4dFBhcmFtcywgcHJldlF1ZXJ5LCBuZXh0UXVlcnkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZyb21Sb3V0ZXMgPSBbXTtcbiAgICAgICAgICB0b1JvdXRlcyA9IG5leHRSb3V0ZXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHBhdGgsIFJvdXRlci5yZXBsYWNlV2l0aC5iaW5kKFJvdXRlciwgcGF0aCkpO1xuICAgICAgICBwZW5kaW5nVHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG5cbiAgICAgICAgdmFyIGZyb21Db21wb25lbnRzID0gbW91bnRlZENvbXBvbmVudHMuc2xpY2UocHJldlJvdXRlcy5sZW5ndGggLSBmcm9tUm91dGVzLmxlbmd0aCk7XG5cbiAgICAgICAgVHJhbnNpdGlvbi5mcm9tKHRyYW5zaXRpb24sIGZyb21Sb3V0ZXMsIGZyb21Db21wb25lbnRzLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAoZXJyb3IgfHwgdHJhbnNpdGlvbi5hYm9ydFJlYXNvbikgcmV0dXJuIGRpc3BhdGNoSGFuZGxlci5jYWxsKFJvdXRlciwgZXJyb3IsIHRyYW5zaXRpb24pOyAvLyBObyBuZWVkIHRvIGNvbnRpbnVlLlxuXG4gICAgICAgICAgVHJhbnNpdGlvbi50byh0cmFuc2l0aW9uLCB0b1JvdXRlcywgbmV4dFBhcmFtcywgbmV4dFF1ZXJ5LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoSGFuZGxlci5jYWxsKFJvdXRlciwgZXJyb3IsIHRyYW5zaXRpb24sIHtcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBtYXRjaC5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcm91dGVzOiBuZXh0Um91dGVzLFxuICAgICAgICAgICAgICBwYXJhbXM6IG5leHRQYXJhbXMsXG4gICAgICAgICAgICAgIHF1ZXJ5OiBuZXh0UXVlcnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU3RhcnRzIHRoaXMgcm91dGVyIGFuZCBjYWxscyBjYWxsYmFjayhyb3V0ZXIsIHN0YXRlKSB3aGVuIHRoZSByb3V0ZSBjaGFuZ2VzLlxuICAgICAgICpcbiAgICAgICAqIElmIHRoZSByb3V0ZXIncyBsb2NhdGlvbiBpcyBzdGF0aWMgKGkuZS4gYSBVUkwgcGF0aCBpbiBhIHNlcnZlciBlbnZpcm9ubWVudClcbiAgICAgICAqIHRoZSBjYWxsYmFjayBpcyBjYWxsZWQgb25seSBvbmNlLiBPdGhlcndpc2UsIHRoZSBsb2NhdGlvbiBzaG91bGQgYmUgb25lIG9mIHRoZVxuICAgICAgICogUm91dGVyLipMb2NhdGlvbiBvYmplY3RzIChlLmcuIFJvdXRlci5IYXNoTG9jYXRpb24gb3IgUm91dGVyLkhpc3RvcnlMb2NhdGlvbikuXG4gICAgICAgKi9cbiAgICAgIHJ1bjogZnVuY3Rpb24gcnVuKGNhbGxiYWNrKSB7XG4gICAgICAgIGludmFyaWFudCghUm91dGVyLmlzUnVubmluZywgJ1JvdXRlciBpcyBhbHJlYWR5IHJ1bm5pbmcnKTtcblxuICAgICAgICBkaXNwYXRjaEhhbmRsZXIgPSBmdW5jdGlvbiAoZXJyb3IsIHRyYW5zaXRpb24sIG5ld1N0YXRlKSB7XG4gICAgICAgICAgaWYgKGVycm9yKSBSb3V0ZXIuaGFuZGxlRXJyb3IoZXJyb3IpO1xuXG4gICAgICAgICAgaWYgKHBlbmRpbmdUcmFuc2l0aW9uICE9PSB0cmFuc2l0aW9uKSByZXR1cm47XG5cbiAgICAgICAgICBwZW5kaW5nVHJhbnNpdGlvbiA9IG51bGw7XG5cbiAgICAgICAgICBpZiAodHJhbnNpdGlvbi5hYm9ydFJlYXNvbikge1xuICAgICAgICAgICAgUm91dGVyLmhhbmRsZUFib3J0KHRyYW5zaXRpb24uYWJvcnRSZWFzb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKFJvdXRlciwgUm91dGVyLCBuZXh0U3RhdGUgPSBuZXdTdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghKGxvY2F0aW9uIGluc3RhbmNlb2YgU3RhdGljTG9jYXRpb24pKSB7XG4gICAgICAgICAgaWYgKGxvY2F0aW9uLmFkZENoYW5nZUxpc3RlbmVyKSBsb2NhdGlvbi5hZGRDaGFuZ2VMaXN0ZW5lcihSb3V0ZXIuaGFuZGxlTG9jYXRpb25DaGFuZ2UpO1xuXG4gICAgICAgICAgUm91dGVyLmlzUnVubmluZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCb290c3RyYXAgdXNpbmcgdGhlIGN1cnJlbnQgcGF0aC5cbiAgICAgICAgUm91dGVyLnJlZnJlc2goKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlZnJlc2g6IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgICAgIFJvdXRlci5kaXNwYXRjaChsb2NhdGlvbi5nZXRDdXJyZW50UGF0aCgpLCBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIFJvdXRlci5jYW5jZWxQZW5kaW5nVHJhbnNpdGlvbigpO1xuXG4gICAgICAgIGlmIChsb2NhdGlvbi5yZW1vdmVDaGFuZ2VMaXN0ZW5lcikgbG9jYXRpb24ucmVtb3ZlQ2hhbmdlTGlzdGVuZXIoUm91dGVyLmhhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcblxuICAgICAgICBSb3V0ZXIuaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICBnZXRMb2NhdGlvbjogZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICAgIH0sXG5cbiAgICAgIGdldFNjcm9sbEJlaGF2aW9yOiBmdW5jdGlvbiBnZXRTY3JvbGxCZWhhdmlvcigpIHtcbiAgICAgICAgcmV0dXJuIHNjcm9sbEJlaGF2aW9yO1xuICAgICAgfSxcblxuICAgICAgZ2V0Um91dGVBdERlcHRoOiBmdW5jdGlvbiBnZXRSb3V0ZUF0RGVwdGgocm91dGVEZXB0aCkge1xuICAgICAgICB2YXIgcm91dGVzID0gc3RhdGUucm91dGVzO1xuICAgICAgICByZXR1cm4gcm91dGVzICYmIHJvdXRlc1tyb3V0ZURlcHRoXTtcbiAgICAgIH0sXG5cbiAgICAgIHNldFJvdXRlQ29tcG9uZW50QXREZXB0aDogZnVuY3Rpb24gc2V0Um91dGVDb21wb25lbnRBdERlcHRoKHJvdXRlRGVwdGgsIGNvbXBvbmVudCkge1xuICAgICAgICBtb3VudGVkQ29tcG9uZW50c1tyb3V0ZURlcHRoXSA9IGNvbXBvbmVudDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgY3VycmVudCBVUkwgcGF0aCArIHF1ZXJ5IHN0cmluZy5cbiAgICAgICAqL1xuICAgICAgZ2V0Q3VycmVudFBhdGg6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRoKCkge1xuICAgICAgICByZXR1cm4gc3RhdGUucGF0aDtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgY3VycmVudCBVUkwgcGF0aCB3aXRob3V0IHRoZSBxdWVyeSBzdHJpbmcuXG4gICAgICAgKi9cbiAgICAgIGdldEN1cnJlbnRQYXRobmFtZTogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGhuYW1lKCkge1xuICAgICAgICByZXR1cm4gc3RhdGUucGF0aG5hbWU7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIFVSTCBwYXJhbWV0ZXJzLlxuICAgICAgICovXG4gICAgICBnZXRDdXJyZW50UGFyYW1zOiBmdW5jdGlvbiBnZXRDdXJyZW50UGFyYW1zKCkge1xuICAgICAgICByZXR1cm4gc3RhdGUucGFyYW1zO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSBxdWVyeSBwYXJhbWV0ZXJzLlxuICAgICAgICovXG4gICAgICBnZXRDdXJyZW50UXVlcnk6IGZ1bmN0aW9uIGdldEN1cnJlbnRRdWVyeSgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnF1ZXJ5O1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIHJvdXRlcy5cbiAgICAgICAqL1xuICAgICAgZ2V0Q3VycmVudFJvdXRlczogZnVuY3Rpb24gZ2V0Q3VycmVudFJvdXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnJvdXRlcztcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiByb3V0ZSwgcGFyYW1zLCBhbmQgcXVlcnkgYXJlIGFjdGl2ZS5cbiAgICAgICAqL1xuICAgICAgaXNBY3RpdmU6IGZ1bmN0aW9uIGlzQWN0aXZlKHRvLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgICAgIGlmIChQYXRoVXRpbHMuaXNBYnNvbHV0ZSh0bykpIHtcbiAgICAgICAgICByZXR1cm4gdG8gPT09IHN0YXRlLnBhdGg7XG4gICAgICAgIH1yZXR1cm4gcm91dGVJc0FjdGl2ZShzdGF0ZS5yb3V0ZXMsIHRvKSAmJiBwYXJhbXNBcmVBY3RpdmUoc3RhdGUucGFyYW1zLCBwYXJhbXMpICYmIChxdWVyeSA9PSBudWxsIHx8IHF1ZXJ5SXNBY3RpdmUoc3RhdGUucXVlcnksIHF1ZXJ5KSk7XG4gICAgICB9XG5cbiAgICB9LFxuXG4gICAgbWl4aW5zOiBbU2Nyb2xsSGlzdG9yeV0sXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZmFsc3lcbiAgICB9LFxuXG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgICAgIHJvdXRlRGVwdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHJvdXRlcjogUHJvcFR5cGVzLnJvdXRlci5pc1JlcXVpcmVkXG4gICAgfSxcblxuICAgIGdldENoaWxkQ29udGV4dDogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGVEZXB0aDogMSxcbiAgICAgICAgcm91dGVyOiBSb3V0ZXJcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlID0gbmV4dFN0YXRlO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9IG5leHRTdGF0ZSk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIFJvdXRlci5zdG9wKCk7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHJvdXRlID0gUm91dGVyLmdldFJvdXRlQXREZXB0aCgwKTtcbiAgICAgIHJldHVybiByb3V0ZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQocm91dGUuaGFuZGxlciwgdGhpcy5wcm9wcykgOiBudWxsO1xuICAgIH1cblxuICB9KTtcblxuICBSb3V0ZXIuY2xlYXJBbGxSb3V0ZXMoKTtcblxuICBpZiAob3B0aW9ucy5yb3V0ZXMpIFJvdXRlci5hZGRSb3V0ZXMob3B0aW9ucy5yb3V0ZXMpO1xuXG4gIHJldHVybiBSb3V0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUm91dGVyOyIsIi8qIGpzaGludCAtVzA4NCAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9PYmplY3QuYXNzaWduJyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi93YXJuaW5nJyk7XG52YXIgRGVmYXVsdFJvdXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0RlZmF1bHRSb3V0ZScpO1xudmFyIE5vdEZvdW5kUm91dGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTm90Rm91bmRSb3V0ZScpO1xudmFyIFJlZGlyZWN0ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1JlZGlyZWN0Jyk7XG52YXIgUm91dGUgPSByZXF1aXJlKCcuL1JvdXRlJyk7XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKGNvbXBvbmVudE5hbWUsIHByb3BUeXBlcywgcHJvcHMpIHtcbiAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgJ1Vua25vd25Db21wb25lbnQnO1xuXG4gIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BUeXBlcykge1xuICAgIGlmIChwcm9wVHlwZXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICB2YXIgZXJyb3IgPSBwcm9wVHlwZXNbcHJvcE5hbWVdKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB3YXJuaW5nKGZhbHNlLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVPcHRpb25zKHByb3BzKSB7XG4gIHZhciBvcHRpb25zID0gYXNzaWduKHt9LCBwcm9wcyk7XG4gIHZhciBoYW5kbGVyID0gb3B0aW9ucy5oYW5kbGVyO1xuXG4gIGlmIChoYW5kbGVyKSB7XG4gICAgb3B0aW9ucy5vbkVudGVyID0gaGFuZGxlci53aWxsVHJhbnNpdGlvblRvO1xuICAgIG9wdGlvbnMub25MZWF2ZSA9IGhhbmRsZXIud2lsbFRyYW5zaXRpb25Gcm9tO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChlbGVtZW50KSB7XG4gIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH12YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcbiAgdmFyIHByb3BzID0gYXNzaWduKHt9LCB0eXBlLmRlZmF1bHRQcm9wcywgZWxlbWVudC5wcm9wcyk7XG5cbiAgaWYgKHR5cGUucHJvcFR5cGVzKSBjaGVja1Byb3BUeXBlcyh0eXBlLmRpc3BsYXlOYW1lLCB0eXBlLnByb3BUeXBlcywgcHJvcHMpO1xuXG4gIGlmICh0eXBlID09PSBEZWZhdWx0Um91dGUpIHtcbiAgICByZXR1cm4gUm91dGUuY3JlYXRlRGVmYXVsdFJvdXRlKGNyZWF0ZVJvdXRlT3B0aW9ucyhwcm9wcykpO1xuICB9aWYgKHR5cGUgPT09IE5vdEZvdW5kUm91dGUpIHtcbiAgICByZXR1cm4gUm91dGUuY3JlYXRlTm90Rm91bmRSb3V0ZShjcmVhdGVSb3V0ZU9wdGlvbnMocHJvcHMpKTtcbiAgfWlmICh0eXBlID09PSBSZWRpcmVjdCkge1xuICAgIHJldHVybiBSb3V0ZS5jcmVhdGVSZWRpcmVjdChjcmVhdGVSb3V0ZU9wdGlvbnMocHJvcHMpKTtcbiAgfXJldHVybiBSb3V0ZS5jcmVhdGVSb3V0ZShjcmVhdGVSb3V0ZU9wdGlvbnMocHJvcHMpLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb3BzLmNoaWxkcmVuKSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYW4gYXJyYXkgb2Ygcm91dGVzIGNyZWF0ZWQgZnJvbSB0aGUgZ2l2ZW5cbiAqIFJlYWN0Q2hpbGRyZW4sIGFsbCBvZiB3aGljaCBzaG91bGQgYmUgb25lIG9mIDxSb3V0ZT4sIDxEZWZhdWx0Um91dGU+LFxuICogPE5vdEZvdW5kUm91dGU+LCBvciA8UmVkaXJlY3Q+LCBlLmcuOlxuICpcbiAqICAgdmFyIHsgY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4sIFJvdXRlLCBSZWRpcmVjdCB9ID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG4gKlxuICogICB2YXIgcm91dGVzID0gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4oXG4gKiAgICAgPFJvdXRlIHBhdGg9XCIvXCIgaGFuZGxlcj17QXBwfT5cbiAqICAgICAgIDxSb3V0ZSBuYW1lPVwidXNlclwiIHBhdGg9XCIvdXNlci86dXNlcklkXCIgaGFuZGxlcj17VXNlcn0+XG4gKiAgICAgICAgIDxSb3V0ZSBuYW1lPVwidGFza1wiIHBhdGg9XCJ0YXNrcy86dGFza0lkXCIgaGFuZGxlcj17VGFza30vPlxuICogICAgICAgICA8UmVkaXJlY3QgZnJvbT1cInRvZG9zLzp0YXNrSWRcIiB0bz1cInRhc2tcIi8+XG4gKiAgICAgICA8L1JvdXRlPlxuICogICAgIDwvUm91dGU+XG4gKiAgICk7XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciByb3V0ZXMgPSBbXTtcblxuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQgPSBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoY2hpbGQpKSByb3V0ZXMucHVzaChjaGlsZCk7XG4gIH0pO1xuXG4gIHJldHVybiByb3V0ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW47IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgncmVhY3QvbGliL2ludmFyaWFudCcpO1xudmFyIGNhblVzZURPTSA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudCcpLmNhblVzZURPTTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgd2luZG93IGFzIHsgeCwgeSB9LlxuICovXG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxQb3NpdGlvbigpIHtcbiAgaW52YXJpYW50KGNhblVzZURPTSwgJ0Nhbm5vdCBnZXQgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gd2l0aG91dCBhIERPTScpO1xuXG4gIHJldHVybiB7XG4gICAgeDogd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0V2luZG93U2Nyb2xsUG9zaXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLkRlZmF1bHRSb3V0ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9EZWZhdWx0Um91dGUnKTtcbmV4cG9ydHMuTGluayA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9MaW5rJyk7XG5leHBvcnRzLk5vdEZvdW5kUm91dGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTm90Rm91bmRSb3V0ZScpO1xuZXhwb3J0cy5SZWRpcmVjdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9SZWRpcmVjdCcpO1xuZXhwb3J0cy5Sb3V0ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Sb3V0ZScpO1xuZXhwb3J0cy5BY3RpdmVIYW5kbGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1JvdXRlSGFuZGxlcicpO1xuZXhwb3J0cy5Sb3V0ZUhhbmRsZXIgPSBleHBvcnRzLkFjdGl2ZUhhbmRsZXI7XG5cbmV4cG9ydHMuSGFzaExvY2F0aW9uID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvSGFzaExvY2F0aW9uJyk7XG5leHBvcnRzLkhpc3RvcnlMb2NhdGlvbiA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL0hpc3RvcnlMb2NhdGlvbicpO1xuZXhwb3J0cy5SZWZyZXNoTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9SZWZyZXNoTG9jYXRpb24nKTtcbmV4cG9ydHMuU3RhdGljTG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9TdGF0aWNMb2NhdGlvbicpO1xuZXhwb3J0cy5UZXN0TG9jYXRpb24gPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9UZXN0TG9jYXRpb24nKTtcblxuZXhwb3J0cy5JbWl0YXRlQnJvd3NlckJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvcnMvSW1pdGF0ZUJyb3dzZXJCZWhhdmlvcicpO1xuZXhwb3J0cy5TY3JvbGxUb1RvcEJlaGF2aW9yID0gcmVxdWlyZSgnLi9iZWhhdmlvcnMvU2Nyb2xsVG9Ub3BCZWhhdmlvcicpO1xuXG5leHBvcnRzLkhpc3RvcnkgPSByZXF1aXJlKCcuL0hpc3RvcnknKTtcbmV4cG9ydHMuTmF2aWdhdGlvbiA9IHJlcXVpcmUoJy4vTmF2aWdhdGlvbicpO1xuZXhwb3J0cy5TdGF0ZSA9IHJlcXVpcmUoJy4vU3RhdGUnKTtcblxuZXhwb3J0cy5jcmVhdGVSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKS5jcmVhdGVSb3V0ZTtcbmV4cG9ydHMuY3JlYXRlRGVmYXVsdFJvdXRlID0gcmVxdWlyZSgnLi9Sb3V0ZScpLmNyZWF0ZURlZmF1bHRSb3V0ZTtcbmV4cG9ydHMuY3JlYXRlTm90Rm91bmRSb3V0ZSA9IHJlcXVpcmUoJy4vUm91dGUnKS5jcmVhdGVOb3RGb3VuZFJvdXRlO1xuZXhwb3J0cy5jcmVhdGVSZWRpcmVjdCA9IHJlcXVpcmUoJy4vUm91dGUnKS5jcmVhdGVSZWRpcmVjdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4gPSByZXF1aXJlKCcuL2NyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuJyk7XG5cbmV4cG9ydHMuY3JlYXRlID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXInKTtcbmV4cG9ydHMucnVuID0gcmVxdWlyZSgnLi9ydW5Sb3V0ZXInKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIGlzVmFsaWRDaGlsZChvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsIHx8IFJlYWN0LmlzVmFsaWRFbGVtZW50KG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGlzUmVhY3RDaGlsZHJlbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzVmFsaWRDaGlsZChvYmplY3QpIHx8IEFycmF5LmlzQXJyYXkob2JqZWN0KSAmJiBvYmplY3QuZXZlcnkoaXNWYWxpZENoaWxkKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1JlYWN0Q2hpbGRyZW47IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTG9jYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Mb2NhdGlvbkFjdGlvbnMnKTtcbnZhciBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vSGlzdG9yeScpO1xuXG52YXIgX2xpc3RlbmVycyA9IFtdO1xudmFyIF9pc0xpc3RlbmluZyA9IGZhbHNlO1xudmFyIF9hY3Rpb25UeXBlO1xuXG5mdW5jdGlvbiBub3RpZnlDaGFuZ2UodHlwZSkge1xuICBpZiAodHlwZSA9PT0gTG9jYXRpb25BY3Rpb25zLlBVU0gpIEhpc3RvcnkubGVuZ3RoICs9IDE7XG5cbiAgdmFyIGNoYW5nZSA9IHtcbiAgICBwYXRoOiBIYXNoTG9jYXRpb24uZ2V0Q3VycmVudFBhdGgoKSxcbiAgICB0eXBlOiB0eXBlXG4gIH07XG5cbiAgX2xpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIGxpc3RlbmVyLmNhbGwoSGFzaExvY2F0aW9uLCBjaGFuZ2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZW5zdXJlU2xhc2goKSB7XG4gIHZhciBwYXRoID0gSGFzaExvY2F0aW9uLmdldEN1cnJlbnRQYXRoKCk7XG5cbiAgaWYgKHBhdGguY2hhckF0KDApID09PSAnLycpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfUhhc2hMb2NhdGlvbi5yZXBsYWNlKCcvJyArIHBhdGgpO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gb25IYXNoQ2hhbmdlKCkge1xuICBpZiAoZW5zdXJlU2xhc2goKSkge1xuICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYW4gX2FjdGlvblR5cGUgdGhlbiBhbGwgd2Uga25vdyBpcyB0aGUgaGFzaFxuICAgIC8vIGNoYW5nZWQuIEl0IHdhcyBwcm9iYWJseSBjYXVzZWQgYnkgdGhlIHVzZXIgY2xpY2tpbmcgdGhlIEJhY2tcbiAgICAvLyBidXR0b24sIGJ1dCBtYXkgaGF2ZSBhbHNvIGJlZW4gdGhlIEZvcndhcmQgYnV0dG9uIG9yIG1hbnVhbFxuICAgIC8vIG1hbmlwdWxhdGlvbi4gU28ganVzdCBndWVzcyAncG9wJy5cbiAgICB2YXIgY3VyQWN0aW9uVHlwZSA9IF9hY3Rpb25UeXBlO1xuICAgIF9hY3Rpb25UeXBlID0gbnVsbDtcbiAgICBub3RpZnlDaGFuZ2UoY3VyQWN0aW9uVHlwZSB8fCBMb2NhdGlvbkFjdGlvbnMuUE9QKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgTG9jYXRpb24gdGhhdCB1c2VzIGB3aW5kb3cubG9jYXRpb24uaGFzaGAuXG4gKi9cbnZhciBIYXNoTG9jYXRpb24gPSB7XG5cbiAgYWRkQ2hhbmdlTGlzdGVuZXI6IGZ1bmN0aW9uIGFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIC8vIERvIHRoaXMgQkVGT1JFIGxpc3RlbmluZyBmb3IgaGFzaGNoYW5nZS5cbiAgICBlbnN1cmVTbGFzaCgpO1xuXG4gICAgaWYgKCFfaXNMaXN0ZW5pbmcpIHtcbiAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbmhhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UpO1xuICAgICAgfVxuXG4gICAgICBfaXNMaXN0ZW5pbmcgPSB0cnVlO1xuICAgIH1cbiAgfSxcblxuICByZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBfbGlzdGVuZXJzID0gX2xpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGwpIHtcbiAgICAgIHJldHVybiBsICE9PSBsaXN0ZW5lcjtcbiAgICB9KTtcblxuICAgIGlmIChfbGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnQoJ29uaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIF9pc0xpc3RlbmluZyA9IGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKHBhdGgpIHtcbiAgICBfYWN0aW9uVHlwZSA9IExvY2F0aW9uQWN0aW9ucy5QVVNIO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aDtcbiAgfSxcblxuICByZXBsYWNlOiBmdW5jdGlvbiByZXBsYWNlKHBhdGgpIHtcbiAgICBfYWN0aW9uVHlwZSA9IExvY2F0aW9uQWN0aW9ucy5SRVBMQUNFO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXRoKTtcbiAgfSxcblxuICBwb3A6IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICBfYWN0aW9uVHlwZSA9IExvY2F0aW9uQWN0aW9ucy5QT1A7XG4gICAgSGlzdG9yeS5iYWNrKCk7XG4gIH0sXG5cbiAgZ2V0Q3VycmVudFBhdGg6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRoKCkge1xuICAgIHJldHVybiBkZWNvZGVVUkkoXG4gICAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAgIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVsxXSB8fCAnJyk7XG4gIH0sXG5cbiAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnPEhhc2hMb2NhdGlvbj4nO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaExvY2F0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIExvY2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvTG9jYXRpb25BY3Rpb25zJyk7XG52YXIgSGlzdG9yeSA9IHJlcXVpcmUoJy4uL0hpc3RvcnknKTtcblxudmFyIF9saXN0ZW5lcnMgPSBbXTtcbnZhciBfaXNMaXN0ZW5pbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gbm90aWZ5Q2hhbmdlKHR5cGUpIHtcbiAgdmFyIGNoYW5nZSA9IHtcbiAgICBwYXRoOiBIaXN0b3J5TG9jYXRpb24uZ2V0Q3VycmVudFBhdGgoKSxcbiAgICB0eXBlOiB0eXBlXG4gIH07XG5cbiAgX2xpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIGxpc3RlbmVyLmNhbGwoSGlzdG9yeUxvY2F0aW9uLCBjaGFuZ2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb25Qb3BTdGF0ZShldmVudCkge1xuICBpZiAoZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuXG4gIG5vdGlmeUNoYW5nZShMb2NhdGlvbkFjdGlvbnMuUE9QKTtcbn1cblxuLyoqXG4gKiBBIExvY2F0aW9uIHRoYXQgdXNlcyBIVE1MNSBoaXN0b3J5LlxuICovXG52YXIgSGlzdG9yeUxvY2F0aW9uID0ge1xuXG4gIGFkZENoYW5nZUxpc3RlbmVyOiBmdW5jdGlvbiBhZGRDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIF9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICBpZiAoIV9pc0xpc3RlbmluZykge1xuICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIG9uUG9wU3RhdGUsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudCgnb25wb3BzdGF0ZScsIG9uUG9wU3RhdGUpO1xuICAgICAgfVxuXG4gICAgICBfaXNMaXN0ZW5pbmcgPSB0cnVlO1xuICAgIH1cbiAgfSxcblxuICByZW1vdmVDaGFuZ2VMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBfbGlzdGVuZXJzID0gX2xpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGwpIHtcbiAgICAgIHJldHVybiBsICE9PSBsaXN0ZW5lcjtcbiAgICB9KTtcblxuICAgIGlmIChfbGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIG9uUG9wU3RhdGUsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudCgnb25wb3BzdGF0ZScsIG9uUG9wU3RhdGUpO1xuICAgICAgfVxuXG4gICAgICBfaXNMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgcHVzaDogZnVuY3Rpb24gcHVzaChwYXRoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHsgcGF0aDogcGF0aCB9LCAnJywgcGF0aCk7XG4gICAgSGlzdG9yeS5sZW5ndGggKz0gMTtcbiAgICBub3RpZnlDaGFuZ2UoTG9jYXRpb25BY3Rpb25zLlBVU0gpO1xuICB9LFxuXG4gIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IHBhdGg6IHBhdGggfSwgJycsIHBhdGgpO1xuICAgIG5vdGlmeUNoYW5nZShMb2NhdGlvbkFjdGlvbnMuUkVQTEFDRSk7XG4gIH0sXG5cbiAgcG9wOiBIaXN0b3J5LmJhY2ssXG5cbiAgZ2V0Q3VycmVudFBhdGg6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYXRoKCkge1xuICAgIHJldHVybiBkZWNvZGVVUkkod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIH0sXG5cbiAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnPEhpc3RvcnlMb2NhdGlvbj4nO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGlzdG9yeUxvY2F0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEhpc3RvcnlMb2NhdGlvbiA9IHJlcXVpcmUoJy4vSGlzdG9yeUxvY2F0aW9uJyk7XG52YXIgSGlzdG9yeSA9IHJlcXVpcmUoJy4uL0hpc3RvcnknKTtcblxuLyoqXG4gKiBBIExvY2F0aW9uIHRoYXQgdXNlcyBmdWxsIHBhZ2UgcmVmcmVzaGVzLiBUaGlzIGlzIHVzZWQgYXNcbiAqIHRoZSBmYWxsYmFjayBmb3IgSGlzdG9yeUxvY2F0aW9uIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90XG4gKiBzdXBwb3J0IHRoZSBIVE1MNSBoaXN0b3J5IEFQSS5cbiAqL1xudmFyIFJlZnJlc2hMb2NhdGlvbiA9IHtcblxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKHBhdGgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24gPSBwYXRoO1xuICB9LFxuXG4gIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHBhdGgpO1xuICB9LFxuXG4gIHBvcDogSGlzdG9yeS5iYWNrLFxuXG4gIGdldEN1cnJlbnRQYXRoOiBIaXN0b3J5TG9jYXRpb24uZ2V0Q3VycmVudFBhdGgsXG5cbiAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnPFJlZnJlc2hMb2NhdGlvbj4nO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVmcmVzaExvY2F0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9pbnZhcmlhbnQnKTtcblxuZnVuY3Rpb24gdGhyb3dDYW5ub3RNb2RpZnkoKSB7XG4gIGludmFyaWFudChmYWxzZSwgJ1lvdSBjYW5ub3QgbW9kaWZ5IGEgc3RhdGljIGxvY2F0aW9uJyk7XG59XG5cbi8qKlxuICogQSBsb2NhdGlvbiB0aGF0IG9ubHkgZXZlciBjb250YWlucyBhIHNpbmdsZSBwYXRoLiBVc2VmdWwgaW5cbiAqIHN0YXRlbGVzcyBlbnZpcm9ubWVudHMgbGlrZSBzZXJ2ZXJzIHdoZXJlIHRoZXJlIGlzIG5vIHBhdGggaGlzdG9yeSxcbiAqIG9ubHkgdGhlIHBhdGggdGhhdCB3YXMgdXNlZCBpbiB0aGUgcmVxdWVzdC5cbiAqL1xuXG52YXIgU3RhdGljTG9jYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdGF0aWNMb2NhdGlvbihwYXRoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRpY0xvY2F0aW9uKTtcblxuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3RhdGljTG9jYXRpb24sIFt7XG4gICAga2V5OiAnZ2V0Q3VycmVudFBhdGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50UGF0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhdGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9TdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiAnPFN0YXRpY0xvY2F0aW9uIHBhdGg9XCInICsgdGhpcy5wYXRoICsgJ1wiPic7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0YXRpY0xvY2F0aW9uO1xufSkoKTtcblxuLy8gVE9ETzogSW5jbHVkZSB0aGVzZSBpbiB0aGUgYWJvdmUgY2xhc3MgZGVmaW5pdGlvblxuLy8gb25jZSB3ZSBjYW4gdXNlIEVTNyBwcm9wZXJ0eSBpbml0aWFsaXplcnMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzYxOVxuXG5TdGF0aWNMb2NhdGlvbi5wcm90b3R5cGUucHVzaCA9IHRocm93Q2Fubm90TW9kaWZ5O1xuU3RhdGljTG9jYXRpb24ucHJvdG90eXBlLnJlcGxhY2UgPSB0aHJvd0Nhbm5vdE1vZGlmeTtcblN0YXRpY0xvY2F0aW9uLnByb3RvdHlwZS5wb3AgPSB0aHJvd0Nhbm5vdE1vZGlmeTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0aWNMb2NhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdyZWFjdC9saWIvaW52YXJpYW50Jyk7XG52YXIgTG9jYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Mb2NhdGlvbkFjdGlvbnMnKTtcbnZhciBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vSGlzdG9yeScpO1xuXG4vKipcbiAqIEEgbG9jYXRpb24gdGhhdCBpcyBjb252ZW5pZW50IGZvciB0ZXN0aW5nIGFuZCBkb2VzIG5vdCByZXF1aXJlIGEgRE9NLlxuICovXG5cbnZhciBUZXN0TG9jYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUZXN0TG9jYXRpb24oaGlzdG9yeSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXN0TG9jYXRpb24pO1xuXG4gICAgdGhpcy5oaXN0b3J5ID0gaGlzdG9yeSB8fCBbXTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuX3VwZGF0ZUhpc3RvcnlMZW5ndGgoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUZXN0TG9jYXRpb24sIFt7XG4gICAga2V5OiAnbmVlZHNET00nLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ191cGRhdGVIaXN0b3J5TGVuZ3RoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZUhpc3RvcnlMZW5ndGgoKSB7XG4gICAgICBIaXN0b3J5Lmxlbmd0aCA9IHRoaXMuaGlzdG9yeS5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX25vdGlmeUNoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9ub3RpZnlDaGFuZ2UodHlwZSkge1xuICAgICAgdmFyIGNoYW5nZSA9IHtcbiAgICAgICAgcGF0aDogdGhpcy5nZXRDdXJyZW50UGF0aCgpLFxuICAgICAgICB0eXBlOiB0eXBlXG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHRoaXMubGlzdGVuZXJzW2ldLmNhbGwodGhpcywgY2hhbmdlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZGRDaGFuZ2VMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVDaGFuZ2VMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgICByZXR1cm4gbCAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwdXNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaChwYXRoKSB7XG4gICAgICB0aGlzLmhpc3RvcnkucHVzaChwYXRoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUhpc3RvcnlMZW5ndGgoKTtcbiAgICAgIHRoaXMuX25vdGlmeUNoYW5nZShMb2NhdGlvbkFjdGlvbnMuUFVTSCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVwbGFjZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCkge1xuICAgICAgaW52YXJpYW50KHRoaXMuaGlzdG9yeS5sZW5ndGgsICdZb3UgY2Fubm90IHJlcGxhY2UgdGhlIGN1cnJlbnQgcGF0aCB3aXRoIG5vIGhpc3RvcnknKTtcblxuICAgICAgdGhpcy5oaXN0b3J5W3RoaXMuaGlzdG9yeS5sZW5ndGggLSAxXSA9IHBhdGg7XG5cbiAgICAgIHRoaXMuX25vdGlmeUNoYW5nZShMb2NhdGlvbkFjdGlvbnMuUkVQTEFDRSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncG9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9wKCkge1xuICAgICAgdGhpcy5oaXN0b3J5LnBvcCgpO1xuICAgICAgdGhpcy5fdXBkYXRlSGlzdG9yeUxlbmd0aCgpO1xuICAgICAgdGhpcy5fbm90aWZ5Q2hhbmdlKExvY2F0aW9uQWN0aW9ucy5QT1ApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEN1cnJlbnRQYXRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFBhdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaXN0b3J5W3RoaXMuaGlzdG9yeS5sZW5ndGggLSAxXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuICc8VGVzdExvY2F0aW9uPic7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRlc3RMb2NhdGlvbjtcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGVzdExvY2F0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZVJvdXRlciA9IHJlcXVpcmUoJy4vY3JlYXRlUm91dGVyJyk7XG5cbi8qKlxuICogQSBoaWdoLWxldmVsIGNvbnZlbmllbmNlIG1ldGhvZCB0aGF0IGNyZWF0ZXMsIGNvbmZpZ3VyZXMsIGFuZFxuICogcnVucyBhIHJvdXRlciBpbiBvbmUgc2hvdC4gVGhlIG1ldGhvZCBzaWduYXR1cmUgaXM6XG4gKlxuICogICBSb3V0ZXIucnVuKHJvdXRlc1ssIGxvY2F0aW9uIF0sIGNhbGxiYWNrKTtcbiAqXG4gKiBVc2luZyBgd2luZG93LmxvY2F0aW9uLmhhc2hgIHRvIG1hbmFnZSB0aGUgVVJMLCB5b3UgY291bGQgZG86XG4gKlxuICogICBSb3V0ZXIucnVuKHJvdXRlcywgZnVuY3Rpb24gKEhhbmRsZXIpIHtcbiAqICAgICBSZWFjdC5yZW5kZXIoPEhhbmRsZXIvPiwgZG9jdW1lbnQuYm9keSk7XG4gKiAgIH0pO1xuICogXG4gKiBVc2luZyBIVE1MNSBoaXN0b3J5IGFuZCBhIGN1c3RvbSBcImN1cnNvclwiIHByb3A6XG4gKiBcbiAqICAgUm91dGVyLnJ1bihyb3V0ZXMsIFJvdXRlci5IaXN0b3J5TG9jYXRpb24sIGZ1bmN0aW9uIChIYW5kbGVyKSB7XG4gKiAgICAgUmVhY3QucmVuZGVyKDxIYW5kbGVyIGN1cnNvcj17Y3Vyc29yfS8+LCBkb2N1bWVudC5ib2R5KTtcbiAqICAgfSk7XG4gKlxuICogUmV0dXJucyB0aGUgbmV3bHkgY3JlYXRlZCByb3V0ZXIuXG4gKlxuICogTm90ZTogSWYgeW91IG5lZWQgdG8gc3BlY2lmeSBmdXJ0aGVyIG9wdGlvbnMgZm9yIHlvdXIgcm91dGVyIHN1Y2hcbiAqIGFzIGVycm9yL2Fib3J0IGhhbmRsaW5nIG9yIGN1c3RvbSBzY3JvbGwgYmVoYXZpb3IsIHVzZSBSb3V0ZXIuY3JlYXRlXG4gKiBpbnN0ZWFkLlxuICpcbiAqICAgdmFyIHJvdXRlciA9IFJvdXRlci5jcmVhdGUob3B0aW9ucyk7XG4gKiAgIHJvdXRlci5ydW4oZnVuY3Rpb24gKEhhbmRsZXIpIHtcbiAqICAgICAvLyAuLi5cbiAqICAgfSk7XG4gKi9cbmZ1bmN0aW9uIHJ1blJvdXRlcihyb3V0ZXMsIGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBsb2NhdGlvbjtcbiAgICBsb2NhdGlvbiA9IG51bGw7XG4gIH1cblxuICB2YXIgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcbiAgICByb3V0ZXM6IHJvdXRlcyxcbiAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgfSk7XG5cbiAgcm91dGVyLnJ1bihjYWxsYmFjayk7XG5cbiAgcmV0dXJuIHJvdXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBydW5Sb3V0ZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBzdXBwb3J0c0hpc3RvcnkoKSB7XG4gIC8qISB0YWtlbiBmcm9tIG1vZGVybml6clxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gICAqIGNoYW5nZWQgdG8gYXZvaWQgZmFsc2UgbmVnYXRpdmVzIGZvciBXaW5kb3dzIFBob25lczogaHR0cHM6Ly9naXRodWIuY29tL3JhY2t0L3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gICAqL1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICBpZiAoKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiYgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzSGlzdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIga2V5cztcblx0dmFyIHRvID0gVG9PYmplY3QodGFyZ2V0KTtcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBhcmd1bWVudHNbc107XG5cdFx0a2V5cyA9IE9iamVjdC5rZXlzKE9iamVjdChmcm9tKSk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRvW2tleXNbaV1dID0gZnJvbVtrZXlzW2ldXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi8nKTtcbiIsIi8vIExvYWQgbW9kdWxlc1xuXG52YXIgU3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9zdHJpbmdpZnknKTtcbnZhciBQYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKTtcblxuXG4vLyBEZWNsYXJlIGludGVybmFsc1xuXG52YXIgaW50ZXJuYWxzID0ge307XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc3RyaW5naWZ5OiBTdHJpbmdpZnksXG4gICAgcGFyc2U6IFBhcnNlXG59O1xuIiwiLy8gTG9hZCBtb2R1bGVzXG5cbnZhciBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuXG4vLyBEZWNsYXJlIGludGVybmFsc1xuXG52YXIgaW50ZXJuYWxzID0ge1xuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGRlcHRoOiA1LFxuICAgIGFycmF5TGltaXQ6IDIwLFxuICAgIHBhcmFtZXRlckxpbWl0OiAxMDAwXG59O1xuXG5cbmludGVybmFscy5wYXJzZVZhbHVlcyA9IGZ1bmN0aW9uIChzdHIsIG9wdGlvbnMpIHtcblxuICAgIHZhciBvYmogPSB7fTtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQob3B0aW9ucy5kZWxpbWl0ZXIsIG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPT09IEluZmluaXR5ID8gdW5kZWZpbmVkIDogb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBwYXJ0cy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgIHZhciBwb3MgPSBwYXJ0LmluZGV4T2YoJ109JykgPT09IC0xID8gcGFydC5pbmRleE9mKCc9JykgOiBwYXJ0LmluZGV4T2YoJ109JykgKyAxO1xuXG4gICAgICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICAgICAgICBvYmpbVXRpbHMuZGVjb2RlKHBhcnQpXSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGtleSA9IFV0aWxzLmRlY29kZShwYXJ0LnNsaWNlKDAsIHBvcykpO1xuICAgICAgICAgICAgdmFyIHZhbCA9IFV0aWxzLmRlY29kZShwYXJ0LnNsaWNlKHBvcyArIDEpKTtcblxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IFtdLmNvbmNhdChvYmpba2V5XSkuY29uY2F0KHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXG5pbnRlcm5hbHMucGFyc2VPYmplY3QgPSBmdW5jdGlvbiAoY2hhaW4sIHZhbCwgb3B0aW9ucykge1xuXG4gICAgaWYgKCFjaGFpbi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICB2YXIgcm9vdCA9IGNoYWluLnNoaWZ0KCk7XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgaWYgKHJvb3QgPT09ICdbXScpIHtcbiAgICAgICAgb2JqID0gW107XG4gICAgICAgIG9iaiA9IG9iai5jb25jYXQoaW50ZXJuYWxzLnBhcnNlT2JqZWN0KGNoYWluLCB2YWwsIG9wdGlvbnMpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBjbGVhblJvb3QgPSByb290WzBdID09PSAnWycgJiYgcm9vdFtyb290Lmxlbmd0aCAtIDFdID09PSAnXScgPyByb290LnNsaWNlKDEsIHJvb3QubGVuZ3RoIC0gMSkgOiByb290O1xuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChjbGVhblJvb3QsIDEwKTtcbiAgICAgICAgdmFyIGluZGV4U3RyaW5nID0gJycgKyBpbmRleDtcbiAgICAgICAgaWYgKCFpc05hTihpbmRleCkgJiZcbiAgICAgICAgICAgIHJvb3QgIT09IGNsZWFuUm9vdCAmJlxuICAgICAgICAgICAgaW5kZXhTdHJpbmcgPT09IGNsZWFuUm9vdCAmJlxuICAgICAgICAgICAgaW5kZXggPj0gMCAmJlxuICAgICAgICAgICAgaW5kZXggPD0gb3B0aW9ucy5hcnJheUxpbWl0KSB7XG5cbiAgICAgICAgICAgIG9iaiA9IFtdO1xuICAgICAgICAgICAgb2JqW2luZGV4XSA9IGludGVybmFscy5wYXJzZU9iamVjdChjaGFpbiwgdmFsLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9ialtjbGVhblJvb3RdID0gaW50ZXJuYWxzLnBhcnNlT2JqZWN0KGNoYWluLCB2YWwsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cblxuaW50ZXJuYWxzLnBhcnNlS2V5cyA9IGZ1bmN0aW9uIChrZXksIHZhbCwgb3B0aW9ucykge1xuXG4gICAgaWYgKCFrZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoZSByZWdleCBjaHVua3NcblxuICAgIHZhciBwYXJlbnQgPSAvXihbXlxcW1xcXV0qKS87XG4gICAgdmFyIGNoaWxkID0gLyhcXFtbXlxcW1xcXV0qXFxdKS9nO1xuXG4gICAgLy8gR2V0IHRoZSBwYXJlbnRcblxuICAgIHZhciBzZWdtZW50ID0gcGFyZW50LmV4ZWMoa2V5KTtcblxuICAgIC8vIERvbid0IGFsbG93IHRoZW0gdG8gb3ZlcndyaXRlIG9iamVjdCBwcm90b3R5cGUgcHJvcGVydGllc1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoc2VnbWVudFsxXSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFN0YXNoIHRoZSBwYXJlbnQgaWYgaXQgZXhpc3RzXG5cbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGlmIChzZWdtZW50WzFdKSB7XG4gICAgICAgIGtleXMucHVzaChzZWdtZW50WzFdKTtcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggY2hpbGRyZW4gYXBwZW5kaW5nIHRvIHRoZSBhcnJheSB1bnRpbCB3ZSBoaXQgZGVwdGhcblxuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoKHNlZ21lbnQgPSBjaGlsZC5leGVjKGtleSkpICE9PSBudWxsICYmIGkgPCBvcHRpb25zLmRlcHRoKSB7XG5cbiAgICAgICAgKytpO1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoc2VnbWVudFsxXS5yZXBsYWNlKC9cXFt8XFxdL2csICcnKSkpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChzZWdtZW50WzFdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZXJlJ3MgYSByZW1haW5kZXIsIGp1c3QgYWRkIHdoYXRldmVyIGlzIGxlZnRcblxuICAgIGlmIChzZWdtZW50KSB7XG4gICAgICAgIGtleXMucHVzaCgnWycgKyBrZXkuc2xpY2Uoc2VnbWVudC5pbmRleCkgKyAnXScpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcm5hbHMucGFyc2VPYmplY3Qoa2V5cywgdmFsLCBvcHRpb25zKTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyLCBvcHRpb25zKSB7XG5cbiAgICBpZiAoc3RyID09PSAnJyB8fFxuICAgICAgICBzdHIgPT09IG51bGwgfHxcbiAgICAgICAgdHlwZW9mIHN0ciA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5kZWxpbWl0ZXIgPSB0eXBlb2Ygb3B0aW9ucy5kZWxpbWl0ZXIgPT09ICdzdHJpbmcnIHx8IFV0aWxzLmlzUmVnRXhwKG9wdGlvbnMuZGVsaW1pdGVyKSA/IG9wdGlvbnMuZGVsaW1pdGVyIDogaW50ZXJuYWxzLmRlbGltaXRlcjtcbiAgICBvcHRpb25zLmRlcHRoID0gdHlwZW9mIG9wdGlvbnMuZGVwdGggPT09ICdudW1iZXInID8gb3B0aW9ucy5kZXB0aCA6IGludGVybmFscy5kZXB0aDtcbiAgICBvcHRpb25zLmFycmF5TGltaXQgPSB0eXBlb2Ygb3B0aW9ucy5hcnJheUxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMuYXJyYXlMaW1pdCA6IGludGVybmFscy5hcnJheUxpbWl0O1xuICAgIG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPSB0eXBlb2Ygb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnBhcmFtZXRlckxpbWl0IDogaW50ZXJuYWxzLnBhcmFtZXRlckxpbWl0O1xuXG4gICAgdmFyIHRlbXBPYmogPSB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IGludGVybmFscy5wYXJzZVZhbHVlcyhzdHIsIG9wdGlvbnMpIDogc3RyO1xuICAgIHZhciBvYmogPSB7fTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUga2V5cyBhbmQgc2V0dXAgdGhlIG5ldyBvYmplY3RcblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGVtcE9iaik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0ga2V5cy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgbmV3T2JqID0gaW50ZXJuYWxzLnBhcnNlS2V5cyhrZXksIHRlbXBPYmpba2V5XSwgb3B0aW9ucyk7XG4gICAgICAgIG9iaiA9IFV0aWxzLm1lcmdlKG9iaiwgbmV3T2JqKTtcbiAgICB9XG5cbiAgICByZXR1cm4gVXRpbHMuY29tcGFjdChvYmopO1xufTtcbiIsIi8vIExvYWQgbW9kdWxlc1xuXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cblxuLy8gRGVjbGFyZSBpbnRlcm5hbHNcblxudmFyIGludGVybmFscyA9IHtcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBhcnJheVByZWZpeEdlbmVyYXRvcnM6IHtcbiAgICAgICAgYnJhY2tldHM6IGZ1bmN0aW9uIChwcmVmaXgsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArICdbXSc7XG4gICAgICAgIH0sXG4gICAgICAgIGluZGljZXM6IGZ1bmN0aW9uIChwcmVmaXgsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArICdbJyArIGtleSArICddJztcbiAgICAgICAgfSxcbiAgICAgICAgcmVwZWF0OiBmdW5jdGlvbiAocHJlZml4LCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbmludGVybmFscy5zdHJpbmdpZnkgPSBmdW5jdGlvbiAob2JqLCBwcmVmaXgsIGdlbmVyYXRlQXJyYXlQcmVmaXgpIHtcblxuICAgIGlmIChVdGlscy5pc0J1ZmZlcihvYmopKSB7XG4gICAgICAgIG9iaiA9IG9iai50b1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIG9iaiA9IG9iai50b0lTT1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgb2JqID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnIHx8XG4gICAgICAgIHR5cGVvZiBvYmogPT09ICdudW1iZXInIHx8XG4gICAgICAgIHR5cGVvZiBvYmogPT09ICdib29sZWFuJykge1xuXG4gICAgICAgIHJldHVybiBbZW5jb2RlVVJJQ29tcG9uZW50KHByZWZpeCkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqKV07XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgdmFyIG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChpbnRlcm5hbHMuc3RyaW5naWZ5KG9ialtrZXldLCBnZW5lcmF0ZUFycmF5UHJlZml4KHByZWZpeCwga2V5KSwgZ2VuZXJhdGVBcnJheVByZWZpeCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChpbnRlcm5hbHMuc3RyaW5naWZ5KG9ialtrZXldLCBwcmVmaXggKyAnWycgKyBrZXkgKyAnXScsIGdlbmVyYXRlQXJyYXlQcmVmaXgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaiwgb3B0aW9ucykge1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIGRlbGltaXRlciA9IHR5cGVvZiBvcHRpb25zLmRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyBpbnRlcm5hbHMuZGVsaW1pdGVyIDogb3B0aW9ucy5kZWxpbWl0ZXI7XG5cbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8XG4gICAgICAgIG9iaiA9PT0gbnVsbCkge1xuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlGb3JtYXQ7XG4gICAgaWYgKG9wdGlvbnMuYXJyYXlGb3JtYXQgaW4gaW50ZXJuYWxzLmFycmF5UHJlZml4R2VuZXJhdG9ycykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdGlvbnMuYXJyYXlGb3JtYXQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKCdpbmRpY2VzJyBpbiBvcHRpb25zKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0aW9ucy5pbmRpY2VzID8gJ2luZGljZXMnIDogJ3JlcGVhdCc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhcnJheUZvcm1hdCA9ICdpbmRpY2VzJztcbiAgICB9XG5cbiAgICB2YXIgZ2VuZXJhdGVBcnJheVByZWZpeCA9IGludGVybmFscy5hcnJheVByZWZpeEdlbmVyYXRvcnNbYXJyYXlGb3JtYXRdO1xuXG4gICAgdmFyIG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IG9iaktleXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcbiAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KGludGVybmFscy5zdHJpbmdpZnkob2JqW2tleV0sIGtleSwgZ2VuZXJhdGVBcnJheVByZWZpeCkpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzLmpvaW4oZGVsaW1pdGVyKTtcbn07XG4iLCIvLyBMb2FkIG1vZHVsZXNcblxuXG4vLyBEZWNsYXJlIGludGVybmFsc1xuXG52YXIgaW50ZXJuYWxzID0ge307XG5cblxuZXhwb3J0cy5hcnJheVRvT2JqZWN0ID0gZnVuY3Rpb24gKHNvdXJjZSkge1xuXG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IHNvdXJjZS5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlW2ldICE9PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICBvYmpbaV0gPSBzb3VyY2VbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXG5leHBvcnRzLm1lcmdlID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3NvdXJjZV0gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGFyZ2V0ID0gW3RhcmdldF0uY29uY2F0KHNvdXJjZSk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJlxuICAgICAgICAhQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG5cbiAgICAgICAgdGFyZ2V0ID0gZXhwb3J0cy5hcnJheVRvT2JqZWN0KHRhcmdldCk7XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIGZvciAodmFyIGsgPSAwLCBrbCA9IGtleXMubGVuZ3RoOyBrIDwga2w7ICsraykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1trXTtcbiAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW2tleV07XG5cbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gZXhwb3J0cy5tZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0ci5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbn07XG5cblxuZXhwb3J0cy5jb21wYWN0ID0gZnVuY3Rpb24gKG9iaiwgcmVmcykge1xuXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8XG4gICAgICAgIG9iaiA9PT0gbnVsbCkge1xuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgcmVmcyA9IHJlZnMgfHwgW107XG4gICAgdmFyIGxvb2t1cCA9IHJlZnMuaW5kZXhPZihvYmopO1xuICAgIGlmIChsb29rdXAgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiByZWZzW2xvb2t1cF07XG4gICAgfVxuXG4gICAgcmVmcy5wdXNoKG9iaik7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBjb21wYWN0ZWQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBvYmoubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29tcGFjdGVkLnB1c2gob2JqW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wYWN0ZWQ7XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIGZvciAoaSA9IDAsIGlsID0ga2V5cy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBvYmpba2V5XSA9IGV4cG9ydHMuY29tcGFjdChvYmpba2V5XSwgcmVmcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cblxuZXhwb3J0cy5pc1JlZ0V4cCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcblxuXG5leHBvcnRzLmlzQnVmZmVyID0gZnVuY3Rpb24gKG9iaikge1xuXG4gICAgaWYgKG9iaiA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gISEob2JqLmNvbnN0cnVjdG9yICYmXG4gICAgICAgIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciAmJlxuICAgICAgICBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKSk7XG59O1xuIiwiKGZ1bmN0aW9uKHdpbmRvdywgUmVhY3QpIHtcbiAgdmFyIFNwaW5uZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdTcGlubmVyJyxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGJhcnMgPSBbXTtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICB2YXIgYmFyU3R5bGUgPSB7fTtcbiAgICAgICAgYmFyU3R5bGUuV2Via2l0QW5pbWF0aW9uRGVsYXkgPSBiYXJTdHlsZS5hbmltYXRpb25EZWxheSA9XG4gICAgICAgICAgKGkgLSAxMikgLyAxMCArICdzJztcblxuICAgICAgICBiYXJTdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSBiYXJTdHlsZS50cmFuc2Zvcm0gPVxuICAgICAgICAgICdyb3RhdGUoJyArIChpICogMzApICsgJ2RlZykgdHJhbnNsYXRlKDE0NiUpJztcblxuICAgICAgICBiYXJzLnB1c2goXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7c3R5bGU6IGJhclN0eWxlLCBjbGFzc05hbWU6IFwicmVhY3Qtc3Bpbm5lcl9iYXJcIiwga2V5OiBpfSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBSZWFjdC5fX3NwcmVhZCh7fSwgIHByb3BzLCB7Y2xhc3NOYW1lOiAocHJvcHMuY2xhc3NOYW1lIHx8ICcnKSArICcgcmVhY3Qtc3Bpbm5lcid9KSwgXG4gICAgICAgICAgYmFyc1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LlNwaW5uZXIgPSBTcGlubmVyO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gU3Bpbm5lcjtcbiAgfVxufSkod2luZG93LCB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlcXVpcmUoJ3JlYWN0JykgOiBSZWFjdCk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRXhlY3V0aW9uRW52aXJvbm1lbnRcbiAqL1xuXG4vKmpzbGludCBldmlsOiB0cnVlICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FuVXNlRE9NID0gISEoXG4gICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpXG4pO1xuXG4vKipcbiAqIFNpbXBsZSwgbGlnaHR3ZWlnaHQgbW9kdWxlIGFzc2lzdGluZyB3aXRoIHRoZSBkZXRlY3Rpb24gYW5kIGNvbnRleHQgb2ZcbiAqIFdvcmtlci4gSGVscHMgYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzIGFuZCBhbGxvd3MgY29kZSB0byByZWFzb24gYWJvdXRcbiAqIHdoZXRoZXIgb3Igbm90IHRoZXkgYXJlIGluIGEgV29ya2VyLCBldmVuIGlmIHRoZXkgbmV2ZXIgaW5jbHVkZSB0aGUgbWFpblxuICogYFJlYWN0V29ya2VyYCBkZXBlbmRlbmN5LlxuICovXG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cbiAgY2FuVXNlRE9NOiBjYW5Vc2VET00sXG5cbiAgY2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cbiAgY2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG4gICAgY2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cbiAgY2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW4sXG5cbiAgaXNJbldvcmtlcjogIWNhblVzZURPTSAvLyBGb3Igbm93LCB0aGlzIGlzIHRydWUgLSBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBPYmplY3QuYXNzaWduXG4gKi9cblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5hc3NpZ25cblxuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2VzKSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gdGFyZ2V0IGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZm9yICh2YXIgbmV4dEluZGV4ID0gMTsgbmV4dEluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgbmV4dEluZGV4KyspIHtcbiAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tuZXh0SW5kZXhdO1xuICAgIGlmIChuZXh0U291cmNlID09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBmcm9tID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgLy8gV2UgZG9uJ3QgY3VycmVudGx5IHN1cHBvcnQgYWNjZXNzb3JzIG5vciBwcm94aWVzLiBUaGVyZWZvcmUgdGhpc1xuICAgIC8vIGNvcHkgY2Fubm90IHRocm93LiBJZiB3ZSBldmVyIHN1cHBvcnRlZCB0aGlzIHRoZW4gd2UgbXVzdCBoYW5kbGVcbiAgICAvLyBleGNlcHRpb25zIGFuZCBzaWRlLWVmZmVjdHMuIFdlIGRvbid0IHN1cHBvcnQgc3ltYm9scyBzbyB0aGV5IHdvbid0XG4gICAgLy8gYmUgdHJhbnNmZXJyZWQuXG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ247XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgZW1wdHlGdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24oYXJnKSB7IHJldHVybiBhcmc7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBpbnZhcmlhbnRcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnSW52YXJpYW50IFZpb2xhdGlvbjogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgd2FybmluZ1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoXCIuL2VtcHR5RnVuY3Rpb25cIik7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQgKSB7Zm9yICh2YXIgYXJncz1bXSwkX18wPTIsJF9fMT1hcmd1bWVudHMubGVuZ3RoOyRfXzA8JF9fMTskX18wKyspIGFyZ3MucHVzaChhcmd1bWVudHNbJF9fMF0pO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8IC9eW3NcXFddKiQvLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpICB7cmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107fSk7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICB0cnkge1xuICAgICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIl19
