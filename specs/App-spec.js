var App = require('./../app/App.js');
var SiteHeader = require('./../app/Header.jsx');
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

    it("should render text: from blog.js title prop", function () {
        expect(React.findDOMNode(app).textContent.trim()).toEqual(blog.title);
    });

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