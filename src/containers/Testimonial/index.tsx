import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';

import Layout from '@components/Layout';

import {RootState} from '@store/Reducers';

import waveIcon from '@images/wave.svg';
import hexaSmile from '@images/hexa-smile.svg';

interface Type {
  id?: number;
  track?: {title?: string; icon_url?: string};
  exercise?: {title?: string; icon_url?: string};
  mentor?: {handle?: string; avatar_url?: string};
  content?: string;
  created_at?: string;
}

const Testimonial = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [testimonialData, setTestimonialData] = useState<Type>();
  const {testimonials} = useSelector((state: RootState) => state);

  useEffect(() => {
    const Data = testimonials.data.find(
      (item: {id: string | number}) => Number(item.id) === Number(id),
    );
    if (Data) {
      setTestimonialData(Data);
    } else {
      navigate('/page-not-found');
    }
  }, [id, navigate, testimonials, testimonials.data]);

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
            <h2 className='font-bold text-[31.25px]'>{`Testimonial Info (#${id})`}</h2>
          </div>
          <img src={waveIcon} alt='wave' />
        </header>
        <div className='flex items-center justify-around mt-[50px] py-[20px] bg-color-grey'>
          <div className='w-[30vw]'>
            <h3 className='text-center text-[24px] font-bold text-color-secondary mb-[20px]'>
              Mentor
            </h3>
            <div className='flex flex-row items-center justify-center gap-[20px]'>
              <img
                src={testimonialData?.mentor?.avatar_url}
                alt='mentor-avatar'
                className='max-w-[61px] rounded-full'
              />
              <p className='font-semibold text-[18px] text-color-alert'>
                {testimonialData?.mentor?.handle}
              </p>
            </div>
          </div>
          <div className='w-[30vw]'>
            <h3 className='text-center text-[24px] font-bold text-color-secondary mb-[20px]'>
              Track
            </h3>
            <div className='flex flex-row items-center justify-center gap-[20px]'>
              <img
                src={testimonialData?.track?.icon_url}
                alt='track-icon'
                className='max-w-[55px]'
              />
              <p className='font-semibold text-[18px] text-color-alert'>
                {testimonialData?.track?.title}
              </p>
            </div>
          </div>
          <div className='w-[30vw]'>
            <h3 className='text-center text-[24px] font-bold text-color-secondary mb-[20px]'>
              Exercise
            </h3>
            <div className='flex flex-row items-center justify-center gap-[20px]'>
              <img
                src={testimonialData?.exercise?.icon_url}
                alt='exercise-icon'
                className='max-w-[55px]'
              />
              <p className='font-semibold text-[18px] text-color-alert'>
                {testimonialData?.exercise?.title}
              </p>
            </div>
          </div>
        </div>
        <div className='max-w-[600px] mx-auto px-[20px]'>
          <h3 className='text-center text-[24px] font-bold text-color-secondary mt-[50px] mb-[20px]'>
            Testimonial
          </h3>
          <p className='text-center font-medium text-[18px] text-color-alert'>
            {testimonialData?.content}
          </p>
        </div>
        <div className='bg-color-grey my-[50px] py-[20px]'>
          <h3 className='text-center text-[24px] font-bold text-color-secondary mb-[15px]'>
            Created At
          </h3>
          <p className='text-center font-semibold text-[18px] text-color-primary'>
            {testimonialData?.created_at?.substring(0, 10)}
          </p>
        </div>
      </>
    </Layout>
  );
};

export default Testimonial;
