import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import Navbar from './Navbar/Navbar';


export const Layout = () => {
  

    return (
        <div className={`${styles['layoutMain']}`}>

            <div className={`${styles['layoutContainer']}`}>

                {/* Main content section */}
                <div className={`${styles['contentMain']}`}>

                    {/* Topbar */}
                    <div className={`${styles['topbarMain']}`}>
                       <Navbar/>
                    </div>

                    {/* Content section */}
                    <div className={`${styles['contentSection']}`}>
                        <Outlet />
                    </div>

                </div>

            </div>

        </div>

    );
};
export default Layout;