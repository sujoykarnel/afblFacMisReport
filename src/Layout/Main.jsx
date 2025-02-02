import { Outlet } from "react-router";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="max-w-screen-2xl mx-4 2xl:mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
