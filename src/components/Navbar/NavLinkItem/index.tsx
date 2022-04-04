import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

interface Props {
  to: string;
  title: string;
  icon: string;
  className?: string;
}

const NavLinkItem: React.FC<Props> = ({to, title, icon, className}) => {
  const location = useLocation();
  return (
    <NavLink
      to={to}
      className={`flex flex-row items-center hover:text-color-primary gap-4 ${
        location.pathname.includes(title.toLowerCase())
          ? 'text-color-primary'
          : 'text-color-secondary'
      } ${className}`}
    >
      <img
        src={icon}
        alt={title}
        className={title === 'Dashboard' ? 'w-[60px]' : 'w-[20px]'}
      />
      <p className='text-base font-semibold'>{title}</p>
    </NavLink>
  );
};

export default NavLinkItem;
