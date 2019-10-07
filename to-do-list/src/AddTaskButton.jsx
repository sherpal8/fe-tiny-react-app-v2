import React, { Component } from "react";

class AddTaskButton extends Component {
  state = { taskName: "", doByDate: "" };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task name:
          <input
            type="text"
            name="taskName"
            onChange={this.inputChangeHandler}
          ></input>
        </label>
        <label>
          Do-by date:
          <input
            type="date"
            name="doByDate"
            onChange={this.inputChangeHandler}
          ></input>
        </label>
        <button type="submit">Submit new task</button>
      </form>
    );
  }
  inputChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      return { [name]: value };
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { addTaskFunc } = this.props;
    const { taskName, doByDate } = this.state;
    addTaskFunc({ taskName, doByDate });
  };
}

export default AddTaskButton;
