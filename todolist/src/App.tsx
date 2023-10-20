import "./App.css";
import Title from "./components/Title";
import AddTaskField from "./container/AddTaskField";
import CountTaskField from "./container/NotiTaskField";

function App() {
  return (
    <div className="todo">
      <Title label="Todo List" variant={"h3"}></Title>
      <AddTaskField></AddTaskField>
      <CountTaskField count={1}></CountTaskField>
    </div>
  );
}

export default App;
