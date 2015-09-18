var React = require('react');
var Model = require('./model.js');
var Request = require('request');
var Spinner = require('react-spinner');

var elementBody;
var EducationItems = React.createClass({
    getInitialState: function () {
        return {data: []};
    },
    componentWillMount: function() {
        elementBody = <Spinner />
    },
    componentDidMount: function () {
        Request.get(Model.resource + this.props.resource,
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
        return <div>
            <div className="desc">
                <h2>{this.props.header}</h2>
            </div>
            <div className="education-items">
                <ul className="personalDev">
                    {elementBody}
                    {this.state.data.map(function(data, i) {
                        var head = (data.link === 'undefined')
                                        ? data.title
                                        : <a href={data.link} target="_blank"> {data.title} </a>;
                        return (<li key={i}>
                                <span className="title">{head}</span>
                                <span className="time">{data.time}</span><br/>
                                <span>{data.authority}</span>
                            </li>)
                    })}
                </ul>
            </div>
        </div>
    }
});

module.exports = EducationItems;