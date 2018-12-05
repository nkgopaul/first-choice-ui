import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import styles from './FiltersContainer.module.css'; 
import CheckboxFilter from './CheckboxFilter';
import filters from '../../locales/en'
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class FiltersContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className={styles.container}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={60}
            totalSlides={Object.values(filters).length}
          >
            <Slider>
              {
                Object.values(filters).map((f, i) => 
                  <Slide index={i} key={i}>
                    <CheckboxFilter
                      filter={Object.keys(filters)[i]}
                      question={f.question}
                      options={f.options}
                      checkedOptions={this.props.filters[Object.keys(filters)[i]]}
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