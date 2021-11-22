import {DEFAULT_USER_FORM_DATA} from 'constants/users';

import {OrderTypes, UserModalStatuses, TUsersState, TUser} from 'declarations';

export const mockUser: TUser = {
  id: 'id',
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
  country: 'country',
  title: 'title',
  balance: '0',
  about: 'about',
  avatar: 'avatar',
  gender: 'gender',
  birthdate: 'birthdate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export const usersInitialState: TUsersState = {
  data: [],
  isLoading: false,
  errors: [],
  formData: DEFAULT_USER_FORM_DATA,
  modalStatus: UserModalStatuses.SLEEP,
  filter: '',
  order: {}
};
export const usersLoadedState: TUsersState = {
  data: new Array(3).fill(null).map((_, index) => ({
    ...Object.keys(mockUser).reduce(
      (acc, key) => ({
        ...acc,
        [key]: `${mockUser[key]}_${index}`
      }),
      {}
    )
  })) as TUser[],
  isLoading: false,
  errors: [],
  formData: DEFAULT_USER_FORM_DATA,
  modalStatus: UserModalStatuses.SLEEP,
  filter: 'first',
  order: {
    balance: OrderTypes.DESCENDING
  }
};
