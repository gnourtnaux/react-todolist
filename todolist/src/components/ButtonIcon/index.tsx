import { styled } from "@mui/material/styles";
import MuiButtonIcon, { IconButtonProps } from "@mui/material/IconButton";
import "/src/assets/fonts/Poppins/Poppins-Bold.ttf";

const CustomButtonIcon = styled(MuiButtonIcon)({
  backgroundColor: "inherit",
  fontWeight: "bold",
}) as typeof MuiButtonIcon;

interface TButtonProps extends IconButtonProps {}

const ButtonIcon = (props: TButtonProps) => {
  return <CustomButtonIcon {...props}></CustomButtonIcon>;
};

export default ButtonIcon;
