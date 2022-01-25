import React from 'react';
import s from './Feedback.module.css';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
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
    let total = this.state.good + this.state.neutral + this.state.bad;
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="there is no feedback"></Notification>
          )}
          :{' '}
        </Section>
      </div>
    );
  }
}

export default Feedback;
