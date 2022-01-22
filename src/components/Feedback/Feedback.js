import React from 'react';
import s from './Feedback.module.css';

class Feedback extends React.Component {
  //  constructor () {
  //      super ()

  //      this.state = {
  //         good: 0,
  //         neutral: 0,
  //         bad: 0
  //       }
  //  }
  //  static defaultProps = {
  //    total: 0,
  //    positiveFeedback: 0,
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

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good * 100) / (this.state.good + this.state.neutral),
    );
  };

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.header}>Please leave feedback</h1>
        <div className="Feedback__button">
          <button
            type="button"
            onClick={this.handleGoodButton}
            className={s.btn}
          >
            good
          </button>
          <button
            type="button"
            onClick={this.handleNeutralButton}
            className={s.btn}
          >
            neutral
          </button>
          <button
            type="button"
            onClick={this.handleBadButton}
            className={s.btn}
          >
            bad
          </button>
        </div>
        <h2 className="Feedback__title">Statistics</h2>
        <ul className="Feedback__list">
          <li className="Feedback__item">Good : {this.state.good}</li>
          <li className="Feedback__item">Neutral : {this.state.neutral}</li>
          <li className="Feedback__item">Bad : {this.state.bad}</li>
          <li>Total : {this.countTotalFeedback()}</li>
          <li>Positive feedback : {this.countPositiveFeedbackPercentage()}</li>
        </ul>
      </div>
    );
  }
}
export default Feedback;
