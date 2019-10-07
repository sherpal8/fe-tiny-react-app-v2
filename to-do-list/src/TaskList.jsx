import React from "react";

const TaskList = ({ list }) => {
  return (
    <ul>
      {list.map(({ taskName, doByDate }) => {
        return (
          <li key={taskName}>
            {taskName} before {doByDate}
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
