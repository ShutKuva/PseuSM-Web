import { ReactNode } from "react";

interface SidePartItemProps {
  children: ReactNode;
}

const SidePartItem = (props: SidePartItemProps) => {
  return (
    <div className="h-16 flex justify-center items-center">
      {props.children}
    </div>
  );
};

export default SidePartItem;
