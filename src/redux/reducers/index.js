import { combineReducers } from 'redux';
import sample from './sample';
import toaster from './toaster';
// import another from './another';

const appReducer = combineReducers({
  sample,
  toaster
  // another,
});

export default appReducer;
