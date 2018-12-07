import React, { Component } from 'react';
import { getFilteredResources } from '../../lib/api';
import styles from './ResultsContainer.module.css';
import Card from './Card';

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
                    errorText: err,
                });
            });
        }
      }

    render() {
        let content;
        if(this.state.loading) {
            content = 
                    <div className={styles.resultsFeedback}>
                        <span role='img' aria-label='time'>🕒</span>
                        <div>Loading results...</div>
                    </div>
            ;
        } else if (this.state.error) {
            content = <Card header={"Error"} content={"We encountered a problem while fetching results. Please try again later or report this issue."} />;
        } else if (Object.keys(this.state.results).length > 0) {
            content = Object.values(this.state.results).map(d => d.data.map(e => 
                <Card
                    header={e.name}
                    content={e.notes}
                    url={e.url}
                />
            ))
        } else {
            content = 
                    <div className={styles.resultsFeedback}>
                        <span role='img' aria-label='shrug'>🤷</span>
                        <div>No results found</div>
                    </div>
            ;
        }

        return (
            <div className={styles.container}>
                <div className={styles.resources}><b>Resources</b></div>
                {content}
            </div>
        );
    }
}