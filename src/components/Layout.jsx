import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Layout } from "antd";

const PageLayout = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <div className="routes">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default PageLayout;
