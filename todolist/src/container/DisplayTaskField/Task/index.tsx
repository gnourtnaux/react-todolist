import Box from "../../../components/Box";
import Text from "../../../components/Text";
import ButtonIconCheck from "../../../components/ButtonIcon/ButtonIconCheck";
import ButtonIconDelete from "../../../components/ButtonIcon/ButtonIconDelete";
import ButtonIconEdit from "../../../components/ButtonIcon/ButtonIconEdit";

interface TaskProps {
  taskContent: string;
}

const Task = (props: TaskProps) => {
  const { taskContent } = props;
  return (
    <Box
      sx={{
        border: "1px solid",
        borderRadius: "30px",
        display: "flex",
        marginY: "10px",
        paddingX: "20px",
      }}
    >
      <Text width="70%" variant="h6">
        {taskContent}
      </Text>
      <ButtonIconCheck></ButtonIconCheck>
      <ButtonIconEdit></ButtonIconEdit>
      <ButtonIconDelete></ButtonIconDelete>
    </Box>
  );
};

export default Task;
