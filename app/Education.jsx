var React = require('react');
var Desc = require('./Desc.jsx');
var EducationItems = require('./EducationItems.jsx');
var blog = require('./blog.js');

var Education = React.createClass({
    render: function () {
        return <div className="innerContainer">
            <EducationItems header="Education" items={blog.education}/>
            <p>&nbsp;</p>
            <EducationItems header="Certification" items={blog.certification}/>
        </div>
    }
});

module.exports = Education;