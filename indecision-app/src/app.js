console.log('App.js is running');

// JSX - Javascript XML
var template = <h1>Indecision App</h1>; // bable changes this into the line below so it can work in other browsers, the file is compiled into app.js in the public file

var appRoot = document.getElementById('app'); // where we want to put that template 

ReactDOM.render(template, appRoot); // using reactDOM to say we wanna use 

