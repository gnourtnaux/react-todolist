import { styled } from "@mui/material/styles";
import MuiInput, { InputBaseProps } from "@mui/material/InputBase";

const CustomInput = styled(MuiInput)({
  width: "100%",
  backgroundColor: "black",
  color: "rgba(122,131,135,255)",
  fontWeight: "bold",
  fontSize: "20px",
  paddingLeft: "20px",
  paddingRight: "20px",
  borderRadius: "30px",
  border: "2px solid rgba(122,131,135,255)",
}) as typeof MuiInput;

interface InputProps extends InputBaseProps {}

const Input = (props: InputProps) => {
  return <CustomInput {...props}></CustomInput>;
};
export default Input;
