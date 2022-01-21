import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import styles from './Feedback.module.css';

class Feedback extends React.Component {
  //  constructor () {
  //      super ()

  //      this.state = {
  //         good: 0,
  //         neutral: 0,
  //         bad: 0
  //       }
  //  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodButton = () => {
    console.log(' good');
    console.log(this);
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutralButton = () => {
    console.log('neutral');
    console.log(this);
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBadButton = () => {
    console.log('bad');
    console.log(this);
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <Fragment>
        <h1 className={styles.Feedback__header}>Please leave feedback</h1>
        <div className="Feedback__container">
          <button
            type="button"
            onClick={this.handleGoodButton}
            className="Feedback__btn"
          >
            good
          </button>
          <button
            type="button"
            onClick={this.handleNeutralButton}
            className="Feedback__btn"
          >
            neutral
          </button>
          <button
            type="button"
            onClick={this.handleBadButton}
            className="Feedback__btn"
          >
            bad
          </button>
        </div>
        <h2 className="Feedback__title">Statistics</h2>
        <ul className="Feedback__list">
          <li className="Feedback__item">Good : {this.state.good}</li>
          <li className="Feedback__item">Neutral : {this.state.neutral}</li>
          <li className="Feedback__item">Bad : {this.state.bad}</li>
        </ul>
      </Fragment>
    );
  }
}
export default Feedback;
