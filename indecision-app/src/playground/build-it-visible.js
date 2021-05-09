const app = {
    title:  "Visibility Toggle",
    details: "hey thease are some details I can now see"
}

let visibility = false;

const toggle = () => {
    visibility = !visibility
    render()
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggle}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (
                <div>
                    <p>{app.details}</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(template, appRoot);
}

render();