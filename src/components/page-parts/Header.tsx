import MainButton from "../buttons/MainButton";
import Button from "../elements/Button";
import Container from "../other/Container";
import Search from "../other/Search";
import { AiOutlineMessage } from "react-icons/ai";
import AccountWidget from "./AccountWidget";

interface Props {}

type HeaderProps = Props;

const Header = (props: HeaderProps) => {
  return (
    <header className="bg-gray-900 h-16 relative">
      <MainButton className="absolute left-0 top-0" />
      <Container>
        <div className="flex justify-between items-center h-full">
          <h3 className="text-white font-bold">Page name</h3>
          <Search />
          <div className="flex justify-between h-full w-28">
            <Button>
              <AiOutlineMessage className="text-gray-400 text-2xl" />
            </Button>
            <Button>
              <AiOutlineMessage className="text-gray-400 text-2xl" />
            </Button>
            <Button>
              <AiOutlineMessage className="text-gray-400 text-2xl" />
            </Button>
          </div>
          <AccountWidget
            user={{
              name: "Good Dude",
              avatar:
                "https://i.pinimg.com/originals/1c/29/9c/1c299c93367f9476b857f73529db61c9.jpg",
              login: "SomeLogin",
            }}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
