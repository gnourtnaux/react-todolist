import Button from "../../components/Button";
import Box from "../../components/Box";
import Title from "../../components/Title";

type NotiTaskFieldProps = {
  count: number;
};

const NotiTaskField = (props: NotiTaskFieldProps) => {
  const { count } = props;
  return count === 0 ? (
    <Box>
      <Title variant="h3">You complete all tasks</Title>
    </Box>
  ) : (
    <Box sx={{ display: "flex", gap: "20px" }}>
      <Title variant="h5">You have {count} pending task</Title>
      <Button variant="contained">Clear All</Button>
    </Box>
  );
};

export default NotiTaskField;
