var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NavBar = React.createClass({
    mixins: [ Router.State ],
    render: function () {
        var activate = " current-menu-item";
        var name = this.getPathname();
        return <nav>
            <ul>
                <li className={name === '/info'?'profile' + activate:'profile'}><Link to="info"><span><span>Profile</span></span></Link></li>
                <li className={name === '/resume'?'resume' + activate:'resume'}><Link to="resume"><span><span>Resume</span></span></Link></li>
                <li className={name === '/education'?'portfolio' + activate:'portfolio'}><Link to="education"><span><span>Education</span></span></Link></li>
                <li className={name === '/blog'?'blog' + activate:'blog'}><Link to="blog"><span><span>Blog</span></span></Link></li>
                <li className={name === '/contact'?'contact' + activate:'contact'}><Link to="contact"><span><span>Contact</span></span></Link></li>
            </ul>
        </nav>;
    }
});

module.exports = NavBar;