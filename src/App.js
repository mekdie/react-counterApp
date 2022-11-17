import Navbar from "./components/navbar";
import "./App.css";
import Counter from "./components/counter";
import Counters from "./components/counters";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </>
  );
}

export default App;
