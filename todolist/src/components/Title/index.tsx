import { styled } from "@mui/material/styles";
import MuiTypo, { TypographyProps } from "@mui/material/Typography";
import "/src/assets/fonts/Poppins/Poppins-Regular.ttf";

const CustomTypo = styled(MuiTypo)({
  fontFamily: '"Poppins", sans-serif',
  fontWeight: "bold",
  textAlign: "center",
  color: "white",
}) as typeof MuiTypo;

interface TitleProps extends TypographyProps {}

const Title = (props: TitleProps) => {
  return <CustomTypo {...props}></CustomTypo>;
};

export default Title;
