import * as Actions from 'actions/users';
import reducer from 'reducers/users';

// constants
import {mockUser, usersLoadedState} from 'constants/mocks/users';

// declarations
import {OrderTypes, UserModalStatuses} from 'declarations';

describe('Users reducer', () => {
  it('sets modalStatus', () => {
    expect(
      reducer(usersLoadedState, Actions.setModalStatus(UserModalStatuses.EDIT))
    ).toStrictEqual({
      ...usersLoadedState,
      modalStatus: UserModalStatuses.EDIT
    });
  });

  it('sets order', () => {
    const order = {balance: OrderTypes.ASCENDING};
    expect(reducer(usersLoadedState, Actions.setOrder(order))).toStrictEqual({
      ...usersLoadedState,
      order
    });
  });

  it('sets filter', () => {
    expect(
      reducer(usersLoadedState, Actions.setFilter('filter'))
    ).toStrictEqual({
      ...usersLoadedState,
      filter: 'filter'
    });
  });

  it('sets data', () => {
    expect(
      reducer(usersLoadedState, Actions.setData([mockUser]))
    ).toStrictEqual({
      ...usersLoadedState,
      data: [mockUser]
    });
  });

  it('sets isLoading', () => {
    expect(reducer(usersLoadedState, Actions.setIsLoading(true))).toStrictEqual(
      {
        ...usersLoadedState,
        isLoading: true
      }
    );
  });

  it('sets formData', () => {
    const formData = {firstName: 'testName'};
    expect(
      reducer(usersLoadedState, Actions.setFormData(formData))
    ).toStrictEqual({
      ...usersLoadedState,
      formData: {
        ...usersLoadedState.formData,
        ...formData
      }
    });
  });

  it('sets errors', () => {
    expect(
      reducer(usersLoadedState, Actions.setErrors(['test']))
    ).toStrictEqual({
      ...usersLoadedState,
      errors: ['test']
    });
  });
});
