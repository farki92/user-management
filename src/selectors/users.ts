import {createSelector} from 'reselect';

// utils
import Fuse from 'fuse.js';
import {createKeysAndOrders} from 'utils/users';
import {isEmpty, orderBy} from 'lodash';

// declarations
import {TState} from 'declarations';

export const getUsers = (state: TState) => state.users;

export const getUsersFilter = createSelector(getUsers, ({filter}) => filter);

export const getUsersOrder = createSelector(getUsers, ({order}) => order);

export const getUsersData = createSelector(getUsers, ({data}) => data);

export const getFilteredAndOrderedUsersData = createSelector(
  getUsersData,
  getUsersFilter,
  getUsersOrder,
  (users, filter, order) => {
    let userList = users;
    if (filter.length > 2) {
      const fuse = new Fuse(userList, {
        keys: ['firstName', 'lastName', 'title'],
        threshold: 0.3
      });
      userList = fuse.search(filter).map((user) => user.item);
    }
    if (!isEmpty(order)) {
      const {keys, orders} = createKeysAndOrders(order);
      userList = orderBy(userList, keys, orders);
    }
    return userList;
  }
);

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
