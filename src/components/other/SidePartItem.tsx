import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

type SidePartItemProps = Props;

const SidePartItem = (props: SidePartItemProps) => {
  return (
    <div className="h-16 flex justify-center items-center">
      {props.children}
    </div>
  );
};

export default SidePartItem;
