import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    color?: string;
}

// Functional Component Method
// annotation for props object (usually an interface)
// return type annotation (usually JSX.Element)
// const App = (props: AppProps): JSX.Element => {
//     return <div>
//         {props.color}
//     </div>
// }

// Method 2 of handling state
interface AppState {
    counter: number
}

// Method 2: Need to include AppState type as second argument
class App extends React.Component<AppProps> {
    // Method 1: Override state property defined inside Component
    state = {
        counter: 0
    };

    // Method 2 of handling state
    // constructor(props: AppProps) {
    //     super(props);

    //     this.state = {
    //         counter: 0
    //     }
    // }

    onIncrement = (): void => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    onDecrement = (): void => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
                {this.state.counter}
            </div>
        );
    }
}

ReactDOM.render(<App color="red" />, document.querySelector('#root'));