import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "eating", done: true },
      { id: "002", name: "sleeping", done: true },
      { id: "003", name: "coding", done: true },
      { id: "004", name: "gaming", done: true },
    ],
  };

  addTodo = (todo) => {
    const { todos } = this.state;

    const newTodos = [todo, ...todos];
    this.setState({ todos: newTodos });
  };

  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: done };
      else return todo;
    });
    this.setState({ todos: newTodos });
  };

  deleteTodo = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      const { todos } = this.state;
      const newTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      this.setState({ todos: newTodos });
    }
  };

  checkAll = (check) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done: check };
    });
    this.setState({ todos: newTodos });
  };

  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return !todo.done;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAll={this.checkAll}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    );
  }
}
