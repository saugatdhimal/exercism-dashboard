import React from 'react';
import {NavLink} from 'react-router-dom';

import NavIconItem from '@components/Navbar/NavIconItem';
import NavLinkItem from '@components/Navbar/NavLinkItem';
import {DotsVerticalIcon} from '@components/Icon';

import erik from '@images/erik.svg';
import badge from '@images/badge.svg';
import smile from '@images/smile.png';
import bellIcon from '@images/bell.png';
import logo from '@images/exercism-logo.svg';
import tracksIcon from '@images/tracks-icon.svg';
import hexagonIcon from '@images/hexagon-icon.svg';
import dashboardIcon from '@images/dashboard-logo.png';
import mentoringIcon from '@images/mentoring-icon.svg';
import contributeIcon from '@images/contribute-icon.svg';

const Navbar: React.FC = () => (
  <nav className='w-full h-[64px] px-[33px] flex flex-row items-center bg-white border-b border-color-border'>
    <NavLink className='mr-8' to='/'>
      <img alt='excercism-logo' src={logo} />
    </NavLink>
    <ul className='flex items-center gap-8'>
      <li>
        <NavLinkItem
          to='/'
          title='Dashboard'
          icon={dashboardIcon}
          className='gap-2'
        />
      </li>
      <li>
        <NavLinkItem to='#' title='Tracks' icon={tracksIcon} />
      </li>
      <li>
        <NavLinkItem to='#' title='Mentoring' icon={mentoringIcon} />
      </li>
      <li>
        <NavLinkItem to='#' title='Contribute' icon={contributeIcon} />
      </li>
    </ul>
    <ul className='flex items-center gap-11 ml-auto'>
      <li>
        <NavIconItem
          icon={smile}
          iconClassName='w-8'
        />
      </li>
      <li>
        <NavIconItem
          icon={hexagonIcon}
          iconClassName='w-7 h-7'
          redDotClassName='w-3.5 h-3.5 border-[3px] -right-[4px] -top-[2px]'
        />
      </li>
      <li>
        <NavIconItem
          icon={bellIcon}
          iconClassName='h-6'
          containerClassName='h-9 w-[42px] flex items-center justify-center rounded-lg bg-color-lt-orange shadow-[0_4px_24px_rgba(156,130,38,0.4)]'
          redDotClassName='w-6 h-6 -top-2 -right-3.5'
          redDotText={2}
        />
      </li>
      <li>
        <NavIconItem
          icon={badge}
          iconClassName='h-10'
          redDotClassName='w-5 h-5 border-[3px] -top-1.5 -right-1'
        />
      </li>
      <li>
        <NavIconItem
          icon={erik}
          iconClassName='w-[42px] h-[42px] rounded-full'
          redDotClassName='hidden'
        />
      </li>
      <li>
        <div className='-ml-4 mr-4 cursor-pointer'>
          <DotsVerticalIcon />
        </div>
      </li>
    </ul>
  </nav>
);

export default Navbar;
