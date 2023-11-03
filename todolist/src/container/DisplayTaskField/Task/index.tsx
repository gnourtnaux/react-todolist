import React from "react";
import Box from "../../../components/Box";
import Text from "../../../components/Text";
import ButtonIconCheck from "../../../components/ButtonIcon/ButtonIconCheck";
import ButtonIconDelete from "../../../components/ButtonIcon/ButtonIconDelete";
import ButtonIconEdit from "../../../components/ButtonIcon/ButtonIconEdit";
import { Avatar } from "@mui/material";

interface TaskProps {
  avatar: string;
  taskTitle: string;
  taskContent: string;
  userName: string;
  date: Date;
  isDone?: boolean;
}

const Task = (props: TaskProps) => {
  const { avatar, taskContent, taskTitle, date, userName, isDone } = props;
  return (
    <Box
      sx={{
        border: "2px solid",
        borderRadius: "30px",
        display: "flex",
        marginY: "10px",
        paddingX: "20px",
      }}
    >
      <Box
        width="15%"
        sx={{
          textAlign: "center",
          backgroundColor: "inherit",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        <Avatar
          sx={{
            margin: "auto",
          }}
          alt={userName}
          src={avatar}
        />
        <br />
        {userName}
      </Box>
      <Box width="70%" paddingX="10px">
        <Text
          variant="h6"
          fontWeight="bold"
          color={isDone ? "greenyellow" : "rgba(237,112,111,255)"}
        >
          {taskTitle}
        </Text>
        <Text>{taskContent}</Text>
        <Text fontSize="12px" color="skyblue">
          {date.toString()}
        </Text>
      </Box>
      <ButtonIconCheck></ButtonIconCheck>
      <ButtonIconEdit></ButtonIconEdit>
      <ButtonIconDelete></ButtonIconDelete>
    </Box>
  );
};

export default Task;
