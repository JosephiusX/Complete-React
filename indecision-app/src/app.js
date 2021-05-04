console.log('App.js is running');

// JSX - Javascript XML
// when working with jsx we can only have one root element
var template = (
    <div> 
        <h1>Indecision App</h1>
        <p>This is some info</p>
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

// Challange
var template2 = (
    <div>
        <h1>Joseph Granville</h1>
        <p>Age: 29</p>
        <p>Location: San Francisco</p>
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);

