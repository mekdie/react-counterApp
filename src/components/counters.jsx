import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //RULE OF THUMB
  // the component that owns a piece of the state, should be the one modifying it
  render() {
    //Object destructuring

    // below means get all of these props from this.props
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <>
        {/* Calling another component in the current component (components inside component) */}
        {/* <Counter />
        <Counter />
        <Counter />
        <Counter /> */}
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <br />
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
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
