import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import styles from './FiltersContainer.module.css'; 
import CheckboxFilter from './CheckboxFilter';
import { FILTERS } from '../../locales/en'
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class FiltersContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={60}
          totalSlides={Object.values(FILTERS).length}
        >
          <Slider>
            {
              Object.values(FILTERS).map((f, i) => 
                <Slide index={i} key={i}>
                  <CheckboxFilter
                    key={`${Object.keys(FILTERS)[i]} ${this.props.selected_filters[Object.keys(FILTERS)[i]]}`}
                    filter={Object.keys(FILTERS)[i]}
                    question={f.question}
                    options={f.options}
                    checkedOptions={this.props.selected_filters[Object.keys(FILTERS)[i]]}
                    addFilter={this.props.addFilter}
                    removeFilter={this.props.removeFilter}
                  />
                </Slide>
              )
            }
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>
      );
    }
}