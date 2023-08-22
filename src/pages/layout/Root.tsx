import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/page-parts/Header";
import { getPageName } from "../../services/PageService";
import Footer from "../../components/page-parts/Footer";
import FriendsSidePart from "../../components/other/FriendsSidePart";
import SidePart from "../../components/page-parts/SidePart";

interface RootProps {}

const Root = (props: RootProps) => {
  const { pathname } = useLocation();

  const pageName = getPageName(pathname);

  return (
    <div className="flex flex-col h-screen">
      <Header pageName={pageName} />
      <div className="grow">
        <div className="flex justify-between h-full bg-slate-200">
          <SidePart></SidePart>
          <div className="grow block">
            <Outlet />
          </div>
          <FriendsSidePart />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
