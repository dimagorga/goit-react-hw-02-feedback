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

  incrementGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  incrementNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  incrementBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
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
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.incrementGood}
            options={"good"}
          />
          <FeedbackOptions
            onLeaveFeedback={this.incrementNeutral}
            options={"neutral"}
          />
          <FeedbackOptions
            onLeaveFeedback={this.incrementBad}
            options={"bad"}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
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
