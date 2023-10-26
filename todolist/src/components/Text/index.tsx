import { styled } from "@mui/material/styles";
import MuiTypo, { TypographyProps } from "@mui/material/Typography";
import "/src/assets/fonts/Poppins/Poppins-Regular.ttf";

const CustomTypo = styled(MuiTypo)({
  fontFamily: '"Poppins", sans-serif',
  width: "100%",
  height: "100%",
  padding: "10px",
  textOverflow: "unset",
  
}) as typeof MuiTypo;

interface TextProps extends TypographyProps {}

const Text = (props: TextProps) => {
  return <CustomTypo {...props}></CustomTypo>;
};

export default Text;
