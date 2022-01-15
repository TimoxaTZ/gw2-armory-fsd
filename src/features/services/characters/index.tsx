import { Actions, Reducer } from './store'
import * as Selectors from './selectors'
import RestAPI from './api'
import { useContainer } from './container'

export const characters = {
  Actions,
  RestAPI,
  Selectors,
  useContainer,
  Reducer,
}
