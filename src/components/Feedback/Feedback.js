import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './Feedback.css';

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
    this.setState({
      good: 13,
    });
  };
  handleNeutralButton = () => {
    console.log('neutral');
    console.log(this);
  };
  handleBadButton = () => {
    console.log('bad');
    console.log(this);
  };

  render() {
    return (
      <Fragment>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.handleGoodButton}>
            good
          </button>
          <button type="button" onClick={this.handleNeutralButton}>
            neutral
          </button>
          <button type="button" onClick={this.handleBadButton}>
            bad
          </button>
        </div>
        <h2>Statistics</h2>
        <ul>
          <li>Good : {this.state.good}</li>
          <li>Neutral : {this.state.neutral}</li>
          <li>Bad : {this.state.bad}</li>
        </ul>
      </Fragment>
    );
  }
}
export default Feedback;
