/** @jsx React.DOM */
var React = require('react');
var Model = require('./model.js');
var Revalidator = require('revalidator');

var getValidationSchema = function () {
    return {
        properties: {
            email: {
                description: 'the url the object should be stored at',
                type: 'string',
                pattern: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
                required: true
            },
            name: {
                description: 'a means of protecting data (insufficient for production, used as example)',
                type: 'string',
                required: true
            },
            text: {
                type: 'string',
                minLength: 2,
                default: null
            }
        }
    }
};

var ContactForm = React.createClass({
    getInitialState: function () {
        return {infomsg: ''}
    },
    handleSubmit: function () {
        var subject = {
            name: this.refs.uname.getDOMNode().value.toString(),
            email: this.refs.uemail.getDOMNode().value.toString(),
            text: this.refs.umessage.getDOMNode().value.toString()
        };
        var isValid = Revalidator.validate(subject, getValidationSchema());

        if (!isValid.valid){
            console.log(isValid.errors);
            return;
        }

        var jso = JSON.stringify(subject);
        $.ajax({
            url: Model.service + '/send',
            contentType: 'text/plain',
            crossDomain: true,
            type: 'POST',
            data: jso,
            success: function (body) {
                this.setState({infomsg: body})
            }.bind(this),
            error: function (error) {
                this.setState({infomsg: error.responseType})
            }.bind(this)
        });
    },
    render: function () {
        var submitted = <div className="alert-box success"><span>{this.state.infomsg}</span></div>

        return <form className="fc-contact-form" ref="contactForm">
            {submitted}
            <label htmlFor="uname">Your name</label>
            <input type="text" ref="uname" id="uname" required/>

            <p className="error uname-error"></p>
            <label htmlFor="uemail">Your email</label>
            <input type="email" ref="uemail" id="uemail" required/>

            <p className="error uemail-error"></p>
            <label htmlFor="umessage">Your message</label>
            <textarea className="umessage" id="umessage" ref="umessage" required></textarea>

            <br/>
            <button className="submit" id="fc-contact-btn" onClick={this.handleSubmit}>
                Submit
            </button>
        </form>
    }
});

module.exports = ContactForm;