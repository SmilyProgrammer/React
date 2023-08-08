import React, { Component } from "react";

class ClassCounterTwo extends Component {
  constructor(props) {
    super(props);
    this.initialCount = 0;
    this.state = {
      count: this.initialCount,
    };
    // Binding Event Handling approach 2
    this.decrementCount = this.decrementCount.bind(this);
  }
  // Increment Count
  incrementCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  // Increment Five
  incrementFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  // Decrement Count
  decrementCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count === 0 ? 0 : prevState.count - 1,
      };
    });
  }

  // Decrement Five -
  /**
   * Event Binding Final and 4th Approach:
   * Use an Arrow function as a class property
   * Basically its a chaning in method declaration in class property
   */
  decrementFive = () => {
    this.decrementCount();
    this.decrementCount();
    this.decrementCount();
    this.decrementCount();
    this.decrementCount();
  };
  render() {
    return (
      <div>
        count: {this.state.count}
        {/** Binding Event Handling Approach 1 */}
        <button onClick={this.incrementCount.bind(this)}>Increment</button>
        {/** Binding Event Handling Approach 2 - Declaration in Constructor */}
        <button onClick={this.decrementCount}>Decrement</button>
        {/** Binding Event Handling Approach 3 */}
        <button onClick={() => this.incrementFive()}>Increment 5</button>
        {/** Bindign Event Handling Approach 4 -  */}
        <button onClick={this.decrementFive}>Decrement 5</button>
        <button onClick={() => this.setState({ count: this.initialCount })}>
          Reset
        </button>
      </div>
    );
  }
}

export default ClassCounterTwo;
