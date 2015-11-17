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
        serf.setState({'value': serf.state.value =='-' ? 'O' : '-'});
    },


    'render': function onRender () {
        return (
            <button style={buttonStyle} onClick={this.handleClick}>{this.state.value}</button>
        );
    }

});


var Row = React.createClass({
    'getInitialState':function onGetInitialState() {
        return {
            "results": [1, 2, 3]
        };
    },
    'render': function onRender (){
        var results = this.state.results;
        return (
            <div>
                {results.map(function(result) {
                    return <Box key={result.id} initialValue='-'>{result.text}</Box>;
                })}
            </div>
        );

    }
});

// here we ask React to add the component Box into the body
React.render(<Row/>, document.body);
