import {createReducer, ActionType} from 'typesafe-actions';

// actions
import * as Actions from 'actions/users';

// declarations
import {TUsersState, UserModalStatuses} from 'declarations';
import {DEFAULT_USER_FORM_DATA} from 'constants/users';

export const defaultState: TUsersState = {
  data: [],
  isLoading: false,
  errors: [],
  formData: DEFAULT_USER_FORM_DATA,
  modalStatus: UserModalStatuses.SLEEP
};

export default createReducer<TUsersState, ActionType<typeof Actions>>(
  defaultState
)
  .handleAction(Actions.setModalStatus, (state, {payload}) => ({
    ...state,
    modalStatus: payload
  }))
  .handleAction(Actions.setData, (state, {payload}) => ({
    ...state,
    data: payload
  }))
  .handleAction(Actions.setIsLoading, (state, {payload}) => ({
    ...state,
    isLoading: payload
  }))
  .handleAction(Actions.setFormData, (state, {payload}) => ({
    ...state,
    formData: {...state.formData, ...payload}
  }))
  .handleAction(Actions.setErrors, (state, {payload}) => ({
    ...state,
    errors: payload
  }));
