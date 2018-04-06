import React from 'react';
import GeneratorContainer from './containers/GeneratorContainer';
import Header from './components/Header';

const App = () => { 
    return (
      <div className="App">
        <Header />
        <GeneratorContainer />
      </div>
    );  
}

export default App;
