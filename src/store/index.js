// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';
// import { configureStore } from '@reduxjs/toolkit';
// // import filters from '../components/heroesFilters/filterSlice';
// // import heroes from '../components/heroesList/heroesSlice';

// const store = configureStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action
    });
  }

  return next(action);
};

const store = configureStore( {
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringMiddleware),
  devtools: process.env.NODE_ENV !== "production"
});

export default store;