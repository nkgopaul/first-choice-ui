import React, { Component } from 'react';
import { getFilteredResources } from '../../lib/api';
import styles from './ResultsContainer.module.css';

export default class ResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            results: [],
            error: false,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.selected_filters !== prevProps.selected_filters) {
            this.setState({
                error: false,
                results: [],
                loading: true,
            })
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
        let content;
        if(this.state.loading) {
            content = <div>Loading</div>;
        } else if (this.state.error) {
            content = <div>Error</div>;
        } else if (Object.keys(this.state.results).length > 0) {
            content = <div>Results</div>;
        } else {
            content = <div>No results found</div>;
        }

        return (
            <div className={styles.container}>
                <div>Resources</div>
                {content}
            </div>
        );
    }
}