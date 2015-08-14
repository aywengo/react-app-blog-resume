var React = require('react');
var Desc = require('./Desc.jsx');
var EducationItems = require('./EducationItems.jsx');
var Model = require('./model.js');

var Education = React.createClass({
    render: function () {
        return <div className="innerContainer">
            <EducationItems header="Education" items={Model.education}/>
            <p>&nbsp;</p>
            <EducationItems header="Certification" items={Model.certification}/>
        </div>
    }
});

module.exports = Education;