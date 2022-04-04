import React from 'react';

interface Props {
  icon: string;
  containerClassName?: string;
  iconClassName?: string;
  redDotClassName?: string;
  redDotText?: number;
}

const NavIconItem: React.FC<Props> = ({
  icon,
  containerClassName,
  iconClassName,
  redDotClassName,
  redDotText,
}) => (
  <div className={['relative cursor-pointer', containerClassName].join(' ')}>
    <img src={icon} alt='navbar-icon' className={iconClassName} />
    <div
      className={[
        'flex items-center justify-center rounded-full absolute  border-color-white bg-color-alert',
        redDotClassName,
      ].join(' ')}
    >
      <p className='text-[13px] text-color-white font-semibold'>
        {redDotText || ''}
      </p>
    </div>
  </div>
);

export default NavIconItem;
