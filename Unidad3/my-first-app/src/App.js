import { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Task from "./components/Task";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Tablero de Tareas"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation title={this.state.title} />
          <Task />
        </header>
      </div>
    );
  }
}

export default App;
