import React from 'react';

import spinnerIcon from '@images/spinner.svg';

const Loader = ({isActive}: {isActive: boolean}) => (
  <div
    className={`${
      !isActive ? 'hidden' : ''
    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px]`}
    data-testid='loader'
  >
    <img
      src={spinnerIcon}
      alt='loader-spinner'
      className='w-[100px] h-[100px] animate-[spin_2s_linear_infinite]'
    />
  </div>
);

export default Loader;
