import React from "react";
import Box from "../../components/Box";
import { dataTodo } from "../../dataTodo/constant";
import Task from "./Task";

const DisplayTaskField = () => {
  const tasks = dataTodo;
  return (
    <Box
      sx={{
        maxHeight: "40vh",
        width: "100%",
        marginTop: "20px",
        overflow: "hidden",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: "0.1em",
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        },
      }}
    >
      {tasks.map((e) =>
        e.isRemove ? null : (
          <Task
            avatar={e.avatar}
            date={e.createAt}
            isDone={e.isDone}
            userName={e.userName}
            taskContent={e.description}
            taskTitle={e.title}
          ></Task>
        )
      )}
    </Box>
  );
};

export default DisplayTaskField;
