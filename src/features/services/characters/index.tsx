import { RestAPI } from './api';
import { useContainer } from './container';
import * as Selectors from './selectors';
import { Actions, Reducer } from './store';

export const characters = {
  Actions,
  RestAPI,
  Selectors,
  useContainer,
  Reducer,
};
