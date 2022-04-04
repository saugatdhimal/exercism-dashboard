import React from 'react';

import ErikImage from '@images/erik.svg';
import ArrowRight from '@images/arrow-right.svg';
import selectorIcon from '@images/selector-icon.svg';
import {Link} from 'react-router-dom';

const timeAgo = (date: string) => {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000,
  );
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(seconds / (60 * 60));
  const days = Math.round(seconds / (60 * 60 * 24));
  const weeks = Math.round(seconds / (60 * 60 * 24 * 7));
  const months = Math.round(seconds / (60 * 60 * 24 * 30.4));
  const years = Math.round(seconds / (60 * 60 * 24 * 365.25));

  if (years >= 2) return `${years} years ago`;
  if (years === 1 && months > 11) return 'a year ago';
  if (months >= 2) return `${months} months ago`;
  if (months === 1 && weeks > 3 && days > 27) return 'a month ago';
  if (weeks >= 2 && days > 27) return `${weeks} weeks ago`;
  if (weeks === 1 && days > 6) return 'a week ago';
  if (days >= 2) return `${days} days ago`;
  if (days === 1 && hours > 23) return 'a day ago';
  if (hours >= 2) return `${hours} hours ago`;
  if (hours === 1 && minutes > 59) return 'an hour ago';
  if (minutes >= 2) return `${minutes} minutes ago`;
  if (minutes === 1 && seconds > 59) return 'a minute ago';
  if (seconds >= 2) return `${seconds} seconds ago`;
  if (seconds === 1) return 'a second ago';
  return 'just now';
};

interface Props {
  id: number;
  iconUrl: string;
  title: string;
  content: string;
  mentorAvatar: string;
  mentorHandle: string;
  createdAt: string;
  fade: boolean;
}

const TestimonialItem: React.FC<Props> = ({
  id,
  title,
  content,
  iconUrl,
  mentorAvatar,
  mentorHandle,
  createdAt,
  fade,
}) => (
  <Link to={`/testimonial/${id}`} data-testid='testimonial-item'>
    <div
      className={`${
        fade ? 'opacity-10' : ''
      } flex justify-between items-center h-[64px] px-6 bg-color-white border-b-[1px] border-color-border-alt hover:bg-color-lt-bg cursor-pointer`}
    >
      <div className='flex items-center gap-[25px]'>
        <img
          src={iconUrl || selectorIcon}
          alt='track-icon'
          className='w-[28px] h-[32px]'
        />
        <div className='flex items-center gap-4'>
          <img
            src={mentorAvatar || ErikImage}
            alt='mentor-avatar'
            className='w-[42px] h-[42px] rounded-full'
          />
          <div>
            <p className='text-base font-medium leading-6 text-color-primary'>
              {mentorHandle}
            </p>
            <p className='text-sm font-normal leading-[21px] text-color-secondary'>
              {title}
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-[135px]'>
        <p className='font-normal text-[15px] leading-[25.5px] color-alt w-[58ch] truncate'>
          {content}
        </p>
        <div className='flex items-center gap-[60px]'>
          <p className='font-medium text-sm leading-[19.32px] text-color-secondary'>
            {timeAgo(createdAt) || '-'}
          </p>
          <img
            src={ArrowRight}
            alt='arrow-right'
            className='h-[15px] w-[7.29px]'
          />
        </div>
      </div>
    </div>
  </Link>
);

export default TestimonialItem;
