'use strict';

console.log('App.js is running');

// JSX - Javascript XML
// when working with jsx we can only have one root element
var app = {
    title: 'Indecision App',
    subtitle: 'this is some info'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
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

var user = {
    name: 'JosephiusX',
    age: 30,
    location: 'SF'

    // // we can use {} to place Javascript expressions inside our template2 to make the JSX dynamic
    // var userName = 'Joseph';
    // var userAge = 27;
    // var userLocation = 'San Francisco'

};var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age:',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
