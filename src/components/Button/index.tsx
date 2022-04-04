import React from 'react';

import arrowback from '@images/arrow-back.svg';
import arrowForward from '@images/arrow-forward.svg';

interface Props {
  disabled?: boolean;
  btnType?: string;
  onClick(): void;
}

interface NumBtnProps {
  isActive?: boolean;
  onClick(): void;
  num: number;
}

const Button: React.FC<Props> = ({
  disabled = true,
  btnType = 'next',
  onClick,
}) => (
  <button
    type='button'
    disabled={disabled}
    onClick={onClick}
    className={`flex items-center justify-center gap-[5px] px-[16px] py-[8px] rounded-[5px] ${
      disabled
        ? 'bg-color-lt cursor-not-allowed'
        : 'bg-color-white border-[1px] border-color-lt-grey shadow-[0_1px_0_1px_rgba(203,201,217,0.6)]'
    } ${btnType === 'next' ? 'flex-row-reverse' : 'flex-row'}`}
  >
    <img
      src={btnType === 'next' ? arrowForward : arrowback}
      alt='arrow'
      className='w-[15px]'
    />
    <p
      className={`text-sm font-medium leading-[23.8px] ${
        disabled ? 'text-color-tertiary' : 'text-color-secondary'
      }`}
    >
      {btnType === 'next' ? 'Next' : 'Previous'}
    </p>
  </button>
);

export const activeNumBtnClass = 'border-color-tertiary bg-color-lt-blue text-color-primary';
export const inactiveNumBtnClass = 'border-color-lt-grey bg-color-white text-color-secondary';

export const NumBtn: React.FC<NumBtnProps> = ({
  isActive = false,
  onClick,
  num,
}) => (
  <button
    type='button'
    onClick={onClick}
    className={`${
      isActive ? activeNumBtnClass : inactiveNumBtnClass
    } py-[8px] px-[16px] rounded-[5px] border-[1px] font-medium text-sm`}
    data-testid='numBtn'
  >
    {num}
  </button>
);

export default Button;
