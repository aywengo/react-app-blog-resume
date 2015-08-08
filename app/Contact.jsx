var React = require('react');
var Desc = require('./Desc.jsx');
var blog = require('./blog.js');

var Contact = React.createClass({
    render: function() {
        return <div className="innerContainer">
                    <div className="desc">
                        <iframe frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                                src={blog.map}></iframe>
                    </div>
                    <div className="contact-items">
                        {blog.text}
                    </div>
            </div>
    }
});

module.exports = Contact;