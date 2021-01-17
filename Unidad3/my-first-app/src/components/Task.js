import React, { Component } from "react";
import { todos } from "../mock/todos.json";

class Task extends Component {
  constructor() {
    super();
    this.state = {
      todos,
    };
  }

  removeTodo(index) {
    console.log(index);
    if (window.confirm("Are you sure you want to delete it?")) {
      this.setState({
        todos: this.state.todos.filter((todo, i) => {
          return i !== index;
        }),
      });
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <button
                className="btn btn-danger rounded-circle"
                style={{ float: "right" }}
                onClick={this.removeTodo.bind(this, i)}
              >
                <i className="fas fa-trash"></i>
              </button>
              <h3 className="text-dark">
                {todo.title}&nbsp; -{" "}
                <span className="text-danger badge badge-danger ml-2">
                  {todo.priority}
                </span>
              </h3>
            </div>
            <div className="card-body">
              <p className="text-dark">{todo.description}</p>
            </div>
            <div className="card-footer">
              <p className="text-dark">{todo.responsable}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <button className="btn btn-primary">
          <i className="fas fa-plus"></i>
        </button>
        <span>&nbsp;&nbsp;&nbsp; {todos.length}</span>
        <div className="row mt-4">{todos}</div>
      </div>
    );
  }
}

export default Task;
