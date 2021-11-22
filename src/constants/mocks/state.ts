import {usersInitialState, usersLoadedState} from 'constants/mocks/users';

import {TState} from 'declarations';

export const initialState: TState = {
  users: usersInitialState
};
export const loadedState: TState = {
  users: usersLoadedState
};
