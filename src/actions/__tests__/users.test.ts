import * as Users from 'actions/users';
import * as Requests from 'utils/requests';

// constants
import {DEFAULT_USER_FORM_DATA} from 'constants/users';
import {mockUser} from 'constants/mocks/users';
import {initialState} from 'constants/mocks/state';

describe('Users actions', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('resetFormData', () => {
    it('calls dispatch with `setFormData(DEFAULT_USER_FORM_DATA)`', () => {
      Users.resetFormData()(dispatch);
      expect(dispatch).toHaveBeenCalledWith(
        Users.setFormData(DEFAULT_USER_FORM_DATA)
      );
    });
  });

  describe('addError', () => {
    it('calls dispatch with `setErrors(["test"])`', () => {
      Users.addError('test')(dispatch, () => initialState);
      expect(dispatch).toHaveBeenCalledWith(Users.setErrors(['test']));
    });
  });

  describe('fetchUsers', () => {
    it('calls dispatch 3 times when users is not null', async () => {
      jest
        .spyOn(Requests, 'fetchData')
        .mockReturnValueOnce(Promise.resolve([mockUser]));
      await Users.fetchUsers('page=1&pageSize=100')(dispatch);
      expect(Requests.fetchData).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledTimes(3);
    });

    it('calls dispatch 2 times when users is null', async () => {
      jest
        .spyOn(Requests, 'fetchData')
        .mockReturnValueOnce(Promise.resolve(null));
      await Users.fetchUsers('page=1&pageSize=100')(dispatch);
      expect(Requests.fetchData).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledTimes(2);
    });
  });
});
