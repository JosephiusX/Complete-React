'use strict';

console.log('App.js is running');

// // if statements
// if ( 1 === 1) {
//     'equal'
// } else {
//     'not equal'
// }

// // ternary operators
// 1 === 1 ? 'equal' : 'not equal'  // if 1 = 1 then 'equal' else 'not equal'

var app = {
    title: 'Indecision App',
    subtitle: 'this is some info',
    options: ['One', 'Two']
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
        app.subtitle && app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'here are your options' : ''
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

// // we can use {} to place Javascript expressions inside our template2 to make the JSX dynamic
// var userName = 'Joseph';
// var userAge = 27;
// var userLocation = 'San Francisco'

// logical and operator
true && 'some age'; // if this is true && render this
false && 'some age'; // if false && render nothing


var user = {
    name: 'Joseph',
    age: 26,
    location: 'San Fraancisco'
};
var getLocation = function getLocation(location) {
    if (location) {
        // if location exist
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
};

// if something is undefined in jsx it just dosent show up like the getLocation function below this can be useful
// undefined, boolean, null are ignored by jsx
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
