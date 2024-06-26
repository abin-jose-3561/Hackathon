import ToogleTheme from '../../Components/ToggleTheme/ToggleTheme';
import SidebarOverlay from '../Sidebar/Sidebar';
import styles from './Navbar.module.scss';
import { Toolbar } from 'primereact/toolbar';
import { useLocation } from 'react-router-dom';


enum RoutePathEnum {
  sharemeal="Share Meal",
  dashboard="Dashboard",
  analytics="Analytics"
}

function getBreadcrumb(routePath: string): string {
  return RoutePathEnum[routePath as keyof typeof RoutePathEnum] || "Unknown Route";
}

const Navbar = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];
  const breadcrumb = lastSegment ? getBreadcrumb(lastSegment) : "Unknown Route";



  const startContent = (
   
       <div className='flex align-items-center'>
          <SidebarOverlay />
         <p className="m-0 text-lg font-bold pr-2 ">ShareMeal</p> 
          {/* <p className="flex gap-2 m-0  font-semibold text-sm text-color-secondary"><span>|</span>Studio</p> */}



      </div>
  );
 


  const endContent = (
            <ToogleTheme/>
  );

  return (
    <>
    <Toolbar
      start={startContent}
      end={endContent}
      className={`surface-50 p-0 px-2 border-noround border-none ${styles['topbarContainer']}`}
    />
    <div className='flex justify-content-between'>
      <p className='font-bold text-lg pl-3'>{breadcrumb}</p>
    </div>
</>
  );
}

export default Navbar;

