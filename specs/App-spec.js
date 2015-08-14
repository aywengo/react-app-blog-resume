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
        app = TestUtils.renderIntoDocument(<Subject/>);
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
        var app = TestUtils.renderIntoDocument(<SiteHeader/>);
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("WidgetTwitter", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(<WidgetTwitter/>);
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("NavBar", function () {
    it("should be wrapped with a nav", function () {
        var Subject = stubRouterContext(NavBar);
        var app = TestUtils.renderIntoDocument(<Subject/>);
        expect(app.getDOMNode().tagName).toEqual('NAV');
    });
});

describe("Head", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(<Head/>);
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("Footer", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(<Footer/>);
        expect(app.getDOMNode().tagName).toEqual('FOOTER');
    });
});

describe("AddressBlock", function () {

    it("should be wrapped with a address", function () {
        var app = TestUtils.renderIntoDocument(<AddressBlock/>);
        expect(app.getDOMNode().tagName).toEqual('ADDRESS');
    });
});

describe("InfoBlock", function () {

    it("should be wrapped with a div", function () {
        var Subject = stubRouterContext(InfoBlock);
        var app = TestUtils.renderIntoDocument(<Subject/>);
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("Contact", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(<Contact/>);
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("Education", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(<Education/>);
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("EducationItems", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(<EducationItems header="test" items={blog.education}/>);
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});