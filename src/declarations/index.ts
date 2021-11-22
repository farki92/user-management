import {ThunkDispatch} from 'redux-thunk';
import {Action as TAction} from 'redux';

export type TUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  title: string;
  balance: string;
  about: string;
  avatar: string;
  gender: string;
  birthdate: string;
  createdAt: string;
  updatedAt: string;
};

export type TUserDto = {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  title: string;
  balance: string;
};

export enum UserModalActions {
  SET_MODAL_STATUS,
  SET_VALUE,
  SET_ERROR_FIELD,
  SET_IS_LOADING
}

export enum UserModalStatuses {
  SLEEP,
  EDIT,
  CREATE
}

export type TUserModalReducerState = {
  status: UserModalStatuses;
  formData: TUserDto;
  errors: string[];
};

export type TUsersState = {
  data: TUser[];
  isLoading: boolean;
  errors: string[];
  formData: TUserDto;
  modalStatus: UserModalStatuses;
  filter: string;
  order: Record<string, OrderTypes>;
};

export type TState = {
  users: TUsersState;
};

export type TDispatch = ThunkDispatch<TState, null, TAction>;

export enum OrderTypes {
  ASCENDING = 'asc',
  DESCENDING = 'desc'
}
