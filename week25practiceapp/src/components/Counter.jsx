import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };
  render() {
    return <button className="counterButton" onClick={this.handleClick}>{this.state.count}</button>;
  }
}
