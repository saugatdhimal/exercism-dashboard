import React from 'react';
import Navbar from '@components/Navbar';

interface Props {
  children: React.ReactChild;
}

const Layout: React.FC<Props> = ({children}) => (
  <main className='pb-[42px] max-w-[1536px] mx-auto'>
    <Navbar />
    {children}
  </main>
);

export default Layout;
