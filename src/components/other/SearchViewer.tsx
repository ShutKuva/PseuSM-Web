import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SearchViewerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const SearchViewer = (props: SearchViewerProps) => {
  const { children, className } = props;

  return (
    <div {...props} className={twMerge("", className)}>
      {children}
    </div>
  );
};

export default SearchViewer;
