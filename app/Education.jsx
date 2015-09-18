var React = require('react');
var EducationItems = require('./EducationItems.jsx');

var Education = React.createClass({
    render: function () {
        return <div className="innerContainer">
            <EducationItems header="Education" resource="education" />
            <p>&nbsp;</p>
            <EducationItems header="Certification" resource="certifications" />
        </div>
    }
});

module.exports = Education;