import { Outlet } from "react-router-dom";
import Header from "../../components/page-parts/Header";

interface Props {}

type RootProps = Props;

const Root = (props: RootProps) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
