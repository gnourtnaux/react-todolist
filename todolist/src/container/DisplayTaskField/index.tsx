import Box from "../../components/Box";
import Task from "./Task";

const DisplayTaskField = () => {
  const tasks = ["a", "b", "c"];
  return (
    <Box>
      {tasks.map((e) => (
        <Task taskContent={e}></Task>
      ))}
    </Box>
  );
};

export default DisplayTaskField;
