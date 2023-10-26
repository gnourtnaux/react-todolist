import Box from "../../components/Box";
import Button from "../../components/Button";
import Input from "../../components/Input";

const AddTaskField = () => {
  return (
    <Box sx={{ display: "flex", gap: "20px" }}>
      <Box sx={{ width: "60%" }}>
        <Input placeholder="Enter a Todo..."></Input>
      </Box>
      <Box>
        <Button>Add</Button>
      </Box>
    </Box>
  );
};

export default AddTaskField;
