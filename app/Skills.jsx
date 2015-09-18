var React = require('react');
var Model = require('./model.js');
var Request = require('request');
var Spinner = require('react-spinner');

var elementBody;
var Skills = React.createClass({
    getInitialState: function () {
        return {data: []};
    },
    componentWillMount: function() {
        elementBody = <Spinner />
    },
    componentDidMount: function () {
        Request.get(Model.resource + "skills",
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
        function rates(value){
            var spans = [];
            for (var i = 0; i < 10; i++){
                spans.push( <span key={i} className={i >= value ? "empty" : "filled"}></span> )
            }
            return spans;
        }
        function item(args, id) {
            return (<li key={id}>
                <span className="skill">{args.name}</span>
                <div className="rating">
                    {rates(args.value)}
                </div>
                <div className="description">{args.description}</div>
            </li>)
        }

        return (<ul className="skills">
            {elementBody}
            {this.state.data.map(item)}
        </ul>)
    }
});

module.exports = Skills;