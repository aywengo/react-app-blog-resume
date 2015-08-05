var React = require('react');

var InfoBlock = React.createClass({
    getInitialState: function(){
        return {
            logo: this.props.logo,
            name: this.props.name,
            surname: this.props.surname,
            position: this.props.position,
            text: this.props.text
        }
    },
    render: function () {
        return <div className="info">
            <div className="head">
                <img src={this.state.logo} alt={this.state.name} />
                <div className="name">
                    <p className="first">{this.state.name}</p>
                    <p className="last">{this.state.surname}</p>
                    <p className="title">{this.state.position}</p>
                </div>
            </div>
            <br className="clear" />
            <div className="desc">
                <p>{this.state.text}</p>
            </div>
            <div className="subnavContainer">
                <div className="subnavLeft">
                    <div className="subnavResume">
                        <a href="" className="invert"></a><br />
                        <a href="">Resume</a>
                    </div>
                    <div className="subnavPortfolio">
                        <a href="" className="invert"></a><br />
                        <a href="" >Education</a>
                    </div>
                </div>
                <div className="subnavRight">
                    <div className="subnavBlog">
                        <a href="" className="invert"></a><br />
                        <a href="" >Blog</a>
                    </div>
                    <div className="subnavContact">
                        <a href="" className="invert"></a><br />
                        <a href="" >Contact</a>
                    </div>
                </div>
            </div>
        </div>;
    }
});

module.exports = InfoBlock;