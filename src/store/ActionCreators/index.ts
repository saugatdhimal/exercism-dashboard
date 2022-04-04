/* eslint-disable max-len */
import axios from 'axios';
import {Dispatch} from 'redux';

import {
  ActiveAction, TestimonialsAction, TracksAction,
} from '@store/Actions';
import {
  ActiveActionType, TestimonialsActionType, TracksActionType,
} from '@store/ActionTypes';

const tracksUrl = 'https://exercism.org/api/v2/tracks';
const testimonialUrl = 'https://exercism.org/api/v2/hiring/testimonials';

export const GetTracks = () => async (dispatch: Dispatch<TracksAction>) => {
  try {
    dispatch({
      type: TracksActionType.TRACKS_LOADING,
    });

    const res = await axios.get(tracksUrl);
    const Res = await axios.get(testimonialUrl);

    dispatch({
      type: TracksActionType.TRACKS_SUCCESS,
      payload: res.data.tracks,
      testimonialTracks: Res.data.testimonials.tracks,
      trackCounts: Res.data.testimonials.track_counts,
      totalTrackCount: Res.data.testimonials.pagination.total_count,
    });
  } catch (error) {
    dispatch({
      type: TracksActionType.TRACKS_FAIL,
    });
  }
};

export const GetTestimonials = (track = 'All', order = 'newest_first', page = 1, exercise?: string) => async (dispatch: Dispatch<TestimonialsAction>) => {
  try {
    dispatch({
      type: TestimonialsActionType.TESTIMONIALS_LOADING,
    });

    let res;

    if (track === 'All') {
      res = await axios.get(testimonialUrl, {params: {page, exercise, order}});
    } else {
      res = await axios.get(testimonialUrl, {params: {page, track, exercise, order}});
    }

    dispatch({
      type: TestimonialsActionType.TESTIMONIALS_SUCCESS,
      payload: res.data.testimonials.results,
      totalPages: res.data.testimonials.pagination.total_pages,
      totalTestimonials: res.data.testimonials.pagination.total_count,
    });
  } catch (error) {
    dispatch({
      type: TestimonialsActionType.TESTIMONIALS_FAIL,
    });
  }
};

export const SetActiveTrack = (data: string) => (dispatch: Dispatch<ActiveAction>) => {
  dispatch({
    type: ActiveActionType.SET_ACTIVE_TRACK,
    payload: data,
  });
};

export const SetActiveOrder = (data: string) => (dispatch: Dispatch<ActiveAction>) => {
  dispatch({
    type: ActiveActionType.SET_ACTIVE_ORDER,
    payload: data,
  });
};

export const SetActivePage = (data: number) => (dispatch: Dispatch<ActiveAction>) => {
  dispatch({
    type: ActiveActionType.SET_ACTIVE_PAGE,
    payload: data,
  });
};

export const SetActiveInputValue = (data: string) => (dispatch: Dispatch<ActiveAction>) => {
  dispatch({
    type: ActiveActionType.SET_ACTIVE_INPUT_VALUE,
    payload: data,
  });
};
