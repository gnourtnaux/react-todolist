import { TextField } from "@mui/material";

type InputProps = {
  label: string;
}

const Input = (props: InputProps) => {
  const { label } = props;
  return <TextField label={label}></TextField>;
};

export default Input;
