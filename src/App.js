import React, { Component } from 'react';
import './App.css';
import FiltersContainer from './components/filters/FiltersContainer';
import ResultsContainer from './components/results/ResultsContainer';
import { getAllResources } from './lib/api';

class App extends Component {
  constructor() {
    super();

    this.state = {
      category: [],
      gender: [],
      race_ethnicity: [],
      age: [],
      marital_status: [],
      employment: [],
      sexual_orient: [],
      beliefs: [],
      criminality: [],
      citizenship: [],
      time_period: [],
    }

    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
  }

  addFilter(filter, value) {
    this.setState({ [filter]: [...this.state[filter], value] });
  }

  removeFilter(filter, value) {
    let updatedFilters = this.state[filter];
    updatedFilters.splice(updatedFilters.indexOf(value), 1);
    this.setState({ [filter]: updatedFilters });  
  }

  render() {
    return (
      <div className="App">
        <FiltersContainer
          addFilter={this.addFilter}
          removeFilter={this.removeFilter}
          filters={this.state}
        />
        <ResultsContainer />
      </div>
    );
  }
}

export default App;
