var React = require('react');
var SubnavContainer = require('./SubnavContainer.jsx');
var Config = require('./config.js');

var InfoBlock = React.createClass({
    render: function () {
        return  <div>
                    <div className="desc">
                        <p>{Config.text}</p>
                    </div>
            <SubnavContainer />
        </div>;
    }
});

module.exports = InfoBlock;