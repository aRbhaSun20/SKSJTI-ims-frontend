import {
  AccessTime,
  Add,
  Assignment,
  AssignmentTurnedIn,
  Check,
  Clear,
  PendingActions,
} from "@mui/icons-material";
import { IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";

const TODOS = [
  {
    name: "Run payroll",
    timestamp: "Mar 4 at 6:00 pm",
    icons: <PendingActions />,
  },
  {
    name: "Review time off request",
    timestamp: "Mar 7 at 6:00 pm",
    icons: <AccessTime />,
  },
  {
    name: "Sign board resolution",
    timestamp: "Mar 12 at 6:00 pm",
    icons: <Assignment />,
  },
  {
    name: "Finish onboarding Tony",
    timestamp: "Mar 12 at 8:00 pm",
    icons: <AssignmentTurnedIn />,
  },
];

function ToDo() {
  return (
    <div className="todos">
      <div className="title">
        <Typography variant="h5">
          <b>Your to-Do list</b>
        </Typography>
        <IconButton>
          <Tooltip arrow title="Add new todo">
            <Add />
          </Tooltip>
        </IconButton>
      </div>
      <div className="todo-list">
        {TODOS.map((ele, i) => (
          <IndiTodo ele={ele} key={i} />
        ))}
      </div>
    </div>
  );
}

export default ToDo;

const IndiTodo = ({ ele }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((state) => !state);
  };

  const handleSubmit = () => {};

  const handleCancel = () => {};

  return (
    <div className="indi-todo-cont">
      <div className="indi-todo">
        <IconButton onClick={handleToggle} className="todo-but">
          {ele.icons}
        </IconButton>
        <div>
          <Typography variant="subtitle1">
            <b>{ele.name}</b>
          </Typography>
          <Typography variant="overline">{ele.timestamp}</Typography>
        </div>
      </div>
      {show && (
        <div className="todo-checklist">
          <IconButton onClick={handleSubmit}>
            <Check style={{ color: "green" }} />
          </IconButton>
          <IconButton onClick={handleCancel}>
            <Clear style={{ color: "red" }} />
          </IconButton>
        </div>
      )}
    </div>
  );
};
