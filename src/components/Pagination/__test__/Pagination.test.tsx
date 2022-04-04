import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {Pagination} from '..';

const handlePagination = jest.fn();

afterEach(cleanup);

describe('<Pagination />', () => {
  it('should render Pagination Component', () => {
    render(
      <Pagination
        page={1}
        totalPages={100}
        handlePagination={handlePagination}
      />,
    );
    const el = screen.getByTestId(/pagination/i);
    expect(el).toBeInTheDocument();
  });

  it('should render Next and Previous Button', () => {
    render(
      <Pagination
        page={1}
        totalPages={100}
        handlePagination={handlePagination}
      />,
    );
    const previousBtn = screen.getByRole('button', {name: /previous/i});
    const nextBtn = screen.getByRole('button', {name: /next/i});
    expect(previousBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
    expect(previousBtn).toBeDisabled();
    expect(nextBtn).toBeEnabled();
  });

  it('should render Number Buttons correctly', () => {
    render(
      <Pagination
        page={1}
        totalPages={100}
        handlePagination={handlePagination}
      />,
    );
    const numBtns = screen.getAllByTestId(/numBtn/i);
    expect(numBtns).toHaveLength(4);
    expect(numBtns[0]).toHaveTextContent('1');
    expect(numBtns[1]).toHaveTextContent('2');
    expect(numBtns[2]).toHaveTextContent('3');
    expect(numBtns[3]).toHaveTextContent('100');
  });

  it('should render the components from the beginning', async () => {
    render(
      <Pagination
        page={1}
        totalPages={5}
        handlePagination={handlePagination}
      />,
    );
    const buttons = screen.getAllByRole('button');

    expect(buttons[0]).toBeDisabled();
    expect(buttons[0]).toHaveTextContent('Previous');

    fireEvent.click(buttons[1]);
    expect(handlePagination).toBeCalledWith(1);
    expect(buttons[1]).toHaveTextContent('1');

    fireEvent.click(buttons[2]);
    expect(handlePagination).toBeCalledWith(2);
    expect(buttons[2]).toHaveTextContent('2');

    fireEvent.click(buttons[3]);
    expect(handlePagination).toBeCalledWith(3);
    expect(buttons[3]).toHaveTextContent('3');

    fireEvent.click(buttons[4]);
    expect(handlePagination).toBeCalledWith(5);
    expect(buttons[4]).toHaveTextContent('5');

    fireEvent.click(buttons[5]);
    expect(handlePagination).toBeCalledWith(2);
    expect(buttons[5]).toHaveTextContent('Next');
  });

  it('should render the components from the end', async () => {
    render(
      <Pagination
        page={5}
        totalPages={5}
        handlePagination={handlePagination}
      />,
    );
    const buttons = screen.getAllByRole('button');

    fireEvent.click(buttons[0]);
    expect(handlePagination).toBeCalledWith(4);
    expect(buttons[0]).toHaveTextContent('Previous');

    fireEvent.click(buttons[1]);
    expect(handlePagination).toBeCalledWith(1);
    expect(buttons[1]).toHaveTextContent('1');

    fireEvent.click(buttons[2]);
    expect(handlePagination).toBeCalledWith(3);
    expect(buttons[2]).toHaveTextContent('3');

    fireEvent.click(buttons[3]);
    expect(handlePagination).toBeCalledWith(4);
    expect(buttons[3]).toHaveTextContent('4');

    fireEvent.click(buttons[4]);
    expect(handlePagination).toBeCalledWith(5);
    expect(buttons[4]).toHaveTextContent('5');

    expect(buttons[5]).toBeDisabled();
    expect(buttons[5]).toHaveTextContent('Next');
  });

  it('should render the components from the middle', async () => {
    render(
      <Pagination
        page={3}
        totalPages={5}
        handlePagination={handlePagination}
      />,
    );
    const buttons = screen.getAllByRole('button');

    fireEvent.click(buttons[0]);
    expect(handlePagination).toBeCalledWith(2);
    expect(buttons[0]).toHaveTextContent('Previous');

    fireEvent.click(buttons[1]);
    expect(handlePagination).toBeCalledWith(1);
    expect(buttons[1]).toHaveTextContent('1');

    fireEvent.click(buttons[2]);
    expect(handlePagination).toBeCalledWith(2);
    expect(buttons[2]).toHaveTextContent('2');

    fireEvent.click(buttons[3]);
    expect(handlePagination).toBeCalledWith(3);
    expect(buttons[3]).toHaveTextContent('3');

    fireEvent.click(buttons[4]);
    expect(handlePagination).toBeCalledWith(4);
    expect(buttons[4]).toHaveTextContent('4');

    fireEvent.click(buttons[5]);
    expect(handlePagination).toBeCalledWith(5);
    expect(buttons[5]).toHaveTextContent('5');

    fireEvent.click(buttons[6]);
    expect(handlePagination).toBeCalledWith(4);
    expect(buttons[6]).toHaveTextContent('Next');
  });
});
