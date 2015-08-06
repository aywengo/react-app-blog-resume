var React = require('react');
var Link = require('react-router').Link;

var NavBar = React.createClass({
    render: function () {
        return <nav>
            <ul>
                <li className="profile"><Link to="info"><span><span>Profile</span></span></Link></li>
                <li className="resume"><Link to="resume"><span><span>Resume</span></span></Link></li>
                <li className="portfolio current-menu-item"><Link to="education"><span><span>Education</span></span></Link></li>
                <li className="blog"><Link to="blog"><span><span>Blog</span></span></Link></li>
                <li className="contact"><Link to="contact"><span><span>Contact</span></span></Link></li>
            </ul>
        </nav>;
    }
});

module.exports = NavBar;