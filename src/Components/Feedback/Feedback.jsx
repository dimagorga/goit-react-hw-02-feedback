import { Component } from "react";
import Button from "../Button/Button";

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
      (acc, currentValue) => acc + currentValue
    );
  };

  countTotal = () => {
    const arr = Object.values(this.state);
    const Procent = arr.map((value) => {
      return (value * 100) / this.countTotalFeedback();
    });
    return Math.round(Procent[0]);
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Button increment={this.incrementGood} name={"good"} />
        <Button increment={this.incrementNeutral} name={"neutral"} />
        <Button increment={this.incrementBad} name={"bad"} />

        <h2>Statistics</h2>
        <p>
          Good: <span>{this.state.good}</span>
        </p>
        <p>
          Neutral: <span>{this.state.neutral}</span>
        </p>
        <p>
          Bad: <span>{this.state.bad}</span>
        </p>
        <p>
          Total: <span>{this.countTotalFeedback()}</span>
        </p>
        <p>
          Positive feedback:<span>{this.countTotal()}%</span>
        </p>
      </div>
    );
  }
}

export default Feedback;
