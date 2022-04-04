/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {render as rtlRender} from '@testing-library/react';
import reducers from '@store/Reducers';

interface InitialState {
  tracks: {
    loading: boolean;
    data: any;
    testimonialTracks: any;
    trackCounts: any;
    totalTrackCount: number;
    errorMsg: string;
  };
  testimonials: {
    loading: boolean;
    data: any;
    totalPages: number;
    totalTestimonials: number;
    errorMsg: string;
  };
  activeState: {
    activeTrack: string;
    activeOrder: string;
    activePage: number;
    activeInputValue: string;
  };
}

export const initialState: InitialState = {
  tracks: {
    loading: false,
    data: [],
    testimonialTracks: [],
    trackCounts: {},
    totalTrackCount: 0,
    errorMsg: '',
  },
  testimonials: {
    loading: false,
    data: [],
    totalPages: 0,
    totalTestimonials: 0,
    errorMsg: '',
  },
  activeState: {
    activeTrack: 'All',
    activeOrder: 'newest_first',
    activePage: 1,
    activeInputValue: '',
  },
};

export const renderWithRedux = (
  component: React.ReactNode,
  state?: InitialState,
) => {
  const store = createStore(
    reducers,
    state || initialState,
    applyMiddleware(thunk),
  );
  return {...rtlRender(<Provider store={store}>{component}</Provider>), store};
};
