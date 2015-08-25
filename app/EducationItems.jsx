var React = require('react');

var EducationItems = React.createClass({
    getInitialState: function(){
        return {
            header : this.props.header,
            items : this.props.items
        }
    },
    render: function () {
        return <div>
            <div className="desc">
                <h2>{this.state.header}</h2>
            </div>
            <div className="education-items">
                <ul className="personalDev">
                    {this.state.items.map(function(data, i) {
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