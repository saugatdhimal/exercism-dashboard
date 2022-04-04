import React from 'react';
import {render, cleanup, screen, fireEvent} from '@testing-library/react';
import Dropdown from '..';

const mockTextLabel = () => <p>I am Dropdown Label</p>;
const MockChildren = () => <p>I am Dropdown Child</p>;

afterEach(cleanup);

jest.useFakeTimers();

describe('<Dropdown />', () => {
  it('should render Dropdown', () => {
    render(
      <Dropdown renderLabel={mockTextLabel}>
        <MockChildren />
      </Dropdown>,
    );
    const dropdown = screen.getByTestId(/dropdown/i);
    expect(dropdown).toBeInTheDocument();
  });

  it('should render label from renderLabel props', () => {
    const {rerender} = render(
      <Dropdown renderLabel={() => <p>label one</p>}>
        <MockChildren />
      </Dropdown>,
    );
    const dropdown = screen.getByTestId(/dropdown/i);

    expect(dropdown).toHaveTextContent(/label one/i);

    rerender(
      <Dropdown renderLabel={() => <p>label two</p>}>
        <MockChildren />
      </Dropdown>,
    );
    expect(dropdown).toHaveTextContent(/label two/i);
  });

  it('should not display children at intial render', () => {
    render(
      <Dropdown renderLabel={mockTextLabel}>
        <MockChildren />
      </Dropdown>,
    );
    const dropdownChild = screen.queryByText(/i am dropdown Child/i);
    expect(dropdownChild).toBeNull();
  });

  it('should show/open children, clicking label container', () => {
    render(
      <Dropdown renderLabel={mockTextLabel}>
        <MockChildren />
      </Dropdown>,
    );
    const labelContainer = screen.getByTestId(/label-container/i);
    expect(labelContainer).toBeInTheDocument();

    expect(screen.queryByText(/i am dropdown Child/i)).toBeNull();

    fireEvent.click(labelContainer);
    expect(screen.queryByText(/i am dropdown Child/i)).toBeInTheDocument();
  });

  it('should toggle label container click event to show/hide children', () => {
    render(
      <Dropdown renderLabel={mockTextLabel}>
        <MockChildren />
      </Dropdown>,
    );
    const labelContainer = screen.getByTestId(/label-container/i);
    expect(labelContainer).toBeInTheDocument();

    expect(screen.queryByText(/i am dropdown Child/i)).toBeNull();

    fireEvent.click(labelContainer);
    expect(screen.queryByText(/i am dropdown Child/i)).toBeInTheDocument();

    fireEvent.click(labelContainer);
    expect(screen.queryByText(/i am dropdown Child/i)).toBeNull();

    fireEvent.click(labelContainer);
    expect(screen.queryByText(/i am dropdown Child/i)).toBeInTheDocument();
  });

  it('should close/hide children, clicking outside dropdown', () => {
    render(
      <div>
        <p>outside</p>
        <Dropdown renderLabel={mockTextLabel}>
          <MockChildren />
        </Dropdown>
      </div>,
    );
    const labelContainer = screen.getByTestId(/label-container/i);
    expect(labelContainer).toBeInTheDocument();

    fireEvent.click(labelContainer);
    expect(screen.queryByText(/i am dropdown Child/i)).toBeInTheDocument();

    jest.advanceTimersByTime(50);

    const outside = screen.getByText(/outside/);
    fireEvent.click(outside);
    expect(screen.queryByText(/i am dropdown Child/i)).toBeNull();
  });

  it('should close/hide children when child item is clicked', () => {
    render(
      <Dropdown renderLabel={mockTextLabel}>
        <div>
          <p>I am item one</p>
          <p>I am item two</p>
        </div>
      </Dropdown>,
    );
    const labelContainer = screen.getByTestId(/label-container/i);
    expect(labelContainer).toBeInTheDocument();

    fireEvent.click(labelContainer);
    expect(screen.queryByText(/i am item one/i)).toBeInTheDocument();
    expect(screen.queryByText(/i am item two/i)).toBeInTheDocument();

    jest.advanceTimersByTime(50);

    const childItemOne = screen.getByText(/i am item one/i);

    fireEvent.click(childItemOne);
    expect(screen.queryByText(/i am item one/i)).toBeNull();
    expect(screen.queryByText(/i am item two/i)).toBeNull();

    fireEvent.click(labelContainer);
    expect(screen.queryByText(/i am item one/i)).toBeInTheDocument();
    expect(screen.queryByText(/i am item two/i)).toBeInTheDocument();

    jest.advanceTimersByTime(50);

    const childItemTwo = screen.getByText(/i am item two/i);

    fireEvent.click(childItemTwo);
    expect(screen.queryByText(/i am item one/i)).toBeNull();
    expect(screen.queryByText(/i am item two/i)).toBeNull();
  });
});
