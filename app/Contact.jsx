var React = require('react');
var Config = require('./config.js');
var ContactForm = require('./ContactForm.jsx');
var WidgetTwitter = require('./WidgetTwitter.jsx');

var Contact = React.createClass({
    render: function () {
        return <div className="innerContainer">
            <div className="desc">
                <iframe frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                        src={Config.map}></iframe>
            </div>
            <h4>Ask me anything.</h4>
            <ContactForm />
            <div className="sidebar hidden">
                <WidgetTwitter />
            </div>
        </div>
    }
});

module.exports = Contact;