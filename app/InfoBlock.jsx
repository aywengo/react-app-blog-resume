var React = require('react');
var Head = require('./Head.jsx');
var blog = require('./blog.js');
var Link = require('react-router').Link;

var InfoBlock = React.createClass({
    getInitialState: function () {
        return {
            text: blog.text
        }
    },
    render: function () {
        return  <div id="dynamic">
                <div className="desc">
                    <p>{this.state.text}</p>
                </div>
                <div className="subnavContainer">
                    <div className="subnavLeft">
                        <div className="subnavResume">
                            <Link to="resume" className="invert" /><br />
                            <Link to="resume">Resume</Link>
                        </div>
                        <div className="subnavPortfolio">
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
        </div>;
    }
});

module.exports = InfoBlock;