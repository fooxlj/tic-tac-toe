'use strict';

var React = require('react');

//CSS style for the button
var buttonStyle = {
    'height': '100px',
    'width': '100px'
};

var Box = React.createClass({
    /**
     * Render a HTML button
     * @return {ReactElement}
     */
        'getInitialState':function onGetInitialState(){
        return {
            "value": this.props.initialValue
        }
    },
        handleOnclick: function() {
            var serf = this;
            serf.setState({'value' : serf.state.value =='X'? '0':'X'});
        },

    componentDidMount: function() {
        window.addEventListener('click', this.handleOnclick);
    },

    componentWillUnmount: function() {
        window.removeEventListener('click', this.handleOnclick);
    },
        'render': function onRender () {
            return (
                <button style={buttonStyle} onclick={this.handleOnclick}>{this.state.value}</button>
            )
        }

});

// here we ask React to add the component Box into the body
React.render(<Box value='X'/>, document.body);
