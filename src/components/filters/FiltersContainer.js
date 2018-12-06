import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot  } from 'pure-react-carousel';
import styles from './FiltersContainer.module.css'; 
import CheckboxFilter from './CheckboxFilter';
import { FILTERS } from '../../locales/en'
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class FiltersContainer extends Component {
  
  render() {
    const filterNames = Object.keys(FILTERS);
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
                <Slide index={i} key={i} className={styles.slide}>
                  <CheckboxFilter
                    key={`${filterNames[i]} ${this.props.selected_filters[filterNames[i]]}`}
                    filter={filterNames[i]}
                    question={f.question}
                    options={f.options}
                    checkedOptions={this.props.selected_filters[filterNames[i]]}
                    addFilter={this.props.addFilter}
                    removeFilter={this.props.removeFilter}
                  />
                </Slide>
              )
            }
          </Slider>
          <div className={styles.buttonsContainer}>
            <ButtonBack className={styles.nav_btn}>{`← Back`}</ButtonBack>
            {
              filterNames.map((e, i) => 
                <Dot
                  slide={i}
                  className={styles.dots}
                />
              )
            }
            <ButtonNext className={styles.nav_btn}>{`Next →`}</ButtonNext>
          </div>
        </CarouselProvider>
      </div>
      );
    }
}