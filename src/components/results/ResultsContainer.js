import React, { Component } from 'react';
import { getFilteredResources } from '../../lib/api';

export default class ResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            results: [],
            error: false,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.selected_filters !== prevProps.selected_filters) {
            getFilteredResources(this.props.selected_filters).then(r => {
                this.setState({
                    loading: false,
                    results: r.data,
                    error: false,
                });
            }).catch(err => {
                console.log(err);
                this.setState({
                    loading: false,
                    results: [],
                    error: true,
                });
            });
        }
      }

    render() {
        if(this.state.loading) {
            return (<div>Loading</div>);
        } else if (this.state.error) {
            return (<div>Error</div>);
        }
        return(<div>Results</div>);
    }
}