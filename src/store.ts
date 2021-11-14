import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import rootReducer from 'reducers';

const configureStore = (context = {}) => {
  if (context) thunk.withExtraArgument(context);
  let middlewares: any = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, createLogger({collapsed: true})];
  }

  middlewares = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, middlewares);

  return store;
};

export default configureStore;
