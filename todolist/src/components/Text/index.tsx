import { Typography } from "@mui/material";

type TextProps = {
  content: string;
}

const Text = (props: TextProps) => {
  const { content } = props;
  return <Typography>{content}</Typography>;
};

export default Text;
