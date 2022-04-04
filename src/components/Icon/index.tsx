import React from 'react';
import oval from '@images/oval.svg';

const style = 'flex items-center justify-center w-[21px] h-[21px] rounded-full border-[1px] border-color-secondary';

export const RadioIconChecked = () => (
  <div className={style}>
    <div className='w-[9px] h-[9px] rounded-full bg-color-alt' />
  </div>
);

export const RadioIconUnChecked = () => <div className={style} />;

export const DotsVerticalIcon = () => (
  <>
    <img src={oval} alt='oval' />
    <img src={oval} alt='oval' />
    <img src={oval} alt='oval' />
  </>
);
