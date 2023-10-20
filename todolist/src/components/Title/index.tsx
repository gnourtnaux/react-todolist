import { Typography } from "@mui/material";

interface TitleProps {
  label: string;
  variant: any;
}

const Title = (props: TitleProps) => {
  const { label, variant } = props;
  return <Typography variant={variant}>{label}</Typography>;
};
export default Title;
