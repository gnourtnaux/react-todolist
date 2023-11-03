import "./App.css";
import DisplayTaskField from "./container/DisplayTaskField";
import Title from "./components/Title";
import AddTaskField from "./container/AddTaskField";
import NotiTaskField from "./container/NotiTaskField";
import Box from "./components/Box";

function App() {
  return (
    <Box
      sx={{
        width: "60%",
        backgroundColor: "rgba(16, 44, 50, 255)",
        color: "rgba(169, 185, 186, 255)",
        padding: "1rem",
        borderRadius: "15px",
      }}
    >
      <Title variant="h3">Todo-List</Title>
      <AddTaskField></AddTaskField>
      <DisplayTaskField></DisplayTaskField>
      <NotiTaskField count={1}></NotiTaskField>
    </Box>
  );
}

export default App;
