import { twMerge } from "tailwind-merge";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "../elements/Button";
import SearchViewer from "./SearchViewer";
import SearchViewerItemUser from "./SearchViewerItemUser";
import { useMutation } from "react-query";
import { search } from "../../services/SearchService";
import { KeyboardEventHandler, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface SearchProps {
  className?: string;
}

const Search = (props: SearchProps) => {
  const [isMouseOverSearch, setIsMouseOverSearch] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { register, handleSubmit } = useForm<{ searchString: string }>();
  const { data, mutate } = useMutation({
    mutationFn: search,
  });

  const submitHandler: SubmitHandler<{ searchString: string }> = (data) => {
    mutate(data.searchString);
  };

  const keyDownHandler: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      handleSubmit(submitHandler)();
    }
  };

  return (
    <div
      className="relative h-full"
      onMouseLeave={() => setIsMouseOverSearch(false)}
      onMouseEnter={() => setIsMouseOverSearch(true)}
    >
      <div className="h-full relative">
        <input
          onKeyDown={keyDownHandler}
          onFocus={() => setIsInputFocused(true)}
          {...register("searchString")}
          onBlur={() => setIsInputFocused(false)}
          className={twMerge(
            "h-full bg-gray-700 w-128 pl-10 text-lg text-white focus:outline-none placeholder-gray-500",
            props.className
          )}
          placeholder="Search"
        />
        <Button
          className="absolute z-10 right-6 top-5 text-2xl"
          onClick={handleSubmit(submitHandler)}
        >
          <AiOutlineSearch className="text-gray-500" />
        </Button>
      </div>

      <SearchViewer hidden={!(isInputFocused || isMouseOverSearch)}>
        {data &&
          data.users.map((user) => (
            <SearchViewerItemUser key={user.id} user={user} />
          ))}
      </SearchViewer>
    </div>
  );
};

export default Search;
