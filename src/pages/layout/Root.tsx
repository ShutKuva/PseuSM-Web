import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import Header from "../../components/page-parts/Header";
import { getPageName } from "../../services/PageService";
import Footer from "../../components/page-parts/Footer";

interface Props {}

type RootProps = Props;

const Root = (props: RootProps) => {
  const location = useLocation();

  const pageName = getPageName(location.pathname);

  return (
    <div className="flex flex-col h-screen">
      <Header pageName={pageName} />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
