var React = require('react');
var Link = require('react-router').Link;

var SubnavContainer = React.createClass({
    render: function(){
        return <div className="subnavContainer">
            <div className="subnavLeft">
                <div className="subnavResume">
                    <Link to="resume" className="invert" /><br />
                    <Link to="resume">Resume</Link>
                </div>
                <div className="subnaveducation">
                    <Link to="education" className="invert" /><br />
                    <Link to="education">Education</Link>
                </div>
            </div>
            <div className="subnavRight">
                <div className="subnavBlog">
                    <Link to="blog" className="invert" /><br />
                    <Link to="blog">Blog</Link>
                </div>
                <div className="subnavContact">
                    <Link to="contact" className="invert" /><br />
                    <Link to="contact">Contact</Link>
                </div>
            </div>
        </div>
    }}
);

module.exports = SubnavContainer;