import * as types from '../types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_TOASTER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
