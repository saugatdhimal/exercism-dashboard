import React from 'react';
import {useSelector} from 'react-redux';

import Layout from '@components/Layout';
import Loader from '@components/Loader';
import TestimonialItem from '@components/TestimonialItem';
import InputField from '@components/InputField';
import SortDropdown from '@components/SortDropdown';
import PaginationFooter from '@components/Pagination';
import TracksDropdown from '@components/TracksDropdown';

import {RootState} from '@store/Reducers';

import waveIcon from '@images/wave.svg';
import hexaSmile from '@images/hexa-smile.svg';

const Dashboard = () => {
  const {testimonials} = useSelector((state: RootState) => state);

  return (
    <Layout>
      <>
        <header className='flex flex-col items-center'>
          <img
            src={hexaSmile}
            alt='hexagon-smile'
            className='w-[55px] h-[61px] mt-[41px]'
          />
          <div className='flex flex-row items-center mt-[13px] mb-5'>
            <h1 className='font-bold text-[31.25px] text-[red]'>
              {'Testimonials I\'ve left'}
            </h1>
            <p className='min-w-[40px] text-sm text-center text-color-secondary font-medium px-2 py-0.5 border border-color-lt-grey rounded-2xl h-fit ml-3.5'>
              {testimonials.totalTestimonials || '-'}
            </p>
          </div>
          <img src={waveIcon} alt='wave' />
        </header>
        <section className='mx-8 mt-9 shadow-[0_4px_42px_rgba(79,114,205,0.15)] rounded-lg'>
          <div className='relative min-h-[500px]  flex flex-col justify-between self-end'>
            <div>
              <div className='flex flex-row items-center justify-between px-6 py-4 border-b-[1px] border-color-lt-grey rounded-t-lg'>
                <div className='flex flex-row items-center'>
                  <TracksDropdown />
                  <InputField />
                </div>
                <SortDropdown />
              </div>
              <Loader isActive={testimonials.loading} />
              {testimonials.errorMsg ? (
                <p className='mt-[150px] text-center text-color-alert'>
                  {testimonials.errorMsg}
                </p>
              ) : (
                testimonials.data.map(
                  (item: {
                    id: number;
                    track: {icon_url: string};
                    exercise: {title: string};
                    content: string;
                    mentor: {avatar_url: string; handle: string};
                    created_at: string;
                  }) => (
                    <TestimonialItem
                      id={item.id}
                      iconUrl={item.track.icon_url}
                      title={item.exercise.title}
                      content={item.content}
                      mentorAvatar={item.mentor.avatar_url}
                      mentorHandle={item.mentor.handle}
                      createdAt={item.created_at}
                      fade={testimonials.loading}
                      key={item.created_at}
                    />
                  ),
                )
              )}
              {!testimonials.loading && !testimonials.data.length && (
                <p className='text-base text-color-alert text-center mt-[150px]'>
                  No Testimonial Found
                </p>
              )}
            </div>
            <PaginationFooter />
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Dashboard;
