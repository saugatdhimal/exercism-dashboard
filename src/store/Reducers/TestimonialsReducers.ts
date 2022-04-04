/* eslint-disable @typescript-eslint/no-explicit-any */

import {TestimonialsAction} from '@store/Actions';
import {TestimonialsActionType} from '@store/ActionTypes';

export interface InitialState {
  loading: boolean;
  data: any;
  errorMsg: string;
  totalPages: number;
  totalTestimonials: number;
}

const defaultState = {
  loading: false,
  data: [],
  errorMsg: '',
  totalPages: 0,
  totalTestimonials: 0,
};

const TestimonialsReducer = (
  state: InitialState = defaultState,
  action: TestimonialsAction,
) => {
  switch (action.type) {
  case TestimonialsActionType.TESTIMONIALS_LOADING:
    return {
      ...state,
      loading: true,
      errorMsg: '',
    };
  case TestimonialsActionType.TESTIMONIALS_SUCCESS:
    return {
      loading: false,
      data: action.payload,
      totalPages: action.totalPages,
      totalTestimonials: action.totalTestimonials,
      errorMsg: '',
    };
  case TestimonialsActionType.TESTIMONIALS_FAIL:
    return {
      ...state,
      loading: false,
      errorMsg: 'Oops something went wrong',
    };
  default:
    return state;
  }
};

export default TestimonialsReducer;
