import React, { Component } from "react";

class Counter extends Component {
  // state = { value: this.props.counter.value };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li> //unique key
  //         ))}
  //       </ul>
  //     );
  //   }
  //

  //a method that will be called when an object of this type is created
  // constructor() {
  //   super();
  //   // this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement = () => {
  //   //tell react that we are updating the state, and it will figure out what part of the state is changed
  //   this.setState({ value: this.state.value + 1 });
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    console.log("props", this.props);
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          // onClick={() => {
          //   this.handleIncrement({ id: 1 });
          // }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
