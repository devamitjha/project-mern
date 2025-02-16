import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import MobileHeader from './components/mobile/header/Header';
import MobileFooter from './components/mobile/Footer/Footer';
import DesktopHeader from './components/desktop/header/Header';
import DesktopFooter from './components/desktop/Footer/Footer';

const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1180);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1180);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="blogApp">
      
      {isMobile ? (
        <>
          <MobileHeader />
          <Outlet />
          <MobileFooter />
        </>
      ) : (
        <>
          <DesktopHeader />
          <Outlet />
          <DesktopFooter />
        </>
      )}
    </div>
  );
};

export default Layout;
