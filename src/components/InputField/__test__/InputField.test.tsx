import React from 'react';
import {cleanup, fireEvent, screen} from '@testing-library/react';
import {renderWithRedux} from '@utils/renderWithRedux';
import InputField from '..';

afterEach(cleanup);

describe('<InputField />', () => {
  it('should render Input component', () => {
    renderWithRedux(<InputField />);
    const container = screen.getByTestId(/input-container/);
    const searchInput = screen.getByTestId(/search-input/);
    const icon = screen.getByAltText(/search-icon/);

    expect(container).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', 'search-icon.svg');
  });

  it('should update store activeInputValue with input changed value', () => {
    const {store} = renderWithRedux(<InputField />);
    const searchInput = screen.getByTestId(/search-input/);
    fireEvent.change(searchInput, {target: {value: 'new value'}});
    expect(store.getState().activeState.activeInputValue).toBe('new value');
  });

  it('should update store activeInputValue to be empty when input value is empty', () => {
    const {store} = renderWithRedux(<InputField />);
    const searchInput = screen.getByTestId(/search-input/);
    fireEvent.change(searchInput, {target: {value: ''}});
    expect(store.getState().activeState.activeInputValue).toBe('');
  });
});
