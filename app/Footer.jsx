var React = require('react');

var Footer = React.createClass({
    render: function () {
        return <footer>
            <span> Copyright &copy;2015 {this.props.author}.</span>
            <span> Powered by <a href="http://http://facebook.github.io/react/">React.js</a></span>
            <span> Design by <a href="http://themeforest.net/user/themebakers/portfolio">themebakers</a></span>
            <span> Source code on <a href="https://github.com/aywengo/react-app-blog-resume">GitHub</a></span>
        </footer>;
    }
});

module.exports = Footer;