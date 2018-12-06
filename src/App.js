import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import FiltersContainer from './components/filters/FiltersContainer';
import ResultsContainer from './components/results/ResultsContainer';

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
      <div>
        <Navbar />
        <div className="App">
          <FiltersContainer
            addFilter={this.addFilter}
            removeFilter={this.removeFilter}
            selected_filters={this.state}
          />
          <ResultsContainer
            selected_filters={this.state}
          />
        </div>
      </div>
    );
  }
}

export default App;
