import * as ReactRouterDom from 'react-router-dom';
import * as ReactRedux from 'react-redux';

import * as Hooks from 'hooks/users';

// declarations
import {OrderTypes} from 'declarations';

jest.mock('react-router-dom');
jest.mock('react-redux');

describe('Users hooks', () => {
  describe('useUserQueryString', () => {
    it('returns default queryString and params', () => {
      jest
        .spyOn(ReactRouterDom, 'useLocation')
        .mockReturnValueOnce({search: ''} as ReactRouterDom.Location);

      expect(Hooks.useUserQueryString()).toStrictEqual({
        queryString: 'page=1&pageSize=100',
        params: {pageSize: '100', page: '1'}
      });
    });

    it('returns queryString and params', () => {
      jest.spyOn(ReactRouterDom, 'useLocation').mockReturnValueOnce({
        search: 'page=2&pageSize=200'
      } as ReactRouterDom.Location);

      expect(Hooks.useUserQueryString()).toStrictEqual({
        queryString: 'page=2&pageSize=200',
        params: {pageSize: '200', page: '2'}
      });
    });
  });

  describe('useFilter', () => {
    it('returns filter and setFilter method', () => {
      const dispatch = jest.fn();
      jest.spyOn(ReactRedux, 'useDispatch').mockReturnValueOnce(dispatch);
      jest.spyOn(ReactRedux, 'useSelector').mockReturnValueOnce('test');

      const filterHook = Hooks.useFilter();

      expect(filterHook).toHaveProperty('filter', 'test');
      expect(filterHook).toHaveProperty('setFilter');

      filterHook.setFilter('test2');

      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });

  describe('useOrder', () => {
    const dispatch = jest.fn();
    beforeEach(() => {
      jest.resetAllMocks();
    });

    it('returns order and setOrder method', () => {
      jest.spyOn(ReactRedux, 'useDispatch').mockReturnValueOnce(dispatch);
      jest.spyOn(ReactRedux, 'useSelector').mockReturnValueOnce({});

      const orderHook = Hooks.useOrder();

      expect(orderHook).toHaveProperty('order', {});
      expect(orderHook).toHaveProperty('setOrder');
    });

    it('adds order item', () => {
      jest.spyOn(ReactRedux, 'useDispatch').mockReturnValueOnce(dispatch);
      jest
        .spyOn(ReactRedux, 'useSelector')
        .mockReturnValueOnce({balance: OrderTypes.ASCENDING});

      const {setOrder} = Hooks.useOrder();

      // add the balance key in order object
      setOrder({key: 'balance', value: OrderTypes.ASCENDING});

      expect(dispatch).toHaveBeenCalledTimes(1);
    });

    it('removes order item', () => {
      jest.spyOn(ReactRedux, 'useDispatch').mockReturnValueOnce(dispatch);
      jest.spyOn(ReactRedux, 'useSelector').mockReturnValueOnce({});

      const {setOrder} = Hooks.useOrder();

      // remove the balance key from order object
      setOrder({key: 'balance', value: OrderTypes.ASCENDING});

      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
