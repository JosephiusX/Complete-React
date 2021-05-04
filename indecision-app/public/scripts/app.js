'use strict';

console.log('App.js is running');

// JSX - Javascript XML
var template = React.createElement(
  'h1',
  null,
  'Indecision App'
); // bable changes this into the line below so it can work in other browsers, the file is compiled into app.js in the public file

var appRoot = document.getElementById('app'); // where we want to put that template 

ReactDOM.render(template, appRoot); // using reactDOM to say we wanna use
