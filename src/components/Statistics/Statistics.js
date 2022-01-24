import Feedback from '../Feedback/Feedback';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  {
    /* <Statistics 
good={this.state.good} 
neutral={this.state.neutral} 
bad={this.state.bad} 
total={this.countTotalFeedback()} 
positivePercentage={this.countPositiveFeedbackPercentage()}/> */
  }
  return (
    <ul className="Feedback__list">
      <li className="Feedback__item">Good : {good}</li>
      <li className="Feedback__item">Neutral : {neutral}</li>
      <li className="Feedback__item">Bad : {bad}</li>
      <li>Total : {total}</li>
      <li>Positive feedback : {positivePercentage}</li>
    </ul>
  );
}
