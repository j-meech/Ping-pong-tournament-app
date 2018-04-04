import React, { Component } from 'react';
import GeneratorContainer from './containers/GeneratorContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ping Pong!</h1>
        </header>
        <GeneratorContainer />
      </div>
    );
  }
}

export default App;
