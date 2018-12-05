import React, { Component } from 'react';

export default class CheckboxFilter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>{this.props.question}</div>
                {
                    this.props.options.map(e => 
                        <label key={e}>
                            <input
                                type='checkbox'
                                name={e}
                                onChange={() => {
                                    this.props.checkedOptions.indexOf(e) == -1 ?
                                    this.props.addFilter(this.props.filter, e) :
                                    this.props.removeFilter(this.props.filter, e)
                                }} 
                                checked={this.props.checkedOptions.indexOf(e) == -1 ? false : true} 
                            />
                            {e}
                        </label>
                    )
                }
            </div>
        );
    }
}