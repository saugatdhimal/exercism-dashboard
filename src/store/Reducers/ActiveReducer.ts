import {ActiveAction} from '@store/Actions';
import {ActiveActionType} from '@store/ActionTypes';

interface InitialState {
  activeTrack: string;
  activeOrder: string;
  activePage: number;
  activeInputValue: string;
}

const defaultState = {
  activeTrack: 'All',
  activeOrder: 'newest_first',
  activePage: 1,
  activeInputValue: '',
};

const ActiveReducer = (
  state: InitialState = defaultState,
  action: ActiveAction,
) => {
  switch (action.type) {
  case ActiveActionType.SET_ACTIVE_TRACK:
    return {...state, activeTrack: action.payload};
  case ActiveActionType.SET_ACTIVE_ORDER:
    return {...state, activeOrder: action.payload};
  case ActiveActionType.SET_ACTIVE_PAGE:
    return {...state, activePage: action.payload};
  case ActiveActionType.SET_ACTIVE_INPUT_VALUE:
    return {...state, activeInputValue: action.payload};
  default:
    return state;
  }
};

export default ActiveReducer;
