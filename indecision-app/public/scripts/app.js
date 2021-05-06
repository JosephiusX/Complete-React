'use strict';

console.log('App.js is running');

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

// some attributes in jsx are the same as html like id,
// some jsx attributes have been changed like className instead of the html class
// I can set jsx properties = to js expressions using {}

var count = 0;
var addOne = function addOne() {
    count++; // count = count + 1;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    // this function helps us to re render when there is a change
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot); // react dom render only re renders specifically what is changed. It dosent bother to render parts that havent changed
};

renderCounterApp();
