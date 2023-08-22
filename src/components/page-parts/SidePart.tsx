import { ReactNode } from "react";

interface SidePartProps {
  children?: ReactNode;
}

const SidePart = (props: SidePartProps) => {
  return <div className="w-16 bg-white">{props.children}</div>;
};

export default SidePart;
