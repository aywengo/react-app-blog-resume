var React = require('react');
var Desc = require('./Desc.jsx');
var blog = require('./blog.js');

var Education = React.createClass({
    render: function() {
        return <div className="innerContainer">
                    <div className="desc">
                        <h2>Education</h2>
                    </div>
                    <div className="education-items">
                        {blog.text}
                    </div>
            </div>
    }
});

module.exports = Education;