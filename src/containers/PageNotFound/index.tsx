import React from 'react';
import Layout from '@components/Layout';

import NotFoundImage from '@images/page_not_found.png';
import desktop404 from '@images/404_desktop.png';

const PageNotFound = () => (
  <Layout>
    <div className='flex flex-row justify-around mt-[20vh]'>
      <img src={NotFoundImage} alt='page-not-found' />
      <img src={desktop404} alt='page-not-found' />
    </div>
  </Layout>
);

export default PageNotFound;
