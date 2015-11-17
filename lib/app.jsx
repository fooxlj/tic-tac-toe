'use strict';

var React = require('react');

//CSS styl efor the button
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
        componentWillMount: function() {
            var serf = this;
            this.timer = setInterval(function(){
                serf.setState({'value' : serf.state.value =='X'? '0':'X'});
            },300)
        },
    
        'render': function onRender () {
            return (
                <button style={buttonStyle}>{this.state.value}</button>
            )
        }

});

// here we ask React to add the component Box into the body
React.render(<Box value='Y'/>, document.body);
