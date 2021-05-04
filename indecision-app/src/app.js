console.log('App.js is running');

// JSX - Javascript XML
// when working with jsx we can only have one root element
var app = {
    title: 'Indecision App',
    subtitle: 'this is some info'
}
var template = (
    <div> 
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>
                item one
            </li>
            <li>
                item two
            </li>
        </ol>
    </div>
);

var user = {
    name: 'JosephiusX',
    age: 30,
    location: 'SF'
}

// // we can use {} to place Javascript expressions inside our template2 to make the JSX dynamic
// var userName = 'Joseph';
// var userAge = 27;
// var userLocation = 'San Francisco'

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age:{user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

