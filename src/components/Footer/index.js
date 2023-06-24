import React, { Component } from "react";

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAll(event.target.checked);
  };

  handleClearAllDone = () => {
    this.props.clearAllDone();
  };

  render() {
    const { todos } = this.props;
    const doneTodos = todos.reduce((sum, curr) => {
      return sum + (curr.done ? 1 : 0);
    }, 0);
    const allTodos = todos.length;

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneTodos === allTodos && allTodos !== 0}
          />
        </label>
        <span>
          <span>DONE {doneTodos} </span> / All {allTodos}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>
          CLEAR ALL DONE JOBS
        </button>
      </div>
    );
  }
}
