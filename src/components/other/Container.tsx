import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

type ContainerProps = Props;

const Container = (props: ContainerProps) => {
  return <div>{props.children}</div>;
};

export default Container;
