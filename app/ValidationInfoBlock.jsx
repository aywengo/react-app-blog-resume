var React = require('react');

var ValidationInfoBlock = React.createClass({
    render: function(i){
        if (this.props.isValid == true)
            return (
                <div className="alert-box success" key={i}>
                    <span>
                        {this.props.infomsg}
                    </span>
                </div>);

        else if (this.props.infomsg !== 'undefined' && this.props.infomsg instanceof Array)
            return (
                <div className="alert-box warning" key={i}>
                        {this.props.infomsg.map(function (data, k){
                            return <span key={k}>{data.property}: {data.message}<br/></span>
                        })}

                </div>);

        else return <div key={i}></div>
    }
});

module.exports = ValidationInfoBlock;