var React = require('react');
var Head = require('./Head.jsx');
var Desc = require('./Desc.jsx');
var SubnavContainer = require('./SubnavContainer.jsx');
var blog = require('./blog.js');

var InfoBlock = React.createClass({
    render: function () {
        return  <div>
                    <div className="desc">
                        <p>{blog.text}</p>
                    </div>
            <SubnavContainer />
        </div>;
    }
});

module.exports = InfoBlock;