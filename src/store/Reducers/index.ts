import {combineReducers} from 'redux';
import ActiveReducer from './ActiveReducer';
import TestimonialsReducer from './TestimonialsReducers';
import TracksReducer from './TracksReducer';

const reducers = combineReducers({
  tracks: TracksReducer,
  testimonials: TestimonialsReducer,
  activeState: ActiveReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
