var React = require('react');

var EducationItems = React.createClass({
    render: function () {
        return <div>
            <div className="desc">
                <h2>{this.props.header}</h2>
            </div>
            <div className="education-items">
                <ul className="personalDev">
                    {this.props.items.map(function(data, i) {
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