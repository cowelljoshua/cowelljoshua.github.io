import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Nav";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";
  
  // Key forces React to remount when switching between home/non-home
  // This ensures Safari properly repaints the background
  const layoutKey = isHomePage ? 'home' : 'other';
  
  return (
    <div 
      key={layoutKey}
      className={`layout ${isHomePage ? 'layout--home' : ''}`}
    >
      <Nav />
      <main className={`layout__main ${isHomePage ? 'layout__main--home' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
