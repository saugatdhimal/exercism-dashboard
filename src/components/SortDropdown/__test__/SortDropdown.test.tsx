import React from 'react';
import {cleanup, fireEvent, screen} from '@testing-library/react';
import {renderWithRedux} from '@utils/renderWithRedux';
import SortDropdown from '..';

afterEach(cleanup);

jest.useFakeTimers();

describe('<SortDropDown />', () => {
  it('should render SortDropDown component', () => {
    renderWithRedux(<SortDropdown />);
    const dropdown = screen.getByTestId(/dropdown/i);
    const sortLabel = screen.getByTestId(/sort-label/i);
    expect(dropdown).toBeInTheDocument();
    expect(sortLabel).toBeInTheDocument();
  });

  it('should have Sort by Most Recent label text at intial render', () => {
    renderWithRedux(<SortDropdown />);
    const sortLabel = screen.getByTestId(/sort-label/i);
    expect(sortLabel).toHaveTextContent('Sort by Most Recent');
  });

  it('should open SortItems when label container is clicked', () => {
    renderWithRedux(<SortDropdown />);
    const labelContainer = screen.getByTestId(/label-container/i);

    fireEvent.click(labelContainer);
    const sortItems = screen.getAllByTestId(/sort-item/i);
    expect(sortItems).toHaveLength(2);
    expect(sortItems[0]).toHaveTextContent(/Sort by Most Recent/i);
    expect(sortItems[1]).toHaveTextContent(/Sort by Most Oldest/i);
  });

  it('should close SortItems when SortItem is clicked', async () => {
    renderWithRedux(<SortDropdown />);
    const labelContainer = screen.getByTestId(/label-container/i);

    fireEvent.click(labelContainer);
    const sortItems = screen.getAllByTestId(/sort-item/i);
    expect(sortItems).toHaveLength(2);

    jest.advanceTimersByTime(50);

    fireEvent.click(sortItems[0]);
    expect(sortItems[0]).not.toBeInTheDocument();
    expect(sortItems[1]).not.toBeInTheDocument();
  });

  it('should update store activeOrder value when SortItem is clicked', async () => {
    const {store} = renderWithRedux(<SortDropdown />);
    const labelContainer = screen.getByTestId(/label-container/i);

    fireEvent.click(labelContainer);
    const sortItems = screen.getAllByTestId(/sort-item/i);
    expect(sortItems).toHaveLength(2);

    jest.advanceTimersByTime(50);

    fireEvent.click(sortItems[0]);
    expect(store.getState().activeState.activeOrder).toBe('newest_first');

    fireEvent.click(labelContainer);
    const Items = screen.getAllByTestId(/sort-item/i);

    jest.advanceTimersByTime(50);

    fireEvent.click(Items[1]);
    expect(store.getState().activeState.activeOrder).toBe('oldest_first');
  });
});
