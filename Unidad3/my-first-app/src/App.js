import { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Task from "./components/Task";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation title="Tablero de Tareas" />
          <Task />
        </header>
      </div>
    );
  }
}

export default App;
