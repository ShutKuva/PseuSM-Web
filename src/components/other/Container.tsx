import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

type ContainerProps = Props;

const Container = (props: ContainerProps) => {
  return <div className="w-11/12 mx-auto h-full">{props.children}</div>;
};

export default Container;
