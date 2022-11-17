import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1000 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id != counterId);
    // this.setState({ counters: counters });
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((each) => {
      each.value = 0;
      return each;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //cloning array, counters = counters array in state
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  //RULE OF THUMB
  // the component that owns a piece of the state, should be the one modifying it
  render() {
    return (
      <>
        {/* Calling another component in the current component (components inside component) */}
        {/* <Counter />
        <Counter />
        <Counter />
        <Counter /> */}
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <br />
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            // value={counter.value}
            // id={counter.id}
            counter={counter} //counter object that carries all the data inside the obj
          />
        ))}
      </>
    );
  }
}

export default Counters;
