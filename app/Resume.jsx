var React = require('react');
var Config = require('./config.js');
var Skills = require('./Skills.jsx');
var Experience = require('./Experience.jsx');

var Resume = React.createClass({
    render: function () {
        return <div className="innerContainer">
            <div className="desc">
                <h2>Resume</h2>
            </div>
            <div className="resume-items">
                <h5>Professional profile</h5>
                <p>{Config.profile}</p>
                <h5>Experience</h5>
                <p> <Experience /></p>
                <h5>Skills</h5>
                <p> <Skills  /> </p>
                <h5>About myself</h5>
                <pre>{Config.text}</pre>
            </div>
        </div>
    }
});

module.exports = Resume;