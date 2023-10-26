import { styled } from "@mui/material/styles";
import MuiButton, { ButtonProps } from "@mui/material/Button";
import "/src/assets/fonts/Poppins/Poppins-Bold.ttf";

const CustomButton = styled(MuiButton)({
  fontFamily: '"Poppins", sans-serif',
  fontSize: "14px",
  fontWeight: "bold",
  color: "rgba(16, 44, 50, 255)",
  backgroundColor: "rgb(228 161 27)",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "rgb(228 161 27)",
    transform: "scale(1.05)",
    transition: "transform 0.2s",
  },
}) as typeof MuiButton;

interface TButtonProps extends ButtonProps {}

const Button = (props: TButtonProps) => {
  return <CustomButton {...props}></CustomButton>;
};

export default Button;
