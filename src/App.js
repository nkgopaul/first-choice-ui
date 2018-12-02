import React, { Component } from 'react';
import './App.css';
import FiltersContainer from './components/filters/FiltersContainer';
import ResultsContainer from './components/results/ResultsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FiltersContainer />
        <ResultsContainer />
      </div>
    );
  }
}

export default App;
