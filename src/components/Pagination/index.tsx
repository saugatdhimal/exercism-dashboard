import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import Button, {NumBtn} from '@components/Button';

import {RootState} from '@store/Reducers';
import {GetTestimonials, SetActivePage} from '@store/ActionCreators';
import {InitialState as TestimonialObj} from '@store/Reducers/TestimonialsReducers';
import {ActiveAction, TestimonialsAction} from '@store/Actions';

export interface Props {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}

interface StoreProps {
  getTestimonials(
    track: string,
    order: string,
    page: number,
    value: string,
  ): void;
  setActivePage(page: number): void;
  testimonials: TestimonialObj;
  activeTrack: string;
  activeOrder: string;
  activePage: number;
  activeInputValue: string;
}

export const Pagination: React.FC<Props> = ({
  page,
  totalPages,
  handlePagination,
}) => (
  <div
    className='flex justify-between gap-[20px] w-full pt-[17px] pb-[14px] px-[32px]'
    data-testid='pagination'
  >
    <div>
      <Button
        btnType='previous'
        disabled={page <= 1}
        onClick={() => handlePagination(page - 1)}
      />
    </div>
    <div className='flex gap-[12px]'>
      {totalPages > 0 && (
        <NumBtn
          onClick={() => handlePagination(1)}
          num={1}
          isActive={page === 1}
        />
      )}
      {page > 3 && <div className='flex items-center'>...</div>}
      {page === totalPages && totalPages > 3 && (
        <NumBtn onClick={() => handlePagination(page - 2)} num={page - 2} />
      )}
      {page > 2 && (
        <NumBtn onClick={() => handlePagination(page - 1)} num={page - 1} />
      )}
      {page !== 1 && page !== totalPages && (
        <NumBtn onClick={() => handlePagination(page)} num={page} isActive />
      )}
      {page < totalPages - 1 && (
        <NumBtn onClick={() => handlePagination(page + 1)} num={page + 1} />
      )}
      {page === 1 && totalPages > 3 && (
        <NumBtn onClick={() => handlePagination(page + 2)} num={page + 2} />
      )}
      {page < totalPages - 2 && <div className='flex items-center'>...</div>}
      {totalPages > 1 && (
        <NumBtn
          onClick={() => handlePagination(totalPages)}
          num={totalPages}
          isActive={page === totalPages}
        />
      )}
    </div>
    <div>
      <Button
        btnType='next'
        disabled={page >= totalPages}
        onClick={() => handlePagination(page + 1)}
      />
    </div>
  </div>
);

const PaginationFooter: React.FC<StoreProps> = ({
  getTestimonials,
  setActivePage,
  testimonials,
  activeTrack,
  activeOrder,
  activePage,
  activeInputValue,
}) => {
  const handlePages = useCallback(
    (updatePage: number) => {
      setActivePage(updatePage);
      getTestimonials(activeTrack, activeOrder, updatePage, activeInputValue);
    },
    [
      activeInputValue,
      activeOrder,
      activeTrack,
      getTestimonials,
      setActivePage,
    ],
  );

  return (
    <div className='rounded-b-lg border-t-[1px] border-color-border-alt'>
      {!testimonials.errorMsg && (
        <Pagination
          page={activePage}
          totalPages={testimonials.totalPages}
          handlePagination={handlePages}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  const {
    testimonials,
    activeState: {activeTrack, activeOrder, activePage, activeInputValue},
  } = state;
  return {testimonials, activeTrack, activeOrder, activePage, activeInputValue};
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
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(PaginationFooter);
