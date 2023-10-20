import { Button } from "@mui/material";
import "./index.css";
import { ReactNode } from "react";

type ButtonIconProps = {
  icon: ReactNode;
  label: string;
};

const ButtonIcon = (props: ButtonIconProps) => {
  const { icon, label } = props;
  return (
    <Button className="button-icon" startIcon={icon}>
      {label}
    </Button>
  );
};

export default ButtonIcon;
