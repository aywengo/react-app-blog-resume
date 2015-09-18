var React = require('react');
var Model = require('./model.js');
var Request = require('request');
var Spinner = require('react-spinner');

var elementBody;
var Experience = React.createClass({
    getInitialState: function () {
        return {data: []};
    },
    componentWillMount: function() {
        elementBody = <Spinner />
    },
    componentDidMount: function () {
        Request.get(Model.resource + "experience",
            function (error, response, body) {
                if (!error && response.statusCode == 200 && !body.isEmpty) {
                    var data = JSON.parse(body);
                    if (!data.isNullOrUndefined) {
                        elementBody = <div />;
                        this.setState({data: data});
                    }
                }
            }.bind(this))
    },
    render: function () {
        return (
            <div className="education-items">
                <ul className="personalDev">
                    {elementBody}
                    {this.state.data.map(function(data, i) {
                        var head = (data.link === 'undefined')
                            ? data.employer
                            : <a href={data.link} target="_blank"> {data.employer} </a>;
                        return (<li key={i}>
                            <span className="title">{head}</span>
                            <span className="time">{data.time}</span><br/>
                            <p><b>{data.position}</b></p>
                            <span>{data.description}</span>
                        </li>)
                    })}
                </ul>
            </div>)
    }
});

module.exports = Experience;