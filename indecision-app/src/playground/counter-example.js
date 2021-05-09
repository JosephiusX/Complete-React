
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