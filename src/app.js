'use strict';

class App extends React.Component {
    render() {
        return (
            <div className="App">
            React is awesome!
            </div>
            );
    }
}

let domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);
