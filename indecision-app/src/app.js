class Header extends React.Component {
    render() {
       return (
        <div>
            <h1>Indecision</h1>
            <h2>Put your life in the hands of a computer</h2>
        </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

// Options 
class Options extends React.Component {
    render() {
       return (
       <div>
            <h3>Options component here</h3>
        </div>
        );
    }
}

// AddOption 
class AddOption extends React.Component {
    render() {
        return (
            <form>
                <input placeholder='AddOption'/>
            </form>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action/>
        <Options/>
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));