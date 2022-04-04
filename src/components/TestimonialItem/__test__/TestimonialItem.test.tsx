import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import TestimonialItem from '..';

const todayDate = new Date();
const weekDate = new Date();
weekDate.setTime(todayDate.getTime() - 7 * 24 * 3600000);

afterEach(cleanup);

describe('<TestimonialItem />', () => {
  it('should render TestimonialItem component', () => {
    render(
      <BrowserRouter>
        <TestimonialItem
          id={0}
          iconUrl=''
          title=''
          content=''
          mentorAvatar=''
          mentorHandle=''
          createdAt=''
          fade={false}
        />
      </BrowserRouter>,
    );
    const testimonialItem = screen.getByTestId(/testimonial-item/);
    const icon = screen.getByAltText(/track-icon/);
    const mentorAvatar = screen.getByAltText(/mentor-avatar/);

    expect(testimonialItem).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(mentorAvatar).toBeInTheDocument();
  });

  it('should render with correct props', () => {
    render(
      <BrowserRouter>
        <TestimonialItem
          id={12345}
          iconUrl='https://dg8krxphbh767.cloudfront.net/tracks/python.svg'
          title='some title'
          content='some content'
          mentorAvatar='https://avatars1.githubusercontent.com/u/23086821?v=4'
          mentorHandle='ynfle'
          createdAt={`${weekDate}`}
          fade={false}
        />
      </BrowserRouter>,
    );

    const testimonialItem = screen.getByTestId(/testimonial-item/);
    const icon = screen.getByAltText(/track-icon/);
    const mentorAvatar = screen.getByAltText(/mentor-avatar/);

    expect(testimonialItem).toBeInTheDocument();
    expect(testimonialItem).toHaveTextContent('some title');
    expect(testimonialItem).toHaveTextContent('some content');
    expect(testimonialItem).toHaveTextContent('ynfle');
    expect(testimonialItem).toHaveTextContent('a week ago');
    expect(testimonialItem).toHaveAttribute('href', '/testimonial/12345');
    expect(icon).toHaveAttribute(
      'src',
      'https://dg8krxphbh767.cloudfront.net/tracks/python.svg',
    );
    expect(mentorAvatar).toHaveAttribute(
      'src',
      'https://avatars1.githubusercontent.com/u/23086821?v=4',
    );
  });
});
