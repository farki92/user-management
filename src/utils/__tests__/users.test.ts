import * as Users from 'utils/users';

// declarations
import {OrderTypes} from 'declarations';

describe('Users utils', () => {
  describe('createKeysAndOrders', () => {
    it('should create array from keys and values', () => {
      expect(
        Users.createKeysAndOrders({name: OrderTypes.ASCENDING})
      ).toStrictEqual({
        keys: ['name'],
        orders: [OrderTypes.ASCENDING]
      });
    });
  });
});
