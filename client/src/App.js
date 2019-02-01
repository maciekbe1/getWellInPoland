import React, { Component } from 'react';
import './styles/App.scss';

import Homepage from './components/Homepage';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Homepage />
            </div>
        );
    }
}

export default App;
