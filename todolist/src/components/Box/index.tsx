import React from "react";
import { styled } from "@mui/material/styles";
import MuiBox, { BoxProps } from "@mui/material/Box";

const CustomBox = styled(MuiBox)({
  justifyContent: "center",
  alignItems: "center",
  marginY: "20px",
}) as typeof MuiBox;

interface TBoxProps extends BoxProps {}

const Box = (props: TBoxProps) => {
  return <CustomBox {...props}></CustomBox>;
};

export default Box;
