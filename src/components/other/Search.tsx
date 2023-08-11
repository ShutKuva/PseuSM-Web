import { twMerge } from "tailwind-merge";
import Input from "../elements/Input";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "../elements/Button";

interface Props {
  className?: string;
}

type SearchProps = Props;

const Search = (props: SearchProps) => {
  return (
    <div className="h-full relative">
      <Input
        className={twMerge(
          "h-full bg-gray-700 w-128 pl-10 text-lg text-white focus:outline-none placeholder-gray-500",
          props.className
        )}
        placeholder="Search"
      />
      <Button className="absolute z-10 right-6 top-5 text-2xl">
        <AiOutlineSearch className="text-gray-500" />
      </Button>
    </div>
  );
};

export default Search;
