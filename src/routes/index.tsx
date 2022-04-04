import React, {useEffect} from 'react';
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';

import Dashboard from '@containers/Dashboard';
import PageNotFound from '@containers/PageNotFound';
import Testimonial from '@containers/Testimonial';

function AppRoutes() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [pathname]);

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/dashboard' />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/testimonial/:id' element={<Testimonial />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
