type ItemProps = {
  label: string;
};

const Item = (props: ItemProps) => {
  return <div>{props.label}</div>;
};

export default Item;
