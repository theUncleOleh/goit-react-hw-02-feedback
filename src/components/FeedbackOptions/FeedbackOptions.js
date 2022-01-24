import { Fragment } from 'react/cjs/react.production.min';
import Feedback from '../Feedback/Feedback';
import s from '../Feedback/Feedback.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="Feedback__button">
      {options.map(option => (
        <button
          key={option}
          className={s.btn}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
