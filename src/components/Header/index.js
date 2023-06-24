import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class Header extends Component {
  handleKeyUp = (event) => {
    const { key, target } = event;
    if (key !== "Enter") return;
    if (target.value.trim() === "") {
      alert("Input cannot be empty!");
      return;
    }

    const todo = { id: nanoid(), name: target.value, done: false };
    this.props.addTodo(todo);

    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          onKeyUp={this.handleKeyUp}
          placeholder="Enter a Job, and Click ENTER"
        />
      </div>
    );
  }
}
