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
    options:['One', 'Two']
}
var template = (
    <div> 
        <h1>{app.title}</h1>
        <p>{app.subtitle && app.subtitle}</p>
        <p>{app.options.length > 0 ? 'here are your options' : ''}</p>
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



// // we can use {} to place Javascript expressions inside our template2 to make the JSX dynamic
// var userName = 'Joseph';
// var userAge = 27;
// var userLocation = 'San Francisco'

// logical and operator
true && 'some age' // if this is true && render this
false && 'some age' // if false && render nothing


var user = {
    name:'Joseph',
    age:26,
    location: 'San Fraancisco'
};
const getLocation = (location) => {
    if (location) { // if location exist
        return <p>Location: {location}</p>
    }
}

// if something is undefined in jsx it just dosent show up like the getLocation function below this can be useful
// undefined, boolean, null are ignored by jsx
var template2 = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

