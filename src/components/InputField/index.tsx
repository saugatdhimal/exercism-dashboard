import React, {useCallback, useEffect, useState} from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';

import {
  GetTestimonials,
  SetActivePage,
  SetActiveInputValue,
} from '@store/ActionCreators';
import {RootState} from '@store/Reducers';
import {ActiveAction, TestimonialsAction} from '@store/Actions';
import useDebouncedValue from '@hooks/useDeboucedValue';

import searchIcon from '@images/search-icon.svg';

interface Props {
  getTestimonials(
    track: string,
    order: string,
    page: number,
    value: string,
  ): void;
  setActivePage(page: number): void;
  setActiveInputValue(value: string): void;
  activeTrack: string;
  activeOrder: string;
  activeInputValue: string;
}

const InputField: React.FC<Props> = ({
  getTestimonials,
  setActivePage,
  setActiveInputValue,
  activeTrack,
  activeOrder,
  activeInputValue,
}) => {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const debouncedValue = useDebouncedValue(activeInputValue);

  useEffect(() => {
    setActivePage(1);
    getTestimonials(activeTrack, activeOrder, 1, debouncedValue);
  }, [
    activeOrder,
    activeTrack,
    debouncedValue,
    getTestimonials,
    setActivePage,
  ]);

  const handleChange = useCallback(
    (e) => {
      setActiveInputValue(e.target.value);
    },
    [setActiveInputValue],
  );

  const handleOnFocus = useCallback(() => {
    setIsInputActive(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setIsInputActive(false);
  }, []);

  return (
    <div
      className={`${
        isInputActive
          ? 'bg-color-white border-[#2E57E8] shadow-[0_0_2px_2px_rgba(46,87,232,0.25)]'
          : 'bg-color-grey border-transparent'
      } flex flex-row items-center ml-6 rounded-[5px] border-[1px]`}
      data-testid='input-container'
    >
      <div className='px-[18px]'>
        <img src={searchIcon} alt='search-icon' className='h-6' />
      </div>
      <input
        placeholder='Filter by exercise title'
        value={activeInputValue}
        className={` ${
          isInputActive ? 'bg-color-white' : 'bg-color-grey '
        } w-[416px] h-[48px] outline-none rounded-[5px] text-color-primary placeholder-color-secondary`}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={handleChange}
        data-testid='search-input'
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  const {
    activeState: {activeTrack, activeOrder, activeInputValue},
  } = state;
  return {activeTrack, activeOrder, activeInputValue};
};

const mapDispatchToProps = (
  dispatch: Dispatch<TestimonialsAction | ActiveAction>,
) => bindActionCreators(
  {
    getTestimonials: (
      track: string,
      order: string,
      page: number,
      value: string,
    ) => GetTestimonials(track, order, page, value),
    setActivePage: (page: number) => SetActivePage(page),
    setActiveInputValue: (value: string) => SetActiveInputValue(value),
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
