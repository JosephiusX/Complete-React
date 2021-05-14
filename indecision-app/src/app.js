

// Class component
class IndecisionApp extends React.Component{
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat([option])
                };
            });
        

    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                 hasOptions={this.state.options.length > 0}
                 handlePick={this.handlePick}
                 />
                <Options
                 options={this.state.options}
                 handleDeleteOptions={this.handleDeleteOptions}
                 />
                <AddOption 
                  handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

// functional component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

// functional component
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                What should I do?
                </button>
        </div>
    );
};

// class component - same as functional component above
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                     >
//                     What should I do?
//                     </button>
//             </div>
//         );
//     }
// }

// functional component
const Options = (props) => {
    return (
    <div>
         <button onClick={props.handleDeleteOptions}>Remove All</button>
           {
               props.options.map((option) => <Option key={option} optionText={option} />)
           }
     </div>
     );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
}



class AddOption extends React.Component {
    constructor(props) {
        super(props) 
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => {
            return {
                error // is === error: error
            };
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}> 
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


// functional component
// const User = (props) => { // we cant use state in functional components but we can use props
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));