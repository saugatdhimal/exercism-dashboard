import React from 'react';

import arrowDownIcon from '@images/arrow-down.svg';
import selectorIcon from '@images/selector-icon.svg';

interface Props {
  labelText: string;
}

export const TrackLabel: React.FC = () => (
  <div
    className='flex flex-row items-center gap-3.5 cursor-pointer'
    data-testid='track-label'
  >
    <img src={selectorIcon} alt='selector-icon' className='h-[42px] w-[38px]' />
    <img src={arrowDownIcon} alt='arrowdown-icon' className='h-1.5 w-3.5' />
  </div>
);

export const SortLabel: React.FC<Props> = ({labelText}) => (
  <div
    className='flex items-center justify-between w-[348px] h-[48px] px-[21px] rounded-[5px] bg-color-grey cursor-pointer'
    data-testid='sort-label'
  >
    <p className='text-color-secondary'>{labelText}</p>
    <img src={arrowDownIcon} alt='arrowdown-icon' className='h-2.5 w-6' />
  </div>
);
