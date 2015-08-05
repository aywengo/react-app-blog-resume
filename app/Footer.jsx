var React = require('react');

var Footer = React.createClass({
    getInitialState: function() {
        return {
            author : this.props.author
        }
    },
    render: function () {
        return <footer>
            <span>Copyright &copy;2015 {this.state.author}.</span>
            <span>Powered by <a href="http://http://facebook.github.io/react/">React.js</a></span>
        </footer>;
    }
});

module.exports = Footer;