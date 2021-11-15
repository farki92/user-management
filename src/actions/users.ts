import {createAction} from 'typesafe-actions';

// declarations
import {FilterTypes, TUser, TUserDto, UserModalStatuses} from 'declarations';
import {TDispatch, TState} from 'declarations';

// constants
import {DEFAULT_USER_FORM_DATA, USER_FORM_DATA_INPUTS} from 'constants/users';
import {USERS_URL} from 'constants/api';

// selectors
import {getUsersErrors, getUsersFormData} from 'selectors/users';

// utils
import {isEmpty, omit} from 'lodash';
import {fetchData, patchData, postData} from 'utils/requests';

export const setModalStatus =
  createAction('SET/modalStatus')<UserModalStatuses>();
export const setFormData = createAction('SET/formData')<Partial<TUserDto>>();
export const setErrors = createAction('SET/errors')<string[]>();
export const setData = createAction('SET/data')<TUser[]>();
export const setIsLoading = createAction('SET/isLoading')<boolean>();
export const setFilter = createAction('SET/filter')<string>();
export const setOrder =
  createAction('SET/order')<Record<string, FilterTypes>>();

export const resetFormData = () => (dispatch: TDispatch) =>
  dispatch(setFormData(DEFAULT_USER_FORM_DATA));

export const removeError =
  (key: string) => (dispatch: TDispatch, getState: () => TState) => {
    const errors = getUsersErrors(getState());
    dispatch(setErrors(errors.filter((field) => field !== key)));
  };

export const addError =
  (key: string) => (dispatch: TDispatch, getState: () => TState) => {
    const errors = getUsersErrors(getState());
    dispatch(setErrors([...errors, key]));
  };

export const fetchUsers = (query: string) => async (dispatch: TDispatch) => {
  dispatch(setIsLoading(true));
  const users = await fetchData<TUser[]>(`${USERS_URL}?${query}`);
  if (users) dispatch(setData(users));
  dispatch(setIsLoading(false));
};

export const validateFormData =
  () => (dispatch: TDispatch, getState: () => TState) => {
    const formData = getUsersFormData(getState());
    USER_FORM_DATA_INPUTS.forEach(({key, required}) => {
      if (required && typeof formData[key] === 'string' && !formData[key]) {
        dispatch(addError(key));
      }
    });
  };

export const udpateUser =
  (usersQueryString: string) =>
  async (dispatch: TDispatch, getState: () => TState) => {
    dispatch(validateFormData());
    const state = getState();
    const errors = getUsersErrors(state);
    const formData = getUsersFormData(state);
    if (isEmpty(errors) && formData.id) {
      dispatch(setIsLoading(true));
      const user = await patchData<TUser, TUserDto>(
        `${USERS_URL}/${formData.id}`,
        omit(formData, 'id')
      );
      if (user) {
        dispatch(fetchUsers(usersQueryString));
        dispatch(setModalStatus(UserModalStatuses.SLEEP));
        dispatch(resetFormData());
      }
      dispatch(setIsLoading(false));
    }
  };

export const createUser =
  (usersQueryString: string) =>
  async (dispatch: TDispatch, getState: () => TState) => {
    dispatch(validateFormData());
    const state = getState();
    const errors = getUsersErrors(state);
    const formData = getUsersFormData(state);
    if (isEmpty(errors)) {
      dispatch(setIsLoading(true));
      const user = await postData<TUser, TUserDto>(
        `${USERS_URL}`,
        omit(formData, 'id')
      );
      if (user) {
        dispatch(fetchUsers(usersQueryString));
        dispatch(setModalStatus(UserModalStatuses.SLEEP));
        dispatch(resetFormData());
      }
      dispatch(setIsLoading(false));
    }
  };
