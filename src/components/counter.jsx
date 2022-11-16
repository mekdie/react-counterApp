import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0, tags: [] };

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
  handleIncrement = (product) => {
    //tell react that we are updating the state, and it will figure out what part of the state is changed
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          // onClick={() => {
          //   this.handleIncrement({ id: 1 });
          // }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
