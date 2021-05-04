console.log('App.js is running');

// JSX - Javascript XML
// var template = <p>This is JSX from app.js!</p>; // bable changes this into the line below so it can work in other browsers
var template = /*#__PURE__*/React.createElement("p", null, "Something New"); // It happens automatically, normally we wont see it in our code like this

var appRoot = document.getElementById('app'); // where we want to put that template 

ReactDOM.render(template, appRoot); // using reactDOM to say we wanna use 