import React, { Component } from 'react';
import './App.css';
import Splash from './components/splash/Splash'
import Navbar from './components/navbar/Navbar.js';
import FiltersContainer from './components/filters/FiltersContainer';
import ResultsContainer from './components/results/ResultsContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filters: {
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
      },
      displaySplash: true,
    }

    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.disableSplash = this.disableSplash.bind(this);
  }

  addFilter(filter, value) {
    this.setState({
      ...this.state,
      filters: {
        ...this.state.filters,
        [filter]: [...this.state["filters"][filter], value]
      }
    });
  }

  removeFilter(filter, value) {
    let updatedFilters = this.state["filters"][filter];
    updatedFilters.splice(updatedFilters.indexOf(value), 1);

    this.setState({
      ...this.state,
      filters: {
        ...this.state.filters,
        [filter]: updatedFilters
      }
    });
  }

  disableSplash() {
    this.setState({ displaySplash: false });
  }

  render() {
    return (
      this.state.displaySplash ? 
      <Splash disableSplash={this.disableSplash}/> :
      <div>
        <Navbar />
        <div className="App">
          <FiltersContainer
            addFilter={this.addFilter}
            removeFilter={this.removeFilter}
            selected_filters={this.state.filters}
          />
          <ResultsContainer
            selected_filters={this.state.filters}
          />
        </div>
      </div>
    );
  }
}

export default App;
