import { Fragment } from 'react/cjs/react.production.min';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import s from '../Feedback/Feedback.module.css';
import Feedback from '../Feedback/Feedback';

export default function Section({ title, children }) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
