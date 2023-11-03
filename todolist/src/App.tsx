import React from "react";
import "./App.css";
import DisplayTaskField from "./container/DisplayTaskField";
import Title from "./components/Title";
import AddTaskField from "./container/AddTaskField";
import NotiTaskField from "./container/NotiTaskField";
import Box from "./components/Box";
import { dataTodo } from "./dataTodo/constant";

function App() {
  const countTasks = () => {
    let countNum = 0;
    dataTodo.forEach((e) => {
      e.isRemove ? countNum : countNum++;
    });
    return countNum;
  };
  return (
    <Box
      sx={{
        width: "60%",
        overflow: "hidden",
        backgroundColor: "hsla(0, 0%, 0%, 0.3)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        color: "rgba(169, 185, 186, 255)",
        padding: "1rem",
        borderRadius: "15px",
      }}
    >
      <Title variant="h3">Todo-List</Title>
      <AddTaskField></AddTaskField>
      <DisplayTaskField></DisplayTaskField>
      <NotiTaskField count={countTasks()}></NotiTaskField>
    </Box>
  );
}

export default App;
