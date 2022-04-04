import React from 'react';
import {render, cleanup, screen} from '@testing-library/react';
import {SortLabel, TrackLabel} from '..';

afterEach(cleanup);

describe('Dropdown Labels', () => {
  describe('<TrackLabel />', () => {
    it('should render Track Label', () => {
      render(<TrackLabel />);
      const trackLabel = screen.getByTestId(/track-label/i);
      const selectorIcon = screen.getByAltText(/selector-icon/i);
      const arrowDownIcon = screen.getByAltText(/arrowdown-icon/i);

      expect(trackLabel).toBeInTheDocument();

      expect(selectorIcon).toBeInTheDocument();
      expect(selectorIcon).toHaveAttribute('src', 'selector-icon.svg');

      expect(arrowDownIcon).toBeInTheDocument();
      expect(arrowDownIcon).toHaveAttribute('src', 'arrow-down.svg');
    });
  });

  describe('<SortLabel />', () => {
    it('should render Sort Label', () => {
      render(<SortLabel labelText='test' />);
      const sortLabel = screen.getByTestId(/sort-label/i);
      const arrowDownIcon = screen.getByAltText(/arrowdown-icon/i);

      expect(sortLabel).toBeInTheDocument();

      expect(arrowDownIcon).toBeInTheDocument();
      expect(arrowDownIcon).toHaveAttribute('src', 'arrow-down.svg');
    });

    it('should render with text passed to labelText Props', () => {
      const {rerender} = render(<SortLabel labelText='test' />);
      const sortLabel = screen.getByTestId(/sort-label/i);
      expect(sortLabel).toHaveTextContent('test');

      rerender(<SortLabel labelText='test two' />);
      expect(sortLabel).toHaveTextContent('test two');

      rerender(<SortLabel labelText='test three' />);
      expect(sortLabel).toHaveTextContent('test three');
    });
  });
});
