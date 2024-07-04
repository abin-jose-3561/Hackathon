import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar/Navbar";

export const Layout = () => {
  return (
    <div className={`${styles["layoutMain"]}`}>
      <div className={`${styles["layoutContainer"]}`}>
        <div className={`${styles["contentMain"]}`}>
          <div className={`${styles["topbarMain"]}`}>
            <Navbar />
          </div>
          <div className={`${styles["contentSection"]}`}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
