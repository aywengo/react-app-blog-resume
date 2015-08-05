var React = require('react');

var NavBar = React.createClass({
    render: function () {
        return <nav>
            <ul>
                <li className="profile"><a href=""><span><span>Profile</span></span></a></li>
                <li className="resume"><a href=""><span><span>Resume</span></span></a></li>
                <li className="portfolio current-menu-item"><a href=""><span><span>Education</span></span></a></li>
                <li className="blog"><a href=""><span><span>Blog</span></span></a></li>
                <li className="contact"><a href=""><span><span>Contact</span></span></a></li>
            </ul>
        </nav>;
    }
});

module.exports = NavBar;