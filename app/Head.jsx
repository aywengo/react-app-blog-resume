var React = require('react');

var Head = React.createClass({
    getInitialState: function () {
        return {
            logo: this.props.logo,
            name: this.props.name,
            surname: this.props.surname,
            position: this.props.position
        }
    },
    render: function () {
        return <div className="head">
            <img src={this.state.logo} alt={this.state.name}/>
            <div className="name">
                <p className="first">{this.state.name}</p>
                <p className="last">{this.state.surname}</p>
                <p className="title">{this.state.position}</p>
            </div>
        </div>
    }
});

module.exports = Head;