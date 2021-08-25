import { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import s from "./Feedback.module.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (e) => {
    const value = e.target.textContent;
    this.setState((prevState) => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const arr = Object.values(this.state);
    const Percentage = arr.map((value) => {
      return (value * 100) / this.countTotalFeedback();
    });
    return Math.round(Percentage[0]);
  };

  render() {
    const key = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleClick} options={key} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={this.countTotalFeedback()}
              positivePercentage={
                Number(this.countPositiveFeedbackPercentage())
                  ? this.countPositiveFeedbackPercentage()
                  : 0
              }
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
