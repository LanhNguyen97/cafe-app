import { ReduxTypes } from "../actions/constants";

const initState = { isLoading: true };

const cafeReducer = (state = initState, action) => {
  switch (action.type) {
    case ReduxTypes.GET_LIST:
      state.isLoading = true;
      return { ...state };

    case ReduxTypes.GET_LIST_DONE:
      state.dataCafe = Object.assign([], action.payload);
      state.isLoading = false;
      return { ...state };

    case ReduxTypes.CREATE:
      state.isLoading = true;
      return { ...state };

    case ReduxTypes.CREATE_DONE:
      state.isLoading = false;
      return { ...state };

    default:
      return state;
  }
}

export default cafeReducer;