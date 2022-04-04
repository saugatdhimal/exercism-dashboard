import React from 'react';
import {render, cleanup, screen} from '@testing-library/react';
import Loader from '..';

afterEach(cleanup);

describe('<Loader />', () => {
  it('should render Loader component', () => {
    render(<Loader isActive />);
    const loader = screen.getByTestId(/loader/);
    const loaderIcon = screen.getByAltText(/loader-spinner/);

    expect(loader).toBeInTheDocument();
    expect(loaderIcon).toBeInTheDocument();
    expect(loaderIcon).toHaveAttribute('src', 'spinner.svg');
  });

  it('should hide Loader component if isAcive value is falsy', () => {
    render(<Loader isActive={1 > 2} />);
    const loader = screen.getByTestId(/loader/);
    expect(loader).toHaveClass('hidden');
  });

  it('should show Loader component if isAcive value is truthy', () => {
    render(<Loader isActive={1 < 2} />);
    const loader = screen.getByTestId(/loader/);
    expect(loader).not.toHaveClass('hidden');
  });
});
