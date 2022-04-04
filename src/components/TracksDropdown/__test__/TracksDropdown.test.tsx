import React from 'react';
import {cleanup, screen} from '@testing-library/react';
import {renderWithRedux} from '@utils/renderWithRedux';
import TracksDropdown from '..';

afterEach(cleanup);

describe('<TracksDropDown />', () => {
  it('should render TracksDropDown component', () => {
    renderWithRedux(<TracksDropdown />);
    const dropdown = screen.getByTestId(/dropdown/i);
    const trackLabel = screen.getByTestId(/track-label/i);
    expect(dropdown).toBeInTheDocument();
    expect(trackLabel).toBeInTheDocument();
  });

  it('should render label container', () => {
    renderWithRedux(<TracksDropdown />);
    const labelCont = screen.getByTestId(/label-container/i);
    expect(labelCont).toBeInTheDocument();
  });
});
