import React, { Component } from "react";
import TaskList from "./TaskList.jsx";
import AddTaskButton from "./AddTaskButton.jsx";
import "./App.css";

class App extends Component {
  state = {
    list: [
      { taskName: "shopping", doByDate: "2019-10-11" },
      { taskName: "cleaning", doByDate: "2019-10-16" },
      { taskName: "cooking", doByDate: "2019-10-22" }
    ]
  };
  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <TaskList list={list} />
        <AddTaskButton addTaskFunc={this.addTaskFunc} />
      </div>
    );
  }
  addTaskFunc = newTaskObject => {
    const listCopy = [...this.state.list];
    listCopy.push(newTaskObject);
    this.setState(({ list }) => {
      return { list: listCopy };
    });
  };
}

export default App;
