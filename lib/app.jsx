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

    handleClick: function() {
        var serf = this;
        serf.setState({'value': serf.state.value =='X' ? 'O' : 'X'});
    },


    'render': function onRender () {
        return (
            <button style={buttonStyle} onClick={this.handleClick}>{this.state.value}</button>
        );
    }

});


var Row = React.createClass({

    'render': function onRender (){
        return (
            <div>
                <Box/>
                <Box/>
                <Box/>
            </div>
        );

    }
});

// here we ask React to add the component Box into the body
React.render(<Row/>, document.body);
