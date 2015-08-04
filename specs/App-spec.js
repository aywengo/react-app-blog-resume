var App = require('./../app/App.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var fs = require('fs');

describe("App", function() {

  it("should render text: from blog.js header prop", function() {
    var app = TestUtils.renderIntoDocument(<App/>);
    expect(React.findDOMNode(app).textContent.trim()).toEqual('Hello my awesome world!');
  });

  it("should be wrapped with a div", function() {
    var app = TestUtils.renderIntoDocument(<App/>);
    expect(app.getDOMNode().tagName).toEqual('DIV');
  });

});

