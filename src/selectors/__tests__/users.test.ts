import * as Users from 'selectors/users';

// constants
import {loadedState} from 'constants/mocks/state';

describe('Users selectors', () => {
  describe('getUsers', () => {
    it('returns users state', () => {
      expect(Users.getUsers(loadedState)).toStrictEqual(loadedState.users);
    });
  });

  describe('getUsersFilter', () => {
    it('returns users filter', () => {
      expect(Users.getUsersFilter(loadedState)).toBe(loadedState.users.filter);
    });
  });

  describe('getUsersOrder', () => {
    it('returns users order', () => {
      expect(Users.getUsersOrder(loadedState)).toStrictEqual(
        loadedState.users.order
      );
    });
  });

  describe('getUsersData', () => {
    it('returns users data', () => {
      expect(Users.getUsersData(loadedState)).toStrictEqual(
        loadedState.users.data
      );
    });
  });

  describe('getFilteredAndOrderedUsersData', () => {
    it('returns unfiltered and unordered users data', () => {
      expect(
        Users.getFilteredAndOrderedUsersData({
          ...loadedState,
          users: {
            ...loadedState.users,
            filter: '',
            order: {}
          }
        })
      ).toStrictEqual(loadedState.users.data);
    });

    it('returns filtered and ordered users data', () => {
      expect(Users.getFilteredAndOrderedUsersData(loadedState)).toStrictEqual(
        loadedState.users.data.reverse()
      );
    });
  });

  describe('getUsersIsLoading', () => {
    it('returns users isLoading', () => {
      expect(Users.getUsersIsLoading(loadedState)).toBe(
        loadedState.users.isLoading
      );
    });
  });

  describe('getUsersErrors', () => {
    it('returns users errors', () => {
      expect(Users.getUsersErrors(loadedState)).toStrictEqual(
        loadedState.users.errors
      );
    });
  });

  describe('getUsersFormData', () => {
    it('returns users formData', () => {
      expect(Users.getUsersFormData(loadedState)).toStrictEqual(
        loadedState.users.formData
      );
    });
  });

  describe('getUsersModalStatus', () => {
    it('returns users modalStatus', () => {
      expect(Users.getUsersModalStatus(loadedState)).toStrictEqual(
        loadedState.users.modalStatus
      );
    });
  });
});
