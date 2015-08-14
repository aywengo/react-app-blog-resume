var React = require('react');
var Desc = require('./Desc.jsx');
var Model = require('./model.js');

var Resume = React.createClass({
    render: function() {
        return <div className="innerContainer">
                    <div className="desc">
                        <h2>Resume</h2>
                    </div>
                    <div className="resume-items">
                        {Model.text}
                    </div>
            </div>
    }
});

module.exports = Resume;