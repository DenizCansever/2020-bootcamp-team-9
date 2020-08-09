import produce, { enableES5 } from 'immer';
import { GET_MOVIES } from './constants';

enableES5(); // For EcmaScript support

export const initialState = {
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_MOVIES:
        break;
      default:
        return state;
    }
  });

export const selectAppReducer = state => state.appReducer.linkList;

export default appReducer;