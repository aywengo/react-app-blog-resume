var React = require('react');

var AddressBlock = React.createClass({
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
        return <address>
            {this.state.address}<br/>
            <a href={mailto}>{this.state.mail}</a><br/>
            <a href={tel}>{this.state.telno}</a><br/>
        </address>;
    }
});

module.exports = AddressBlock;