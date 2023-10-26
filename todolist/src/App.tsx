import "./App.css";
import DisplayTaskField from "./container/DisplayTaskField";
import Title from "./components/Title";
import AddTaskField from "./container/AddTaskField";
import NotiTaskField from "./container/NotiTaskField";

function App() {
  return (
    <div className="todo">
      <Title variant="h3">Todo-List</Title>
      <AddTaskField></AddTaskField>
      <DisplayTaskField></DisplayTaskField>
      <NotiTaskField count={1}></NotiTaskField>
    </div>
  );
}

export default App;
