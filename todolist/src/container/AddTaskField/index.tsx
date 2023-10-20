import { Box } from "@mui/material";
import "./index.css";
import Input from "../../components/Input";

const AddTaskField = () => {
  return (
    <Box className="addtask-field">
      <Input label="Enter a Todo..."></Input>
    </Box>
  );
};

export default AddTaskField;
