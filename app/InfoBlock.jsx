var React = require('react');
var SubnavContainer = require('./SubnavContainer.jsx');
var Model = require('./model.js');

var InfoBlock = React.createClass({
    render: function () {
        return  <div>
                    <div className="desc">
                        <p>{Model.text}</p>
                    </div>
            <SubnavContainer />
        </div>;
    }
});

module.exports = InfoBlock;