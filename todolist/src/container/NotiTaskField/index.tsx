import { Box, Typography } from "@mui/material";
import ButtonText from "../../components/ButtonText";
import "./index.css";

type NotiTaskFieldProps = {
  count: number;
};

const NotiTaskField = (props: NotiTaskFieldProps) => {
  const { count } = props;
  return count === 0 ? (
    <Box className="noti-task-field">
      <Typography variant="h3">You complete all tasks</Typography>
    </Box>
  ) : (
    <Box className="noti-task-field">
      <Typography variant="h4">You have {count} pending task</Typography>
      <ButtonText label="Clear all" variant="contained"></ButtonText>
    </Box>
  );
};

export default NotiTaskField;
