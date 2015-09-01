var React = require('react');

var Experience = React.createClass({
    render: function () {
        return (
            <div className="education-items">
                <ul className="personalDev">
                    {this.props.items.map(function(data, i) {
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