import {createSelector} from 'reselect';

// declarations
import {TState} from 'declarations';

export const getUsers = (state: TState) => state.users;

export const getUsersData = createSelector(getUsers, ({data}) => data);
export const getUsersIsLoading = createSelector(
  getUsers,
  ({isLoading}) => isLoading
);
export const getUsersErrors = createSelector(getUsers, ({errors}) => errors);
export const getUsersFormData = createSelector(
  getUsers,
  ({formData}) => formData
);
export const getUsersModalStatus = createSelector(
  getUsers,
  ({modalStatus}) => modalStatus
);
