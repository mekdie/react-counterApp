import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import { Component } from "react";

class App extends Component {
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
    const x = [...this.state.counters]; //cloning array, counters = counters array in state
    const index = x.indexOf(counter);
    console.log(x);
    // x[index] = { ...counter };

    x[index].value++;
    this.setState({ counters: x });
  };

  render() {
    return (
      <>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </>
    );
  }
}

export default App;
