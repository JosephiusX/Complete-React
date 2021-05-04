'use strict';

console.log('App.js is running');

// JSX - Javascript XML
// when working with jsx we can only have one root element
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item one'
        ),
        React.createElement(
            'li',
            null,
            'item two'
        )
    )
);

// Challange
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Joseph Granville'
    ),
    React.createElement(
        'p',
        null,
        'Age: 29'
    ),
    React.createElement(
        'p',
        null,
        'Location: San Francisco'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
