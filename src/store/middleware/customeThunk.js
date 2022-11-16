export const customeThunk = (store) => (next) => (action) => {
  if (typeof action !== "function") {
    return next(action);
  }

  action(store.getState.bind(store), store.dispatch.bind(store));
};
