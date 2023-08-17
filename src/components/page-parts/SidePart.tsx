import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

type SidePartProps = Props;

const SidePart = (props: SidePartProps) => {
  return <div className="w-16 bg-white">{props.children}</div>;
};

export default SidePart;
