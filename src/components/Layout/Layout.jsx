import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Nav />
      <main className="layout__main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
