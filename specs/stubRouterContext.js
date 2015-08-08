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
            return <Component {...props} />
        }
    });
};

module.exports = stubRouterContext;