import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
}

const Container = (props: ContainerProps) => {
  return <div className="w-10/12 mx-auto h-full">{props.children}</div>;
};

export default Container;
