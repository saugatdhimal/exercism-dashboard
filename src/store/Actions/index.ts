import {
  ActiveActionType,
  TestimonialsActionType,
  TracksActionType,
} from '@store/ActionTypes';

interface TracksLoading {
  type: TracksActionType.TRACKS_LOADING;
}

interface TracksSuccess {
  type: TracksActionType.TRACKS_SUCCESS;
  payload: unknown;
  testimonialTracks: unknown;
  trackCounts: unknown;
  totalTrackCount: number;
}

interface TracksFail {
  type: TracksActionType.TRACKS_FAIL;
}

interface TestimonialsLoading {
  type: TestimonialsActionType.TESTIMONIALS_LOADING;
}

interface TestimonialsSuccess {
  type: TestimonialsActionType.TESTIMONIALS_SUCCESS;
  payload: unknown;
  totalPages: number;
  totalTestimonials: number;
}

interface TestimonialsFail {
  type: TestimonialsActionType.TESTIMONIALS_FAIL;
}

interface ActiveTrack {
  type: ActiveActionType.SET_ACTIVE_TRACK;
  payload: string;
}

interface ActiveOrder {
  type: ActiveActionType.SET_ACTIVE_ORDER;
  payload: string;
}

interface ActivePage {
  type: ActiveActionType.SET_ACTIVE_PAGE;
  payload: number;
}

interface ActiveInputValue {
  type: ActiveActionType.SET_ACTIVE_INPUT_VALUE;
  payload: string;
}

export type TracksAction = TracksLoading | TracksSuccess | TracksFail;
export type TestimonialsAction = TestimonialsLoading | TestimonialsSuccess | TestimonialsFail;
export type ActiveAction = ActiveTrack | ActiveOrder | ActivePage | ActiveInputValue;
