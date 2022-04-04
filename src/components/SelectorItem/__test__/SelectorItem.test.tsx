import React from 'react';
import {render, cleanup, screen, fireEvent} from '@testing-library/react';
import {SortItem, TrackItem} from '..';

const mockCallback = jest.fn();

afterEach(cleanup);

describe('Dropdown Menu Items', () => {
  describe('<TrackItem />', () => {
    it('should render Track Item', () => {
      render(
        <TrackItem
          onClick={mockCallback}
          title='some title'
          slug='some slug'
        />,
      );
      const trackItem = screen.getByTestId(/track-item/i);
      const icon = screen.getByAltText(/track-icon/i);

      expect(trackItem).toBeInTheDocument();
      expect(trackItem).toHaveTextContent('some title');

      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('src', 'selector-icon.svg');
    });

    it('should render with icon passed to iconUrl Props', () => {
      render(
        <TrackItem
          onClick={mockCallback}
          title='some title'
          slug='some slug'
          iconUrl='https://dg8krxphbh767.cloudfront.net/tracks/c.svg'
        />,
      );
      const trackItem = screen.getByTestId(/track-item/i);
      const icon = screen.getByAltText(/track-icon/i);

      expect(trackItem).toBeInTheDocument();
      expect(trackItem).toHaveTextContent('some title');

      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute(
        'src',
        'https://dg8krxphbh767.cloudfront.net/tracks/c.svg',
      );
    });

    it('should render with num passed to numExercises Props', () => {
      render(
        <TrackItem
          onClick={mockCallback}
          title='some title'
          slug='some slug'
          numExercises={100}
        />,
      );
      const trackItem = screen.getByTestId(/track-item/i);

      expect(trackItem).toBeInTheDocument();
      expect(trackItem).toHaveTextContent('100');
    });

    it('should render with title passed to title Props', () => {
      render(
        <TrackItem onClick={mockCallback} title='New Title' slug='some slug' />,
      );
      const trackItem = screen.getByTestId(/track-item/i);

      expect(trackItem).toBeInTheDocument();
      expect(trackItem).toHaveTextContent('New Title');
    });
  });

  it('should call callback with slug', () => {
    render(
      <TrackItem onClick={mockCallback} title='New Title' slug='some slug' />,
    );
    const trackItem = screen.getByTestId(/track-item/i);

    fireEvent.click(trackItem);
    expect(mockCallback).toBeCalledTimes(1);
    expect(mockCallback).toBeCalledWith('some slug');
  });
});

describe('<SortItem />', () => {
  it('should render Sort Item', () => {
    render(<SortItem onClick={mockCallback} text='some text' />);
    const sortItem = screen.getByTestId(/sort-item/i);

    expect(sortItem).toBeInTheDocument();
    expect(sortItem).toHaveTextContent('some text');
  });

  it('should render with text passed to text Props', () => {
    render(<SortItem onClick={mockCallback} text='New Text' />);
    const sortItem = screen.getByTestId(/sort-item/i);

    expect(sortItem).toBeInTheDocument();
    expect(sortItem).toHaveTextContent('New Text');
  });
});
