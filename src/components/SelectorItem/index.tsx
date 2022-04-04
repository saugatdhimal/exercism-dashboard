import React, {useCallback} from 'react';

import {RadioIconChecked, RadioIconUnChecked} from '@components/Icon';
import selectorIcon from '@images/selector-icon.svg';

interface TrackProps {
  isActive?: boolean;
  title: string;
  iconUrl?: string;
  slug: string;
  numExercises?: number;
  onClick(slug: string): void;
}

interface SortProps {
  text: string;
  isActive?: boolean;
  onClick(): void;
}

export const TrackItem: React.FC<TrackProps> = ({
  isActive = false,
  title,
  iconUrl,
  slug,
  numExercises,
  onClick,
}) => {
  const handleClick = useCallback(() => {
    onClick(slug);
  }, [onClick, slug]);

  return (
    <div
      onClick={handleClick}
      className={`${
        isActive ? 'bg-color-grey' : 'bg-color-white'
      } w-full h-[58px] px-[24px] flex items-center justify-between cursor-pointer`}
      data-testid='track-item'
    >
      <div className='flex items-center'>
        {isActive ? <RadioIconChecked /> : <RadioIconUnChecked />}
        <img
          src={iconUrl || selectorIcon}
          alt='track-icon'
          className='h-[42px] w-[38px] ml-[26px] mr-[18px]'
        />
        <p className='text-base font-medium text-color-lt-black'>{title}</p>
      </div>
      <p className='flex items-center justify-center min-w-[40px] ml-auto text-sm text-color-secondary font-medium px-2 py-0.5 border border-color-lt-grey rounded-2xl h-fit ml-3.5'>
        {numExercises || '-'}
      </p>
    </div>
  );
};

export const SortItem: React.FC<SortProps> = ({isActive, onClick, text}) => (
  <div
    onClick={onClick}
    className={`${
      isActive ? 'bg-color-grey' : 'bg-color-white'
    } flex items-center justify-between w-full h-[48px] px-[21px] rounded-[5px] cursor-pointer`}
    data-testid='sort-item'
  >
    {isActive ? <RadioIconChecked /> : <RadioIconUnChecked />}
    <div>
      <p className='text-color-secondary text-start'>{text}</p>
    </div>
  </div>
);
