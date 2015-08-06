var App = require('./../app/App.js');
var SiteHeader = require('./../app/Header.jsx');
var InfoBlock = require('./../app/InfoBlock.jsx');
var AddressBlock = require('./../app/AddressBlock.jsx');
var Footer = require('./../app/Footer.jsx');
var Head = require('./../app/Head.jsx');
var NavBar = require('./../app/NavBar.jsx');
var SocialNetworkBar = require('./../app/SocialNetworkBar.jsx');
var WidgetTwitter = require('./../app/WidgetTwitter.jsx');
var React = require('react/addons');
var blog = require('./../app/blog.js');
var TestUtils = React.addons.TestUtils;
var fs = require('fs');
var globaldocument = require('global');

describe("App", function () {
    var app;
    beforeEach(function() {
        app = TestUtils.renderIntoDocument(<App/>);
    });
/*
    it("should render text: from blog.js title prop", function () {
        expect(React.findDOMNode(app).textContent.trim()).toEqual(blog.title);
    });*/

    it("should render header: from blog.js title prop", function () {
        expect(global.document.title).toEqual(blog.title);
    });

    it("should be wrapped with a div", function () {
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("SiteHeader", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(<SiteHeader />);
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("WidgetTwitter", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(<WidgetTwitter />);
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("NavBar", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(<NavBar />);
        expect(app.getDOMNode().tagName).toEqual('NAV');
    });
});

describe("Head", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(<Head />);
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});

describe("Footer", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(<Footer />);
        expect(app.getDOMNode().tagName).toEqual('FOOTER');
    });
});

describe("AddressBlock", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(<AddressBlock />);
        expect(app.getDOMNode().tagName).toEqual('ADDRESS');
    });
});

describe("InfoBlock", function () {

    it("should be wrapped with a div", function () {
        var app = TestUtils.renderIntoDocument(<InfoBlock />);
        expect(app.getDOMNode().tagName).toEqual('DIV');
    });
});