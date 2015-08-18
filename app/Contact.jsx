var React = require('react');
var Desc = require('./Desc.jsx');
var Model = require('./model.js');
var ContactForm = require('./ContactForm.jsx');
var WidgetTwitter = require('./WidgetTwitter.jsx');

var Contact = React.createClass({
    render: function () {
        return <div className="innerContainer">
            <div className="desc">
                <iframe frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                        src={Model.map}></iframe>
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