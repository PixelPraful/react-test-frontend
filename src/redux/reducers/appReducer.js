import initialState from './initialState';

export default function appReducer (currentState, action) {
  const state = currentState || initialState.app;
  switch (action.type) {
    default:
      return state;
  }
}
