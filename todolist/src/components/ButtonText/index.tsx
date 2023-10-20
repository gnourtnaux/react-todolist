import { Button } from "@mui/material";

type ButtonTextProps = {
  label: string;
  variant: any;
};

const ButtonText = (props: ButtonTextProps) => {
  const { label, variant } = props;
  return <Button variant={variant}>{label}</Button>;
};

export default ButtonText;
