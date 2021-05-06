console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'this is some info',
    options:['One', 'Two']
}
const template = (
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

// some attributes in jsx are the same as html like id,
// some jsx attributes have been changed like className instead of the html class
// I can set jsx properties = to js expressions using {}

let count = 0;
const addOne = () => {
     count++ // count = count + 1;
     renderCounterApp();
    
    }

const minusOne = () => {
    count--;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => { // this function helps us to re render when there is a change
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot); // react dom render only re renders specifically what is changed. It dosent bother to render parts that havent changed
};

renderCounterApp();