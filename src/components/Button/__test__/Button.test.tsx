/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {render, cleanup, fireEvent, screen} from '@testing-library/react';
import Button, {activeNumBtnClass, inactiveNumBtnClass, NumBtn} from '..';

const mockFn = jest.fn();

afterEach(cleanup);

describe('Pagination Buttons', () => {
  describe('Next/Previous <Button />', () => {
    it('should render a disabled Button with text Next', () => {
      render(<Button onClick={mockFn} />);

      const nextBtn = screen.getByRole('button', {name: /next/i});

      expect(nextBtn).toBeInTheDocument();
      expect(nextBtn).toHaveTextContent('Next');
      expect(nextBtn).toBeDisabled();
    });

    it('should render a disabled Button with text Previous', () => {
      render(<Button btnType='previous' onClick={mockFn} />);

      const previousBtn = screen.getByRole('button', {name: /previous/i});

      expect(previousBtn).toBeInTheDocument();
      expect(previousBtn).toHaveTextContent('Previous');
      expect(previousBtn).toBeDisabled();
    });

    it('should render a disabled Button when disabled value is truthy', () => {
      render(<Button disabled={1 < 2} onClick={mockFn} />);

      const btn = screen.getByRole('button', {name: /next/i});
      expect(btn).toBeDisabled();
    });

    it('should render a enabled Button when disabled value is falsy', () => {
      render(<Button disabled={1 > 2} onClick={mockFn} />);

      const btn = screen.getByRole('button', {name: /next/i});
      expect(btn).toBeEnabled();
    });

    it('should call callback when enabled Button is clicked', () => {
      const mockCallback = jest.fn((n: number) => n);
      render(<Button disabled={1 > 2} onClick={() => mockCallback(1)} />);

      const btn = screen.getByRole('button', {name: /next/i});

      fireEvent.click(btn);
      expect(mockCallback).toHaveBeenCalledTimes(1);
      expect(mockCallback).toHaveBeenCalledWith(1);
    });
  });

  describe('<NumBtn />', () => {
    it('should render NumBtn', () => {
      render(<NumBtn onClick={mockFn} num={1} />);

      const numBtn = screen.getByRole('button', {name: '1'});
      expect(numBtn).toBeInTheDocument();
    });

    it('should render with number passed to num Props', () => {
      const {rerender} = render(<NumBtn onClick={mockFn} num={1} />);

      const numBtn = screen.getByRole('button', {name: '1'});

      expect(numBtn).toHaveTextContent('1');

      rerender(<NumBtn onClick={mockFn} num={50} />);
      expect(numBtn).toHaveTextContent('50');

      rerender(<NumBtn onClick={mockFn} num={100} />);
      expect(numBtn).toHaveTextContent('100');

      rerender(<NumBtn onClick={mockFn} num={2000} />);
      expect(numBtn).toHaveTextContent('2000');
    });

    it('should render a active NumBtn when isActive value is truthy', () => {
      render(<NumBtn isActive={1 < 2} onClick={mockFn} num={1} />);

      const numBtn = screen.getByRole('button', {name: '1'});
      expect(numBtn).toHaveClass(activeNumBtnClass);
    });

    it('should render a inactive NumBtn when isActive value is falsy', () => {
      render(<NumBtn isActive={1 > 2} onClick={mockFn} num={1} />);

      const numBtn = screen.getByRole('button', {name: '1'});
      expect(numBtn).toHaveClass(inactiveNumBtnClass);
    });

    it('should call callback when NumBtn is clicked', () => {
      const mockCallback = jest.fn((n: number) => n);
      render(<NumBtn onClick={() => mockCallback(1)} num={1} />);

      const numBtn = screen.getByRole('button', {name: '1'});

      fireEvent.click(numBtn);
      expect(mockCallback).toHaveBeenCalledTimes(1);
      expect(mockCallback).toHaveBeenCalledWith(1);
    });
  });
});
