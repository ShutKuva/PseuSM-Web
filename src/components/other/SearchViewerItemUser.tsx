import { UserPreview } from "../../interfaces/UserPreview";
import NavButton from "../elements/NavButton";

interface SearchViewerItemUserProps {
  user: UserPreview;
}

const SearchViewerItemUser = (props: SearchViewerItemUserProps) => {
  const {
    user: { id, name, login, avatarReference },
  } = props;

  return (
    <NavButton
      link={`/user/${id}`}
      className="z-50 relative w-full flex items-center px-10 py-3 bg-white hover:bg-gray-900 hover:text-white duration-100"
    >
      <img
        src={avatarReference}
        alt="Avatar"
        className="mr-10 h-9 w-9 rounded-full"
      />
      <h2 className="mr-5">{name}</h2>
      <h2 className="text-gray-600">{login}</h2>
    </NavButton>
  );
};

export default SearchViewerItemUser;
