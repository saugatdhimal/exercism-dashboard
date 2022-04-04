/* eslint-disable @typescript-eslint/no-explicit-any */

import {TracksAction} from '@store/Actions';
import {TracksActionType} from '@store/ActionTypes';

export interface InitialState {
  loading: boolean;
  data: any;
  testimonialTracks: any;
  trackCounts: any;
  totalTrackCount: number;
  errorMsg: string;
}

const defaultState = {
  loading: false,
  data: [],
  testimonialTracks: [],
  trackCounts: {},
  totalTrackCount: 0,
  errorMsg: '',
};

const TracksReducer = (
  state: InitialState = defaultState,
  action: TracksAction,
) => {
  switch (action.type) {
  case TracksActionType.TRACKS_LOADING:
    return {
      ...state,
      loading: true,
      errorMsg: '',
    };
  case TracksActionType.TRACKS_SUCCESS:
    return {
      loading: false,
      data: action.payload,
      testimonialTracks: action.testimonialTracks,
      trackCounts: action.trackCounts,
      totalTrackCount: action.totalTrackCount,
      errorMsg: '',
    };
  case TracksActionType.TRACKS_FAIL:
    return {
      ...state,
      loading: false,
      errorMsg: 'Oops something went wrong',
    };
  default:
    return state;
  }
};

export default TracksReducer;
