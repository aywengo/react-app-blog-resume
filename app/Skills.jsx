var React = require('react');

var Skills = React.createClass({
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
            {this.props.skills.map(item)}
        </ul>)
    }
});

module.exports = Skills;