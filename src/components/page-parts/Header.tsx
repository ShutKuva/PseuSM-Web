import MainButton from "../buttons/MainButton";
import Container from "../other/Container";

interface Props {}

type HeaderProps = Props;

const Header = (props: HeaderProps) => {
  return (
    <header className="bg-gray-900">
      <MainButton />
      <Container></Container>
    </header>
  );
};

export default Header;
