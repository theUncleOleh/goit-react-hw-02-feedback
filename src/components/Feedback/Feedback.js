import React from 'react';
import s from './Feedback.module.css';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

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

  handleClick = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
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
    const keys = Object.keys(this.state);
    return (
      <div className={s.container}>
        <h1 className={s.header}>Please leave feedback</h1>
        <FeedbackOptions options={keys} onLeaveFeedback={this.handleClick} />
        {/* <h1 className={s.header}>Please leave feedback</h1>
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
        </div> */}
        <h2 className="Feedback__title">Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />

        {/* <ul className="Feedback__list">
          <li className="Feedback__item">Good : {this.state.good}</li>
          <li className="Feedback__item">Neutral : {this.state.neutral}</li>
          <li className="Feedback__item">Bad : {this.state.bad}</li>
          <li>Total : {this.countTotalFeedback()}</li>
          <li>Positive feedback : {this.countPositiveFeedbackPercentage()}</li>
        </ul> */}
      </div>
    );
  }
}
export default Feedback;
